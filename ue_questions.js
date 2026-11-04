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
      "questionZh": "關卡中的 ____________ 面板會顯示當前所選取 Actor（物件）的可編輯屬性。",
      "options": [
        "Modes",
        "Details",
        "Content Browser",
        "World Outliner"
      ],
      "optionsZh": [
        "Modes（模式面板）",
        "Details（細節面板）",
        "Content Browser（內容瀏覽器）",
        "World Outliner（世界大綱）"
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
      "detailedQuestion": "The Level ____________ panel displays the editable properties<span class=\"inline-trans\">（可編輯屬性/各項參數）</span> for a selected Actor<span class=\"inline-trans\">（所選取的場景物件/演員）</span>.",
      "detailedOptions": [
        "Modes（模式面板）",
        "Details（細節面板）",
        "Content Browser（內容瀏覽器）",
        "World Outliner（世界大綱）"
      ]
    },
    {
      "id": "h01_q2",
      "chapterId": "h01",
      "qNum": 2,
      "type": "TF",
      "question": "From the Project Browser’s New Project tab you can create Blueprint- or C++-based projects.",
      "questionZh": "在專案瀏覽器的「New Project（新建專案）」分頁中，你可以建立以藍圖（Blueprint）或以 C++ 為基礎的專案。",
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
      "detailedQuestion": "The default developer-provided template<span class=\"inline-trans\">（專案範本）</span> for a top-down game includes a character<span class=\"inline-trans\">（角色）</span> that is controlled by a ____________.",
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
        "Project Browser（專案瀏覽器）",
        "Modes panel（模式面板）",
        "Static Mesh Editor（靜態網格編輯器）",
        "Epic Games Launcher（Epic Games 啟動器）"
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
      "detailedQuestion": "The ____________ is an interactive list of all the Actors<span class=\"inline-trans\">（所有場景物件的階層樹狀清單）</span> in your level.",
      "detailedOptions": [
        "Project Browser（專案瀏覽器）",
        "Modes panel（模式面板）",
        "Static Mesh Editor（靜態網格編輯器）",
        "Epic Games Launcher（Epic Games 啟動器）"
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
      "detailedQuestion": "True or False: The Modes panel<span class=\"inline-trans\">（Modes 放置模式面板）</span> displays a set of tool modes for the Level Editor<span class=\"inline-trans\">（關卡編輯器工具模式）</span>.",
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
      "questionZh": "____________ 場景檢視模式（View Mode）會在關卡中所有 Actor 上顯示中性灰色調，並同時呈現各 Actor 指派材質中的法線貼圖（Normal Map）效果。",
      "options": [
        "Lit",
        "Wireframe",
        "Detail Lighting",
        "Lighting Only"
      ],
      "optionsZh": [
        "Lit（帶光照）",
        "Wireframe（線框模式）",
        "Detail Lighting（細節光照）",
        "Lighting Only（僅光照）"
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
      "detailedQuestion": "The ____________ view mode<span class=\"inline-trans\">（場景檢視模式）</span> displays a neutral gray across all the Actors<span class=\"inline-trans\">（所有場景物件）</span> in the level, while showing off the effects of normal maps<span class=\"inline-trans\">（法線貼圖：表面凹凸光影）</span> in their assigned materials<span class=\"inline-trans\">（指定材質）</span>.",
      "detailedOptions": [
        "Lit（帶光照）",
        "Wireframe（線框模式）",
        "Detail Lighting（細節光照）",
        "Lighting Only（僅光照）"
      ]
    },
    {
      "id": "h01_q6",
      "chapterId": "h01",
      "qNum": 6,
      "type": "TF",
      "question": "If you want to temporarily display the collision hulls of all the Actors in your Level, you need to toggle off the Static Mesh show flag.",
      "questionZh": "如果你想要在關卡工作視窗（Level Viewport）中暫時顯示所有 Actor 的碰撞體（Collision Hulls），你需要將 Static Mesh 的顯示標記關閉（Toggle off）。",
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
      "detailedQuestion": "True or False: If you want to temporarily view collision hulls<span class=\"inline-trans\">（碰撞體外框/碰撞範圍）</span> for all Actors in the Level Viewport<span class=\"inline-trans\">（關卡工作視窗/3D場景編輯區）</span>, you need to toggle off the Static Mesh show flag<span class=\"inline-trans\">（關閉靜態網格顯示旗標）</span>.",
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
      "detailedQuestion": "You can use the ____________ to quickly add things such as volumes, lights, and mesh shapes to your level.",
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
        "Game Mode（遊戲模式樣板）",
        "Graphic Settings（圖形設定）",
        "Landscape（地貌）",
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
      "detailedQuestion": "True or False: When opening an existing level, it will always be opened into a separate instance<span class=\"inline-trans\">（獨立實例/分開獨立的編輯視窗）</span> of the Unreal Editor.",
      "detailedOptions": [
        "Game Mode（遊戲模式樣板）",
        "Graphic Settings（圖形設定）",
        "Landscape（地貌）",
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
        "Paint（繪製）",
        "Lit（光照）",
        "Orthographic（正交視圖）",
        "Templates（樣板）"
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
      "detailedQuestion": "In the Level Viewport<span class=\"inline-trans\">（關卡工作視窗/3D場景編輯區）</span>, you can switch between Perspective<span class=\"inline-trans\">（透視 3D 視角）</span> and ____________ display modes<span class=\"inline-trans\">（顯示視角模式）</span>.",
      "detailedOptions": [
        "Paint（繪製）",
        "Lit（光照）",
        "Orthographic（正交視圖）",
        "Templates（樣板）"
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
        "Perspective（透視）",
        "View modes（檢視模式）",
        "Level Details panel（關卡細節面板）",
        "Foliage（植被）"
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
      "detailedQuestion": "____________ are viewport display settings<span class=\"inline-trans\">（工作視窗顯示旗標設定）</span> that allow you to toggle the rendering<span class=\"inline-trans\">（即時渲染呈現）</span> of individual elements or features.",
      "detailedOptions": [
        "Perspective（透視）",
        "View modes（檢視模式）",
        "Level Details panel（關卡細節面板）",
        "Foliage（植被）"
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
        ".uasset（資產二進位檔）",
        ".umap（關卡地圖檔）",
        ".ini（組態配置設定檔）",
        ".uproject（專案描述檔）"
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
      "detailedQuestion": "True or False: A project’s Saved directory<span class=\"inline-trans\">（Saved 暫存快取、截圖與日誌目錄）</span> should be included with version control software<span class=\"inline-trans\">（版本控制軟體，如 Git/SVN）</span>.",
      "detailedOptions": [
        ".uasset（.uasset（資產二進位檔）",
        ".umap（.umap（關卡地圖檔）",
        ".ini（.ini（組態配置設定檔）",
        ".uproject（.uproject（專案描述檔）"
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
      "detailedQuestion": "Blueprints<span class=\"inline-trans\">（藍圖可視化腳本）</span> are a visual scripting language<span class=\"inline-trans\">（可視化圖形腳本語言）</span> that is built on top of ____________.",
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
        "Saved（已儲存資料夾）",
        "Content（內容資產資料夾）",
        "Intermediate（中介暫存資料夾）",
        "Raw Files（原始檔案資料夾）"
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
      "detailedQuestion": "The ____________ class determines which Pawn<span class=\"inline-trans\">（受控實體）</span>, Player Controller<span class=\"inline-trans\">（玩家控制器）</span>, and HUD class<span class=\"inline-trans\">（介面資訊顯示）</span> are used in a level.",
      "detailedOptions": [
        "Saved（已儲存資料夾）",
        "Content（內容資產資料夾）",
        "Intermediate（中介暫存資料夾）",
        "Raw Files（原始檔案資料夾）"
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
      "detailedQuestion": "True or False: An asset<span class=\"inline-trans\">（專案資源/素材檔案）</span> that is deleted from the Content Browser<span class=\"inline-trans\">（內容瀏覽器）</span> is permanently deleted from the disk<span class=\"inline-trans\">（從硬碟磁碟機徹底刪除）</span>.",
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
      "questionZh": "______________ 檢視器（Viewer）用來顯示資產之間的依賴引用關係樹。",
      "options": [
        "Viewport",
        "Reference",
        "Migration",
        "Import"
      ],
      "optionsZh": [
        "Viewport（關卡工作視窗）",
        "Reference（引用檢視器 Reference Viewer）",
        "Migration（遷移）",
        "Import（匯入）"
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
      "detailedQuestion": "Which directory holds your project's .ini configuration files<span class=\"inline-trans\">（專案組態設定檔）</span>?",
      "detailedOptions": [
        "Viewport（關卡工作視窗）",
        "Reference（引用檢視器 Reference Viewer）",
        "Migration（遷移）",
        "Import（匯入）"
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
      "detailedQuestion": "True or False: A Character<span class=\"inline-trans\">（Character 角色類別）</span> is a specialized type of Pawn<span class=\"inline-trans\">（進階版 Pawn 實體）</span> that includes built-in movement capabilities<span class=\"inline-trans\">（自帶行走、跳躍與跑步等移動邏輯組件）</span>.",
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
      "questionZh": "____________ 是一組 C++ 或藍圖類別的集合，在 UE4 專案中負責管理遊戲規則、處理玩家輸入，並定義化身角色、相機與玩家 HUD 介面。",
      "options": [
        "Gameplay Framework",
        "Content Browser",
        "Controller class",
        "Pawn class"
      ],
      "optionsZh": [
        "Gameplay Framework（遊戲玩法框架）",
        "Content Browser（內容瀏覽器）",
        "Controller class（控制器類別）",
        "Pawn class（Pawn 類別）"
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
      "detailedQuestion": "The ____________ file is the primary file used to launch and configure an Unreal project<span class=\"inline-trans\">（啟動與設定虛幻引擎專案的主描述檔）</span>.",
      "detailedOptions": [
        "Gameplay Framework（遊戲玩法框架）",
        "Content Browser（內容瀏覽器）",
        "Controller class（控制器類別）",
        "Pawn class（Pawn 類別）"
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
      "detailedQuestion": "Which of the following is NOT a default directory created with a standard Unreal project?",
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
      "questionZh": "____________ 是遊戲的整體定義，包含遊戲規則與勝負判定條件。它「只存在於伺服器端」，通常不應存放遊戲過程中頻繁變動的資料，且絕對不應存放客戶端關卡所需的瞬態資料。",
      "options": [
        "Controller class",
        "HUD class",
        "Game Instance class",
        "Game Mode class"
      ],
      "optionsZh": [
        "Controller class（控制器類別）",
        "HUD class（抬頭顯示器類別）",
        "Game Instance class（遊戲實例類別）",
        "Game Mode class（遊戲模式類別）"
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
      "detailedQuestion": "True or False: Blueprints<span class=\"inline-trans\">（藍圖腳本）</span> must be compiled<span class=\"inline-trans\">（編譯檢驗）</span> before changes will take effect in the editor<span class=\"inline-trans\">（在編輯器中生效）</span>.",
      "detailedOptions": [
        "Controller class（控制器類別）",
        "HUD class（抬頭顯示器類別）",
        "Game Instance class（遊戲實例類別）",
        "Game Mode class（遊戲模式類別）"
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
        "Game Mode（遊戲模式）",
        "Player Controller（玩家控制器）",
        "Game State（遊戲狀態）",
        "Player State（玩家狀態）"
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
      "detailedQuestion": "The ____________ receives raw input<span class=\"inline-trans\">（接收原始滑鼠與鍵盤操作輸入）</span> from the player and translates it into actions for the possessed Pawn<span class=\"inline-trans\">（轉化為被附身控制之實體的動作）</span>.",
      "detailedOptions": [
        "Game Mode（遊戲模式）",
        "Player Controller（玩家控制器）",
        "Game State（遊戲狀態）",
        "Player State（玩家狀態）"
      ]
    },
    {
      "id": "h03_q1",
      "chapterId": "h03",
      "qNum": 1,
      "type": "MC",
      "question": "____________ is a method for indicating the positions of points on a two-dimensional (2D) surface or in three-dimensional (3D) space. A 3D plane uses x, y, and z coordinates. Each letter corresponds to an axis, where z is up and down, y is left to right, and x is front to back.",
      "questionZh": "____________ 是一種用於在 2D 平面或 3D 空間中標記點位置的方法。3D 平面使用 x、y 與 z 坐標。每個字母對應一個坐標軸：z 代表上下、y 代表左右、x 代表前後。",
      "options": [
        "Cartesian coordinate system",
        "Boolean operation",
        "Axis",
        "Pivot point"
      ],
      "optionsZh": [
        "Cartesian coordinate system（笛卡兒坐標系）",
        "Boolean operation（布林運算）",
        "Axis（軸）",
        "Pivot point（軸心點）"
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
      "detailedQuestion": "Unreal Engine 4 uses a ____________ coordinate system<span class=\"inline-trans\">（坐標軸系統：X 向前、Y 向右、Z 向上）</span>.",
      "detailedOptions": [
        "Cartesian coordinate system（笛卡兒坐標系）",
        "Boolean operation（布林運算）",
        "Axis（軸）",
        "Pivot point（軸心點）"
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
      "detailedQuestion": "The default unit of measurement<span class=\"inline-trans\">（長度空間基本度量單位）</span> in Unreal Engine 4 is the ____________.",
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
        "Cartesian coordinate system",
        "Pivot point（軸心點）",
        "Vertices（頂點）",
        "Transform（變換）"
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
      "detailedQuestion": "Which transform gizmo<span class=\"inline-trans\">（3D變換軸向小工具）</span> corresponds to changing an Actor's position in 3D space?",
      "detailedOptions": [
        "Cartesian coordinate system（Cartesian coordinate system）",
        "Pivot point（軸心點）",
        "Vertices（頂點）",
        "Transform（變換）"
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
      "detailedQuestion": "True or False: In World Space<span class=\"inline-trans\">（世界空間絕對坐標）</span>, the axes (X, Y, Z) are fixed relative to the entire level<span class=\"inline-trans\">（固定不變，永遠以地圖世界原點為基準）</span>.",
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
        "Grouping（群組化）",
        "Snapping（吸附）",
        "Attaching（附加 / 附著）",
        "Combining（結合）"
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
      "detailedQuestion": "Which hotkey cycles through the translation<span class=\"inline-trans\">（位移 W）</span>, rotation<span class=\"inline-trans\">（旋轉 E）</span>, and scaling<span class=\"inline-trans\">（縮放 R）</span> gizmos in the viewport?",
      "detailedOptions": [
        "Combining（群組化）",
        "Layering（吸附）",
        "Grouping（附加 / 附著）",
        "Attaching（結合）"
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
      "detailedQuestion": "True or False: An Actor placed inside a folder in the World Outliner<span class=\"inline-trans\">（世界大綱資料夾）</span> will inherit the transform<span class=\"inline-trans\">（位置/旋轉/縮放之變換屬性）</span> of that folder.",
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
        "World Outliner（世界大綱）",
        "Content Browser（內容瀏覽器）",
        "Modes panel（模式面板）",
        "Details panel（細節面板）"
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
      "detailedQuestion": "The ____________ feature allows you to snap Actors<span class=\"inline-trans\">（依自訂網格間距或角度吸附對齊物件）</span> to specific grid increments during translation.",
      "detailedOptions": [
        "World Outliner（世界大綱）",
        "Details panel（內容瀏覽器）",
        "Content Browser（模式面板）",
        "Modes panel（細節面板）"
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
      "detailedQuestion": "In the Details panel<span class=\"inline-trans\">（細節屬性面板）</span>, the Transform properties<span class=\"inline-trans\">（變換數值）</span> are displayed in the order of ____________.",
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
        "Tag（標籤）",
        "Layer（圖層）",
        "Socket（插槽）",
        "Folder（資料夾）"
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
      "detailedQuestion": "True or False: Grouping multiple Actors<span class=\"inline-trans\">（將多個物件建立群組，快速鍵 Ctrl + G）</span> allows you to move and rotate them as a single collective unit.",
      "detailedOptions": [
        "Parent（標籤）",
        "Layer（圖層）",
        "“Static” Mobility setting（插槽）",
        "Teapot（資料夾）"
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
        "World Outliner panel（世界大綱面板）",
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
      "detailedQuestion": "Which keyboard shortcut resets an Actor’s translation, rotation, and scale back to origin/default?",
      "detailedOptions": [
        "Modes panel（模式面板）",
        "World Outliner panel（世界大綱面板）",
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
        "Material Editor",
        "Static Mesh Editor（靜態網格編輯器）",
        "Persona",
        "Cascade"
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
      "detailedQuestion": "Which tool inside the Static Mesh Editor<span class=\"inline-trans\">（靜態網格 3D 模型編輯器）</span> allows you to inspect and modify collision geometry<span class=\"inline-trans\">（碰撞體幾何結構）</span>?",
      "detailedOptions": [
        "Destructible Editor（Material Editor）",
        "Blueprint Editor（靜態網格編輯器）",
        "Material Editor（Persona）",
        "Static Mesh Editor（Cascade）"
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
      "detailedQuestion": "True or False: When a Static Mesh asset<span class=\"inline-trans\">（靜態網格模型素材）</span> is dragged from the Content Browser into a level, it becomes an instance known as a Static Mesh Actor<span class=\"inline-trans\">（實例化靜態網格物件）</span>.",
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
      "detailedQuestion": "What does LOD stand for in 3D game asset optimization<span class=\"inline-trans\">（3D 遊戲資源最佳化技術）</span>?",
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
      "questionZh": "預設情況下，靜態網格 Actor 的移動性（Mobility）是 ____________。",
      "options": [
        "Hidden",
        "Static",
        "Movable",
        "Transform"
      ],
      "optionsZh": [
        "Static（靜態）",
        "Movable（可移動）",
        "Stationary（固定）",
        "Dynamic（動態）"
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
      "detailedQuestion": "A ____________ is an attachment point<span class=\"inline-trans\">（骨架或網格上的掛接點/裝備插槽）</span> added to a mesh that allows other Actors or effects to be attached dynamically.",
      "detailedOptions": [
        "Hidden（靜態）",
        "Static（可移動）",
        "Movable（固定）",
        "Transform（動態）"
      ]
    },
    {
      "id": "h04_q5",
      "chapterId": "h04",
      "qNum": 5,
      "type": "MC",
      "question": "The three collision response types are ____________.",
      "questionZh": "三種碰撞回應（Collision responses）類型分別是 Ignore（忽略）、Overlap（重疊）以及 ____________。",
      "options": [
        "Bounce, Hit, and Intersection",
        "Ignore, Overlap, and Block",
        "Ignore, Intersection, and Touch",
        "Block, Touch, and, Overlap"
      ],
      "optionsZh": [
        "Block（阻擋）",
        "Collide",
        "Pass",
        "Trigger"
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
      "detailedQuestion": "True or False: Complex Collision<span class=\"inline-trans\">（複雜網格精確碰撞體）</span> uses simple geometric primitives<span class=\"inline-trans\">（簡易基本幾何體如球體與方塊）</span> such as spheres and boxes to represent collision.",
      "detailedOptions": [
        "Bounce, Hit, and Intersection（阻擋）",
        "Ignore, Overlap, and Block（Collide）",
        "Ignore, Intersection, and Touch（Pass）",
        "Block, Touch, and, Overlap（Trigger）"
      ]
    },
    {
      "id": "h04_q6",
      "chapterId": "h04",
      "qNum": 6,
      "type": "TF",
      "question": "By default, lightmap UV channels are stored in UV Channel 2.",
      "questionZh": "在關卡中選取的 Static Mesh Actor 上變更材質，會直接改變 Content Browser 裡原始靜態網格資產所指派的預設材質。",
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
      "detailedQuestion": "Which collision complexity setting calculates collision against the exact triangles of the visual mesh<span class=\"inline-trans\">（使用 3D 模型的真實精確三角面進行物理碰撞計算）</span>?",
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
      "questionZh": "要從內容瀏覽器匯入資產，可以在來源面板的空白區域中按一下滑鼠右鍵，或按一下 ____________ 按鈕。",
      "options": [
        ".pdf and .fbx",
        ".fbx and .obj",
        ".obj and .3ds",
        ".stl and .obj"
      ],
      "optionsZh": [
        "Import（匯入）",
        "Migrate（遷移）",
        "Save（儲存）",
        "Build（建置）"
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
      "detailedQuestion": "The maximum number of UV channels<span class=\"inline-trans\">（UV 紋理貼圖坐標通道）</span> typically supported by a Static Mesh in UE4 is ____________.",
      "detailedOptions": [
        ".pdf and .fbx（匯入）",
        ".fbx and .obj（遷移）",
        ".obj and .3ds（儲存）",
        ".stl and .obj（建置）"
      ]
    },
    {
      "id": "h04_q8",
      "chapterId": "h04",
      "qNum": 8,
      "type": "TF",
      "question": "It is possible to change the Static Mesh asset that a Static Mesh Actor references.",
      "questionZh": "一個複雜的模型在遠距離時需要極高解析度的碰撞外框（Collision hull）。",
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
      "detailedQuestion": "True or False: Static Meshes cannot be assigned different materials<span class=\"inline-trans\">（指定不同材質）</span> on separate material slots<span class=\"inline-trans\">（材質槽）</span>.",
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
      "questionZh": "靜態網格編輯器中的 ____________ 工具可用於在網格上建立附加連接點，以便將其他 Actor 物件附著到指定位置。",
      "options": [
        "True",
        "False"
      ],
      "optionsZh": [
        "True",
        "False"
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
      "detailedQuestion": "Which volume type<span class=\"inline-trans\">（體積類型）</span> is used to completely block player or physics movement in a level?",
      "detailedOptions": [
        "True（True）",
        "False（False）"
      ]
    },
    {
      "id": "h04_q10",
      "chapterId": "h04",
      "qNum": 10,
      "type": "MC",
      "question": "You press ____________ to toggle collision hull visibility on and off in the Level Editor Viewport.",
      "questionZh": "切換碰撞顯示標記（Collision show flag）的快速鍵是 ____________。",
      "options": [
        "Atl+C",
        "Atl+H",
        "Ctrl+Alt+C",
        "Shift+H"
      ],
      "optionsZh": [
        "Ctrl+C",
        "Shift+C",
        "Atl+C（Alt+C）",
        "Alt+Shift+C"
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
      "detailedQuestion": "Which keyboard shortcut toggles collision visualization<span class=\"inline-trans\">（開啟/關閉工作視窗中所有物件的碰撞體顯示）</span> in the Level Viewport?",
      "detailedOptions": [
        "Atl+C（+C）",
        "Atl+H（+C）",
        "Ctrl+Alt+C（+C（Alt+C）",
        "Shift+H（+Shift+C）"
      ]
    },
    {
      "id": "h05_q1",
      "chapterId": "h05",
      "qNum": 1,
      "type": "MC",
      "question": "____________ is UE4’s offline global illumination rendering engine and is used to calculating lighting for Light and Static Mesh Actors with a Mobility setting of “Static”.",
      "questionZh": "____________ 負責計算預先烘焙的靜態光照與陰影交互作用。",
      "options": [
        "Lightmass",
        "Renderman",
        "Mental Ray",
        "Raytrace"
      ],
      "optionsZh": [
        "Lightmass",
        "Lumen",
        "Ray Tracing",
        "Swarm Coordinator"
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
      "detailedQuestion": "Which light type simulates distant, parallel light rays<span class=\"inline-trans\">（遠距離平行光束，如太陽光或月光）</span> across an entire level?",
      "detailedOptions": [
        "Lightmass（Lightmass）",
        "Renderman（Lumen）",
        "Mental Ray（Ray Tracing）",
        "Raytrace（Swarm Coordinator）"
      ]
    },
    {
      "id": "h05_q2",
      "chapterId": "h05",
      "qNum": 2,
      "type": "TF",
      "question": "Sky Light Actors do not cast dynamic shadows.",
      "questionZh": "定向光源（Directional Light）用於模擬距離無限遠的光源，例如太陽或月亮。",
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
      "detailedQuestion": "True or False: Static lights<span class=\"inline-trans\">（靜態光源）</span> have zero runtime performance cost<span class=\"inline-trans\">（在遊戲執行時完全零效能消耗，因為光影已完全烘焙至光照貼圖）</span> because all light and shadow calculations are precomputed by Lightmass.",
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
      "questionZh": "____________ 類似於無燈罩的裸燈泡，從單一點向所有方向均勻發射光線。",
      "options": [
        "Directional Light",
        "Sky Light",
        "Point Light",
        "Spot Light"
      ],
      "optionsZh": [
        "Spot Light",
        "Point Light（點光源）",
        "Directional Light",
        "Sky Light"
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
      "detailedQuestion": "A light that combines precalculated baked shadows with dynamic real-time direct illumination<span class=\"inline-trans\">（預計算烘焙陰影與動態即時直射光照相結合）</span> is a ____________ light.",
      "detailedOptions": [
        "Directional Light（Spot Light）",
        "Sky Light（點光源）",
        "Point Light（Directional Light）",
        "Spot Light（Sky Light）"
      ]
    },
    {
      "id": "h05_q4",
      "chapterId": "h05",
      "qNum": 4,
      "type": "TF",
      "question": "Light attenuation is a drop in light intensity over distance.",
      "questionZh": "聚光燈（Spot Light）向圓錐體形狀投射光線，並具有內圓錐角（Inner Cone Angle）與外圓錐角（Outer Cone Angle）屬性。",
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
      "detailedQuestion": "Which lighting actor captures the distant environment and sky<span class=\"inline-trans\">（擷取遠景大氣與天空光影）</span> to provide ambient fill lighting<span class=\"inline-trans\">（環境漫射全域補光）</span> for the scene?",
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
      "questionZh": "____________ 光源的位置在遊戲中不可移動，但其亮度與顏色可以在遊戲進行期間透過腳本動態改變。",
      "options": [
        "Dynamic",
        "Static",
        "Movable",
        "Stationary"
      ],
      "optionsZh": [
        "Static",
        "Stationary（固定光源）",
        "Movable",
        "Volumetric"
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
      "detailedQuestion": "True or False: Movable lights<span class=\"inline-trans\">（可移動完全動態光源）</span> support full real-time shadows<span class=\"inline-trans\">（支援全即時動態陰影）</span>, but require significant GPU/CPU performance overhead.",
      "detailedOptions": [
        "Dynamic（Static）",
        "Static（固定光源）",
        "Movable（Movable）",
        "Stationary（Volumetric）"
      ]
    },
    {
      "id": "h05_q6",
      "chapterId": "h05",
      "qNum": 6,
      "type": "TF",
      "question": "When you build lighting, Blueprints are compiled.",
      "questionZh": "靜態光源（Static lights）會在遊戲運行時產生動態即時陰影。",
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
      "detailedQuestion": "To optimize Lightmass baking times<span class=\"inline-trans\">（大幅縮減靜態光照烘焙運算時間）</span>, you should place a ____________ around the playable areas of your level.",
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
      "questionZh": "當在 UE4 中建置光照時，背景負責處理並管理光照計算任務的外部應用程式是 ____________。",
      "options": [
        "Epic Games Launcher",
        "Radiosity",
        "Scanline",
        "Swarm Agent"
      ],
      "optionsZh": [
        "Lightmass",
        "Swarm Agent",
        "UnrealBuildTool",
        "ShaderCompileWorker"
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
      "detailedQuestion": "The Mobility setting<span class=\"inline-trans\">（移動性設定）</span> of a light actor can be found in the ____________ panel.",
      "detailedOptions": [
        "Epic Games Launcher（Lightmass）",
        "Radiosity（Swarm Agent）",
        "Scanline（UnrealBuildTool）",
        "Swarm Agent（ShaderCompileWorker）"
      ]
    },
    {
      "id": "h05_q8",
      "chapterId": "h05",
      "qNum": 8,
      "type": "TF",
      "question": "It is possible to change the Lightmap resolution on a per-Actor basis.",
      "questionZh": "天空光（Sky Light）捕捉關卡中遠處的天空與環境背景，並將其作為環境光照套用到場景物件上。",
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
      "detailedQuestion": "Which light type emits light in a cone shape<span class=\"inline-trans\">（圓錐形範圍定向照射，如手電筒或探照燈）</span> from a single point?",
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
      "questionZh": "在電腦圖形學中，將 3D 場景經過幾何運算與著色器計算生成 2D 畫面的完整過程稱為 ____________。",
      "options": [
        "Rasterization",
        "Rendering",
        "Build",
        "Swarm"
      ],
      "optionsZh": [
        "Modeling",
        "Texturing",
        "Rendering（渲染）",
        "Compiling"
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
      "detailedQuestion": "True or False: Point lights<span class=\"inline-trans\">（點光源）</span> emit light outward in all 360-degree directions<span class=\"inline-trans\">（從中心點向四周 360 度無死角均勻發散）</span> from a central point.",
      "detailedOptions": [
        "Rasterization（Modeling）",
        "Rendering（Texturing）",
        "Build（渲染）",
        "Swarm（Compiling）"
      ]
    },
    {
      "id": "h05_q10",
      "chapterId": "h05",
      "qNum": 10,
      "type": "MC",
      "question": "The ____________ light property overrides light color properties and uses real-world values in kelvins to define the color of a light. For example, a 100W incandescent lightbulb has a temperature of 2,800K.",
      "questionZh": "你可以透過開啟光源的 Use Temperature 屬性，並以開爾文（Kelvin）為單位調整 ____________ 數值來定義光源顏色。",
      "options": [
        "IES",
        "Temperature",
        "Intensity",
        "Attenuation"
      ],
      "optionsZh": [
        "Intensity",
        "Temperature（色溫）",
        "Attenuation",
        "Indirect Lighting"
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
      "detailedQuestion": "The process of precomputing static lights and shadows into texture maps is known as ____________.",
      "detailedOptions": [
        "IES（Intensity）",
        "Temperature（色溫）",
        "Intensity（Attenuation）",
        "Attenuation（Indirect Lighting）"
      ]
    },
    {
      "id": "h06_q1",
      "chapterId": "h06",
      "qNum": 1,
      "type": "MC",
      "question": "The ____________ Editor is a node-based system that uses expressions and functions to create a desired surface.",
      "questionZh": "套用於 3D 網格模型以決定其表面外觀、顏色、光澤度與質感的資產稱為 ____________。",
      "options": [
        "Lightmass",
        "Texture",
        "Shader",
        "Material"
      ],
      "optionsZh": [
        "Material（材質）",
        "Texture（貼圖）",
        "Static Mesh",
        "Shader"
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
      "detailedQuestion": "In UE4's physically based rendering (PBR)<span class=\"inline-trans\">（PBR 基於物理規律的真實著色模型）</span> pipeline, which material input defines the diffuse reflection color<span class=\"inline-trans\">（無光照下的漫反射純色/固有顏色）</span>?",
      "detailedOptions": [
        "Lightmass（材質）",
        "Texture（貼圖）",
        "Shader（Static Mesh）",
        "Material（Shader）"
      ]
    },
    {
      "id": "h06_q2",
      "chapterId": "h06",
      "qNum": 2,
      "type": "TF",
      "question": "To open the Material Editor, you need to create a new Material asset or double-click on an existing Material in the Content Browser.",
      "questionZh": "材質實例（Material Instances）允許你在不重新編譯著色器的情況下，即時修改父材質公開的參數。",
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
      "detailedQuestion": "True or False: A Roughness value of 0.0<span class=\"inline-trans\">（粗糙度設為 0.0）</span> produces an extremely dull, matte surface<span class=\"inline-trans\">（完全霧面粗糙的表面）</span>.",
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
      "questionZh": "UE4 採用 PBR 著色體系，PBR 是 ____________ 的縮寫。",
      "options": [
        "Physical-based rasterization",
        "Physical baking and rendering",
        "Physically based rendering",
        "Photon-based rendering"
      ],
      "optionsZh": [
        "Pixel-based rendering",
        "Physically based rendering（基於物理的渲染）",
        "Polygon-based rendering",
        "Point-based radiance"
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
      "detailedQuestion": "Which material input controls whether a surface behaves like a dielectric (insulator)<span class=\"inline-trans\">（非金屬/絕緣體，如塑膠、木材、石頭）</span> or a conductor (metal)<span class=\"inline-trans\">（導電純金屬）</span>?",
      "detailedOptions": [
        "Physical-based rasterization（-based rendering）",
        "Physical baking and rendering（基於物理的渲染）",
        "Physically based rendering（-based rendering）",
        "Photon-based rendering（-based radiance）"
      ]
    },
    {
      "id": "h06_q4",
      "chapterId": "h06",
      "qNum": 4,
      "type": "TF",
      "question": "If a Material is not metallic, then you will need to use the Specular input.",
      "questionZh": "粗糙度（Roughness）數值為 0.0 代表完全光滑無瑕的鏡面反射，而 1.0 則代表完全粗糙無高光的漫反射表面。",
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
      "detailedQuestion": "A ____________ map simulates fine surface details and scratches<span class=\"inline-trans\">（模擬微細表面刮痕與凹凸起伏）</span> without adding extra polygon geometry<span class=\"inline-trans\">（無需增加多餘模型面數）</span>.",
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
      "questionZh": "PBR 材質中物體的純粹固有顏色（不帶任何烘焙陰影光照資訊）通常被稱為 Base Color 或 ____________。",
      "options": [
        "Emissive",
        "Roughness",
        "Specular",
        "Albedo"
      ],
      "optionsZh": [
        "Albedo（反照率）",
        "Specular",
        "Emissive",
        "Displacement"
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
      "detailedQuestion": "Which material expression node<span class=\"inline-trans\">（材質表達式節點）</span> performs linear interpolation (Lerp)<span class=\"inline-trans\">（線性插值混合運算）</span> between two input values based on an alpha mask?",
      "detailedOptions": [
        "Emissive（反照率）",
        "Roughness（Specular）",
        "Specular（Emissive）",
        "Albedo（Displacement）"
      ]
    },
    {
      "id": "h06_q6",
      "chapterId": "h06",
      "qNum": 6,
      "type": "TF",
      "question": "Mipmaps are automatically generated for imported texture files that are not powers of 2.",
      "questionZh": "在現實世界中，大多數非金屬物體的金屬度（Metallic）數值通常約為 0.5 左右。",
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
      "detailedQuestion": "True or False: Holding down the '1' key and clicking in the Material Editor graph creates a Constant (single scalar value)<span class=\"inline-trans\">（建立單數純量常數節點）</span>.",
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
      "questionZh": "外部影像貼圖（如 PNG、TGA）可透過直接拖放至 Content Browser 快速匯入 UE4。",
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
      "detailedQuestion": "Holding down the '3' key and clicking in the Material Editor graph creates a ____________ expression, commonly used for RGB color inputs.",
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
      "questionZh": "在材質編輯器中，用來表示 RGB 三通道色彩數值的表達式節點是 ____________。",
      "options": [
        "Constant 3 Vector",
        "Sine",
        "Time",
        "Texture Coordinate"
      ],
      "optionsZh": [
        "Constant",
        "Constant 2 Vector",
        "Constant 3 Vector（3維常數向量）",
        "Scalar Parameter"
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
      "detailedQuestion": "Which material input allows a material to emit visible glow or light<span class=\"inline-trans\">（使材質表面產生自發光或霓虹燈輝光效果）</span> without needing an actual light actor?",
      "detailedOptions": [
        "Constant 3 Vector（Constant）",
        "Sine（Constant 2 Vector）",
        "Time（3維常數向量）",
        "Texture Coordinate（Scalar Parameter）"
      ]
    },
    {
      "id": "h06_q9",
      "chapterId": "h06",
      "qNum": 9,
      "type": "MC",
      "question": "The ____________ input uses RGB values to control the direction in which light should react with a surface and create the illusion of directional variation on a surface.",
      "questionZh": "____________ 貼圖透過改變光線照射在物體表面的法線方向，能在不增加任何幾何多邊形面的情況下產生逼真的凹凸與刻痕細節。",
      "options": [
        "Metallic",
        "Texture",
        "Specular",
        "Normal"
      ],
      "optionsZh": [
        "Specular",
        "Metallic",
        "Normal（法線貼圖）",
        "Opacity"
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
      "detailedQuestion": "True or False: Material Instances<span class=\"inline-trans\">（材質實例）</span> allow you to rapidly tweak exposed parameters<span class=\"inline-trans\">（即時微調公開參數）</span> without triggering a slow shader recompilation<span class=\"inline-trans\">（無需等待耗時的著色器重新編譯）</span>.",
      "detailedOptions": [
        "Metallic（Specular）",
        "Texture（Metallic）",
        "Specular（法線貼圖）",
        "Normal（Opacity）"
      ]
    },
    {
      "id": "h06_q10",
      "chapterId": "h06",
      "qNum": 10,
      "type": "MC",
      "question": "____________ are the building blocks used to create Materials. They are self-contained nodes with different combinations of inputs and outputs that perform specific operations.",
      "questionZh": "材質圖表中用來構建運算邏輯的各個節點被稱為 ____________。",
      "options": [
        "Mipmaps",
        "Material functions",
        "Material expressions",
        "Powers of 2"
      ],
      "optionsZh": [
        "Functions",
        "Material expressions（材質表達式）",
        "Components",
        "Actors"
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
      "detailedQuestion": "The shortcut key to create a Texture Sample node<span class=\"inline-trans\">（紋理貼圖取樣節點）</span> in the Material Editor is holding ____________ and clicking.",
      "detailedOptions": [
        "Mipmaps（Functions）",
        "Material functions（材質表達式）",
        "Material expressions（Components）",
        "Powers of 2（Actors）"
      ]
    },
    {
      "id": "h07_q1",
      "chapterId": "h07",
      "qNum": 1,
      "type": "MC",
      "question": "A ____________ represents an imported audio file and settings related to the playback and storage of that file.",
      "questionZh": "匯入 UE4 中的原始音效檔案（通常為 16-bit、44.1 kHz 的 .wav 檔）會建立為 ____________ 資產。",
      "options": [
        "Ambient Sound Actor",
        "Sound Attenuation asset",
        "Sound Wave asset",
        "Reverb Effect asset"
      ],
      "optionsZh": [
        "Sound Wave asset（音訊波形資產）",
        "Sound Cue asset",
        "Audio Volume",
        "Reverb Effect"
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
      "detailedQuestion": "Unreal Engine 4 natively imports audio files in the ____________ format.",
      "detailedOptions": [
        "Ambient Sound Actor（音訊波形資產）",
        "Sound Attenuation asset（Sound Cue asset）",
        "Sound Wave asset（Audio Volume）",
        "Reverb Effect asset（Reverb Effect）"
      ]
    },
    {
      "id": "h07_q2",
      "chapterId": "h07",
      "qNum": 2,
      "type": "TF",
      "question": "The term bit rate refers to the amount of data that is processed or transferred over a specified amount of time. Bit rate also has an impact on quality: the higher the bit rate, the better the quality.",
      "questionZh": "Sound Cue 使用節點式圖表編輯器來設計複雜且具動態隨機變化的音訊播放邏輯。",
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
      "detailedQuestion": "True or False: A Sound Cue<span class=\"inline-trans\">（Sound Cue 音效節點圖）</span> is a node-based audio asset<span class=\"inline-trans\">（節點式音效複合資產）</span> that allows you to combine, randomize, and modulate raw audio tracks.",
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
      "questionZh": "____________ 資產定義了聲音在 3D 空間中隨著聆聽者與發聲源之間距離增加而衰減的規律。",
      "options": [
        "Modulation Effect asset",
        "Reverb Effect asset",
        "Audio Volume",
        "Sound Attenuation asset"
      ],
      "optionsZh": [
        "Reverb Effect asset",
        "Sound Attenuation asset（聲音衰減資產）",
        "Sound Class asset",
        "Audio Volume Actor"
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
      "detailedQuestion": "Which node inside a Sound Cue is used to randomly alter pitch and volume<span class=\"inline-trans\">（隨機微調音量與音高）</span> to prevent repetitive ear fatigue?",
      "detailedOptions": [
        "Modulation Effect asset（Reverb Effect asset）",
        "Reverb Effect asset（聲音衰減資產）",
        "Audio Volume（Sound Class asset）",
        "Sound Attenuation asset（Audio Volume Actor）"
      ]
    },
    {
      "id": "h07_q4",
      "chapterId": "h07",
      "qNum": 4,
      "type": "TF",
      "question": "A Reverb Effect asset adds motion and depth to sound. The Modulation settings allow you to control the minimum and maximum modulation for both pitch and volume as well as set a high-frequency gain multiplier.",
      "questionZh": "MP3 與 OGG 格式的音訊檔案可以直接原生匯入 UE4，無需事先轉換格式。",
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
      "detailedQuestion": "The ____________ setting defines how a sound's volume decreases as the listener moves farther away from the sound source in 3D space.",
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
      "questionZh": "在 Sound Cue 中，可以使用 Modulator 或 Random 節點對聲音進行隨機化處理，這是在 ____________ 中完成的。",
      "options": [
        "Sound Cue Editor",
        "Audio Editor",
        "Audacity",
        "Attenuation Editor"
      ],
      "optionsZh": [
        "Sound Class",
        "Mixer node",
        "Sound Cue Editor（音效提示編輯器）",
        "Audio Volume"
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
      "detailedQuestion": "True or False: An Ambient Sound Actor<span class=\"inline-trans\">（環境背景音效物件）</span> placed in a level can play looped spatialized background audio automatically on level start.",
      "detailedOptions": [
        "Sound Cue Editor（Sound Class）",
        "Audio Editor（Mixer node）",
        "Audacity（音效提示編輯器）",
        "Attenuation Editor（Audio Volume）"
      ]
    },
    {
      "id": "h07_q6",
      "chapterId": "h07",
      "qNum": 6,
      "type": "MC",
      "question": "A ____________ is a definable asset with adjustable property settings that will allow you to control such elements as echo density, overall reverb gain, and air absorption to help craft the overall feel you may be after.",
      "questionZh": "____________ 定義了空間聲學環境特性，例如回音、殘響時間與房間大小。",
      "options": [
        "Sound Attenuation asset",
        "Sound Cue asset",
        "Modulation Effect asset",
        "Reverb Effect asset"
      ],
      "optionsZh": [
        "Sound Wave",
        "Reverb Effect asset（混響效果資產）",
        "Sound Attenuation",
        "Audio Component"
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
      "detailedQuestion": "Which node randomly selects one sound from a list of connected inputs each time it is triggered?",
      "detailedOptions": [
        "Sound Attenuation asset（Sound Wave）",
        "Sound Cue asset（混響效果資產）",
        "Modulation Effect asset（Sound Attenuation）",
        "Reverb Effect asset（Audio Component）"
      ]
    },
    {
      "id": "h07_q7",
      "chapterId": "h07",
      "qNum": 7,
      "type": "TF",
      "question": "The Looping node is used to randomly trigger a Sound Wave node from within a group of possible Sound Wave nodes.",
      "questionZh": "空間化（Spatialization）是指讓聲音只在立體聲耳機中播放的處理過程。",
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
      "detailedQuestion": "To attach a sound directly to a moving character's skeletal socket<span class=\"inline-trans\">（將腳步聲或武器音效直接掛接於移動角色的骨架插槽上）</span>, you use the ____________ function.",
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
      "questionZh": "關卡中可以放置 ____________，以便當玩家走進其指定邊界範圍內時，自動套用混響效果與環境音效設定。",
      "options": [
        "Sound Modulation Actor",
        "Reverb Actor",
        "Ambient Sound Actor",
        "Audio Volume Actor"
      ],
      "optionsZh": [
        "Ambient Sound",
        "Sound Attenuation",
        "Audio Volume Actor（音訊體積 Actor）",
        "Post Process Volume"
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
      "detailedQuestion": "True or False: Sound Attenuation<span class=\"inline-trans\">（聲音距離衰減範圍）</span> can be shaped as a sphere, box, capsule, or cone volume in 3D space.",
      "detailedOptions": [
        "Sound Modulation Actor（Ambient Sound）",
        "Reverb Actor（Sound Attenuation）",
        "Ambient Sound Actor（音訊體積 Actor）",
        "Audio Volume Actor（Post Process Volume）"
      ]
    },
    {
      "id": "h07_q9",
      "chapterId": "h07",
      "qNum": 9,
      "type": "MC",
      "question": "A ____________ is used to trigger multiple Sound Wave nodes simultaneously.",
      "questionZh": "在 Sound Cue 中，哪一個節點是用來將多個音訊串流合併以使其能同時混音播放的？",
      "options": [
        "Wave Player node",
        "Random node",
        "Mixer node",
        "Looping node"
      ],
      "optionsZh": [
        "Concatenator node",
        "Mixer node（混音節點）",
        "Branch node",
        "Switch node"
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
      "detailedQuestion": "Which multiplier property inside a Sound Cue adjusts the overall loudness<span class=\"inline-trans\">（整體音量增益大小）</span> of a sound wave?",
      "detailedOptions": [
        "Wave Player node（Concatenator node）",
        "Random node（混音節點）",
        "Mixer node（Branch node）",
        "Looping node（Switch node）"
      ]
    },
    {
      "id": "h07_q10",
      "chapterId": "h07",
      "qNum": 10,
      "type": "TF",
      "question": "You can place an Ambient Sound Actor in your Level by dragging a Sound Cue asset from the Content Browser into your Level.",
      "questionZh": "將 Audio Component（音訊組件）附加至移動的角色身上，會自動讓該聲音在 3D 空間中隨著角色一同移動並產生空間化。",
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
      "detailedQuestion": "The ____________ node allows multiple audio paths to be mixed together into a single simultaneous audio output.",
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
        "Terrain map",
        "8-bit map",
        "Normal map",
        "Height map（高度圖）"
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
      "detailedQuestion": "Which tool mode in UE4 is specifically used to create, sculpt, and paint massive outdoor terrain<span class=\"inline-trans\">（建立、雕刻與彩繪大型戶外山川地貌）</span>?",
      "detailedOptions": [
        "Terrain map（Terrain map）",
        "8-bit map（-bit map）",
        "Normal map（Normal map）",
        "Height map（高度圖）"
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
      "detailedQuestion": "A grayscale image used to generate 3D terrain elevations<span class=\"inline-trans\">（使用黑白明暗像素代表高低起伏以生成 3D 地形）</span> is called a ____________.",
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
      "detailedQuestion": "True or False: Heightmaps can be imported directly into UE4 as 16-bit grayscale RAW or PNG files from external software like World Machine or Gaea.",
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
        "FoliageLayerBlend",
        "LandscapeLayerBlend（地貌圖層混合節點）",
        "TerrainLayerBlend",
        "LB_WeightedBlend"
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
      "detailedQuestion": "Which sculpting brush tool creates a smooth, flat plateau<span class=\"inline-trans\">（將崎嶇山地壓平整為平坦台地或建築地基）</span> by forcing surrounding vertices to a uniform sampled height?",
      "detailedOptions": [
        "FoliageLayerBlend（FoliageLayerBlend）",
        "LandscapeLayerBlend（地貌圖層混合節點）",
        "TerrainLayerBlend（TerrainLayerBlend）",
        "LB_WeightedBlend（LB_WeightedBlend）"
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
        "Shrub Actor",
        "Tree Actor",
        "Foliage Actor（植被 Actor）",
        "Landscape Foliage Actor"
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
      "detailedQuestion": "Which brush tool softens sharp spikes, harsh ridges, and jagged terrain edges<span class=\"inline-trans\">（柔化撫平陡峭毛刺、硬邊與鋸齒地形）</span>?",
      "detailedOptions": [
        "Shrub Actor（Shrub Actor）",
        "Tree Actor（Tree Actor）",
        "Foliage Actor（植被 Actor）",
        "Landscape Foliage Actor（Landscape Foliage Actor）"
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
      "detailedQuestion": "True or False: The Foliage tool<span class=\"inline-trans\">（Foliage 植被筆刷系統）</span> allows you to efficiently paint thousands of static mesh instances (trees, rocks, grass)<span class=\"inline-trans\">（以極高 GPU 批次實例化效率在地形上刷出數萬顆樹木草叢）</span> across landscapes.",
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
      "questionZh": "____________ 包含了一組工具，能依據設定的參數與放置限制條件，在場景中快速大批量放置資產。",
      "options": [
        "Foliage mode",
        "Sculpt mode",
        "Paint mode",
        "Model mode"
      ],
      "optionsZh": [
        "Foliage mode（植被模式面板）",
        "Sculpt mode",
        "Paint mode",
        "Model mode"
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
      "detailedQuestion": "The tool used to construct gentle slopes and roads between two elevation points on a landscape is the ____________ tool.",
      "detailedOptions": [
        "Foliage mode（植被模式面板）",
        "Sculpt mode（Sculpt mode）",
        "Paint mode（Paint mode）",
        "Model mode（Model mode）"
      ]
    },
    {
      "id": "h08_q8",
      "chapterId": "h08",
      "qNum": 8,
      "type": "MC",
      "question": "A ____________ is a specific Actor class used to represent terrain. This Actor has its own level of detail (LOD) system for efficiency.",
      "questionZh": "____________ 是一種專門用來代表地形的特定 Actor 類別，它具備自己的細節層次（LOD）系統以提升運算效率。",
      "options": [
        "Terrain Actor",
        "Landscape Actor",
        "Foliage Actor",
        "Ground Actor"
      ],
      "optionsZh": [
        "Terrain Actor",
        "Landscape Actor（地貌 Actor）",
        "Foliage Actor",
        "Ground Actor"
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
      "detailedQuestion": "True or False: Painting different landscape layers (such as grass, dirt, and rock)<span class=\"inline-trans\">（彩繪不同地表層，如青草、泥土與岩石）</span> requires a Landscape Material using a LandscapeLayerBlend node.",
      "detailedOptions": [
        "Terrain Actor（Terrain Actor）",
        "Landscape Actor（地貌 Actor）",
        "Foliage Actor（Foliage Actor）",
        "Ground Actor（Ground Actor）"
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
        "Foliage tab",
        "Paint tab",
        "Sculpt tab（雕刻分頁）",
        "Manage tab"
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
      "detailedQuestion": "Which parameter controls the diameter/size of the landscape sculpting brush<span class=\"inline-trans\">（地貌雕刻筆刷的直徑工作範圍大小）</span>?",
      "detailedOptions": [
        "Foliage tab（Foliage tab）",
        "Paint tab（Paint tab）",
        "Sculpt tab（雕刻分頁）",
        "Manage tab（Manage tab）"
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
      "detailedQuestion": "The strength or intensity of a sculpting brush deformation<span class=\"inline-trans\">（地貌雕刻筆刷拉伸或壓陷地形的變形力道強度）</span> is controlled by the ____________ setting.",
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
      "questionZh": "____________ Actor 從其所在位置捕捉關卡影像（立方體貼圖 Cubemap），並將這些影像投射到周遭的其他 Actor 上以產生反射效果。",
      "options": [
        "Sphere Capture",
        "Reflection Capture",
        "Sky Sphere",
        "Post Process Volume"
      ],
      "optionsZh": [
        "Sphere Capture",
        "Reflection Capture（反射捕捉 Actor）",
        "Sky Sphere",
        "Post Process Volume"
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
      "detailedQuestion": "Which fog actor simulates the scattering of sunlight through the atmosphere<span class=\"inline-trans\">（模擬太陽光穿透大氣層的瑞利散射與逼真天空地平線）</span> to give a natural sense of distant depth?",
      "detailedOptions": [
        "Sphere Capture（Sphere Capture）",
        "Reflection Capture（反射捕捉 Actor）",
        "Sky Sphere（Sky Sphere）",
        "Post Process Volume（Post Process Volume）"
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
      "detailedQuestion": "True or False: Exponential Height Fog<span class=\"inline-trans\">（指數高度霧）</span> creates a density gradient where fog is thickest at lower elevations and thins out exponentially as altitude increases<span class=\"inline-trans\">（低窪處濃密，隨海拔高度上升呈指數遞減變薄）</span>.",
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
      "detailedQuestion": "Which volume actor allows you to apply full-screen camera effects<span class=\"inline-trans\">（全螢幕鏡頭濾鏡特效，如色調分級、自動曝光與光暈）</span> such as exposure, bloom, and color grading?",
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
        "Atmospheric Fog（大氣霧 Actor）",
        "Sky Sphere Blueprint",
        "Sky Light",
        "Post Process Volume"
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
      "detailedQuestion": "To make a Post Process Volume apply to the entire level regardless of whether the camera is inside it<span class=\"inline-trans\">（讓後製效果作用於全地圖，無視攝影機是否在體積外框內）</span>, you must enable ____________.",
      "detailedOptions": [
        "Atmospheric Fog（大氣霧 Actor）",
        "Sky Sphere Blueprint（Sky Sphere Blueprint）",
        "Sky Light（Sky Light）",
        "Post Process Volume（Post Process Volume）"
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
        "Sky Light",
        "Post Process Volume",
        "Reflection Capture",
        "Lightmass Importance Volume（Lightmass 重要體積）"
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
      "detailedQuestion": "True or False: Bloom<span class=\"inline-trans\">（強光泛光眩光效果）</span> produces glowing fringes around intensely bright areas on the screen to simulate real-world camera lens flare.",
      "detailedOptions": [
        "Sky Light（Sky Light）",
        "Post Process Volume（Post Process Volume）",
        "Reflection Capture（Reflection Capture）",
        "Lightmass Importance Volume（Lightmass 重要體積）"
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
      "detailedQuestion": "The optical effect that keeps an in-focus subject sharp while blurring foreground and background elements is known as ____________.",
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
        "Depth of Field (DOF)（景深）",
        "Color Grading",
        "Eye Adaptation",
        "Anti-Aliasing"
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
      "detailedQuestion": "Which post-process setting mimics the human eye adjusting from a dark indoor room to bright sunny outdoors<span class=\"inline-trans\">（模擬人眼從陰暗室內走到戶外烈日下的瞳孔暗適應/明適應調節）</span>?",
      "detailedOptions": [
        "Depth of Field (DOF)（景深）",
        "Color Grading（Color Grading）",
        "Eye Adaptation（Eye Adaptation）",
        "Anti-Aliasing（-Aliasing）"
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
        "Scene Fringe（場景邊緣色散）",
        "Blendable",
        "Bloom",
        "Tone Mapping"
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
      "detailedQuestion": "True or False: Lightmass Importance Volumes tell the lighting engine to concentrate high-quality light photon calculations only within the bounds of that volume.",
      "detailedOptions": [
        "Scene Fringe（場景邊緣色散）",
        "Blendable（Blendable）",
        "Bloom（Bloom）",
        "Tone Mapping（Tone Mapping）"
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
        "Reflection Capture",
        "Sky Sphere Blueprint",
        "Atmospheric Fog",
        "Exponential Height Fog（指數級高度霧）"
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
      "detailedQuestion": "The default sky background in UE4 template maps is generated by the ____________ blueprint actor.",
      "detailedOptions": [
        "Reflection Capture（Reflection Capture）",
        "Sky Sphere Blueprint（Sky Sphere Blueprint）",
        "Atmospheric Fog（Atmospheric Fog）",
        "Exponential Height Fog（指數級高度霧）"
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
      "detailedQuestion": "Color Grading and Tone Mapping settings are located inside the ____________.",
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
      "detailedQuestion": "The primary tool in Unreal Engine 4 for creating and editing legacy particle systems is the ____________ editor.",
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
        "Emitter Actors",
        "Distributions（分佈器）",
        "Color Over Life modules",
        "Particles"
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
      "detailedQuestion": "True or False: A Particle System Actor<span class=\"inline-trans\">（粒子系統物件）</span> placed in a level can contain multiple independent particle emitters<span class=\"inline-trans\">（包含多個各自獨立的發射器，如同時發射火焰核心與煙霧）</span>.",
      "detailedOptions": [
        "Emitter Actors（Emitter Actors）",
        "Distributions（分佈器）",
        "Color Over Life modules（Color Over Life modules）",
        "Particles（Particles）"
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
      "detailedQuestion": "Which particle module defines how many individual particles are generated per second<span class=\"inline-trans\">（每秒生成產生的粒子顆數與生成頻率）</span>?",
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
        "Emitter Actor",
        "Emitter System asset",
        "Particle System asset（粒子系統資產）",
        "Type Data module"
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
      "detailedQuestion": "The ____________ module controls how long a particle survives before fading out and being destroyed.",
      "detailedOptions": [
        "Emitter Actor（Emitter Actor）",
        "Emitter System asset（Emitter System asset）",
        "Particle System asset（粒子系統資產）",
        "Type Data module（Type Data module）"
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
        "Required（必要模組）",
        "Initial Velocity",
        "Spawn",
        "Distributions"
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
      "detailedQuestion": "True or False: GPU particles in UE4 can simulate hundreds of thousands of particles simultaneously with much higher performance than CPU particles.",
      "detailedOptions": [
        "Required（必要模組）",
        "Initial Velocity（Initial Velocity）",
        "Spawn（Spawn）",
        "Distributions（Distributions）"
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
      "detailedQuestion": "Which module gives newborn particles an initial directional speed vector upon spawning<span class=\"inline-trans\">（在粒子生成瞬間賦予其初始方向與噴發初速度向量）</span>?",
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
        "Required",
        "Initial Velocity",
        "Initial Size"
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
      "detailedQuestion": "To animate a particle's tint or alpha transparency smoothly over its existence, you use the ____________ module.",
      "detailedOptions": [
        "Type Data（類型資料模組）",
        "Required（Required）",
        "Initial Velocity（Initial Velocity）",
        "Initial Size（Initial Size）"
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
        "Sprite（精靈面片）",
        "Beam（光束）",
        "Ribbon（飄帶）",
        "Rain（下雨）"
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
      "detailedQuestion": "True or False: Particle materials typically require their Blend Mode to be set to Translucent or Additive<span class=\"inline-trans\">（半透明 Translucent 或疊加 Additive 混合模式）</span> to support semi-transparent fire, smoke, and sparks.",
      "detailedOptions": [
        "Sprite（精靈面片）",
        "Beam（光束）",
        "Ribbon（飄帶）",
        "Rain（下雨）"
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
        "Cascade（級聯粒子編輯器）",
        "Drizzle",
        "Torrent",
        "Waterfall"
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
      "detailedQuestion": "Which particle emitter type emits 2D camera-facing texture quads (sprites)<span class=\"inline-trans\">（發射永遠面向攝影機視角平面的 2D 廣告看板精靈圖元）</span>?",
      "detailedOptions": [
        "Cascade（級聯粒子編輯器）",
        "Drizzle（Drizzle）",
        "Torrent（Torrent）",
        "Waterfall（Waterfall）"
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
        "Beam（光束）",
        "GPU",
        "Ribbon（飄帶）",
        "Anim Trail"
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
      "detailedQuestion": "The curve editor inside Cascade allows developers to fine-tune module values over ____________.",
      "detailedOptions": [
        "Beam（光束）",
        "GPU（GPU）",
        "Ribbon（飄帶）",
        "Anim Trail（Anim Trail）"
      ]
    },
    {
      "id": "h12_q1",
      "chapterId": "h12",
      "qNum": 1,
      "type": "MC",
      "question": "The newest editor in UE4 used to edit in-game cinematics is called ____________.",
      "questionZh": "UE4 中用來編輯遊戲內過場動畫的最新編輯器稱為 ____________。",
      "options": [
        "Cinematics",
        "Persona",
        "Matinee",
        "Sequencer"
      ],
      "optionsZh": [
        "Cinematics",
        "Persona",
        "Matinee",
        "Sequencer（序列器）"
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
      "detailedQuestion": "The modern multi-track cinematic timeline tool in Unreal Engine used to direct cutscenes and animations<span class=\"inline-trans\">（虛幻引擎用於製作過場運鏡與動畫的多軌道時間軸導演工具）</span> is ____________.",
      "detailedOptions": [
        "Cinematics（Cinematics）",
        "Persona（Persona）",
        "Matinee（Matinee）",
        "Sequencer（序列器）"
      ]
    },
    {
      "id": "h12_q2",
      "chapterId": "h12",
      "qNum": 2,
      "type": "TF",
      "question": "In a digital environment, keys or keyframes store changes in value or property at set points over a specified amount of time.",
      "questionZh": "在數位環境中，關鍵影格（Keys / Keyframes）用來儲存在指定時間段內特定時間點上的數值或屬性變更。",
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
      "detailedQuestion": "True or False: A Level Sequence asset<span class=\"inline-trans\">（Level Sequence 關卡過場序列資產）</span> stores keyframe animation tracks for actors, cameras, lights, and transform properties.",
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
      "questionZh": "____________ 是 Sequencer 編輯器中的一個面板，使用紅色與綠色標記顯示序列動畫的播放有效範圍。",
      "options": [
        "Tracks Area",
        "Timeline",
        "Sequence Breadcrumb",
        "Tree View"
      ],
      "optionsZh": [
        "Tracks Area",
        "Timeline（時間軸）",
        "Sequence Breadcrumb",
        "Tree View"
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
      "detailedQuestion": "Which specialized track inside Sequencer is responsible for switching between multiple camera angles during a cutscene<span class=\"inline-trans\">（在過場動畫中切換不同電影鏡位與視角鏡頭的專用軌道）</span>?",
      "detailedOptions": [
        "Tracks Area（Tracks Area）",
        "Timeline（時間軸）",
        "Sequence Breadcrumb（Sequence Breadcrumb）",
        "Tree View（Tree View）"
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
      "detailedQuestion": "Which camera actor is specifically designed for cinematics, featuring real-world film focal lengths, apertures, and depth of field controls<span class=\"inline-trans\">（專為電影運鏡打造，支援真實鏡頭焦距、光圈與感光元件規格的攝影機物件）</span>?",
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
        "Placeable",
        "Possessable（可附身物件）",
        "Spawnable（可生成物件）",
        "Addable"
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
      "detailedQuestion": "True or False: In Sequencer, you can record actor gameplay movements live in real-time using the Sequence Recorder tool.",
      "detailedOptions": [
        "Placeable（Placeable）",
        "Possessable（可附身物件）",
        "Spawnable（可生成物件）",
        "Addable（Addable）"
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
      "detailedQuestion": "The vertical line on the timeline that you can drag back and forth to scrub through an animation is known as the ____________.",
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
        "Placeable",
        "Possessable",
        "Spawnable（可生成物件）",
        "Addable"
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
      "detailedQuestion": "Which shortcut key in Sequencer sets a keyframe<span class=\"inline-trans\">（在時間軸指針當前位置打下一個關鍵影格）</span> for selected transform properties?",
      "detailedOptions": [
        "Placeable（Placeable）",
        "Possessable（Possessable）",
        "Spawnable（可生成物件）",
        "Addable（Addable）"
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
        "Level Sequence assets（關卡序列資產）",
        "Level Sequence Actors",
        "Persona assets",
        "Matinee Actors"
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
      "detailedQuestion": "True or False: Audio tracks cannot be placed inside Sequencer for audio-video lip sync and sound effects playback.",
      "detailedOptions": [
        "Level Sequence assets（關卡序列資產）",
        "Level Sequence Actors（Level Sequence Actors）",
        "Persona assets（Persona assets）",
        "Matinee Actors（Matinee Actors）"
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
        "Shot Track",
        "Event Track",
        "Camera Cut Track（相機切鏡軌道）",
        "Play Rate Track"
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
      "detailedQuestion": "To trigger Blueprint custom events or gameplay logic directly from a timeline frame in Sequencer, you use an ____________ track.",
      "detailedOptions": [
        "Shot Track（Shot Track）",
        "Event Track（Event Track）",
        "Camera Cut Track（相機切鏡軌道）",
        "Play Rate Track（Play Rate Track）"
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
        "Camera Rig Crane Actor（攝影搖臂）",
        "Level Sequence Actor",
        "Camera Rig Rail Actor（攝影軌道車 Actor）",
        "Spawnable Actor"
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
      "detailedQuestion": "The process of outputting a completed sequence into video files (MP4, AVI) or high-resolution image sequences is called ____________.",
      "detailedOptions": [
        "Camera Rig Crane Actor（攝影搖臂）",
        "Level Sequence Actor（Level Sequence Actor）",
        "Camera Rig Rail Actor（攝影軌道車 Actor）",
        "Spawnable Actor（Spawnable Actor）"
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
        "Radial Force Actor",
        "Static Mesh Actor",
        "Destructible Actor（可破壞網格 Actor）",
        "Skeletal Mesh Actor"
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
      "detailedQuestion": "Which property checkbox must be enabled on a Static Mesh Actor's Details panel to make it fall under gravity and react to collisions<span class=\"inline-trans\">（受地心引力墜落並產生實體剛體物理碰撞反應）</span>?",
      "detailedOptions": [
        "Radial Force Actor（Radial Force Actor）",
        "Static Mesh Actor（Static Mesh Actor）",
        "Destructible Actor（可破壞網格 Actor）",
        "Skeletal Mesh Actor（Skeletal Mesh Actor）"
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
      "detailedQuestion": "True or False: An Actor must have valid collision geometry (Collision Hulls)<span class=\"inline-trans\">（必須具備有效碰撞體外框）</span> in order to simulate physics properly.",
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
        "Mass（質量）",
        "Density（密度）",
        "Impulse",
        "Angular Force"
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
      "detailedQuestion": "In Unreal Engine 4 physics simulation, the mass of an object is measured in ____________.",
      "detailedOptions": [
        "Mass（質量）",
        "Density（密度）",
        "Impulse（Impulse）",
        "Angular Force（Angular Force）"
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
      "detailedQuestion": "Which physical property dampens the straight-line velocity of a moving object, simulating air resistance<span class=\"inline-trans\">（移動空氣阻力：使剛體在空中前進時線性速度逐漸衰減變慢）</span>?",
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
        "Destructible Actor",
        "Physics Thruster Actor",
        "Static Mesh Actor",
        "Physics Constraint Actor（物理約束 Actor）"
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
      "detailedQuestion": "Which physical property dampens the rotational tumbling of a spinning physics object<span class=\"inline-trans\">（旋轉阻力：使物體在空中翻滾旋轉時角速度逐漸衰減停止）</span>?",
      "detailedOptions": [
        "Destructible Actor（Destructible Actor）",
        "Physics Thruster Actor（Physics Thruster Actor）",
        "Static Mesh Actor（Static Mesh Actor）",
        "Physics Constraint Actor（物理約束 Actor）"
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
      "detailedQuestion": "True or False: A Physics Material<span class=\"inline-trans\">（物理材質資產）</span> is used to define surface friction (slide resistance) and restitution (bounciness)<span class=\"inline-trans\">（表面滑動摩擦阻力與彈性反彈係數）</span>.",
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
        "Physics Asset Tool (PhAT)（物理資產工具 PhAT）",
        "Destructible Mesh",
        "APEX PhysX Lab",
        "Static Mesh"
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
      "detailedQuestion": "The restitution value in a Physics Material determines the object's ____________.",
      "detailedOptions": [
        "Physics Asset Tool (PhAT)（物理資產工具 PhAT）",
        "Destructible Mesh（Destructible Mesh）",
        "APEX PhysX Lab（APEX PhysX Lab）",
        "Static Mesh（Static Mesh）"
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
      "detailedQuestion": "Which component is used to link two physics bodies together like a hinge, ball socket, or rope constraint<span class=\"inline-trans\">（像鉸鏈、關節或繩索般將兩個物理實體連接拘束在一起的組件）</span>?",
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
        "Skeletal Mesh asset",
        "Physical Material asset（物理材質資產）",
        "Destructible Mesh asset",
        "Physics property"
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
      "detailedQuestion": "True or False: Enabling Simulate Physics on a Static Mesh automatically changes its Mobility setting to Movable<span class=\"inline-trans\">（自動將其移動性切換為可移動 Movable）</span>.",
      "detailedOptions": [
        "Skeletal Mesh asset（Skeletal Mesh asset）",
        "Physical Material asset（物理材質資產）",
        "Destructible Mesh asset（Destructible Mesh asset）",
        "Physics property（Physics property）"
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
        "Cloth（布料）",
        "Impulse（衝量）",
        "Soft body（軟體）",
        "Rigid body（剛體）"
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
      "detailedQuestion": "Which function call applies an instantaneous directional force or kick<span class=\"inline-trans\">（施加瞬間爆發力道衝量，如子彈擊中或爆炸推力）</span> to a physics object?",
      "detailedOptions": [
        "Cloth（布料）",
        "Impulse（衝量）",
        "Soft body（軟體）",
        "Rigid body（剛體）"
      ]
    }
  ]
};
