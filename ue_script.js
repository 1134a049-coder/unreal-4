/**
 * Unreal Engine Interactive Quiz & Certification Platform Logic
 * Features:
 * 1. 7 Chapters + 2 Comprehensive Tests (01_to_06_Test, 07_to_13_Texs) / 130 Questions
 * 2. Quad-state Language Switching: English 原文 / 英中雙語對照 / 精闢詳細版翻譯 / 中文繁體
 * 3. Practice Mode (Instant Answer + In-depth Explanation) vs Exam Mode (30/60-min Timer + 2-pt/Q Scoring)
 * 4. Smart Mistakes Notebook (錯題本) & Starred Filter (星號標註篩選) persisted in localStorage
 * 5. Full palette drawer navigation and statistics
 */

(function() {
  'use strict';

  // State Management
  const state = {
    mode: 'practice', // 'practice' | 'exam' | 'mistakes' | 'starred'
    language: 'bilingual', // 'en' | 'bilingual' | 'detailed' | 'zh'
    currentChapterId: 'h01',
    currentIndex: 0, // 0 ~ (activeQuestions.length - 1)
    
    // User progress per question: { [qId]: { selectedIndex: number, isFlagged: boolean, isCorrect: boolean } }
    answers: {},
    
    // Mistakes IDs set in localStorage
    mistakes: new Set(),
    
    // Feature toggles
    showAnswer: true,
    showExplain: true,
    filterStarredOnly: false,
    
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
  const btnModeStarred = document.getElementById('btnModeStarred');
  const mistakesCountEl = document.getElementById('mistakesCount');
  const starredCountEl = document.getElementById('starredCount');
  
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
  const btnLangDetailed = document.getElementById('btnLangDetailed');
  const btnLangZh = document.getElementById('btnLangZh');
  
  const btnFilterStarred = document.getElementById('btnFilterStarred');
  const filterStarredText = document.getElementById('filterStarredText');
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
  const answerHintBanner = document.getElementById('answerHintBanner');
  const answerHintText = document.getElementById('answerHintText');
  const detailedBreakdownBox = document.getElementById('detailedBreakdownBox');
  const breakdownContent = document.getElementById('breakdownContent');
  const keywordMemoryBox = document.getElementById('keywordMemoryBox');
  const memoryList = document.getElementById('memoryList');
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
  const modalScoreLabel = document.getElementById('modalScoreLabel');
  const resCorrectCount = document.getElementById('resCorrectCount');
  const resWrongCount = document.getElementById('resWrongCount');
  const resUnansweredCount = document.getElementById('resUnansweredCount');
  const resAccuracy = document.getElementById('resAccuracy');
  const btnReviewExam = document.getElementById('btnReviewExam');
  const btnRestartExam = document.getElementById('btnRestartExam');
  const toastMessage = document.getElementById('toastMessage');

  // LocalStorage Keys
  const STORAGE_KEYS = {
    answers: 'ue_quiz_answers',
    chapter: 'ue_quiz_chapter',
    lang: 'ue_quiz_lang',
    mode: 'ue_quiz_mode',
    showAnswer: 'ue_quiz_show_answer',
    showExplain: 'ue_quiz_show_explain',
    filterStarred: 'ue_quiz_filter_starred',
    currentIndex: 'ue_quiz_current_index',
    mistakes: 'ue_quiz_mistakes'
  };

  function getStarredCount() {
    return UE_QUIZ_DATA.questions.filter(q => state.answers[q.id] && state.answers[q.id].isFlagged).length;
  }

  function updateStarredCount() {
    if (starredCountEl) {
      starredCountEl.textContent = getStarredCount();
    }
  }

  // Load mistakes from localStorage
  function loadMistakes() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.mistakes);
      if (saved) {
        const validIds = new Set(UE_QUIZ_DATA.questions.map(q => q.id));
        const filtered = JSON.parse(saved).filter(id => validIds.has(id));
        state.mistakes = new Set(filtered);
        localStorage.setItem(STORAGE_KEYS.mistakes, JSON.stringify(filtered));
      }
    } catch (e) {
      console.warn('Could not read mistakes from localStorage', e);
    }
    updateMistakesCount();
  }

  function saveMistakes() {
    try {
      localStorage.setItem(STORAGE_KEYS.mistakes, JSON.stringify(Array.from(state.mistakes)));
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

  // Save / Load Application State to LocalStorage
  function saveAppState() {
    try {
      localStorage.setItem(STORAGE_KEYS.answers, JSON.stringify(state.answers));
      localStorage.setItem(STORAGE_KEYS.chapter, state.currentChapterId);
      localStorage.setItem(STORAGE_KEYS.lang, state.language);
      localStorage.setItem(STORAGE_KEYS.mode, state.mode);
      localStorage.setItem(STORAGE_KEYS.showAnswer, String(state.showAnswer));
      localStorage.setItem(STORAGE_KEYS.showExplain, String(state.showExplain));
      localStorage.setItem(STORAGE_KEYS.filterStarred, String(state.filterStarredOnly));
      localStorage.setItem(STORAGE_KEYS.currentIndex, String(state.currentIndex));
    } catch (e) {
      console.warn('Could not save app state to localStorage', e);
    }
  }

  function saveAnswers() {
    try {
      localStorage.setItem(STORAGE_KEYS.answers, JSON.stringify(state.answers));
    } catch (e) {
      console.warn('Could not save answers to localStorage', e);
    }
  }

  function saveCurrentIndex() {
    try {
      localStorage.setItem(STORAGE_KEYS.currentIndex, String(state.currentIndex));
    } catch (e) {
      console.warn('Could not save current index to localStorage', e);
    }
  }

  function loadStoredState() {
    try {
      // 1. 恢復所有章節已作答選項與標記
      const savedAnswers = localStorage.getItem(STORAGE_KEYS.answers);
      if (savedAnswers) {
        const parsed = JSON.parse(savedAnswers);
        if (parsed && typeof parsed === 'object') {
          const validIds = new Set(UE_QUIZ_DATA.questions.map(q => q.id));
          const cleaned = {};
          Object.keys(parsed).forEach(k => {
            if (validIds.has(k)) cleaned[k] = parsed[k];
          });
          state.answers = cleaned;
        }
      }
      updateStarredCount();

      // 2. 恢復上次瀏覽的章節
      const savedChap = localStorage.getItem(STORAGE_KEYS.chapter);
      if (savedChap && UE_QUIZ_DATA.chapters.some(c => c.id === savedChap)) {
        state.currentChapterId = savedChap;
      }

      // 3. 恢復上次選擇的語言翻譯模式
      const savedLang = localStorage.getItem(STORAGE_KEYS.lang);
      if (savedLang && ['en', 'bilingual', 'detailed', 'zh'].includes(savedLang)) {
        state.language = savedLang;
      }

      // 4. 恢復功能開關設定 (即時答案、詳細解釋、星號標註篩選)
      const savedShowAns = localStorage.getItem(STORAGE_KEYS.showAnswer);
      if (savedShowAns !== null) {
        state.showAnswer = (savedShowAns === 'true');
      }
      const savedShowExp = localStorage.getItem(STORAGE_KEYS.showExplain);
      if (savedShowExp !== null) {
        state.showExplain = (savedShowExp === 'true');
      }
      const savedFilterStarred = localStorage.getItem(STORAGE_KEYS.filterStarred);
      if (savedFilterStarred !== null) {
        state.filterStarredOnly = (savedFilterStarred === 'true');
      }

      // 5. 恢復模式 (刷題/錯題本/星號標註，模考模式為避免計時異常預設回刷題)
      const savedMode = localStorage.getItem(STORAGE_KEYS.mode);
      if (savedMode === 'mistakes' && state.mistakes.size > 0) {
        state.mode = 'mistakes';
      } else if (savedMode === 'starred' && getStarredCount() > 0) {
        state.mode = 'starred';
      } else {
        state.mode = 'practice';
      }

      // 6. 恢復當前題號索引
      const savedIdx = localStorage.getItem(STORAGE_KEYS.currentIndex);
      if (savedIdx !== null) {
        const parsedIdx = parseInt(savedIdx, 10);
        if (!isNaN(parsedIdx) && parsedIdx >= 0) {
          state.currentIndex = parsedIdx;
        }
      }
    } catch (e) {
      console.warn('Could not load stored state from localStorage', e);
    }
  }

  // Active Questions List based on current mode & chapter & starred filter
  function getActiveQuestions() {
    if (state.mode === 'mistakes') {
      const list = UE_QUIZ_DATA.questions.filter(q => state.mistakes.has(q.id));
      return state.filterStarredOnly ? list.filter(q => state.answers[q.id] && state.answers[q.id].isFlagged) : list;
    }
    if (state.mode === 'starred') {
      return UE_QUIZ_DATA.questions.filter(q => state.answers[q.id] && state.answers[q.id].isFlagged);
    }
    const chapList = UE_QUIZ_DATA.questions.filter(q => q.chapterId === state.currentChapterId);
    if (state.filterStarredOnly && state.mode !== 'exam') {
      return chapList.filter(q => state.answers[q.id] && state.answers[q.id].isFlagged);
    }
    return chapList;
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
      // 切換章節時，若位於錯題本或星號標註總覽模式，自動切回刷題模式以呈現該章題目
      if (state.mode === 'mistakes' || state.mode === 'starred') {
        state.mode = 'practice';
        btnModePractice.classList.add('active');
        btnModeMistakes.classList.remove('active');
        if (btnModeStarred) btnModeStarred.classList.remove('active');
        btnModeExam.classList.remove('active');
        examControls.style.display = 'none';
        practiceBanner.style.display = 'flex';
      }
      state.currentChapterId = e.target.value;
      state.currentIndex = 0;
      saveAppState();
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
    if (btnModeStarred) btnModeStarred.classList.toggle('active', mode === 'starred');

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
    saveAppState();
    renderAll();
  }

  // Language Switching
  function setLanguage(lang, silent = false) {
    state.language = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    saveAppState();
    renderQuestionContent();
    renderOptions();
    if (!silent) {
      const map = {
        en: 'English 原文',
        bilingual: '英中雙語對照',
        detailed: '精闢詳細版翻譯（專有名詞隨文註解已啟用）',
        zh: '中文繁體'
      };
      showToast(`已切換至：${map[lang] || lang}`);
    }
  }

  // Exam Timer
  function startExamTimer() {
    clearInterval(state.examTimerInterval);
    const list = getActiveQuestions();
    const mins = list.length >= 30 ? 60 : 30;
    state.examSecondsRemaining = mins * 60;
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

    // Each question worth 2 points (10Q = 20 pts, 30Q = 60 pts)
    const points = correct * 2;
    const maxPoints = list.length * 2;
    const accuracy = list.length > 0 ? ((correct / list.length) * 100).toFixed(1) : '0';

    const chap = UE_QUIZ_DATA.chapters.find(c => c.id === state.currentChapterId);
    modalTestName.textContent = chap ? `${chap.title} - ${chap.titleZh}` : '章節測驗';
    modalScore.textContent = points;
    if (modalScoreLabel) {
      modalScoreLabel.textContent = `測驗得分 (滿分 ${maxPoints} 分 / ${list.length} 題)`;
    }
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

    // 儲存至本地端，防止重新整理丟失作答紀錄
    saveAppState();

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
      // Empty mistakes notebook, starred list, or no questions
      cardQNum.textContent = '無題目';
      if (state.mode === 'mistakes') {
        cardQChapter.textContent = state.filterStarredOnly ? '錯題本中無星號標註題目' : '錯題本目前為空';
        questionPromptEn.textContent = state.filterStarredOnly
          ? '錯題本中目前沒有已加「★ 星號標註」的題目。可關閉「星號標註篩選」檢視全部錯題。'
          : '太棒了！目前沒有任何答錯的題目。';
      } else if (state.mode === 'starred' || state.filterStarredOnly) {
        cardQChapter.textContent = state.mode === 'starred' ? '星號標註清單目前為空' : '本章節尚無星號標註題目';
        questionPromptEn.textContent = '目前沒有已加上「★ 星號標註」的題目。您可以在刷題時點擊題目右上角的「★ 星號標註」按鈕，將重點題目加入此篩選清單！';
      } else {
        cardQChapter.textContent = '無章節資料';
        questionPromptEn.textContent = '查無符合條件的考題。';
      }
      cardQType.textContent = '-';
      questionPromptEn.style.display = 'block';
      questionPromptZh.style.display = 'none';
      if (answerHintBanner) answerHintBanner.style.display = 'none';
      if (detailedBreakdownBox) detailedBreakdownBox.style.display = 'none';
      if (keywordMemoryBox) keywordMemoryBox.style.display = 'none';
      btnFlag.classList.remove('active');
      optionsContainer.innerHTML = '';
      feedbackCard.style.display = 'none';
      btnPrevQ.disabled = true;
      btnNextQ.disabled = true;
      progressText.textContent = '0 / 0';
      progressStat.textContent = '已答 0 題';
      progressFill.style.width = '0%';
      answeredCountBadge.textContent = 0;
      totalQuestionsBadge.textContent = 0;
      return;
    }

    const chap = UE_QUIZ_DATA.chapters.find(c => c.id === q.chapterId);
    cardQNum.textContent = `Question ${state.currentIndex + 1}`;
    cardQChapter.textContent = chap ? chap.title : 'Unreal Engine 4';
    cardQType.textContent = (q.type === 'TF' ? '是非判斷題' : '四選一單選題') + (state.language === 'detailed' ? ' · 專有名詞隨文註解已啟用' : '');

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

  // 將行內專有名詞與中文註解轉換為上下雙層排版 (單字在上、1/3 中文在下)
  function formatDetailedPrompt(html) {
    if (!html) return '';
    if (html.includes('term-pair')) return html;
    return html.replace(
      /<span class=["']term-en["']>([\s\S]*?)<\/span>\s*<span class=["']inline-trans["']>([\s\S]*?)<\/span>/gi,
      function(match, enText, zhText) {
        const cleanZh = zhText.replace(/^[（(]\s*/, '').replace(/\s*[）)]$/, '');
        return `<span class="term-pair"><span class="term-en">${enText}</span><span class="inline-trans">${cleanZh}</span></span>`;
      }
    );
  }

  function renderQuestionContent() {
    const q = getCurrentQuestion();
    if (!q) return;

    // 1. 基本題目文字渲染
    if (state.language === 'en') {
      questionPromptEn.style.display = 'block';
      questionPromptEn.classList.remove('detailed-mode');
      questionPromptEn.textContent = q.question;
      questionPromptZh.style.display = 'none';
      detailedBreakdownBox.style.display = 'none';
      keywordMemoryBox.style.display = 'none';
    } else if (state.language === 'zh') {
      questionPromptEn.style.display = 'none';
      questionPromptEn.classList.remove('detailed-mode');
      questionPromptZh.style.display = 'block';
      questionPromptZh.textContent = q.questionZh;
      detailedBreakdownBox.style.display = 'none';
      keywordMemoryBox.style.display = 'none';
    } else if (state.language === 'detailed') {
      // 精闢詳細版翻譯：英文專有名詞隨文附帶中文註解（單字下方 1/3 大小）+ 自動擴增行高 + 繁體中文全句翻譯 + 核心功能記憶錨點
      questionPromptEn.style.display = 'block';
      questionPromptEn.classList.add('detailed-mode');
      questionPromptEn.innerHTML = formatDetailedPrompt(q.detailedQuestion || q.question);
      questionPromptZh.style.display = 'block';
      questionPromptZh.textContent = q.questionZh;
      detailedBreakdownBox.style.display = 'none';
      renderKeywords(q);
    } else {
      // Bilingual 預設雙語模式：英文原文 + 繁體中文對照 + 核心功能記憶錨點
      questionPromptEn.style.display = 'block';
      questionPromptEn.classList.remove('detailed-mode');
      questionPromptEn.textContent = q.question;
      questionPromptZh.style.display = 'block';
      questionPromptZh.textContent = q.questionZh;
      detailedBreakdownBox.style.display = 'none';
      renderKeywords(q);
    }

    // 2. 答案提示條 (如果開啟答案顯示，且在刷題模式)
    renderAnswerHint(q);
  }

  function renderAnswerHint(q) {
    if (!answerHintBanner) return;
    if (state.mode === 'practice' && state.showAnswer) {
      answerHintBanner.style.display = 'flex';
      const letters = ['A', 'B', 'C', 'D'];
      const letChar = letters[q.correctIndex] || '';
      const ansZh = (q.optionsZh && q.optionsZh[q.correctIndex]) ? q.optionsZh[q.correctIndex] : q.correctText;
      answerHintText.innerHTML = `題目提示：正確答案為 <strong>(${letChar}) ${ansZh}</strong>`;
    } else {
      answerHintBanner.style.display = 'none';
    }
  }

  function renderBreakdown(q) {
    if (!detailedBreakdownBox || !breakdownContent) return;
    detailedBreakdownBox.style.display = 'block';
    breakdownContent.innerHTML = '';

    if (q.segments && q.segments.length > 1) {
      q.segments.forEach(seg => {
        const item = document.createElement('div');
        item.className = 'breakdown-item';
        item.innerHTML = `<span class="breakdown-idx">分段 ${seg.partNum}</span><span class="breakdown-text">${seg.en}</span>`;
        breakdownContent.appendChild(item);
      });
    } else {
      const item = document.createElement('div');
      item.className = 'breakdown-item';
      item.innerHTML = `<span class="breakdown-idx">核心句</span><span class="breakdown-text">${q.question}</span>`;
      breakdownContent.appendChild(item);
    }
  }

  function renderKeywords(q) {
    if (!keywordMemoryBox || !memoryList) return;
    if (q.keywords && q.keywords.length > 0) {
      keywordMemoryBox.style.display = 'block';
      memoryList.innerHTML = '';
      q.keywords.forEach(kw => {
        const div = document.createElement('div');
        div.className = 'memory-item';
        div.innerHTML = `<div class="memory-term">🔹 ${kw.term}</div><div class="memory-role">${kw.role}</div>`;
        memoryList.appendChild(div);
      });
    } else {
      keywordMemoryBox.style.display = 'none';
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
      } else if (state.language === 'detailed') {
        // Detailed mode: English option + detailed inline explanation
        const textEn = document.createElement('div');
        textEn.className = 'opt-text';
        textEn.textContent = optEn;
        const textZh = document.createElement('div');
        textZh.className = 'opt-text-zh';
        textZh.innerHTML = (q.detailedOptions && q.detailedOptions[idx]) ? q.detailedOptions[idx] : optZh;
        content.appendChild(textEn);
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

    const ansZh = (q.optionsZh && q.optionsZh[q.correctIndex]) ? q.optionsZh[q.correctIndex] : q.correctText;
    feedbackCorrectOpt.textContent = `(${correctLetter}) ${ansZh}`;
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
        saveCurrentIndex();
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
      if (state.mode === 'mistakes') {
        sideChapterTitle.textContent = state.filterStarredOnly ? '錯題本 (僅星號★)' : '錯題本清單';
      } else if (state.mode === 'starred') {
        sideChapterTitle.textContent = '★ 星號標註清單';
      } else {
        const baseTitle = chap ? chap.num + '. ' + chap.title : 'Hour';
        sideChapterTitle.textContent = state.filterStarredOnly ? `${baseTitle} (僅星號★)` : baseTitle;
      }
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
    if (btnModeStarred) {
      btnModeStarred.addEventListener('click', () => setMode('starred'));
    }

    // Starred Filter Toggle in Practice Banner
    if (btnFilterStarred) {
      btnFilterStarred.addEventListener('click', () => {
        state.filterStarredOnly = !state.filterStarredOnly;
        btnFilterStarred.classList.toggle('active', state.filterStarredOnly);
        if (filterStarredText) {
          filterStarredText.textContent = state.filterStarredOnly ? '僅星號 ★' : '全部';
        }
        state.currentIndex = 0;
        saveAppState();
        renderAll();
        showToast(state.filterStarredOnly ? '★ 已開啟星號標註篩選（僅顯示星號題目）' : '已切換為顯示全部題目');
      });
    }

    // Language Tabs Delegation & Direct Events
    const langTabs = document.querySelector('.lang-tabs');
    if (langTabs) {
      ['click', 'touchend'].forEach(evtType => {
        langTabs.addEventListener(evtType, (e) => {
          const btn = e.target.closest('.lang-btn');
          if (!btn || !btn.dataset.lang) return;
          if (evtType === 'touchend') e.preventDefault();
          setLanguage(btn.dataset.lang);
        }, { passive: false });
      });
    }

    btnLangEn.addEventListener('click', () => setLanguage('en'));
    btnLangBi.addEventListener('click', () => setLanguage('bilingual'));
    if (btnLangDetailed) btnLangDetailed.addEventListener('click', () => setLanguage('detailed'));
    btnLangZh.addEventListener('click', () => setLanguage('zh'));

    // Toggle Answer & Explain
    btnToggleAnswer.addEventListener('click', () => {
      state.showAnswer = !state.showAnswer;
      btnToggleAnswer.classList.toggle('active', state.showAnswer);
      answerToggleText.textContent = state.showAnswer ? '開啟' : '關閉';
      saveAppState();
      renderQuestionContent();
      renderOptions();
      showToast(`即時答案顯示已${state.showAnswer ? '開啟' : '關閉'}`);
    });

    btnToggleExplain.addEventListener('click', () => {
      state.showExplain = !state.showExplain;
      btnToggleExplain.classList.toggle('active', state.showExplain);
      explainToggleText.textContent = state.showExplain ? '開啟' : '關閉';
      saveAppState();
      renderFeedback();
      showToast(`內容專業解釋已${state.showExplain ? '開啟' : '關閉'}`);
    });

    // Reset Chapter
    btnResetTest.addEventListener('click', () => {
      if (confirm('確定要清除當前章節的所有作答與標記紀錄嗎？（其他章節紀錄仍會保留）')) {
        const list = getActiveQuestions();
        list.forEach(q => {
          delete state.answers[q.id];
        });
        state.currentIndex = 0;
        updateStarredCount();
        saveAppState();
        renderAll();
        showToast('已重置當前章節的作答紀錄！');
      }
    });

    // Clear All Data
    const btnClearAllData = document.getElementById('btnClearAllData');
    if (btnClearAllData) {
      btnClearAllData.addEventListener('click', () => {
        if (confirm('⚠️ 警告：確定要清除全部章節與測驗的所有作答紀錄、星號標註與錯題本嗎？此操作無法復原。')) {
          state.answers = {};
          state.mistakes.clear();
          state.currentIndex = 0;
          updateStarredCount();
          saveMistakes();
          saveAppState();
          renderAll();
          showToast('已成功清除全站所有作答進度！');
        }
      });
    }

    // Flag (Starred) Button
    btnFlag.addEventListener('click', () => {
      const q = getCurrentQuestion();
      if (!q) return;
      const cur = state.answers[q.id] || {};
      cur.isFlagged = !cur.isFlagged;
      state.answers[q.id] = cur;
      btnFlag.classList.toggle('active', cur.isFlagged);
      updateStarredCount();
      saveAppState();
      if (state.mode === 'starred' || state.filterStarredOnly) {
        renderAll();
      } else {
        renderPalette();
      }
      showToast(cur.isFlagged ? '★ 已將此題加入星號標註清單' : '已取消此題星號標註');
    });

    // Stage Navigation
    btnPrevQ.addEventListener('click', () => {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        saveCurrentIndex();
        renderAll();
      }
    });

    btnNextQ.addEventListener('click', () => {
      const list = getActiveQuestions();
      if (state.currentIndex < list.length - 1) {
        state.currentIndex++;
        saveCurrentIndex();
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
      saveCurrentIndex();
      renderAll();
    });

    btnRestartExam.addEventListener('click', () => {
      resultModal.style.display = 'none';
      const list = getActiveQuestions();
      list.forEach(q => delete state.answers[q.id]);
      state.currentIndex = 0;
      saveAppState();
      startExamTimer();
      renderAll();
    });

    // Keyboard Shortcuts (Arrow Left / Right, 1/2/3/4 or A/B/C/D)
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      if (e.key === 'ArrowLeft') {
        if (state.currentIndex > 0) {
          state.currentIndex--;
          saveCurrentIndex();
          renderAll();
        }
      } else if (e.key === 'ArrowRight') {
        const list = getActiveQuestions();
        if (state.currentIndex < list.length - 1) {
          state.currentIndex++;
          saveCurrentIndex();
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

  // Synchronize UI from loaded state
  function initModeUI() {
    btnModePractice.classList.toggle('active', state.mode === 'practice');
    btnModeExam.classList.toggle('active', state.mode === 'exam');
    btnModeMistakes.classList.toggle('active', state.mode === 'mistakes');
    if (btnModeStarred) btnModeStarred.classList.toggle('active', state.mode === 'starred');

    if (state.mode === 'exam') {
      examControls.style.display = 'flex';
      practiceBanner.style.display = 'none';
      startExamTimer();
    } else {
      clearInterval(state.examTimerInterval);
      examControls.style.display = 'none';
      practiceBanner.style.display = 'flex';
    }
  }

  function initLanguageUI() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === state.language);
    });
  }

  function initToggleUI() {
    if (btnFilterStarred && filterStarredText) {
      btnFilterStarred.classList.toggle('active', state.filterStarredOnly);
      filterStarredText.textContent = state.filterStarredOnly ? '僅星號 ★' : '全部';
    }
    if (btnToggleAnswer && answerToggleText) {
      btnToggleAnswer.classList.toggle('active', state.showAnswer);
      answerToggleText.textContent = state.showAnswer ? '開啟' : '關閉';
    }
    if (btnToggleExplain && explainToggleText) {
      btnToggleExplain.classList.toggle('active', state.showExplain);
      explainToggleText.textContent = state.showExplain ? '開啟' : '關閉';
    }
  }

  // Initialization
  function init() {
    loadMistakes();
    loadStoredState();
    initChapterSelect();
    initModeUI();
    initLanguageUI();
    initToggleUI();
    initEvents();
    renderAll();
  }

  init();
})();

