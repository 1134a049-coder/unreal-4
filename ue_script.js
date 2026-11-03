/**
 * Unreal Engine Interactive Quiz & Certification Platform Logic
 * Features:
 * 1. 12 Chapters / 120 Questions (Teach Yourself UE4 Game Development in 24 Hours)
 * 2. Tri-state Language Switching: English 原文 / 英中雙語對照 (Bilingual) / 中文繁體
 * 3. Practice Mode (Instant Answer + In-depth Explanation) vs Exam Mode (30-min Timer + 20-pt Scoring)
 * 4. Smart Mistakes Notebook (錯題本) persisted in localStorage
 * 5. Full palette drawer navigation and statistics
 */

(function() {
  'use strict';

  // State Management
  const state = {
    mode: 'practice', // 'practice' | 'exam' | 'mistakes'
    language: 'bilingual', // 'en' | 'bilingual' | 'zh'
    currentChapterId: 'h01',
    currentIndex: 0, // 0 ~ (activeQuestions.length - 1)
    
    // User progress per question: { [qId]: { selectedIndex: number, isFlagged: boolean, isCorrect: boolean } }
    answers: {},
    
    // Mistakes IDs set in localStorage
    mistakes: new Set(),
    
    // Feature toggles
    showAnswer: true,
    showExplain: true,
    
    // Exam state
    examTimerInterval: null,
    examSecondsRemaining: 30 * 60, // 30 minutes
    examSubmitted: false
  };

  // DOM Elements
  const chapterSelect = document.getElementById('chapterSelect');
  const btnModePractice = document.getElementById('btnModePractice');
  const btnModeExam = document.getElementById('btnModeExam');
  const btnModeMistakes = document.getElementById('btnModeMistakes');
  const mistakesCountEl = document.getElementById('mistakesCount');
  
  const examControls = document.getElementById('examControls');
  const examTimer = document.getElementById('examTimer');
  const timerDisplay = document.getElementById('timerDisplay');
  const btnSubmitExam = document.getElementById('btnSubmitExam');
  
  const practiceBanner = document.getElementById('practiceBanner');
  const practiceCorrect = document.getElementById('practiceCorrect');
  const practiceWrong = document.getElementById('practiceWrong');
  const practiceRate = document.getElementById('practiceRate');
  
  const btnLangEn = document.getElementById('btnLangEn');
  const btnLangBi = document.getElementById('btnLangBi');
  const btnLangZh = document.getElementById('btnLangZh');
  
  const btnToggleAnswer = document.getElementById('btnToggleAnswer');
  const answerToggleText = document.getElementById('answerToggleText');
  const btnToggleExplain = document.getElementById('btnToggleExplain');
  const explainToggleText = document.getElementById('explainToggleText');
  const btnResetTest = document.getElementById('btnResetTest');
  
  const progressText = document.getElementById('progressText');
  const progressStat = document.getElementById('progressStat');
  const progressFill = document.getElementById('progressFill');
  
  const cardQNum = document.getElementById('cardQNum');
  const cardQChapter = document.getElementById('cardQChapter');
  const cardQType = document.getElementById('cardQType');
  const btnFlag = document.getElementById('btnFlag');
  const questionPromptEn = document.getElementById('questionPromptEn');
  const questionPromptZh = document.getElementById('questionPromptZh');
  const optionsContainer = document.getElementById('optionsContainer');
  
  const btnPrevQ = document.getElementById('btnPrevQ');
  const btnNextQ = document.getElementById('btnNextQ');
  const btnOpenDrawer = document.getElementById('btnOpenDrawer');
  const answeredCountBadge = document.getElementById('answeredCountBadge');
  const totalQuestionsBadge = document.getElementById('totalQuestionsBadge');
  
  const feedbackCard = document.getElementById('feedbackCard');
  const feedbackIcon = document.getElementById('feedbackIcon');
  const feedbackStatus = document.getElementById('feedbackStatus');
  const feedbackCorrectOpt = document.getElementById('feedbackCorrectOpt');
  const feedbackNotes = document.getElementById('feedbackNotes');
  
  const paletteSidebar = document.getElementById('paletteSidebar');
  const btnCloseDrawer = document.getElementById('btnCloseDrawer');
  const paletteGrid = document.getElementById('paletteGrid');
  const sideChapterTitle = document.getElementById('sideChapterTitle');
  const sideChapterTotal = document.getElementById('sideChapterTotal');
  const sideChapterAnswered = document.getElementById('sideChapterAnswered');
  
  const resultModal = document.getElementById('resultModal');
  const modalTestName = document.getElementById('modalTestName');
  const modalScore = document.getElementById('modalScore');
  const resCorrectCount = document.getElementById('resCorrectCount');
  const resWrongCount = document.getElementById('resWrongCount');
  const resUnansweredCount = document.getElementById('resUnansweredCount');
  const resAccuracy = document.getElementById('resAccuracy');
  const btnReviewExam = document.getElementById('btnReviewExam');
  const btnRestartExam = document.getElementById('btnRestartExam');
  const toastMessage = document.getElementById('toastMessage');

  // Load mistakes from localStorage
  function loadMistakes() {
    try {
      const saved = localStorage.getItem('ue_quiz_mistakes');
      if (saved) {
        state.mistakes = new Set(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not read mistakes from localStorage', e);
    }
    updateMistakesCount();
  }

  function saveMistakes() {
    try {
      localStorage.setItem('ue_quiz_mistakes', JSON.stringify(Array.from(state.mistakes)));
    } catch (e) {
      console.warn('Could not save mistakes to localStorage', e);
    }
    updateMistakesCount();
  }

  function updateMistakesCount() {
    if (mistakesCountEl) {
      mistakesCountEl.textContent = state.mistakes.size;
    }
  }

  // Active Questions List based on current mode & chapter
  function getActiveQuestions() {
    if (state.mode === 'mistakes') {
      const list = UE_QUIZ_DATA.questions.filter(q => state.mistakes.has(q.id));
      return list;
    }
    return UE_QUIZ_DATA.questions.filter(q => q.chapterId === state.currentChapterId);
  }

  function getCurrentQuestion() {
    const list = getActiveQuestions();
    if (list.length === 0) return null;
    if (state.currentIndex >= list.length) state.currentIndex = list.length - 1;
    if (state.currentIndex < 0) state.currentIndex = 0;
    return list[state.currentIndex];
  }

  function showToast(msg) {
    if (!toastMessage) return;
    toastMessage.textContent = msg;
    toastMessage.classList.add('show');
    setTimeout(() => {
      toastMessage.classList.remove('show');
    }, 2000);
  }

  // Populate Chapter Dropdown
  function initChapterSelect() {
    chapterSelect.innerHTML = '';
    UE_QUIZ_DATA.chapters.forEach(chap => {
      const opt = document.createElement('option');
      opt.value = chap.id;
      opt.textContent = `${chap.num}. ${chap.title} (${chap.titleZh})`;
      chapterSelect.appendChild(opt);
    });
    chapterSelect.value = state.currentChapterId;

    chapterSelect.addEventListener('change', (e) => {
      state.currentChapterId = e.target.value;
      state.currentIndex = 0;
      if (state.mode === 'exam') {
        startExamTimer();
      }
      renderAll();
    });
  }

  // Mode Switching
  function setMode(mode) {
    state.mode = mode;
    btnModePractice.classList.toggle('active', mode === 'practice');
    btnModeExam.classList.toggle('active', mode === 'exam');
    btnModeMistakes.classList.toggle('active', mode === 'mistakes');

    if (mode === 'exam') {
      examControls.style.display = 'flex';
      practiceBanner.style.display = 'none';
      startExamTimer();
    } else {
      clearInterval(state.examTimerInterval);
      examControls.style.display = 'none';
      practiceBanner.style.display = 'flex';
    }

    state.currentIndex = 0;
    renderAll();
  }

  // Language Switching
  function setLanguage(lang) {
    state.language = lang;
    btnLangEn.classList.toggle('active', lang === 'en');
    btnLangBi.classList.toggle('active', lang === 'bilingual');
    btnLangZh.classList.toggle('active', lang === 'zh');
    renderQuestionContent();
    renderOptions();
    showToast(`已切換至：${lang === 'en' ? 'English 原文' : lang === 'zh' ? '繁體中文' : '英中雙語對照'}`);
  }

  // Exam Timer
  function startExamTimer() {
    clearInterval(state.examTimerInterval);
    state.examSecondsRemaining = 30 * 60; // 30 minutes
    state.examSubmitted = false;
    updateTimerDisplay();

    state.examTimerInterval = setInterval(() => {
      state.examSecondsRemaining--;
      updateTimerDisplay();
      if (state.examSecondsRemaining <= 0) {
        clearInterval(state.examTimerInterval);
        submitExam();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(state.examSecondsRemaining / 60);
    const secs = state.examSecondsRemaining % 60;
    timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    examTimer.classList.toggle('urgent', state.examSecondsRemaining <= 300); // 5 mins
  }

  function submitExam() {
    clearInterval(state.examTimerInterval);
    state.examSubmitted = true;
    
    const list = getActiveQuestions();
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    list.forEach(q => {
      const record = state.answers[q.id];
      if (!record || record.selectedIndex === undefined) {
        unanswered++;
      } else if (record.isCorrect) {
        correct++;
      } else {
        wrong++;
      }
    });

    // 10 questions, each worth 2 points = 20 points max
    const points = correct * 2;
    const accuracy = list.length > 0 ? ((correct / list.length) * 100).toFixed(1) : '0';

    const chap = UE_QUIZ_DATA.chapters.find(c => c.id === state.currentChapterId);
    modalTestName.textContent = chap ? `${chap.title} - ${chap.titleZh}` : '章節測驗';
    modalScore.textContent = points;
    resCorrectCount.textContent = correct;
    resWrongCount.textContent = wrong;
    resUnansweredCount.textContent = unanswered;
    resAccuracy.textContent = `${accuracy}%`;

    resultModal.style.display = 'flex';
  }

  // Answer Selection
  function selectOption(q, optIndex) {
    if (state.mode === 'exam' && state.examSubmitted) return;

    const isCorrect = (optIndex === q.correctIndex);
    const isFirstAttempt = !state.answers[q.id];

    state.answers[q.id] = {
      ...(state.answers[q.id] || {}),
      selectedIndex: optIndex,
      isCorrect: isCorrect
    };

    // Update Mistakes Notebook
    if (!isCorrect) {
      state.mistakes.add(q.id);
      saveMistakes();
    } else {
      if (state.mode === 'mistakes') {
        // If in mistakes mode and answered correctly, optionally remove or keep
      }
    }

    renderOptions();
    renderFeedback();
    renderPalette();
    updateStats();
  }

  // Render Functions
  function renderAll() {
    renderQuestionCard();
    renderPalette();
    updateStats();
  }

  function renderQuestionCard() {
    const q = getCurrentQuestion();
    const list = getActiveQuestions();

    if (!q) {
      // Empty mistakes notebook or no questions
      cardQNum.textContent = '無題目';
      cardQChapter.textContent = state.mode === 'mistakes' ? '錯題本目前為空' : '無章節資料';
      cardQType.textContent = '-';
      questionPromptEn.textContent = state.mode === 'mistakes' ? '太棒了！目前沒有任何答錯的題目。' : '查無符合條件的考題。';
      questionPromptZh.style.display = 'none';
      optionsContainer.innerHTML = '';
      feedbackCard.style.display = 'none';
      btnPrevQ.disabled = true;
      btnNextQ.disabled = true;
      progressText.textContent = '0 / 0';
      progressStat.textContent = '已答 0 題';
      progressFill.style.width = '0%';
      return;
    }

    const chap = UE_QUIZ_DATA.chapters.find(c => c.id === q.chapterId);
    cardQNum.textContent = `Question ${state.currentIndex + 1}`;
    cardQChapter.textContent = chap ? chap.title : 'Unreal Engine 4';
    cardQType.textContent = q.type === 'TF' ? '是非判斷題' : '四選一單選題';

    // Flag button state
    const record = state.answers[q.id];
    btnFlag.classList.toggle('active', !!(record && record.isFlagged));

    // Question content & Options
    renderQuestionContent();
    renderOptions();
    renderFeedback();

    // Navigation buttons state
    btnPrevQ.disabled = (state.currentIndex === 0);
    btnNextQ.disabled = (state.currentIndex === list.length - 1);

    // Progress Bar
    const total = list.length;
    const answeredCount = list.filter(item => state.answers[item.id] && state.answers[item.id].selectedIndex !== undefined).length;
    progressText.textContent = `Question ${state.currentIndex + 1} of ${total}`;
    progressStat.textContent = `已答 ${answeredCount} 題`;
    progressFill.style.width = `${((state.currentIndex + 1) / total) * 100}%`;

    answeredCountBadge.textContent = answeredCount;
    totalQuestionsBadge.textContent = total;
  }

  function renderQuestionContent() {
    const q = getCurrentQuestion();
    if (!q) return;

    if (state.language === 'en') {
      questionPromptEn.style.display = 'block';
      questionPromptEn.textContent = q.question;
      questionPromptZh.style.display = 'none';
    } else if (state.language === 'zh') {
      questionPromptEn.style.display = 'none';
      questionPromptZh.style.display = 'block';
      questionPromptZh.textContent = q.questionZh;
    } else {
      // Bilingual
      questionPromptEn.style.display = 'block';
      questionPromptEn.textContent = q.question;
      questionPromptZh.style.display = 'block';
      questionPromptZh.textContent = q.questionZh;
    }
  }

  function renderOptions() {
    const q = getCurrentQuestion();
    if (!q) return;

    optionsContainer.innerHTML = '';
    const record = state.answers[q.id];
    const userSelected = record ? record.selectedIndex : undefined;
    const isAnswered = (userSelected !== undefined);
    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((optEn, idx) => {
      const optZh = q.optionsZh[idx] || '';
      const btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.type = 'button';

      // Selection state classes
      if (isAnswered) {
        if (state.mode === 'practice' || (state.mode === 'exam' && state.examSubmitted)) {
          if (state.showAnswer || (state.mode === 'exam' && state.examSubmitted)) {
            if (idx === q.correctIndex) {
              btn.classList.add('correct-ans');
            } else if (idx === userSelected) {
              btn.classList.add('wrong-ans');
            }
          }
        }
        if (idx === userSelected) {
          btn.classList.add('selected');
        }
      }

      const badge = document.createElement('span');
      badge.className = 'opt-badge';
      badge.textContent = letters[idx];

      const content = document.createElement('div');
      content.className = 'opt-content';

      if (state.language === 'en') {
        const textEn = document.createElement('div');
        textEn.className = 'opt-text';
        textEn.textContent = optEn;
        content.appendChild(textEn);
      } else if (state.language === 'zh') {
        const textZh = document.createElement('div');
        textZh.className = 'opt-text';
        textZh.textContent = optZh;
        content.appendChild(textZh);
      } else {
        // Bilingual
        const textEn = document.createElement('div');
        textEn.className = 'opt-text';
        textEn.textContent = optEn;
        const textZh = document.createElement('div');
        textZh.className = 'opt-text-zh';
        textZh.textContent = optZh;
        content.appendChild(textEn);
        content.appendChild(textZh);
      }

      btn.appendChild(badge);
      btn.appendChild(content);

      btn.addEventListener('click', () => selectOption(q, idx));
      optionsContainer.appendChild(btn);
    });
  }

  function renderFeedback() {
    const q = getCurrentQuestion();
    if (!q) {
      feedbackCard.style.display = 'none';
      return;
    }

    const record = state.answers[q.id];
    const isAnswered = record && (record.selectedIndex !== undefined);

    // In Exam mode before submitting, never show feedback
    if (state.mode === 'exam' && !state.examSubmitted) {
      feedbackCard.style.display = 'none';
      return;
    }

    if (!isAnswered || !state.showExplain) {
      feedbackCard.style.display = 'none';
      return;
    }

    feedbackCard.style.display = 'block';
    const letters = ['A', 'B', 'C', 'D'];
    const correctLetter = letters[q.correctIndex] || '';

    if (record.isCorrect) {
      feedbackIcon.textContent = '🎉';
      feedbackStatus.className = 'feedback-status correct';
      feedbackStatus.textContent = '作答正確！Excellent Answer';
    } else {
      feedbackIcon.textContent = '❌';
      feedbackStatus.className = 'feedback-status wrong';
      feedbackStatus.textContent = '作答錯誤，請詳讀專業解析';
    }

    feedbackCorrectOpt.textContent = `(${correctLetter}) ${q.correctText}`;
    feedbackNotes.textContent = q.explanation;
  }

  function renderPalette() {
    const list = getActiveQuestions();
    paletteGrid.innerHTML = '';

    list.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.textContent = idx + 1;
      btn.type = 'button';

      if (idx === state.currentIndex) {
        btn.classList.add('current');
      }

      const record = state.answers[q.id];
      if (record) {
        if (record.selectedIndex !== undefined) {
          btn.classList.add('answered');
          if (state.mode === 'practice' || (state.mode === 'exam' && state.examSubmitted)) {
            if (record.isCorrect) {
              btn.classList.add('correct');
            } else {
              btn.classList.add('wrong');
            }
          }
        }
        if (record.isFlagged) {
          btn.classList.add('flagged');
        }
      }

      btn.addEventListener('click', () => {
        state.currentIndex = idx;
        renderAll();
        // Close drawer on mobile
        if (window.innerWidth <= 1024) {
          paletteSidebar.classList.remove('open');
        }
      });

      paletteGrid.appendChild(btn);
    });

    // Update Summary in Palette
    const chap = UE_QUIZ_DATA.chapters.find(c => c.id === state.currentChapterId);
    if (sideChapterTitle) {
      sideChapterTitle.textContent = state.mode === 'mistakes' ? '錯題本清單' : (chap ? chap.num + '. ' + chap.title : 'Hour');
    }
    if (sideChapterTotal) {
      sideChapterTotal.textContent = `${list.length} 題`;
    }
    if (sideChapterAnswered) {
      const answered = list.filter(q => state.answers[q.id] && state.answers[q.id].selectedIndex !== undefined).length;
      sideChapterAnswered.textContent = `${answered} 題`;
    }
  }

  function updateStats() {
    const list = getActiveQuestions();
    let correct = 0;
    let wrong = 0;

    list.forEach(q => {
      const r = state.answers[q.id];
      if (r && r.selectedIndex !== undefined) {
        if (r.isCorrect) correct++;
        else wrong++;
      }
    });

    const totalAnswered = correct + wrong;
    const rate = totalAnswered > 0 ? ((correct / totalAnswered) * 100).toFixed(0) : 0;

    if (practiceCorrect) practiceCorrect.textContent = correct;
    if (practiceWrong) practiceWrong.textContent = wrong;
    if (practiceRate) practiceRate.textContent = `${rate}%`;
  }

  // Event Listeners Initialization
  function initEvents() {
    // Mode Buttons
    btnModePractice.addEventListener('click', () => setMode('practice'));
    btnModeExam.addEventListener('click', () => setMode('exam'));
    btnModeMistakes.addEventListener('click', () => setMode('mistakes'));

    // Language Buttons
    btnLangEn.addEventListener('click', () => setLanguage('en'));
    btnLangBi.addEventListener('click', () => setLanguage('bilingual'));
    btnLangZh.addEventListener('click', () => setLanguage('zh'));

    // Toggle Answer & Explain
    btnToggleAnswer.addEventListener('click', () => {
      state.showAnswer = !state.showAnswer;
      btnToggleAnswer.classList.toggle('active', state.showAnswer);
      answerToggleText.textContent = state.showAnswer ? '開啟' : '關閉';
      renderOptions();
      showToast(`即時答案顯示已${state.showAnswer ? '開啟' : '關閉'}`);
    });

    btnToggleExplain.addEventListener('click', () => {
      state.showExplain = !state.showExplain;
      btnToggleExplain.classList.toggle('active', state.showExplain);
      explainToggleText.textContent = state.showExplain ? '開啟' : '關閉';
      renderFeedback();
      showToast(`內容專業解釋已${state.showExplain ? '開啟' : '關閉'}`);
    });

    // Reset Chapter
    btnResetTest.addEventListener('click', () => {
      if (confirm('確定要清除當前章節的所有作答與標記紀錄嗎？')) {
        const list = getActiveQuestions();
        list.forEach(q => {
          delete state.answers[q.id];
        });
        state.currentIndex = 0;
        renderAll();
        showToast('已重置當前章節的作答紀錄！');
      }
    });

    // Flag Button
    btnFlag.addEventListener('click', () => {
      const q = getCurrentQuestion();
      if (!q) return;
      const cur = state.answers[q.id] || {};
      cur.isFlagged = !cur.isFlagged;
      state.answers[q.id] = cur;
      btnFlag.classList.toggle('active', cur.isFlagged);
      renderPalette();
      showToast(cur.isFlagged ? '★ 已將此題加入標記清單' : '已取消此題標記');
    });

    // Stage Navigation
    btnPrevQ.addEventListener('click', () => {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        renderAll();
      }
    });

    btnNextQ.addEventListener('click', () => {
      const list = getActiveQuestions();
      if (state.currentIndex < list.length - 1) {
        state.currentIndex++;
        renderAll();
      }
    });

    // Mobile Drawer Open / Close
    btnOpenDrawer.addEventListener('click', () => {
      paletteSidebar.classList.add('open');
    });

    btnCloseDrawer.addEventListener('click', () => {
      paletteSidebar.classList.remove('open');
    });

    // Exam Submit & Modal Buttons
    btnSubmitExam.addEventListener('click', () => {
      const list = getActiveQuestions();
      const unans = list.filter(q => !state.answers[q.id] || state.answers[q.id].selectedIndex === undefined).length;
      if (unans > 0) {
        if (!confirm(`尚有 ${unans} 題尚未作答，確定現在交卷計分嗎？`)) return;
      }
      submitExam();
    });

    btnReviewExam.addEventListener('click', () => {
      resultModal.style.display = 'none';
      state.currentIndex = 0;
      renderAll();
    });

    btnRestartExam.addEventListener('click', () => {
      resultModal.style.display = 'none';
      const list = getActiveQuestions();
      list.forEach(q => delete state.answers[q.id]);
      state.currentIndex = 0;
      startExamTimer();
      renderAll();
    });

    // Keyboard Shortcuts (Arrow Left / Right, 1/2/3/4 or A/B/C/D)
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      if (e.key === 'ArrowLeft') {
        if (state.currentIndex > 0) {
          state.currentIndex--;
          renderAll();
        }
      } else if (e.key === 'ArrowRight') {
        const list = getActiveQuestions();
        if (state.currentIndex < list.length - 1) {
          state.currentIndex++;
          renderAll();
        }
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const q = getCurrentQuestion();
        if (q) {
          const optIdx = parseInt(e.key) - 1;
          if (optIdx < q.options.length) selectOption(q, optIdx);
        }
      } else if (['a', 'b', 'c', 'd'].includes(e.key.toLowerCase())) {
        const q = getCurrentQuestion();
        if (q) {
          const map = { a: 0, b: 1, c: 2, d: 3 };
          const optIdx = map[e.key.toLowerCase()];
          if (optIdx < q.options.length) selectOption(q, optIdx);
        }
      }
    });
  }

  // Initialization
  function init() {
    loadMistakes();
    initChapterSelect();
    initEvents();
    renderAll();
  }

  init();
})();

