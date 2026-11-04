/**
 * Unreal Engine 4.27 全真考題庫 (120 題完整 100% 原文、精準功能記憶點與精闢詳細版隨文翻譯)
 * 來源：Teach Yourself Unreal Engine 4 Game Development in 24 Hours
 */
const UE_QUIZ_DATA = {
  "chapters": [
    {
      "id": "h01",
      "num": "01",
      "title": "Hour 1: Your First Project",
      "titleZh": "第 1 小時：你的第一個專案與編輯器介面"
    },
    {
      "id": "h02",
      "num": "02",
      "title": "Hour 2: Anatomy of a Project",
      "titleZh": "第 2 小時：專案結構剖析與遊戲玩法框架"
    },
    {
      "id": "h03",
      "num": "03",
      "title": "Hour 3: Coordinates, Transforms, Units, and Organization",
      "titleZh": "第 3 小時：坐標、變換、單位與場景組織"
    },
    {
      "id": "h04",
      "num": "04",
      "title": "Hour 4: Static Mesh Editor",
      "titleZh": "第 4 小時：靜態網格編輯器與碰撞設定"
    },
    {
      "id": "h05",
      "num": "05",
      "title": "Hour 5: Lighting and Rendering",
      "titleZh": "第 5 小時：燈光照明技術與即時渲染"
    },
    {
      "id": "h06",
      "num": "06",
      "title": "Hour 6: Materials",
      "titleZh": "第 6 小時：材質系統與 PBR 基於物理著色"
    },
    {
      "id": "h07",
      "num": "07",
      "title": "Hour 7: UE4 Audio System",
      "titleZh": "第 7 小時：音效系統與 Sound Cue 音訊編輯器"
    },
    {
      "id": "h08",
      "num": "08",
      "title": "Hour 8: Working with Landscapes",
      "titleZh": "第 8 小時：地貌景觀雕刻與植被系統"
    },
    {
      "id": "h09",
      "num": "09",
      "title": "Hour 9: World Building",
      "titleZh": "第 9 小時：世界場景構建、大氣霧與後製處理"
    },
    {
      "id": "h10",
      "num": "10",
      "title": "Hour 10: Particle Systems",
      "titleZh": "第 10 小時：粒子特效系統 (Cascade 與發射器)"
    },
    {
      "id": "h12",
      "num": "12",
      "title": "Hour 12: Cinematics",
      "titleZh": "第 12 小時：電影過場動畫與 Sequencer 序列器"
    },
    {
      "id": "h13",
      "num": "13",
      "title": "Hour 13: Working with Physics",
      "titleZh": "第 13 小時：物理系統模擬、剛體與物理約束"
    }
  ],
  "questions": [
    {
      "id": "h01_q1",
      "chapterId": "h01",
      "qNum": 1,
      "type": "MC",
      "question": "The Level ____________ panel displays the editable properties for a selected Actor.",
      "questionZh": "關卡中的 ____________ 面板會顯示當前所選取 Actor（場景物件）的可編輯屬性。",
      "options": [
        "Modes",
        "Details",
        "Content Browser",
        "World Outliner"
      ],
      "optionsZh": [
        "Modes（模式面板）",
        "Details（細節屬性面板）",
        "Content Browser（內容瀏覽器）",
        "World Outliner（世界大綱面板）"
      ],
      "rawAnswer": "Details",
      "correctIndex": 1,
      "correctText": "Details",
      "explanation": "【UE 4.27 核心考點：Details 細節面板】\n選取關卡工作視窗（Level Viewport）或世界大綱中的任何 Actor，Details 面板會顯示其 Transform（位置/旋轉/縮放）、組件階層、材質槽與各項公開可編輯參數。\n\n【干擾項解析】：\n- Modes：提供放置常用幾何體、地貌雕刻與植被繪製工具。\n- Content Browser：管理專案中的資產庫。\n- World Outliner：列出當前關卡中所有實例化 Actor 的階層清單。",
      "keywords": [
        {
          "term": "Details Panel（細節面板）",
          "role": "檢視並修改當前選取 Actor 的所有變換坐標、材質槽與組件屬性"
        },
        {
          "term": "World Outliner（世界大綱）",
          "role": "場景總管清單樹，以樹狀結構列出關卡內的所有實例化 Actor 物件"
        },
        {
          "term": "Modes Panel（模式面板）",
          "role": "提供放置幾何筆刷、地貌雕刻（Landscape）與植被繪製（Foliage）的核心面板"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The <span class=\"term-en\">Level</span><span class=\"inline-trans\">（關卡場景）</span> ____________ panel displays the editable properties for a selected <span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span>.",
      "detailedOptions": [
        "Modes（模式面板）",
        "Details（細節屬性面板）",
        "Content Browser（內容瀏覽器）",
        "World Outliner（世界大綱面板）"
      ]
    },
    {
      "id": "h01_q2",
      "chapterId": "h01",
      "qNum": 2,
      "type": "TF",
      "question": "From the Project Browser’s New Project tab you can create Blueprint- or C++-based projects.",
      "questionZh": "在專案瀏覽器（Project Browser）的「New Project（新建專案）」分頁中，你可以建立以藍圖（Blueprint）或以 C++ 為基礎的專案。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：專案架構建立】\n正確。在開啟專案瀏覽器建立新專案時，頂部分頁提供 Blueprint 或 C++ 兩種底層代碼架構選擇。進入專案後兩者可自由混用（例如在藍圖專案中新增 C++ 類別）。",
      "keywords": [
        {
          "term": "Unreal Engine 4.27 核心架構",
          "role": "遵循教材與引擎核心工作流規範"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "From the <span class=\"term-en\">Project Browser</span><span class=\"inline-trans\">（專案瀏覽器）</span>’s <span class=\"term-en\">New Project tab</span><span class=\"inline-trans\">（新建專案分頁）</span> you can create <span class=\"term-en\">Blueprint</span><span class=\"inline-trans\">（藍圖腳本）</span>- or C++-based projects.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h01_q3",
      "chapterId": "h01",
      "qNum": 3,
      "type": "MC",
      "question": "The ____________ is an application that keeps track of the different versions of Unreal Engine that you have installed. You can use it to manage your projects, access free sample projects, and purchase content from the Unreal Marketplace. It also keeps you updated with community news and links to online learning resources and documentation.",
      "questionZh": "____________ 是一款管理工具應用程式，可追蹤你所安裝的不同虛幻引擎版本。你能用它來管理專案、下載免費範例、在虛幻商城（Unreal Marketplace）購買資源，並獲取官方最新社群消息與教學文件連結。",
      "options": [
        "Project Browser",
        "Modes panel",
        "Static Mesh Editor",
        "Epic Games Launcher"
      ],
      "optionsZh": [
        "Project Browser（專案瀏覽器（建立或開啟專案））",
        "Modes panel（模式面板）",
        "Static Mesh Editor（靜態網格編輯器）",
        "Epic Games Launcher（Epic Games 官方啟動器）"
      ],
      "rawAnswer": "Epic Games Launcher",
      "correctIndex": 3,
      "correctText": "Epic Games Launcher",
      "explanation": "【UE 4.27 核心考點：Epic Games Launcher 啟動器】\nEpic Games Launcher 是虛幻生態的桌面樞紐，負責安裝/管理多版本引擎（如 4.27.2、UE5）、開啟/刪除專案、購買商城資產包與下載官方範例。",
      "keywords": [
        {
          "term": "Modes Panel（模式面板）",
          "role": "提供放置幾何筆刷、地貌雕刻（Landscape）與植被繪製（Foliage）的核心面板"
        },
        {
          "term": "Epic Games Launcher",
          "role": "虛幻桌面樞紐，負責多版本引擎管理、商城素材購買與官方文件範例下載"
        },
        {
          "term": "Static Mesh（靜態網格）",
          "role": "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "The ____________ is an application that keeps track of the different versions of Unreal Engine that you have installed."
        },
        {
          "partNum": 2,
          "en": "You can use it to manage your projects, access free sample projects, and purchase content from the Unreal Marketplace."
        },
        {
          "partNum": 3,
          "en": "It also keeps you updated with community news and links to online learning resources and documentation."
        }
      ],
      "detailedQuestion": "The ____________ is an application that keeps track of the different versions of Unreal Engine that you have installed. You can use it to manage your projects, access free sample projects, and purchase content from the <span class=\"term-en\">Unreal Marketplace</span><span class=\"inline-trans\">（虛幻商城）</span>. It also keeps you updated with community news and links to online learning resources and documentation.",
      "detailedOptions": [
        "Project Browser（專案瀏覽器（建立或開啟專案））",
        "Modes panel（模式面板）",
        "Static Mesh Editor（靜態網格編輯器）",
        "Epic Games Launcher（Epic Games 官方啟動器）"
      ]
    },
    {
      "id": "h01_q4",
      "chapterId": "h01",
      "qNum": 4,
      "type": "TF",
      "question": "The World Outliner shows you all the Actors that are placed in the current Level.",
      "questionZh": "世界大綱（World Outliner）會顯示目前關卡中所放置的所有 Actor 物件。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：World Outliner 世界大綱】\n正確。World Outliner 以樹狀清單列出目前關卡中載入的所有 Actor（網格、光源、體積、相機、音效等），並支援建立資料夾進行分類管理與快速搜尋過濾。",
      "keywords": [
        {
          "term": "World Outliner（世界大綱）",
          "role": "場景總管清單樹，以樹狀結構列出關卡內的所有實例化 Actor 物件"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The <span class=\"term-en\">World Outliner</span><span class=\"inline-trans\">（世界大綱/場景物件清單）</span> shows you all the <span class=\"term-en\">Actors</span><span class=\"inline-trans\">（場景物件/Actor）</span> that are placed in the current <span class=\"term-en\">Level</span><span class=\"inline-trans\">（關卡場景）</span>.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h01_q5",
      "chapterId": "h01",
      "qNum": 5,
      "type": "MC",
      "question": "The ____________ view mode displays a neutral color on all the Actors in a Level along with the normal map from each Actor’s assigned Material.",
      "questionZh": "____________ 視圖模式（View Mode）會在關卡中所有 Actor 上顯示中性灰色調，並同時呈現各 Actor 指派材質中的法線貼圖（Normal Map）。",
      "options": [
        "Lit",
        "Wireframe",
        "Detail Lighting",
        "Lighting Only"
      ],
      "optionsZh": [
        "Lit（帶光照完整渲染模式）",
        "Wireframe（線框結構顯示模式）",
        "Detail Lighting（僅細節光照模式）",
        "Lighting Only（純光照模式（不帶材質貼圖））"
      ],
      "rawAnswer": "Detail Lighting",
      "correctIndex": 2,
      "correctText": "Detail Lighting",
      "explanation": "【UE 4.27 核心考點：Detail Lighting 視圖模式】\nDetail Lighting 會將材質的 Base Color（底色）暫時替換為中性灰色，同時保留法線貼圖與光影計算，讓美術人員排除顏色干擾、專注檢視表面幾何凹凸與光影衰減細節。\n\n【對比】：\n- Lighting Only：僅顯示漫反射光照與陰影，不顯示法線貼圖細節。\n- Lit：完整呈現最終材質底色、高光、粗糙度與法線效果。",
      "keywords": [
        {
          "term": "Detail Lighting（細節光照）",
          "role": "去除材質固有底色替換為中性灰色，保留法線凹凸與光影，便於審視微觀表面細節"
        },
        {
          "term": "Lighting Only（僅光照）",
          "role": "僅顯示漫反射光照與投影，不計算材質表面法線微觀細節"
        },
        {
          "term": "Material（材質系統）",
          "role": "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The ____________ <span class=\"term-en\">view mode</span><span class=\"inline-trans\">（場景檢視模式）</span> displays a neutral color on all the <span class=\"term-en\">Actors</span><span class=\"inline-trans\">（場景物件/Actor）</span> in a <span class=\"term-en\">Level</span><span class=\"inline-trans\">（關卡場景）</span> along with the <span class=\"term-en\">normal map</span><span class=\"inline-trans\">（法線貼圖：表面凹凸）</span> from each <span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span>’s assigned <span class=\"term-en\">Material</span><span class=\"inline-trans\">（材質）</span>.",
      "detailedOptions": [
        "Lit（帶光照完整渲染模式）",
        "Wireframe（線框結構顯示模式）",
        "Detail Lighting（僅細節光照模式）",
        "Lighting Only（純光照模式（不帶材質貼圖））"
      ]
    },
    {
      "id": "h01_q6",
      "chapterId": "h01",
      "qNum": 6,
      "type": "TF",
      "question": "If you want to temporarily display the collision hulls of all the Actors in your Level, you need to toggle off the Static Mesh show flag.",
      "questionZh": "如果你想要在關卡工作視窗（Level Viewport）中暫時顯示所有 Actor 的碰撞外框（Collision Hulls），你需要將 Static Mesh 的顯示標記關閉（Toggle off）。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "False",
      "correctIndex": 1,
      "correctText": "False",
      "explanation": "【UE 4.27 核心考點：關卡工作視窗碰撞顯示 Show Flags】\n錯誤。若要顯示關卡中 Actor 的碰撞體外框，應在關卡工作視窗左上角點擊「Show」選單並勾選「Collision」（快捷鍵 Alt + C），而不是關閉 Static Mesh 顯示標記。",
      "keywords": [
        {
          "term": "Collision（碰撞體系）",
          "role": "阻止角色與物件穿透，並能觸發物理阻擋（Block）或重疊事件（Overlap）"
        },
        {
          "term": "Static Mesh（靜態網格）",
          "role": "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "If you want to temporarily display the <span class=\"term-en\">collision hulls</span><span class=\"inline-trans\">（物理碰撞外框/範圍）</span> of all the <span class=\"term-en\">Actors</span><span class=\"inline-trans\">（場景物件/Actor）</span> in your <span class=\"term-en\">Level</span><span class=\"inline-trans\">（關卡場景）</span>, you need to toggle off the <span class=\"term-en\">Static Mesh show flag</span><span class=\"inline-trans\">（靜態網格顯示旗標）</span>.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h01_q7",
      "chapterId": "h01",
      "qNum": 7,
      "type": "TF",
      "question": "Project folders can and should be moved while the Editor is running.",
      "questionZh": "當虛幻編輯器正在運行時，可以而且應該直接移動專案資料夾。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "False",
      "correctIndex": 1,
      "correctText": "False",
      "explanation": "【UE 4.27 核心考點：檔案管理安全原則】\n錯誤。編輯器運行期間檔案與資料庫處於載入鎖定狀態，在檔案總管手動移動專案目錄會破壞資產重定向器（Redirectors）與依賴關係，導致專案損壞。專案移動必須在關閉編輯器後執行。",
      "keywords": [
        {
          "term": "Unreal Engine 4.27 核心架構",
          "role": "遵循教材與引擎核心工作流規範"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "<span class=\"term-en\">Project folders</span><span class=\"inline-trans\">（專案資料夾檔案）</span> can and should be moved while the <span class=\"term-en\">Editor</span><span class=\"inline-trans\">（虛幻編輯器）</span> is running.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h01_q8",
      "chapterId": "h01",
      "qNum": 8,
      "type": "MC",
      "question": "When creating a new project, you can select from a variety of default ____________ templates, such as First Person, Third Person, Flying, and Puzzle.",
      "questionZh": "建立新專案時，你可以從多種預設的 ____________ 樣板中進行選擇，例如第一人稱（First Person）、第三人稱（Third Person）、飛行（Flying）與解謎（Puzzle）。",
      "options": [
        "Game Mode",
        "Graphic Settings",
        "Landscape",
        "Viewport"
      ],
      "optionsZh": [
        "Game Mode（遊戲核心規則與玩法模式樣板）",
        "Graphic Settings（圖形品質設定）",
        "Landscape（地貌編輯工具）",
        "Viewport（關卡工作視窗）"
      ],
      "rawAnswer": "Game Mode",
      "correctIndex": 0,
      "correctText": "Game Mode",
      "explanation": "【UE 4.27 核心考點：遊戲模式樣板】\n建立新專案時，UE4 提供針對常見遊戲類型的預設 Game Mode 樣板（包含 First Person、Third Person、Flying、Puzzle 等），已預先配置好輸入按鍵、攝影機設定與可操控 Pawn。",
      "keywords": [
        {
          "term": "Game Mode（遊戲模式類別）",
          "role": "定義核心遊戲規則、勝負邏輯與生成角色，多人生存架構中僅運行於伺服器端"
        },
        {
          "term": "Pawn（兵卒實體）",
          "role": "在世界中可被 Controller（控制器）附身附著的實體角色或載具基礎類別"
        },
        {
          "term": "Landscape Actor（地貌地形）",
          "role": "專為廣袤自然地形設計的幾何網格體，具備動態連續 LOD 優化"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "When creating a new project, you can select from a variety of default ____________ templates, such as First Person, Third Person, Flying, and Puzzle.",
      "detailedOptions": [
        "Game Mode（遊戲核心規則與玩法模式樣板）",
        "Graphic Settings（圖形品質設定）",
        "Landscape（地貌編輯工具）",
        "Viewport（關卡工作視窗）"
      ]
    },
    {
      "id": "h01_q9",
      "chapterId": "h01",
      "qNum": 9,
      "type": "MC",
      "question": "In the Level Viewport, you can switch between Perspective and ____________ display modes.",
      "questionZh": "在關卡工作視窗（Level Viewport）中，你可以在透視（Perspective 3D 視角）與 ____________ 顯示模式之間切換。",
      "options": [
        "Paint",
        "Lit",
        "Orthographic",
        "Templates"
      ],
      "optionsZh": [
        "Paint（頂點色彩繪製模式）",
        "Lit（帶光照完整渲染模式）",
        "Orthographic（正交平面視圖）",
        "Templates（專案樣板範本）"
      ],
      "rawAnswer": "Orthographic",
      "correctIndex": 2,
      "correctText": "Orthographic",
      "explanation": "【UE 4.27 核心考點：關卡工作視窗投影模式】\n關卡工作視窗提供透視（Perspective, 近大遠小 3D 空間）與正交（Orthographic, 無透視變形的平行二維投影，包含 Top、Bottom、Left、Right、Front、Back）兩種顯示模式。",
      "keywords": [
        {
          "term": "Modes Panel（模式面板）",
          "role": "提供放置幾何筆刷、地貌雕刻（Landscape）與植被繪製（Foliage）的核心面板"
        },
        {
          "term": "Perspective（透視視圖）",
          "role": "具備近大遠小真實 3D 空間透視感，適合關卡自由漫遊預覽"
        },
        {
          "term": "Orthographic（正交視圖）",
          "role": "平行投影無視角透視變形（頂/底/左/右/前/後視圖），專門用於精密對齊與測量"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "In the <span class=\"term-en\">Level Viewport</span><span class=\"inline-trans\">（關卡場景工作視窗）</span>, you can switch between <span class=\"term-en\">Perspective</span><span class=\"inline-trans\">（透視 3D 視角）</span> and ____________ display modes.",
      "detailedOptions": [
        "Paint（頂點色彩繪製模式）",
        "Lit（帶光照完整渲染模式）",
        "Orthographic（正交平面視圖）",
        "Templates（專案樣板範本）"
      ]
    },
    {
      "id": "h01_q10",
      "chapterId": "h01",
      "qNum": 10,
      "type": "MC",
      "question": "____________ are settings applied to Editor Viewports that modify the display of content. They help you to see the type of data being processed in your scene, as well as to diagnose any errors or unexpected results.",
      "questionZh": "____________ 是套用於編輯器場景視窗的顯示設定，可改變場景內容的呈現方式。它們能幫助你檢視場景中正在處理的資料類型，並協助診斷渲染錯誤或異常結果。",
      "options": [
        "Perspective",
        "View modes",
        "Level Details panel",
        "Foliage"
      ],
      "optionsZh": [
        "Perspective（透視 3D 視角）",
        "View modes（視圖顯示模式選單）",
        "Level Details panel（關卡細節面板）",
        "Foliage（植被繪製工具）"
      ],
      "rawAnswer": "View modes",
      "correctIndex": 1,
      "correctText": "View modes",
      "explanation": "【UE 4.27 核心考點：View modes 檢視模式】\n檢視模式包含 Lit、Unlit、Wireframe、Detail Lighting、Lighting Only，以及 Light Complexity（光照複雜度）與 Shader Complexity（著色器開銷）等診斷視圖，是優化效能與除錯不可或缺的工具。",
      "keywords": [
        {
          "term": "Details Panel（細節面板）",
          "role": "檢視並修改當前選取 Actor 的所有變換坐標、材質槽與組件屬性"
        },
        {
          "term": "Modes Panel（模式面板）",
          "role": "提供放置幾何筆刷、地貌雕刻（Landscape）與植被繪製（Foliage）的核心面板"
        },
        {
          "term": "Perspective（透視視圖）",
          "role": "具備近大遠小真實 3D 空間透視感，適合關卡自由漫遊預覽"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "____________ are settings applied to Editor Viewports that modify the display of content."
        },
        {
          "partNum": 2,
          "en": "They help you to see the type of data being processed in your scene, as well as to diagnose any errors or unexpected results."
        }
      ],
      "detailedQuestion": "____________ are settings applied to <span class=\"term-en\">Editor Viewports</span><span class=\"inline-trans\">（編輯器場景視窗）</span> that modify the display of content. They help you to see the type of data being processed in your scene, as well as to diagnose any errors or unexpected results.",
      "detailedOptions": [
        "Perspective（透視 3D 視角）",
        "View modes（視圖顯示模式選單）",
        "Level Details panel（關卡細節面板）",
        "Foliage（植被繪製工具）"
      ]
    },
    {
      "id": "h02_q1",
      "chapterId": "h02",
      "qNum": 1,
      "type": "MC",
      "question": "____________ files are text files that store Editor, engine, and project preferences.",
      "questionZh": "____________ 檔案是用來儲存編輯器、引擎與專案偏好設定的純文字檔案。",
      "options": [
        ".uasset",
        ".umap",
        ".ini",
        ".uproject"
      ],
      "optionsZh": [
        ".uasset（虛幻引擎專案資產二進位檔案）",
        ".umap（關卡地圖檔案）",
        ".ini（設定設定檔）",
        ".uproject（專案啟動引導描述檔）"
      ],
      "rawAnswer": ".ini",
      "correctIndex": 2,
      "correctText": ".ini",
      "explanation": "【UE 4.27 核心考點：.ini 組態檔】\n虛幻引擎將所有的引擎配置、按鍵映射輸入設定與專案預設值存放在 Config 目錄下的 .ini 格式文字檔中（如 DefaultEngine.ini, DefaultInput.ini, DefaultGame.ini）。",
      "keywords": [
        {
          "term": ".ini 組態設定檔",
          "role": "存放在 Config 目錄下，儲存引擎底層參數、預設偏好設定與輸入按鍵映射"
        },
        {
          "term": "Reference Viewer（引用檢視器）",
          "role": "以可視化節點圖展示資產與資產之間的雙向依賴引用關係樹"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "____________ files are text files that store <span class=\"term-en\">Editor</span><span class=\"inline-trans\">（虛幻編輯器）</span>, engine, and project preferences.",
      "detailedOptions": [
        ".uasset（虛幻引擎專案資產二進位檔案）",
        ".umap（關卡地圖檔案）",
        ".ini（設定設定檔）",
        ".uproject（專案啟動引導描述檔）"
      ]
    },
    {
      "id": "h02_q2",
      "chapterId": "h02",
      "qNum": 2,
      "type": "TF",
      "question": "Autosave and backup files update every 30 minutes by default. These files can save the day if the Editor ever crashes on you, but they also increase the size of your project. These files are found in your project’s “Saved” folder.",
      "questionZh": "自動儲存與備份檔案預設每 30 分鐘更新一次。如果編輯器發生當機，這些檔案可以拯救你的進度，但也會增加專案的佔用容量。這些備份檔案存放在專案的「Saved」資料夾中。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：Saved 資料夾與自動存檔】\n正確。UE4 預設啟用了自動存檔機制，每隔特定時間將暫存與還原點存放在專案目錄下的 `Saved/Autosaves` 與 `Saved/Backup` 資料夾中。",
      "keywords": [
        {
          "term": "Saved 資料夾",
          "role": "存放專案的自動備份（Autosaves）、烘焙暫存與運行日誌，專案異常時可在此找回進度"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "Autosave and backup files update every 30 minutes by default."
        },
        {
          "partNum": 2,
          "en": "These files can save the day if the Editor ever crashes on you, but they also increase the size of your project."
        },
        {
          "partNum": 3,
          "en": "These files are found in your project’s “Saved” folder."
        }
      ],
      "detailedQuestion": "Autosave and backup files update every 30 minutes by default. These files can save the day if the <span class=\"term-en\">Editor</span><span class=\"inline-trans\">（虛幻編輯器）</span> ever crashes on you, but they also increase the size of your project. These files are found in your project’s “Saved” folder.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h02_q3",
      "chapterId": "h02",
      "qNum": 3,
      "type": "MC",
      "question": "The ____________ folder is not found in a default project folder.",
      "questionZh": "____________ 資料夾不會出現在預設的專案目錄結構中。",
      "options": [
        "Saved",
        "Content",
        "Intermediate",
        "Raw Files"
      ],
      "optionsZh": [
        "Saved（存放自動存檔與截圖的暫存目錄）",
        "Content（專案所有遊戲素材資產根目錄）",
        "Intermediate（引擎編譯過程產生之中間暫存目錄）",
        "Raw Files（原始檔案目錄）"
      ],
      "rawAnswer": "Raw Files",
      "correctIndex": 3,
      "correctText": "Raw Files",
      "explanation": "【UE 4.27 核心考點：預設專案資料夾結構】\n預設的 UE 專案標準目錄包含 Config、Content、Intermediate、Saved（以及 C++ 專案的 Source）。「Raw Files」並非引擎標準資料夾，原始 3D 檔（.fbx）或 PSD 貼圖通常存放在專案外部以避免膨脹專案庫。",
      "keywords": [
        {
          "term": "Saved 資料夾",
          "role": "存放專案的自動備份（Autosaves）、烘焙暫存與運行日誌，專案異常時可在此找回進度"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The ____________ folder is not found in a default project folder.",
      "detailedOptions": [
        "Saved（存放自動存檔與截圖的暫存目錄）",
        "Content（專案所有遊戲素材資產根目錄）",
        "Intermediate（引擎編譯過程產生之中間暫存目錄）",
        "Raw Files（原始檔案目錄）"
      ]
    },
    {
      "id": "h02_q4",
      "chapterId": "h02",
      "qNum": 4,
      "type": "TF",
      "question": "It is acceptable to move .uasset files manually outside of the Editor.",
      "questionZh": "在編輯器外部（如透過 Windows 檔案總管）手動移動 .uasset 資產檔案是可接受的操作。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "False",
      "correctIndex": 1,
      "correctText": "False",
      "explanation": "【UE 4.27 核心考點：資產依賴與移動規範】\n錯誤。在檔案總管手動移動 .uasset 檔案會破壞其他關卡或材質對該資產的內部引用關係，導致資源遺失。資產移動必須在 Content Browser 內執行，編輯器才會自動維護 Asset Redirectors（資產重定向器）。",
      "keywords": [
        {
          "term": "Unreal Engine 4.27 核心架構",
          "role": "遵循教材與引擎核心工作流規範"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "It is acceptable to move <span class=\"term-en\">.uasset files</span><span class=\"inline-trans\">（.uasset 虛幻資產檔案）</span> manually outside of the <span class=\"term-en\">Editor</span><span class=\"inline-trans\">（虛幻編輯器）</span>.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h02_q5",
      "chapterId": "h02",
      "qNum": 5,
      "type": "MC",
      "question": "The ______________ Viewer shows the dependencies for an asset.",
      "questionZh": "______________ 檢視器（Viewer）用來顯示資產之間的相依引用關係樹。",
      "options": [
        "Viewport",
        "Reference",
        "Migration",
        "Import"
      ],
      "optionsZh": [
        "Viewport（關卡工作視窗）",
        "Reference（專案資源參照）",
        "Migration（資產遷移工具（Migrate：安全將資產連同相依檔案複製至其他專案））",
        "Import（匯入外部資源）"
      ],
      "rawAnswer": "Reference",
      "correctIndex": 1,
      "correctText": "Reference",
      "explanation": "【UE 4.27 核心考點：Reference Viewer 引用檢視器】\n在 Content Browser 中右鍵點選任何資產並選擇「Reference Viewer（快捷鍵 Shift + Alt + R）」，可以視覺化展開該資產被哪些關卡或材質所引用，以及該資產自身又依賴了哪些紋理貼圖。",
      "keywords": [
        {
          "term": "Reference Viewer（引用檢視器）",
          "role": "以可視化節點圖展示資產與資產之間的雙向依賴引用關係樹"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The ______________ Viewer shows the dependencies for an asset.",
      "detailedOptions": [
        "Viewport（關卡工作視窗）",
        "Reference（專案資源參照）",
        "Migration（資產遷移工具（Migrate：安全將資產連同相依檔案複製至其他專案））",
        "Import（匯入外部資源）"
      ]
    },
    {
      "id": "h02_q6",
      "chapterId": "h02",
      "qNum": 6,
      "type": "TF",
      "question": "One way to bring assets into a project is to use the Migrate tool.",
      "questionZh": "將資產引入專案的一種方法是使用遷移工具（Migrate tool）。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：Migrate 遷移工具】\n正確。Migrate 工具是跨專案複製資產的最佳標準方式，它會自動將所選資產以及其「所有相關依賴資產」（材質、貼圖、骨骼、物理資產）完整打包複製到目標專案的 Content 資料夾。",
      "keywords": [
        {
          "term": "Migrate（遷移工具）",
          "role": "跨專案傳遞資產的最佳工具，自動遞迴打包該資產的所有依賴貼圖與材質"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "One way to bring assets into a project is to use the <span class=\"term-en\">Migrate tool</span><span class=\"inline-trans\">（Migrate 素材遷移工具）</span>.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h02_q7",
      "chapterId": "h02",
      "qNum": 7,
      "type": "MC",
      "question": "The____________ is a collection of C++ or Blueprint classes that manages the rules of the game, handles player input, and defines the avatars, cameras, and player HUDs in UE4 projects.",
      "questionZh": "____________ 是一組 C++ 或藍圖類別的集合，在 UE4 專案中負責管理遊戲規則、處理玩家輸入，並定義虛擬角色、相機與玩家 HUD 介面。",
      "options": [
        "Gameplay Framework",
        "Content Browser",
        "Controller class",
        "Pawn class"
      ],
      "optionsZh": [
        "Gameplay Framework（遊戲玩法核心框架）",
        "Content Browser（內容瀏覽器）",
        "Controller class（大腦控制核心類別（PlayerController / AIController））",
        "Pawn class（Pawn 角色基礎類別）"
      ],
      "rawAnswer": "Gameplay Framework",
      "correctIndex": 0,
      "correctText": "Gameplay Framework",
      "explanation": "【UE 4.27 核心考點：Gameplay Framework 遊戲玩法框架】\nGameplay Framework 是虛幻引擎遊戲邏輯的頂層骨幹，包含 GameMode、GameState、PlayerController、Pawn/Character、PlayerState 與 HUD 等核心模組。",
      "keywords": [
        {
          "term": "Pawn（兵卒實體）",
          "role": "在世界中可被 Controller（控制器）附身附著的實體角色或載具基礎類別"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The____________ is a collection of C++ or <span class=\"term-en\">Blueprint</span><span class=\"inline-trans\">（藍圖腳本）</span> classes that manages the rules of the game, handles player input, and defines the avatars, cameras, and player HUDs in UE4 projects.",
      "detailedOptions": [
        "Gameplay Framework（遊戲玩法核心框架）",
        "Content Browser（內容瀏覽器）",
        "Controller class（大腦控制核心類別（PlayerController / AIController））",
        "Pawn class（Pawn 角色基礎類別）"
      ]
    },
    {
      "id": "h02_q8",
      "chapterId": "h02",
      "qNum": 8,
      "type": "TF",
      "question": "Project folders can and should be moved while the Editor is running.",
      "questionZh": "當編輯器正在運行時，可以而且應該移動專案資料夾。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "False",
      "correctIndex": 1,
      "correctText": "False",
      "explanation": "【UE 4.27 核心考點：專案管理禁忌】\n錯誤。編輯器運行期間嚴禁移動專案根目錄，否則會因檔案鎖定與路徑斷裂導致專案崩潰損壞。",
      "keywords": [
        {
          "term": "Unreal Engine 4.27 核心架構",
          "role": "遵循教材與引擎核心工作流規範"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "<span class=\"term-en\">Project folders</span><span class=\"inline-trans\">（專案資料夾檔案）</span> can and should be moved while the <span class=\"term-en\">Editor</span><span class=\"inline-trans\">（虛幻編輯器）</span> is running.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h02_q9",
      "chapterId": "h02",
      "qNum": 9,
      "type": "MC",
      "question": "The ____________ is the definition of the game, including things like the game rules and win conditions. It only exists on the server. It typically should not have much data that changes during play, and it definitely should not have transient data that clients need in the Level.",
      "questionZh": "____________ 是遊戲的整體定義，包含遊戲規則與勝負判定條件。它只存在於伺服器端，通常不應存放遊戲過程中頻繁變動的資料，且絕對不應存放客戶端關卡所需的瞬態資料。",
      "options": [
        "Controller class",
        "HUD class",
        "Game Instance class",
        "Game Mode class"
      ],
      "optionsZh": [
        "Controller class（大腦控制核心類別（PlayerController / AIController））",
        "HUD class（HUD 抬頭顯示介面類別）",
        "Game Instance class（遊戲全域實例類別（跨關卡保存全域資料））",
        "Game Mode class（遊戲模式規則類別）"
      ],
      "rawAnswer": "Game Mode class",
      "correctIndex": 3,
      "correctText": "Game Mode class",
      "explanation": "【UE 4.27 核心考點：AGameModeBase 與伺服器權威架構】\nGame Mode 定義遊戲的核心規則、生成哪種 Pawn、勝負條件。在多人生存連線架構中，Game Mode 僅存在於 Dedicated Server 伺服器端，客戶端完全不會複製或實例化此類別以防外掛作弊。",
      "keywords": [
        {
          "term": "Game Mode（遊戲模式類別）",
          "role": "定義核心遊戲規則、勝負邏輯與生成角色，多人生存架構中僅運行於伺服器端"
        },
        {
          "term": "Pawn（兵卒實體）",
          "role": "在世界中可被 Controller（控制器）附身附著的實體角色或載具基礎類別"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "The ____________ is the definition of the game, including things like the game rules and win conditions."
        },
        {
          "partNum": 2,
          "en": "It only exists on the server."
        },
        {
          "partNum": 3,
          "en": "It typically should not have much data that changes during play, and it definitely should not have transient data that clients need in the Level."
        }
      ],
      "detailedQuestion": "The ____________ is the definition of the game, including things like the game rules and win conditions. It only exists on the server. It typically should not have much data that changes during play, and it definitely should not have transient data that clients need in the <span class=\"term-en\">Level</span><span class=\"inline-trans\">（關卡場景）</span>.",
      "detailedOptions": [
        "Controller class（大腦控制核心類別（PlayerController / AIController））",
        "HUD class（HUD 抬頭顯示介面類別）",
        "Game Instance class（遊戲全域實例類別（跨關卡保存全域資料））",
        "Game Mode class（遊戲模式規則類別）"
      ]
    },
    {
      "id": "h02_q10",
      "chapterId": "h02",
      "qNum": 10,
      "type": "MC",
      "question": "A ____________ is the interface between the Pawn and the human player controlling it. It decides what to do and then issues commands to the Pawn (for example, “start crouching,” “jump”).",
      "questionZh": "____________ 是 Pawn 與控制它的人類玩家之間的溝通介面。它負責決定要執行什麼行為，然後向 Pawn 發布指令（例如「開始蹲下」、「跳躍」）。",
      "options": [
        "Game Mode",
        "Player Controller",
        "Game State",
        "Player State"
      ],
      "optionsZh": [
        "Game Mode（遊戲核心規則與玩法模式樣板）",
        "Player Controller（玩家控制器（負責接收鍵盤滑鼠輸入並操控角色））",
        "Game State（遊戲全域狀態（記錄遊戲進程、勝負狀態））",
        "Player State（個別玩家狀態資料（記錄得分、血量等））"
      ],
      "rawAnswer": "Player Controller",
      "correctIndex": 1,
      "correctText": "Player Controller",
      "explanation": "【UE 4.27 核心考點：APlayerController 控制器】\nPlayer Controller 代表人類玩家的意志大腦，負責監聽硬體輸入（鍵盤、滑鼠、搖桿）並向被其附身（Possessed）的實體角色 Pawn 發送行為命令。",
      "keywords": [
        {
          "term": "Game Mode（遊戲模式類別）",
          "role": "定義核心遊戲規則、勝負邏輯與生成角色，多人生存架構中僅運行於伺服器端"
        },
        {
          "term": "Player Controller（玩家控制器）",
          "role": "代表人類玩家意志與大腦，接收硬體輸入訊號並指揮實體 Pawn 進行移動攻擊"
        },
        {
          "term": "Pawn（兵卒實體）",
          "role": "在世界中可被 Controller（控制器）附身附著的實體角色或載具基礎類別"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "A ____________ is the interface between the Pawn and the human player controlling it."
        },
        {
          "partNum": 2,
          "en": "It decides what to do and then issues commands to the Pawn (for example, “start crouching,” “jump”)."
        }
      ],
      "detailedQuestion": "A ____________ is the interface between the <span class=\"term-en\">Pawn</span><span class=\"inline-trans\">（受控實體）</span> and the human player controlling it. It decides what to do and then issues commands to the <span class=\"term-en\">Pawn</span><span class=\"inline-trans\">（受控實體）</span> (for example, “start crouching,” “jump”).",
      "detailedOptions": [
        "Game Mode（遊戲核心規則與玩法模式樣板）",
        "Player Controller（玩家控制器（負責接收鍵盤滑鼠輸入並操控角色））",
        "Game State（遊戲全域狀態（記錄遊戲進程、勝負狀態））",
        "Player State（個別玩家狀態資料（記錄得分、血量等））"
      ]
    },
    {
      "id": "h03_q1",
      "chapterId": "h03",
      "qNum": 1,
      "type": "MC",
      "question": "____________ is a method for indicating the positions of points on a two-dimensional (2D) surface or in three-dimensional (3D) space. A 3D plane uses x, y, and z coordinates. Each letter corresponds to an axis, where z is up and down, y is left to right, and x is front to back.",
      "questionZh": "____________ 是一種用於在二維（2D）表面或三維（3D）空間中標記點位置的方法。3D 平面使用 x、y 與 z 坐標。每個字母對應一個坐標軸：z 代表上下、y 代表左右、x 代表前後。",
      "options": [
        "Cartesian coordinate system",
        "Boolean operation",
        "Axis",
        "Pivot point"
      ],
      "optionsZh": [
        "Cartesian coordinate system（笛卡兒直角坐標系（X/Y/Z 三維空間度量系統））",
        "Boolean operation（布林幾何運算（交集/聯集/差集））",
        "Axis（坐標軸向）",
        "Pivot point（物體局部幾何軸心點（樞軸點））"
      ],
      "rawAnswer": "Cartesian Coordinates System",
      "correctIndex": 0,
      "correctText": "Cartesian coordinate system",
      "explanation": "【UE 4.27 核心考點：左手笛卡兒坐標系統】\n虛幻引擎採用左手笛卡兒坐標系（Left-Handed Cartesian Coordinate System）：X 軸指向前方（紅色）、Y 軸指向右側（綠色）、Z 軸指向垂直上方（藍色）。",
      "keywords": [
        {
          "term": "笛卡兒坐標系統",
          "role": "UE 採用左手坐標系：X 指向前方(紅)、Y 指向右方(綠)、Z 指向上方(藍)"
        },
        {
          "term": "Pivot Point（軸心點）",
          "role": "Actor 幾何原點，決定旋轉中心與縮放錨點基準"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "____________ is a method for indicating the positions of points on a two-dimensional (2D) surface or in three-dimensional (3D) space."
        },
        {
          "partNum": 2,
          "en": "A 3D plane uses x, y, and z coordinates."
        },
        {
          "partNum": 3,
          "en": "Each letter corresponds to an axis, where z is up and down, y is left to right, and x is front to back."
        }
      ],
      "detailedQuestion": "____________ is a method for indicating the positions of points on a two-dimensional (2D) surface or in three-dimensional (3D) space. A 3D plane uses x, y, and z coordinates. Each letter corresponds to an axis, where z is up and down, y is left to right, and x is front to back.",
      "detailedOptions": [
        "Cartesian coordinate system（笛卡兒直角坐標系（X/Y/Z 三維空間度量系統））",
        "Boolean operation（布林幾何運算（交集/聯集/差集））",
        "Axis（坐標軸向）",
        "Pivot point（物體局部幾何軸心點（樞軸點））"
      ]
    },
    {
      "id": "h03_q2",
      "chapterId": "h03",
      "qNum": 2,
      "type": "TF",
      "question": "Transforms store the position, rotation, and scale of an Actor in 3D space.",
      "questionZh": "變換（Transforms）儲存了 Actor 在 3D 空間中的位置（Position）、旋轉（Rotation）與縮放（Scale）數值。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：Transform 空間變換結構】\n正確。在 3D 圖形與虛幻引擎中，Transform 結構由三個三維向量組成：Location（3D 空間坐標位移）、Rotation（歐拉角或四元數旋轉）、Scale（三軸縮放比率）。",
      "keywords": [
        {
          "term": "Transform（空間變換）",
          "role": "包含 Location（坐標位移）、Rotation（三軸旋轉角）與 Scale（三軸縮放比）"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "<span class=\"term-en\">Transforms</span><span class=\"inline-trans\">（變換屬性：位移/旋轉/縮放）</span> store the <span class=\"term-en\">position</span><span class=\"inline-trans\">（位置坐標）</span>, <span class=\"term-en\">rotation</span><span class=\"inline-trans\">（旋轉角度）</span>, and <span class=\"term-en\">scale</span><span class=\"inline-trans\">（縮放比例）</span> of an <span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span> in <span class=\"term-en\">3D space</span><span class=\"inline-trans\">（3D 空間）</span>.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h03_q3",
      "chapterId": "h03",
      "qNum": 3,
      "type": "MC",
      "question": "A ____________ is the local axis of an Actor.",
      "questionZh": "____________ 是 Actor 的局部幾何自身坐標軸心（Local Axis）。",
      "options": [
        "Cartesian coordinate system",
        "Pivot point",
        "Vertices",
        "Transform"
      ],
      "optionsZh": [
        "Cartesian coordinate system（笛卡兒直角坐標系（X/Y/Z 三維空間度量系統））",
        "Pivot point（物體局部幾何軸心點（樞軸點））",
        "Vertices（頂點資料）",
        "Transform（空間變換（包含 Location 位移、Rotation 旋轉與 Scale 縮放））"
      ],
      "rawAnswer": "Pivot Point",
      "correctIndex": 1,
      "correctText": "Pivot point",
      "explanation": "【UE 4.27 核心考點：Pivot point 軸心點】\n軸心點（Pivot point）是物件旋轉與縮放的原點基準。在 DCC 軟體建模時距離世界原點 (0,0,0) 的距離，決定了匯入 UE4 之後模型的 Pivot 位置。",
      "keywords": [
        {
          "term": "笛卡兒坐標系統",
          "role": "UE 採用左手坐標系：X 指向前方(紅)、Y 指向右方(綠)、Z 指向上方(藍)"
        },
        {
          "term": "Pivot Point（軸心點）",
          "role": "Actor 幾何原點，決定旋轉中心與縮放錨點基準"
        },
        {
          "term": "Transform（空間變換）",
          "role": "包含 Location（坐標位移）、Rotation（三軸旋轉角）與 Scale（三軸縮放比）"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "A ____________ is the local axis of an <span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span>.",
      "detailedOptions": [
        "Cartesian coordinate system（笛卡兒直角坐標系（X/Y/Z 三維空間度量系統））",
        "Pivot point（物體局部幾何軸心點（樞軸點））",
        "Vertices（頂點資料）",
        "Transform（空間變換（包含 Location 位移、Rotation 旋轉與 Scale 縮放））"
      ]
    },
    {
      "id": "h03_q4",
      "chapterId": "h03",
      "qNum": 4,
      "type": "TF",
      "question": "1 Unreal unit (uu) is equal to 1 centimeter.",
      "questionZh": "1 個虛幻單位（Unreal unit, uu）等於 1 公分（centimeter）。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：虛幻度量衡】\n正確。虛幻引擎全系統預設度量衡為公制公分：1 Unreal Unit (UU) = 1 cm。100 UU = 1 公尺。",
      "keywords": [
        {
          "term": "Unreal Engine 4.27 核心架構",
          "role": "遵循教材與引擎核心工作流規範"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "1 <span class=\"term-en\">Unreal unit</span><span class=\"inline-trans\">（虛幻長度單位：1uu=1cm）</span> (uu) is equal to 1 <span class=\"term-en\">centimeter</span><span class=\"inline-trans\">（公分）</span>.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h03_q5",
      "chapterId": "h03",
      "qNum": 5,
      "type": "MC",
      "question": "____________ creates a parent-child relationship between two or more Actors where the child Actor’s transforms become relative to the parent’s transforms by default.",
      "questionZh": "____________ 可以在兩個或多個 Actor 之間建立父子關係（Parent-Child Relationship），使子 Actor 的變換預設相對於父 Actor 的變換進行計算。",
      "options": [
        "Combining",
        "Layering",
        "Grouping",
        "Attaching"
      ],
      "optionsZh": [
        "Combining（幾何合併）",
        "Layering（分層處理）",
        "Grouping（臨時群組組合）",
        "Attaching（掛載附著）"
      ],
      "rawAnswer": "Attaching",
      "correctIndex": 3,
      "correctText": "Attaching",
      "explanation": "【UE 4.27 核心考點：Attaching 父子階層】\nAttaching 是建立父子階層變換鏈（Hierarchy），子 Actor 的世界變換矩陣受父級變換驅動，常用於武器裝備到角色插槽（Socket）。",
      "keywords": [
        {
          "term": "Transform（空間變換）",
          "role": "包含 Location（坐標位移）、Rotation（三軸旋轉角）與 Scale（三軸縮放比）"
        },
        {
          "term": "Attaching（附加）",
          "role": "建立父子階層鏈（Parent-Child），子物件自動繼承並跟隨父級的世界坐標變換"
        },
        {
          "term": "Socket（插槽）",
          "role": "網格模型上的指定附著點，供武器、裝飾帽子或光效精準對齊吸附"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "____________ creates a <span class=\"term-en\">parent-child relationship</span><span class=\"inline-trans\">（父子階層關聯）</span> between two or more <span class=\"term-en\">Actors</span><span class=\"inline-trans\">（場景物件/Actor）</span> where the child <span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span>’s <span class=\"term-en\">transforms</span><span class=\"inline-trans\">（變換屬性）</span> become relative to the parent’s <span class=\"term-en\">transforms</span><span class=\"inline-trans\">（變換屬性）</span> by default.",
      "detailedOptions": [
        "Combining（幾何合併）",
        "Layering（分層處理）",
        "Grouping（臨時群組組合）",
        "Attaching（掛載附著）"
      ]
    },
    {
      "id": "h03_q6",
      "chapterId": "h03",
      "qNum": 6,
      "type": "TF",
      "question": "Uniform scale means x, y, x scale transforms are scaled proportionally to one another.",
      "questionZh": "等比例縮放（Uniform scale）代表 X、Y、Z 軸的三個縮放變換數值相互成比例同步縮放。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：Uniform Scale 等比縮放】\n正確。等比例縮放保持模型的長寬高長寬比固定不變，避免網格產生非等比拉伸畸變。",
      "keywords": [
        {
          "term": "Transform（空間變換）",
          "role": "包含 Location（坐標位移）、Rotation（三軸旋轉角）與 Scale（三軸縮放比）"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "<span class=\"term-en\">Uniform scale</span><span class=\"inline-trans\">（等比例縮放）</span> means x, y, x <span class=\"term-en\">scale</span><span class=\"inline-trans\">（縮放比例）</span> <span class=\"term-en\">transforms</span><span class=\"inline-trans\">（變換屬性）</span> are scaled proportionally to one another.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h03_q7",
      "chapterId": "h03",
      "qNum": 7,
      "type": "MC",
      "question": "If you want to attach two Actors to create a parent-child relationship, this can be done in the ____________.",
      "questionZh": "如果你想要將兩個 Actor 進行附加以建立父子階層關係，可以在 ____________ 中操作完成。",
      "options": [
        "World Outliner",
        "Details panel",
        "Content Browser",
        "Modes panel"
      ],
      "optionsZh": [
        "World Outliner（世界大綱面板）",
        "Details panel（細節屬性面板）",
        "Content Browser（內容瀏覽器）",
        "Modes panel（模式面板）"
      ],
      "rawAnswer": "World Outliner",
      "correctIndex": 0,
      "correctText": "World Outliner",
      "explanation": "【UE 4.27 核心考點：世界大綱中的拖曳附加】\n在 World Outliner 中，直接將一個 Actor 拖曳並放置到另一個 Actor 上方，即可快速將其附加（Attach）為子物件，建立父子階層關係。",
      "keywords": [
        {
          "term": "Details Panel（細節面板）",
          "role": "檢視並修改當前選取 Actor 的所有變換坐標、材質槽與組件屬性"
        },
        {
          "term": "World Outliner（世界大綱）",
          "role": "場景總管清單樹，以樹狀結構列出關卡內的所有實例化 Actor 物件"
        },
        {
          "term": "Modes Panel（模式面板）",
          "role": "提供放置幾何筆刷、地貌雕刻（Landscape）與植被繪製（Foliage）的核心面板"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "If you want to attach two <span class=\"term-en\">Actors</span><span class=\"inline-trans\">（場景物件/Actor）</span> to create a <span class=\"term-en\">parent-child relationship</span><span class=\"inline-trans\">（父子階層關聯）</span>, this can be done in the ____________.",
      "detailedOptions": [
        "World Outliner（世界大綱面板）",
        "Details panel（細節屬性面板）",
        "Content Browser（內容瀏覽器）",
        "Modes panel（模式面板）"
      ]
    },
    {
      "id": "h03_q8",
      "chapterId": "h03",
      "qNum": 8,
      "type": "TF",
      "question": "It is possible to set the Move transform to “Relative” and the Rotation transform to ”World” (absolute).",
      "questionZh": "在變換設定中，可以將移動變換（Move transform）設定為「相對（Relative）」，而將旋轉變換（Rotation transform）設定為「世界絕對（World）」。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：組件變換空間獨立性】\n正確。在 Details 面板中，每個組件的 Location、Rotation 與 Scale 旁邊的小下拉箭頭都可以單獨切換為 Relative（相對於父級）或 World（相對於世界原點）。",
      "keywords": [
        {
          "term": "Details Panel（細節面板）",
          "role": "檢視並修改當前選取 Actor 的所有變換坐標、材質槽與組件屬性"
        },
        {
          "term": "Transform（空間變換）",
          "role": "包含 Location（坐標位移）、Rotation（三軸旋轉角）與 Scale（三軸縮放比）"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "It is possible to set the <span class=\"term-en\">Move transform</span><span class=\"inline-trans\">（移動變換）</span> to “Relative” and the <span class=\"term-en\">Rotation transform</span><span class=\"inline-trans\">（旋轉變換）</span> to ”World” (absolute).",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h03_q9",
      "chapterId": "h03",
      "qNum": 9,
      "type": "MC",
      "question": "If a collection of Actors are assigned to a ____________ in the World Outliner, you can easily change all the Actors’ visibility.",
      "questionZh": "如果在世界大綱中將一組 Actor 指派給特定的 ____________，你可以輕鬆批次切換這些 Actor 的整體可見度。",
      "options": [
        "Parent",
        "Layer",
        "“Static” Mobility setting",
        "Teapot"
      ],
      "optionsZh": [
        "Parent（父階層）",
        "Layer（圖層管理）",
        "“Static” Mobility setting（「靜態（Static）」可移動性設定）",
        "Teapot（茶壺幾何模型）"
      ],
      "rawAnswer": "Layer",
      "correctIndex": 1,
      "correctText": "Layer",
      "explanation": "【UE 4.27 核心考點：圖層與資料夾可見度控制】\n在 World Outliner 中指派給圖層（Layer）或資料夾，點擊小眼睛圖示即可批次隱藏或顯示整組物件。",
      "keywords": [
        {
          "term": "World Outliner（世界大綱）",
          "role": "場景總管清單樹，以樹狀結構列出關卡內的所有實例化 Actor 物件"
        },
        {
          "term": "Mobility（移動性）",
          "role": "Static(靜態烘焙)、Stationary(固定位置動態光強)、Movable(完全動態即時物理)"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "If a collection of <span class=\"term-en\">Actors</span><span class=\"inline-trans\">（場景物件/Actor）</span> are assigned to a ____________ in the <span class=\"term-en\">World Outliner</span><span class=\"inline-trans\">（世界大綱/場景物件清單）</span>, you can easily change all the <span class=\"term-en\">Actors</span><span class=\"inline-trans\">（場景物件/Actor）</span>’ <span class=\"term-en\">visibility</span><span class=\"inline-trans\">（可見度）</span>.",
      "detailedOptions": [
        "Parent（父階層）",
        "Layer（圖層管理）",
        "“Static” Mobility setting（「靜態（Static）」可移動性設定）",
        "Teapot（茶壺幾何模型）"
      ]
    },
    {
      "id": "h03_q10",
      "chapterId": "h03",
      "qNum": 10,
      "type": "MC",
      "question": "You can use the ____________ to organize all aspects of a scene into one easy-to-read menu. By default, it appears in the top-right corner of the screen when you open a project.",
      "questionZh": "你可以使用 ____________ 將場景中的所有物件層面組織成一個清晰易讀的選單。預設情況下，當你開啟專案時它會顯示在畫面右上角。",
      "options": [
        "Modes panel",
        "World Outliner panel",
        "Content Browser",
        "Static Mesh Editor"
      ],
      "optionsZh": [
        "Modes panel（模式面板）",
        "World Outliner panel（世界大綱面板（場景物件清單樹狀圖））",
        "Content Browser（內容瀏覽器）",
        "Static Mesh Editor（靜態網格編輯器）"
      ],
      "rawAnswer": "World Outliner",
      "correctIndex": 1,
      "correctText": "World Outliner panel",
      "explanation": "【UE 4.27 核心考點：World Outliner 世界大綱面板】\n位於編輯器預設介面右上角，專門用來檢視並檢索當前關卡中所有實例化 Actor 的階層清單。",
      "keywords": [
        {
          "term": "World Outliner（世界大綱）",
          "role": "場景總管清單樹，以樹狀結構列出關卡內的所有實例化 Actor 物件"
        },
        {
          "term": "Modes Panel（模式面板）",
          "role": "提供放置幾何筆刷、地貌雕刻（Landscape）與植被繪製（Foliage）的核心面板"
        },
        {
          "term": "Static Mesh（靜態網格）",
          "role": "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "You can use the ____________ to organize all aspects of a scene into one easy-to-read menu."
        },
        {
          "partNum": 2,
          "en": "By default, it appears in the top-right corner of the screen when you open a project."
        }
      ],
      "detailedQuestion": "You can use the ____________ to organize all aspects of a scene into one easy-to-read menu. By default, it appears in the top-right corner of the screen when you open a project.",
      "detailedOptions": [
        "Modes panel（模式面板）",
        "World Outliner panel（世界大綱面板（場景物件清單樹狀圖））",
        "Content Browser（內容瀏覽器）",
        "Static Mesh Editor（靜態網格編輯器）"
      ]
    },
    {
      "id": "h04_q1",
      "chapterId": "h04",
      "qNum": 1,
      "type": "MC",
      "question": "The ____________ in UE4 allows you to modify and set the default preferences for Static Mesh assets.",
      "questionZh": "UE4 中的 ____________ 允許你修改並設定靜態網格資產（Static Mesh assets）的預設偏好設定。",
      "options": [
        "Destructible Editor",
        "Blueprint Editor",
        "Material Editor",
        "Static Mesh Editor"
      ],
      "optionsZh": [
        "Destructible Editor（可破壞網格編輯器）",
        "Blueprint Editor（藍圖編輯器）",
        "Material Editor（材質編輯器）",
        "Static Mesh Editor（靜態網格編輯器）"
      ],
      "rawAnswer": "Static Mesh Editor",
      "correctIndex": 3,
      "correctText": "Static Mesh Editor",
      "explanation": "【UE 4.27 核心考點：Static Mesh Editor 靜態網格編輯器】\n在內容瀏覽器中雙擊 Static Mesh 資產即可開啟，可在此調整 LOD 距離、UV 展開通道、光照貼圖解析度、設定簡單碰撞體與指派預設材質槽。",
      "keywords": [
        {
          "term": "Reference Viewer（引用檢視器）",
          "role": "以可視化節點圖展示資產與資產之間的雙向依賴引用關係樹"
        },
        {
          "term": "Static Mesh（靜態網格）",
          "role": "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
        },
        {
          "term": "Material（材質系統）",
          "role": "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The ____________ in UE4 allows you to modify and set the default preferences for <span class=\"term-en\">Static Mesh</span><span class=\"inline-trans\">（靜態網格 3D 模型）</span> assets.",
      "detailedOptions": [
        "Destructible Editor（可破壞網格編輯器）",
        "Blueprint Editor（藍圖編輯器）",
        "Material Editor（材質編輯器）",
        "Static Mesh Editor（靜態網格編輯器）"
      ]
    },
    {
      "id": "h04_q2",
      "chapterId": "h04",
      "qNum": 2,
      "type": "TF",
      "question": "Once a Static Mesh asset has been placed in a Level, it is referred to as a Static Mesh Actor.",
      "questionZh": "靜態網格資產一旦被放置在關卡中，就被稱為靜態網格 Actor（Static Mesh Actor）。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：資產 vs Actor 實例】\n正確。資產（Asset）是指存放在 Content 資料夾中的靜態資料檔案；當將其拖入關卡工作視窗（Level Viewport）後，便實例化為一個具備空間坐標變換的 Static Mesh Actor。",
      "keywords": [
        {
          "term": "Static Mesh（靜態網格）",
          "role": "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "Once a <span class=\"term-en\">Static Mesh</span><span class=\"inline-trans\">（靜態網格 3D 模型）</span> asset has been placed in a <span class=\"term-en\">Level</span><span class=\"inline-trans\">（關卡場景）</span>, it is referred to as a <span class=\"term-en\">Static Mesh Actor</span><span class=\"inline-trans\">（靜態網格物件）</span>.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h04_q3",
      "chapterId": "h04",
      "qNum": 3,
      "type": "TF",
      "question": "If you are unable to assign a collision preset to a Static Mesh Actor, it is most likely because the Static Mesh asset does not have a collision hull.",
      "questionZh": "如果你無法為 Static Mesh Actor 指派碰撞預設（Collision preset），最可能的原因是該靜態網格資產本身尚未建立碰撞外框（Collision hull）。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：缺少碰撞體的後果】\n正確。如果原始靜態網格資產完全沒有簡單碰撞幾何體（Simple Collision），無論在關卡中如何設定碰撞通道，都不會產生阻擋效果。",
      "keywords": [
        {
          "term": "Collision（碰撞體系）",
          "role": "阻止角色與物件穿透，並能觸發物理阻擋（Block）或重疊事件（Overlap）"
        },
        {
          "term": "Static Mesh（靜態網格）",
          "role": "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "If you are unable to assign a <span class=\"term-en\">collision</span><span class=\"inline-trans\">（物理碰撞）</span> preset to a <span class=\"term-en\">Static Mesh Actor</span><span class=\"inline-trans\">（靜態網格物件）</span>, it is most likely because the <span class=\"term-en\">Static Mesh</span><span class=\"inline-trans\">（靜態網格 3D 模型）</span> asset does not have a <span class=\"term-en\">collision hull</span><span class=\"inline-trans\">（物理碰撞外框/範圍）</span>.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h04_q4",
      "chapterId": "h04",
      "qNum": 4,
      "type": "MC",
      "question": "If you want a Static Mesh Actor to be lit in real time, you should change its Mobility setting to ____________.",
      "questionZh": "如果你想要讓一個靜態網格 Actor 能受到即時動態光照（Lit in real time），你應該將它的可移動性（Mobility）設定變更為 ____________。",
      "options": [
        "Hidden",
        "Static",
        "Movable",
        "Transform"
      ],
      "optionsZh": [
        "Hidden（隱藏不可見）",
        "Static（靜態光源（完全無法在運行時移動或變更，光影完全烘焙至貼圖））",
        "Movable（可移動光源（可在遊戲中任意位移變更顏色，開銷較高））",
        "Transform（空間變換（包含 Location 位移、Rotation 旋轉與 Scale 縮放））"
      ],
      "rawAnswer": "Movable",
      "correctIndex": 2,
      "correctText": "Movable",
      "explanation": "【UE 4.27 核心考點：Static Mesh 預設移動性】\n靜態網格 Actor 拖入關卡時預設為「Static（靜態）」，這意味著其位置固定不變，可以完全參與 Lightmass 光照貼圖的高品質離線烘焙。",
      "keywords": [
        {
          "term": "Transform（空間變換）",
          "role": "包含 Location（坐標位移）、Rotation（三軸旋轉角）與 Scale（三軸縮放比）"
        },
        {
          "term": "Static Mesh（靜態網格）",
          "role": "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
        },
        {
          "term": "Mobility（移動性）",
          "role": "Static(靜態烘焙)、Stationary(固定位置動態光強)、Movable(完全動態即時物理)"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "If you want a <span class=\"term-en\">Static Mesh Actor</span><span class=\"inline-trans\">（靜態網格物件）</span> to be lit in real time, you should change its <span class=\"term-en\">Mobility setting</span><span class=\"inline-trans\">（移動性設定）</span> to ____________.",
      "detailedOptions": [
        "Hidden（隱藏不可見）",
        "Static（靜態光源（完全無法在運行時移動或變更，光影完全烘焙至貼圖））",
        "Movable（可移動光源（可在遊戲中任意位移變更顏色，開銷較高））",
        "Transform（空間變換（包含 Location 位移、Rotation 旋轉與 Scale 縮放））"
      ]
    },
    {
      "id": "h04_q5",
      "chapterId": "h04",
      "qNum": 5,
      "type": "MC",
      "question": "The three collision response types are ____________.",
      "questionZh": "三種碰撞回應（Collision responses）類型分別是 ____________。",
      "options": [
        "Bounce, Hit, and Intersection",
        "Ignore, Overlap, and Block",
        "Ignore, Intersection, and Touch",
        "Block, Touch, and, Overlap"
      ],
      "optionsZh": [
        "Bounce, Hit, and Intersection（彈跳、碰撞擊中與幾何相交）",
        "Ignore, Overlap, and Block（忽略、重疊與阻擋）",
        "Ignore, Intersection, and Touch（忽略、幾何相交與接觸碰觸）",
        "Block, Touch, and, Overlap（阻擋、接觸碰觸與區域重疊）"
      ],
      "rawAnswer": "Ignore, Overlap, and Block",
      "correctIndex": 1,
      "correctText": "Ignore, Overlap, and Block",
      "explanation": "【UE 4.27 核心考點：碰撞回應三態】\n- Ignore：完全穿透無事件。\n- Overlap：穿透但發出重疊事件（觸發器）。\n- Block：物理實體阻擋並發出 Hit 擊中事件。",
      "keywords": [
        {
          "term": "Collision（碰撞體系）",
          "role": "阻止角色與物件穿透，並能觸發物理阻擋（Block）或重疊事件（Overlap）"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The three <span class=\"term-en\">collision</span><span class=\"inline-trans\">（物理碰撞）</span> response types are ____________.",
      "detailedOptions": [
        "Bounce, Hit, and Intersection（彈跳、碰撞擊中與幾何相交）",
        "Ignore, Overlap, and Block（忽略、重疊與阻擋）",
        "Ignore, Intersection, and Touch（忽略、幾何相交與接觸碰觸）",
        "Block, Touch, and, Overlap（阻擋、接觸碰觸與區域重疊）"
      ]
    },
    {
      "id": "h04_q6",
      "chapterId": "h04",
      "qNum": 6,
      "type": "TF",
      "question": "By default, lightmap UV channels are stored in UV Channel 2.",
      "questionZh": "在預設情況下，光照貼圖 UV 通道（Lightmap UV channels）儲存在 UV 通道 2（UV Channel 2）中。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "False",
      "correctIndex": 1,
      "correctText": "False",
      "explanation": "【UE 4.27 核心考點：實例材質覆蓋原則】\n錯誤。在關卡中選取 Actor 修改材質，只會影響該場景實例（Override），不會修改 Content Browser 中原始資產的預設材質設定。",
      "keywords": [
        {
          "term": "Unreal Engine 4.27 核心架構",
          "role": "遵循教材與引擎核心工作流規範"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "By default, lightmap <span class=\"term-en\">UV channels</span><span class=\"inline-trans\">（UV 貼圖通道）</span> are stored in UV Channel 2.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h04_q7",
      "chapterId": "h04",
      "qNum": 7,
      "type": "MC",
      "question": "The two common file types used to import 3D models into the Editor are ____________.",
      "questionZh": "用來將 3D 模型匯入編輯器的兩種常見檔案類型是 ____________。",
      "options": [
        ".pdf and .fbx",
        ".fbx and .obj",
        ".obj and .3ds",
        ".stl and .obj"
      ],
      "optionsZh": [
        ".pdf and .fbx（.pdf 文件與 .fbx 模型）",
        ".fbx and .obj（.fbx 與 .obj（3D 模型標準通用交換格式））",
        ".obj and .3ds（.obj 與 .3ds 格式）",
        ".stl and .obj（.stl 與 .obj 格式）"
      ],
      "rawAnswer": ".fbx and .obj",
      "correctIndex": 1,
      "correctText": ".fbx and .obj",
      "explanation": "【UE 4.27 核心考點：Content Browser 匯入操作】\n點擊 Content Browser 左上角的綠色「Import」按鈕，或在檔案清單空白處右鍵點選「Import to ...」，即可匯入外部 FBX、OBJ、PNG 等素材。",
      "keywords": [
        {
          "term": "Unreal Engine 4.27 核心架構",
          "role": "遵循教材與引擎核心工作流規範"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The two common file types used to import 3D models into the <span class=\"term-en\">Editor</span><span class=\"inline-trans\">（虛幻編輯器）</span> are ____________.",
      "detailedOptions": [
        ".pdf and .fbx（.pdf 文件與 .fbx 模型）",
        ".fbx and .obj（.fbx 與 .obj（3D 模型標準通用交換格式））",
        ".obj and .3ds（.obj 與 .3ds 格式）",
        ".stl and .obj（.stl 與 .obj 格式）"
      ]
    },
    {
      "id": "h04_q8",
      "chapterId": "h04",
      "qNum": 8,
      "type": "TF",
      "question": "It is possible to change the Static Mesh asset that a Static Mesh Actor references.",
      "questionZh": "變更一個 Static Mesh Actor 所參照引用的靜態網格資產（Static Mesh asset）是可行的操作。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：碰撞最佳化原則】\n錯誤。無論距離遠近，遊戲物件都應盡量使用低開銷的簡單碰撞（Simple Collision）以維持高效能物理運算，複雜碰撞（Complex Collision）會造成嚴重的 CPU 效能浪費。",
      "keywords": [
        {
          "term": "Collision（碰撞體系）",
          "role": "阻止角色與物件穿透，並能觸發物理阻擋（Block）或重疊事件（Overlap）"
        },
        {
          "term": "Reference Viewer（引用檢視器）",
          "role": "以可視化節點圖展示資產與資產之間的雙向依賴引用關係樹"
        },
        {
          "term": "Static Mesh（靜態網格）",
          "role": "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "It is possible to change the <span class=\"term-en\">Static Mesh</span><span class=\"inline-trans\">（靜態網格 3D 模型）</span> asset that a <span class=\"term-en\">Static Mesh Actor</span><span class=\"inline-trans\">（靜態網格物件）</span> references.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h04_q9",
      "chapterId": "h04",
      "qNum": 9,
      "type": "TF",
      "question": "You can create multiple collision hulls on a single Static Mesh asset.",
      "questionZh": "你可以在單一靜態網格資產（Static Mesh asset）上建立多個碰撞外框（Collision hulls）。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：Socket 插槽工具】\n在靜態網格編輯器中新增 Socket，可定義局部位置、旋轉與縮放，供藍圖或關卡中其他 Actor（如火把特效、燈光）精準附著吸附。",
      "keywords": [
        {
          "term": "Collision（碰撞體系）",
          "role": "阻止角色與物件穿透，並能觸發物理阻擋（Block）或重疊事件（Overlap）"
        },
        {
          "term": "Static Mesh（靜態網格）",
          "role": "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
        },
        {
          "term": "Socket（插槽）",
          "role": "網格模型上的指定附著點，供武器、裝飾帽子或光效精準對齊吸附"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "You can create multiple <span class=\"term-en\">collision hulls</span><span class=\"inline-trans\">（物理碰撞外框/範圍）</span> on a single <span class=\"term-en\">Static Mesh</span><span class=\"inline-trans\">（靜態網格 3D 模型）</span> asset.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h04_q10",
      "chapterId": "h04",
      "qNum": 10,
      "type": "MC",
      "question": "You press ____________ to toggle collision hull visibility on and off in the Level Editor Viewport.",
      "questionZh": "在關卡編輯器工作視窗中，你可以按下 ____________ 來切換開啟或關閉碰撞外框（Collision hull）的可見度。",
      "options": [
        "Atl+C",
        "Atl+H",
        "Ctrl+Alt+C",
        "Shift+H"
      ],
      "optionsZh": [
        "Atl+C（Alt+C（顯示/隱藏關卡工作視窗碰撞外框線快捷鍵））",
        "Atl+H（Alt+H（無效快捷鍵組合））",
        "Ctrl+Alt+C（無效快捷鍵組合）",
        "Shift+H（無效快捷鍵組合）"
      ],
      "rawAnswer": "Atl+C",
      "correctIndex": 0,
      "correctText": "Atl+C",
      "explanation": "【UE 4.27 核心考點：關卡工作視窗碰撞快捷鍵】\n在關卡工作視窗中按下 Alt + C（原官方答案文件筆誤印刷為 Atl+C）可快速開啟或隱藏關卡中所有 Actor 的碰撞外框（Collision Visualization）。",
      "keywords": [
        {
          "term": "Collision（碰撞體系）",
          "role": "阻止角色與物件穿透，並能觸發物理阻擋（Block）或重疊事件（Overlap）"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "You press ____________ to toggle <span class=\"term-en\">collision hull</span><span class=\"inline-trans\">（物理碰撞外框/範圍）</span> <span class=\"term-en\">visibility</span><span class=\"inline-trans\">（可見度）</span> on and off in the <span class=\"term-en\">Level</span><span class=\"inline-trans\">（關卡場景）</span> <span class=\"term-en\">Editor Viewport</span><span class=\"inline-trans\">（編輯器場景視窗）</span>.",
      "detailedOptions": [
        "Atl+C（Alt+C（顯示/隱藏關卡工作視窗碰撞外框線快捷鍵））",
        "Atl+H（Alt+H（無效快捷鍵組合））",
        "Ctrl+Alt+C（無效快捷鍵組合）",
        "Shift+H（無效快捷鍵組合）"
      ]
    },
    {
      "id": "h05_q1",
      "chapterId": "h05",
      "qNum": 1,
      "type": "MC",
      "question": "____________ is UE4’s offline global illumination rendering engine and is used to calculating lighting for Light and Static Mesh Actors with a Mobility setting of “Static”.",
      "questionZh": "____________ 是 UE4 的離線全局光照渲染引擎，用於為可移動性設定為「Static（靜態）」的光源與靜態網格 Actor 計算光照。",
      "options": [
        "Lightmass",
        "Renderman",
        "Mental Ray",
        "Raytrace"
      ],
      "optionsZh": [
        "Lightmass（靜態全局光照與高質量烘焙系統）",
        "Renderman（Pixar 傳統電影離線照片級渲染器）",
        "Mental Ray（傳統光線追蹤渲染引擎）",
        "Raytrace（即時光線追蹤技術）"
      ],
      "rawAnswer": "Lightmass",
      "correctIndex": 0,
      "correctText": "Lightmass",
      "explanation": "【UE 4.27 核心考點：Lightmass 光照烘焙系統】\nLightmass 是 UE4 核心靜態全域光照計算器，能預先計算漫反射光線多次反彈，將柔和陰影與環境光遮蔽烘焙到靜態光照貼圖（Lightmaps）中。",
      "keywords": [
        {
          "term": "Static Mesh（靜態網格）",
          "role": "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
        },
        {
          "term": "Mobility（移動性）",
          "role": "Static(靜態烘焙)、Stationary(固定位置動態光強)、Movable(完全動態即時物理)"
        },
        {
          "term": "Lightmass（光照烘焙系統）",
          "role": "離線預先計算光線多次反彈，將柔和漫反射陰影寫入光照貼圖（Lightmaps）"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "____________ is UE4’s offline global illumination rendering engine and is used to calculating lighting for Light and <span class=\"term-en\">Static Mesh Actors</span><span class=\"inline-trans\">（靜態網格物件）</span> with a <span class=\"term-en\">Mobility setting</span><span class=\"inline-trans\">（移動性設定）</span> of “Static”.",
      "detailedOptions": [
        "Lightmass（靜態全局光照與高質量烘焙系統）",
        "Renderman（Pixar 傳統電影離線照片級渲染器）",
        "Mental Ray（傳統光線追蹤渲染引擎）",
        "Raytrace（即時光線追蹤技術）"
      ]
    },
    {
      "id": "h05_q2",
      "chapterId": "h05",
      "qNum": 2,
      "type": "TF",
      "question": "Sky Light Actors do not cast dynamic shadows.",
      "questionZh": "天空光照 Actor（Sky Light Actors）不會投射動態即時陰影。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：Directional Light 定向光】\n正確。定向光源發射平行光束，其在關卡中的位置座標不影響光線投射，僅由旋轉（Rotation）決定日光照射角度。",
      "keywords": [
        {
          "term": "Directional Light（定向光源）",
          "role": "無限遠平行日光投射，僅旋轉角度影響日照方向，模擬太陽或月光"
        },
        {
          "term": "Sky Light（天空光）",
          "role": "捕捉遠方天空半球色彩分佈，為戶外場景提供均勻柔和的天光環境漫反射"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "<span class=\"term-en\">Sky Light</span><span class=\"inline-trans\">（天空光：環境全域補光）</span> <span class=\"term-en\">Actors</span><span class=\"inline-trans\">（場景物件/Actor）</span> do not cast dynamic shadows.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h05_q3",
      "chapterId": "h05",
      "qNum": 3,
      "type": "MC",
      "question": "A ____________ works much like a real-world lightbulb, emitting light equally in all directions from a single point in space.",
      "questionZh": "____________ 運作方式非常類似於現實中的燈泡，從空間中的單一點向所有方向均勻發射光線。",
      "options": [
        "Directional Light",
        "Sky Light",
        "Point Light",
        "Spot Light"
      ],
      "optionsZh": [
        "Directional Light（定向光源（模擬無限遠太陽直射光，全場景平行光））",
        "Sky Light（天空光照（捕捉遠景半球環境光與環境天光反射））",
        "Point Light（點光源（模擬燈泡，從單點向 360 度四面八方均勻發光））",
        "Spot Light（聚光燈（模擬手電筒或舞台射燈，向錐形範圍定向照射））"
      ],
      "rawAnswer": "Point Light",
      "correctIndex": 2,
      "correctText": "Point Light",
      "explanation": "【UE 4.27 核心考點：Point Light 點光源】\nPoint Light 具有半徑衰減球體，從單一點向 360 度全向發光，常用於吊燈、壁燈、火把等光源。",
      "keywords": [
        {
          "term": "Point Light（點光源）",
          "role": "無方向性 360 度球形全向發光，常用於蠟燭、燈泡與火球"
        },
        {
          "term": "Spot Light（聚光燈）",
          "role": "圓錐體發光，具備內/外圓錐角衰減，常用於手電筒、車燈與探照燈"
        },
        {
          "term": "Directional Light（定向光源）",
          "role": "無限遠平行日光投射，僅旋轉角度影響日照方向，模擬太陽或月光"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "A ____________ works much like a real-world lightbulb, emitting light equally in all directions from a single point in space.",
      "detailedOptions": [
        "Directional Light（定向光源（模擬無限遠太陽直射光，全場景平行光））",
        "Sky Light（天空光照（捕捉遠景半球環境光與環境天光反射））",
        "Point Light（點光源（模擬燈泡，從單點向 360 度四面八方均勻發光））",
        "Spot Light（聚光燈（模擬手電筒或舞台射燈，向錐形範圍定向照射））"
      ]
    },
    {
      "id": "h05_q4",
      "chapterId": "h05",
      "qNum": 4,
      "type": "TF",
      "question": "Light attenuation is a drop in light intensity over distance.",
      "questionZh": "光照衰減（Light attenuation）是指光線強度隨距離增加而降低的現象。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：Spot Light 聚光燈】\n正確。Spot Light 圓錐形發光，Inner Cone Angle 範圍內為全亮，Inner 與 Outer 之間平滑過渡衰減，常用於手電筒、探照燈與汽車前燈。",
      "keywords": [
        {
          "term": "Spot Light（聚光燈）",
          "role": "圓錐體發光，具備內/外圓錐角衰減，常用於手電筒、車燈與探照燈"
        },
        {
          "term": "Sound Attenuation（聲音衰減）",
          "role": "定義聲音隨距離拉遠時的音量衰減曲線與 3D 空間立體聲像定位（Spatialization）"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "Light attenuation is a drop in light intensity over distance.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h05_q5",
      "chapterId": "h05",
      "qNum": 5,
      "type": "MC",
      "question": "While Light Actors with a Mobility setting of ____________ do not move, their brightness can be changed at runtime.",
      "questionZh": "雖然可移動性設定為 ____________ 的光源 Actor 無法在遊戲中移動位置，但它們的亮度可以在遊戲執行期間動態變更。",
      "options": [
        "Dynamic",
        "Static",
        "Movable",
        "Stationary"
      ],
      "optionsZh": [
        "Dynamic（完全動態光源（無預先烘焙，支援完全即時陰影））",
        "Static（靜態光源（完全無法在運行時移動或變更，光影完全烘焙至貼圖））",
        "Movable（可移動光源（可在遊戲中任意位移變更顏色，開銷較高））",
        "Stationary（固定光源（位置固定但可動態改變強度顏色，混合烘焙間接光與即時直接光））"
      ],
      "rawAnswer": "Stationary",
      "correctIndex": 3,
      "correctText": "Stationary",
      "explanation": "【UE 4.27 核心考點：Stationary 固定光源】\n固定光源兼具靜態烘焙陰影品質與動態屬性控制能力。位置不能位移，但其強度（Intensity）與顏色（Light Color）可在運行時透過藍圖隨時改變。",
      "keywords": [
        {
          "term": "Mobility（移動性）",
          "role": "Static(靜態烘焙)、Stationary(固定位置動態光強)、Movable(完全動態即時物理)"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "While Light <span class=\"term-en\">Actors</span><span class=\"inline-trans\">（場景物件/Actor）</span> with a <span class=\"term-en\">Mobility setting</span><span class=\"inline-trans\">（移動性設定）</span> of ____________ do not move, their brightness can be changed at runtime.",
      "detailedOptions": [
        "Dynamic（完全動態光源（無預先烘焙，支援完全即時陰影））",
        "Static（靜態光源（完全無法在運行時移動或變更，光影完全烘焙至貼圖））",
        "Movable（可移動光源（可在遊戲中任意位移變更顏色，開銷較高））",
        "Stationary（固定光源（位置固定但可動態改變強度顏色，混合烘焙間接光與即時直接光））"
      ]
    },
    {
      "id": "h05_q6",
      "chapterId": "h05",
      "qNum": 6,
      "type": "TF",
      "question": "When you build lighting, Blueprints are compiled.",
      "questionZh": "當你建置光照（Build lighting）時，藍圖也會同時被編譯。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "False",
      "correctIndex": 1,
      "correctText": "False",
      "explanation": "【UE 4.27 核心考點：靜態光源無動態陰影】\n錯誤。Static 光源的所有直射與間接光均在烘焙時寫死到靜態 Lightmap 中，遊戲運行時完全不進行任何即時動態陰影計算，因此效能消耗最低。",
      "keywords": [
        {
          "term": "Unreal Engine 4.27 核心架構",
          "role": "遵循教材與引擎核心工作流規範"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "When you build lighting, <span class=\"term-en\">Blueprints</span><span class=\"inline-trans\">（藍圖可視化腳本）</span> are compiled.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h05_q7",
      "chapterId": "h05",
      "qNum": 7,
      "type": "MC",
      "question": "____________ manages communication between the Editor and Lightmass. When you build lighting, it keeps track of and displays the build progress.",
      "questionZh": "____________ 負責管理編輯器與 Lightmass 之間的通訊。當你建置光照時，它會追蹤並顯示建置進度。",
      "options": [
        "Epic Games Launcher",
        "Radiosity",
        "Scanline",
        "Swarm Agent"
      ],
      "optionsZh": [
        "Epic Games Launcher（Epic Games 官方啟動器）",
        "Radiosity（熱輻射度光照演算法）",
        "Scanline（光柵掃描線渲染演算法）",
        "Swarm Agent（分佈式多電腦/多核心光照烘焙運算代理程序）"
      ],
      "rawAnswer": "Swarm Agent",
      "correctIndex": 3,
      "correctText": "Swarm Agent",
      "explanation": "【UE 4.27 核心考點：Swarm Agent 烘焙管理器】\n點擊 Build Lighting 時，Windows 系統匣會啟動 Swarm Agent，負責調度 CPU 多核心執行緒計算 Lightmass 任務，並支援區域網路分散式運算。",
      "keywords": [
        {
          "term": "Epic Games Launcher",
          "role": "虛幻桌面樞紐，負責多版本引擎管理、商城素材購買與官方文件範例下載"
        },
        {
          "term": "Lightmass（光照烘焙系統）",
          "role": "離線預先計算光線多次反彈，將柔和漫反射陰影寫入光照貼圖（Lightmaps）"
        },
        {
          "term": "Swarm Agent",
          "role": "背景光照計算調度器，協調 CPU 多核心運算並支援區域網絡分散式並行算圖"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "____________ manages communication between the Editor and Lightmass."
        },
        {
          "partNum": 2,
          "en": "When you build lighting, it keeps track of and displays the build progress."
        }
      ],
      "detailedQuestion": "____________ manages communication between the <span class=\"term-en\">Editor</span><span class=\"inline-trans\">（虛幻編輯器）</span> and <span class=\"term-en\">Lightmass</span><span class=\"inline-trans\">（Lightmass 靜態光照烘焙系統）</span>. When you build lighting, it keeps track of and displays the build progress.",
      "detailedOptions": [
        "Epic Games Launcher（Epic Games 官方啟動器）",
        "Radiosity（熱輻射度光照演算法）",
        "Scanline（光柵掃描線渲染演算法）",
        "Swarm Agent（分佈式多電腦/多核心光照烘焙運算代理程序）"
      ]
    },
    {
      "id": "h05_q8",
      "chapterId": "h05",
      "qNum": 8,
      "type": "TF",
      "question": "It is possible to change the Lightmap resolution on a per-Actor basis.",
      "questionZh": "針對每個個別 Actor 單獨變更其光照貼圖解析度（Lightmap resolution）是可行的操作。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：Sky Light 天空光】\n正確。Sky Light 捕捉整個天空半球的色彩分佈，為戶外場景提供柔和均勻的環境補光與天光漫反射。",
      "keywords": [
        {
          "term": "Sky Light（天空光）",
          "role": "捕捉遠方天空半球色彩分佈，為戶外場景提供均勻柔和的天光環境漫反射"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "It is possible to change the Lightmap resolution on a per-<span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span> basis.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h05_q9",
      "chapterId": "h05",
      "qNum": 9,
      "type": "MC",
      "question": "____________ is a 3D computer graphics term used to describe the process of creating raster images based on camera, light, and model position and Material properties. Common rendering methods include scanline rendering, ray tracing, and radiosity methods.",
      "questionZh": "____________ 是一個 3D 電腦圖形學術語，用來描述根據相機、光源、模型位置與材質屬性建立光柵影像的過程。常見的渲染方法包含掃描線渲染、光線追蹤與熱輻射法。",
      "options": [
        "Rasterization",
        "Rendering",
        "Build",
        "Swarm"
      ],
      "optionsZh": [
        "Rasterization（光柵化演算法）",
        "Rendering（即時著色渲染過程）",
        "Build（建置光照（Build Lighting））",
        "Swarm（分佈式光照編譯協調系統）"
      ],
      "rawAnswer": "Rendering",
      "correctIndex": 1,
      "correctText": "Rendering",
      "explanation": "【UE 4.27 核心考點：Rendering 渲染管線】\nRendering（渲染）是虛幻引擎渲染管線將 3D 模型頂點、燈光、材質著色器經由光柵化/光線追蹤最終繪製到 2D 螢幕像素的過程。",
      "keywords": [
        {
          "term": "Swarm Agent",
          "role": "背景光照計算調度器，協調 CPU 多核心運算並支援區域網絡分散式並行算圖"
        },
        {
          "term": "Material（材質系統）",
          "role": "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "____________ is a 3D computer graphics term used to describe the process of creating raster images based on camera, light, and model position and Material properties."
        },
        {
          "partNum": 2,
          "en": "Common rendering methods include scanline rendering, ray tracing, and radiosity methods."
        }
      ],
      "detailedQuestion": "____________ is a 3D computer graphics term used to describe the process of creating raster images based on camera, light, and model <span class=\"term-en\">position</span><span class=\"inline-trans\">（位置坐標）</span> and <span class=\"term-en\">Material</span><span class=\"inline-trans\">（材質）</span> properties. Common rendering methods include scanline rendering, ray tracing, and radiosity methods.",
      "detailedOptions": [
        "Rasterization（光柵化演算法）",
        "Rendering（即時著色渲染過程）",
        "Build（建置光照（Build Lighting））",
        "Swarm（分佈式光照編譯協調系統）"
      ]
    },
    {
      "id": "h05_q10",
      "chapterId": "h05",
      "qNum": 10,
      "type": "MC",
      "question": "The ____________ light property overrides light color properties and uses real-world values in kelvins to define the color of a light. For example, a 100W incandescent lightbulb has a temperature of 2,800K.",
      "questionZh": "____________ 光源屬性會覆蓋光源顏色設定，並使用以開爾文（Kelvin）為單位的真實世界數值來定義光線顏色。例如，一顆 100W 白熾燈泡的色溫為 2,800K。",
      "options": [
        "IES",
        "Temperature",
        "Intensity",
        "Attenuation"
      ],
      "optionsZh": [
        "IES（光學設定檔（由真實燈具廠商提供的物理光照分佈圖樣））",
        "Temperature（色溫（單位：克耳文 K，控制偏冷或偏暖光色））",
        "Intensity（發光強度（單位：流明或燭光））",
        "Attenuation（衰減半徑（光源影響的最遠物理距離））"
      ],
      "rawAnswer": "Temperature",
      "correctIndex": 1,
      "correctText": "Temperature",
      "explanation": "【UE 4.27 核心考點：Light Temperature 色溫系統】\n以 Kelvin（K）為物理單位：暖黃燭光約 1800K、鎢絲燈約 3200K、正午日光約 6500K、陰天冷藍天光約 9000K 以上，提供物理精準的發光色彩。",
      "keywords": [
        {
          "term": "Light Temperature（色溫）",
          "role": "以開爾文(Kelvin)為單位物理著色：1800K(暖燭光)、6500K(正午日光)、9000K+(冷藍光)"
        },
        {
          "term": "Sound Attenuation（聲音衰減）",
          "role": "定義聲音隨距離拉遠時的音量衰減曲線與 3D 空間立體聲像定位（Spatialization）"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "The ____________ light property overrides light color properties and uses real-world values in kelvins to define the color of a light."
        },
        {
          "partNum": 2,
          "en": "For example, a 100W incandescent lightbulb has a temperature of 2,800K."
        }
      ],
      "detailedQuestion": "The ____________ light property overrides light color properties and uses real-world values in kelvins to define the color of a light. For example, a 100W incandescent lightbulb has a temperature of 2,800K.",
      "detailedOptions": [
        "IES（光學設定檔（由真實燈具廠商提供的物理光照分佈圖樣））",
        "Temperature（色溫（單位：克耳文 K，控制偏冷或偏暖光色））",
        "Intensity（發光強度（單位：流明或燭光））",
        "Attenuation（衰減半徑（光源影響的最遠物理距離））"
      ]
    },
    {
      "id": "h06_q1",
      "chapterId": "h06",
      "qNum": 1,
      "type": "MC",
      "question": "The ____________ Editor is a node-based system that uses expressions and functions to create a desired surface.",
      "questionZh": "____________ 編輯器是一個節點式系統，使用表達式與函數來建立所需的物體表面著色外觀。",
      "options": [
        "Lightmass",
        "Texture",
        "Shader",
        "Material"
      ],
      "optionsZh": [
        "Lightmass（靜態全局光照與高質量烘焙系統）",
        "Texture（貼圖（儲存像素顏色或數值資訊的 2D 點陣圖片資產））",
        "Shader（著色器（在 GPU 上執行的底層渲染計算程式碼指令））",
        "Material（材質（定義物體表面著色外觀與光學特性的主資產））"
      ],
      "rawAnswer": "Material",
      "correctIndex": 3,
      "correctText": "Material",
      "explanation": "【UE 4.27 核心考點：Material 材質資產】\nMaterial 包含完整的表面著色演算法網絡，告訴著色器如何與光線交互，包含 Base Color、Metallic、Roughness、Normal 等屬性。",
      "keywords": [
        {
          "term": "Lightmass（光照烘焙系統）",
          "role": "離線預先計算光線多次反彈，將柔和漫反射陰影寫入光照貼圖（Lightmaps）"
        },
        {
          "term": "Material（材質系統）",
          "role": "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
        },
        {
          "term": "Roughness（粗糙度）",
          "role": "0.0 為極度平滑鏡面高光，1.0 為完全粗糙漫散射消光表面"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The ____________ <span class=\"term-en\">Editor</span><span class=\"inline-trans\">（虛幻編輯器）</span> is a node-based system that uses expressions and functions to create a desired surface.",
      "detailedOptions": [
        "Lightmass（靜態全局光照與高質量烘焙系統）",
        "Texture（貼圖（儲存像素顏色或數值資訊的 2D 點陣圖片資產））",
        "Shader（著色器（在 GPU 上執行的底層渲染計算程式碼指令））",
        "Material（材質（定義物體表面著色外觀與光學特性的主資產））"
      ]
    },
    {
      "id": "h06_q2",
      "chapterId": "h06",
      "qNum": 2,
      "type": "TF",
      "question": "To open the Material Editor, you need to create a new Material asset or double-click on an existing Material in the Content Browser.",
      "questionZh": "要開啟材質編輯器，你需要在內容瀏覽器中建立一個新的材質資產，或連按兩下開啟既有的材質資產。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：Material Instance 材質實例】\n正確。Material Instance 繼承父材質編譯好的著色器代碼，修改參數時無需重新編譯，可在幾毫秒內即時預覽外觀變更，大幅提升製作效率。",
      "keywords": [
        {
          "term": "Material（材質系統）",
          "role": "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "To open the <span class=\"term-en\">Material Editor</span><span class=\"inline-trans\">（材質編輯器）</span>, you need to create a new <span class=\"term-en\">Material</span><span class=\"inline-trans\">（材質）</span> asset or double-click on an existing <span class=\"term-en\">Material</span><span class=\"inline-trans\">（材質）</span> in the <span class=\"term-en\">Content Browser</span><span class=\"inline-trans\">（內容瀏覽器/素材庫）</span>.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h06_q3",
      "chapterId": "h06",
      "qNum": 3,
      "type": "MC",
      "question": "“PBR” stands for ____________.",
      "questionZh": "「PBR」是 ____________ 的英文縮寫。",
      "options": [
        "Physical-based rasterization",
        "Physical baking and rendering",
        "Physically based rendering",
        "Photon-based rendering"
      ],
      "optionsZh": [
        "Physical-based rasterization（物理光柵化計算）",
        "Physical baking and rendering（物理烘焙與渲染）",
        "Physically based rendering（基於物理的渲染技術（PBR：以真實物理光學呈現擬真光影））",
        "Photon-based rendering（基於光子散射的渲染技術）"
      ],
      "rawAnswer": "Physically based rendering",
      "correctIndex": 2,
      "correctText": "Physically based rendering",
      "explanation": "【UE 4.27 核心考點：PBR 基於物理著色】\nPhysically Based Rendering 遵循能量守恆定律與物理光學測量數據，確保材質在艷陽、室內或夜間等任何光照環境下都呈現逼真自然的外觀。",
      "keywords": [
        {
          "term": "PBR（基於物理的渲染）",
          "role": "基於真實物理光學測量，確保在任何光照條件下外觀材質都自然逼真"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "“PBR” stands for ____________.",
      "detailedOptions": [
        "Physical-based rasterization（物理光柵化計算）",
        "Physical baking and rendering（物理烘焙與渲染）",
        "Physically based rendering（基於物理的渲染技術（PBR：以真實物理光學呈現擬真光影））",
        "Photon-based rendering（基於光子散射的渲染技術）"
      ]
    },
    {
      "id": "h06_q4",
      "chapterId": "h06",
      "qNum": 4,
      "type": "TF",
      "question": "If a Material is not metallic, then you will need to use the Specular input.",
      "questionZh": "如果一個材質不是金屬（Non-metallic），那麼你就必須使用 Specular（高光）輸入端。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：Roughness 粗糙度參數】\n正確。Roughness 介於 0.0 ~ 1.0 之間：0.0 產生極度銳利的光澤鏡面高光；1.0 產生完全漫散射無清晰高光斑的消光表面。",
      "keywords": [
        {
          "term": "Material（材質系統）",
          "role": "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
        },
        {
          "term": "Roughness（粗糙度）",
          "role": "0.0 為極度平滑鏡面高光，1.0 為完全粗糙漫散射消光表面"
        },
        {
          "term": "Metallic（金屬度）",
          "role": "物理上非 0 即 1（純導體為 1.0，純絕緣體為 0.0），中間值僅用於鏽蝕油污"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "If a <span class=\"term-en\">Material</span><span class=\"inline-trans\">（材質）</span> is not metallic, then you will need to use the Specular input.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h06_q5",
      "chapterId": "h06",
      "qNum": 5,
      "type": "MC",
      "question": "Base color, also called ____________, defines the overall color of a Material. It takes in a Vector3 (RGB) value, and each channel is automatically clamped between 0 and 1. It is the core color description of the surface in a Material minus shadow and lighting detail.",
      "questionZh": "基礎顏色（Base color，也稱為 ____________）定義了材質的整體顏色。它接收 Vector3（RGB）數值，且每個通道會自動限制在 0 與 1 之間。它是材質表面的核心顏色描述，不包含任何陰影與光照細節。",
      "options": [
        "Emissive",
        "Roughness",
        "Specular",
        "Albedo"
      ],
      "optionsZh": [
        "Emissive（自發光顏色（不受外部光照影響的自體發光色彩））",
        "Roughness（粗糙度（0 代表鏡面極平滑、1 代表完全粗糙漫射））",
        "Specular（高光反射強度（主要控制非金屬電介質表面的反射微調））",
        "Albedo（反照率色彩（不帶陰影高光的表面固有色彩））"
      ],
      "rawAnswer": "Albedo",
      "correctIndex": 3,
      "correctText": "Albedo",
      "explanation": "【UE 4.27 核心考點：Albedo 反照率】\nAlbedo 貼圖代表物體表面的純固有色，PBR 製作標準嚴格要求 Albedo 貼圖內「不得包含任何方向性光照、高光或環境陰影（AO）」。",
      "keywords": [
        {
          "term": "Material（材質系統）",
          "role": "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
        },
        {
          "term": "PBR（基於物理的渲染）",
          "role": "基於真實物理光學測量，確保在任何光照條件下外觀材質都自然逼真"
        },
        {
          "term": "Albedo / Base Color（反照率）",
          "role": "物體的純粹固有色彩貼圖，PBR 規範中嚴禁包含任何預先烘焙的方向性光影"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "Base color, also called ____________, defines the overall color of a Material."
        },
        {
          "partNum": 2,
          "en": "It takes in a Vector3 (RGB) value, and each channel is automatically clamped between 0 and 1."
        },
        {
          "partNum": 3,
          "en": "It is the core color description of the surface in a Material minus shadow and lighting detail."
        }
      ],
      "detailedQuestion": "Base color, also called ____________, defines the overall color of a <span class=\"term-en\">Material</span><span class=\"inline-trans\">（材質）</span>. It takes in a Vector3 (RGB) value, and each channel is automatically clamped between 0 and 1. It is the core color description of the surface in a <span class=\"term-en\">Material</span><span class=\"inline-trans\">（材質）</span> minus shadow and lighting detail.",
      "detailedOptions": [
        "Emissive（自發光顏色（不受外部光照影響的自體發光色彩））",
        "Roughness（粗糙度（0 代表鏡面極平滑、1 代表完全粗糙漫射））",
        "Specular（高光反射強度（主要控制非金屬電介質表面的反射微調））",
        "Albedo（反照率色彩（不帶陰影高光的表面固有色彩））"
      ]
    },
    {
      "id": "h06_q6",
      "chapterId": "h06",
      "qNum": 6,
      "type": "TF",
      "question": "Mipmaps are automatically generated for imported texture files that are not powers of 2.",
      "questionZh": "對於不是 2 的次方（Powers of 2）尺寸的匯入貼圖檔案，系統會自動生成 Mipmaps 多級漸進紋理。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "False",
      "correctIndex": 1,
      "correctText": "False",
      "explanation": "【UE 4.27 核心考點：Metallic 金屬度物理規則】\n錯誤。物理純導體（純金屬，如鐵、銅、金）的金屬度為 1.0；純絕緣體（非金屬，如塑膠、木頭、石頭、皮革）的金屬度為 0.0。只有生鏽或油污等極少數過渡狀態才會使用中間值。",
      "keywords": [
        {
          "term": "Metallic（金屬度）",
          "role": "物理上非 0 即 1（純導體為 1.0，純絕緣體為 0.0），中間值僅用於鏽蝕油污"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "Mipmaps are automatically generated for imported texture files that are not powers of 2.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h06_q7",
      "chapterId": "h06",
      "qNum": 7,
      "type": "TF",
      "question": "While UV tiling is controlled in the Material Editor using the Texture Coordinate node, the tiling of a Texture is controlled in the Texture properties.",
      "questionZh": "雖然 UV 平鋪重複（UV tiling）是在材質編輯器中使用 Texture Coordinate 節點進行控制，但貼圖本身的平鋪則是在貼圖屬性中進行控制。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：貼圖資產匯入】\n正確。UE4 支援直接將 PNG、TGA、JPG 拖入內容瀏覽器，系統會自動轉換為 Texture2D 資產並指派對應的紋理壓縮格式（如 BC1/BC5）。",
      "keywords": [
        {
          "term": "Material（材質系統）",
          "role": "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "While <span class=\"term-en\">UV tiling</span><span class=\"inline-trans\">（UV 紋理重複平鋪）</span> is controlled in the <span class=\"term-en\">Material Editor</span><span class=\"inline-trans\">（材質編輯器）</span> using the <span class=\"term-en\">Texture Coordinate node</span><span class=\"inline-trans\">（TexCoord 紋理坐標節點）</span>, the tiling of a <span class=\"term-en\">Texture</span><span class=\"inline-trans\">（紋理貼圖）</span> is controlled in the <span class=\"term-en\">Texture properties</span><span class=\"inline-trans\">（紋理貼圖屬性）</span>.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h06_q8",
      "chapterId": "h06",
      "qNum": 8,
      "type": "MC",
      "question": "If you want to make the base color of a Material an even color, you should use a ____________ Material expression node.",
      "questionZh": "如果你想要讓材質的基礎顏色呈現均勻的單一純色，你應該使用 ____________ 材質表達式節點。",
      "options": [
        "Constant 3 Vector",
        "Sine",
        "Time",
        "Texture Coordinate"
      ],
      "optionsZh": [
        "Constant 3 Vector（三維常數向量節點（快捷鍵 3+點擊，輸出 RGB 顏色或 XYZ 向量））",
        "Sine（正弦週期波形節點（輸出 -1 到 1 循環波動數值））",
        "Time（時間節點（輸出隨時間遞增的秒數，用於驅動 UV 流動或波浪動畫））",
        "Texture Coordinate（貼圖 UV 坐標節點（TexCoord，快捷鍵 U+點擊））"
      ],
      "rawAnswer": "Constant 3 Vector",
      "correctIndex": 0,
      "correctText": "Constant 3 Vector",
      "explanation": "【UE 4.27 核心考點：Constant 3 Vector 節點】\nConstant 3 Vector 代表 (R, G, B) 或 (X, Y, Z) 三維數組，快速鍵是在材質圖表中按住數字鍵「3」並點擊滑鼠左鍵。",
      "keywords": [
        {
          "term": "Material（材質系統）",
          "role": "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "If you want to make the base color of a <span class=\"term-en\">Material</span><span class=\"inline-trans\">（材質）</span> an even color, you should use a ____________ <span class=\"term-en\">Material</span><span class=\"inline-trans\">（材質）</span> expression node.",
      "detailedOptions": [
        "Constant 3 Vector（三維常數向量節點（快捷鍵 3+點擊，輸出 RGB 顏色或 XYZ 向量））",
        "Sine（正弦週期波形節點（輸出 -1 到 1 循環波動數值））",
        "Time（時間節點（輸出隨時間遞增的秒數，用於驅動 UV 流動或波浪動畫））",
        "Texture Coordinate（貼圖 UV 坐標節點（TexCoord，快捷鍵 U+點擊））"
      ]
    },
    {
      "id": "h06_q9",
      "chapterId": "h06",
      "qNum": 9,
      "type": "MC",
      "question": "The ____________ input uses RGB values to control the direction in which light should react with a surface and create the illusion of directional variation on a surface.",
      "questionZh": "____________ 輸入端使用 RGB 數值來控制光線與表面反應的方向，並在物體表面營造出方向變化的凹凸錯覺。",
      "options": [
        "Metallic",
        "Texture",
        "Specular",
        "Normal"
      ],
      "optionsZh": [
        "Metallic（金屬度（0 為非金屬塑膠木石、1 為完全導電純金屬））",
        "Texture（貼圖（儲存像素顏色或數值資訊的 2D 點陣圖片資產））",
        "Specular（高光反射強度（主要控制非金屬電介質表面的反射微調））",
        "Normal（法線貼圖節點（微觀凹凸幾何細節））"
      ],
      "rawAnswer": "Normal",
      "correctIndex": 3,
      "correctText": "Normal",
      "explanation": "【UE 4.27 核心考點：Normal Map 法線貼圖】\n法線貼圖以 RGB 色彩儲存微觀幾何面的切線空間法線向量，欺騙光照著色器計算明暗，大幅節省 3D 幾何頂點面數。",
      "keywords": [
        {
          "term": "Metallic（金屬度）",
          "role": "物理上非 0 即 1（純導體為 1.0，純絕緣體為 0.0），中間值僅用於鏽蝕油污"
        },
        {
          "term": "Normal Map（法線貼圖）",
          "role": "以 RGB 儲存表面法線向量，在不增加模型幾何頂點面數下模擬微觀立體凹凸"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The ____________ input uses RGB values to control the direction in which light should react with a surface and create the illusion of directional variation on a surface.",
      "detailedOptions": [
        "Metallic（金屬度（0 為非金屬塑膠木石、1 為完全導電純金屬））",
        "Texture（貼圖（儲存像素顏色或數值資訊的 2D 點陣圖片資產））",
        "Specular（高光反射強度（主要控制非金屬電介質表面的反射微調））",
        "Normal（法線貼圖節點（微觀凹凸幾何細節））"
      ]
    },
    {
      "id": "h06_q10",
      "chapterId": "h06",
      "qNum": 10,
      "type": "MC",
      "question": "____________ are the building blocks used to create Materials. They are self-contained nodes with different combinations of inputs and outputs that perform specific operations.",
      "questionZh": "____________ 是用來建立材質的基礎積木。它們是獨立封裝的節點，具備不同的輸入與輸出組合以執行特定的計算操作。",
      "options": [
        "Mipmaps",
        "Material functions",
        "Material expressions",
        "Powers of 2"
      ],
      "optionsZh": [
        "Mipmaps（多級漸進紋理：根據距離自動切換縮小解析度以節省頻寬）",
        "Material functions（材質函數）",
        "Material expressions（材質表達式節點）",
        "Powers of 2（2 的次方像素尺寸（512、1024、2048 等，支援 Mipmaps 紋理流送最佳化））"
      ],
      "rawAnswer": "Material expressions",
      "correctIndex": 2,
      "correctText": "Material expressions",
      "explanation": "【UE 4.27 核心考點：Material expressions 材質表達式】\n虛幻材質圖表中的所有節點（如 Add、Multiply、Texture Sample、Lerp）統稱為 Material Expressions。",
      "keywords": [
        {
          "term": "Material（材質系統）",
          "role": "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "____________ are the building blocks used to create Materials."
        },
        {
          "partNum": 2,
          "en": "They are self-contained nodes with different combinations of inputs and outputs that perform specific operations."
        }
      ],
      "detailedQuestion": "____________ are the building blocks used to create <span class=\"term-en\">Materials</span><span class=\"inline-trans\">（材質）</span>. They are self-contained nodes with different combinations of inputs and outputs that perform specific operations.",
      "detailedOptions": [
        "Mipmaps（多級漸進紋理：根據距離自動切換縮小解析度以節省頻寬）",
        "Material functions（材質函數）",
        "Material expressions（材質表達式節點）",
        "Powers of 2（2 的次方像素尺寸（512、1024、2048 等，支援 Mipmaps 紋理流送最佳化））"
      ]
    },
    {
      "id": "h07_q1",
      "chapterId": "h07",
      "qNum": 1,
      "type": "MC",
      "question": "A ____________ represents an imported audio file and settings related to the playback and storage of that file.",
      "questionZh": "____________ 代表匯入的音訊檔案，以及與該檔案播放和儲存相關的設定。",
      "options": [
        "Ambient Sound Actor",
        "Sound Attenuation asset",
        "Sound Wave asset",
        "Reverb Effect asset"
      ],
      "optionsZh": [
        "Ambient Sound Actor（環境音效 Actor（放置在關卡空間中特定坐標發聲的實體物件））",
        "Sound Attenuation asset（聲音衰減資產（定義聲音隨距離衰減幅度與 3D 空間立體聲定位））",
        "Sound Wave asset（音訊波形資產（.wav 導入資產））",
        "Reverb Effect asset（混響回音效果資產（定義洞穴、室內或大廳的音響迴盪特性））"
      ],
      "rawAnswer": "Sound Wave asset",
      "correctIndex": 2,
      "correctText": "Sound Wave asset",
      "explanation": "【UE 4.27 核心考點：Sound Wave 音訊波形資產】\n原始 WAV 音訊直接匯入後生成的基礎資產型態，可直接播放，亦可放入 Sound Cue 中進行進階合成混音。",
      "keywords": [
        {
          "term": "Sound Wave（音效波形）",
          "role": "原始 16-bit 44.1kHz .wav 匯入後的基礎音訊資產"
        },
        {
          "term": "Sound Cue（音效提示）",
          "role": "節點式音效網絡，支援多曲隨機抽取、音高/音量隨機調製與混音"
        },
        {
          "term": "Sound Attenuation（聲音衰減）",
          "role": "定義聲音隨距離拉遠時的音量衰減曲線與 3D 空間立體聲像定位（Spatialization）"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "A ____________ represents an imported audio file and settings related to the playback and storage of that file.",
      "detailedOptions": [
        "Ambient Sound Actor（環境音效 Actor（放置在關卡空間中特定坐標發聲的實體物件））",
        "Sound Attenuation asset（聲音衰減資產（定義聲音隨距離衰減幅度與 3D 空間立體聲定位））",
        "Sound Wave asset（音訊波形資產（.wav 導入資產））",
        "Reverb Effect asset（混響回音效果資產（定義洞穴、室內或大廳的音響迴盪特性））"
      ]
    },
    {
      "id": "h07_q2",
      "chapterId": "h07",
      "qNum": 2,
      "type": "TF",
      "question": "The term bit rate refers to the amount of data that is processed or transferred over a specified amount of time. Bit rate also has an impact on quality: the higher the bit rate, the better the quality.",
      "questionZh": "「位元率（Bit rate）」一詞指的是在特定時間內處理或傳輸的資料量。位元率也會影響音質：位元率越高，品質越好。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：Sound Cue 節點編輯器】\n正確。Sound Cue 編輯器支援 Random（隨機選取）、Modulator（音高/音量微調）、Delay（延遲）、Looping 等多種節點串聯組合。",
      "keywords": [
        {
          "term": "Sound Cue（音效提示）",
          "role": "節點式音效網絡，支援多曲隨機抽取、音高/音量隨機調製與混音"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "The term bit rate refers to the amount of data that is processed or transferred over a specified amount of time."
        },
        {
          "partNum": 2,
          "en": "Bit rate also has an impact on quality: the higher the bit rate, the better the quality."
        }
      ],
      "detailedQuestion": "The term bit rate refers to the amount of data that is processed or transferred over a specified amount of time. Bit rate also has an impact on quality: the higher the bit rate, the better the quality.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h07_q3",
      "chapterId": "h07",
      "qNum": 3,
      "type": "MC",
      "question": "A ____________ stores attenuation properties in a reusable manner. This allows for adjustment to attenuation properties without having to revisit every Sound Actor individually.",
      "questionZh": "____________ 以可重複使用的方式儲存衰減屬性。這使得調整衰減屬性時，無需逐一重新修改每個個別的 Sound Actor。",
      "options": [
        "Modulation Effect asset",
        "Reverb Effect asset",
        "Audio Volume",
        "Sound Attenuation asset"
      ],
      "optionsZh": [
        "Modulation Effect asset（音訊調變效果資產）",
        "Reverb Effect asset（混響回音效果資產（定義洞穴、室內或大廳的音響迴盪特性））",
        "Audio Volume（音效空間體積）",
        "Sound Attenuation asset（聲音衰減資產（定義聲音隨距離衰減幅度與 3D 空間立體聲定位））"
      ],
      "rawAnswer": "Sound Attenuation asset",
      "correctIndex": 3,
      "correctText": "Sound Attenuation asset",
      "explanation": "【UE 4.27 核心考點：Sound Attenuation 聲音衰減】\nSound Attenuation 資產設定內外半徑範圍、立體聲空間化（Spatialization）演算法與距離倒數衰減曲線（Falloff Curve）。",
      "keywords": [
        {
          "term": "Sound Attenuation（聲音衰減）",
          "role": "定義聲音隨距離拉遠時的音量衰減曲線與 3D 空間立體聲像定位（Spatialization）"
        },
        {
          "term": "Reverb Effect（混響效果）",
          "role": "模擬山洞、教堂、浴室等封閉環境的空間殘響聲學反射"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "A ____________ stores attenuation properties in a reusable manner."
        },
        {
          "partNum": 2,
          "en": "This allows for adjustment to attenuation properties without having to revisit every Sound Actor individually."
        }
      ],
      "detailedQuestion": "A ____________ stores attenuation properties in a reusable manner. This allows for adjustment to attenuation properties without having to revisit every Sound <span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span> individually.",
      "detailedOptions": [
        "Modulation Effect asset（音訊調變效果資產）",
        "Reverb Effect asset（混響回音效果資產（定義洞穴、室內或大廳的音響迴盪特性））",
        "Audio Volume（音效空間體積）",
        "Sound Attenuation asset（聲音衰減資產（定義聲音隨距離衰減幅度與 3D 空間立體聲定位））"
      ]
    },
    {
      "id": "h07_q4",
      "chapterId": "h07",
      "qNum": 4,
      "type": "TF",
      "question": "A Reverb Effect asset adds motion and depth to sound. The Modulation settings allow you to control the minimum and maximum modulation for both pitch and volume as well as set a high-frequency gain multiplier.",
      "questionZh": "混響效果資產（Reverb Effect asset）為聲音增添運動感與深度。Modulation（調變）設定允許你控制音高與音量的最小和最大調變，並設定高頻增益倍率。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "False",
      "correctIndex": 1,
      "correctText": "False",
      "explanation": "【UE 4.27 核心考點：音訊匯入格式限制】\n錯誤。UE4 官方標準音訊匯入格式嚴格要求為「無壓縮 16-bit PCM .wav 格式」，取樣率建議為 44.1 kHz 或 48 kHz。MP3 與 OGG 無法直接匯入。",
      "keywords": [
        {
          "term": "Reverb Effect（混響效果）",
          "role": "模擬山洞、教堂、浴室等封閉環境的空間殘響聲學反射"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "A Reverb Effect asset adds motion and depth to sound."
        },
        {
          "partNum": 2,
          "en": "The Modulation settings allow you to control the minimum and maximum modulation for both pitch and volume as well as set a high-frequency gain multiplier."
        }
      ],
      "detailedQuestion": "A <span class=\"term-en\">Reverb Effect asset</span><span class=\"inline-trans\">（空間殘響/混響效果資產）</span> adds motion and depth to sound. The <span class=\"term-en\">Modulation settings</span><span class=\"inline-trans\">（隨機音高音量調變設定）</span> allow you to control the minimum and maximum modulation for both pitch and volume as well as set a high-frequency gain multiplier.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h07_q5",
      "chapterId": "h07",
      "qNum": 5,
      "type": "MC",
      "question": "The ____________ Is a node-based editor that gives you the ability to modify Sound Waves and store the result as a Sound Cue asset. You can add modulation, reverb, and randomness.",
      "questionZh": "____________ 是一個節點式編輯器，賦予你修改 Sound Wave 音訊波形並將結果儲存為 Sound Cue 資產的能力。你可以在其中加入調變、混響與隨機化效果。",
      "options": [
        "Sound Cue Editor",
        "Audio Editor",
        "Audacity",
        "Attenuation Editor"
      ],
      "optionsZh": [
        "Sound Cue Editor（Sound Cue 節點編輯器）",
        "Audio Editor（音訊編輯器）",
        "Audacity（第三方音訊錄音編輯軟體）",
        "Attenuation Editor（衰減編輯器）"
      ],
      "rawAnswer": "Sound Cue Editor",
      "correctIndex": 0,
      "correctText": "Sound Cue Editor",
      "explanation": "【UE 4.27 核心考點：Sound Cue Editor】\n在 Sound Cue Editor 中雙擊開啟資產，使用 Modulator 隨機調整 Pitch 與 Volume，可避免槍聲或腳步聲重複播放時聽起來機械單調。",
      "keywords": [
        {
          "term": "Sound Wave（音效波形）",
          "role": "原始 16-bit 44.1kHz .wav 匯入後的基礎音訊資產"
        },
        {
          "term": "Sound Cue（音效提示）",
          "role": "節點式音效網絡，支援多曲隨機抽取、音高/音量隨機調製與混音"
        },
        {
          "term": "Sound Attenuation（聲音衰減）",
          "role": "定義聲音隨距離拉遠時的音量衰減曲線與 3D 空間立體聲像定位（Spatialization）"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "The ____________ Is a node-based editor that gives you the ability to modify Sound Waves and store the result as a Sound Cue asset."
        },
        {
          "partNum": 2,
          "en": "You can add modulation, reverb, and randomness."
        }
      ],
      "detailedQuestion": "The ____________ Is a node-based editor that gives you the ability to modify <span class=\"term-en\">Sound Waves</span><span class=\"inline-trans\">（原始音效素材）</span> and store the result as a <span class=\"term-en\">Sound Cue asset</span><span class=\"inline-trans\">（Sound Cue 音效資產）</span>. You can add modulation, reverb, and randomness.",
      "detailedOptions": [
        "Sound Cue Editor（Sound Cue 節點編輯器）",
        "Audio Editor（音訊編輯器）",
        "Audacity（第三方音訊錄音編輯軟體）",
        "Attenuation Editor（衰減編輯器）"
      ]
    },
    {
      "id": "h07_q6",
      "chapterId": "h07",
      "qNum": 6,
      "type": "MC",
      "question": "A ____________ is a definable asset with adjustable property settings that will allow you to control such elements as echo density, overall reverb gain, and air absorption to help craft the overall feel you may be after.",
      "questionZh": "____________ 是一個具備可調屬性設定的自訂資產，允許你控制回音密度、整體混響增益以及空氣吸收等要素，幫助你塑造出所需的整體空間聽覺感受。",
      "options": [
        "Sound Attenuation asset",
        "Sound Cue asset",
        "Modulation Effect asset",
        "Reverb Effect asset"
      ],
      "optionsZh": [
        "Sound Attenuation asset（聲音衰減資產（定義聲音隨距離衰減幅度與 3D 空間立體聲定位））",
        "Sound Cue asset（Sound Cue 音訊節點藍圖資產（可包含隨機音調、循環與淡入淡出邏輯））",
        "Modulation Effect asset（音訊調變效果資產）",
        "Reverb Effect asset（混響回音效果資產（定義洞穴、室內或大廳的音響迴盪特性））"
      ],
      "rawAnswer": "Reverb Effect asset",
      "correctIndex": 3,
      "correctText": "Reverb Effect asset",
      "explanation": "【UE 4.27 核心考點：Reverb Effect 混響效果】\nReverb Effect asset 模擬洞穴、浴室、大教堂或空曠走廊等空間聲學環境的反射殘響參數。",
      "keywords": [
        {
          "term": "Sound Cue（音效提示）",
          "role": "節點式音效網絡，支援多曲隨機抽取、音高/音量隨機調製與混音"
        },
        {
          "term": "Sound Attenuation（聲音衰減）",
          "role": "定義聲音隨距離拉遠時的音量衰減曲線與 3D 空間立體聲像定位（Spatialization）"
        },
        {
          "term": "Reverb Effect（混響效果）",
          "role": "模擬山洞、教堂、浴室等封閉環境的空間殘響聲學反射"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "A ____________ is a definable asset with adjustable property settings that will allow you to control such elements as echo density, overall reverb gain, and air absorption to help craft the overall feel you may be after.",
      "detailedOptions": [
        "Sound Attenuation asset（聲音衰減資產（定義聲音隨距離衰減幅度與 3D 空間立體聲定位））",
        "Sound Cue asset（Sound Cue 音訊節點藍圖資產（可包含隨機音調、循環與淡入淡出邏輯））",
        "Modulation Effect asset（音訊調變效果資產）",
        "Reverb Effect asset（混響回音效果資產（定義洞穴、室內或大廳的音響迴盪特性））"
      ]
    },
    {
      "id": "h07_q7",
      "chapterId": "h07",
      "qNum": 7,
      "type": "TF",
      "question": "The Looping node is used to randomly trigger a Sound Wave node from within a group of possible Sound Wave nodes.",
      "questionZh": "Looping 節點的作用是從一組可能的 Sound Wave 節點中隨機觸發其中一個 Sound Wave 節點。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "False",
      "correctIndex": 1,
      "correctText": "False",
      "explanation": "【UE 4.27 核心考點：Spatialization 空間化定義】\n錯誤。空間化是透過 3D 坐標位置計算左右耳抵達時間差（ITD）與強度差（ILD），讓玩家感知聲音精準的 3D 方向與距離感。",
      "keywords": [
        {
          "term": "Sound Wave（音效波形）",
          "role": "原始 16-bit 44.1kHz .wav 匯入後的基礎音訊資產"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The Looping node is used to randomly trigger a <span class=\"term-en\">Sound Wave</span><span class=\"inline-trans\">（原始音訊素材 .wav）</span> node from within a group of possible <span class=\"term-en\">Sound Wave</span><span class=\"inline-trans\">（原始音訊素材 .wav）</span> nodes.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h07_q8",
      "chapterId": "h07",
      "qNum": 8,
      "type": "MC",
      "question": "A ____________ allows you to control and apply various sounds in your Level as well as provides an avenue to create compartmentalized audio zones where you can control what is heard inside and outside of the volume.",
      "questionZh": "____________ 允許你在關卡中控制並套用各種聲音，同時提供了一種劃分區域音訊區塊的方法，讓你能控制在該體積內部與外部所聽到的聲音。",
      "options": [
        "Sound Modulation Actor",
        "Reverb Actor",
        "Ambient Sound Actor",
        "Audio Volume Actor"
      ],
      "optionsZh": [
        "Sound Modulation Actor（音訊調變 Actor）",
        "Reverb Actor（混響 Actor）",
        "Ambient Sound Actor（環境音效 Actor（放置在關卡空間中特定坐標發聲的實體物件））",
        "Audio Volume Actor（音訊體積 Actor（定義特定空間區域內的混響回音與環境音效設定））"
      ],
      "rawAnswer": "Audio Volume Actor",
      "correctIndex": 3,
      "correctText": "Audio Volume Actor",
      "explanation": "【UE 4.27 核心考點：Audio Volume 音訊體積】\n放置於特定室內空間，能套用專屬的 Reverb Settings，並能隔離或衰減室外傳入的環境噪音。",
      "keywords": [
        {
          "term": "Reverb Effect（混響效果）",
          "role": "模擬山洞、教堂、浴室等封閉環境的空間殘響聲學反射"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "A ____________ allows you to control and apply various sounds in your <span class=\"term-en\">Level</span><span class=\"inline-trans\">（關卡場景）</span> as well as provides an avenue to create compartmentalized audio zones where you can control what is heard inside and outside of the volume.",
      "detailedOptions": [
        "Sound Modulation Actor（音訊調變 Actor）",
        "Reverb Actor（混響 Actor）",
        "Ambient Sound Actor（環境音效 Actor（放置在關卡空間中特定坐標發聲的實體物件））",
        "Audio Volume Actor（音訊體積 Actor（定義特定空間區域內的混響回音與環境音效設定））"
      ]
    },
    {
      "id": "h07_q9",
      "chapterId": "h07",
      "qNum": 9,
      "type": "MC",
      "question": "A ____________ is used to trigger multiple Sound Wave nodes simultaneously.",
      "questionZh": "____________ 是用來同時觸發多個 Sound Wave 節點的節點工具。",
      "options": [
        "Wave Player node",
        "Random node",
        "Mixer node",
        "Looping node"
      ],
      "optionsZh": [
        "Wave Player node（波形播放器節點（Wave Player：播放指定 Sound Wave 音訊資產））",
        "Random node（隨機挑選節點（Random：隨機播放多個音效之一以避免聽覺疲勞））",
        "Mixer node（混音器節點（Mixer：同時混合多路音軌播放））",
        "Looping node（循環播放節點）"
      ],
      "rawAnswer": "Mixer node",
      "correctIndex": 2,
      "correctText": "Mixer node",
      "explanation": "【UE 4.27 核心考點：Mixer 混音節點】\nMixer 節點接收多個輸入引腳並同時疊加輸出；相較之下 Concatenator 是接續依序播放。",
      "keywords": [
        {
          "term": "Sound Wave（音效波形）",
          "role": "原始 16-bit 44.1kHz .wav 匯入後的基礎音訊資產"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "A ____________ is used to trigger multiple <span class=\"term-en\">Sound Wave</span><span class=\"inline-trans\">（原始音訊素材 .wav）</span> nodes simultaneously.",
      "detailedOptions": [
        "Wave Player node（波形播放器節點（Wave Player：播放指定 Sound Wave 音訊資產））",
        "Random node（隨機挑選節點（Random：隨機播放多個音效之一以避免聽覺疲勞））",
        "Mixer node（混音器節點（Mixer：同時混合多路音軌播放））",
        "Looping node（循環播放節點）"
      ]
    },
    {
      "id": "h07_q10",
      "chapterId": "h07",
      "qNum": 10,
      "type": "TF",
      "question": "You can place an Ambient Sound Actor in your Level by dragging a Sound Cue asset from the Content Browser into your Level.",
      "questionZh": "你可以透過將 Sound Cue 資產從內容瀏覽器直接拖曳到關卡中，來在關卡中放置一個環境音效 Actor（Ambient Sound Actor）。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：移動音源附著】\n正確。附加於移動 Actor 上的 Audio Component 其空間坐標隨父級更新，搭配 3D Spatialization 設定，聲音會完美跟隨物件軌跡。",
      "keywords": [
        {
          "term": "Sound Cue（音效提示）",
          "role": "節點式音效網絡，支援多曲隨機抽取、音高/音量隨機調製與混音"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "You can place an <span class=\"term-en\">Ambient Sound Actor</span><span class=\"inline-trans\">（環境音效物件）</span> in your <span class=\"term-en\">Level</span><span class=\"inline-trans\">（關卡場景）</span> by dragging a <span class=\"term-en\">Sound Cue asset</span><span class=\"inline-trans\">（Sound Cue 音效資產）</span> from the <span class=\"term-en\">Content Browser</span><span class=\"inline-trans\">（內容瀏覽器/素材庫）</span> into your <span class=\"term-en\">Level</span><span class=\"inline-trans\">（關卡場景）</span>.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h08_q1",
      "chapterId": "h08",
      "qNum": 1,
      "type": "MC",
      "question": "A ____________ is a Texture that provides elevation information based on a gray scale.",
      "questionZh": "____________ 是一種依據灰階數值提供地形高低起伏海拔資訊的紋理貼圖。",
      "options": [
        "Terrain map",
        "8-bit map",
        "Normal map",
        "Height map"
      ],
      "optionsZh": [
        "Terrain map（地形圖）",
        "8-bit map（8 位元灰階圖（精度不足會造成地形階梯狀撕裂））",
        "Normal map（法線凹凸貼圖）",
        "Height map（高度圖（Heightmap：以 16 位元灰階高低數值決定地形起伏的高低場檔案））"
      ],
      "rawAnswer": "Height map",
      "correctIndex": 3,
      "correctText": "Height map",
      "explanation": "【UE 4.27 核心考點：Height map 高度圖】\n高度圖（Height Map）通常為 16 位元灰階影像，白色像素代表最高海拔，黑色像素代表最低地勢，是建立地形地貌的核心輸入來源。",
      "keywords": [
        {
          "term": "Normal Map（法線貼圖）",
          "role": "以 RGB 儲存表面法線向量，在不增加模型幾何頂點面數下模擬微觀立體凹凸"
        },
        {
          "term": "Height Map（高度圖）",
          "role": "16 位元灰階地形影像，純白為最高海拔，純黑為最低地勢"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "A ____________ is a <span class=\"term-en\">Texture</span><span class=\"inline-trans\">（紋理貼圖）</span> that provides elevation information based on a gray <span class=\"term-en\">scale</span><span class=\"inline-trans\">（縮放比例）</span>.",
      "detailedOptions": [
        "Terrain map（地形圖）",
        "8-bit map（8 位元灰階圖（精度不足會造成地形階梯狀撕裂））",
        "Normal map（法線凹凸貼圖）",
        "Height map（高度圖（Heightmap：以 16 位元灰階高低數值決定地形起伏的高低場檔案））"
      ]
    },
    {
      "id": "h08_q2",
      "chapterId": "h08",
      "qNum": 2,
      "type": "TF",
      "question": "The Landscape tools can be found in the World Settings panel.",
      "questionZh": "地貌工具（Landscape tools）可以在 World Settings（世界設定）面板中找到。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "False",
      "correctIndex": 1,
      "correctText": "False",
      "explanation": "【UE 4.27 核心考點：Landscape 編輯模式位置】\n錯誤。地貌工具位於 Modes（模式）面板中的 Landscape 模式（快捷鍵 Shift + 2），而非在 World Settings 面板中。",
      "keywords": [
        {
          "term": "Modes Panel（模式面板）",
          "role": "提供放置幾何筆刷、地貌雕刻（Landscape）與植被繪製（Foliage）的核心面板"
        },
        {
          "term": "Landscape Actor（地貌地形）",
          "role": "專為廣袤自然地形設計的幾何網格體，具備動態連續 LOD 優化"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The <span class=\"term-en\">Landscape</span><span class=\"inline-trans\">（地貌地形系統）</span> tools can be found in the World Settings panel.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h08_q3",
      "chapterId": "h08",
      "qNum": 3,
      "type": "TF",
      "question": "Height maps can be authored directly in UE4 by using the Landscape Sculpt tools, or they can be made in other sculpting or photo-manipulation programs and imported into UE4.",
      "questionZh": "高度圖可以直接在 UE4 中使用地貌雕刻工具繪製生成，也可以在其他外部雕刻軟體或影像處理程式中製作後匯入 UE4。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：地貌高度圖建立途徑】\n正確。可以直接在 UE4 關卡工作視窗中用 Sculpt 工具手動雕刻，也可以從外部地形軟體（如 World Machine, Gaea）匯入 16 位元 RAW 或 PNG 高度圖。",
      "keywords": [
        {
          "term": "Height Map（高度圖）",
          "role": "16 位元灰階地形影像，純白為最高海拔，純黑為最低地勢"
        },
        {
          "term": "Landscape Actor（地貌地形）",
          "role": "專為廣袤自然地形設計的幾何網格體，具備動態連續 LOD 優化"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "<span class=\"term-en\">Height maps</span><span class=\"inline-trans\">（地貌高度圖）</span> can be authored directly in UE4 by using the <span class=\"term-en\">Landscape Sculpt tools</span><span class=\"inline-trans\">（地貌雕刻工具）</span>, or they can be made in other sculpting or photo-manipulation programs and imported into UE4.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h08_q4",
      "chapterId": "h08",
      "qNum": 4,
      "type": "MC",
      "question": "The ____________ is a Material node that allows you to blend between Materials and Textures on Landscapes.",
      "questionZh": "____________ 是一個材質節點，允許你在地貌材質中混合多種材質與紋理圖層（如草地、岩石、泥土）。",
      "options": [
        "FoliageLayerBlend",
        "LandscapeLayerBlend",
        "TerrainLayerBlend",
        "LB_WeightedBlend"
      ],
      "optionsZh": [
        "FoliageLayerBlend（植被圖層混合（非引擎標準節點））",
        "LandscapeLayerBlend（地貌圖層混合節點（在材質中混合多個地表層））",
        "TerrainLayerBlend（地形圖層混合節點）",
        "LB_WeightedBlend（權重混合模式）"
      ],
      "rawAnswer": "LandscapeLayerBlend",
      "correctIndex": 1,
      "correctText": "LandscapeLayerBlend",
      "explanation": "【UE 4.27 核心考點：LandscapeLayerBlend 節點】\nLandscapeLayerBlend 是地貌專用材質節點，定義各圖層名稱與混合方式（Weight Blend / Height Blend），供地貌 Paint 模式筆刷權重塗抹。",
      "keywords": [
        {
          "term": "Material（材質系統）",
          "role": "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
        },
        {
          "term": "Landscape Actor（地貌地形）",
          "role": "專為廣袤自然地形設計的幾何網格體，具備動態連續 LOD 優化"
        },
        {
          "term": "Foliage System（植被系統）",
          "role": "GPU 實例化技術（HISM），極度節省 Draw Calls，可批量刷繪數十萬棵樹草"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The ____________ is a <span class=\"term-en\">Material</span><span class=\"inline-trans\">（材質）</span> node that allows you to blend between <span class=\"term-en\">Materials</span><span class=\"inline-trans\">（材質）</span> and <span class=\"term-en\">Textures</span><span class=\"inline-trans\">（紋理貼圖）</span> on Landscapes.",
      "detailedOptions": [
        "FoliageLayerBlend（植被圖層混合（非引擎標準節點））",
        "LandscapeLayerBlend（地貌圖層混合節點（在材質中混合多個地表層））",
        "TerrainLayerBlend（地形圖層混合節點）",
        "LB_WeightedBlend（權重混合模式）"
      ]
    },
    {
      "id": "h08_q5",
      "chapterId": "h08",
      "qNum": 5,
      "type": "MC",
      "question": "A ____________ is a collection of assets placed on top of and in direct relation to the Landscape mesh or other assets in a scene. This Actor can be any type of Static Mesh asset that is available through the Content Browser.",
      "questionZh": "____________ 是一組直接放置在地貌網格或場景資產上的關聯物件集合，可以是內容瀏覽器中可用的任何類型靜態網格資產。",
      "options": [
        "Shrub Actor",
        "Tree Actor",
        "Foliage Actor",
        "Landscape Foliage Actor"
      ],
      "optionsZh": [
        "Shrub Actor（灌木 Actor）",
        "Tree Actor（樹木 Actor）",
        "Foliage Actor（植被 Actor（被批次實例化生成的植被集合））",
        "Landscape Foliage Actor（地貌植被 Actor）"
      ],
      "rawAnswer": "Foliage Actor",
      "correctIndex": 2,
      "correctText": "Foliage Actor",
      "explanation": "【UE 4.27 核心考點：Foliage Actor 植被實例】\nFoliage 系統將多個靜態網格整合為實例化陣列（HISM），極致壓縮 Draw Calls，能在地形上快速繪製大量樹木、灌木與岩石。",
      "keywords": [
        {
          "term": "Static Mesh（靜態網格）",
          "role": "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
        },
        {
          "term": "Landscape Actor（地貌地形）",
          "role": "專為廣袤自然地形設計的幾何網格體，具備動態連續 LOD 優化"
        },
        {
          "term": "Foliage System（植被系統）",
          "role": "GPU 實例化技術（HISM），極度節省 Draw Calls，可批量刷繪數十萬棵樹草"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "A ____________ is a collection of assets placed on top of and in direct relation to the Landscape mesh or other assets in a scene."
        },
        {
          "partNum": 2,
          "en": "This Actor can be any type of Static Mesh asset that is available through the Content Browser."
        }
      ],
      "detailedQuestion": "A ____________ is a collection of assets placed on top of and in direct relation to the <span class=\"term-en\">Landscape</span><span class=\"inline-trans\">（地貌地形系統）</span> mesh or other assets in a scene. This <span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span> can be any type of <span class=\"term-en\">Static Mesh</span><span class=\"inline-trans\">（靜態網格 3D 模型）</span> asset that is available through the <span class=\"term-en\">Content Browser</span><span class=\"inline-trans\">（內容瀏覽器/素材庫）</span>.",
      "detailedOptions": [
        "Shrub Actor（灌木 Actor）",
        "Tree Actor（樹木 Actor）",
        "Foliage Actor（植被 Actor（被批次實例化生成的植被集合））",
        "Landscape Foliage Actor（地貌植被 Actor）"
      ]
    },
    {
      "id": "h08_q6",
      "chapterId": "h08",
      "qNum": 6,
      "type": "TF",
      "question": "The Paint tools work in conjunction with the LandscapeLayerBlend node in a Material to display Texture layers on a Landscape Actor.",
      "questionZh": "繪製工具（Paint tools）與材質中的 LandscapeLayerBlend 節點協同運作，在地貌 Actor 上顯示紋理圖層。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：地貌紋理圖層繪製機制】\n正確。在地貌 Paint 模式下使用筆刷塗抹草地或泥土時，會即時寫入頂點圖層權重，驅動材質中的 LandscapeLayerBlend 節點進行融合。",
      "keywords": [
        {
          "term": "Material（材質系統）",
          "role": "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
        },
        {
          "term": "Landscape Actor（地貌地形）",
          "role": "專為廣袤自然地形設計的幾何網格體，具備動態連續 LOD 優化"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The Paint tools work in conjunction with the <span class=\"term-en\">LandscapeLayerBlend</span><span class=\"inline-trans\">（地貌圖層混合節點）</span> node in a <span class=\"term-en\">Material</span><span class=\"inline-trans\">（材質）</span> to display <span class=\"term-en\">Texture</span><span class=\"inline-trans\">（紋理貼圖）</span> layers on a <span class=\"term-en\">Landscape</span><span class=\"inline-trans\">（地貌地形系統）</span> <span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span>.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h08_q7",
      "chapterId": "h08",
      "qNum": 7,
      "type": "MC",
      "question": "____________ contains a collection of tools for placing a large number of assets into a scene quickly, using defined parameters and restrictions on where they can be placed.",
      "questionZh": "____________ 包含了一組工具，能根據設定的參數與放置限制條件，在場景中快速大批量放置資產。",
      "options": [
        "Foliage mode",
        "Sculpt mode",
        "Paint mode",
        "Model mode"
      ],
      "optionsZh": [
        "Foliage mode（植被模式（快捷鍵 Shift+3，支援一鍵批量快速筆刷種植草木石塊））",
        "Sculpt mode（地貌雕刻模式（快捷鍵 Shift+2））",
        "Paint mode（網格頂點繪製模式（快捷鍵 Shift+5））",
        "Model mode（幾何體建模模式）"
      ],
      "rawAnswer": "Foliage panel",
      "correctIndex": 0,
      "correctText": "Foliage mode",
      "explanation": "【UE 4.27 核心考點：Foliage mode 植被工具】\n植被模式面板提供 Density（密度）、Radius、坡度限制（Slope）、高度限制與隨機縮放/旋轉設定，能大批量筆刷式種植植物與散落物。",
      "keywords": [
        {
          "term": "Foliage System（植被系統）",
          "role": "GPU 實例化技術（HISM），極度節省 Draw Calls，可批量刷繪數十萬棵樹草"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "____________ contains a collection of tools for placing a large number of assets into a scene quickly, using defined parameters and restrictions on where they can be placed.",
      "detailedOptions": [
        "Foliage mode（植被模式（快捷鍵 Shift+3，支援一鍵批量快速筆刷種植草木石塊））",
        "Sculpt mode（地貌雕刻模式（快捷鍵 Shift+2））",
        "Paint mode（網格頂點繪製模式（快捷鍵 Shift+5））",
        "Model mode（幾何體建模模式）"
      ]
    },
    {
      "id": "h08_q8",
      "chapterId": "h08",
      "qNum": 8,
      "type": "MC",
      "question": "A ____________ is a specific Actor class used to represent terrain. This Actor has its own level of detail (LOD) system for efficiency.",
      "questionZh": "____________ 是一種專門用來代表地形的特定 Actor 類別，它具備自己的細節層次（LOD）系統以提升運算效能。",
      "options": [
        "Terrain Actor",
        "Landscape Actor",
        "Foliage Actor",
        "Ground Actor"
      ],
      "optionsZh": [
        "Terrain Actor（地形 Actor）",
        "Landscape Actor（地貌景觀 Actor（管理整座大地形高度場網格與碰撞的核心物件））",
        "Foliage Actor（植被 Actor（被批次實例化生成的植被集合））",
        "Ground Actor（地面 Actor）"
      ],
      "rawAnswer": "Landscape Actor",
      "correctIndex": 1,
      "correctText": "Landscape Actor",
      "explanation": "【UE 4.27 核心考點：Landscape Actor 地貌類別】\nLandscape Actor 是承載地形幾何的主體，採用連續 LOD 網格拼合技術，根據視角動態簡化遠處地形網格以節省效能。",
      "keywords": [
        {
          "term": "Landscape Actor（地貌地形）",
          "role": "專為廣袤自然地形設計的幾何網格體，具備動態連續 LOD 優化"
        },
        {
          "term": "Foliage System（植被系統）",
          "role": "GPU 實例化技術（HISM），極度節省 Draw Calls，可批量刷繪數十萬棵樹草"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "A ____________ is a specific Actor class used to represent terrain."
        },
        {
          "partNum": 2,
          "en": "This Actor has its own level of detail (LOD) system for efficiency."
        }
      ],
      "detailedQuestion": "A ____________ is a specific <span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span> class used to represent terrain. This <span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span> has its own level of detail (<span class=\"term-en\">LOD</span><span class=\"inline-trans\">（LOD 細節層次）</span>) system for efficiency.",
      "detailedOptions": [
        "Terrain Actor（地形 Actor）",
        "Landscape Actor（地貌景觀 Actor（管理整座大地形高度場網格與碰撞的核心物件））",
        "Foliage Actor（植被 Actor（被批次實例化生成的植被集合））",
        "Ground Actor（地面 Actor）"
      ]
    },
    {
      "id": "h08_q9",
      "chapterId": "h08",
      "qNum": 9,
      "type": "MC",
      "question": "In Landscape mode, the ____________ contains a collection of tools for deforming the surface of a Landscape Actor. There are different properties for editing brush sizes and shapes.",
      "questionZh": "在地貌模式中，____________ 包含了一組用來使地貌 Actor 表面變形的工具，並提供不同的筆刷大小與形狀設定。",
      "options": [
        "Foliage tab",
        "Paint tab",
        "Sculpt tab",
        "Manage tab"
      ],
      "optionsZh": [
        "Foliage tab（植被分頁標籤）",
        "Paint tab（繪製分頁標籤）",
        "Sculpt tab（雕刻分頁標籤）",
        "Manage tab（管理分頁標籤）"
      ],
      "rawAnswer": "Sculpt tab",
      "correctIndex": 2,
      "correctText": "Sculpt tab",
      "explanation": "【UE 4.27 核心考點：Sculpt 雕刻分頁】\nSculpt 分頁包含 Sculpt（抬升/下陷）、Smooth（平滑）、Flatten（壓平）、Ramp（斜坡）等塑形工具。",
      "keywords": [
        {
          "term": "Landscape Actor（地貌地形）",
          "role": "專為廣袤自然地形設計的幾何網格體，具備動態連續 LOD 優化"
        },
        {
          "term": "Foliage System（植被系統）",
          "role": "GPU 實例化技術（HISM），極度節省 Draw Calls，可批量刷繪數十萬棵樹草"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "In Landscape mode, the ____________ contains a collection of tools for deforming the surface of a Landscape Actor."
        },
        {
          "partNum": 2,
          "en": "There are different properties for editing brush sizes and shapes."
        }
      ],
      "detailedQuestion": "In <span class=\"term-en\">Landscape</span><span class=\"inline-trans\">（地貌地形系統）</span> mode, the ____________ contains a collection of tools for deforming the surface of a <span class=\"term-en\">Landscape</span><span class=\"inline-trans\">（地貌地形系統）</span> <span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span>. There are different properties for editing brush sizes and shapes.",
      "detailedOptions": [
        "Foliage tab（植被分頁標籤）",
        "Paint tab（繪製分頁標籤）",
        "Sculpt tab（雕刻分頁標籤）",
        "Manage tab（管理分頁標籤）"
      ]
    },
    {
      "id": "h08_q10",
      "chapterId": "h08",
      "qNum": 10,
      "type": "TF",
      "question": "The Fill World button simply confirms the settings that are currently in place and uses them to create a new Landscape.",
      "questionZh": "「Fill World」按鈕只是單純確認當前設定，並使用這些設定建立一個新的地貌。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "False",
      "correctIndex": 1,
      "correctText": "False",
      "explanation": "【UE 4.27 核心考點：Fill World 地貌建立功能】\n錯誤。Fill World 會自動偵測並擴展地貌尺寸以完全填滿整個關卡的預設世界邊界（World Bounds），而不僅僅是確認當前設定。",
      "keywords": [
        {
          "term": "Landscape Actor（地貌地形）",
          "role": "專為廣袤自然地形設計的幾何網格體，具備動態連續 LOD 優化"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The Fill World button simply confirms the settings that are currently in place and uses them to create a new <span class=\"term-en\">Landscape</span><span class=\"inline-trans\">（地貌地形系統）</span>.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h09_q1",
      "chapterId": "h09",
      "qNum": 1,
      "type": "MC",
      "question": "The ____________ Actor captures images (cubemaps) of the Level from its location and projects those images onto other Actors in its vicinity.",
      "questionZh": "____________ Actor 從其所在位置捕捉關卡影像（立方體貼圖 Cubemap），並將這些影像投射到周遭的其他 Actor 上以產生反射。",
      "options": [
        "Sphere Capture",
        "Reflection Capture",
        "Sky Sphere",
        "Post Process Volume"
      ],
      "optionsZh": [
        "Sphere Capture（球狀反射捕捉）",
        "Reflection Capture（反射捕捉 Actor（將周圍環境即時捕捉為立方體貼圖用於金屬反光））",
        "Sky Sphere（動態天空球）",
        "Post Process Volume（後製處理體積（定義攝影機進入該區域時應用的調色、曝光與後效））"
      ],
      "rawAnswer": "Reflection Capture",
      "correctIndex": 1,
      "correctText": "Reflection Capture",
      "explanation": "【UE 4.27 核心考點：Reflection Capture 反射捕捉】\nSphere/Box Reflection Capture 捕捉局部環境烘焙成 Cubemap，為附近光滑金屬與玻璃材質提供高品質鏡面反射。",
      "keywords": [
        {
          "term": "Reflection Capture（反射捕捉）",
          "role": "烘焙局部 360 度 Cubemap，為金屬與玻璃提供高品質靜態環境倒影"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The ____________ <span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span> captures images (cubemaps) of the <span class=\"term-en\">Level</span><span class=\"inline-trans\">（關卡場景）</span> from its location and projects those images onto other <span class=\"term-en\">Actors</span><span class=\"inline-trans\">（場景物件/Actor）</span> in its vicinity.",
      "detailedOptions": [
        "Sphere Capture（球狀反射捕捉）",
        "Reflection Capture（反射捕捉 Actor（將周圍環境即時捕捉為立方體貼圖用於金屬反光））",
        "Sky Sphere（動態天空球）",
        "Post Process Volume（後製處理體積（定義攝影機進入該區域時應用的調色、曝光與後效））"
      ]
    },
    {
      "id": "h09_q2",
      "chapterId": "h09",
      "qNum": 2,
      "type": "TF",
      "question": "Bloom causes the exposure of a scene to automatically adjust to re-create the effect experienced as human eyes adjust when going from a bright environment into a dark environment or vice versa.",
      "questionZh": "泛光（Bloom）會使場景的曝光度自動調整，以重現人眼從明亮環境進入黑暗環境或反之時的視覺調節效果。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "False",
      "correctIndex": 1,
      "correctText": "False",
      "explanation": "【UE 4.27 核心考點：Bloom vs Eye Adaptation】\n錯誤。人眼適應明暗調節效果稱為「Eye Adaptation（人眼適應 / 自動曝光 Auto Exposure）」；而 Bloom 是高亮區域周圍產生的光暈眩光溢出效果。",
      "keywords": [
        {
          "term": "Unreal Engine 4.27 核心架構",
          "role": "遵循教材與引擎核心工作流規範"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "<span class=\"term-en\">Bloom</span><span class=\"inline-trans\">（強光泛光眩光）</span> causes the exposure of a scene to automatically adjust to re-create the effect experienced as human eyes adjust when going from a bright environment into a dark environment or vice versa.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h09_q3",
      "chapterId": "h09",
      "qNum": 3,
      "type": "TF",
      "question": "The Player Start Actor defines the location the player’s Pawn will spawn into the world.",
      "questionZh": "Player Start Actor 定義了玩家 Pawn 角色在世界中生成（Spawn）的初始位置。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：Player Start 玩家出生點】\n正確。關卡中放置 Player Start Actor，遊戲開始時 Game Mode 會在此位置自動生成玩家預設的 Pawn 或 Character。",
      "keywords": [
        {
          "term": "Game Mode（遊戲模式類別）",
          "role": "定義核心遊戲規則、勝負邏輯與生成角色，多人生存架構中僅運行於伺服器端"
        },
        {
          "term": "Pawn（兵卒實體）",
          "role": "在世界中可被 Controller（控制器）附身附著的實體角色或載具基礎類別"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The Player Start <span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span> defines the location the player’s <span class=\"term-en\">Pawn</span><span class=\"inline-trans\">（受控實體）</span> will spawn into the world.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h09_q4",
      "chapterId": "h09",
      "qNum": 4,
      "type": "MC",
      "question": "The ____________ Actor gives an approximation of light scattering through a planetary atmosphere. It can give your outdoor Levels a much more realistic look.",
      "questionZh": "____________ Actor 能夠模擬光線穿過行星大氣層時的光學散射效應，為室外關卡帶來更加逼真的視覺效果。",
      "options": [
        "Atmospheric Fog",
        "Sky Sphere Blueprint",
        "Sky Light",
        "Post Process Volume"
      ],
      "optionsZh": [
        "Atmospheric Fog（大氣霧 Actor（模擬行星大氣層光線散射、天際線漸變與真實日照衰減））",
        "Sky Sphere Blueprint（動態天空球藍圖（BP_Sky_Sphere，提供程序化太陽、雲層與天空漸層））",
        "Sky Light（天空光照（捕捉遠景半球環境光與環境天光反射））",
        "Post Process Volume（後製處理體積（定義攝影機進入該區域時應用的調色、曝光與後效））"
      ],
      "rawAnswer": "Atmospheric Fog Actor",
      "correctIndex": 0,
      "correctText": "Atmospheric Fog",
      "explanation": "【UE 4.27 核心考點：Atmospheric Fog 大氣霧】\n依據物理瑞利散射與米氏散射模型，能模擬真實大氣厚度與太陽光照射角度產生的天色漸層變化。",
      "keywords": [
        {
          "term": "Sky Light（天空光）",
          "role": "捕捉遠方天空半球色彩分佈，為戶外場景提供均勻柔和的天光環境漫反射"
        },
        {
          "term": "Atmospheric Fog（大氣霧）",
          "role": "依據物理大氣散射模型，隨太陽照射角度產生晨曦、正午與夕陽天色漸層"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "The ____________ Actor gives an approximation of light scattering through a planetary atmosphere."
        },
        {
          "partNum": 2,
          "en": "It can give your outdoor Levels a much more realistic look."
        }
      ],
      "detailedQuestion": "The ____________ <span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span> gives an approximation of light scattering through a planetary atmosphere. It can give your outdoor <span class=\"term-en\">Levels</span><span class=\"inline-trans\">（關卡場景）</span> a much more realistic look.",
      "detailedOptions": [
        "Atmospheric Fog（大氣霧 Actor（模擬行星大氣層光線散射、天際線漸變與真實日照衰減））",
        "Sky Sphere Blueprint（動態天空球藍圖（BP_Sky_Sphere，提供程序化太陽、雲層與天空漸層））",
        "Sky Light（天空光照（捕捉遠景半球環境光與環境天光反射））",
        "Post Process Volume（後製處理體積（定義攝影機進入該區域時應用的調色、曝光與後效））"
      ]
    },
    {
      "id": "h09_q5",
      "chapterId": "h09",
      "qNum": 5,
      "type": "MC",
      "question": "If it is taking a long time to build lighting for your Level, there is a good chance you need to place a ____________.",
      "questionZh": "如果你的關卡在建置光照時耗費了極長的時間，很有可能是因為你需要在場景中放置一個 ____________。",
      "options": [
        "Sky Light",
        "Post Process Volume",
        "Reflection Capture",
        "Lightmass Importance Volume"
      ],
      "optionsZh": [
        "Sky Light（天空光照（捕捉遠景半球環境光與環境天光反射））",
        "Post Process Volume（後製處理體積（定義攝影機進入該區域時應用的調色、曝光與後效））",
        "Reflection Capture（反射捕捉 Actor（將周圍環境即時捕捉為立方體貼圖用於金屬反光））",
        "Lightmass Importance Volume（Lightmass 重要體積（將有限的高質量光照烘焙集中在主要玩家活動區））"
      ],
      "rawAnswer": "Lightmass Importance Volume",
      "correctIndex": 3,
      "correctText": "Lightmass Importance Volume",
      "explanation": "【UE 4.27 核心考點：Lightmass Importance Volume】\n告知 Lightmass 集中高精度光線計算於體積內部可玩區域，體積外部使用極粗糙採樣，大幅縮短整體烘焙時間。",
      "keywords": [
        {
          "term": "Lightmass（光照烘焙系統）",
          "role": "離線預先計算光線多次反彈，將柔和漫反射陰影寫入光照貼圖（Lightmaps）"
        },
        {
          "term": "Sky Light（天空光）",
          "role": "捕捉遠方天空半球色彩分佈，為戶外場景提供均勻柔和的天光環境漫反射"
        },
        {
          "term": "Reflection Capture（反射捕捉）",
          "role": "烘焙局部 360 度 Cubemap，為金屬與玻璃提供高品質靜態環境倒影"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "If it is taking a long time to build lighting for your <span class=\"term-en\">Level</span><span class=\"inline-trans\">（關卡場景）</span>, there is a good chance you need to place a ____________.",
      "detailedOptions": [
        "Sky Light（天空光照（捕捉遠景半球環境光與環境天光反射））",
        "Post Process Volume（後製處理體積（定義攝影機進入該區域時應用的調色、曝光與後效））",
        "Reflection Capture（反射捕捉 Actor（將周圍環境即時捕捉為立方體貼圖用於金屬反光））",
        "Lightmass Importance Volume（Lightmass 重要體積（將有限的高質量光照烘焙集中在主要玩家活動區））"
      ]
    },
    {
      "id": "h09_q6",
      "chapterId": "h09",
      "qNum": 6,
      "type": "TF",
      "question": "A Sky Light will only recapture the scene when you rebuild lighting.",
      "questionZh": "天空光（Sky Light）只有在你重新建置光照（Rebuild lighting）時才會重新捕捉場景環境。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：靜態/固定 Sky Light 重新捕捉】\n正確。在非動態模式下，修改天空球或背景後必須重新烘焙光照或點擊 Recapture，Sky Light 的環境光才會更新。",
      "keywords": [
        {
          "term": "Sky Light（天空光）",
          "role": "捕捉遠方天空半球色彩分佈，為戶外場景提供均勻柔和的天光環境漫反射"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "A <span class=\"term-en\">Sky Light</span><span class=\"inline-trans\">（天空光：環境全域補光）</span> will only recapture the scene when you rebuild lighting.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h09_q7",
      "chapterId": "h09",
      "qNum": 7,
      "type": "MC",
      "question": "The ____________ post processing property applies a blur to the scene based on distance in front of or behind a focal point. This is done to simulate what happens in real-world cameras. The effect can be used to draw the viewer’s attention and to make the rendering appear more like a photograph or a movie.",
      "questionZh": "____________ 後製處理屬性會依據對焦點前後的距離在場景中套用模糊，以模擬真實相機鏡頭的虛化景深效果。",
      "options": [
        "Depth of Field (DOF)",
        "Color Grading",
        "Eye Adaptation",
        "Anti-Aliasing"
      ],
      "optionsZh": [
        "Depth of Field (DOF)（景深虛化效果（Depth of Field：模擬大光圈散景））",
        "Color Grading（調色分級（調整畫面色調、對比度與色彩風格））",
        "Eye Adaptation（人眼適應（自動曝光模擬））",
        "Anti-Aliasing（反鋸齒平滑邊緣（TXAA/FXAA））"
      ],
      "rawAnswer": "Depth of Field (DOF)",
      "correctIndex": 0,
      "correctText": "Depth of Field (DOF)",
      "explanation": "【UE 4.27 核心考點：Depth of Field (DOF) 景深】\n景深設定焦點距離與光圈數值（F-stop），將背景或前景虛化模糊，營造電影感視覺焦點。",
      "keywords": [
        {
          "term": "Depth of Field / DOF（景深）",
          "role": "設定對焦點與光圈虛化背景或前景，模擬真實相機鏡頭的電影感焦點"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "The ____________ post processing property applies a blur to the scene based on distance in front of or behind a focal point."
        },
        {
          "partNum": 2,
          "en": "This is done to simulate what happens in real-world cameras."
        },
        {
          "partNum": 3,
          "en": "The effect can be used to draw the viewer’s attention and to make the rendering appear more like a photograph or a movie."
        }
      ],
      "detailedQuestion": "The ____________ post processing property applies a blur to the scene based on distance in front of or behind a focal point. This is done to simulate what happens in real-world cameras. The effect can be used to draw the viewer’s attention and to make the rendering appear more like a photograph or a movie.",
      "detailedOptions": [
        "Depth of Field (DOF)（景深虛化效果（Depth of Field：模擬大光圈散景））",
        "Color Grading（調色分級（調整畫面色調、對比度與色彩風格））",
        "Eye Adaptation（人眼適應（自動曝光模擬））",
        "Anti-Aliasing（反鋸齒平滑邊緣（TXAA/FXAA））"
      ]
    },
    {
      "id": "h09_q8",
      "chapterId": "h09",
      "qNum": 8,
      "type": "MC",
      "question": "A ____________ is a chromatic aberration effect that simulates the color shifts in real-world camera lenses. The effect is mostly noticeable near the edges of an image.",
      "questionZh": "____________ 是一種色差（Chromatic Aberration）效果，模擬真實相機鏡頭光學色散現象，主要在畫面邊緣區域較為明顯。",
      "options": [
        "Scene Fringe",
        "Blendable",
        "Bloom",
        "Tone Mapping"
      ],
      "optionsZh": [
        "Scene Fringe（場景邊緣色差（模擬相機色散紫邊））",
        "Blendable（可混合後製材質資產）",
        "Bloom（泛光光暈效果（當物體發光超過閾值時溢出耀眼的光暈視覺效果））",
        "Tone Mapping（色調映射（將 HDR 高動態範圍壓縮至 LDR 顯示範圍））"
      ],
      "rawAnswer": "Scene Fringe",
      "correctIndex": 0,
      "correctText": "Scene Fringe",
      "explanation": "【UE 4.27 核心考點：Scene Fringe 色散效果】\n在後製設定中稱為 Scene Fringe，專門模擬鏡片對不同波長色光折射率不同導致紅藍色彩邊緣分離。",
      "keywords": [
        {
          "term": "Scene Fringe（鏡頭色散）",
          "role": "模擬光學鏡片對不同色光折射率差異，在畫面邊緣呈現紅藍色相分離"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "A ____________ is a chromatic aberration effect that simulates the color shifts in real-world camera lenses."
        },
        {
          "partNum": 2,
          "en": "The effect is mostly noticeable near the edges of an image."
        }
      ],
      "detailedQuestion": "A ____________ is a <span class=\"term-en\">chromatic aberration effect</span><span class=\"inline-trans\">（色差/色散光學效應）</span> that simulates the color shifts in real-world camera lenses. The effect is mostly noticeable near the edges of an image.",
      "detailedOptions": [
        "Scene Fringe（場景邊緣色差（模擬相機色散紫邊））",
        "Blendable（可混合後製材質資產）",
        "Bloom（泛光光暈效果（當物體發光超過閾值時溢出耀眼的光暈視覺效果））",
        "Tone Mapping（色調映射（將 HDR 高動態範圍壓縮至 LDR 顯示範圍））"
      ]
    },
    {
      "id": "h09_q9",
      "chapterId": "h09",
      "qNum": 9,
      "type": "MC",
      "question": "____________ provides two fog colors, one for the hemisphere facing the dominant Directional Light (or straight up if none exists), and another for the opposite hemisphere.",
      "questionZh": "____________ 提供了兩種霧氣顏色：一種用於面向主定向光源的半球（若無光源則為正上方），另一種用於相反方向的半球。",
      "options": [
        "Reflection Capture",
        "Sky Sphere Blueprint",
        "Atmospheric Fog",
        "Exponential Height Fog"
      ],
      "optionsZh": [
        "Reflection Capture（反射捕捉 Actor（將周圍環境即時捕捉為立方體貼圖用於金屬反光））",
        "Sky Sphere Blueprint（動態天空球藍圖（BP_Sky_Sphere，提供程序化太陽、雲層與天空漸層））",
        "Atmospheric Fog（大氣霧 Actor（模擬行星大氣層光線散射、天際線漸變與真實日照衰減））",
        "Exponential Height Fog（指數高度霧 Actor（霧氣密度隨高度指數衰減，適合山谷或地表晨霧））"
      ],
      "rawAnswer": "Exponential Height Fog",
      "correctIndex": 3,
      "correctText": "Exponential Height Fog",
      "explanation": "【UE 4.27 核心考點：Exponential Height Fog 指數高度霧】\n指數高度霧提供隨海拔高度平滑遞減的霧氣密度，並支援定向發光散射（Directional Inscattering Color）與體積霧（Volumetric Fog）。",
      "keywords": [
        {
          "term": "Directional Light（定向光源）",
          "role": "無限遠平行日光投射，僅旋轉角度影響日照方向，模擬太陽或月光"
        },
        {
          "term": "Reflection Capture（反射捕捉）",
          "role": "烘焙局部 360 度 Cubemap，為金屬與玻璃提供高品質靜態環境倒影"
        },
        {
          "term": "Atmospheric Fog（大氣霧）",
          "role": "依據物理大氣散射模型，隨太陽照射角度產生晨曦、正午與夕陽天色漸層"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "____________ provides two fog colors, one for the hemisphere facing the dominant <span class=\"term-en\">Directional Light</span><span class=\"inline-trans\">（定向光源/太陽光）</span> (or straight up if none exists), and another for the opposite hemisphere.",
      "detailedOptions": [
        "Reflection Capture（反射捕捉 Actor（將周圍環境即時捕捉為立方體貼圖用於金屬反光））",
        "Sky Sphere Blueprint（動態天空球藍圖（BP_Sky_Sphere，提供程序化太陽、雲層與天空漸層））",
        "Atmospheric Fog（大氣霧 Actor（模擬行星大氣層光線散射、天際線漸變與真實日照衰減））",
        "Exponential Height Fog（指數高度霧 Actor（霧氣密度隨高度指數衰減，適合山谷或地表晨霧））"
      ]
    },
    {
      "id": "h09_q10",
      "chapterId": "h09",
      "qNum": 10,
      "type": "TF",
      "question": "The Lens Flare effect is a type of DOF blur effect.",
      "questionZh": "鏡頭光暈（Lens Flare）效果是景深（DOF）模糊效果的一種形式。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "False",
      "correctIndex": 1,
      "correctText": "False",
      "explanation": "【UE 4.27 核心考點：Lens Flare vs DOF】\n錯誤。Lens Flare 是模擬鏡頭內部光學鏡片在面對強光直射時產生的內部反射光斑與星芒，與景深（DOF）的焦距模糊是完全獨立的兩種後製效果。",
      "keywords": [
        {
          "term": "Unreal Engine 4.27 核心架構",
          "role": "遵循教材與引擎核心工作流規範"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The <span class=\"term-en\">Lens Flare effect</span><span class=\"inline-trans\">（鏡頭光暈眩光效果）</span> is a type of <span class=\"term-en\">DOF blur effect</span><span class=\"inline-trans\">（景深鏡頭模糊效果）</span>.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h10_q1",
      "chapterId": "h10",
      "qNum": 1,
      "type": "TF",
      "question": "If you want to animate the change in color of a particle over its life, you need a Color Over Life module with a constant curve or uniform curve distribution.",
      "questionZh": "如果你想要在粒子的生命週期內製作顏色變化的動畫，你需要一個具有常數曲線（constant curve）或均勻曲線分佈的 Color Over Life 模組。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：Color Over Life 與分佈曲線】\n正確。在 Cascade 中，Color Over Life 模組搭配 Curve Distribution 可以在時間軸 0.0~1.0 之間漸變顏色與 Alpha 不透明度（例如火花由亮黃轉橙再轉淡灰煙霧）。",
      "keywords": [
        {
          "term": "Cascade 粒子編輯器",
          "role": "UE4 經典模組化即時粒子系統，控制火焰、煙霧、電弧與爆炸特效"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "If you want to animate the change in color of a particle over its life, you need a <span class=\"term-en\">Color Over Life module</span><span class=\"inline-trans\">（生命週期顏色漸變模組）</span> with a constant curve or uniform curve distribution.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h10_q2",
      "chapterId": "h10",
      "qNum": 2,
      "type": "MC",
      "question": "____________ are a set of float or vector data types for handling data in specialized ways, such as using a range for a value, or interpolating a value along a curve.",
      "questionZh": "____________ 是一組浮點數或向量資料類型，用於以特殊方式處理資料，例如使用特定範圍數值，或沿著曲線對數值進行插值運算。",
      "options": [
        "Emitter Actors",
        "Distributions",
        "Color Over Life modules",
        "Particles"
      ],
      "optionsZh": [
        "Emitter Actors（發射器 Actor 清單）",
        "Distributions（分佈器（虛幻引擎控制數值是固定常數、隨機範圍或時間曲線的資料型態））",
        "Color Over Life modules（生命週期顏色變化模組）",
        "Particles（個別粒子顆粒）"
      ],
      "rawAnswer": "Distributions",
      "correctIndex": 1,
      "correctText": "Distributions",
      "explanation": "【UE 4.27 核心考點：Distributions 分佈器】\nDistributions 是 Cascade 粒子參數的數學基礎，包含 Constant、Uniform（範圍隨機）、Constant Curve（自訂曲線）等形態。",
      "keywords": [
        {
          "term": "Cascade 粒子編輯器",
          "role": "UE4 經典模組化即時粒子系統，控制火焰、煙霧、電弧與爆炸特效"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "____________ are a set of float or vector data types for handling data in specialized ways, such as using a range for a value, or interpolating a value along a curve.",
      "detailedOptions": [
        "Emitter Actors（發射器 Actor 清單）",
        "Distributions（分佈器（虛幻引擎控制數值是固定常數、隨機範圍或時間曲線的資料型態））",
        "Color Over Life modules（生命週期顏色變化模組）",
        "Particles（個別粒子顆粒）"
      ]
    },
    {
      "id": "h10_q3",
      "chapterId": "h10",
      "qNum": 3,
      "type": "TF",
      "question": "An Emitter Actor is an instance of a Particle System asset placed in a Level.",
      "questionZh": "發射器 Actor（Emitter Actor）是放置在關卡中的粒子系統資產（Particle System asset）的實例。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：Emitter Actor 實例化】\n正確。在 Content Browser 中建立的是 Particle System 資產；當將其拖曳至關卡世界後，生成的物件即為 AEmitter（Emitter Actor）。",
      "keywords": [
        {
          "term": "Unreal Engine 4.27 核心架構",
          "role": "遵循教材與引擎核心工作流規範"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "An <span class=\"term-en\">Emitter Actor</span><span class=\"inline-trans\">（粒子發射器物件）</span> is an instance of a <span class=\"term-en\">Particle System asset</span><span class=\"inline-trans\">（粒子系統資產）</span> placed in a <span class=\"term-en\">Level</span><span class=\"inline-trans\">（關卡場景）</span>.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h10_q4",
      "chapterId": "h10",
      "qNum": 4,
      "type": "MC",
      "question": "A ____________ is a complete particle effect that contains any number of Particle Emitters. By allowing multiple Emitters in a system, the designer can create elaborate particle effects that are held in a single system.",
      "questionZh": "____________ 是一個完整的粒子效果，內部可以包含任意數量的粒子發射器（Particle Emitters）。透過在一個系統中容納多個發射器，設計師可以在單一系統內建立精緻複雜的複合特效。",
      "options": [
        "Emitter Actor",
        "Emitter System asset",
        "Particle System asset",
        "Type Data module"
      ],
      "optionsZh": [
        "Emitter Actor（粒子發射器 Actor）",
        "Emitter System asset（發射器系統資產）",
        "Particle System asset（粒子系統主資產）",
        "Type Data module（類型資料模組（Type Data：定義粒子發射形式為精靈、光束、飄帶或網格））"
      ],
      "rawAnswer": "Particle System asset",
      "correctIndex": 2,
      "correctText": "Particle System asset",
      "explanation": "【UE 4.27 核心考點：Particle System asset 粒子系統資產】\n單一 Particle System 資產可同時整合多個發射器（例如營火系統內同時包含火焰、煙霧、飛濺火星與底部動態光源發射器）。",
      "keywords": [
        {
          "term": "Type Data 模組",
          "role": "改變發射器基礎形態：Sprite(平面面片)、Mesh(實體幾何)、Beam(電弧光束)、Ribbon(飄帶)"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "A ____________ is a complete particle effect that contains any number of Particle Emitters."
        },
        {
          "partNum": 2,
          "en": "By allowing multiple Emitters in a system, the designer can create elaborate particle effects that are held in a single system."
        }
      ],
      "detailedQuestion": "A ____________ is a complete particle effect that contains any number of <span class=\"term-en\">Particle Emitters</span><span class=\"inline-trans\">（粒子發射器單元）</span>. By allowing multiple <span class=\"term-en\">Emitters</span><span class=\"inline-trans\">（發射器）</span> in a system, the designer can create elaborate particle effects that are held in a single system.",
      "detailedOptions": [
        "Emitter Actor（粒子發射器 Actor）",
        "Emitter System asset（發射器系統資產）",
        "Particle System asset（粒子系統主資產）",
        "Type Data module（類型資料模組（Type Data：定義粒子發射形式為精靈、光束、飄帶或網格））"
      ]
    },
    {
      "id": "h10_q5",
      "chapterId": "h10",
      "qNum": 5,
      "type": "MC",
      "question": "The ____________ module holds the parameters that a particle Emitter absolutely needs to function. Information about the applied Material, the Emitter’s lifetime, and whether the Emitter loops can be found here.",
      "questionZh": "____________ 模組包含了粒子發射器運作所絕對必需的參數。有關套用的材質、發射器的生命週期以及發射器是否循環等資訊都可以在這裡找到。",
      "options": [
        "Required",
        "Initial Velocity",
        "Spawn",
        "Distributions"
      ],
      "optionsZh": [
        "Required（必要模組（所有發射器必備的基礎模組，設定材質、發射數量與排序））",
        "Initial Velocity（初始發射速度模組）",
        "Spawn（生成速率模組（控制每秒發射多少粒子或突發瞬間爆發數量））",
        "Distributions（分佈器（虛幻引擎控制數值是固定常數、隨機範圍或時間曲線的資料型態））"
      ],
      "rawAnswer": "Required",
      "correctIndex": 0,
      "correctText": "Required",
      "explanation": "【UE 4.27 核心考點：Required 必要模組】\nRequired 模組位於發射器頂部且不可刪除，負責指定粒子材質、子貼圖序列（SubUV）、循環次數與螢幕對齊方式。",
      "keywords": [
        {
          "term": "Pawn（兵卒實體）",
          "role": "在世界中可被 Controller（控制器）附身附著的實體角色或載具基礎類別"
        },
        {
          "term": "Material（材質系統）",
          "role": "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "The ____________ module holds the parameters that a particle Emitter absolutely needs to function."
        },
        {
          "partNum": 2,
          "en": "Information about the applied Material, the Emitter’s lifetime, and whether the Emitter loops can be found here."
        }
      ],
      "detailedQuestion": "The ____________ module holds the parameters that a particle <span class=\"term-en\">Emitter</span><span class=\"inline-trans\">（發射器）</span> absolutely needs to function. Information about the applied <span class=\"term-en\">Material</span><span class=\"inline-trans\">（材質）</span>, the <span class=\"term-en\">Emitter</span><span class=\"inline-trans\">（發射器）</span>’s lifetime, and whether the <span class=\"term-en\">Emitter</span><span class=\"inline-trans\">（發射器）</span> loops can be found here.",
      "detailedOptions": [
        "Required（必要模組（所有發射器必備的基礎模組，設定材質、發射數量與排序））",
        "Initial Velocity（初始發射速度模組）",
        "Spawn（生成速率模組（控制每秒發射多少粒子或突發瞬間爆發數量））",
        "Distributions（分佈器（虛幻引擎控制數值是固定常數、隨機範圍或時間曲線的資料型態））"
      ]
    },
    {
      "id": "h10_q6",
      "chapterId": "h10",
      "qNum": 6,
      "type": "TF",
      "question": "The Spawn module is responsible for the number of new particles that are birthed and their frequency or rate of emission.",
      "questionZh": "生成模組（Spawn module）負責決定新生成粒子的數量以及發射頻率或速率。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：Spawn 生成模組】\n正確。Spawn 模組設定 Rate（每秒持續生成率）與 Burst（瞬間爆發數量，如爆炸瞬間噴出 50 顆碎屑）。",
      "keywords": [
        {
          "term": "Pawn（兵卒實體）",
          "role": "在世界中可被 Controller（控制器）附身附著的實體角色或載具基礎類別"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The <span class=\"term-en\">Spawn module</span><span class=\"inline-trans\">（粒子生成速率模組）</span> is responsible for the number of new particles that are birthed and their frequency or rate of emission.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h10_q7",
      "chapterId": "h10",
      "qNum": 7,
      "type": "MC",
      "question": "The ____________ module is represented as a black bar below the Emitter block.",
      "questionZh": "____________ 模組在發射器方塊下方以一條黑色橫條表示。",
      "options": [
        "Type Data",
        "Required",
        "Initial Velocity",
        "Initial Size"
      ],
      "optionsZh": [
        "Type Data（類型資料模組）",
        "Required（必要模組（所有發射器必備的基礎模組，設定材質、發射數量與排序））",
        "Initial Velocity（初始發射速度模組）",
        "Initial Size（初始尺寸模組（定義粒子剛誕生時的三軸初始大小））"
      ],
      "rawAnswer": "Type Data",
      "correctIndex": 0,
      "correctText": "Type Data",
      "explanation": "【UE 4.27 核心考點：Type Data 模組外觀】\n在 Cascade 介面中，Type Data 模組以粗黑條形式置於發射器上方或特定欄位，決定發射精靈面片（Sprite）、實體網格（Mesh）、光束（Beam）或飄帶（Ribbon）。",
      "keywords": [
        {
          "term": "Cascade 粒子編輯器",
          "role": "UE4 經典模組化即時粒子系統，控制火焰、煙霧、電弧與爆炸特效"
        },
        {
          "term": "Type Data 模組",
          "role": "改變發射器基礎形態：Sprite(平面面片)、Mesh(實體幾何)、Beam(電弧光束)、Ribbon(飄帶)"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The ____________ module is represented as a black bar below the <span class=\"term-en\">Emitter</span><span class=\"inline-trans\">（發射器）</span> block.",
      "detailedOptions": [
        "Type Data（類型資料模組）",
        "Required（必要模組（所有發射器必備的基礎模組，設定材質、發射數量與排序））",
        "Initial Velocity（初始發射速度模組）",
        "Initial Size（初始尺寸模組（定義粒子剛誕生時的三軸初始大小））"
      ]
    },
    {
      "id": "h10_q8",
      "chapterId": "h10",
      "qNum": 8,
      "type": "MC",
      "question": "____________ is not a type data found in UE4.",
      "questionZh": "____________ 不是 UE4 中原生存在的 Type Data 類型。",
      "options": [
        "Sprite",
        "Beam",
        "Ribbon",
        "Rain"
      ],
      "optionsZh": [
        "Sprite（精靈粒子（面向攝影機鏡頭的 2D 平面貼圖廣告看板粒子））",
        "Beam（光束粒子（連接起點與終點的閃電、雷射光柱或電弧線型粒子））",
        "Ribbon（飄帶粒子（尾隨運動軌跡連接拉伸的刀光、飄帶或飛彈尾跡粒子））",
        "Rain（下雨效果）"
      ],
      "rawAnswer": "Rain",
      "correctIndex": 3,
      "correctText": "Rain",
      "explanation": "【UE 4.27 核心考點：UE4 原生 Type Data 類型】\nUE4 內建的 Type Data 包含 Mesh Data、Beam Data、Ribbon Data、Anim Trail 等；「Rain」並非內建的 Type Data 模組，雨水效果是用 GPU Sprite 配合重力與碰撞模擬製作的。",
      "keywords": [
        {
          "term": "Type Data 模組",
          "role": "改變發射器基礎形態：Sprite(平面面片)、Mesh(實體幾何)、Beam(電弧光束)、Ribbon(飄帶)"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "____________ is not a type data found in UE4.",
      "detailedOptions": [
        "Sprite（精靈粒子（面向攝影機鏡頭的 2D 平面貼圖廣告看板粒子））",
        "Beam（光束粒子（連接起點與終點的閃電、雷射光柱或電弧線型粒子））",
        "Ribbon（飄帶粒子（尾隨運動軌跡連接拉伸的刀光、飄帶或飛彈尾跡粒子））",
        "Rain（下雨效果）"
      ]
    },
    {
      "id": "h10_q9",
      "chapterId": "h10",
      "qNum": 9,
      "type": "MC",
      "question": "The ____________ Editor is a real-time particle editor and UE4’s modular approach to controlling particle behavior that allows you to design complex effects quickly and easily.",
      "questionZh": "____________ 編輯器是一款即時粒子編輯器，也是 UE4 用於控制粒子行為的模組化工具，能讓你快速且輕鬆地設計複雜的視覺特效。",
      "options": [
        "Cascade",
        "Drizzle",
        "Torrent",
        "Waterfall"
      ],
      "optionsZh": [
        "Cascade（粒子編輯器（UE4 經典模組化粒子特效製作系統））",
        "Drizzle（毛毛細雨效果）",
        "Torrent（傾盆大雨效果）",
        "Waterfall（瀑布流水粒子特效）"
      ],
      "rawAnswer": "Cascade",
      "correctIndex": 0,
      "correctText": "Cascade",
      "explanation": "【UE 4.27 核心考點：Cascade 粒子編輯器】\nCascade 是 UE4 經典的節點模組式即時粒子系統編輯器（在 UE5 中則逐步演進至 Niagara 系統）。",
      "keywords": [
        {
          "term": "Cascade 粒子編輯器",
          "role": "UE4 經典模組化即時粒子系統，控制火焰、煙霧、電弧與爆炸特效"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The ____________ <span class=\"term-en\">Editor</span><span class=\"inline-trans\">（虛幻編輯器）</span> is a real-time particle editor and UE4’s modular approach to controlling particle behavior that allows you to design complex effects quickly and easily.",
      "detailedOptions": [
        "Cascade（粒子編輯器（UE4 經典模組化粒子特效製作系統））",
        "Drizzle（毛毛細雨效果）",
        "Torrent（傾盆大雨效果）",
        "Waterfall（瀑布流水粒子特效）"
      ]
    },
    {
      "id": "h10_q10",
      "chapterId": "h10",
      "qNum": 10,
      "type": "MC",
      "question": "A ____________ is connected particles that form a stream between a source point and a target point. By default, it consists of a single quad polygon referred to as a sheet that always faces the camera and is stretched between two points.",
      "questionZh": "____________ 是一組相互連接並在起點（Source）與目標點（Target）之間形成流動串流的粒子。預設情況下，它由單一四邊形多邊形面組成，永遠面向攝影機並拉伸於兩點之間。",
      "options": [
        "Beam",
        "GPU",
        "Ribbon",
        "Anim Trail"
      ],
      "optionsZh": [
        "Beam（光束粒子（連接起點與終點的閃電、雷射光柱或電弧線型粒子））",
        "GPU（粒子（在顯示卡上並行運算，可同時渲染數十萬至數百萬顆粒子並支援 3D 向量場））",
        "Ribbon（飄帶粒子（尾隨運動軌跡連接拉伸的刀光、飄帶或飛彈尾跡粒子））",
        "Anim Trail（動畫軌跡拖尾粒子（專門用於角色武器刀光揮舞時的平滑幾何面片拖尾））"
      ],
      "rawAnswer": "Beam",
      "correctIndex": 0,
      "correctText": "Beam",
      "explanation": "【UE 4.27 核心考點：Beam Data 光束發射器】\nBeam Data 專門在起點與終點之間拉出一條連續且支援噪波抖動的面片，用於製作閃電雷擊、牽引光束或雷射射線。",
      "keywords": [
        {
          "term": "Unreal Engine 4.27 核心架構",
          "role": "遵循教材與引擎核心工作流規範"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "A ____________ is connected particles that form a stream between a source point and a target point."
        },
        {
          "partNum": 2,
          "en": "By default, it consists of a single quad polygon referred to as a sheet that always faces the camera and is stretched between two points."
        }
      ],
      "detailedQuestion": "A ____________ is connected particles that form a stream between a source point and a target point. By default, it consists of a single quad polygon referred to as a sheet that always faces the camera and is stretched between two points.",
      "detailedOptions": [
        "Beam（光束粒子（連接起點與終點的閃電、雷射光柱或電弧線型粒子））",
        "GPU（粒子（在顯示卡上並行運算，可同時渲染數十萬至數百萬顆粒子並支援 3D 向量場））",
        "Ribbon（飄帶粒子（尾隨運動軌跡連接拉伸的刀光、飄帶或飛彈尾跡粒子））",
        "Anim Trail（動畫軌跡拖尾粒子（專門用於角色武器刀光揮舞時的平滑幾何面片拖尾））"
      ]
    },
    {
      "id": "h12_q1",
      "chapterId": "h12",
      "qNum": 1,
      "type": "MC",
      "question": "The newest editor in UE4 used to edit in-game cinematics is called ____________.",
      "questionZh": "____________ 是 UE4 的電影過場序列動畫編輯工具，取代了 Matinee，提供具有現代非線性編輯功能的強大時間軸動畫編輯環境。",
      "options": [
        "Cinematics",
        "Persona",
        "Matinee",
        "Sequencer"
      ],
      "optionsZh": [
        "Cinematics（電影過場動畫製作領域）",
        "Persona（動畫編輯工具）",
        "Matinee（舊世代動畫編輯工具（已被 Sequencer 取代））",
        "Sequencer（電影過場序列編輯器（非線性時間軸動畫、鏡頭調度與特效控制核心系統））"
      ],
      "rawAnswer": "Sequencer",
      "correctIndex": 3,
      "correctText": "Sequencer",
      "explanation": "【UE 4.27 核心考點：Sequencer 序列器】\nSequencer 取代舊有的 Matinee，具備現代非線性多軌剪輯介面（類似 Premiere/After Effects），是虛幻引擎影視過場動畫的核心系統。",
      "keywords": [
        {
          "term": "Sequencer（電影序列器）",
          "role": "專業非線性過場動畫多軌剪輯器，控制鏡頭視角、關鍵影格與物件生成"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The newest editor in UE4 used to edit in-game cinematics is called ____________.",
      "detailedOptions": [
        "Cinematics（電影過場動畫製作領域）",
        "Persona（動畫編輯工具）",
        "Matinee（舊世代動畫編輯工具（已被 Sequencer 取代））",
        "Sequencer（電影過場序列編輯器（非線性時間軸動畫、鏡頭調度與特效控制核心系統））"
      ]
    },
    {
      "id": "h12_q2",
      "chapterId": "h12",
      "qNum": 2,
      "type": "TF",
      "question": "In a digital environment, keys or keyframes store changes in value or property at set points over a specified amount of time.",
      "questionZh": "在 Sequencer 中，關鍵影格（Keyframes）是不可移動的。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：關鍵影格動畫原理】\n正確。在不同時間點打上 Keyframe，引擎自動在關鍵影格之間對坐標、角度或浮點數值進行平滑插值曲線計算。",
      "keywords": [
        {
          "term": "Unreal Engine 4.27 核心架構",
          "role": "遵循教材與引擎核心工作流規範"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "In a digital environment, <span class=\"term-en\">keys</span><span class=\"inline-trans\">（關鍵影格）</span> or <span class=\"term-en\">keyframes</span><span class=\"inline-trans\">（關鍵影格）</span> store changes in value or property at set points over a specified amount of time.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h12_q3",
      "chapterId": "h12",
      "qNum": 3,
      "type": "MC",
      "question": "A ____________ is a panel in the Sequencer Editor that displays the playback range of your sequence using red and green markers.",
      "questionZh": "在 Sequencer 編輯器中，你可以使用 ____________ 來檢視與調整關鍵影格之間的動畫插值曲線。",
      "options": [
        "Tracks Area",
        "Timeline",
        "Sequence Breadcrumb",
        "Tree View"
      ],
      "optionsZh": [
        "Tracks Area（軌道時間軸編輯區域（排列關鍵影格、音軌與各通道數值的多軌區域））",
        "Timeline（時間軸播放控制區）",
        "Sequence Breadcrumb（序列階層導航標籤（麵包屑路徑，顯示主序列與當前編輯的子 Shot 序列位置））",
        "Tree View（樹狀大綱清單檢視（左側列出所有受 Sequencer 控制的 Actor 物件與屬性項目））"
      ],
      "rawAnswer": "Timeline",
      "correctIndex": 1,
      "correctText": "Timeline",
      "explanation": "【UE 4.27 核心考點：Timeline 時間軸播放區間】\nTimeline 面板包含綠色（起始幀 Start Marker）與紅色（結束幀 End Marker）標記，定義序列的播放循環與導出範圍。",
      "keywords": [
        {
          "term": "Sequencer（電影序列器）",
          "role": "專業非線性過場動畫多軌剪輯器，控制鏡頭視角、關鍵影格與物件生成"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "A ____________ is a panel in the <span class=\"term-en\">Sequencer Editor</span><span class=\"inline-trans\">（Sequencer 動畫序列編輯器）</span> that displays the playback range of your sequence using red and green markers.",
      "detailedOptions": [
        "Tracks Area（軌道時間軸編輯區域（排列關鍵影格、音軌與各通道數值的多軌區域））",
        "Timeline（時間軸播放控制區）",
        "Sequence Breadcrumb（序列階層導航標籤（麵包屑路徑，顯示主序列與當前編輯的子 Shot 序列位置））",
        "Tree View（樹狀大綱清單檢視（左側列出所有受 Sequencer 控制的 Actor 物件與屬性項目））"
      ]
    },
    {
      "id": "h12_q4",
      "chapterId": "h12",
      "qNum": 4,
      "type": "TF",
      "question": "The Cine Camera Actor has the exact same properties as a regular Camera Actor.",
      "questionZh": "電影攝影機 Actor（Cine Camera Actor）具備與一般普通相機 Actor（Regular Camera Actor）完全相同的屬性。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "False",
      "correctIndex": 1,
      "correctText": "False",
      "explanation": "【UE 4.27 核心考點：Cine Camera vs 一般相機】\n錯誤。Cine Camera Actor 具備專業電影光學特有屬性：真實感應器規格（Sensor Dimensions）、實體焦距（Focal Length）、光圈（Aperture / f-stop）與自動跟焦追蹤（Focus Tracking）。",
      "keywords": [
        {
          "term": "Cine Camera Actor（電影攝影機）",
          "role": "模擬真實光學鏡頭：感應器片幅、焦距(mm)、光圈(f-stop)與自動主體跟焦"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The <span class=\"term-en\">Cine Camera Actor</span><span class=\"inline-trans\">（電影攝影機物件）</span> has the exact same properties as a regular Camera <span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span>.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h12_q5",
      "chapterId": "h12",
      "qNum": 5,
      "type": "MC",
      "question": "____________ is a Sequencer term meaning an Actor that exists in the Level already and that Sequencer will take control of in order to apply changes to it.",
      "questionZh": "____________ 是一個 Sequencer 術語，指已經存在於關卡中、由 Sequencer 接管控制並對其套用動畫屬性變更的 Actor。",
      "options": [
        "Placeable",
        "Possessable",
        "Spawnable",
        "Addable"
      ],
      "optionsZh": [
        "Placeable（可放置靜態物件（關卡一般常規 Actor））",
        "Possessable（附身物件（關卡中本來就已存在的 Actor，由 Sequencer 暫時接管控制））",
        "Spawnable（動態生成物件（原本關卡中不存在，由 Sequencer 在播放時動態生成，結束時自動銷毀））",
        "Addable（非官方標準定義項目）"
      ],
      "rawAnswer": "Possessable",
      "correctIndex": 1,
      "correctText": "Possessable",
      "explanation": "【UE 4.27 核心考點：Possessable 可附身物件】\nPossessable 是引用關卡中原有的 Actor 物件；動畫結束後該物件依然留在關卡中。對比 Spawnable 則是動畫開始動態生成、結束自動銷毀。",
      "keywords": [
        {
          "term": "Pawn（兵卒實體）",
          "role": "在世界中可被 Controller（控制器）附身附著的實體角色或載具基礎類別"
        },
        {
          "term": "Sequencer（電影序列器）",
          "role": "專業非線性過場動畫多軌剪輯器，控制鏡頭視角、關鍵影格與物件生成"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "____________ is a <span class=\"term-en\">Sequencer</span><span class=\"inline-trans\">（Sequencer 動畫序列器）</span> term meaning an <span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span> that exists in the <span class=\"term-en\">Level</span><span class=\"inline-trans\">（關卡場景）</span> already and that <span class=\"term-en\">Sequencer</span><span class=\"inline-trans\">（Sequencer 動畫序列器）</span> will take control of in order to apply changes to it.",
      "detailedOptions": [
        "Placeable（可放置靜態物件（關卡一般常規 Actor））",
        "Possessable（附身物件（關卡中本來就已存在的 Actor，由 Sequencer 暫時接管控制））",
        "Spawnable（動態生成物件（原本關卡中不存在，由 Sequencer 在播放時動態生成，結束時自動銷毀））",
        "Addable（非官方標準定義項目）"
      ]
    },
    {
      "id": "h12_q6",
      "chapterId": "h12",
      "qNum": 6,
      "type": "TF",
      "question": "The Timeline Marker is the playhead and displays the current frame being played in the Level Sequence.",
      "questionZh": "時間軸標記（Timeline Marker / Playhead）是播放指針，負責顯示當前關卡序列正在播放的當前影格畫面。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：Playhead 播放指針】\n正確。拖動 Timeline Marker 可在關卡工作視窗中即時搓擦預覽（Scrubbing）各影格的動畫狀態。",
      "keywords": [
        {
          "term": "Unreal Engine 4.27 核心架構",
          "role": "遵循教材與引擎核心工作流規範"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "The <span class=\"term-en\">Timeline Marker</span><span class=\"inline-trans\">（時間軸指針標記）</span> is the <span class=\"term-en\">playhead</span><span class=\"inline-trans\">（播放指針）</span> and displays the current frame being played in the <span class=\"term-en\">Level Sequence</span><span class=\"inline-trans\">（關卡過場序列資產）</span>.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h12_q7",
      "chapterId": "h12",
      "qNum": 7,
      "type": "MC",
      "question": "____________ is a Sequencer term meaning an Actor that Sequencer is possessing that does not yet exist and will be spawned by Sequencer.",
      "questionZh": "____________ 是一個 Sequencer 術語，指原本在關卡中並不存在，而是完全由 Sequencer 動態生成建立、並由 Sequencer 控制的 Actor。",
      "options": [
        "Placeable",
        "Possessable",
        "Spawnable",
        "Addable"
      ],
      "optionsZh": [
        "Placeable（可放置靜態物件（關卡一般常規 Actor））",
        "Possessable（附身物件（關卡中本來就已存在的 Actor，由 Sequencer 暫時接管控制））",
        "Spawnable（動態生成物件（原本關卡中不存在，由 Sequencer 在播放時動態生成，結束時自動銷毀））",
        "Addable（非官方標準定義項目）"
      ],
      "rawAnswer": "Spawnable",
      "correctIndex": 2,
      "correctText": "Spawnable",
      "explanation": "【UE 4.27 核心考點：Spawnable 可生成物件】\nSpawnable 物件直接儲存在 Level Sequence 資產內部，只在序列播放期間存在，結束後自動銷毀，不會污染原始關卡。",
      "keywords": [
        {
          "term": "Pawn（兵卒實體）",
          "role": "在世界中可被 Controller（控制器）附身附著的實體角色或載具基礎類別"
        },
        {
          "term": "Sequencer（電影序列器）",
          "role": "專業非線性過場動畫多軌剪輯器，控制鏡頭視角、關鍵影格與物件生成"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "____________ is a <span class=\"term-en\">Sequencer</span><span class=\"inline-trans\">（Sequencer 動畫序列器）</span> term meaning an <span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span> that <span class=\"term-en\">Sequencer</span><span class=\"inline-trans\">（Sequencer 動畫序列器）</span> is possessing that does not yet exist and will be spawned by <span class=\"term-en\">Sequencer</span><span class=\"inline-trans\">（Sequencer 動畫序列器）</span>.",
      "detailedOptions": [
        "Placeable（可放置靜態物件（關卡一般常規 Actor））",
        "Possessable（附身物件（關卡中本來就已存在的 Actor，由 Sequencer 暫時接管控制））",
        "Spawnable（動態生成物件（原本關卡中不存在，由 Sequencer 在播放時動態生成，結束時自動銷毀））",
        "Addable（非官方標準定義項目）"
      ]
    },
    {
      "id": "h12_q8",
      "chapterId": "h12",
      "qNum": 8,
      "type": "MC",
      "question": "____________ are self-contained assets that store track and keyframe data used for creating in-game cinematics and are edited in the Sequencer Editor.",
      "questionZh": "____________ 是獨立封裝的資產，用來儲存製作遊戲內過場動畫所需的軌道與關鍵影格資料，並在 Sequencer 編輯器中進行編輯。",
      "options": [
        "Level Sequence assets",
        "Level Sequence Actors",
        "Persona assets",
        "Matinee Actors"
      ],
      "optionsZh": [
        "Level Sequence assets（關卡序列資產（Level Sequence））",
        "Level Sequence Actors（關卡序列播放器 Actor（在關卡中代表該序列並控制自動播放的實體物件））",
        "Persona assets（Persona 骨架動畫資產）",
        "Matinee Actors（舊版 Matinee 序列 Actor）"
      ],
      "rawAnswer": "Level Sequence assets",
      "correctIndex": 0,
      "correctText": "Level Sequence assets",
      "explanation": "【UE 4.27 核心考點：Level Sequence assets】\nLevel Sequence 是 Content Browser 中的專有資產，可被多個關卡重複引用或透過藍圖節點「Play Sequence」觸發播放。",
      "keywords": [
        {
          "term": "Sequencer（電影序列器）",
          "role": "專業非線性過場動畫多軌剪輯器，控制鏡頭視角、關鍵影格與物件生成"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "____________ are self-contained assets that store track and <span class=\"term-en\">keyframe</span><span class=\"inline-trans\">（關鍵影格）</span> data used for creating in-game cinematics and are edited in the <span class=\"term-en\">Sequencer Editor</span><span class=\"inline-trans\">（Sequencer 動畫序列編輯器）</span>.",
      "detailedOptions": [
        "Level Sequence assets（關卡序列資產（Level Sequence））",
        "Level Sequence Actors（關卡序列播放器 Actor（在關卡中代表該序列並控制自動播放的實體物件））",
        "Persona assets（Persona 骨架動畫資產）",
        "Matinee Actors（舊版 Matinee 序列 Actor）"
      ]
    },
    {
      "id": "h12_q9",
      "chapterId": "h12",
      "qNum": 9,
      "type": "MC",
      "question": "A ____________ allows you to switch between cameras associated with Sequencer and provides a camera perspective.",
      "questionZh": "____________ 允許你在與 Sequencer 關聯的多個相機視角之間進行切換剪輯，並提供鏡頭分鏡畫面視角。",
      "options": [
        "Shot Track",
        "Event Track",
        "Camera Cut Track",
        "Play Rate Track"
      ],
      "optionsZh": [
        "Shot Track（分鏡鏡頭軌道（將整段電影切分為多個獨立子 Shot 進行組織管理））",
        "Event Track（藍圖事件軌道（在指定影格觸發關卡藍圖自訂事件））",
        "Camera Cut Track（攝影機剪輯切換軌道）",
        "Play Rate Track（播放速率軌道（控制時間流速快慢縮放，實現子彈時間或慢動作））"
      ],
      "rawAnswer": "Camera Cut Track",
      "correctIndex": 2,
      "correctText": "Camera Cut Track",
      "explanation": "【UE 4.27 核心考點：Camera Cut Track 相機切鏡軌道】\nCamera Cut Track 是電影導演軌道，負責在主時間軸上安排不同時間段切換到哪一台 Cine Camera 拍攝畫面。",
      "keywords": [
        {
          "term": "Perspective（透視視圖）",
          "role": "具備近大遠小真實 3D 空間透視感，適合關卡自由漫遊預覽"
        },
        {
          "term": "Sequencer（電影序列器）",
          "role": "專業非線性過場動畫多軌剪輯器，控制鏡頭視角、關鍵影格與物件生成"
        },
        {
          "term": "Cine Camera Actor（電影攝影機）",
          "role": "模擬真實光學鏡頭：感應器片幅、焦距(mm)、光圈(f-stop)與自動主體跟焦"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "A ____________ allows you to switch between cameras associated with <span class=\"term-en\">Sequencer</span><span class=\"inline-trans\">（Sequencer 動畫序列器）</span> and provides a camera perspective.",
      "detailedOptions": [
        "Shot Track（分鏡鏡頭軌道（將整段電影切分為多個獨立子 Shot 進行組織管理））",
        "Event Track（藍圖事件軌道（在指定影格觸發關卡藍圖自訂事件））",
        "Camera Cut Track（攝影機剪輯切換軌道）",
        "Play Rate Track（播放速率軌道（控制時間流速快慢縮放，實現子彈時間或慢動作））"
      ]
    },
    {
      "id": "h12_q10",
      "chapterId": "h12",
      "qNum": 10,
      "type": "MC",
      "question": "If you want to animate a Cine Camera Actor along a path with Sequencer, you should use a ____________.",
      "questionZh": "如果你想要在 Sequencer 中讓電影攝影機 Actor 沿著指定路徑移動動畫，你應該使用 ____________。",
      "options": [
        "Camera Rig Crane Actor",
        "Level Sequence Actor",
        "Camera Rig Rail Actor",
        "Spawnable Actor"
      ],
      "optionsZh": [
        "Camera Rig Crane Actor（攝影機搖臂吊臂 Actor）",
        "Level Sequence Actor（關卡序列播放器 Actor）",
        "Camera Rig Rail Actor（攝影機軌道滑軌 Actor）",
        "Spawnable Actor（動態生成 Actor）"
      ],
      "rawAnswer": "Camera Rig Rail Actor",
      "correctIndex": 2,
      "correctText": "Camera Rig Rail Actor",
      "explanation": "【UE 4.27 核心考點：Camera Rig Rail Actor 軌道車】\nCamera Rig Rail 提供可編輯的樣條曲線導軌，透過單一參數驅動相機平滑平移滑行，精準重現好萊塢電影軌道車運鏡。",
      "keywords": [
        {
          "term": "Pawn（兵卒實體）",
          "role": "在世界中可被 Controller（控制器）附身附著的實體角色或載具基礎類別"
        },
        {
          "term": "Sequencer（電影序列器）",
          "role": "專業非線性過場動畫多軌剪輯器，控制鏡頭視角、關鍵影格與物件生成"
        },
        {
          "term": "Cine Camera Actor（電影攝影機）",
          "role": "模擬真實光學鏡頭：感應器片幅、焦距(mm)、光圈(f-stop)與自動主體跟焦"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "If you want to animate a <span class=\"term-en\">Cine Camera Actor</span><span class=\"inline-trans\">（電影攝影機物件）</span> along a path with <span class=\"term-en\">Sequencer</span><span class=\"inline-trans\">（Sequencer 動畫序列器）</span>, you should use a ____________.",
      "detailedOptions": [
        "Camera Rig Crane Actor（攝影機搖臂吊臂 Actor）",
        "Level Sequence Actor（關卡序列播放器 Actor）",
        "Camera Rig Rail Actor（攝影機軌道滑軌 Actor）",
        "Spawnable Actor（動態生成 Actor）"
      ]
    },
    {
      "id": "h13_q1",
      "chapterId": "h13",
      "qNum": 1,
      "type": "MC",
      "question": "A ____________ is a rigid body that fractures and crumbles when enough force or damage has been applied.",
      "questionZh": "____________ 是一種當遭受足夠外在衝擊力或武器傷害時，會動態破裂破碎成小碎塊的剛體物件。",
      "options": [
        "Radial Force Actor",
        "Static Mesh Actor",
        "Destructible Actor",
        "Skeletal Mesh Actor"
      ],
      "optionsZh": [
        "Radial Force Actor（徑向力場 Actor（以球形向四周發射爆炸推力或向內產生吸引力引力場））",
        "Static Mesh Actor（靜態網格物件（可勾選 Simulate Physics 開啟物理剛體模擬））",
        "Destructible Actor（可破壞網格 Actor（受到足夠外力衝擊或傷害時碎裂瓦解的剛體物件））",
        "Skeletal Mesh Actor（骨架模型物件（具備骨骼階層，可切換布娃娃物理狀態））"
      ],
      "rawAnswer": "Destructible Actor",
      "correctIndex": 2,
      "correctText": "Destructible Actor",
      "explanation": "【UE 4.27 核心考點：Destructible Actor 可破壞物件】\nDestructible Actor 採用 Voronoi 演算法將模型切分成破碎層次，受到物理衝擊或爆炸傷害時碎裂散落。",
      "keywords": [
        {
          "term": "Static Mesh（靜態網格）",
          "role": "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
        },
        {
          "term": "Destructible Actor（可破壞物件）",
          "role": "採用 Voronoi 演算法將模型預先碎塊化，受撞擊傷害時動態崩解散落"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "A ____________ is a <span class=\"term-en\">rigid body</span><span class=\"inline-trans\">（剛體物理）</span> that fractures and crumbles when enough force or damage has been applied.",
      "detailedOptions": [
        "Radial Force Actor（徑向力場 Actor（以球形向四周發射爆炸推力或向內產生吸引力引力場））",
        "Static Mesh Actor（靜態網格物件（可勾選 Simulate Physics 開啟物理剛體模擬））",
        "Destructible Actor（可破壞網格 Actor（受到足夠外力衝擊或傷害時碎裂瓦解的剛體物件））",
        "Skeletal Mesh Actor（骨架模型物件（具備骨骼階層，可切換布娃娃物理狀態））"
      ]
    },
    {
      "id": "h13_q2",
      "chapterId": "h13",
      "qNum": 2,
      "type": "TF",
      "question": "Friction is the amount of resistance applied to a sliding or rolling body.",
      "questionZh": "摩擦力（Friction）是施加在滑動或滾動物體上的阻力大小。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：物理摩擦力定義】\n正確。在 Physical Material 中調整 Friction（摩擦係數），可控制物體在斜坡或地面上的滑行阻力（例如冰面摩擦極小、砂石摩擦極大）。",
      "keywords": [
        {
          "term": "Material（材質系統）",
          "role": "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
        },
        {
          "term": "Physical Material（物理材質）",
          "role": "設定物理屬性（摩擦力 Friction、彈力恢復係數 Restitution、密度 Density）"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "<span class=\"term-en\">Friction</span><span class=\"inline-trans\">（表面摩擦力）</span> is the amount of resistance applied to a sliding or rolling body.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h13_q3",
      "chapterId": "h13",
      "qNum": 3,
      "type": "MC",
      "question": "____________ refers to the amount of matter in a body, regardless of the amount of gravity applied.",
      "questionZh": "____________ 指的是物體內部所含物質的量，其數值不受外在施加重力大小的影響。",
      "options": [
        "Mass",
        "Density",
        "Impulse",
        "Angular Force"
      ],
      "optionsZh": [
        "Mass（物理質量）",
        "Density（物質密度）",
        "Impulse（瞬間衝量（一次性瞬間改變速度的動量脈衝））",
        "Angular Force（角加速度旋轉力）"
      ],
      "rawAnswer": "Mass",
      "correctIndex": 0,
      "correctText": "Mass",
      "explanation": "【UE 4.27 核心考點：Mass 質量物理量】\n質量（Mass，以公斤 kg 為單位）決定物體的慣性大小（F = ma），質量越大的物體需要越大的推力才能使其加速運動。",
      "keywords": [
        {
          "term": "Unreal Engine 4.27 核心架構",
          "role": "遵循教材與引擎核心工作流規範"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "____________ refers to the amount of matter in a body, regardless of the amount of gravity applied.",
      "detailedOptions": [
        "Mass（物理質量）",
        "Density（物質密度）",
        "Impulse（瞬間衝量（一次性瞬間改變速度的動量脈衝））",
        "Angular Force（角加速度旋轉力）"
      ]
    },
    {
      "id": "h13_q4",
      "chapterId": "h13",
      "qNum": 4,
      "type": "TF",
      "question": "Restitution refers to how quickly a physics body comes to rest after a force has been applied. It is the dissipation of energy over time.",
      "questionZh": "恢復係數（Restitution）指的是物理剛體在受力後多快停止運動，即能量隨時間的耗散。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "False",
      "correctIndex": 1,
      "correctText": "False",
      "explanation": "【UE 4.27 核心考點：Restitution 恢復係數 / 彈性】\n錯誤。能量隨時間耗散減速的屬性是阻尼（Damping）；而 Restitution 代表的是「彈性碰撞恢復係數」（0.0 = 完全非彈性碰撞不反彈，1.0 = 完全彈性碰撞 100% 反彈跳起）。",
      "keywords": [
        {
          "term": "Unreal Engine 4.27 核心架構",
          "role": "遵循教材與引擎核心工作流規範"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "Restitution refers to how quickly a physics body comes to rest after a force has been applied."
        },
        {
          "partNum": 2,
          "en": "It is the dissipation of energy over time."
        }
      ],
      "detailedQuestion": "<span class=\"term-en\">Restitution</span><span class=\"inline-trans\">（表面彈性係數）</span> refers to how quickly a physics body comes to rest after a force has been applied. It is the dissipation of energy over time.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h13_q5",
      "chapterId": "h13",
      "qNum": 5,
      "type": "MC",
      "question": "A ____________ is a type of joint that allows you to connect two Actors together, presumably ones simulating physics. It gives you the ability to apply limits or set linear and angular forces. There are several preset joint types: ball-and-socket, hinge, and prismatic.",
      "questionZh": "____________ 是一種關節連接器，允許你將兩個 Actor 連接在一起（特別是用於物理模擬物件）。它讓你能施加限制或設定線性與角作用力，具備多種預設關節類型：球窩關節（ball-and-socket）、鉸鏈（hinge）與稜柱關節（prismatic）。",
      "options": [
        "Destructible Actor",
        "Physics Thruster Actor",
        "Static Mesh Actor",
        "Physics Constraint Actor"
      ],
      "optionsZh": [
        "Destructible Actor（可破壞網格 Actor（受到足夠外力衝擊或傷害時碎裂瓦解的剛體物件））",
        "Physics Thruster Actor（物理推進器 Actor（如同火箭引擎噴射口，持續沿負 X 軸方向施加強大反作用力推力））",
        "Static Mesh Actor（靜態網格物件（可勾選 Simulate Physics 開啟物理剛體模擬））",
        "Physics Constraint Actor（物理約束關節 Actor（在兩個 Actor 之間建立球鉸鏈、合頁鉸鏈或平移限制約束））"
      ],
      "rawAnswer": "Physics Constraint Actor",
      "correctIndex": 3,
      "correctText": "Physics Constraint Actor",
      "explanation": "【UE 4.27 核心考點：Physics Constraint Actor 物理約束】\nPhysics Constraint 限制兩個剛體之間的相對線性與角度自由度，常用於門軸鉸鏈、擺鐘、吊橋繩索或車輪懸吊系統。",
      "keywords": [
        {
          "term": "Static Mesh（靜態網格）",
          "role": "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
        },
        {
          "term": "Socket（插槽）",
          "role": "網格模型上的指定附著點，供武器、裝飾帽子或光效精準對齊吸附"
        },
        {
          "term": "Destructible Actor（可破壞物件）",
          "role": "採用 Voronoi 演算法將模型預先碎塊化，受撞擊傷害時動態崩解散落"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "A ____________ is a type of joint that allows you to connect two Actors together, presumably ones simulating physics."
        },
        {
          "partNum": 2,
          "en": "It gives you the ability to apply limits or set linear and angular forces."
        },
        {
          "partNum": 3,
          "en": "There are several preset joint types: ball-and-socket, hinge, and prismatic."
        }
      ],
      "detailedQuestion": "A ____________ is a type of joint that allows you to connect two <span class=\"term-en\">Actors</span><span class=\"inline-trans\">（場景物件/Actor）</span> together, presumably ones simulating physics. It gives you the ability to apply limits or set linear and angular forces. There are several preset joint types: ball-and-socket, hinge, and prismatic.",
      "detailedOptions": [
        "Destructible Actor（可破壞網格 Actor（受到足夠外力衝擊或傷害時碎裂瓦解的剛體物件））",
        "Physics Thruster Actor（物理推進器 Actor（如同火箭引擎噴射口，持續沿負 X 軸方向施加強大反作用力推力））",
        "Static Mesh Actor（靜態網格物件（可勾選 Simulate Physics 開啟物理剛體模擬））",
        "Physics Constraint Actor（物理約束關節 Actor（在兩個 Actor 之間建立球鉸鏈、合頁鉸鏈或平移限制約束））"
      ]
    },
    {
      "id": "h13_q6",
      "chapterId": "h13",
      "qNum": 6,
      "type": "TF",
      "question": "A Static Mesh Actor can be set to simulate physics.",
      "questionZh": "靜態網格 Actor（Static Mesh Actor）可以被設定為模擬物理（Simulate Physics）。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：靜態網格物理模擬】\n正確。只要 Static Mesh 具備碰撞體（Collision Hull）且 Mobility 為 Movable，勾選「Simulate Physics」即可讓該物件受重力自由落體並產生推擠碰撞。",
      "keywords": [
        {
          "term": "Collision（碰撞體系）",
          "role": "阻止角色與物件穿透，並能觸發物理阻擋（Block）或重疊事件（Overlap）"
        },
        {
          "term": "Static Mesh（靜態網格）",
          "role": "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
        },
        {
          "term": "Mobility（移動性）",
          "role": "Static(靜態烘焙)、Stationary(固定位置動態光強)、Movable(完全動態即時物理)"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "A <span class=\"term-en\">Static Mesh Actor</span><span class=\"inline-trans\">（靜態網格物件）</span> can be set to simulate physics.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h13_q7",
      "chapterId": "h13",
      "qNum": 7,
      "type": "MC",
      "question": "The ____________ Editor is used to set up physics constraints on the bone hierarchy for a Skeletal Mesh asset. It is used, for example, to create ragdoll effects on characters or dynamic hoses or chains that react with the world around them.",
      "questionZh": "____________ 編輯器是用來為骨骼網格資產（Skeletal Mesh asset）的骨骼階層設定物理約束的工具。舉例來說，它可用於為角色製作布娃娃（Ragdoll）效果，或製作能與周遭世界互動的動態軟管或鏈條。",
      "options": [
        "Physics Asset Tool (PhAT)",
        "Destructible Mesh",
        "APEX PhysX Lab",
        "Static Mesh"
      ],
      "optionsZh": [
        "Physics Asset Tool (PhAT)（物理資產編輯工具（PhAT：為骨架模型設定布娃娃碰撞體與物理關節））",
        "Destructible Mesh（可破壞網格模型資產）",
        "APEX PhysX Lab（NVIDIA APEX PhysX 實驗室工具）",
        "Static Mesh（靜態幾何網格模型資產（.uasset））"
      ],
      "rawAnswer": "Physics Asset Tool (PhAT)",
      "correctIndex": 0,
      "correctText": "Physics Asset Tool (PhAT)",
      "explanation": "【UE 4.27 核心考點：Physics Asset Tool (PhAT)】\nPhAT 是骨骼網格專用的物理編輯器，為每根骨骼建立膠囊碰撞體並設定關節旋轉極限，是製作布娃娃系統的核心工具。",
      "keywords": [
        {
          "term": "Static Mesh（靜態網格）",
          "role": "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
        },
        {
          "term": "Destructible Actor（可破壞物件）",
          "role": "採用 Voronoi 演算法將模型預先碎塊化，受撞擊傷害時動態崩解散落"
        },
        {
          "term": "Physics Constraint（物理約束關節）",
          "role": "連結兩個剛體並限制位移與旋轉自由度，製作鉸鏈門軸、擺鐘與懸吊避震"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "The ____________ Editor is used to set up physics constraints on the bone hierarchy for a Skeletal Mesh asset."
        },
        {
          "partNum": 2,
          "en": "It is used, for example, to create ragdoll effects on characters or dynamic hoses or chains that react with the world around them."
        }
      ],
      "detailedQuestion": "The ____________ <span class=\"term-en\">Editor</span><span class=\"inline-trans\">（虛幻編輯器）</span> is used to set up <span class=\"term-en\">physics constraints</span><span class=\"inline-trans\">（物理約束鉸鏈）</span> on the <span class=\"term-en\">bone hierarchy</span><span class=\"inline-trans\">（骨骼階層）</span> for a <span class=\"term-en\">Skeletal Mesh asset</span><span class=\"inline-trans\">（骨架模型資產）</span>. It is used, for example, to create <span class=\"term-en\">ragdoll effects</span><span class=\"inline-trans\">（布娃娃物理效果）</span> on characters or dynamic hoses or chains that react with the world around them.",
      "detailedOptions": [
        "Physics Asset Tool (PhAT)（物理資產編輯工具（PhAT：為骨架模型設定布娃娃碰撞體與物理關節））",
        "Destructible Mesh（可破壞網格模型資產）",
        "APEX PhysX Lab（NVIDIA APEX PhysX 實驗室工具）",
        "Static Mesh（靜態幾何網格模型資產（.uasset））"
      ]
    },
    {
      "id": "h13_q8",
      "chapterId": "h13",
      "qNum": 8,
      "type": "TF",
      "question": "Voronoi is a mathematical tessellation algorithm that divides a large entity into small parts.",
      "questionZh": "Voronoi 是一種將大型實體分割成多個細小碎塊的數學鑲嵌分割演算法。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True（正確）",
        "False（錯誤）"
      ],
      "rawAnswer": "True",
      "correctIndex": 0,
      "correctText": "True",
      "explanation": "【UE 4.27 核心考點：Voronoi 破碎演算法】\n正確。UE4 破碎網格（Destructible Mesh）與 Chaos 破碎系統廣泛採用 Voronoi 圖形分割法，生成隨機自然的斷裂碎片面。",
      "keywords": [
        {
          "term": "Destructible Actor（可破壞物件）",
          "role": "採用 Voronoi 演算法將模型預先碎塊化，受撞擊傷害時動態崩解散落"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "Voronoi is a mathematical tessellation algorithm that divides a large entity into small parts.",
      "detailedOptions": [
        "True（正確）",
        "False（錯誤）"
      ]
    },
    {
      "id": "h13_q9",
      "chapterId": "h13",
      "qNum": 9,
      "type": "MC",
      "question": "A ____________ contains a collection of properties that affect the behavior of an Actor simulating physics. It can be assigned to a Static Mesh Actor or a Material. Properties include Friction, Restitution, and Density.",
      "questionZh": "____________ 包含了一組影響模擬物理的 Actor 行為的屬性集合。它可以被指派給 Static Mesh Actor 或 Material 材質。其屬性包含 Friction（摩擦力）、Restitution（彈性恢復係數）以及 Density（密度）。",
      "options": [
        "Skeletal Mesh asset",
        "Physical Material asset",
        "Destructible Mesh asset",
        "Physics property"
      ],
      "optionsZh": [
        "Skeletal Mesh asset（骨架網格模型資產）",
        "Physical Material asset（物理材質資產（Physical Material））",
        "Destructible Mesh asset（可破壞模型資產）",
        "Physics property（常規物理碰撞屬性）"
      ],
      "rawAnswer": "Physical Material asset",
      "correctIndex": 1,
      "correctText": "Physical Material asset",
      "explanation": "【UE 4.27 核心考點：Physical Material asset 物理材質】\nPhysical Material 定義表面的物理交互特徵（摩擦、彈跳、密度），並可設定 Surface Type 決定子彈擊中時產生金屬火花或石壁灰塵特效。",
      "keywords": [
        {
          "term": "Static Mesh（靜態網格）",
          "role": "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
        },
        {
          "term": "Material（材質系統）",
          "role": "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
        },
        {
          "term": "Destructible Actor（可破壞物件）",
          "role": "採用 Voronoi 演算法將模型預先碎塊化，受撞擊傷害時動態崩解散落"
        }
      ],
      "hasSegments": true,
      "segments": [
        {
          "partNum": 1,
          "en": "A ____________ contains a collection of properties that affect the behavior of an Actor simulating physics."
        },
        {
          "partNum": 2,
          "en": "It can be assigned to a Static Mesh Actor or a Material."
        },
        {
          "partNum": 3,
          "en": "Properties include Friction, Restitution, and Density."
        }
      ],
      "detailedQuestion": "A ____________ contains a collection of properties that affect the behavior of an <span class=\"term-en\">Actor</span><span class=\"inline-trans\">（場景物件/Actor）</span> simulating physics. It can be assigned to a <span class=\"term-en\">Static Mesh Actor</span><span class=\"inline-trans\">（靜態網格物件）</span> or a <span class=\"term-en\">Material</span><span class=\"inline-trans\">（材質）</span>. Properties include <span class=\"term-en\">Friction</span><span class=\"inline-trans\">（表面摩擦力）</span>, <span class=\"term-en\">Restitution</span><span class=\"inline-trans\">（表面彈性係數）</span>, and Density.",
      "detailedOptions": [
        "Skeletal Mesh asset（骨架網格模型資產）",
        "Physical Material asset（物理材質資產（Physical Material））",
        "Destructible Mesh asset（可破壞模型資產）",
        "Physics property（常規物理碰撞屬性）"
      ]
    },
    {
      "id": "h13_q10",
      "chapterId": "h13",
      "qNum": 10,
      "type": "MC",
      "question": "A ____________ is a solid nondeformable object.",
      "questionZh": "____________ 是一種堅固且在任何碰撞下均不可形變的實體物件。",
      "options": [
        "Cloth",
        "Impulse",
        "Soft body",
        "Rigid body"
      ],
      "optionsZh": [
        "Cloth（布料物理模擬）",
        "Impulse（瞬間衝量（一次性瞬間改變速度的動量脈衝））",
        "Soft body（軟體物理模擬）",
        "Rigid body（剛體物理模擬（不變形的固體力學模擬））"
      ],
      "rawAnswer": "Rigid body",
      "correctIndex": 3,
      "correctText": "Rigid body",
      "explanation": "【UE 4.27 核心考點：Rigid body 剛體定義】\n經典物理學與遊戲物理中的剛體（Rigid Body），受力時內部各點的相對距離保持絕對恆定，不發生幾何形變。",
      "keywords": [
        {
          "term": "Unreal Engine 4.27 核心架構",
          "role": "遵循教材與引擎核心工作流規範"
        }
      ],
      "hasSegments": false,
      "segments": [],
      "detailedQuestion": "A ____________ is a solid nondeformable object.",
      "detailedOptions": [
        "Cloth（布料物理模擬）",
        "Impulse（瞬間衝量（一次性瞬間改變速度的動量脈衝））",
        "Soft body（軟體物理模擬）",
        "Rigid body（剛體物理模擬（不變形的固體力學模擬））"
      ]
    }
  ]
};
