/**
 * Unreal Engine 4.27 ?函???摨?(7 蝡? + 2 蝬?皜祇? 01_to_06_Test / 07_to_13_Texs嚗 130 憿???100% ???移皞??質??園???蕃霅?
 * 靘?嚗each Yourself Unreal Engine 4 Game Development in 24 Hours
 */
const UE_QUIZ_DATA = {
    "chapters":  [
                     {
                         "id":  "h01",
                         "num":  "01",
                         "title":  "Hour 1: Your First Project",
                         "titleZh":  "第 1 小時：你的第一個專案與編輯器介面"
                     },
                     {
                         "id":  "h02",
                         "num":  "02",
                         "title":  "Hour 2: Anatomy of a Project",
                         "titleZh":  "第 2 小時：專案結構剖析與遊戲玩法框架"
                     },
                     {
                         "id":  "h03",
                         "num":  "03",
                         "title":  "Hour 3: Coordinates, Transforms, Units, and Organization",
                         "titleZh":  "第 3 小時：坐標、變換、單位與場景組織"
                     },
                     {
                         "id":  "h04",
                         "num":  "04",
                         "title":  "Hour 4: Static Mesh Editor",
                         "titleZh":  "第 4 小時：靜態網格編輯器與碰撞設定"
                     },
                     {
                         "id":  "h05",
                         "num":  "05",
                         "title":  "Hour 5: Lighting and Rendering",
                         "titleZh":  "第 5 小時：燈光照明技術與即時渲染"
                     },
                     {
                         "id":  "h06",
                         "num":  "06",
                         "title":  "Hour 6: Materials",
                         "titleZh":  "第 6 小時：材質系統與 PBR 基於物理著色"
                     },
                     {
                         "id":  "h07",
                         "num":  "07",
                         "title":  "Hour 7: UE4 Audio System",
                         "titleZh":  "第 7 小時：音效系統與 Sound Cue 音訊編輯器"
                     },
                     {
                         "id":  "01_to_06_Test",
                         "num":  "T1",
                         "title":  "01_to_06_Test",
                         "titleZh":  "第 1~6 章綜合測驗 (Hours 1–6 Test, 30題)"
                     },
                     {
                         "id":  "07_to_13_Texs",
                         "num":  "T2",
                         "title":  "07_to_13_Texs",
                         "titleZh":  "第 7~13 章綜合測驗 (Hours 7–13 Test, 30題)"
                     }
                 ],
    "questions":  [
                      {
                          "id":  "h01_q1",
                          "chapterId":  "h01",
                          "qNum":  1,
                          "type":  "MC",
                          "question":  "The Level ____________ panel displays the editable properties for a selected Actor.",
                          "questionZh":  "關卡中的 ____________ 面板會顯示當前所選取 Actor（場景物件）的可編輯屬性。",
                          "options":  [
                                          "Modes",
                                          "Details",
                                          "Content Browser",
                                          "World Outliner"
                                      ],
                          "optionsZh":  [
                                            "Modes（模式面板：放置基礎幾何體、地貌與植被工具）",
                                            "Details（細節面板：檢視與調整所選物件的各項屬性數值）",
                                            "Content Browser（內容瀏覽器：專案所有模型、材質與音效的檔案總管）",
                                            "World Outliner（世界大綱：當前關卡中所有物件的清單總表）"
                                        ],
                          "rawAnswer":  "Details",
                          "correctIndex":  1,
                          "correctText":  "Details",
                          "explanation":  "【UE 4.27 核心考點：Details 細節面板】\n選取關卡工作視窗（Level Viewport）或世界大綱中的任何 Actor，Details 面板會顯示其 Transform（位置/旋轉/縮放）、組件階層、材質槽與各項公開可編輯參數。\n\n【干擾項解析】：\n- Modes：提供放置常用幾何體、地貌雕刻與植被繪製工具。\n- Content Browser：管理專案中的資產庫。\n- World Outliner：列出當前關卡中所有實例化 Actor 的階層清單。",
                          "keywords":  [
                                           {
                                               "term":  "Details Panel（細節面板）",
                                               "role":  "檢視並修改當前選取 Actor 的所有變換坐標、材質槽與組件屬性"
                                           },
                                           {
                                               "term":  "World Outliner（世界大綱）",
                                               "role":  "場景總管清單樹，以樹狀結構列出關卡內的所有實例化 Actor 物件"
                                           },
                                           {
                                               "term":  "Modes Panel（模式面板）",
                                               "role":  "提供放置幾何筆刷、地貌雕刻（Landscape）與植被繪製（Foliage）的核心面板"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The \u003cspan class=\"term-en\"\u003eLevel\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（關卡場景）\u003c/span\u003e ____________ panel displays the editable properties for a selected \u003cspan class=\"term-en\"\u003eActor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（場景物件/Actor）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "Modes（模式面板：放置基礎幾何體、地貌與植被工具）",
                                                  "Details（細節面板：檢視與調整所選物件的各項屬性數值）",
                                                  "Content Browser（內容瀏覽器：專案所有模型、材質與音效的檔案總管）",
                                                  "World Outliner（世界大綱：當前關卡中所有物件的清單總表）"
                                              ]
                      },
                      {
                          "id":  "h01_q2",
                          "chapterId":  "h01",
                          "qNum":  2,
                          "type":  "TF",
                          "question":  "From the Project Browser’s New Project tab you can create Blueprint- or C++-based projects.",
                          "questionZh":  "在專案瀏覽器（Project Browser）的「New Project（新建專案）」分頁中，你可以建立以藍圖（Blueprint）或以 C++ 為基礎的專案。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：專案架構建立】\n正確。在開啟專案瀏覽器建立新專案時，頂部分頁提供 Blueprint 或 C++ 兩種底層代碼架構選擇。進入專案後兩者可自由混用（例如在藍圖專案中新增 C++ 類別）。",
                          "keywords":  [
                                           {
                                               "term":  "Unreal Engine 4.27 核心架構",
                                               "role":  "遵循教材與引擎核心工作流規範"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "From the \u003cspan class=\"term-en\"\u003eProject Browser\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（專案瀏覽器）\u003c/span\u003e’s \u003cspan class=\"term-en\"\u003eNew Project tab\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（新建專案分頁）\u003c/span\u003e you can create \u003cspan class=\"term-en\"\u003eBlueprint\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（藍圖腳本）\u003c/span\u003e- or C++-based projects.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h01_q3",
                          "chapterId":  "h01",
                          "qNum":  3,
                          "type":  "MC",
                          "question":  "The ____________ is an application that keeps track of the different versions of Unreal Engine that you have installed. You can use it to manage your projects, access free sample projects, and purchase content from the Unreal Marketplace. It also keeps you updated with community news and links to online learning resources and documentation.",
                          "questionZh":  "____________ 是一款管理工具應用程式，可追蹤你所安裝的不同虛幻引擎版本。你能用它來管理專案、下載免費範例、在虛幻商城（Unreal Marketplace）購買資源，並獲取官方最新社群消息與教學文件連結。",
                          "options":  [
                                          "Project Browser",
                                          "Modes panel",
                                          "Static Mesh Editor",
                                          "Epic Games Launcher"
                                      ],
                          "optionsZh":  [
                                            "Project Browser（專案瀏覽器：建立新專案或開啟既有專案）",
                                            "Modes panel（模式面板：放置常用物件與地貌植被工具）",
                                            "Static Mesh Editor（靜態網格編輯器：設定模型外形、碰撞體與材質槽）",
                                            "Epic Games Launcher（Epic 官方啟動器：下載引擎版本與購買商城素材）"
                                        ],
                          "rawAnswer":  "Epic Games Launcher",
                          "correctIndex":  3,
                          "correctText":  "Epic Games Launcher",
                          "explanation":  "【UE 4.27 核心考點：Epic Games Launcher 啟動器】\nEpic Games Launcher 是虛幻生態的桌面樞紐，負責安裝/管理多版本引擎（如 4.27.2、UE5）、開啟/刪除專案、購買商城資產包與下載官方範例。",
                          "keywords":  [
                                           {
                                               "term":  "Modes Panel（模式面板）",
                                               "role":  "提供放置幾何筆刷、地貌雕刻（Landscape）與植被繪製（Foliage）的核心面板"
                                           },
                                           {
                                               "term":  "Epic Games Launcher",
                                               "role":  "虛幻桌面樞紐，負責多版本引擎管理、商城素材購買與官方文件範例下載"
                                           },
                                           {
                                               "term":  "Static Mesh（靜態網格）",
                                               "role":  "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "The ____________ is an application that keeps track of the different versions of Unreal Engine that you have installed."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "You can use it to manage your projects, access free sample projects, and purchase content from the Unreal Marketplace."
                                           },
                                           {
                                               "partNum":  3,
                                               "en":  "It also keeps you updated with community news and links to online learning resources and documentation."
                                           }
                                       ],
                          "detailedQuestion":  "The ____________ is an application that keeps track of the different versions of \u003cspan class=\"term-en\"\u003eUnreal Engine\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（虛幻引擎）\u003c/span\u003e that you have installed. You can use it to manage your projects, access free sample projects, and purchase content from the \u003cspan class=\"term-en\"\u003eUnreal Marketplace\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（虛幻商城）\u003c/span\u003e. It also keeps you updated with community news and links to online learning resources and documentation.",
                          "detailedOptions":  [
                                                  "Project Browser（專案瀏覽器：建立新專案或開啟既有專案）",
                                                  "Modes panel（模式面板：放置常用物件與地貌植被工具）",
                                                  "Static Mesh Editor（靜態網格編輯器：設定模型外形、碰撞體與材質槽）",
                                                  "Epic Games Launcher（Epic 官方啟動器：下載引擎版本與購買商城素材）"
                                              ]
                      },
                      {
                          "id":  "h01_q4",
                          "chapterId":  "h01",
                          "qNum":  4,
                          "type":  "TF",
                          "question":  "The World Outliner shows you all the Actors that are placed in the current Level.",
                          "questionZh":  "世界大綱（World Outliner）會顯示目前關卡中所放置的所有 Actor 物件。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：World Outliner 世界大綱】\n正確。World Outliner 以樹狀清單列出目前關卡中載入的所有 Actor（網格、光源、體積、相機、音效等），並支援建立資料夾進行分類管理與快速搜尋過濾。",
                          "keywords":  [
                                           {
                                               "term":  "World Outliner（世界大綱）",
                                               "role":  "場景總管清單樹，以樹狀結構列出關卡內的所有實例化 Actor 物件"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The \u003cspan class=\"term-en\"\u003eWorld Outliner\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（世界大綱/場景物件清單）\u003c/span\u003e shows you all the \u003cspan class=\"term-en\"\u003eActors\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（場景物件/Actor）\u003c/span\u003e that are placed in the \u003cspan class=\"term-en\"\u003ecurrent\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（當前/目前）\u003c/span\u003e \u003cspan class=\"term-en\"\u003eLevel\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（關卡場景）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h01_q5",
                          "chapterId":  "h01",
                          "qNum":  5,
                          "type":  "MC",
                          "question":  "The ____________ view mode displays a neutral color on all the Actors in a Level along with the normal map from each Actor’s assigned Material.",
                          "questionZh":  "____________ 視圖模式（View Mode）會在關卡中所有 Actor 上顯示中性灰色調，並同時呈現各 Actor 指派材質中的法線貼圖（Normal Map）。",
                          "options":  [
                                          "Lit",
                                          "Wireframe",
                                          "Detail Lighting",
                                          "Lighting Only"
                                      ],
                          "optionsZh":  [
                                            "Lit（完整光照模式：呈現最終光影與材質效果）",
                                            "Wireframe（線框模式：僅顯示 3D 模型的幾何多邊形網格線條）",
                                            "Detail Lighting（僅細節光照：去除顏色干擾，專注檢視表面凹凸與陰影）",
                                            "Lighting Only（純光照模式：僅顯示光線照射與陰影，不顯示材質貼圖）"
                                        ],
                          "rawAnswer":  "Detail Lighting",
                          "correctIndex":  2,
                          "correctText":  "Detail Lighting",
                          "explanation":  "【UE 4.27 核心考點：Detail Lighting 視圖模式】\nDetail Lighting 會將材質的 Base Color（底色）暫時替換為中性灰色，同時保留法線貼圖與光影計算，讓美術人員排除顏色干擾、專注檢視表面幾何凹凸與光影衰減細節。\n\n【對比】：\n- Lighting Only：僅顯示漫反射光照與陰影，不顯示法線貼圖細節。\n- Lit：完整呈現最終材質底色、高光、粗糙度與法線效果。",
                          "keywords":  [
                                           {
                                               "term":  "Detail Lighting（細節光照）",
                                               "role":  "去除材質固有底色替換為中性灰色，保留法線凹凸與光影，便於審視微觀表面細節"
                                           },
                                           {
                                               "term":  "Lighting Only（僅光照）",
                                               "role":  "僅顯示漫反射光照與投影，不計算材質表面法線微觀細節"
                                           },
                                           {
                                               "term":  "Material（材質系統）",
                                               "role":  "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The ____________ \u003cspan class=\"term-en\"\u003eview mode\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（場景檢視模式）\u003c/span\u003e displays a neutral color on all the \u003cspan class=\"term-en\"\u003eActors\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（場景物件/Actor）\u003c/span\u003e in a \u003cspan class=\"term-en\"\u003eLevel\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（關卡場景）\u003c/span\u003e along with the \u003cspan class=\"term-en\"\u003enormal map\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（法線貼圖：表面凹凸）\u003c/span\u003e from each \u003cspan class=\"term-en\"\u003eActor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（場景物件/Actor）\u003c/span\u003e’s assigned \u003cspan class=\"term-en\"\u003eMaterial\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（材質）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "Lit（完整光照模式：呈現最終光影與材質效果）",
                                                  "Wireframe（線框模式：僅顯示 3D 模型的幾何多邊形網格線條）",
                                                  "Detail Lighting（僅細節光照：去除顏色干擾，專注檢視表面凹凸與陰影）",
                                                  "Lighting Only（純光照模式：僅顯示光線照射與陰影，不顯示材質貼圖）"
                                              ]
                      },
                      {
                          "id":  "h01_q6",
                          "chapterId":  "h01",
                          "qNum":  6,
                          "type":  "TF",
                          "question":  "If you want to temporarily display the collision hulls of all the Actors in your Level, you need to toggle off the Static Mesh show flag.",
                          "questionZh":  "如果你想要在關卡工作視窗（Level Viewport）中暫時顯示所有 Actor 的碰撞外框（Collision Hulls），你需要將 Static Mesh 的顯示標記關閉（Toggle off）。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "False",
                          "correctIndex":  1,
                          "correctText":  "False",
                          "explanation":  "【UE 4.27 核心考點：關卡工作視窗碰撞顯示 Show Flags】\n錯誤。若要顯示關卡中 Actor 的碰撞體外框，應在關卡工作視窗左上角點擊「Show」選單並勾選「Collision」（快捷鍵 Alt + C），而不是關閉 Static Mesh 顯示標記。",
                          "keywords":  [
                                           {
                                               "term":  "Collision（碰撞體系）",
                                               "role":  "阻止角色與物件穿透，並能觸發物理阻擋（Block）或重疊事件（Overlap）"
                                           },
                                           {
                                               "term":  "Static Mesh（靜態網格）",
                                               "role":  "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "If you want to temporarily display the \u003cspan class=\"term-en\"\u003ecollision hulls\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（物理碰撞外框/範圍）\u003c/span\u003e of all the \u003cspan class=\"term-en\"\u003eActors\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（場景物件/Actor）\u003c/span\u003e in your \u003cspan class=\"term-en\"\u003eLevel\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（關卡場景）\u003c/span\u003e, you need to toggle off the \u003cspan class=\"term-en\"\u003eStatic Mesh show flag\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（靜態網格顯示旗標）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h01_q7",
                          "chapterId":  "h01",
                          "qNum":  7,
                          "type":  "TF",
                          "question":  "Project folders can and should be moved while the Editor is running.",
                          "questionZh":  "當虛幻編輯器正在運行時，可以而且應該直接移動專案資料夾。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "False",
                          "correctIndex":  1,
                          "correctText":  "False",
                          "explanation":  "【UE 4.27 核心考點：檔案管理安全原則】\n錯誤。編輯器運行期間檔案與資料庫處於載入鎖定狀態，在檔案總管手動移動專案目錄會破壞資產重定向器（Redirectors）與依賴關係，導致專案損壞。專案移動必須在關閉編輯器後執行。",
                          "keywords":  [
                                           {
                                               "term":  "Unreal Engine 4.27 核心架構",
                                               "role":  "遵循教材與引擎核心工作流規範"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "\u003cspan class=\"term-en\"\u003eProject folders\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（專案資料夾檔案）\u003c/span\u003e can and should be moved while the \u003cspan class=\"term-en\"\u003eEditor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（虛幻編輯器）\u003c/span\u003e is running.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h01_q8",
                          "chapterId":  "h01",
                          "qNum":  8,
                          "type":  "MC",
                          "question":  "When creating a new project, you can select from a variety of default ____________ templates, such as First Person, Third Person, Flying, and Puzzle.",
                          "questionZh":  "建立新專案時，你可以從多種預設的 ____________ 樣板中進行選擇，例如第一人稱（First Person）、第三人稱（Third Person）、飛行（Flying）與解謎（Puzzle）。",
                          "options":  [
                                          "Game Mode",
                                          "Graphic Settings",
                                          "Landscape",
                                          "Viewport"
                                      ],
                          "optionsZh":  [
                                            "Game Mode（遊戲模式規範：定義遊戲規則、勝負條件與預設生成角色的中央大腦）",
                                            "Graphic Settings（圖形品質設定：調整畫面解析度與渲染效能）",
                                            "Landscape（地貌工具：雕刻山脈與繪製地形材質）",
                                            "Viewport（工作視窗：編輯與預覽 3D 場景的主要操作視窗）"
                                        ],
                          "rawAnswer":  "Game Mode",
                          "correctIndex":  0,
                          "correctText":  "Game Mode",
                          "explanation":  "【UE 4.27 核心考點：遊戲模式樣板】\n建立新專案時，UE4 提供針對常見遊戲類型的預設 Game Mode 樣板（包含 First Person、Third Person、Flying、Puzzle 等），已預先配置好輸入按鍵、攝影機設定與可操控 Pawn。",
                          "keywords":  [
                                           {
                                               "term":  "Game Mode（遊戲模式類別）",
                                               "role":  "定義核心遊戲規則、勝負邏輯與生成角色，多人生存架構中僅運行於伺服器端"
                                           },
                                           {
                                               "term":  "Pawn（兵卒實體）",
                                               "role":  "在世界中可被 Controller（控制器）附身附著的實體角色或載具基礎類別"
                                           },
                                           {
                                               "term":  "Landscape Actor（地貌地形）",
                                               "role":  "專為廣袤自然地形設計的幾何網格體，具備動態連續 LOD 優化"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "When creating a new project, you can select from a variety of default ____________ templates, such as First Person, Third Person, Flying, and Puzzle.",
                          "detailedOptions":  [
                                                  "Game Mode（遊戲模式規範：定義遊戲規則、勝負條件與預設生成角色的中央大腦）",
                                                  "Graphic Settings（圖形品質設定：調整畫面解析度與渲染效能）",
                                                  "Landscape（地貌工具：雕刻山脈與繪製地形材質）",
                                                  "Viewport（工作視窗：編輯與預覽 3D 場景的主要操作視窗）"
                                              ]
                      },
                      {
                          "id":  "h01_q9",
                          "chapterId":  "h01",
                          "qNum":  9,
                          "type":  "MC",
                          "question":  "In the Level Viewport, you can switch between Perspective and ____________ display modes.",
                          "questionZh":  "在關卡工作視窗（Level Viewport）中，你可以在透視（Perspective 3D 視角）與 ____________ 顯示模式之間切換。",
                          "options":  [
                                          "Paint",
                                          "Lit",
                                          "Orthographic",
                                          "Templates"
                                      ],
                          "optionsZh":  [
                                            "Paint（頂點繪製：直接在模型頂點上刷塗顏色）",
                                            "Lit（完整光照模式：呈現最終光影與材質效果）",
                                            "Orthographic（正交視圖：無透視近大遠小的 2D 平行投影（如頂視圖、側視圖））",
                                            "Templates（專案樣板：預先配置好玩法邏輯的遊戲範本）"
                                        ],
                          "rawAnswer":  "Orthographic",
                          "correctIndex":  2,
                          "correctText":  "Orthographic",
                          "explanation":  "【UE 4.27 核心考點：關卡工作視窗投影模式】\n關卡工作視窗提供透視（Perspective, 近大遠小 3D 空間）與正交（Orthographic, 無透視變形的平行二維投影，包含 Top、Bottom、Left、Right、Front、Back）兩種顯示模式。",
                          "keywords":  [
                                           {
                                               "term":  "Modes Panel（模式面板）",
                                               "role":  "提供放置幾何筆刷、地貌雕刻（Landscape）與植被繪製（Foliage）的核心面板"
                                           },
                                           {
                                               "term":  "Perspective（透視視圖）",
                                               "role":  "具備近大遠小真實 3D 空間透視感，適合關卡自由漫遊預覽"
                                           },
                                           {
                                               "term":  "Orthographic（正交視圖）",
                                               "role":  "平行投影無視角透視變形（頂/底/左/右/前/後視圖），專門用於精密對齊與測量"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "In the \u003cspan class=\"term-en\"\u003eLevel Viewport\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（關卡場景工作視窗）\u003c/span\u003e, you can switch between \u003cspan class=\"term-en\"\u003ePerspective\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（透視 3D 視角）\u003c/span\u003e and ____________ display modes.",
                          "detailedOptions":  [
                                                  "Paint（頂點繪製：直接在模型頂點上刷塗顏色）",
                                                  "Lit（完整光照模式：呈現最終光影與材質效果）",
                                                  "Orthographic（正交視圖：無透視近大遠小的 2D 平行投影（如頂視圖、側視圖））",
                                                  "Templates（專案樣板：預先配置好玩法邏輯的遊戲範本）"
                                              ]
                      },
                      {
                          "id":  "h01_q10",
                          "chapterId":  "h01",
                          "qNum":  10,
                          "type":  "MC",
                          "question":  "____________ are settings applied to Editor Viewports that modify the display of content. They help you to see the type of data being processed in your scene, as well as to diagnose any errors or unexpected results.",
                          "questionZh":  "____________ 是套用於編輯器場景視窗的顯示設定，可改變場景內容的呈現方式。它們能幫助你檢視場景中正在處理的資料類型，並協助診斷渲染錯誤或異常結果。",
                          "options":  [
                                          "Perspective",
                                          "View modes",
                                          "Level Details panel",
                                          "Foliage"
                                      ],
                          "optionsZh":  [
                                            "Perspective（透視視角：符合人眼近大遠小的真實 3D 空間視角）",
                                            "View modes（視圖選單：切換帶光照、無光照與線框等顯示模式）",
                                            "Level Details panel（關卡細節面板：調整關卡專有設定）",
                                            "Foliage（植被工具：快速刷塗大量樹木與花草）"
                                        ],
                          "rawAnswer":  "View modes",
                          "correctIndex":  1,
                          "correctText":  "View modes",
                          "explanation":  "【UE 4.27 核心考點：View modes 檢視模式】\n檢視模式包含 Lit、Unlit、Wireframe、Detail Lighting、Lighting Only，以及 Light Complexity（光照複雜度）與 Shader Complexity（著色器開銷）等診斷視圖，是優化效能與除錯不可或缺的工具。",
                          "keywords":  [
                                           {
                                               "term":  "Details Panel（細節面板）",
                                               "role":  "檢視並修改當前選取 Actor 的所有變換坐標、材質槽與組件屬性"
                                           },
                                           {
                                               "term":  "Modes Panel（模式面板）",
                                               "role":  "提供放置幾何筆刷、地貌雕刻（Landscape）與植被繪製（Foliage）的核心面板"
                                           },
                                           {
                                               "term":  "Perspective（透視視圖）",
                                               "role":  "具備近大遠小真實 3D 空間透視感，適合關卡自由漫遊預覽"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "____________ are settings applied to Editor Viewports that modify the display of content."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "They help you to see the type of data being processed in your scene, as well as to diagnose any errors or unexpected results."
                                           }
                                       ],
                          "detailedQuestion":  "____________ are settings applied to \u003cspan class=\"term-en\"\u003eEditor Viewports\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（編輯器場景視窗）\u003c/span\u003e that \u003cspan class=\"term-en\"\u003emodify\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（改變/修改）\u003c/span\u003e the display of content. They help you to see the type of data being processed in your scene, as well as to diagnose any errors or unexpected results.",
                          "detailedOptions":  [
                                                  "Perspective（透視視角：符合人眼近大遠小的真實 3D 空間視角）",
                                                  "View modes（視圖選單：切換帶光照、無光照與線框等顯示模式）",
                                                  "Level Details panel（關卡細節面板：調整關卡專有設定）",
                                                  "Foliage（植被工具：快速刷塗大量樹木與花草）"
                                              ]
                      },
                      {
                          "id":  "h02_q1",
                          "chapterId":  "h02",
                          "qNum":  1,
                          "type":  "MC",
                          "question":  "____________ files are text files that store Editor, engine, and project preferences.",
                          "questionZh":  "____________ 檔案是用來儲存編輯器、引擎與專案偏好設定的純文字檔案。",
                          "options":  [
                                          ".uasset",
                                          ".umap",
                                          ".ini",
                                          ".uproject"
                                      ],
                          "optionsZh":  [
                                            ".uasset（虛幻專用資產檔：包含模型、材質與音效等素材）",
                                            ".umap（關卡地圖檔：儲存場景中所有擺放的物件資訊）",
                                            ".ini（純文字設定檔：儲存引擎配置與專案預設參數）",
                                            ".uproject（專案描述引導檔：記錄專案版本與外掛啟用狀態）"
                                        ],
                          "rawAnswer":  ".ini",
                          "correctIndex":  2,
                          "correctText":  ".ini",
                          "explanation":  "【UE 4.27 核心考點：.ini 組態檔】\n虛幻引擎將所有的引擎配置、按鍵映射輸入設定與專案預設值存放在 Config 目錄下的 .ini 格式文字檔中（如 DefaultEngine.ini, DefaultInput.ini, DefaultGame.ini）。",
                          "keywords":  [
                                           {
                                               "term":  ".ini 組態設定檔",
                                               "role":  "存放在 Config 目錄下，儲存引擎底層參數、預設偏好設定與輸入按鍵映射"
                                           },
                                           {
                                               "term":  "Reference Viewer（引用檢視器）",
                                               "role":  "以可視化節點圖展示資產與資產之間的雙向依賴引用關係樹"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "____________ files are text files that store \u003cspan class=\"term-en\"\u003eEditor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（虛幻編輯器）\u003c/span\u003e, \u003cspan class=\"term-en\"\u003eengine\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（引擎/核心引擎）\u003c/span\u003e, and project preferences.",
                          "detailedOptions":  [
                                                  ".uasset（虛幻專用資產檔：包含模型、材質與音效等素材）",
                                                  ".umap（關卡地圖檔：儲存場景中所有擺放的物件資訊）",
                                                  ".ini（純文字設定檔：儲存引擎配置與專案預設參數）",
                                                  ".uproject（專案描述引導檔：記錄專案版本與外掛啟用狀態）"
                                              ]
                      },
                      {
                          "id":  "h02_q2",
                          "chapterId":  "h02",
                          "qNum":  2,
                          "type":  "TF",
                          "question":  "Autosave and backup files update every 30 minutes by default. These files can save the day if the Editor ever crashes on you, but they also increase the size of your project. These files are found in your project’s “Saved” folder.",
                          "questionZh":  "自動儲存與備份檔案預設每 30 分鐘更新一次。如果編輯器發生當機，這些檔案可以拯救你的進度，但也會增加專案的佔用容量。這些備份檔案存放在專案的「Saved」資料夾中。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：Saved 資料夾與自動存檔】\n正確。UE4 預設啟用了自動存檔機制，每隔特定時間將暫存與還原點存放在專案目錄下的 `Saved/Autosaves` 與 `Saved/Backup` 資料夾中。",
                          "keywords":  [
                                           {
                                               "term":  "Saved 資料夾",
                                               "role":  "存放專案的自動備份（Autosaves）、烘焙暫存與運行日誌，專案異常時可在此找回進度"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "Autosave and backup files update every 30 minutes by default."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "These files can save the day if the Editor ever crashes on you, but they also increase the size of your project."
                                           },
                                           {
                                               "partNum":  3,
                                               "en":  "These files are found in your project’s “Saved” folder."
                                           }
                                       ],
                          "detailedQuestion":  "Autosave and backup files update every 30 minutes by default. These files can save the day if the \u003cspan class=\"term-en\"\u003eEditor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（虛幻編輯器）\u003c/span\u003e ever crashes on you, but they also increase the size of your project. These files are found in your project’s “Saved” folder.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h02_q3",
                          "chapterId":  "h02",
                          "qNum":  3,
                          "type":  "MC",
                          "question":  "The ____________ folder is not found in a default project folder.",
                          "questionZh":  "____________ 資料夾不會出現在預設的專案目錄結構中。",
                          "options":  [
                                          "Saved",
                                          "Content",
                                          "Intermediate",
                                          "Raw Files"
                                      ],
                          "optionsZh":  [
                                            "Saved（暫存目錄：存放自動備份存檔與遊戲執行日誌）",
                                            "Content（資產主目錄：專案所有遊戲素材必須存放在此）",
                                            "Intermediate（中間暫存目錄：編譯過程中由引擎自動產生的暫存檔）",
                                            "Raw Files（外部原始檔案目錄）"
                                        ],
                          "rawAnswer":  "Raw Files",
                          "correctIndex":  3,
                          "correctText":  "Raw Files",
                          "explanation":  "【UE 4.27 核心考點：預設專案資料夾結構】\n預設的 UE 專案標準目錄包含 Config、Content、Intermediate、Saved（以及 C++ 專案的 Source）。「Raw Files」並非引擎標準資料夾，原始 3D 檔（.fbx）或 PSD 貼圖通常存放在專案外部以避免膨脹專案庫。",
                          "keywords":  [
                                           {
                                               "term":  "Saved 資料夾",
                                               "role":  "存放專案的自動備份（Autosaves）、烘焙暫存與運行日誌，專案異常時可在此找回進度"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The ____________ folder is not found in a default project folder.",
                          "detailedOptions":  [
                                                  "Saved（暫存目錄：存放自動備份存檔與遊戲執行日誌）",
                                                  "Content（資產主目錄：專案所有遊戲素材必須存放在此）",
                                                  "Intermediate（中間暫存目錄：編譯過程中由引擎自動產生的暫存檔）",
                                                  "Raw Files（外部原始檔案目錄）"
                                              ]
                      },
                      {
                          "id":  "h02_q4",
                          "chapterId":  "h02",
                          "qNum":  4,
                          "type":  "TF",
                          "question":  "It is acceptable to move .uasset files manually outside of the Editor.",
                          "questionZh":  "在編輯器外部（如透過 Windows 檔案總管）手動移動 .uasset 資產檔案是可接受的操作。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "False",
                          "correctIndex":  1,
                          "correctText":  "False",
                          "explanation":  "【UE 4.27 核心考點：資產依賴與移動規範】\n錯誤。在檔案總管手動移動 .uasset 檔案會破壞其他關卡或材質對該資產的內部引用關係，導致資源遺失。資產移動必須在 Content Browser 內執行，編輯器才會自動維護 Asset Redirectors（資產重定向器）。",
                          "keywords":  [
                                           {
                                               "term":  "Unreal Engine 4.27 核心架構",
                                               "role":  "遵循教材與引擎核心工作流規範"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "It is acceptable to move \u003cspan class=\"term-en\"\u003e.uasset files\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（.uasset 虛幻資產檔案）\u003c/span\u003e manually outside of the \u003cspan class=\"term-en\"\u003eEditor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（虛幻編輯器）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h02_q5",
                          "chapterId":  "h02",
                          "qNum":  5,
                          "type":  "MC",
                          "question":  "The ______________ Viewer shows the dependencies for an asset.",
                          "questionZh":  "______________ 檢視器（Viewer）用來顯示資產之間的相依引用關係樹。",
                          "options":  [
                                          "Viewport",
                                          "Reference",
                                          "Migration",
                                          "Import"
                                      ],
                          "optionsZh":  [
                                            "Viewport（工作視窗：編輯與預覽 3D 場景的主要操作視窗）",
                                            "Reference（資產引用：查看素材之間的相依連結）",
                                            "Migration（資產遷移：安全地將素材連同所有相依檔案複製到另一個專案）",
                                            "Import（匯入功能：將外部檔案載入專案中）"
                                        ],
                          "rawAnswer":  "Reference",
                          "correctIndex":  1,
                          "correctText":  "Reference",
                          "explanation":  "【UE 4.27 核心考點：Reference Viewer 引用檢視器】\n在 Content Browser 中右鍵點選任何資產並選擇「Reference Viewer（快捷鍵 Shift + Alt + R）」，可以視覺化展開該資產被哪些關卡或材質所引用，以及該資產自身又依賴了哪些紋理貼圖。",
                          "keywords":  [
                                           {
                                               "term":  "Reference Viewer（引用檢視器）",
                                               "role":  "以可視化節點圖展示資產與資產之間的雙向依賴引用關係樹"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The ______________ Viewer shows the dependencies for an asset.",
                          "detailedOptions":  [
                                                  "Viewport（工作視窗：編輯與預覽 3D 場景的主要操作視窗）",
                                                  "Reference（資產引用：查看素材之間的相依連結）",
                                                  "Migration（資產遷移：安全地將素材連同所有相依檔案複製到另一個專案）",
                                                  "Import（匯入功能：將外部檔案載入專案中）"
                                              ]
                      },
                      {
                          "id":  "h02_q6",
                          "chapterId":  "h02",
                          "qNum":  6,
                          "type":  "TF",
                          "question":  "One way to bring assets into a project is to use the Migrate tool.",
                          "questionZh":  "將資產引入專案的一種方法是使用遷移工具（Migrate tool）。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：Migrate 遷移工具】\n正確。Migrate 工具是跨專案複製資產的最佳標準方式，它會自動將所選資產以及其「所有相關依賴資產」（材質、貼圖、骨骼、物理資產）完整打包複製到目標專案的 Content 資料夾。",
                          "keywords":  [
                                           {
                                               "term":  "Migrate（遷移工具）",
                                               "role":  "跨專案傳遞資產的最佳工具，自動遞迴打包該資產的所有依賴貼圖與材質"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "One way to bring assets into a project is to use the \u003cspan class=\"term-en\"\u003eMigrate tool\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（Migrate 素材遷移工具）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h02_q7",
                          "chapterId":  "h02",
                          "qNum":  7,
                          "type":  "MC",
                          "question":  "The____________ is a collection of C++ or Blueprint classes that manages the rules of the game, handles player input, and defines the avatars, cameras, and player HUDs in UE4 projects.",
                          "questionZh":  "____________ 是一組 C++ 或藍圖類別的集合，在 UE4 專案中負責管理遊戲規則、處理玩家輸入，並定義虛擬角色、相機與玩家 HUD 介面。",
                          "options":  [
                                          "Gameplay Framework",
                                          "Content Browser",
                                          "Controller class",
                                          "Pawn class"
                                      ],
                          "optionsZh":  [
                                            "Gameplay Framework（玩法框架：UE 官方定義的一套標準遊戲開發架構）",
                                            "Content Browser（內容瀏覽器：專案所有模型、材質與音效的檔案總管）",
                                            "Controller class（控制器：接收鍵盤滑鼠操作並對角色下達動作指令的核心類別）",
                                            "Pawn class（Pawn 基礎類別：可被操控的基本實體）"
                                        ],
                          "rawAnswer":  "Gameplay Framework",
                          "correctIndex":  0,
                          "correctText":  "Gameplay Framework",
                          "explanation":  "【UE 4.27 核心考點：Gameplay Framework 遊戲玩法框架】\nGameplay Framework 是虛幻引擎遊戲邏輯的頂層骨幹，包含 GameMode、GameState、PlayerController、Pawn/Character、PlayerState 與 HUD 等核心模組。",
                          "keywords":  [
                                           {
                                               "term":  "Pawn（兵卒實體）",
                                               "role":  "在世界中可被 Controller（控制器）附身附著的實體角色或載具基礎類別"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The____________ is a collection of C++ or \u003cspan class=\"term-en\"\u003eBlueprint\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（藍圖腳本）\u003c/span\u003e classes that manages the rules of the game, handles player input, and \u003cspan class=\"term-en\"\u003edefines\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（定義規範）\u003c/span\u003e the avatars, cameras, and player \u003cspan class=\"term-en\"\u003eHUDs\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（抬頭顯示介面）\u003c/span\u003e in UE4 projects.",
                          "detailedOptions":  [
                                                  "Gameplay Framework（玩法框架：UE 官方定義的一套標準遊戲開發架構）",
                                                  "Content Browser（內容瀏覽器：專案所有模型、材質與音效的檔案總管）",
                                                  "Controller class（控制器：接收鍵盤滑鼠操作並對角色下達動作指令的核心類別）",
                                                  "Pawn class（Pawn 基礎類別：可被操控的基本實體）"
                                              ]
                      },
                      {
                          "id":  "h02_q8",
                          "chapterId":  "h02",
                          "qNum":  8,
                          "type":  "TF",
                          "question":  "Project folders can and should be moved while the Editor is running.",
                          "questionZh":  "當編輯器正在運行時，可以而且應該移動專案資料夾。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "False",
                          "correctIndex":  1,
                          "correctText":  "False",
                          "explanation":  "【UE 4.27 核心考點：專案管理禁忌】\n錯誤。編輯器運行期間嚴禁移動專案根目錄，否則會因檔案鎖定與路徑斷裂導致專案崩潰損壞。",
                          "keywords":  [
                                           {
                                               "term":  "Unreal Engine 4.27 核心架構",
                                               "role":  "遵循教材與引擎核心工作流規範"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "\u003cspan class=\"term-en\"\u003eProject folders\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（專案資料夾檔案）\u003c/span\u003e can and should be moved while the \u003cspan class=\"term-en\"\u003eEditor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（虛幻編輯器）\u003c/span\u003e is running.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h02_q9",
                          "chapterId":  "h02",
                          "qNum":  9,
                          "type":  "MC",
                          "question":  "The ____________ is the definition of the game, including things like the game rules and win conditions. It only exists on the server. It typically should not have much data that changes during play, and it definitely should not have transient data that clients need in the Level.",
                          "questionZh":  "____________ 是遊戲的整體定義，包含遊戲規則與勝負判定條件。它只存在於伺服器端，通常不應存放遊戲過程中頻繁變動的資料，且絕對不應存放客戶端關卡所需的瞬態資料。",
                          "options":  [
                                          "Controller class",
                                          "HUD class",
                                          "Game Instance class",
                                          "Game Mode class"
                                      ],
                          "optionsZh":  [
                                            "Controller class（控制器：接收鍵盤滑鼠操作並對角色下達動作指令的核心類別）",
                                            "HUD class（抬頭顯示介面：繪製玩家血量與計分等 2D 螢幕介面）",
                                            "Game Instance class（全域遊戲實例：換關卡時不會被銷毀、能跨關卡保存全域資料）",
                                            "Game Mode class（遊戲模式類別：僅存在於伺服器端的規則管理者）"
                                        ],
                          "rawAnswer":  "Game Mode class",
                          "correctIndex":  3,
                          "correctText":  "Game Mode class",
                          "explanation":  "【UE 4.27 核心考點：AGameModeBase 與伺服器權威架構】\nGame Mode 定義遊戲的核心規則、生成哪種 Pawn、勝負條件。在多人生存連線架構中，Game Mode 僅存在於 Dedicated Server 伺服器端，客戶端完全不會複製或實例化此類別以防外掛作弊。",
                          "keywords":  [
                                           {
                                               "term":  "Game Mode（遊戲模式類別）",
                                               "role":  "定義核心遊戲規則、勝負邏輯與生成角色，多人生存架構中僅運行於伺服器端"
                                           },
                                           {
                                               "term":  "Pawn（兵卒實體）",
                                               "role":  "在世界中可被 Controller（控制器）附身附著的實體角色或載具基礎類別"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "The ____________ is the definition of the game, including things like the game rules and win conditions."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "It only exists on the server."
                                           },
                                           {
                                               "partNum":  3,
                                               "en":  "It typically should not have much data that changes during play, and it definitely should not have transient data that clients need in the Level."
                                           }
                                       ],
                          "detailedQuestion":  "The ____________ is the definition of the game, including things like the game rules and win conditions. It only exists on the server. It typically should not have much data that changes during play, and it definitely should not have transient data that clients need in the \u003cspan class=\"term-en\"\u003eLevel\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（關卡場景）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "Controller class（控制器：接收鍵盤滑鼠操作並對角色下達動作指令的核心類別）",
                                                  "HUD class（抬頭顯示介面：繪製玩家血量與計分等 2D 螢幕介面）",
                                                  "Game Instance class（全域遊戲實例：換關卡時不會被銷毀、能跨關卡保存全域資料）",
                                                  "Game Mode class（遊戲模式類別：僅存在於伺服器端的規則管理者）"
                                              ]
                      },
                      {
                          "id":  "h02_q10",
                          "chapterId":  "h02",
                          "qNum":  10,
                          "type":  "MC",
                          "question":  "A ____________ is the interface between the Pawn and the human player controlling it. It decides what to do and then issues commands to the Pawn (for example, “start crouching,” “jump”).",
                          "questionZh":  "____________ 是 Pawn 與控制它的人類玩家之間的溝通介面。它負責決定要執行什麼行為，然後向 Pawn 發布指令（例如「開始蹲下」、「跳躍」）。",
                          "options":  [
                                          "Game Mode",
                                          "Player Controller",
                                          "Game State",
                                          "Player State"
                                      ],
                          "optionsZh":  [
                                            "Game Mode（遊戲模式規範：定義遊戲規則、勝負條件與預設生成角色的中央大腦）",
                                            "Player Controller（玩家控制器：負責處理真人玩家的按鍵輸入與鏡頭控制）",
                                            "Game State（遊戲全域狀態：記錄整場比賽進行時間、分數與對戰狀態）",
                                            "Player State（玩家個人狀態：儲存個別玩家的得分、血量與遊戲歷程資料）"
                                        ],
                          "rawAnswer":  "Player Controller",
                          "correctIndex":  1,
                          "correctText":  "Player Controller",
                          "explanation":  "【UE 4.27 核心考點：APlayerController 控制器】\nPlayer Controller 代表人類玩家的意志大腦，負責監聽硬體輸入（鍵盤、滑鼠、搖桿）並向被其附身（Possessed）的實體角色 Pawn 發送行為命令。",
                          "keywords":  [
                                           {
                                               "term":  "Game Mode（遊戲模式類別）",
                                               "role":  "定義核心遊戲規則、勝負邏輯與生成角色，多人生存架構中僅運行於伺服器端"
                                           },
                                           {
                                               "term":  "Player Controller（玩家控制器）",
                                               "role":  "代表人類玩家意志與大腦，接收硬體輸入訊號並指揮實體 Pawn 進行移動攻擊"
                                           },
                                           {
                                               "term":  "Pawn（兵卒實體）",
                                               "role":  "在世界中可被 Controller（控制器）附身附著的實體角色或載具基礎類別"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "A ____________ is the interface between the Pawn and the human player controlling it."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "It decides what to do and then issues commands to the Pawn (for example, “start crouching,” “jump”)."
                                           }
                                       ],
                          "detailedQuestion":  "A ____________ is the interface between the \u003cspan class=\"term-en\"\u003ePawn\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（受控實體）\u003c/span\u003e and the human player controlling it. It decides what to do and then issues commands to the \u003cspan class=\"term-en\"\u003ePawn\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（受控實體）\u003c/span\u003e (for example, “start crouching,” “jump”).",
                          "detailedOptions":  [
                                                  "Game Mode（遊戲模式規範：定義遊戲規則、勝負條件與預設生成角色的中央大腦）",
                                                  "Player Controller（玩家控制器：負責處理真人玩家的按鍵輸入與鏡頭控制）",
                                                  "Game State（遊戲全域狀態：記錄整場比賽進行時間、分數與對戰狀態）",
                                                  "Player State（玩家個人狀態：儲存個別玩家的得分、血量與遊戲歷程資料）"
                                              ]
                      },
                      {
                          "id":  "h03_q1",
                          "chapterId":  "h03",
                          "qNum":  1,
                          "type":  "MC",
                          "question":  "____________ is a method for indicating the positions of points on a two-dimensional (2D) surface or in three-dimensional (3D) space. A 3D plane uses x, y, and z coordinates. Each letter corresponds to an axis, where z is up and down, y is left to right, and x is front to back.",
                          "questionZh":  "____________ 是一種用於在二維（2D）表面或三維（3D）空間中標記點位置的方法。3D 平面使用 x、y 與 z 坐標。每個字母對應一個坐標軸：z 代表上下、y 代表左右、x 代表前後。",
                          "options":  [
                                          "Cartesian coordinate system",
                                          "Boolean operation",
                                          "Axis",
                                          "Pivot point"
                                      ],
                          "optionsZh":  [
                                            "Cartesian coordinate system（笛卡兒坐標系：以 XYZ 三軸標記空間中位置的直角坐標系）",
                                            "Boolean operation（布林運算：利用多邊形交集、聯集或相減來切削幾何體）",
                                            "Axis（坐標軸：指示 X 前後、Y 左右、Z 上下的參考軸向）",
                                            "Pivot point（軸心點：物體進行旋轉與縮放時所圍繞的幾何中心）"
                                        ],
                          "rawAnswer":  "Cartesian Coordinates System",
                          "correctIndex":  0,
                          "correctText":  "Cartesian coordinate system",
                          "explanation":  "【UE 4.27 核心考點：左手笛卡兒坐標系統】\n虛幻引擎採用左手笛卡兒坐標系（Left-Handed Cartesian Coordinate System）：X 軸指向前方（紅色）、Y 軸指向右側（綠色）、Z 軸指向垂直上方（藍色）。",
                          "keywords":  [
                                           {
                                               "term":  "笛卡兒坐標系統",
                                               "role":  "UE 採用左手坐標系：X 指向前方(紅)、Y 指向右方(綠)、Z 指向上方(藍)"
                                           },
                                           {
                                               "term":  "Pivot Point（軸心點）",
                                               "role":  "Actor 幾何原點，決定旋轉中心與縮放錨點基準"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "____________ is a method for indicating the positions of points on a two-dimensional (2D) surface or in three-dimensional (3D) space."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "A 3D plane uses x, y, and z coordinates."
                                           },
                                           {
                                               "partNum":  3,
                                               "en":  "Each letter corresponds to an axis, where z is up and down, y is left to right, and x is front to back."
                                           }
                                       ],
                          "detailedQuestion":  "____________ is a method for indicating the positions of points on a two-dimensional (2D) surface or in three-dimensional (3D) space. A 3D plane uses x, y, and z coordinates. Each letter corresponds to an axis, where z is up and down, y is left to right, and x is front to back.",
                          "detailedOptions":  [
                                                  "Cartesian coordinate system（笛卡兒坐標系：以 XYZ 三軸標記空間中位置的直角坐標系）",
                                                  "Boolean operation（布林運算：利用多邊形交集、聯集或相減來切削幾何體）",
                                                  "Axis（坐標軸：指示 X 前後、Y 左右、Z 上下的參考軸向）",
                                                  "Pivot point（軸心點：物體進行旋轉與縮放時所圍繞的幾何中心）"
                                              ]
                      },
                      {
                          "id":  "h03_q2",
                          "chapterId":  "h03",
                          "qNum":  2,
                          "type":  "TF",
                          "question":  "Transforms store the position, rotation, and scale of an Actor in 3D space.",
                          "questionZh":  "變換（Transforms）儲存了 Actor 在 3D 空間中的位置（Position）、旋轉（Rotation）與縮放（Scale）數值。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：Transform 空間變換結構】\n正確。在 3D 圖形與虛幻引擎中，Transform 結構由三個三維向量組成：Location（3D 空間坐標位移）、Rotation（歐拉角或四元數旋轉）、Scale（三軸縮放比率）。",
                          "keywords":  [
                                           {
                                               "term":  "Transform（空間變換）",
                                               "role":  "包含 Location（坐標位移）、Rotation（三軸旋轉角）與 Scale（三軸縮放比）"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "\u003cspan class=\"term-en\"\u003eTransforms\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（變換屬性：位移/旋轉/縮放）\u003c/span\u003e store the \u003cspan class=\"term-en\"\u003eposition\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（位置坐標）\u003c/span\u003e, \u003cspan class=\"term-en\"\u003erotation\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（旋轉角度）\u003c/span\u003e, and \u003cspan class=\"term-en\"\u003escale\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（縮放比例）\u003c/span\u003e of an \u003cspan class=\"term-en\"\u003eActor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（場景物件/Actor）\u003c/span\u003e in \u003cspan class=\"term-en\"\u003e3D space\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（3D 空間）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h03_q3",
                          "chapterId":  "h03",
                          "qNum":  3,
                          "type":  "MC",
                          "question":  "A ____________ is the local axis of an Actor.",
                          "questionZh":  "____________ 是 Actor 的局部幾何自身坐標軸心（Local Axis）。",
                          "options":  [
                                          "Cartesian coordinate system",
                                          "Pivot point",
                                          "Vertices",
                                          "Transform"
                                      ],
                          "optionsZh":  [
                                            "Cartesian coordinate system（笛卡兒坐標系：以 XYZ 三軸標記空間中位置的直角坐標系）",
                                            "Pivot point（軸心點：物體進行旋轉與縮放時所圍繞的幾何中心）",
                                            "Vertices（頂點：構成 3D 模型邊緣與面片的基本幾何點）",
                                            "Transform（空間變換：包含位置 Location、旋轉 Rotation 與縮放 Scale）"
                                        ],
                          "rawAnswer":  "Pivot Point",
                          "correctIndex":  1,
                          "correctText":  "Pivot point",
                          "explanation":  "【UE 4.27 核心考點：Pivot point 軸心點】\n軸心點（Pivot point）是物件旋轉與縮放的原點基準。在 DCC 軟體建模時距離世界原點 (0,0,0) 的距離，決定了匯入 UE4 之後模型的 Pivot 位置。",
                          "keywords":  [
                                           {
                                               "term":  "笛卡兒坐標系統",
                                               "role":  "UE 採用左手坐標系：X 指向前方(紅)、Y 指向右方(綠)、Z 指向上方(藍)"
                                           },
                                           {
                                               "term":  "Pivot Point（軸心點）",
                                               "role":  "Actor 幾何原點，決定旋轉中心與縮放錨點基準"
                                           },
                                           {
                                               "term":  "Transform（空間變換）",
                                               "role":  "包含 Location（坐標位移）、Rotation（三軸旋轉角）與 Scale（三軸縮放比）"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "A ____________ is the local axis of an \u003cspan class=\"term-en\"\u003eActor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（場景物件/Actor）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "Cartesian coordinate system（笛卡兒坐標系：以 XYZ 三軸標記空間中位置的直角坐標系）",
                                                  "Pivot point（軸心點：物體進行旋轉與縮放時所圍繞的幾何中心）",
                                                  "Vertices（頂點：構成 3D 模型邊緣與面片的基本幾何點）",
                                                  "Transform（空間變換：包含位置 Location、旋轉 Rotation 與縮放 Scale）"
                                              ]
                      },
                      {
                          "id":  "h03_q4",
                          "chapterId":  "h03",
                          "qNum":  4,
                          "type":  "TF",
                          "question":  "1 Unreal unit (uu) is equal to 1 centimeter.",
                          "questionZh":  "1 個虛幻單位（Unreal unit, uu）等於 1 公分（centimeter）。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：虛幻度量衡】\n正確。虛幻引擎全系統預設度量衡為公制公分：1 Unreal Unit (UU) = 1 cm。100 UU = 1 公尺。",
                          "keywords":  [
                                           {
                                               "term":  "Unreal Engine 4.27 核心架構",
                                               "role":  "遵循教材與引擎核心工作流規範"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "1 \u003cspan class=\"term-en\"\u003eUnreal unit\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（虛幻長度單位：1uu=1cm）\u003c/span\u003e (uu) is equal to 1 \u003cspan class=\"term-en\"\u003ecentimeter\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（公分）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h03_q5",
                          "chapterId":  "h03",
                          "qNum":  5,
                          "type":  "MC",
                          "question":  "____________ creates a parent-child relationship between two or more Actors where the child Actor’s transforms become relative to the parent’s transforms by default.",
                          "questionZh":  "____________ 可以在兩個或多個 Actor 之間建立父子關係（Parent-Child Relationship），使子 Actor 的變換預設相對於父 Actor 的變換進行計算。",
                          "options":  [
                                          "Combining",
                                          "Layering",
                                          "Grouping",
                                          "Attaching"
                                      ],
                          "optionsZh":  [
                                            "Combining（幾何合併：將多個模型拼合成單一整體）",
                                            "Layering（分層處理）",
                                            "Grouping（臨時群組：將多個物件暫時編組以利批次選取移動）",
                                            "Attaching（附著掛載）"
                                        ],
                          "rawAnswer":  "Attaching",
                          "correctIndex":  3,
                          "correctText":  "Attaching",
                          "explanation":  "【UE 4.27 核心考點：Attaching 父子階層】\nAttaching 是建立父子階層變換鏈（Hierarchy），子 Actor 的世界變換矩陣受父級變換驅動，常用於武器裝備到角色插槽（Socket）。",
                          "keywords":  [
                                           {
                                               "term":  "Transform（空間變換）",
                                               "role":  "包含 Location（坐標位移）、Rotation（三軸旋轉角）與 Scale（三軸縮放比）"
                                           },
                                           {
                                               "term":  "Attaching（附加）",
                                               "role":  "建立父子階層鏈（Parent-Child），子物件自動繼承並跟隨父級的世界坐標變換"
                                           },
                                           {
                                               "term":  "Socket（插槽）",
                                               "role":  "網格模型上的指定附著點，供武器、裝飾帽子或光效精準對齊吸附"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "____________ creates a \u003cspan class=\"term-en\"\u003eparent-child relationship\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（父子階層關聯）\u003c/span\u003e between two or more \u003cspan class=\"term-en\"\u003eActors\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（場景物件/Actor）\u003c/span\u003e where the child \u003cspan class=\"term-en\"\u003eActor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（場景物件/Actor）\u003c/span\u003e’s \u003cspan class=\"term-en\"\u003etransforms\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（變換屬性）\u003c/span\u003e become relative to the parent’s \u003cspan class=\"term-en\"\u003etransforms\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（變換屬性）\u003c/span\u003e by default.",
                          "detailedOptions":  [
                                                  "Combining（幾何合併：將多個模型拼合成單一整體）",
                                                  "Layering（分層處理）",
                                                  "Grouping（臨時群組：將多個物件暫時編組以利批次選取移動）",
                                                  "Attaching（附著掛載）"
                                              ]
                      },
                      {
                          "id":  "h03_q6",
                          "chapterId":  "h03",
                          "qNum":  6,
                          "type":  "TF",
                          "question":  "Uniform scale means x, y, x scale transforms are scaled proportionally to one another.",
                          "questionZh":  "等比例縮放（Uniform scale）代表 X、Y、Z 軸的三個縮放變換數值相互成比例同步縮放。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：Uniform Scale 等比縮放】\n正確。等比例縮放保持模型的長寬高長寬比固定不變，避免網格產生非等比拉伸畸變。",
                          "keywords":  [
                                           {
                                               "term":  "Transform（空間變換）",
                                               "role":  "包含 Location（坐標位移）、Rotation（三軸旋轉角）與 Scale（三軸縮放比）"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "\u003cspan class=\"term-en\"\u003eUniform scale\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（等比例縮放）\u003c/span\u003e means x, y, x \u003cspan class=\"term-en\"\u003escale\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（縮放比例）\u003c/span\u003e \u003cspan class=\"term-en\"\u003etransforms\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（變換屬性）\u003c/span\u003e are scaled proportionally to one another.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h03_q7",
                          "chapterId":  "h03",
                          "qNum":  7,
                          "type":  "MC",
                          "question":  "If you want to attach two Actors to create a parent-child relationship, this can be done in the ____________.",
                          "questionZh":  "如果你想要將兩個 Actor 進行附加以建立父子階層關係，可以在 ____________ 中操作完成。",
                          "options":  [
                                          "World Outliner",
                                          "Details panel",
                                          "Content Browser",
                                          "Modes panel"
                                      ],
                          "optionsZh":  [
                                            "World Outliner（世界大綱：當前關卡中所有物件的清單總表）",
                                            "Details panel（細節屬性面板：調整所選物件的參數與組件）",
                                            "Content Browser（內容瀏覽器：專案所有模型、材質與音效的檔案總管）",
                                            "Modes panel（模式面板：放置常用物件與地貌植被工具）"
                                        ],
                          "rawAnswer":  "World Outliner",
                          "correctIndex":  0,
                          "correctText":  "World Outliner",
                          "explanation":  "【UE 4.27 核心考點：世界大綱中的拖曳附加】\n在 World Outliner 中，直接將一個 Actor 拖曳並放置到另一個 Actor 上方，即可快速將其附加（Attach）為子物件，建立父子階層關係。",
                          "keywords":  [
                                           {
                                               "term":  "Details Panel（細節面板）",
                                               "role":  "檢視並修改當前選取 Actor 的所有變換坐標、材質槽與組件屬性"
                                           },
                                           {
                                               "term":  "World Outliner（世界大綱）",
                                               "role":  "場景總管清單樹，以樹狀結構列出關卡內的所有實例化 Actor 物件"
                                           },
                                           {
                                               "term":  "Modes Panel（模式面板）",
                                               "role":  "提供放置幾何筆刷、地貌雕刻（Landscape）與植被繪製（Foliage）的核心面板"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "If you want to attach two \u003cspan class=\"term-en\"\u003eActors\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（場景物件/Actor）\u003c/span\u003e to create a \u003cspan class=\"term-en\"\u003eparent-child relationship\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（父子階層關聯）\u003c/span\u003e, this can be done in the ____________.",
                          "detailedOptions":  [
                                                  "World Outliner（世界大綱：當前關卡中所有物件的清單總表）",
                                                  "Details panel（細節屬性面板：調整所選物件的參數與組件）",
                                                  "Content Browser（內容瀏覽器：專案所有模型、材質與音效的檔案總管）",
                                                  "Modes panel（模式面板：放置常用物件與地貌植被工具）"
                                              ]
                      },
                      {
                          "id":  "h03_q8",
                          "chapterId":  "h03",
                          "qNum":  8,
                          "type":  "TF",
                          "question":  "It is possible to set the Move transform to “Relative” and the Rotation transform to ”World” (absolute).",
                          "questionZh":  "在變換設定中，可以將移動變換（Move transform）設定為「相對（Relative）」，而將旋轉變換（Rotation transform）設定為「世界絕對（World）」。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：組件變換空間獨立性】\n正確。在 Details 面板中，每個組件的 Location、Rotation 與 Scale 旁邊的小下拉箭頭都可以單獨切換為 Relative（相對於父級）或 World（相對於世界原點）。",
                          "keywords":  [
                                           {
                                               "term":  "Details Panel（細節面板）",
                                               "role":  "檢視並修改當前選取 Actor 的所有變換坐標、材質槽與組件屬性"
                                           },
                                           {
                                               "term":  "Transform（空間變換）",
                                               "role":  "包含 Location（坐標位移）、Rotation（三軸旋轉角）與 Scale（三軸縮放比）"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "It is possible to set the \u003cspan class=\"term-en\"\u003eMove transform\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（移動變換）\u003c/span\u003e to “Relative” and the \u003cspan class=\"term-en\"\u003eRotation transform\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（旋轉變換）\u003c/span\u003e to ”World” (absolute).",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h03_q9",
                          "chapterId":  "h03",
                          "qNum":  9,
                          "type":  "MC",
                          "question":  "If a collection of Actors are assigned to a ____________ in the World Outliner, you can easily change all the Actors’ visibility.",
                          "questionZh":  "如果在世界大綱中將一組 Actor 指派給特定的 ____________，你可以輕鬆批次切換這些 Actor 的整體可見度。",
                          "options":  [
                                          "Parent",
                                          "Layer",
                                          "“Static” Mobility setting",
                                          "Teapot"
                                      ],
                          "optionsZh":  [
                                            "Parent（父物件：階層架構中的主導者）",
                                            "Layer（圖層管理）",
                                            "“Static” Mobility setting（「靜態」可移動性：位置固定，用於預先烘焙光影以極大化效能）",
                                            "Teapot（經典茶壺模型）"
                                        ],
                          "rawAnswer":  "Layer",
                          "correctIndex":  1,
                          "correctText":  "Layer",
                          "explanation":  "【UE 4.27 核心考點：圖層與資料夾可見度控制】\n在 World Outliner 中指派給圖層（Layer）或資料夾，點擊小眼睛圖示即可批次隱藏或顯示整組物件。",
                          "keywords":  [
                                           {
                                               "term":  "World Outliner（世界大綱）",
                                               "role":  "場景總管清單樹，以樹狀結構列出關卡內的所有實例化 Actor 物件"
                                           },
                                           {
                                               "term":  "Mobility（移動性）",
                                               "role":  "Static(靜態烘焙)、Stationary(固定位置動態光強)、Movable(完全動態即時物理)"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "If a collection of \u003cspan class=\"term-en\"\u003eActors\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（場景物件/Actor）\u003c/span\u003e are assigned to a ____________ in the \u003cspan class=\"term-en\"\u003eWorld Outliner\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（世界大綱/場景物件清單）\u003c/span\u003e, you can easily change all the \u003cspan class=\"term-en\"\u003eActors\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（場景物件/Actor）\u003c/span\u003e’ \u003cspan class=\"term-en\"\u003evisibility\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（可見度）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "Parent（父物件：階層架構中的主導者）",
                                                  "Layer（圖層管理）",
                                                  "“Static” Mobility setting（「靜態」可移動性：位置固定，用於預先烘焙光影以極大化效能）",
                                                  "Teapot（經典茶壺模型）"
                                              ]
                      },
                      {
                          "id":  "h03_q10",
                          "chapterId":  "h03",
                          "qNum":  10,
                          "type":  "MC",
                          "question":  "You can use the ____________ to organize all aspects of a scene into one easy-to-read menu. By default, it appears in the top-right corner of the screen when you open a project.",
                          "questionZh":  "你可以使用 ____________ 將場景中的所有物件層面組織成一個清晰易讀的選單。預設情況下，當你開啟專案時它會顯示在畫面右上角。",
                          "options":  [
                                          "Modes panel",
                                          "World Outliner panel",
                                          "Content Browser",
                                          "Static Mesh Editor"
                                      ],
                          "optionsZh":  [
                                            "Modes panel（模式面板：放置常用物件與地貌植被工具）",
                                            "World Outliner panel（世界大綱面板：場景中所有物件的清單總表）",
                                            "Content Browser（內容瀏覽器：專案所有模型、材質與音效的檔案總管）",
                                            "Static Mesh Editor（靜態網格編輯器：設定模型外形、碰撞體與材質槽）"
                                        ],
                          "rawAnswer":  "World Outliner",
                          "correctIndex":  1,
                          "correctText":  "World Outliner panel",
                          "explanation":  "【UE 4.27 核心考點：World Outliner 世界大綱面板】\n位於編輯器預設介面右上角，專門用來檢視並檢索當前關卡中所有實例化 Actor 的階層清單。",
                          "keywords":  [
                                           {
                                               "term":  "World Outliner（世界大綱）",
                                               "role":  "場景總管清單樹，以樹狀結構列出關卡內的所有實例化 Actor 物件"
                                           },
                                           {
                                               "term":  "Modes Panel（模式面板）",
                                               "role":  "提供放置幾何筆刷、地貌雕刻（Landscape）與植被繪製（Foliage）的核心面板"
                                           },
                                           {
                                               "term":  "Static Mesh（靜態網格）",
                                               "role":  "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "You can use the ____________ to organize all aspects of a scene into one easy-to-read menu."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "By default, it appears in the top-right corner of the screen when you open a project."
                                           }
                                       ],
                          "detailedQuestion":  "You can use the ____________ to organize all aspects of a scene into one easy-to-read menu. By default, it appears in the top-right corner of the screen when you open a project.",
                          "detailedOptions":  [
                                                  "Modes panel（模式面板：放置常用物件與地貌植被工具）",
                                                  "World Outliner panel（世界大綱面板：場景中所有物件的清單總表）",
                                                  "Content Browser（內容瀏覽器：專案所有模型、材質與音效的檔案總管）",
                                                  "Static Mesh Editor（靜態網格編輯器：設定模型外形、碰撞體與材質槽）"
                                              ]
                      },
                      {
                          "id":  "h04_q1",
                          "chapterId":  "h04",
                          "qNum":  1,
                          "type":  "MC",
                          "question":  "The ____________ in UE4 allows you to modify and set the default preferences for Static Mesh assets.",
                          "questionZh":  "UE4 中的 ____________ 允許你修改並設定靜態網格資產（Static Mesh assets）的預設偏好設定。",
                          "options":  [
                                          "Destructible Editor",
                                          "Blueprint Editor",
                                          "Material Editor",
                                          "Static Mesh Editor"
                                      ],
                          "optionsZh":  [
                                            "Destructible Editor（可破壞網格編輯器：製作受撞擊碎裂的剛體模型）",
                                            "Blueprint Editor（藍圖編輯器：視覺化編寫遊戲邏輯圖表）",
                                            "Material Editor（材質編輯器：節點式設定物體表面質感與著色效果）",
                                            "Static Mesh Editor（靜態網格編輯器：設定模型外形、碰撞體與材質槽）"
                                        ],
                          "rawAnswer":  "Static Mesh Editor",
                          "correctIndex":  3,
                          "correctText":  "Static Mesh Editor",
                          "explanation":  "【UE 4.27 核心考點：Static Mesh Editor 靜態網格編輯器】\n在內容瀏覽器中雙擊 Static Mesh 資產即可開啟，可在此調整 LOD 距離、UV 展開通道、光照貼圖解析度、設定簡單碰撞體與指派預設材質槽。",
                          "keywords":  [
                                           {
                                               "term":  "Reference Viewer（引用檢視器）",
                                               "role":  "以可視化節點圖展示資產與資產之間的雙向依賴引用關係樹"
                                           },
                                           {
                                               "term":  "Static Mesh（靜態網格）",
                                               "role":  "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
                                           },
                                           {
                                               "term":  "Material（材質系統）",
                                               "role":  "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The ____________ in UE4 allows you to \u003cspan class=\"term-en\"\u003emodify\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（修改/調整）\u003c/span\u003e and set the default preferences for \u003cspan class=\"term-en\"\u003eStatic Mesh\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（靜態網格 3D 模型）\u003c/span\u003e assets.",
                          "detailedOptions":  [
                                                  "Destructible Editor（可破壞網格編輯器：製作受撞擊碎裂的剛體模型）",
                                                  "Blueprint Editor（藍圖編輯器：視覺化編寫遊戲邏輯圖表）",
                                                  "Material Editor（材質編輯器：節點式設定物體表面質感與著色效果）",
                                                  "Static Mesh Editor（靜態網格編輯器：設定模型外形、碰撞體與材質槽）"
                                              ]
                      },
                      {
                          "id":  "h04_q2",
                          "chapterId":  "h04",
                          "qNum":  2,
                          "type":  "TF",
                          "question":  "Once a Static Mesh asset has been placed in a Level, it is referred to as a Static Mesh Actor.",
                          "questionZh":  "靜態網格資產一旦被放置在關卡中，就被稱為靜態網格 Actor（Static Mesh Actor）。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：資產 vs Actor 實例】\n正確。資產（Asset）是指存放在 Content 資料夾中的靜態資料檔案；當將其拖入關卡工作視窗（Level Viewport）後，便實例化為一個具備空間坐標變換的 Static Mesh Actor。",
                          "keywords":  [
                                           {
                                               "term":  "Static Mesh（靜態網格）",
                                               "role":  "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "Once a \u003cspan class=\"term-en\"\u003eStatic Mesh\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（靜態網格 3D 模型）\u003c/span\u003e asset has been placed in a \u003cspan class=\"term-en\"\u003eLevel\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（關卡場景）\u003c/span\u003e, it is referred to as a \u003cspan class=\"term-en\"\u003eStatic Mesh Actor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（靜態網格物件）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h04_q3",
                          "chapterId":  "h04",
                          "qNum":  3,
                          "type":  "TF",
                          "question":  "If you are unable to assign a collision preset to a Static Mesh Actor, it is most likely because the Static Mesh asset does not have a collision hull.",
                          "questionZh":  "如果你無法為 Static Mesh Actor 指派碰撞預設（Collision preset），最可能的原因是該靜態網格資產本身尚未建立碰撞外框（Collision hull）。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：缺少碰撞體的後果】\n正確。如果原始靜態網格資產完全沒有簡單碰撞幾何體（Simple Collision），無論在關卡中如何設定碰撞通道，都不會產生阻擋效果。",
                          "keywords":  [
                                           {
                                               "term":  "Collision（碰撞體系）",
                                               "role":  "阻止角色與物件穿透，並能觸發物理阻擋（Block）或重疊事件（Overlap）"
                                           },
                                           {
                                               "term":  "Static Mesh（靜態網格）",
                                               "role":  "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "If you are unable to assign a \u003cspan class=\"term-en\"\u003ecollision\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（物理碰撞）\u003c/span\u003e preset to a \u003cspan class=\"term-en\"\u003eStatic Mesh Actor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（靜態網格物件）\u003c/span\u003e, it is most likely because the \u003cspan class=\"term-en\"\u003eStatic Mesh\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（靜態網格 3D 模型）\u003c/span\u003e asset does not have a \u003cspan class=\"term-en\"\u003ecollision hull\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（物理碰撞外框/範圍）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h04_q4",
                          "chapterId":  "h04",
                          "qNum":  4,
                          "type":  "MC",
                          "question":  "If you want a Static Mesh Actor to be lit in real time, you should change its Mobility setting to ____________.",
                          "questionZh":  "如果你想要讓一個靜態網格 Actor 能受到即時動態光照（Lit in real time），你應該將它的可移動性（Mobility）設定變更為 ____________。",
                          "options":  [
                                          "Hidden",
                                          "Static",
                                          "Movable",
                                          "Transform"
                                      ],
                          "optionsZh":  [
                                            "Hidden（隱藏不顯示）",
                                            "Static（靜態：位置固定，用於預先烘焙光照貼圖以極大化效能）",
                                            "Movable（可移動：可在遊戲中移動並接收即時動態光照）",
                                            "Transform（空間變換：包含位置 Location、旋轉 Rotation 與縮放 Scale）"
                                        ],
                          "rawAnswer":  "Movable",
                          "correctIndex":  2,
                          "correctText":  "Movable",
                          "explanation":  "【UE 4.27 核心考點：Static Mesh 即時動態光照】\n正確。若要讓 Static Mesh Actor 能夠受到即時動態光照（例如動態陰影、即時變更顏色或移動），必須將其 Mobility（可移動性）設定為「Movable（可移動）」。Static 物件只能接收預先烘焙的靜態光照貼圖。",
                          "keywords":  [
                                           {
                                               "term":  "Mobility（可移動性）",
                                               "role":  "Static（靜態烘焙）、Stationary（固定位置動態光強）、Movable（完全動態即時光照與物理）"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "If you want a \u003cspan class=\"term-en\"\u003eStatic Mesh Actor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（靜態網格物件）\u003c/span\u003e to be lit in real time, you should change its \u003cspan class=\"term-en\"\u003eMobility setting\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（移動性設定）\u003c/span\u003e to ____________.",
                          "detailedOptions":  [
                                                  "Hidden（隱藏不顯示）",
                                                  "Static（靜態：位置固定，用於預先烘焙光照貼圖以極大化效能）",
                                                  "Movable（可移動：可在遊戲中移動並接收即時動態光照）",
                                                  "Transform（空間變換：包含位置 Location、旋轉 Rotation 與縮放 Scale）"
                                              ]
                      },
                      {
                          "id":  "h04_q5",
                          "chapterId":  "h04",
                          "qNum":  5,
                          "type":  "MC",
                          "question":  "The three collision response types are ____________.",
                          "questionZh":  "三種碰撞回應（Collision responses）類型分別是 ____________。",
                          "options":  [
                                          "Bounce, Hit, and Intersection",
                                          "Ignore, Overlap, and Block",
                                          "Ignore, Intersection, and Touch",
                                          "Block, Touch, and, Overlap"
                                      ],
                          "optionsZh":  [
                                            "Bounce, Hit, and Intersection（反彈、擊中與幾何相交）",
                                            "Ignore, Overlap, and Block（忽略、重疊與阻擋：三種標準物理碰撞回應）",
                                            "Ignore, Intersection, and Touch（忽略、幾何相交與接觸碰觸）",
                                            "Block, Touch, and, Overlap（阻擋、接觸碰觸與區域重疊）"
                                        ],
                          "rawAnswer":  "Ignore, Overlap, and Block",
                          "correctIndex":  1,
                          "correctText":  "Ignore, Overlap, and Block",
                          "explanation":  "【UE 4.27 核心考點：碰撞回應三態】\n- Ignore：完全穿透無事件。\n- Overlap：穿透但發出重疊事件（觸發器）。\n- Block：物理實體阻擋並發出 Hit 擊中事件。",
                          "keywords":  [
                                           {
                                               "term":  "Collision（碰撞體系）",
                                               "role":  "阻止角色與物件穿透，並能觸發物理阻擋（Block）或重疊事件（Overlap）"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The three \u003cspan class=\"term-en\"\u003ecollision\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（物理碰撞）\u003c/span\u003e response types are ____________.",
                          "detailedOptions":  [
                                                  "Bounce, Hit, and Intersection（反彈、擊中與幾何相交）",
                                                  "Ignore, Overlap, and Block（忽略、重疊與阻擋：三種標準物理碰撞回應）",
                                                  "Ignore, Intersection, and Touch（忽略、幾何相交與接觸碰觸）",
                                                  "Block, Touch, and, Overlap（阻擋、接觸碰觸與區域重疊）"
                                              ]
                      },
                      {
                          "id":  "h04_q6",
                          "chapterId":  "h04",
                          "qNum":  6,
                          "type":  "TF",
                          "question":  "By default, lightmap UV channels are stored in UV Channel 2.",
                          "questionZh":  "在預設情況下，光照貼圖 UV 通道（Lightmap UV channels）儲存在 UV 通道 2（UV Channel 2）中。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "False",
                          "correctIndex":  1,
                          "correctText":  "False",
                          "explanation":  "【UE 4.27 核心考點：光照貼圖 UV 通道索引】\n錯誤。在 UE4 內部與圖形學中，UV 通道是以 0 為起始索引（0-indexed）。預設情況下，材質貼圖使用 UV Channel 0，而光照貼圖（Lightmap UV）則儲存在 UV Channel 1（即第二個 UV 通道），而非 Channel 2。",
                          "keywords":  [
                                           {
                                               "term":  "Lightmap UV（光照貼圖 UV）",
                                               "role":  "通常儲存於 UV Channel 1，要求面片無重疊且具備足夠邊界間距 Padding"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "By default, lightmap \u003cspan class=\"term-en\"\u003eUV channels\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（UV 貼圖通道）\u003c/span\u003e are stored in UV Channel 2.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h04_q7",
                          "chapterId":  "h04",
                          "qNum":  7,
                          "type":  "MC",
                          "question":  "The two common file types used to import 3D models into the Editor are ____________.",
                          "questionZh":  "用來將 3D 模型匯入編輯器的兩種常見檔案類型是 ____________。",
                          "options":  [
                                          ".pdf and .fbx",
                                          ".fbx and .obj",
                                          ".obj and .3ds",
                                          ".stl and .obj"
                                      ],
                          "optionsZh":  [
                                            ".pdf and .fbx（PDF 文件與 FBX 模型）",
                                            ".fbx and .obj（FBX 與 OBJ：最常用的標準 3D 模型匯入格式）",
                                            ".obj and .3ds（OBJ 與 3DS 模型格式）",
                                            ".stl and .obj（STL 與 OBJ 格式）"
                                        ],
                          "rawAnswer":  ".fbx and .obj",
                          "correctIndex":  1,
                          "correctText":  ".fbx and .obj",
                          "explanation":  "【UE 4.27 核心考點：3D 模型匯入格式】\n正確。將 3D 模型匯入 UE4 編輯器最常用的兩種標準通用格式為 Autodesk .fbx 與 Wavefront .obj。.fbx 支援幾何體、材質槽、動畫與碰撞體；.obj 則為通用靜態網格格式。",
                          "keywords":  [
                                           {
                                               "term":  "FBX / OBJ 匯入格式",
                                               "role":  "UE4 靜態網格與骨架模型標準通用交換格式"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The two common file types used to import 3D models into the \u003cspan class=\"term-en\"\u003eEditor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（虛幻編輯器）\u003c/span\u003e are ____________.",
                          "detailedOptions":  [
                                                  ".pdf and .fbx（PDF 文件與 FBX 模型）",
                                                  ".fbx and .obj（FBX 與 OBJ：最常用的標準 3D 模型匯入格式）",
                                                  ".obj and .3ds（OBJ 與 3DS 模型格式）",
                                                  ".stl and .obj（STL 與 OBJ 格式）"
                                              ]
                      },
                      {
                          "id":  "h04_q8",
                          "chapterId":  "h04",
                          "qNum":  8,
                          "type":  "TF",
                          "question":  "It is possible to change the Static Mesh asset that a Static Mesh Actor references.",
                          "questionZh":  "變更一個 Static Mesh Actor 所參照引用的靜態網格資產（Static Mesh asset）是可行的操作。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：更換 Static Mesh Actor 參照資產】\n正確。在關卡工作視窗選取 Static Mesh Actor 後，可在 Details（細節）面板中的 Static Mesh 屬性欄位中，隨時將其參照的靜態網格資產更換為 Content Browser 中的其他模型。",
                          "keywords":  [
                                           {
                                               "term":  "Static Mesh Actor 參照資產",
                                               "role":  "可在 Details 面板隨時替換所參照的靜態網格資產"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "It is possible to change the \u003cspan class=\"term-en\"\u003eStatic Mesh\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（靜態網格 3D 模型）\u003c/span\u003e asset that a \u003cspan class=\"term-en\"\u003eStatic Mesh Actor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（靜態網格物件）\u003c/span\u003e references.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h04_q9",
                          "chapterId":  "h04",
                          "qNum":  9,
                          "type":  "TF",
                          "question":  "You can create multiple collision hulls on a single Static Mesh asset.",
                          "questionZh":  "你可以在單一靜態網格資產（Static Mesh asset）上建立多個碰撞外框（Collision hulls）。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：多重碰撞外框】\n正確。在靜態網格編輯器中，你可以為單一靜態網格資產組合新增多個盒體（Box）、球體（Sphere）或膠囊體（Capsule）簡易碰撞外框，以精準貼合複雜外形並維持極佳的物理運算效能。",
                          "keywords":  [
                                           {
                                               "term":  "Multiple Collision Hulls（多重碰撞外框）",
                                               "role":  "在單一資產上組合多個簡單碰撞體以擬合複雜幾何輪廓"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "You can create \u003cspan class=\"term-en\"\u003emultiple\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（多個/多重）\u003c/span\u003e \u003cspan class=\"term-en\"\u003ecollision hulls\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（物理碰撞外框）\u003c/span\u003e on a single \u003cspan class=\"term-en\"\u003eStatic Mesh\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（靜態網格 3D 模型）\u003c/span\u003e asset.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h04_q10",
                          "chapterId":  "h04",
                          "qNum":  10,
                          "type":  "MC",
                          "question":  "You press ____________ to toggle collision hull visibility on and off in the Level Editor Viewport.",
                          "questionZh":  "在關卡編輯器工作視窗中，你可以按下 ____________ 來切換開啟或關閉碰撞外框（Collision hull）的可見度。",
                          "options":  [
                                          "Atl+C",
                                          "Atl+H",
                                          "Ctrl+Alt+C",
                                          "Shift+H"
                                      ],
                          "optionsZh":  [
                                            "Atl+C（Alt+C：切換開啟/隱藏關卡工作視窗碰撞外框線條的快捷鍵）",
                                            "Atl+H（無效快捷鍵組合）",
                                            "Ctrl+Alt+C（無效快捷鍵組合）",
                                            "Shift+H（無效快捷鍵組合）"
                                        ],
                          "rawAnswer":  "Atl+C",
                          "correctIndex":  0,
                          "correctText":  "Atl+C",
                          "explanation":  "【UE 4.27 核心考點：關卡工作視窗碰撞快捷鍵】\n在關卡工作視窗中按下 Alt + C（原官方答案文件筆誤印刷為 Atl+C）可快速開啟或隱藏關卡中所有 Actor 的碰撞外框（Collision Visualization）。",
                          "keywords":  [
                                           {
                                               "term":  "Collision（碰撞體系）",
                                               "role":  "阻止角色與物件穿透，並能觸發物理阻擋（Block）或重疊事件（Overlap）"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "You press ____________ to toggle \u003cspan class=\"term-en\"\u003ecollision hull\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（物理碰撞外框/範圍）\u003c/span\u003e \u003cspan class=\"term-en\"\u003evisibility\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（可見度）\u003c/span\u003e on and off in the \u003cspan class=\"term-en\"\u003eLevel\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（關卡場景）\u003c/span\u003e \u003cspan class=\"term-en\"\u003eEditor Viewport\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（編輯器場景視窗）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "Atl+C（Alt+C：切換開啟/隱藏關卡工作視窗碰撞外框線條的快捷鍵）",
                                                  "Atl+H（無效快捷鍵組合）",
                                                  "Ctrl+Alt+C（無效快捷鍵組合）",
                                                  "Shift+H（無效快捷鍵組合）"
                                              ]
                      },
                      {
                          "id":  "h05_q1",
                          "chapterId":  "h05",
                          "qNum":  1,
                          "type":  "MC",
                          "question":  "____________ is UE4’s offline global illumination rendering engine and is used to calculating lighting for Light and Static Mesh Actors with a Mobility setting of “Static”.",
                          "questionZh":  "____________ 是 UE4 的離線全局光照渲染引擎，用於為可移動性設定為「Static（靜態）」的光源與靜態網格 Actor 計算光照。",
                          "options":  [
                                          "Lightmass",
                                          "Renderman",
                                          "Mental Ray",
                                          "Raytrace"
                                      ],
                          "optionsZh":  [
                                            "Lightmass（Lightmass 烘焙系統：預先計算漫反射光影並寫入貼圖，效能極高）",
                                            "Renderman（Pixar RenderMan：電影級離線擬真渲染器）",
                                            "Mental Ray（Mental Ray：傳統光線追蹤渲染器）",
                                            "Raytrace（即時光線追蹤技術）"
                                        ],
                          "rawAnswer":  "Lightmass",
                          "correctIndex":  0,
                          "correctText":  "Lightmass",
                          "explanation":  "【UE 4.27 核心考點：Lightmass 光照烘焙系統】\nLightmass 是 UE4 核心靜態全域光照計算器，能預先計算漫反射光線多次反彈，將柔和陰影與環境光遮蔽烘焙到靜態光照貼圖（Lightmaps）中。",
                          "keywords":  [
                                           {
                                               "term":  "Static Mesh（靜態網格）",
                                               "role":  "不可骨骼蒙皮形變的剛性 3D 幾何模型，渲染開銷極低且能參與靜態光照烘焙"
                                           },
                                           {
                                               "term":  "Mobility（移動性）",
                                               "role":  "Static(靜態烘焙)、Stationary(固定位置動態光強)、Movable(完全動態即時物理)"
                                           },
                                           {
                                               "term":  "Lightmass（光照烘焙系統）",
                                               "role":  "離線預先計算光線多次反彈，將柔和漫反射陰影寫入光照貼圖（Lightmaps）"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "____________ is UE4’s offline global \u003cspan class=\"term-en\"\u003eillumination\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（全局光照）\u003c/span\u003e rendering \u003cspan class=\"term-en\"\u003eengine\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（渲染引擎）\u003c/span\u003e and is used to \u003cspan class=\"term-en\"\u003ecalculating\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（計算/運算）\u003c/span\u003e lighting for Light and \u003cspan class=\"term-en\"\u003eStatic Mesh Actors\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（靜態網格物件）\u003c/span\u003e with a \u003cspan class=\"term-en\"\u003eMobility setting\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（移動性設定）\u003c/span\u003e of “Static”.",
                          "detailedOptions":  [
                                                  "Lightmass（Lightmass 烘焙系統：預先計算漫反射光影並寫入貼圖，效能極高）",
                                                  "Renderman（Pixar RenderMan：電影級離線擬真渲染器）",
                                                  "Mental Ray（Mental Ray：傳統光線追蹤渲染器）",
                                                  "Raytrace（即時光線追蹤技術）"
                                              ]
                      },
                      {
                          "id":  "h05_q2",
                          "chapterId":  "h05",
                          "qNum":  2,
                          "type":  "TF",
                          "question":  "Sky Light Actors do not cast dynamic shadows.",
                          "questionZh":  "天空光照 Actor（Sky Light Actors）不會投射動態即時陰影。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：天空光動態陰影】\n錯誤。當 Sky Light 的可移動性設定為 Movable 或 Stationary 時，可開啟距離場環境遮擋（Distance Field Ambient Occlusion, DFAO）來產生即時的動態環境陰影。",
                          "keywords":  [
                                           {
                                               "term":  "Sky Light（天空光照）",
                                               "role":  "捕捉遠景天光，當設定為 Movable 時可產生 DFAO 動態環境陰影"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "\u003cspan class=\"term-en\"\u003eSky Light\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（天空光：環境全域補光）\u003c/span\u003e \u003cspan class=\"term-en\"\u003eActors\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（場景物件/Actor）\u003c/span\u003e do not cast \u003cspan class=\"term-en\"\u003edynamic\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（動態即時）\u003c/span\u003e shadows.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h05_q3",
                          "chapterId":  "h05",
                          "qNum":  3,
                          "type":  "MC",
                          "question":  "A ____________ works much like a real-world lightbulb, emitting light equally in all directions from a single point in space.",
                          "questionZh":  "____________ 運作方式非常類似於現實中的燈泡，從空間中的單一點向所有方向均勻發射光線。",
                          "options":  [
                                          "Directional Light",
                                          "Sky Light",
                                          "Point Light",
                                          "Spot Light"
                                      ],
                          "optionsZh":  [
                                            "Directional Light（定向光源：模擬太陽光，全場景平行的遠距直射光源）",
                                            "Sky Light（天空光照：捕捉遠方天際色彩，為戶外提供柔和的環境天光漫反射）",
                                            "Point Light（點光源：模擬燈泡，向四面八方 360 度均勻發光）",
                                            "Spot Light（聚光燈：模擬手電筒或探照燈，朝圓錐範圍定向照射）"
                                        ],
                          "rawAnswer":  "Point Light",
                          "correctIndex":  2,
                          "correctText":  "Point Light",
                          "explanation":  "【UE 4.27 核心考點：Point Light 點光源】\nPoint Light 具有半徑衰減球體，從單一點向 360 度全向發光，常用於吊燈、壁燈、火把等光源。",
                          "keywords":  [
                                           {
                                               "term":  "Point Light（點光源）",
                                               "role":  "無方向性 360 度球形全向發光，常用於蠟燭、燈泡與火球"
                                           },
                                           {
                                               "term":  "Spot Light（聚光燈）",
                                               "role":  "圓錐體發光，具備內/外圓錐角衰減，常用於手電筒、車燈與探照燈"
                                           },
                                           {
                                               "term":  "Directional Light（定向光源）",
                                               "role":  "無限遠平行日光投射，僅旋轉角度影響日照方向，模擬太陽或月光"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "A ____________ works much like a real-world lightbulb, emitting light equally in all directions from a single point in space.",
                          "detailedOptions":  [
                                                  "Directional Light（定向光源：模擬太陽光，全場景平行的遠距直射光源）",
                                                  "Sky Light（天空光照：捕捉遠方天際色彩，為戶外提供柔和的環境天光漫反射）",
                                                  "Point Light（點光源：模擬燈泡，向四面八方 360 度均勻發光）",
                                                  "Spot Light（聚光燈：模擬手電筒或探照燈，朝圓錐範圍定向照射）"
                                              ]
                      },
                      {
                          "id":  "h05_q4",
                          "chapterId":  "h05",
                          "qNum":  4,
                          "type":  "TF",
                          "question":  "Light attenuation is a drop in light intensity over distance.",
                          "questionZh":  "光照衰減（Light attenuation）是指光線強度隨距離增加而降低的現象。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：光照衰減物理規律】\n正確。光照衰減（Light attenuation）指光線強度隨傳播距離增加而逐漸減弱的現象，UE4 遵循平方反比物理定律（Inverse Square Falloff）或透過 Attenuation Radius 衰減半徑控制影響範圍。",
                          "keywords":  [
                                           {
                                               "term":  "Light Attenuation（光照衰減）",
                                               "role":  "光照強度隨距離衰減，由 Attenuation Radius 控制邊界"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "Light attenuation is a drop in light intensity over distance.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h05_q5",
                          "chapterId":  "h05",
                          "qNum":  5,
                          "type":  "MC",
                          "question":  "While Light Actors with a Mobility setting of ____________ do not move, their brightness can be changed at runtime.",
                          "questionZh":  "雖然可移動性設定為 ____________ 的光源 Actor 無法在遊戲中移動位置，但它們的亮度可以在遊戲執行期間動態變更。",
                          "options":  [
                                          "Dynamic",
                                          "Static",
                                          "Movable",
                                          "Stationary"
                                      ],
                          "optionsZh":  [
                                            "Dynamic（完全動態光源：隨時可移動並產生即時陰影，開銷較大）",
                                            "Static（靜態光源：完全固定不可移動，光影完全預先烘焙至貼圖）",
                                            "Movable（可移動：可在遊戲中移動並接收即時動態光照）",
                                            "Stationary（固定光源：位置固定但可動態改變亮度與顏色）"
                                        ],
                          "rawAnswer":  "Stationary",
                          "correctIndex":  3,
                          "correctText":  "Stationary",
                          "explanation":  "【UE 4.27 核心考點：Stationary 固定光源】\n固定光源兼具靜態烘焙陰影品質與動態屬性控制能力。位置不能位移，但其強度（Intensity）與顏色（Light Color）可在運行時透過藍圖隨時改變。",
                          "keywords":  [
                                           {
                                               "term":  "Mobility（移動性）",
                                               "role":  "Static(靜態烘焙)、Stationary(固定位置動態光強)、Movable(完全動態即時物理)"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "While Light \u003cspan class=\"term-en\"\u003eActors\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（場景物件/Actor）\u003c/span\u003e with a \u003cspan class=\"term-en\"\u003eMobility setting\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（移動性設定）\u003c/span\u003e of ____________ do not move, their brightness can be changed at runtime.",
                          "detailedOptions":  [
                                                  "Dynamic（完全動態光源：隨時可移動並產生即時陰影，開銷較大）",
                                                  "Static（靜態光源：完全固定不可移動，光影完全預先烘焙至貼圖）",
                                                  "Movable（可移動：可在遊戲中移動並接收即時動態光照）",
                                                  "Stationary（固定光源：位置固定但可動態改變亮度與顏色）"
                                              ]
                      },
                      {
                          "id":  "h05_q6",
                          "chapterId":  "h05",
                          "qNum":  6,
                          "type":  "TF",
                          "question":  "When you build lighting, Blueprints are compiled.",
                          "questionZh":  "當你建置光照（Build lighting）時，藍圖也會同時被編譯。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "False",
                          "correctIndex":  1,
                          "correctText":  "False",
                          "explanation":  "【UE 4.27 核心考點：建置光照範疇】\n錯誤。Build Lighting（建置光照）僅調用 Lightmass 計算靜態場景的全局光照、陰影貼圖與反射捕捉，並不會編譯藍圖（Blueprints 是在藍圖編輯器中單獨編譯，或在打包專案時編譯）。",
                          "keywords":  [
                                           {
                                               "term":  "Build Lighting（建置光照）",
                                               "role":  "計算烘焙光照貼圖，不包含藍圖腳本編譯"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "When you build lighting, \u003cspan class=\"term-en\"\u003eBlueprints\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（藍圖可視化腳本）\u003c/span\u003e are compiled.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h05_q7",
                          "chapterId":  "h05",
                          "qNum":  7,
                          "type":  "MC",
                          "question":  "____________ manages communication between the Editor and Lightmass. When you build lighting, it keeps track of and displays the build progress.",
                          "questionZh":  "____________ 負責管理編輯器與 Lightmass 之間的通訊。當你建置光照時，它會追蹤並顯示建置進度。",
                          "options":  [
                                          "Epic Games Launcher",
                                          "Radiosity",
                                          "Scanline",
                                          "Swarm Agent"
                                      ],
                          "optionsZh":  [
                                            "Epic Games Launcher（Epic 官方啟動器：下載引擎版本與購買商城素材）",
                                            "Radiosity（熱輻射度：計算表面相互反彈光照的演算法）",
                                            "Scanline（掃描線渲染：逐行繪製畫面的光柵化方法）",
                                            "Swarm Agent（Swarm Agent：在後台協同多核心或多電腦運算光照烘焙的代理程式）"
                                        ],
                          "rawAnswer":  "Swarm Agent",
                          "correctIndex":  3,
                          "correctText":  "Swarm Agent",
                          "explanation":  "【UE 4.27 核心考點：Swarm Agent 烘焙管理器】\n點擊 Build Lighting 時，Windows 系統匣會啟動 Swarm Agent，負責調度 CPU 多核心執行緒計算 Lightmass 任務，並支援區域網路分散式運算。",
                          "keywords":  [
                                           {
                                               "term":  "Epic Games Launcher",
                                               "role":  "虛幻桌面樞紐，負責多版本引擎管理、商城素材購買與官方文件範例下載"
                                           },
                                           {
                                               "term":  "Lightmass（光照烘焙系統）",
                                               "role":  "離線預先計算光線多次反彈，將柔和漫反射陰影寫入光照貼圖（Lightmaps）"
                                           },
                                           {
                                               "term":  "Swarm Agent",
                                               "role":  "背景光照計算調度器，協調 CPU 多核心運算並支援區域網絡分散式並行算圖"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "____________ manages communication between the Editor and Lightmass."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "When you build lighting, it keeps track of and displays the build progress."
                                           }
                                       ],
                          "detailedQuestion":  "____________ manages communication between the \u003cspan class=\"term-en\"\u003eEditor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（虛幻編輯器）\u003c/span\u003e and \u003cspan class=\"term-en\"\u003eLightmass\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（Lightmass 靜態光照烘焙系統）\u003c/span\u003e. When you build lighting, it keeps track of and displays the build progress.",
                          "detailedOptions":  [
                                                  "Epic Games Launcher（Epic 官方啟動器：下載引擎版本與購買商城素材）",
                                                  "Radiosity（熱輻射度：計算表面相互反彈光照的演算法）",
                                                  "Scanline（掃描線渲染：逐行繪製畫面的光柵化方法）",
                                                  "Swarm Agent（Swarm Agent：在後台協同多核心或多電腦運算光照烘焙的代理程式）"
                                              ]
                      },
                      {
                          "id":  "h05_q8",
                          "chapterId":  "h05",
                          "qNum":  8,
                          "type":  "TF",
                          "question":  "It is possible to change the Lightmap resolution on a per-Actor basis.",
                          "questionZh":  "針對每個個別 Actor 單獨變更其光照貼圖解析度（Lightmap resolution）是可行的操作。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：個別 Actor 光照貼圖解析度覆蓋】\n正確。雖然靜態網格資產本身有預設的 Lightmap Resolution，但你可以在關卡中選取特定 Actor，在 Details 面板勾選「Overridden Light Map Res」並單獨自訂該實例的光照貼圖解析度。",
                          "keywords":  [
                                           {
                                               "term":  "Overridden Light Map Res",
                                               "role":  "可在 Details 面板針對特定場景實例單獨自訂光照貼圖解析度"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "It is possible to change the Lightmap resolution on a per-\u003cspan class=\"term-en\"\u003eActor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（場景物件/Actor）\u003c/span\u003e basis.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h05_q9",
                          "chapterId":  "h05",
                          "qNum":  9,
                          "type":  "MC",
                          "question":  "____________ is a 3D computer graphics term used to describe the process of creating raster images based on camera, light, and model position and Material properties. Common rendering methods include scanline rendering, ray tracing, and radiosity methods.",
                          "questionZh":  "____________ 是一個 3D 電腦圖形學術語，用來描述根據相機、光源、模型位置與材質屬性建立光柵影像的過程。常見的渲染方法包含掃描線渲染、光線追蹤與熱輻射法。",
                          "options":  [
                                          "Rasterization",
                                          "Rendering",
                                          "Build",
                                          "Swarm"
                                      ],
                          "optionsZh":  [
                                            "Rasterization（光柵化：將 3D 幾何頂點轉換為 2D 螢幕像素的渲染技術）",
                                            "Rendering（渲染著色：將 3D 場景計算並生成最終畫面的過程）",
                                            "Build（建置光照：開始計算全場景靜態陰影與光照貼圖）",
                                            "Swarm（Swarm 分佈式光照編譯協調系統）"
                                        ],
                          "rawAnswer":  "Rendering",
                          "correctIndex":  1,
                          "correctText":  "Rendering",
                          "explanation":  "【UE 4.27 核心考點：Rendering 渲染管線】\nRendering（渲染）是虛幻引擎渲染管線將 3D 模型頂點、燈光、材質著色器經由光柵化/光線追蹤最終繪製到 2D 螢幕像素的過程。",
                          "keywords":  [
                                           {
                                               "term":  "Swarm Agent",
                                               "role":  "背景光照計算調度器，協調 CPU 多核心運算並支援區域網絡分散式並行算圖"
                                           },
                                           {
                                               "term":  "Material（材質系統）",
                                               "role":  "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "____________ is a 3D computer graphics term used to describe the process of creating raster images based on camera, light, and model position and Material properties."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "Common rendering methods include scanline rendering, ray tracing, and radiosity methods."
                                           }
                                       ],
                          "detailedQuestion":  "____________ is a 3D computer graphics term used to describe the process of creating raster images based on camera, light, and model \u003cspan class=\"term-en\"\u003eposition\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（位置坐標）\u003c/span\u003e and \u003cspan class=\"term-en\"\u003eMaterial\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（材質）\u003c/span\u003e properties. Common rendering methods include scanline rendering, ray tracing, and radiosity methods.",
                          "detailedOptions":  [
                                                  "Rasterization（光柵化：將 3D 幾何頂點轉換為 2D 螢幕像素的渲染技術）",
                                                  "Rendering（渲染著色：將 3D 場景計算並生成最終畫面的過程）",
                                                  "Build（建置光照：開始計算全場景靜態陰影與光照貼圖）",
                                                  "Swarm（Swarm 分佈式光照編譯協調系統）"
                                              ]
                      },
                      {
                          "id":  "h05_q10",
                          "chapterId":  "h05",
                          "qNum":  10,
                          "type":  "MC",
                          "question":  "The ____________ light property overrides light color properties and uses real-world values in kelvins to define the color of a light. For example, a 100W incandescent lightbulb has a temperature of 2,800K.",
                          "questionZh":  "____________ 光源屬性會覆蓋光源顏色設定，並使用以開爾文（Kelvin）為單位的真實世界數值來定義光線顏色。例如，一顆 100W 白熾燈泡的色溫為 2,800K。",
                          "options":  [
                                          "IES",
                                          "Temperature",
                                          "Intensity",
                                          "Attenuation"
                                      ],
                          "optionsZh":  [
                                            "IES（IES 光學設定檔：真實燈具廠商提供的物理光線照射形狀圖樣）",
                                            "Temperature（色溫：以開爾文 K 為單位調整偏暖黃光或偏冷藍光）",
                                            "Intensity（發光強度：光源發出的亮度大小（單位：流明或燭光））",
                                            "Attenuation（衰減半徑：光源光線照射所能到達的最遠有效距離）"
                                        ],
                          "rawAnswer":  "Temperature",
                          "correctIndex":  1,
                          "correctText":  "Temperature",
                          "explanation":  "【UE 4.27 核心考點：Light Temperature 色溫系統】\n以 Kelvin（K）為物理單位：暖黃燭光約 1800K、鎢絲燈約 3200K、正午日光約 6500K、陰天冷藍天光約 9000K 以上，提供物理精準的發光色彩。",
                          "keywords":  [
                                           {
                                               "term":  "Light Temperature（色溫）",
                                               "role":  "以開爾文(Kelvin)為單位物理著色：1800K(暖燭光)、6500K(正午日光)、9000K+(冷藍光)"
                                           },
                                           {
                                               "term":  "Sound Attenuation（聲音衰減）",
                                               "role":  "定義聲音隨距離拉遠時的音量衰減曲線與 3D 空間立體聲像定位（Spatialization）"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "The ____________ light property overrides light color properties and uses real-world values in kelvins to define the color of a light."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "For example, a 100W incandescent lightbulb has a temperature of 2,800K."
                                           }
                                       ],
                          "detailedQuestion":  "The ____________ \u003cspan class=\"term-en\"\u003elight property\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（光源光學屬性）\u003c/span\u003e overrides light color properties and uses real-world values in kelvins to define the color of a light. For example, a 100W incandescent lightbulb has a temperature of 2,800K.",
                          "detailedOptions":  [
                                                  "IES（IES 光學設定檔：真實燈具廠商提供的物理光線照射形狀圖樣）",
                                                  "Temperature（色溫：以開爾文 K 為單位調整偏暖黃光或偏冷藍光）",
                                                  "Intensity（發光強度：光源發出的亮度大小（單位：流明或燭光））",
                                                  "Attenuation（衰減半徑：光源光線照射所能到達的最遠有效距離）"
                                              ]
                      },
                      {
                          "id":  "h06_q1",
                          "chapterId":  "h06",
                          "qNum":  1,
                          "type":  "MC",
                          "question":  "The ____________ Editor is a node-based system that uses expressions and functions to create a desired surface.",
                          "questionZh":  "____________ 編輯器是一個節點式系統，使用表達式與函數來建立所需的物體表面著色外觀。",
                          "options":  [
                                          "Lightmass",
                                          "Texture",
                                          "Shader",
                                          "Material"
                                      ],
                          "optionsZh":  [
                                            "Lightmass（Lightmass 烘焙系統：預先計算漫反射光影並寫入貼圖，效能極高）",
                                            "Texture（貼圖：儲存像素顏色或法線數值的 2D 圖片檔案）",
                                            "Shader（著色器：在顯示卡 GPU 上運行的底層圖形運算程式碼）",
                                            "Material（材質：決定物體表面外觀、色彩、金屬感與光澤度的核心資產）"
                                        ],
                          "rawAnswer":  "Material",
                          "correctIndex":  3,
                          "correctText":  "Material",
                          "explanation":  "【UE 4.27 核心考點：Material Editor 材質編輯器】\n正確。Material Editor 是節點式視覺化著色編輯器，利用材質表達式（Expressions）與函數（Functions）組合運算，控制物體表面的底色、粗糙度、金屬度與法線反射。",
                          "keywords":  [
                                           {
                                               "term":  "Material Editor（材質編輯器）",
                                               "role":  "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The ____________ \u003cspan class=\"term-en\"\u003eEditor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（虛幻編輯器）\u003c/span\u003e is a node-based system that uses expressions and functions to create a desired surface.",
                          "detailedOptions":  [
                                                  "Lightmass（Lightmass 烘焙系統：預先計算漫反射光影並寫入貼圖，效能極高）",
                                                  "Texture（貼圖：儲存像素顏色或法線數值的 2D 圖片檔案）",
                                                  "Shader（著色器：在顯示卡 GPU 上運行的底層圖形運算程式碼）",
                                                  "Material（材質：決定物體表面外觀、色彩、金屬感與光澤度的核心資產）"
                                              ]
                      },
                      {
                          "id":  "h06_q2",
                          "chapterId":  "h06",
                          "qNum":  2,
                          "type":  "TF",
                          "question":  "To open the Material Editor, you need to create a new Material asset or double-click on an existing Material in the Content Browser.",
                          "questionZh":  "要開啟材質編輯器，你需要在內容瀏覽器中建立一個新的材質資產，或連按兩下開啟既有的材質資產。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：開啟材質編輯器】\n正確。在 Content Browser 中按右鍵新建 Material，或直接連按兩下任何既有的 Material 資產，即可開啟材質編輯器獨立視窗進行節點編輯。",
                          "keywords":  [
                                           {
                                               "term":  "Material Asset 操作",
                                               "role":  "在 Content Browser 雙擊材質資產即可進入材質節點圖表"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "To open the \u003cspan class=\"term-en\"\u003eMaterial Editor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（材質編輯器）\u003c/span\u003e, you need to create a new \u003cspan class=\"term-en\"\u003eMaterial\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（材質）\u003c/span\u003e asset or double-click on an existing \u003cspan class=\"term-en\"\u003eMaterial\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（材質）\u003c/span\u003e in the \u003cspan class=\"term-en\"\u003eContent Browser\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（內容瀏覽器/素材庫）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h06_q3",
                          "chapterId":  "h06",
                          "qNum":  3,
                          "type":  "MC",
                          "question":  "“PBR” stands for ____________.",
                          "questionZh":  "「PBR」是 ____________ 的英文縮寫。",
                          "options":  [
                                          "Physical-based rasterization",
                                          "Physical baking and rendering",
                                          "Physically based rendering",
                                          "Photon-based rendering"
                                      ],
                          "optionsZh":  [
                                            "Physical-based rasterization（物理光柵化計算）",
                                            "Physical baking and rendering（物理烘焙與渲染）",
                                            "Physically based rendering（PBR 基於物理的渲染：依照真實光學規律呈現擬真材質與光影）",
                                            "Photon-based rendering（光子散射渲染技術）"
                                        ],
                          "rawAnswer":  "Physically based rendering",
                          "correctIndex":  2,
                          "correctText":  "Physically based rendering",
                          "explanation":  "【UE 4.27 核心考點：PBR 基於物理著色】\nPhysically Based Rendering 遵循能量守恆定律與物理光學測量數據，確保材質在艷陽、室內或夜間等任何光照環境下都呈現逼真自然的外觀。",
                          "keywords":  [
                                           {
                                               "term":  "PBR（基於物理的渲染）",
                                               "role":  "基於真實物理光學測量，確保在任何光照條件下外觀材質都自然逼真"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "“PBR” stands for ____________.",
                          "detailedOptions":  [
                                                  "Physical-based rasterization（物理光柵化計算）",
                                                  "Physical baking and rendering（物理烘焙與渲染）",
                                                  "Physically based rendering（PBR 基於物理的渲染：依照真實光學規律呈現擬真材質與光影）",
                                                  "Photon-based rendering（光子散射渲染技術）"
                                              ]
                      },
                      {
                          "id":  "h06_q4",
                          "chapterId":  "h06",
                          "qNum":  4,
                          "type":  "TF",
                          "question":  "If a Material is not metallic, then you will need to use the Specular input.",
                          "questionZh":  "如果一個材質不是金屬（Non-metallic），那麼你就必須使用 Specular（高光）輸入端。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：PBR 非金屬高光 Specular 規範】\n錯誤。在 UE4 的 PBR 體系中，非金屬材質的 Specular 預設值為 0.5（對應 4% 反射率，符合絕大多數真實非金屬），一般情況下完全無需連接 Specular 輸入端，除非需要微調特定折射率。",
                          "keywords":  [
                                           {
                                               "term":  "Specular（高光輸入端）",
                                               "role":  "非金屬預設為 0.5 即可滿足絕大多數物理真實反射，通常無需額外連接"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "If a \u003cspan class=\"term-en\"\u003eMaterial\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（材質）\u003c/span\u003e is not metallic, then you will need to use the Specular input.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h06_q5",
                          "chapterId":  "h06",
                          "qNum":  5,
                          "type":  "MC",
                          "question":  "Base color, also called ____________, defines the overall color of a Material. It takes in a Vector3 (RGB) value, and each channel is automatically clamped between 0 and 1. It is the core color description of the surface in a Material minus shadow and lighting detail.",
                          "questionZh":  "基礎顏色（Base color，也稱為 ____________）定義了材質的整體顏色。它接收 Vector3（RGB）數值，且每個通道會自動限制在 0 與 1 之間。它是材質表面的核心顏色描述，不包含任何陰影與光照細節。",
                          "options":  [
                                          "Emissive",
                                          "Roughness",
                                          "Specular",
                                          "Albedo"
                                      ],
                          "optionsZh":  [
                                            "Emissive（自發光顏色：物體自身發光的亮度和顏色（不受外部燈光影響））",
                                            "Roughness（粗糙度：0 代表極致鏡面反光，1 代表完全粗糙消光）",
                                            "Specular（高光反射強度：微調非金屬表面的反射強烈程度）",
                                            "Albedo（反照率：物體純粹的固有反射率貼圖）"
                                        ],
                          "rawAnswer":  "Albedo",
                          "correctIndex":  3,
                          "correctText":  "Albedo",
                          "explanation":  "【UE 4.27 核心考點：Albedo 反照率】\nAlbedo 貼圖代表物體表面的純固有色，PBR 製作標準嚴格要求 Albedo 貼圖內「不得包含任何方向性光照、高光或環境陰影（AO）」。",
                          "keywords":  [
                                           {
                                               "term":  "Material（材質系統）",
                                               "role":  "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
                                           },
                                           {
                                               "term":  "PBR（基於物理的渲染）",
                                               "role":  "基於真實物理光學測量，確保在任何光照條件下外觀材質都自然逼真"
                                           },
                                           {
                                               "term":  "Albedo / Base Color（反照率）",
                                               "role":  "物體的純粹固有色彩貼圖，PBR 規範中嚴禁包含任何預先烘焙的方向性光影"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "Base color, also called ____________, defines the overall color of a Material."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "It takes in a Vector3 (RGB) value, and each channel is automatically clamped between 0 and 1."
                                           },
                                           {
                                               "partNum":  3,
                                               "en":  "It is the core color description of the surface in a Material minus shadow and lighting detail."
                                           }
                                       ],
                          "detailedQuestion":  "Base color, also called ____________, \u003cspan class=\"term-en\"\u003edefines\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（定義決定）\u003c/span\u003e the overall color of a \u003cspan class=\"term-en\"\u003eMaterial\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（材質）\u003c/span\u003e. It takes in a Vector3 (RGB) value, and each channel is automatically clamped between 0 and 1. It is the core color description of the surface in a \u003cspan class=\"term-en\"\u003eMaterial\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（材質）\u003c/span\u003e \u003cspan class=\"term-en\"\u003eminus\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（排除/扣除）\u003c/span\u003e shadow and lighting detail.",
                          "detailedOptions":  [
                                                  "Emissive（自發光顏色：物體自身發光的亮度和顏色（不受外部燈光影響））",
                                                  "Roughness（粗糙度：0 代表極致鏡面反光，1 代表完全粗糙消光）",
                                                  "Specular（高光反射強度：微調非金屬表面的反射強烈程度）",
                                                  "Albedo（反照率：物體純粹的固有反射率貼圖）"
                                              ]
                      },
                      {
                          "id":  "h06_q6",
                          "chapterId":  "h06",
                          "qNum":  6,
                          "type":  "TF",
                          "question":  "Mipmaps are automatically generated for imported texture files that are not powers of 2.",
                          "questionZh":  "對於不是 2 的次方（Powers of 2）尺寸的匯入貼圖檔案，系統會自動生成 Mipmaps 多級漸進紋理。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "False",
                          "correctIndex":  1,
                          "correctText":  "False",
                          "explanation":  "【UE 4.27 核心考點：Mipmaps 尺寸規範】\n錯誤。UE4 只有在貼圖寬高尺寸為「2 的次方（Powers of 2，如 512x512、1024x2048）」時，才會自動生成多級漸進紋理 Mipmaps；非 2 次方尺寸的貼圖無法生成 Mipmaps 且無法進行紋理流送（Texture Streaming）。",
                          "keywords":  [
                                           {
                                               "term":  "Powers of 2（2 的次方）",
                                               "role":  "貼圖長寬必須為 2 的冪次才能自動生成 Mipmaps 並支援串流最佳化"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "Mipmaps are automatically generated for imported texture files that are not powers of 2.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h06_q7",
                          "chapterId":  "h06",
                          "qNum":  7,
                          "type":  "TF",
                          "question":  "While UV tiling is controlled in the Material Editor using the Texture Coordinate node, the tiling of a Texture is controlled in the Texture properties.",
                          "questionZh":  "雖然 UV 平鋪重複（UV tiling）是在材質編輯器中使用 Texture Coordinate 節點進行控制，但貼圖本身的平鋪則是在貼圖屬性中進行控制。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：UV 平鋪控制位置】\n錯誤。貼圖的平鋪重複次數（Tiling）是在材質編輯器中使用 Texture Coordinate（TexCoord）節點調整 UTiling 與 VTiling 數值進行控制，而非在貼圖本身的資產屬性中設定。",
                          "keywords":  [
                                           {
                                               "term":  "Texture Coordinate（TexCoord）",
                                               "role":  "材質編輯器中用於控制貼圖 UV 平鋪重複率的核心節點"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "While \u003cspan class=\"term-en\"\u003eUV tiling\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（UV 紋理重複平鋪）\u003c/span\u003e is controlled in the \u003cspan class=\"term-en\"\u003eMaterial Editor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（材質編輯器）\u003c/span\u003e using the \u003cspan class=\"term-en\"\u003eTexture Coordinate node\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（TexCoord 紋理坐標節點）\u003c/span\u003e, the tiling of a \u003cspan class=\"term-en\"\u003eTexture\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（紋理貼圖）\u003c/span\u003e is controlled in the \u003cspan class=\"term-en\"\u003eTexture properties\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（紋理貼圖屬性）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h06_q8",
                          "chapterId":  "h06",
                          "qNum":  8,
                          "type":  "MC",
                          "question":  "If you want to make the base color of a Material an even color, you should use a ____________ Material expression node.",
                          "questionZh":  "如果你想要讓材質的基礎顏色呈現均勻的單一純色，你應該使用 ____________ 材質表達式節點。",
                          "options":  [
                                          "Constant 3 Vector",
                                          "Sine",
                                          "Time",
                                          "Texture Coordinate"
                                      ],
                          "optionsZh":  [
                                            "Constant 3 Vector（三維常數向量：快捷鍵 3+點擊，輸出 RGB 顏色或 XYZ 坐標）",
                                            "Sine（正弦波節點：在 -1 到 1 之間週期波動，常用於波浪或呼吸燈動畫）",
                                            "Time（時間節點：隨遊戲運行持續遞增，用於驅動動態水流或旋轉動畫）",
                                            "Texture Coordinate（貼圖 UV 節點：快捷鍵 U+點擊，調整貼圖在模型上的平鋪重複率）"
                                        ],
                          "rawAnswer":  "Constant 3 Vector",
                          "correctIndex":  0,
                          "correctText":  "Constant 3 Vector",
                          "explanation":  "【UE 4.27 核心考點：Constant 3 Vector 節點】\nConstant 3 Vector 代表 (R, G, B) 或 (X, Y, Z) 三維數組，快速鍵是在材質圖表中按住數字鍵「3」並點擊滑鼠左鍵。",
                          "keywords":  [
                                           {
                                               "term":  "Material（材質系統）",
                                               "role":  "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "If you want to make the base color of a \u003cspan class=\"term-en\"\u003eMaterial\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（材質）\u003c/span\u003e an even color, you should use a ____________ \u003cspan class=\"term-en\"\u003eMaterial\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（材質）\u003c/span\u003e expression node.",
                          "detailedOptions":  [
                                                  "Constant 3 Vector（三維常數向量：快捷鍵 3+點擊，輸出 RGB 顏色或 XYZ 坐標）",
                                                  "Sine（正弦波節點：在 -1 到 1 之間週期波動，常用於波浪或呼吸燈動畫）",
                                                  "Time（時間節點：隨遊戲運行持續遞增，用於驅動動態水流或旋轉動畫）",
                                                  "Texture Coordinate（貼圖 UV 節點：快捷鍵 U+點擊，調整貼圖在模型上的平鋪重複率）"
                                              ]
                      },
                      {
                          "id":  "h06_q9",
                          "chapterId":  "h06",
                          "qNum":  9,
                          "type":  "MC",
                          "question":  "The ____________ input uses RGB values to control the direction in which light should react with a surface and create the illusion of directional variation on a surface.",
                          "questionZh":  "____________ 輸入端使用 RGB 數值來控制光線與表面反應的方向，並在物體表面營造出方向變化的凹凸錯覺。",
                          "options":  [
                                          "Metallic",
                                          "Texture",
                                          "Specular",
                                          "Normal"
                                      ],
                          "optionsZh":  [
                                            "Metallic（金屬度：0 為非金屬（塑膠、木石），1 為純導電金屬）",
                                            "Texture（貼圖：儲存像素顏色或法線數值的 2D 圖片檔案）",
                                            "Specular（高光反射強度：微調非金屬表面的反射強烈程度）",
                                            "Normal（法線貼圖節點：在不增加頂點的情況下模擬微觀立體凹凸刻痕）"
                                        ],
                          "rawAnswer":  "Normal",
                          "correctIndex":  3,
                          "correctText":  "Normal",
                          "explanation":  "【UE 4.27 核心考點：Normal Map 法線貼圖】\n法線貼圖以 RGB 色彩儲存微觀幾何面的切線空間法線向量，欺騙光照著色器計算明暗，大幅節省 3D 幾何頂點面數。",
                          "keywords":  [
                                           {
                                               "term":  "Metallic（金屬度）",
                                               "role":  "物理上非 0 即 1（純導體為 1.0，純絕緣體為 0.0），中間值僅用於鏽蝕油污"
                                           },
                                           {
                                               "term":  "Normal Map（法線貼圖）",
                                               "role":  "以 RGB 儲存表面法線向量，在不增加模型幾何頂點面數下模擬微觀立體凹凸"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The ____________ input uses RGB values to control the direction in which light should react with a surface and create the illusion of directional variation on a surface.",
                          "detailedOptions":  [
                                                  "Metallic（金屬度：0 為非金屬（塑膠、木石），1 為純導電金屬）",
                                                  "Texture（貼圖：儲存像素顏色或法線數值的 2D 圖片檔案）",
                                                  "Specular（高光反射強度：微調非金屬表面的反射強烈程度）",
                                                  "Normal（法線貼圖節點：在不增加頂點的情況下模擬微觀立體凹凸刻痕）"
                                              ]
                      },
                      {
                          "id":  "h06_q10",
                          "chapterId":  "h06",
                          "qNum":  10,
                          "type":  "MC",
                          "question":  "____________ are the building blocks used to create Materials. They are self-contained nodes with different combinations of inputs and outputs that perform specific operations.",
                          "questionZh":  "____________ 是用來建立材質的基礎積木。它們是獨立封裝的節點，具備不同的輸入與輸出組合以執行特定的計算操作。",
                          "options":  [
                                          "Mipmaps",
                                          "Material functions",
                                          "Material expressions",
                                          "Powers of 2"
                                      ],
                          "optionsZh":  [
                                            "Mipmaps（多級漸進紋理：隨距離拉遠自動切換為低解析度貼圖以省效能）",
                                            "Material functions（材質函數模組）",
                                            "Material expressions（材質表達式節點）",
                                            "Powers of 2（2 的次方尺寸：長寬如 512、1024、2048 等，支援 Mipmaps 最佳化）"
                                        ],
                          "rawAnswer":  "Material expressions",
                          "correctIndex":  2,
                          "correctText":  "Material expressions",
                          "explanation":  "【UE 4.27 核心考點：Material expressions 材質表達式】\n虛幻材質圖表中的所有節點（如 Add、Multiply、Texture Sample、Lerp）統稱為 Material Expressions。",
                          "keywords":  [
                                           {
                                               "term":  "Material（材質系統）",
                                               "role":  "節點式表面光學著色網絡，計算光線如何與微觀表面相互作用"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "____________ are the building blocks used to create Materials."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "They are self-contained nodes with different combinations of inputs and outputs that perform specific operations."
                                           }
                                       ],
                          "detailedQuestion":  "____________ are the building blocks used to create \u003cspan class=\"term-en\"\u003eMaterials\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（材質）\u003c/span\u003e. They are self-contained nodes with different combinations of inputs and outputs that perform specific operations.",
                          "detailedOptions":  [
                                                  "Mipmaps（多級漸進紋理：隨距離拉遠自動切換為低解析度貼圖以省效能）",
                                                  "Material functions（材質函數模組）",
                                                  "Material expressions（材質表達式節點）",
                                                  "Powers of 2（2 的次方尺寸：長寬如 512、1024、2048 等，支援 Mipmaps 最佳化）"
                                              ]
                      },
                      {
                          "id":  "h07_q1",
                          "chapterId":  "h07",
                          "qNum":  1,
                          "type":  "MC",
                          "question":  "A ____________ represents an imported audio file and settings related to the playback and storage of that file.",
                          "questionZh":  "____________ 代表匯入的音訊檔案，以及與該檔案播放和儲存相關的設定。",
                          "options":  [
                                          "Ambient Sound Actor",
                                          "Sound Attenuation asset",
                                          "Sound Wave asset",
                                          "Reverb Effect asset"
                                      ],
                          "optionsZh":  [
                                            "Ambient Sound Actor（環境音效：放置於場景特定位置發聲的世界實體物件）",
                                            "Sound Attenuation asset（聲音衰減資產：設定距離拉遠時音量如何減弱與 3D 空間立體聲定位）",
                                            "Sound Wave asset（音訊波形資產：匯入引擎的原始 WAV 檔案）",
                                            "Reverb Effect asset（混響效果資產：模擬大廳、洞穴或浴室等空間的回音殘響特性）"
                                        ],
                          "rawAnswer":  "Sound Wave asset",
                          "correctIndex":  2,
                          "correctText":  "Sound Wave asset",
                          "explanation":  "【UE 4.27 核心考點：Sound Wave 音訊波形資產】\n原始 WAV 音訊直接匯入後生成的基礎資產型態，可直接播放，亦可放入 Sound Cue 中進行進階合成混音。",
                          "keywords":  [
                                           {
                                               "term":  "Sound Wave（音效波形）",
                                               "role":  "原始 16-bit 44.1kHz .wav 匯入後的基礎音訊資產"
                                           },
                                           {
                                               "term":  "Sound Cue（音效提示）",
                                               "role":  "節點式音效網絡，支援多曲隨機抽取、音高/音量隨機調製與混音"
                                           },
                                           {
                                               "term":  "Sound Attenuation（聲音衰減）",
                                               "role":  "定義聲音隨距離拉遠時的音量衰減曲線與 3D 空間立體聲像定位（Spatialization）"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "A ____________ represents an imported audio file and settings related to the playback and storage of that file.",
                          "detailedOptions":  [
                                                  "Ambient Sound Actor（環境音效：放置於場景特定位置發聲的世界實體物件）",
                                                  "Sound Attenuation asset（聲音衰減資產：設定距離拉遠時音量如何減弱與 3D 空間立體聲定位）",
                                                  "Sound Wave asset（音訊波形資產：匯入引擎的原始 WAV 檔案）",
                                                  "Reverb Effect asset（混響效果資產：模擬大廳、洞穴或浴室等空間的回音殘響特性）"
                                              ]
                      },
                      {
                          "id":  "h07_q2",
                          "chapterId":  "h07",
                          "qNum":  2,
                          "type":  "TF",
                          "question":  "The term bit rate refers to the amount of data that is processed or transferred over a specified amount of time. Bit rate also has an impact on quality: the higher the bit rate, the better the quality.",
                          "questionZh":  "「位元率（Bit rate）」一詞指的是在特定時間內處理或傳輸的資料量。位元率也會影響音質：位元率越高，品質越好。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：音訊位元率定義】\n正確。位元率（Bit rate）代表單位時間內傳輸或處理的音訊數據量（如 kbps）。位元率越高，保留的音頻細節越完整、音質越佳，但檔案體積也相對較大。",
                          "keywords":  [
                                           {
                                               "term":  "Bit Rate（位元率）",
                                               "role":  "單位時間音訊資料量，直接決定音質保真度與檔案大小"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "The term bit rate refers to the amount of data that is processed or transferred over a specified amount of time."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "Bit rate also has an impact on quality: the higher the bit rate, the better the quality."
                                           }
                                       ],
                          "detailedQuestion":  "The term bit rate refers to the amount of data that is processed or transferred over a specified amount of time. Bit rate also has an impact on quality: the higher the bit rate, the better the quality.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h07_q3",
                          "chapterId":  "h07",
                          "qNum":  3,
                          "type":  "MC",
                          "question":  "A ____________ stores attenuation properties in a reusable manner. This allows for adjustment to attenuation properties without having to revisit every Sound Actor individually.",
                          "questionZh":  "____________ 以可重複使用的方式儲存衰減屬性。這使得調整衰減屬性時，無需逐一重新修改每個個別的 Sound Actor。",
                          "options":  [
                                          "Modulation Effect asset",
                                          "Reverb Effect asset",
                                          "Audio Volume",
                                          "Sound Attenuation asset"
                                      ],
                          "optionsZh":  [
                                            "Modulation Effect asset（音訊調變效果資產）",
                                            "Reverb Effect asset（混響效果資產：模擬大廳、洞穴或浴室等空間的回音殘響特性）",
                                            "Audio Volume（音效區域體積）",
                                            "Sound Attenuation asset（聲音衰減資產：設定距離拉遠時音量如何減弱與 3D 空間立體聲定位）"
                                        ],
                          "rawAnswer":  "Sound Attenuation asset",
                          "correctIndex":  3,
                          "correctText":  "Sound Attenuation asset",
                          "explanation":  "【UE 4.27 核心考點：Sound Attenuation 聲音衰減】\nSound Attenuation 資產設定內外半徑範圍、立體聲空間化（Spatialization）演算法與距離倒數衰減曲線（Falloff Curve）。",
                          "keywords":  [
                                           {
                                               "term":  "Sound Attenuation（聲音衰減）",
                                               "role":  "定義聲音隨距離拉遠時的音量衰減曲線與 3D 空間立體聲像定位（Spatialization）"
                                           },
                                           {
                                               "term":  "Reverb Effect（混響效果）",
                                               "role":  "模擬山洞、教堂、浴室等封閉環境的空間殘響聲學反射"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "A ____________ stores attenuation properties in a reusable manner."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "This allows for adjustment to attenuation properties without having to revisit every Sound Actor individually."
                                           }
                                       ],
                          "detailedQuestion":  "A ____________ stores attenuation properties in a reusable manner. This allows for adjustment to attenuation properties without having to revisit every Sound \u003cspan class=\"term-en\"\u003eActor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（場景物件/Actor）\u003c/span\u003e individually.",
                          "detailedOptions":  [
                                                  "Modulation Effect asset（音訊調變效果資產）",
                                                  "Reverb Effect asset（混響效果資產：模擬大廳、洞穴或浴室等空間的回音殘響特性）",
                                                  "Audio Volume（音效區域體積）",
                                                  "Sound Attenuation asset（聲音衰減資產：設定距離拉遠時音量如何減弱與 3D 空間立體聲定位）"
                                              ]
                      },
                      {
                          "id":  "h07_q4",
                          "chapterId":  "h07",
                          "qNum":  4,
                          "type":  "TF",
                          "question":  "A Reverb Effect asset adds motion and depth to sound. The Modulation settings allow you to control the minimum and maximum modulation for both pitch and volume as well as set a high-frequency gain multiplier.",
                          "questionZh":  "混響效果資產（Reverb Effect asset）為聲音增添運動感與深度。Modulation（調變）設定允許你控制音高與音量的最小和最大調變，並設定高頻增益倍率。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "False",
                          "correctIndex":  1,
                          "correctText":  "False",
                          "explanation":  "【UE 4.27 核心考點：混響 vs 音訊調變】\n錯誤。音高（Pitch）與音量（Volume）的最小/最大調變是由 Sound Modulation（調變設定）控制，而非 Reverb Effect（混響效果資產主要控制空間反射、房間尺寸與回音衰減）。",
                          "keywords":  [
                                           {
                                               "term":  "Reverb Effect vs Modulation",
                                               "role":  "Reverb 控制空間殘響，Modulation 控制音高與音量調變"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "A Reverb Effect asset adds motion and depth to sound."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "The Modulation settings allow you to control the minimum and maximum modulation for both pitch and volume as well as set a high-frequency gain multiplier."
                                           }
                                       ],
                          "detailedQuestion":  "A \u003cspan class=\"term-en\"\u003eReverb Effect asset\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（空間殘響/混響效果資產）\u003c/span\u003e adds motion and depth to sound. The \u003cspan class=\"term-en\"\u003eModulation settings\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（隨機音高音量調變設定）\u003c/span\u003e allow you to control the minimum and maximum modulation for both pitch and volume as well as set a high-frequency gain multiplier.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h07_q5",
                          "chapterId":  "h07",
                          "qNum":  5,
                          "type":  "MC",
                          "question":  "The ____________ Is a node-based editor that gives you the ability to modify Sound Waves and store the result as a Sound Cue asset. You can add modulation, reverb, and randomness.",
                          "questionZh":  "____________ 是一個節點式編輯器，賦予你修改 Sound Wave 音訊波形並將結果儲存為 Sound Cue 資產的能力。你可以在其中加入調變、混響與隨機化效果。",
                          "options":  [
                                          "Sound Cue Editor",
                                          "Audio Editor",
                                          "Audacity",
                                          "Attenuation Editor"
                                      ],
                          "optionsZh":  [
                                            "Sound Cue Editor（Sound Cue 節點編輯器：設計複雜動態音效播放邏輯的圖表工具）",
                                            "Audio Editor（音訊編輯器）",
                                            "Audacity（Audacity 第三方錄音與音訊編輯軟體）",
                                            "Attenuation Editor（衰減編輯器）"
                                        ],
                          "rawAnswer":  "Sound Cue Editor",
                          "correctIndex":  0,
                          "correctText":  "Sound Cue Editor",
                          "explanation":  "【UE 4.27 核心考點：Sound Cue Editor】\n在 Sound Cue Editor 中雙擊開啟資產，使用 Modulator 隨機調整 Pitch 與 Volume，可避免槍聲或腳步聲重複播放時聽起來機械單調。",
                          "keywords":  [
                                           {
                                               "term":  "Sound Wave（音效波形）",
                                               "role":  "原始 16-bit 44.1kHz .wav 匯入後的基礎音訊資產"
                                           },
                                           {
                                               "term":  "Sound Cue（音效提示）",
                                               "role":  "節點式音效網絡，支援多曲隨機抽取、音高/音量隨機調製與混音"
                                           },
                                           {
                                               "term":  "Sound Attenuation（聲音衰減）",
                                               "role":  "定義聲音隨距離拉遠時的音量衰減曲線與 3D 空間立體聲像定位（Spatialization）"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "The ____________ Is a node-based editor that gives you the ability to modify Sound Waves and store the result as a Sound Cue asset."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "You can add modulation, reverb, and randomness."
                                           }
                                       ],
                          "detailedQuestion":  "The ____________ Is a node-based editor that gives you the ability to \u003cspan class=\"term-en\"\u003emodify\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（修改/調節）\u003c/span\u003e \u003cspan class=\"term-en\"\u003eSound Waves\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（原始音效素材）\u003c/span\u003e and store the result as a \u003cspan class=\"term-en\"\u003eSound Cue asset\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（Sound Cue 音效資產）\u003c/span\u003e. You can add modulation, reverb, and randomness.",
                          "detailedOptions":  [
                                                  "Sound Cue Editor（Sound Cue 節點編輯器：設計複雜動態音效播放邏輯的圖表工具）",
                                                  "Audio Editor（音訊編輯器）",
                                                  "Audacity（Audacity 第三方錄音與音訊編輯軟體）",
                                                  "Attenuation Editor（衰減編輯器）"
                                              ]
                      },
                      {
                          "id":  "h07_q6",
                          "chapterId":  "h07",
                          "qNum":  6,
                          "type":  "MC",
                          "question":  "A ____________ is a definable asset with adjustable property settings that will allow you to control such elements as echo density, overall reverb gain, and air absorption to help craft the overall feel you may be after.",
                          "questionZh":  "____________ 是一個具備可調屬性設定的自訂資產，允許你控制回音密度、整體混響增益以及空氣吸收等要素，幫助你塑造出所需的整體空間聽覺感受。",
                          "options":  [
                                          "Sound Attenuation asset",
                                          "Sound Cue asset",
                                          "Modulation Effect asset",
                                          "Reverb Effect asset"
                                      ],
                          "optionsZh":  [
                                            "Sound Attenuation asset（聲音衰減資產：設定距離拉遠時音量如何減弱與 3D 空間立體聲定位）",
                                            "Sound Cue asset（Sound Cue 音效藍圖：可用節點組合隨機音調、淡入淡出與混音邏輯）",
                                            "Modulation Effect asset（音訊調變效果資產）",
                                            "Reverb Effect asset（混響效果資產：模擬大廳、洞穴或浴室等空間的回音殘響特性）"
                                        ],
                          "rawAnswer":  "Reverb Effect asset",
                          "correctIndex":  3,
                          "correctText":  "Reverb Effect asset",
                          "explanation":  "【UE 4.27 核心考點：Reverb Effect 混響效果】\nReverb Effect asset 模擬洞穴、浴室、大教堂或空曠走廊等空間聲學環境的反射殘響參數。",
                          "keywords":  [
                                           {
                                               "term":  "Sound Cue（音效提示）",
                                               "role":  "節點式音效網絡，支援多曲隨機抽取、音高/音量隨機調製與混音"
                                           },
                                           {
                                               "term":  "Sound Attenuation（聲音衰減）",
                                               "role":  "定義聲音隨距離拉遠時的音量衰減曲線與 3D 空間立體聲像定位（Spatialization）"
                                           },
                                           {
                                               "term":  "Reverb Effect（混響效果）",
                                               "role":  "模擬山洞、教堂、浴室等封閉環境的空間殘響聲學反射"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "A ____________ is a definable asset with adjustable \u003cspan class=\"term-en\"\u003eproperty\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（空間聲學屬性）\u003c/span\u003e settings that will allow you to control such elements as echo density, overall reverb gain, and air absorption to help craft the overall feel you may be after.",
                          "detailedOptions":  [
                                                  "Sound Attenuation asset（聲音衰減資產：設定距離拉遠時音量如何減弱與 3D 空間立體聲定位）",
                                                  "Sound Cue asset（Sound Cue 音效藍圖：可用節點組合隨機音調、淡入淡出與混音邏輯）",
                                                  "Modulation Effect asset（音訊調變效果資產）",
                                                  "Reverb Effect asset（混響效果資產：模擬大廳、洞穴或浴室等空間的回音殘響特性）"
                                              ]
                      },
                      {
                          "id":  "h07_q7",
                          "chapterId":  "h07",
                          "qNum":  7,
                          "type":  "TF",
                          "question":  "The Looping node is used to randomly trigger a Sound Wave node from within a group of possible Sound Wave nodes.",
                          "questionZh":  "Looping 節點的作用是從一組可能的 Sound Wave 節點中隨機觸發其中一個 Sound Wave 節點。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "False",
                          "correctIndex":  1,
                          "correctText":  "False",
                          "explanation":  "【UE 4.27 核心考點：Sound Cue 節點職責】\n錯誤。Looping 節點的作用是讓音訊持續循環播放；從一組節點中「隨機抽取觸發」的節點是 Random 節點。",
                          "keywords":  [
                                           {
                                               "term":  "Random vs Looping 節點",
                                               "role":  "Random 用於隨機抽取不同音效，Looping 用於循環重播"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The Looping node is used to randomly trigger a \u003cspan class=\"term-en\"\u003eSound Wave\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（原始音訊素材 .wav）\u003c/span\u003e node from within a group of possible \u003cspan class=\"term-en\"\u003eSound Wave\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（原始音訊素材 .wav）\u003c/span\u003e nodes.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "h07_q8",
                          "chapterId":  "h07",
                          "qNum":  8,
                          "type":  "MC",
                          "question":  "A ____________ allows you to control and apply various sounds in your Level as well as provides an avenue to create compartmentalized audio zones where you can control what is heard inside and outside of the volume.",
                          "questionZh":  "____________ 允許你在關卡中控制並套用各種聲音，同時提供了一種劃分區域音訊區塊的方法，讓你能控制在該體積內部與外部所聽到的聲音。",
                          "options":  [
                                          "Sound Modulation Actor",
                                          "Reverb Actor",
                                          "Ambient Sound Actor",
                                          "Audio Volume Actor"
                                      ],
                          "optionsZh":  [
                                            "Sound Modulation Actor（音訊調變物件）",
                                            "Reverb Actor（混響物件）",
                                            "Ambient Sound Actor（環境音效：放置於場景特定位置發聲的世界實體物件）",
                                            "Audio Volume Actor（音訊體積：定義特定室內空間的混響回音與隔音範圍）"
                                        ],
                          "rawAnswer":  "Audio Volume Actor",
                          "correctIndex":  3,
                          "correctText":  "Audio Volume Actor",
                          "explanation":  "【UE 4.27 核心考點：Audio Volume 音訊體積】\n放置於特定室內空間，能套用專屬的 Reverb Settings，並能隔離或衰減室外傳入的環境噪音。",
                          "keywords":  [
                                           {
                                               "term":  "Reverb Effect（混響效果）",
                                               "role":  "模擬山洞、教堂、浴室等封閉環境的空間殘響聲學反射"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "A ____________ allows you to control and apply various sounds in your \u003cspan class=\"term-en\"\u003eLevel\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（關卡場景）\u003c/span\u003e as well as provides an avenue to create compartmentalized audio zones where you can control what is heard inside and outside of the volume.",
                          "detailedOptions":  [
                                                  "Sound Modulation Actor（音訊調變物件）",
                                                  "Reverb Actor（混響物件）",
                                                  "Ambient Sound Actor（環境音效：放置於場景特定位置發聲的世界實體物件）",
                                                  "Audio Volume Actor（音訊體積：定義特定室內空間的混響回音與隔音範圍）"
                                              ]
                      },
                      {
                          "id":  "h07_q9",
                          "chapterId":  "h07",
                          "qNum":  9,
                          "type":  "MC",
                          "question":  "A ____________ is used to trigger multiple Sound Wave nodes simultaneously.",
                          "questionZh":  "____________ 是用來同時觸發多個 Sound Wave 節點的節點工具。",
                          "options":  [
                                          "Wave Player node",
                                          "Random node",
                                          "Mixer node",
                                          "Looping node"
                                      ],
                          "optionsZh":  [
                                            "Wave Player node（波形播放節點：在 Sound Cue 中播放指定的 WAV 音訊資產）",
                                            "Random node（隨機挑選節點：從多個音效中隨機抽取一個播放以避免聽覺重複單調）",
                                            "Mixer node（混音節點：將多路音效輸入同時疊加播放）",
                                            "Looping node（循環播放節點：讓音效不間斷重播）"
                                        ],
                          "rawAnswer":  "Mixer node",
                          "correctIndex":  2,
                          "correctText":  "Mixer node",
                          "explanation":  "【UE 4.27 核心考點：Mixer 混音節點】\nMixer 節點接收多個輸入引腳並同時疊加輸出；相較之下 Concatenator 是接續依序播放。",
                          "keywords":  [
                                           {
                                               "term":  "Sound Wave（音效波形）",
                                               "role":  "原始 16-bit 44.1kHz .wav 匯入後的基礎音訊資產"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "A ____________ is used to trigger \u003cspan class=\"term-en\"\u003emultiple\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（多個/多路）\u003c/span\u003e \u003cspan class=\"term-en\"\u003eSound Wave\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（原始音訊素材 .wav）\u003c/span\u003e nodes simultaneously.",
                          "detailedOptions":  [
                                                  "Wave Player node（波形播放節點：在 Sound Cue 中播放指定的 WAV 音訊資產）",
                                                  "Random node（隨機挑選節點：從多個音效中隨機抽取一個播放以避免聽覺重複單調）",
                                                  "Mixer node（混音節點：將多路音效輸入同時疊加播放）",
                                                  "Looping node（循環播放節點：讓音效不間斷重播）"
                                              ]
                      },
                      {
                          "id":  "h07_q10",
                          "chapterId":  "h07",
                          "qNum":  10,
                          "type":  "TF",
                          "question":  "You can place an Ambient Sound Actor in your Level by dragging a Sound Cue asset from the Content Browser into your Level.",
                          "questionZh":  "你可以透過將 Sound Cue 資產從內容瀏覽器直接拖曳到關卡中，來在關卡中放置一個環境音效 Actor（Ambient Sound Actor）。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：快速放置環境音效】\n正確。從 Content Browser 中將任何 Sound Cue 或 Sound Wave 資產直接拖曳進關卡工作視窗，引擎會自動在該世界坐標生成一個引用該音訊資產的 Ambient Sound Actor。",
                          "keywords":  [
                                           {
                                               "term":  "Ambient Sound Actor 放置",
                                               "role":  "從 Content Browser 拖入音訊資產即可自動在關卡中實例化環境音效物件"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "You can place an \u003cspan class=\"term-en\"\u003eAmbient Sound Actor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（環境音效物件）\u003c/span\u003e in your \u003cspan class=\"term-en\"\u003eLevel\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（關卡場景）\u003c/span\u003e by dragging a \u003cspan class=\"term-en\"\u003eSound Cue asset\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（Sound Cue 音效資產）\u003c/span\u003e from the \u003cspan class=\"term-en\"\u003eContent Browser\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（內容瀏覽器/素材庫）\u003c/span\u003e into your \u003cspan class=\"term-en\"\u003eLevel\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（關卡場景）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q1",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  1,
                          "type":  "MC",
                          "question":  "In the Level Viewport, you can switch between Perspective and ____________ display modes.",
                          "questionZh":  "在關卡工作視窗（Level Viewport）中，你可以在透視（Perspective）與 ____________ 顯示模式之間切換。",
                          "options":  [
                                          "Paint",
                                          "Lit",
                                          "Orthographic",
                                          "Templates"
                                      ],
                          "optionsZh":  [
                                            "Paint（繪製模式：用於頂點色或地貌材質圖層塗抹）",
                                            "Lit（帶光照模式：預設完整呈現材質與光影效果）",
                                            "Orthographic（正交視圖：無透視變形的平行二維投影視圖，含頂/前/側視圖）",
                                            "Templates（專案樣板：建立新專案時的預設遊戲類型範本）"
                                        ],
                          "rawAnswer":  "Orthographic",
                          "correctIndex":  2,
                          "correctText":  "Orthographic",
                          "explanation":  "【UE 4.27 核心考點：工作視窗投影顯示模式】\n關卡工作視窗提供透視（Perspective，具備近大遠小 3D 空間感）與正交（Orthographic，無透視變形的平行二維投影，包含 Top 頂視圖、Front 前視圖、Side 側視圖）兩種顯示模式。",
                          "keywords":  [
                                           {
                                               "term":  "Perspective / Orthographic（透視與正交視圖）",
                                               "role":  "透視視圖具備近大遠小 3D 空間感；正交視圖為平行投影無變形，適合精密對齊"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "In the \u003cspan class=\"term-en\"\u003eLevel Viewport\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（關卡工作視窗）\u003c/span\u003e, you can switch between \u003cspan class=\"term-en\"\u003ePerspective\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（透視視圖）\u003c/span\u003e and ____________ display modes.",
                          "detailedOptions":  [
                                                  "Paint（繪製模式：用於頂點色或地貌材質圖層塗抹）",
                                                  "Lit（帶光照模式：預設完整呈現材質與光影效果）",
                                                  "Orthographic（正交視圖：無透視變形的平行二維投影視圖，含頂/前/側視圖）",
                                                  "Templates（專案樣板：建立新專案時的預設遊戲類型範本）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q2",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  2,
                          "type":  "TF",
                          "question":  "If you want to temporarily display the collision hulls of all the Actors in your Level, you need to toggle off the Static Mesh show flag.",
                          "questionZh":  "如果你想要在關卡中暫時顯示所有 Actor 的碰撞外框（Collision Hulls），你需要將 Static Mesh 的顯示標記關閉（Toggle off）。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "False",
                          "correctIndex":  1,
                          "correctText":  "False",
                          "explanation":  "【UE 4.27 核心考點：碰撞外框顯示 Show Flags】\n錯誤。若要顯示關卡中 Actor 的碰撞外框，應在工作視窗左上角點擊「Show」選單並勾選「Collision」（快捷鍵 Alt + C），而非關閉 Static Mesh 顯示標記（關閉 Static Mesh 會隱藏模型本身）。",
                          "keywords":  [
                                           {
                                               "term":  "Collision（碰撞體系）",
                                               "role":  "阻止角色與物件穿透，並支援 Ignore（忽略）、Overlap（重疊）與 Block（阻擋）三種回應"
                                           },
                                           {
                                               "term":  "Static Mesh（靜態網格）",
                                               "role":  "剛性 3D 幾何模型，放置於關卡中稱為 Static Mesh Actor，預設使用 UV Channel 1 儲存 Lightmap"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "If you want to temporarily display the \u003cspan class=\"term-en\"\u003ecollision hulls\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（碰撞外框）\u003c/span\u003e of all the Actors in your Level, you need to toggle off the \u003cspan class=\"term-en\"\u003eStatic Mesh\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（靜態網格）\u003c/span\u003e show flag.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q3",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  3,
                          "type":  "TF",
                          "question":  "The World Outliner shows you all the Actors that are placed in the current Level.",
                          "questionZh":  "世界大綱（World Outliner）會顯示目前關卡中所放置的所有 Actor 物件。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：World Outliner 世界大綱】\n正確。World Outliner 預設位於編輯器右上角，以樹狀階層清單列出目前關卡中載入的所有 Actor（網格、光源、體積、相機、音效等），並支援資料夾分類與搜尋過濾。",
                          "keywords":  [
                                           {
                                               "term":  "World Outliner（世界大綱）",
                                               "role":  "場景總管清單樹，以樹狀結構列出關卡內的所有實例化 Actor 物件"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The \u003cspan class=\"term-en\"\u003eWorld Outliner\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（世界大綱）\u003c/span\u003e shows you all the Actors that are placed in the \u003cspan class=\"term-en\"\u003ecurrent\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（當前/目前）\u003c/span\u003e Level.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q4",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  4,
                          "type":  "MC",
                          "question":  "The Level ____________ panel displays the editable properties for a selected Actor.",
                          "questionZh":  "關卡中的 ____________ 面板會顯示當前所選取 Actor（場景物件）的可編輯屬性。",
                          "options":  [
                                          "Modes",
                                          "Details",
                                          "Content Browser",
                                          "World Outliner"
                                      ],
                          "optionsZh":  [
                                            "Modes（模式面板：放置基礎幾何體、地貌與植被工具）",
                                            "Details（細節面板：檢視與調整所選物件的各項屬性數值）",
                                            "Content Browser（內容瀏覽器：專案所有模型、材質與音效的檔案總管）",
                                            "World Outliner（世界大綱：當前關卡中所有物件的清單總表）"
                                        ],
                          "rawAnswer":  "Details",
                          "correctIndex":  1,
                          "correctText":  "Details",
                          "explanation":  "【UE 4.27 核心考點：Details 細節面板】\n選取關卡工作視窗或世界大綱中的任何 Actor，Details（細節）面板會即時顯示其 Transform（位置/旋轉/縮放）、移動性、材質槽、碰撞預設與各項可編輯屬性。",
                          "keywords":  [
                                           {
                                               "term":  "Details Panel（細節面板）",
                                               "role":  "檢視並修改當前選取 Actor 的所有變換坐標、材質槽與組件屬性"
                                           },
                                           {
                                               "term":  "World Outliner（世界大綱）",
                                               "role":  "場景總管清單樹，以樹狀結構列出關卡內的所有實例化 Actor 物件"
                                           },
                                           {
                                               "term":  "Transform（空間變換）",
                                               "role":  "包含 Location（位移）、Rotation（旋轉）與 Scale（縮放），可獨立切換 Relative 或 World 空間"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The Level ____________ panel displays the editable properties for a selected Actor.",
                          "detailedOptions":  [
                                                  "Modes（模式面板：放置基礎幾何體、地貌與植被工具）",
                                                  "Details（細節面板：檢視與調整所選物件的各項屬性數值）",
                                                  "Content Browser（內容瀏覽器：專案所有模型、材質與音效的檔案總管）",
                                                  "World Outliner（世界大綱：當前關卡中所有物件的清單總表）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q5",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  5,
                          "type":  "MC",
                          "question":  "When creating a new project, you can select from a variety of default ____________ templates, such as First Person, Third Person, Flying, and Puzzle.",
                          "questionZh":  "建立新專案時，你可以從多種預設的 ____________ 樣板中進行選擇，例如第一人稱（First Person）、第三人稱（Third Person）、飛行（Flying）與解謎（Puzzle）。",
                          "options":  [
                                          "Game Mode",
                                          "Graphic Settings",
                                          "Landscape",
                                          "Viewport"
                                      ],
                          "optionsZh":  [
                                            "Game Mode（遊戲模式樣板：預設配置好角色、控制與規則的遊戲範本）",
                                            "Graphic Settings（圖形設定：調整渲染品質與效能等級）",
                                            "Landscape（地貌系統：大型自然地形建立與雕刻工具）",
                                            "Viewport（工作視窗：檢視與操作 3D 關卡場景的核心視窗）"
                                        ],
                          "rawAnswer":  "Game Mode",
                          "correctIndex":  0,
                          "correctText":  "Game Mode",
                          "explanation":  "【UE 4.27 核心考點：Game Mode 遊戲模式樣板】\n建立新專案時，UE4 提供多種預設 Game Mode 遊戲樣板（如 First Person、Third Person、Flying、Puzzle、Top Down 等），預先配置好對應的控制器、攝影機視角與操控角色。",
                          "keywords":  [
                                           {
                                               "term":  "Gameplay Framework \u0026 Game Mode",
                                               "role":  "定義核心遊戲規則、勝負邏輯與生成角色，Game Mode 僅運行於伺服器端"
                                           },
                                           {
                                               "term":  "Landscape 地貌與高度圖系統",
                                               "role":  "Landscape Actor 具備高效 LOD，可透過 Sculpt 雕刻分頁或外部灰階 Height Map 建立地形並用 LandscapeLayerBlend 混合材質"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "When creating a new project, you can select from a variety of default ____________ templates, such as First Person, Third Person, Flying, and Puzzle.",
                          "detailedOptions":  [
                                                  "Game Mode（遊戲模式樣板：預設配置好角色、控制與規則的遊戲範本）",
                                                  "Graphic Settings（圖形設定：調整渲染品質與效能等級）",
                                                  "Landscape（地貌系統：大型自然地形建立與雕刻工具）",
                                                  "Viewport（工作視窗：檢視與操作 3D 關卡場景的核心視窗）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q6",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  6,
                          "type":  "MC",
                          "question":  "____________ files are text files that store Editor, engine, and project preferences.",
                          "questionZh":  "____________ 檔案是用來儲存編輯器、引擎與專案偏好設定的純文字檔案。",
                          "options":  [
                                          ".uasset",
                                          ".umap",
                                          ".ini",
                                          ".uproject"
                                      ],
                          "optionsZh":  [
                                            ".uasset（虛幻資產二進位檔案：儲存材質、網格、藍圖等單一資產）",
                                            ".umap（虛幻關卡地圖檔案：儲存單一關卡場景配置）",
                                            ".ini（組態配置設定檔：儲存編輯器、引擎與專案偏好設定的純文字檔）",
                                            ".uproject（專案描述檔：記錄專案版本、模組與啟用插件的入口檔案）"
                                        ],
                          "rawAnswer":  ".ini",
                          "correctIndex":  2,
                          "correctText":  ".ini",
                          "explanation":  "【UE 4.27 核心考點：.ini 組態設定檔】\n虛幻引擎將編輯器偏好、按鍵映射、渲染參數與專案設定存放在 Config 目錄下的 .ini 純文字檔案中（例如 DefaultEngine.ini、DefaultInput.ini、DefaultGame.ini）。",
                          "keywords":  [
                                           {
                                               "term":  ".ini 組態設定檔",
                                               "role":  "存放在 Config 目錄下，儲存引擎底層參數、編輯器偏好設定與輸入按鍵映射"
                                           },
                                           {
                                               "term":  "Reference Viewer（引用檢視器）",
                                               "role":  "以可視化節點圖展示資產與資產之間的雙向依賴引用關係樹"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "____________ files are text files that store Editor, \u003cspan class=\"term-en\"\u003eengine\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（引擎/核心引擎）\u003c/span\u003e, and project preferences.",
                          "detailedOptions":  [
                                                  ".uasset（虛幻資產二進位檔案：儲存材質、網格、藍圖等單一資產）",
                                                  ".umap（虛幻關卡地圖檔案：儲存單一關卡場景配置）",
                                                  ".ini（組態配置設定檔：儲存編輯器、引擎與專案偏好設定的純文字檔）",
                                                  ".uproject（專案描述檔：記錄專案版本、模組與啟用插件的入口檔案）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q7",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  7,
                          "type":  "MC",
                          "question":  "The ____________ folder is not found in a default project folder.",
                          "questionZh":  "____________ 資料夾不會出現在預設的專案資料夾結構中。",
                          "options":  [
                                          "Save",
                                          "Content",
                                          "Intermediate",
                                          "Raw Files"
                                      ],
                          "optionsZh":  [
                                            "Save（非預設名稱，正確預設資料夾名稱為 Saved）",
                                            "Content（內容資料夾：存放專案所有遊戲資產的核心目錄）",
                                            "Intermediate（中介資料夾：存放編譯與著色器生成的暫存檔案）",
                                            "Raw Files（原始檔案資料夾：不會出現在預設專案目錄結構中）"
                                        ],
                          "rawAnswer":  "Raw Files",
                          "correctIndex":  3,
                          "correctText":  "Raw Files",
                          "explanation":  "【UE 4.27 核心考點：預設專案目錄結構】\n標準 UE4 專案根目錄預設包含 Config、Content、Intermediate 與 Saved 資料夾。「Raw Files」不會出現在預設專案資料夾中，原始美術工程檔通常獨立存放於專案外部。",
                          "keywords":  [
                                           {
                                               "term":  "Unreal Engine 4.27 核心架構",
                                               "role":  "遵循教材與引擎核心工作流規範"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The ____________ folder is not found in a default project folder.",
                          "detailedOptions":  [
                                                  "Save（非預設名稱，正確預設資料夾名稱為 Saved）",
                                                  "Content（內容資料夾：存放專案所有遊戲資產的核心目錄）",
                                                  "Intermediate（中介資料夾：存放編譯與著色器生成的暫存檔案）",
                                                  "Raw Files（原始檔案資料夾：不會出現在預設專案目錄結構中）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q8",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  8,
                          "type":  "MC",
                          "question":  "The ____________ is a collection of C++ or Blueprint classes that manages the rules of the game, handles player input, and defines the avatars, cameras, and player HUDs in UE4 projects.",
                          "questionZh":  "____________ 是一組 C++ 或藍圖類別的集合，在 UE4 專案中負責管理遊戲規則、處理玩家輸入，並定義玩家化身角色（Avatars）、攝影機與玩家 HUD 介面。",
                          "options":  [
                                          "Gameplay Framework",
                                          "Game Mode class",
                                          "Controller class",
                                          "Pawn class"
                                      ],
                          "optionsZh":  [
                                            "Gameplay Framework（遊戲玩法框架：管理規則、輸入、化身角色、相機與 HUD 的類別集合）",
                                            "Game Mode class（遊戲模式類別：僅存在於伺服器端，定義遊戲規則與勝負條件）",
                                            "Controller class（控制器類別：負責接收玩家輸入或 AI 決策並指揮 Pawn）",
                                            "Pawn class（兵卒實體類別：世界中可被控制器附身操控的代理角色或載具）"
                                        ],
                          "rawAnswer":  "Gameplay Framework",
                          "correctIndex":  0,
                          "correctText":  "Gameplay Framework",
                          "explanation":  "【UE 4.27 核心考點：Gameplay Framework 遊戲玩法框架】\nGameplay Framework 是虛幻引擎的核心遊戲邏輯架構，統籌管理 GameMode（規則）、PlayerController（輸入控制）、Pawn/Character（玩家化身）、Camera 與 HUD（介面）。",
                          "keywords":  [
                                           {
                                               "term":  "Gameplay Framework \u0026 Game Mode",
                                               "role":  "定義核心遊戲規則、勝負邏輯與生成角色，Game Mode 僅運行於伺服器端"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The ____________ is a collection of C++ or \u003cspan class=\"term-en\"\u003eBlueprint\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（藍圖系統）\u003c/span\u003e classes that manages the rules of the game, handles player input, and defines the avatars, cameras, and player HUDs in UE4 projects.",
                          "detailedOptions":  [
                                                  "Gameplay Framework（遊戲玩法框架：管理規則、輸入、化身角色、相機與 HUD 的類別集合）",
                                                  "Game Mode class（遊戲模式類別：僅存在於伺服器端，定義遊戲規則與勝負條件）",
                                                  "Controller class（控制器類別：負責接收玩家輸入或 AI 決策並指揮 Pawn）",
                                                  "Pawn class（兵卒實體類別：世界中可被控制器附身操控的代理角色或載具）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q9",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  9,
                          "type":  "MC",
                          "question":  "The ____________ is the definition of the game, including things like the game rules and win conditions. It only exists on the server. It typically should not have much data that changes during play, and it definitely should not have transient data that clients need in the Level.",
                          "questionZh":  "____________ 是遊戲的整體定義，包含遊戲規則與獲勝條件等。它只存在於伺服器端（Server），通常不應存放遊玩期間頻繁變動的資料，且絕對不應存放客戶端在關卡中需要的瞬態資料。",
                          "options":  [
                                          "Controller class",
                                          "HUD class",
                                          "Game Instance class",
                                          "Game Mode class"
                                      ],
                          "optionsZh":  [
                                            "Controller class（控制器類別：負責接收玩家輸入或 AI 決策並指揮 Pawn）",
                                            "HUD class（抬頭顯示器類別：負責管理玩家螢幕上的 2D 介面資訊顯示）",
                                            "Game Instance class（遊戲實例類別：跨關卡持續存在的全局資料管理類別）",
                                            "Game Mode class（遊戲模式類別：僅存在於伺服器端，定義遊戲規則與勝負條件）"
                                        ],
                          "rawAnswer":  "Game Mode class",
                          "correctIndex":  3,
                          "correctText":  "Game Mode class",
                          "explanation":  "【UE 4.27 核心考點：Game Mode class 伺服器權威規則】\nGame Mode 定義遊戲核心規則、生成角色與勝負條件。在多人連線架構中，Game Mode 僅實例化於伺服器端（Server Only），客戶端不會擁有此物件以確保規則安全性。",
                          "keywords":  [
                                           {
                                               "term":  "Gameplay Framework \u0026 Game Mode",
                                               "role":  "定義核心遊戲規則、勝負邏輯與生成角色，Game Mode 僅運行於伺服器端"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "The ____________ is the definition of the game, including things like the game rules and win conditions."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "It only exists on the server."
                                           },
                                           {
                                               "partNum":  3,
                                               "en":  "It typically should not have much data that changes during play, and it definitely should not have transient data that clients need in the Level."
                                           }
                                       ],
                          "detailedQuestion":  "The ____________ is the definition of the game, including things like the game rules and win conditions. It only exists on the server. It typically should not have much data that changes during play, and it definitely should not have transient data that clients need in the Level.",
                          "detailedOptions":  [
                                                  "Controller class（控制器類別：負責接收玩家輸入或 AI 決策並指揮 Pawn）",
                                                  "HUD class（抬頭顯示器類別：負責管理玩家螢幕上的 2D 介面資訊顯示）",
                                                  "Game Instance class（遊戲實例類別：跨關卡持續存在的全局資料管理類別）",
                                                  "Game Mode class（遊戲模式類別：僅存在於伺服器端，定義遊戲規則與勝負條件）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q10",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  10,
                          "type":  "MC",
                          "question":  "The ____________ Viewer shows the dependencies for an asset.",
                          "questionZh":  "____________ 檢視器（Viewer）用來顯示單一資產的依賴引用關係（Dependencies）。",
                          "options":  [
                                          "Viewport",
                                          "Reference",
                                          "Migration",
                                          "Import"
                                      ],
                          "optionsZh":  [
                                            "Viewport（工作視窗：檢視與操作 3D 關卡場景的核心視窗）",
                                            "Reference（引用檢視器 Reference Viewer：以視覺化節點圖顯示資產依賴關係）",
                                            "Migration（遷移工具：跨專案連同依賴項打包複製資產）",
                                            "Import（匯入功能：將外部 FBX、貼圖或音訊檔案導入專案）"
                                        ],
                          "rawAnswer":  "Reference",
                          "correctIndex":  1,
                          "correctText":  "Reference",
                          "explanation":  "【UE 4.27 核心考點：Reference Viewer 引用檢視器】\n在 Content Browser 對資產按右鍵選擇「Reference Viewer（快捷鍵 Shift + Alt + R）」，即可以節點圖清楚檢視哪些關卡或藍圖引用了該資產，以及該資產依賴了哪些材質與貼圖。",
                          "keywords":  [
                                           {
                                               "term":  "Reference Viewer（引用檢視器）",
                                               "role":  "以可視化節點圖展示資產與資產之間的雙向依賴引用關係樹"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The ____________ Viewer shows the dependencies for an asset.",
                          "detailedOptions":  [
                                                  "Viewport（工作視窗：檢視與操作 3D 關卡場景的核心視窗）",
                                                  "Reference（引用檢視器 Reference Viewer：以視覺化節點圖顯示資產依賴關係）",
                                                  "Migration（遷移工具：跨專案連同依賴項打包複製資產）",
                                                  "Import（匯入功能：將外部 FBX、貼圖或音訊檔案導入專案）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q11",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  11,
                          "type":  "TF",
                          "question":  "Transforms store the position, rotation, and scale of an Actor in 3D space.",
                          "questionZh":  "變換（Transforms）儲存了 Actor 在 3D 空間中的位置（Position）、旋轉（Rotation）與縮放（Scale）資訊。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：Transform 空間變換】\n正確。在 UE4 中，Transform 由 Location（位置座標）、Rotation（三軸旋轉角度）與 Scale（三軸縮放比例）三大屬性共同組成。",
                          "keywords":  [
                                           {
                                               "term":  "Transform（空間變換）",
                                               "role":  "包含 Location（位移）、Rotation（旋轉）與 Scale（縮放），可獨立切換 Relative 或 World 空間"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "\u003cspan class=\"term-en\"\u003eTransforms\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（空間變換）\u003c/span\u003e store the position, rotation, and scale of an Actor in 3D space.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q12",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  12,
                          "type":  "TF",
                          "question":  "1 Unreal unit (uu) is equal to 10 centimeters.",
                          "questionZh":  "1 個虛幻單位（Unreal unit, uu）等於 10 公分（centimeters）。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "False",
                          "correctIndex":  1,
                          "correctText":  "False",
                          "explanation":  "【UE 4.27 核心考點：Unreal Unit 虛幻度量衡】\n錯誤。在 UE4 中，1 個虛幻單位（1 uu）嚴格等於 1 公分（1 centimeter），而非 10 公分。100 uu 才等於 1 公尺。",
                          "keywords":  [
                                           {
                                               "term":  "Unreal Engine 4.27 核心架構",
                                               "role":  "遵循教材與引擎核心工作流規範"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "1 Unreal unit (uu) is equal to 10 centimeters.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q13",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  13,
                          "type":  "TF",
                          "question":  "It is possible to set the Move, Rotation, and Scale transforms to “Relative” or “World” (absolute) independently of one another.",
                          "questionZh":  "我們可以將移動（Move）、旋轉（Rotation）與縮放（Scale）變換彼此獨立地分別設定為「相對（Relative）」或「世界絕對（World）」。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：Relative 與 World 變換空間獨立切換】\n正確。在 Details 面板的 Transform 區塊中，Location、Rotation 與 Scale 左側的下拉選單可各自獨立切換為 Relative（相對於父物件）或 World（世界絕對坐標）。",
                          "keywords":  [
                                           {
                                               "term":  "Details Panel（細節面板）",
                                               "role":  "檢視並修改當前選取 Actor 的所有變換坐標、材質槽與組件屬性"
                                           },
                                           {
                                               "term":  "Transform（空間變換）",
                                               "role":  "包含 Location（位移）、Rotation（旋轉）與 Scale（縮放），可獨立切換 Relative 或 World 空間"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "It is possible to set the Move, Rotation, and Scale transforms to “Relative” or “World” (absolute) independently of one another.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q14",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  14,
                          "type":  "MC",
                          "question":  "____________ creates a parent-child relationship between two or more Actors where the child Actor’s transforms become relative to the parent’s transforms by default.",
                          "questionZh":  "____________ 會在兩個或多個 Actor 之間建立父子關係（Parent-Child Relationship），使子 Actor 的變換預設相對於父 Actor 的變換進行計算。",
                          "options":  [
                                          "Combining",
                                          "Layers",
                                          "Grouping",
                                          "Attaching"
                                      ],
                          "optionsZh":  [
                                            "Combining（結合：將多個網格合併的操作，非動態父子階層關係）",
                                            "Layers（圖層系統：用於分類管理與批次切換物件可見度）",
                                            "Grouping（群組化：將多個 Actor 綁定為單一選取單位以便同步移動）",
                                            "Attaching（附加/附著：建立父子階層關係，使子物件變換預設相對於父物件）"
                                        ],
                          "rawAnswer":  "Attaching",
                          "correctIndex":  3,
                          "correctText":  "Attaching",
                          "explanation":  "【UE 4.27 核心考點：Attaching 父子階層附加】\n透過 Attaching（附加）建立父子關係後，當父 Actor 移動、旋轉或縮放時，子 Actor 會自動跟隨並保持相對空間偏移。",
                          "keywords":  [
                                           {
                                               "term":  "Transform（空間變換）",
                                               "role":  "包含 Location（位移）、Rotation（旋轉）與 Scale（縮放），可獨立切換 Relative 或 World 空間"
                                           },
                                           {
                                               "term":  "Attaching（父子附加關係）",
                                               "role":  "在 World Outliner 中建立父子階層鏈，子物件自動繼承並跟隨父級的空間變換"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "____________ creates a parent-child relationship between two or more Actors where the child Actor’s transforms become relative to the parent’s transforms by default.",
                          "detailedOptions":  [
                                                  "Combining（結合：將多個網格合併的操作，非動態父子階層關係）",
                                                  "Layers（圖層系統：用於分類管理與批次切換物件可見度）",
                                                  "Grouping（群組化：將多個 Actor 綁定為單一選取單位以便同步移動）",
                                                  "Attaching（附加/附著：建立父子階層關係，使子物件變換預設相對於父物件）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q15",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  15,
                          "type":  "MC",
                          "question":  "If you want to attach two Actors to create a parent-child relationship, this can be done in the ____________.",
                          "questionZh":  "如果你想要將兩個 Actor 進行附加（Attach）以建立父子關係，可以在 ____________ 中操作完成。",
                          "options":  [
                                          "World Outliner",
                                          "Details panel",
                                          "Content Browser",
                                          "Modes panel"
                                      ],
                          "optionsZh":  [
                                            "World Outliner（世界大綱：當前關卡中所有物件的清單總表）",
                                            "Details panel（細節面板：檢視並編輯所選 Actor 的屬性參數）",
                                            "Content Browser（內容瀏覽器：專案所有模型、材質與音效的檔案總管）",
                                            "Modes panel（模式面板：切換放置、筆刷、地貌與植被工具模式）"
                                        ],
                          "rawAnswer":  "World Outliner",
                          "correctIndex":  0,
                          "correctText":  "World Outliner",
                          "explanation":  "【UE 4.27 核心考點：World Outliner 拖曳建立父子關係】\n在 World Outliner（世界大綱）中，直接用滑鼠將子 Actor 拖曳放到父 Actor 名稱上方，即可快速完成附加（Attach）並建立階層樹。",
                          "keywords":  [
                                           {
                                               "term":  "Details Panel（細節面板）",
                                               "role":  "檢視並修改當前選取 Actor 的所有變換坐標、材質槽與組件屬性"
                                           },
                                           {
                                               "term":  "World Outliner（世界大綱）",
                                               "role":  "場景總管清單樹，以樹狀結構列出關卡內的所有實例化 Actor 物件"
                                           },
                                           {
                                               "term":  "Attaching（父子附加關係）",
                                               "role":  "在 World Outliner 中建立父子階層鏈，子物件自動繼承並跟隨父級的空間變換"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "If you want to attach two Actors to create a parent-child relationship, this can be done in the ____________.",
                          "detailedOptions":  [
                                                  "World Outliner（世界大綱：當前關卡中所有物件的清單總表）",
                                                  "Details panel（細節面板：檢視並編輯所選 Actor 的屬性參數）",
                                                  "Content Browser（內容瀏覽器：專案所有模型、材質與音效的檔案總管）",
                                                  "Modes panel（模式面板：切換放置、筆刷、地貌與植被工具模式）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q16",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  16,
                          "type":  "TF",
                          "question":  "Once a Static Mesh asset has been placed in a Level, it is referred to as a Static Mesh Actor.",
                          "questionZh":  "一旦將靜態網格資產（Static Mesh asset）放置到關卡中，它就被稱為靜態網格 Actor（Static Mesh Actor）。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：Static Mesh Asset vs Static Mesh Actor】\n正確。存放在 Content Browser 中的模型檔案稱為 Static Mesh asset；當拖曳進關卡場景實例化後，即成為具備空間變換與場景屬性的 Static Mesh Actor。",
                          "keywords":  [
                                           {
                                               "term":  "Static Mesh（靜態網格）",
                                               "role":  "剛性 3D 幾何模型，放置於關卡中稱為 Static Mesh Actor，預設使用 UV Channel 1 儲存 Lightmap"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "Once a \u003cspan class=\"term-en\"\u003eStatic Mesh asset\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（靜態網格資產）\u003c/span\u003e has been placed in a Level, it is referred to as a \u003cspan class=\"term-en\"\u003eStatic Mesh Actor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（靜態網格物件）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q17",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  17,
                          "type":  "MC",
                          "question":  "The three collision response types are ____________.",
                          "questionZh":  "三種碰撞回應（Collision response）類型分別是 ____________。",
                          "options":  [
                                          "Bounce, Hit, and Intersection",
                                          "Ignore, Overlap, and Block",
                                          "Ignore, Intersection, and Touch",
                                          "Block, Touch, and, Overlap"
                                      ],
                          "optionsZh":  [
                                            "Bounce, Hit, and Intersection（干擾項：非 UE4 標準碰撞回應三態）",
                                            "Ignore, Overlap, and Block（忽略、重疊、阻擋：UE4 標準三種碰撞回應類型）",
                                            "Ignore, Intersection, and Touch（干擾項：非 UE4 標準碰撞回應三態）",
                                            "Block, Touch, and, Overlap（干擾項：Touch 非 UE4 碰撞回應名稱）"
                                        ],
                          "rawAnswer":  "Ignore, Overlap, and Block",
                          "correctIndex":  1,
                          "correctText":  "Ignore, Overlap, and Block",
                          "explanation":  "【UE 4.27 核心考點：碰撞回應三態 Ignore / Overlap / Block】\nUE4 的三種碰撞回應為：Ignore（完全忽略穿透）、Overlap（允許穿透但觸發重疊事件）、Block（實體物理阻擋並觸發 Hit 事件）。",
                          "keywords":  [
                                           {
                                               "term":  "Collision（碰撞體系）",
                                               "role":  "阻止角色與物件穿透，並支援 Ignore（忽略）、Overlap（重疊）與 Block（阻擋）三種回應"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The three collision response types are ____________.",
                          "detailedOptions":  [
                                                  "Bounce, Hit, and Intersection（干擾項：非 UE4 標準碰撞回應三態）",
                                                  "Ignore, Overlap, and Block（忽略、重疊、阻擋：UE4 標準三種碰撞回應類型）",
                                                  "Ignore, Intersection, and Touch（干擾項：非 UE4 標準碰撞回應三態）",
                                                  "Block, Touch, and, Overlap（干擾項：Touch 非 UE4 碰撞回應名稱）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q18",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  18,
                          "type":  "MC",
                          "question":  "If you want a Static Mesh Actor to be lit in real time, you should change its Mobility setting to ____________.",
                          "questionZh":  "如果你希望一個靜態網格 Actor（Static Mesh Actor）在遊戲中接受即時動態光照（Lit in real time），你應該將其移動性（Mobility）設定改為 ____________。",
                          "options":  [
                                          "Hidden",
                                          "Static",
                                          "Movable",
                                          "Transform"
                                      ],
                          "optionsZh":  [
                                            "Hidden（隱藏屬性：控制物件在遊戲中是否可見，非移動性設定）",
                                            "Static（靜態：完全不可移動，僅使用離線預先烘焙的光照貼圖）",
                                            "Movable（可移動：支援即時動態光照與陰影，可在遊戲中任意移動或物理模擬）",
                                            "Transform（空間變換：包含位置、旋轉與縮放數值，非移動性選項）"
                                        ],
                          "rawAnswer":  "Movable",
                          "correctIndex":  2,
                          "correctText":  "Movable",
                          "explanation":  "【UE 4.27 核心考點：Mobility 移動性與即時光照】\n將 Mobility 設為 Movable（可移動）時，該 Actor 不會參與靜態光照貼圖烘焙，而是在遊戲執行時完全採用即時動態光照與動態陰影計算。",
                          "keywords":  [
                                           {
                                               "term":  "Transform（空間變換）",
                                               "role":  "包含 Location（位移）、Rotation（旋轉）與 Scale（縮放），可獨立切換 Relative 或 World 空間"
                                           },
                                           {
                                               "term":  "Static Mesh（靜態網格）",
                                               "role":  "剛性 3D 幾何模型，放置於關卡中稱為 Static Mesh Actor，預設使用 UV Channel 1 儲存 Lightmap"
                                           },
                                           {
                                               "term":  "Mobility（移動性設定）",
                                               "role":  "Static（靜態烘焙）、Stationary（固定位置動態亮度）、Movable（完全即時動態光照與物理移動）"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "If you want a \u003cspan class=\"term-en\"\u003eStatic Mesh Actor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（靜態網格物件）\u003c/span\u003e to be lit in real time, you should change its \u003cspan class=\"term-en\"\u003eMobility\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（移動性設定）\u003c/span\u003e setting to ____________.",
                          "detailedOptions":  [
                                                  "Hidden（隱藏屬性：控制物件在遊戲中是否可見，非移動性設定）",
                                                  "Static（靜態：完全不可移動，僅使用離線預先烘焙的光照貼圖）",
                                                  "Movable（可移動：支援即時動態光照與陰影，可在遊戲中任意移動或物理模擬）",
                                                  "Transform（空間變換：包含位置、旋轉與縮放數值，非移動性選項）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q19",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  19,
                          "type":  "TF",
                          "question":  "By default, lightmap UV channels are stored in UV Channel 1.",
                          "questionZh":  "預設情況下，光照貼圖 UV 通道（Lightmap UV channels）儲存在 UV Channel 1 中。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：Lightmap UV Channel 1 預設通道】\n正確。在 UE4 中（索引從 0 開始），UV Channel 0 預設用於材質紋理貼圖（Texture UV），而 UV Channel 1 則預設用於儲存無重疊的光照貼圖座標（Lightmap UV）。",
                          "keywords":  [
                                           {
                                               "term":  "Unreal Engine 4.27 核心架構",
                                               "role":  "遵循教材與引擎核心工作流規範"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "By default, lightmap UV channels are stored in \u003cspan class=\"term-en\"\u003eUV Channel 1\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（第 1 號 UV 通道）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q20",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  20,
                          "type":  "MC",
                          "question":  "The two common file types used to import 3D models into the Editor are ____________.",
                          "questionZh":  "用來將 3D 模型匯入編輯器最常見的兩種檔案類型是 ____________。",
                          "options":  [
                                          ".pdf and .fbx",
                                          ".fbx and .obj",
                                          ".obj and .3ds",
                                          ".stl and .obj"
                                      ],
                          "optionsZh":  [
                                            ".pdf and .fbx（錯誤：.pdf 為文件格式，非 3D 模型格式）",
                                            ".fbx and .obj（.fbx 與 .obj：匯入 3D 靜態網格模型最常用的兩種標準格式）",
                                            ".obj and .3ds（錯誤：UE4 不原生支援舊版 .3ds 直接匯入）",
                                            ".stl and .obj（錯誤：標準遊戲資產匯入格式為 .fbx 與 .obj）"
                                        ],
                          "rawAnswer":  ".fbx and .obj",
                          "correctIndex":  1,
                          "correctText":  ".fbx and .obj",
                          "explanation":  "【UE 4.27 核心考點：3D 模型匯入格式 .fbx 與 .obj】\nUE4 支援 .fbx 與 .obj 作為標準 3D 網格模型匯入格式，其中 .fbx 為官方最推薦的完整工業標準格式。",
                          "keywords":  [
                                           {
                                               "term":  "Unreal Engine 4.27 核心架構",
                                               "role":  "遵循教材與引擎核心工作流規範"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The two common file types used to import 3D models into the Editor are ____________.",
                          "detailedOptions":  [
                                                  ".pdf and .fbx（錯誤：.pdf 為文件格式，非 3D 模型格式）",
                                                  ".fbx and .obj（.fbx 與 .obj：匯入 3D 靜態網格模型最常用的兩種標準格式）",
                                                  ".obj and .3ds（錯誤：UE4 不原生支援舊版 .3ds 直接匯入）",
                                                  ".stl and .obj（錯誤：標準遊戲資產匯入格式為 .fbx 與 .obj）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q21",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  21,
                          "type":  "MC",
                          "question":  "____________ is UE4’s offline radiosity rendering engine and is used to calculate lighting for Light and Static Mesh Actors with a Mobility setting of “Static”. You use the lighting build tools in UE4 to precalculate lighting and shadow information in a Level for Static Mesh and Light Actors with a Mobility setting of “Static” and for BSPs.",
                          "questionZh":  "____________ 是 UE4 的離線輻射度渲染引擎，用於計算移動性設為「Static」的光源與靜態網格 Actor 的光照。你可以使用 UE4 的光照建置工具，預先計算關卡中靜態網格、靜態光源與 BSP 幾何筆刷的光照與陰影資訊。",
                          "options":  [
                                          "Lightmass",
                                          "Renderman",
                                          "Mental Ray",
                                          "Raytrace"
                                      ],
                          "optionsZh":  [
                                            "Lightmass（UE4 離線全域光照與輻射度渲染引擎，預先計算靜態光影與間接反彈）",
                                            "Renderman（皮克斯 Pixar 開發的離線電影渲染器，非 UE4 內建系統）",
                                            "Mental Ray（經典離線光線追蹤渲染器，非 UE4 內建光照系統）",
                                            "Raytrace（光線追蹤技術統稱，非 UE4 靜態烘焙引擎名稱）"
                                        ],
                          "rawAnswer":  "Lightmass",
                          "correctIndex":  0,
                          "correctText":  "Lightmass",
                          "explanation":  "【UE 4.27 核心考點：Lightmass 離線全域光照烘焙引擎】\nLightmass 是 UE4 內建的離線輻射度（Radiosity）全域光照渲染系統，專門預先計算靜態光線反彈、柔和陰影與環境遮蔽，並烘培寫入 Lightmap 貼圖。",
                          "keywords":  [
                                           {
                                               "term":  "Static Mesh（靜態網格）",
                                               "role":  "剛性 3D 幾何模型，放置於關卡中稱為 Static Mesh Actor，預設使用 UV Channel 1 儲存 Lightmap"
                                           },
                                           {
                                               "term":  "Mobility（移動性設定）",
                                               "role":  "Static（靜態烘焙）、Stationary（固定位置動態亮度）、Movable（完全即時動態光照與物理移動）"
                                           },
                                           {
                                               "term":  "Lightmass \u0026 Swarm Agent",
                                               "role":  "Lightmass 負責離線輻射度全域光照烘焙；Swarm Agent 負責管理通訊與顯示建置進度"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "____________ is UE4’s offline radiosity rendering engine and is used to calculate lighting for Light and Static Mesh Actors with a Mobility setting of “Static”."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "You use the lighting build tools in UE4 to precalculate lighting and shadow information in a Level for Static Mesh and Light Actors with a Mobility setting of “Static” and for BSPs."
                                           }
                                       ],
                          "detailedQuestion":  "____________ is UE4’s offline radiosity rendering \u003cspan class=\"term-en\"\u003eengine\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（渲染引擎）\u003c/span\u003e and is used to calculate lighting for Light and \u003cspan class=\"term-en\"\u003eStatic Mesh Actors\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（靜態網格物件）\u003c/span\u003e with a \u003cspan class=\"term-en\"\u003eMobility\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（移動性設定）\u003c/span\u003e setting of “Static”. You use the lighting build tools in UE4 to precalculate lighting and shadow information in a Level for \u003cspan class=\"term-en\"\u003eStatic Mesh\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（靜態網格）\u003c/span\u003e and Light Actors with a Mobility setting of “Static” and for BSPs.",
                          "detailedOptions":  [
                                                  "Lightmass（UE4 離線全域光照與輻射度渲染引擎，預先計算靜態光影與間接反彈）",
                                                  "Renderman（皮克斯 Pixar 開發的離線電影渲染器，非 UE4 內建系統）",
                                                  "Mental Ray（經典離線光線追蹤渲染器，非 UE4 內建光照系統）",
                                                  "Raytrace（光線追蹤技術統稱，非 UE4 靜態烘焙引擎名稱）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q22",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  22,
                          "type":  "MC",
                          "question":  "____________ manages communication between the Editor and Lightmass. When you build lighting, it keeps track of and displays the build progress.",
                          "questionZh":  "____________ 負責管理編輯器與 Lightmass 之間的通訊。當你建置光照（Build lighting）時，它會持續追蹤並顯示光照建置進度。",
                          "options":  [
                                          "Epic Games Launcher",
                                          "Radiosity",
                                          "Scanline",
                                          "Swarm Agent"
                                      ],
                          "optionsZh":  [
                                            "Epic Games Launcher（Epic 官方啟動器：管理引擎版本與商城資源）",
                                            "Radiosity（輻射度演算法：光學理論名稱，非管理通訊的外部程式）",
                                            "Scanline（掃描線渲染演算法：傳統圖形學技術名稱）",
                                            "Swarm Agent（負責管理編輯器與 Lightmass 通訊、追蹤並顯示光照建置進度的工具）"
                                        ],
                          "rawAnswer":  "Swarm Agent",
                          "correctIndex":  3,
                          "correctText":  "Swarm Agent",
                          "explanation":  "【UE 4.27 核心考點：Swarm Agent 光照建置管理程式】\n當執行 Build Lighting 時，Swarm Agent 會在背景啟動，管理 Editor 與 Lightmass 之間的工作封包通訊、顯示烘焙進度百分比，並支援多台電腦透過網路協同算圖。",
                          "keywords":  [
                                           {
                                               "term":  "Lightmass \u0026 Swarm Agent",
                                               "role":  "Lightmass 負責離線輻射度全域光照烘焙；Swarm Agent 負責管理通訊與顯示建置進度"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "____________ manages communication between the Editor and Lightmass."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "When you build lighting, it keeps track of and displays the build progress."
                                           }
                                       ],
                          "detailedQuestion":  "____________ manages communication between the Editor and \u003cspan class=\"term-en\"\u003eLightmass\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（Lightmass 靜態光照系統）\u003c/span\u003e. When you build lighting, it keeps track of and displays the build progress.",
                          "detailedOptions":  [
                                                  "Epic Games Launcher（Epic 官方啟動器：管理引擎版本與商城資源）",
                                                  "Radiosity（輻射度演算法：光學理論名稱，非管理通訊的外部程式）",
                                                  "Scanline（掃描線渲染演算法：傳統圖形學技術名稱）",
                                                  "Swarm Agent（負責管理編輯器與 Lightmass 通訊、追蹤並顯示光照建置進度的工具）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q23",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  23,
                          "type":  "TF",
                          "question":  "It is possible to change the Lightmap resolution on a per-Actor basis.",
                          "questionZh":  "我們可以針對關卡中的每一個個別 Actor 單獨修改其光照貼圖解析度（Lightmap resolution）。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：Per-Actor Lightmap Resolution 個別覆蓋】\n正確。選取關卡中的任何 Static Mesh Actor，在 Details 面板的 Lighting 區塊勾選「Override Light Map Res」，即可針對該單一物件覆蓋調整專屬的 Lightmap 解析度，而不影響原始模型資產。",
                          "keywords":  [
                                           {
                                               "term":  "Details Panel（細節面板）",
                                               "role":  "檢視並修改當前選取 Actor 的所有變換坐標、材質槽與組件屬性"
                                           },
                                           {
                                               "term":  "Static Mesh（靜態網格）",
                                               "role":  "剛性 3D 幾何模型，放置於關卡中稱為 Static Mesh Actor，預設使用 UV Channel 1 儲存 Lightmap"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "It is possible to change the \u003cspan class=\"term-en\"\u003eLightmap resolution\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（光照貼圖解析度）\u003c/span\u003e on a per-Actor basis.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q24",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  24,
                          "type":  "MC",
                          "question":  "The ____________ light property overrides light color properties and uses real-world values in kelvins to define the color of a light. For example, a 100W incandescent lightbulb has a temperature of 2,800K.",
                          "questionZh":  "____________ 光源屬性會覆蓋光源顏色屬性，並使用真實世界的開爾文（Kelvins）數值來定義燈光顏色。舉例來說，一顆 100W 白熾燈泡的色溫為 2,800K。",
                          "options":  [
                                          "IES",
                                          "Temperature",
                                          "Intensity",
                                          "Attenuation"
                                      ],
                          "optionsZh":  [
                                            "IES（IES 光域網檔案：描述真實燈具發光分佈形狀的檔案格式）",
                                            "Temperature（色溫屬性：以開爾文 Kelvin 為單位定義光源物理冷暖色調）",
                                            "Intensity（發光強度：控制光源的整體明暗亮度數值）",
                                            "Attenuation（衰減屬性：控制光源或聲音隨距離拉遠而減弱的範圍）"
                                        ],
                          "rawAnswer":  "Temperature",
                          "correctIndex":  1,
                          "correctText":  "Temperature",
                          "explanation":  "【UE 4.27 核心考點：Temperature 光源色溫】\n啟用「Use Temperature」後，Temperature 屬性會以物理開爾文（K）數值控制燈光冷暖色調：低色溫（如 2,800K）呈現溫暖橘黃色光，高色溫（如 6,500K 以上）呈現冷白或冷藍光。",
                          "keywords":  [
                                           {
                                               "term":  "Light Temperature（光源色溫）",
                                               "role":  "以開爾文（Kelvin）為物理單位定義燈光冷暖色調（如 2800K 暖黃白熾燈、6500K 日光）"
                                           },
                                           {
                                               "term":  "Sound Attenuation \u0026 Reverb Effect",
                                               "role":  "Sound Attenuation 封裝可重用的距離衰減設定；Reverb Effect 控制空間回音密度與混響增益"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "The ____________ light property overrides light color properties and uses real-world values in kelvins to define the color of a light."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "For example, a 100W incandescent lightbulb has a temperature of 2,800K."
                                           }
                                       ],
                          "detailedQuestion":  "The ____________ light property overrides light color properties and uses real-world values in kelvins to define the color of a light. For example, a 100W incandescent lightbulb has a temperature of 2,800K.",
                          "detailedOptions":  [
                                                  "IES（IES 光域網檔案：描述真實燈具發光分佈形狀的檔案格式）",
                                                  "Temperature（色溫屬性：以開爾文 Kelvin 為單位定義光源物理冷暖色調）",
                                                  "Intensity（發光強度：控制光源的整體明暗亮度數值）",
                                                  "Attenuation（衰減屬性：控制光源或聲音隨距離拉遠而減弱的範圍）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q25",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  25,
                          "type":  "TF",
                          "question":  "The Light Attenuation property determines the color of the light.",
                          "questionZh":  "光源衰減（Light Attenuation）屬性決定了燈光的顏色。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "False",
                          "correctIndex":  1,
                          "correctText":  "False",
                          "explanation":  "【UE 4.27 核心考點：Light Attenuation 衰減半徑與距離】\n錯誤。Light Attenuation（如 Attenuation Radius 衰減半徑）決定的是光線能照亮的有效距離範圍與隨距離減弱的程度，並不決定燈光顏色。",
                          "keywords":  [
                                           {
                                               "term":  "Sound Attenuation \u0026 Reverb Effect",
                                               "role":  "Sound Attenuation 封裝可重用的距離衰減設定；Reverb Effect 控制空間回音密度與混響增益"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The \u003cspan class=\"term-en\"\u003eLight Attenuation\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（光源衰減）\u003c/span\u003e property determines the color of the light.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q26",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  26,
                          "type":  "TF",
                          "question":  "Mipmaps are automatically generated for imported texture files that are powers of 2.",
                          "questionZh":  "當匯入長寬像素尺寸為 2 的次方（Powers of 2）的紋理貼圖檔案時，系統會自動為其生成多級漸遠紋理（Mipmaps）。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：Mipmaps 自動生成與 2 的次方貼圖規範】\n正確。匯入長寬為 2 的次方（如 512x512、1024x1024、2048x2048）的貼圖時，UE4 會自動生成 Mipmaps 降採樣序列，以消除遠處紋理閃爍（Moire pattern）並大幅節省顯示卡記憶體頻寬。",
                          "keywords":  [
                                           {
                                               "term":  "Mipmaps（多級漸遠紋理）",
                                               "role":  "匯入 2 的次方尺寸貼圖時自動生成，根據距離動態切換解析度以消除閃爍並優化效能"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "\u003cspan class=\"term-en\"\u003eMipmaps\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（多級漸遠紋理）\u003c/span\u003e are automatically generated for imported texture files that are powers of 2.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q27",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  27,
                          "type":  "MC",
                          "question":  "The ____________ input in the Material Editor uses RGB values to control the direction in which light should react with a surface and create the illusion of height variation on a surface.",
                          "questionZh":  "材質編輯器中的 ____________ 輸入端使用 RGB 數值來控制光線與表面互動的方向，並在表面上營造出高低起伏變化的立體視覺錯覺。",
                          "options":  [
                                          "Metallic",
                                          "Texture",
                                          "Specular",
                                          "Normal"
                                      ],
                          "optionsZh":  [
                                            "Metallic（金屬度輸入：控制材質表面呈現絕緣體或金屬導體反射特性）",
                                            "Texture（紋理貼圖：2D 影像素材資產，非材質主節點高度凹凸方向輸入端）",
                                            "Specular（高光反射輸入：微調非金屬表面的鏡面反射強度）",
                                            "Normal（法線輸入：利用 RGB 值控制光線與表面交互方向，營造微觀高低凹凸立體視覺）"
                                        ],
                          "rawAnswer":  "Normal",
                          "correctIndex":  3,
                          "correctText":  "Normal",
                          "explanation":  "【UE 4.27 核心考點：Normal 法線貼圖輸入】\nNormal 輸入端接收法線貼圖（Normal Map），利用 R、G、B 三通道分別記錄切線空間 X、Y、Z 法線向量偏移，在不增加模型多邊形頂點數量的前提下呈現逼真的凹凸受光細節。",
                          "keywords":  [
                                           {
                                               "term":  "PBR 材質與法線系統",
                                               "role":  "Albedo 定義無光影純固有色；Normal Map 以 RGB 控制受光法線方向營造高低凹凸細節"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The ____________ input in the \u003cspan class=\"term-en\"\u003eMaterial Editor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（材質編輯器）\u003c/span\u003e uses RGB values to control the direction in which light should react with a surface and create the illusion of height variation on a surface.",
                          "detailedOptions":  [
                                                  "Metallic（金屬度輸入：控制材質表面呈現絕緣體或金屬導體反射特性）",
                                                  "Texture（紋理貼圖：2D 影像素材資產，非材質主節點高度凹凸方向輸入端）",
                                                  "Specular（高光反射輸入：微調非金屬表面的鏡面反射強度）",
                                                  "Normal（法線輸入：利用 RGB 值控制光線與表面交互方向，營造微觀高低凹凸立體視覺）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q28",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  28,
                          "type":  "TF",
                          "question":  "While UV tiling is controlled in the Material Editor using the Texture Coordinate node, the actual tiling of a Texture is controlled in the Texture properties.",
                          "questionZh":  "雖然 UV 重複平鋪（UV tiling）是在材質編輯器中使用 Texture Coordinate 節點來控制，但貼圖本身的實際平鋪包裹行為（Tiling method）是在紋理屬性（Texture properties）中控制的。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：Texture Properties 平鋪模式與 TexCoord】\n正確。在材質編輯器中透過 TextureCoordinate（TexCoord）節點調整 UV 縮放倍數；而在 Texture Editor 的屬性面板中則控制 X-axis / Y-axis Tiling Method（如 Wrap 重複平鋪、Clamp 邊緣延伸或 Mirror 鏡像）。",
                          "keywords":  [
                                           {
                                               "term":  "PBR 材質與法線系統",
                                               "role":  "Albedo 定義無光影純固有色；Normal Map 以 RGB 控制受光法線方向營造高低凹凸細節"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "While UV tiling is controlled in the \u003cspan class=\"term-en\"\u003eMaterial Editor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（材質編輯器）\u003c/span\u003e using the \u003cspan class=\"term-en\"\u003eTexture Coordinate node\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（紋理坐標節點）\u003c/span\u003e, the actual tiling of a Texture is controlled in the \u003cspan class=\"term-en\"\u003eTexture properties\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（紋理貼圖屬性）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q29",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  29,
                          "type":  "MC",
                          "question":  "The ____________ Editor is a node-based system that uses expressions and functions to manipulate the output to create a desired surface.",
                          "questionZh":  "____________ 編輯器是一個節點式系統，透過運算表達式（Expressions）與函數（Functions）來操作輸出結果，以建立所需的表面材質外觀。",
                          "options":  [
                                          "Lightmass",
                                          "Texture",
                                          "Shader",
                                          "Material"
                                      ],
                          "optionsZh":  [
                                            "Lightmass（UE4 離線全域光照與輻射度渲染引擎，預先計算靜態光影與間接反彈）",
                                            "Texture（紋理貼圖：2D 影像素材資產，非材質主節點高度凹凸方向輸入端）",
                                            "Shader（著色器底層代碼，UE4 中美術人員使用的是節點式 Material Editor）",
                                            "Material（材質編輯器 Material Editor：使用表達式與函數節點塑造表面材質外觀的系統）"
                                        ],
                          "rawAnswer":  "Material",
                          "correctIndex":  3,
                          "correctText":  "Material",
                          "explanation":  "【UE 4.27 核心考點：Material Editor 材質編輯器】\nMaterial Editor（材質編輯器）採用視覺化節點圖表（Node-based Graph），將各種 Material Expressions 與 Material Functions 串聯運算並輸出至主材質節點。",
                          "keywords":  [
                                           {
                                               "term":  "Lightmass \u0026 Swarm Agent",
                                               "role":  "Lightmass 負責離線輻射度全域光照烘焙；Swarm Agent 負責管理通訊與顯示建置進度"
                                           },
                                           {
                                               "term":  "PBR 材質與法線系統",
                                               "role":  "Albedo 定義無光影純固有色；Normal Map 以 RGB 控制受光法線方向營造高低凹凸細節"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The ____________ Editor is a node-based system that uses expressions and functions to manipulate the output to create a desired surface.",
                          "detailedOptions":  [
                                                  "Lightmass（UE4 離線全域光照與輻射度渲染引擎，預先計算靜態光影與間接反彈）",
                                                  "Texture（紋理貼圖：2D 影像素材資產，非材質主節點高度凹凸方向輸入端）",
                                                  "Shader（著色器底層代碼，UE4 中美術人員使用的是節點式 Material Editor）",
                                                  "Material（材質編輯器 Material Editor：使用表達式與函數節點塑造表面材質外觀的系統）"
                                              ]
                      },
                      {
                          "id":  "01_to_06_Test_q30",
                          "chapterId":  "01_to_06_Test",
                          "qNum":  30,
                          "type":  "MC",
                          "question":  "Base color, also called ____________, defines the overall color of a Material. It takes in a Vector3 (RGB) value, and each channel is automatically clamped between 0 and 1. It is the core color description of the surface in a Material minus shadow and lighting detail.",
                          "questionZh":  "基礎色（Base color），亦稱為 ____________，定義了材質的整體固有顏色。它接收 Vector3（RGB）數值，且每個通道會自動限制在 0 到 1 之間，代表材質表面排除陰影與光照細節後的純粹核心顏色描述。",
                          "options":  [
                                          "Emissive",
                                          "Roughness",
                                          "Specular",
                                          "Albedo"
                                      ],
                          "optionsZh":  [
                                            "Emissive（自發光輸入：控制材質表面主動發光的顏色與亮度）",
                                            "Roughness（粗糙度輸入：控制表面微觀平滑或粗糙漫反射程度）",
                                            "Specular（高光反射輸入：微調非金屬表面的鏡面反射強度）",
                                            "Albedo（反照率 / Base Color 基礎色：不含任何陰影與光照細節的表面純粹固有色彩）"
                                        ],
                          "rawAnswer":  "Albedo",
                          "correctIndex":  3,
                          "correctText":  "Albedo",
                          "explanation":  "【UE 4.27 核心考點：Base Color / Albedo 反照率】\n在 PBR 物理渲染流程中，Base Color 又稱為 Albedo（反照率），代表物體表面不帶任何預烘焙光影或環境遮蔽（AO）的純粹固有色。",
                          "keywords":  [
                                           {
                                               "term":  "PBR 材質與法線系統",
                                               "role":  "Albedo 定義無光影純固有色；Normal Map 以 RGB 控制受光法線方向營造高低凹凸細節"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "Base color, also called ____________, defines the overall color of a Material."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "It takes in a Vector3 (RGB) value, and each channel is automatically clamped between 0 and 1."
                                           },
                                           {
                                               "partNum":  3,
                                               "en":  "It is the core color description of the surface in a Material minus shadow and lighting detail."
                                           }
                                       ],
                          "detailedQuestion":  "Base color, also called ____________, defines the overall color of a Material. It takes in a Vector3 (RGB) value, and each channel is automatically clamped between 0 and 1. It is the core color description of the surface in a Material \u003cspan class=\"term-en\"\u003eminus\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（排除/扣除）\u003c/span\u003e shadow and lighting detail.",
                          "detailedOptions":  [
                                                  "Emissive（自發光輸入：控制材質表面主動發光的顏色與亮度）",
                                                  "Roughness（粗糙度輸入：控制表面微觀平滑或粗糙漫反射程度）",
                                                  "Specular（高光反射輸入：微調非金屬表面的鏡面反射強度）",
                                                  "Albedo（反照率 / Base Color 基礎色：不含任何陰影與光照細節的表面純粹固有色彩）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q1",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  1,
                          "type":  "MC",
                          "question":  "The ____________ Is a node-based editor that gives you the ability to modify Sound Waves and store the result as a Sound Cue asset.",
                          "questionZh":  "____________ 是一個節點式編輯器，讓你能修改並組合音波（Sound Waves），並將結果儲存為 Sound Cue 資產。",
                          "options":  [
                                          "Sound Cue Editor",
                                          "Audio Editor",
                                          "Audacity",
                                          "Attenuation Editor"
                                      ],
                          "optionsZh":  [
                                            "Sound Cue Editor（音效提示編輯器：節點式音訊編輯器，可組合修改 Sound Wave 並存為 Sound Cue）",
                                            "Audio Editor（干擾項：UE4 中節點式音訊編輯器稱為 Sound Cue Editor）",
                                            "Audacity（外部開源音訊剪輯軟體，非 UE4 內建編輯器）",
                                            "Attenuation Editor（干擾項：衰減設定透過屬性面板或 Sound Attenuation 資產配置）"
                                        ],
                          "rawAnswer":  "Sound Cue Editor",
                          "correctIndex":  0,
                          "correctText":  "Sound Cue Editor",
                          "explanation":  "【UE 4.27 核心考點：Sound Cue Editor 音效提示編輯器】\nSound Cue Editor 提供節點式音訊合成圖表，可串接 Wave Player、Random、Modulator、Mixer 與 Delay 等節點來加工 Sound Wave，並儲存為複合式 Sound Cue 資產。",
                          "keywords":  [
                                           {
                                               "term":  "Sound Cue 音訊合成系統",
                                               "role":  "Sound Cue Editor 以節點組合 Sound Wave，透過 Mixer 節點可同時觸發多個音效疊加播放"
                                           },
                                           {
                                               "term":  "Sound Attenuation \u0026 Reverb Effect",
                                               "role":  "Sound Attenuation 封裝可重用的距離衰減設定；Reverb Effect 控制空間回音密度與混響增益"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The ____________ Is a node-based editor that gives you the ability to \u003cspan class=\"term-en\"\u003emodify\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（修改/調節）\u003c/span\u003e \u003cspan class=\"term-en\"\u003eSound Waves\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（音波資產）\u003c/span\u003e and store the result as a \u003cspan class=\"term-en\"\u003eSound Cue asset\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（音效提示資產）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "Sound Cue Editor（音效提示編輯器：節點式音訊編輯器，可組合修改 Sound Wave 並存為 Sound Cue）",
                                                  "Audio Editor（干擾項：UE4 中節點式音訊編輯器稱為 Sound Cue Editor）",
                                                  "Audacity（外部開源音訊剪輯軟體，非 UE4 內建編輯器）",
                                                  "Attenuation Editor（干擾項：衰減設定透過屬性面板或 Sound Attenuation 資產配置）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q2",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  2,
                          "type":  "TF",
                          "question":  "The term bit rate refers to the amount of data that is processed or transferred over a specified amount of time. Bit rate also has an impact on quality: the higher the bit rate, the better the quality.",
                          "questionZh":  "位元率（Bit rate）一詞是指在指定時間內處理或傳輸的資料量。位元率同時也會影響音訊品質：位元率越高，音質就越好。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：音訊 Bit Rate 位元率與品質】\n正確。位元率（Bit Rate，通常以 kbps 為單位）代表每秒處理的音訊資料位元數，位元率越高代表保留的聲音細節越豐富、失真越少，但相對檔案容量也越大。",
                          "keywords":  [
                                           {
                                               "term":  "Unreal Engine 4.27 核心架構",
                                               "role":  "遵循教材與引擎核心工作流規範"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "The term bit rate refers to the amount of data that is processed or transferred over a specified amount of time."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "Bit rate also has an impact on quality: the higher the bit rate, the better the quality."
                                           }
                                       ],
                          "detailedQuestion":  "The term bit rate refers to the amount of data that is processed or transferred over a specified amount of time. Bit rate also has an impact on quality: the higher the bit rate, the better the quality.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q3",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  3,
                          "type":  "MC",
                          "question":  "A ____________ is a definable asset with adjustable property settings that will allow you to control such elements as the echo density, overall reverb gain, and air absorption to help craft the overall feel you may be after.",
                          "questionZh":  "____________ 是一種可自訂的資產，具備可調整的屬性設定，允許你控制回音密度（Echo density）、整體混響增益（Overall reverb gain）與空氣吸收（Air absorption）等要素，以塑造理想的空間聽覺氛圍。",
                          "options":  [
                                          "Sound Attenuation asset",
                                          "Sound Cue asset",
                                          "Modulation Effect asset",
                                          "Reverb Effect asset"
                                      ],
                          "optionsZh":  [
                                            "Sound Attenuation asset（聲音衰減資產：以可重複使用的方式儲存距離衰減屬性，方便統一調整）",
                                            "Sound Cue asset（音效提示資產：儲存節點式合成與隨機化音訊播放邏輯的資產）",
                                            "Modulation Effect asset（調變效果資產：干擾項）",
                                            "Reverb Effect asset（混響效果資產：可調整回音密度、整體混響增益與空氣吸收等空間聲學屬性）"
                                        ],
                          "rawAnswer":  "Reverb Effect asset",
                          "correctIndex":  3,
                          "correctText":  "Reverb Effect asset",
                          "explanation":  "【UE 4.27 核心考點：Reverb Effect asset 混響效果資產】\nReverb Effect asset 用於定義空間反射聲學參數（包含 Density、Diffusion、Gain、Decay Time、Air Absorption），可指派給關卡中的 Audio Volume 以模擬山洞、大廳或室內空間殘響。",
                          "keywords":  [
                                           {
                                               "term":  "Sound Cue 音訊合成系統",
                                               "role":  "Sound Cue Editor 以節點組合 Sound Wave，透過 Mixer 節點可同時觸發多個音效疊加播放"
                                           },
                                           {
                                               "term":  "Sound Attenuation \u0026 Reverb Effect",
                                               "role":  "Sound Attenuation 封裝可重用的距離衰減設定；Reverb Effect 控制空間回音密度與混響增益"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "A ____________ is a definable asset with adjustable property settings that will allow you to control such elements as the echo density, overall reverb gain, and air absorption to help craft the overall feel you may be after.",
                          "detailedOptions":  [
                                                  "Sound Attenuation asset（聲音衰減資產：以可重複使用的方式儲存距離衰減屬性，方便統一調整）",
                                                  "Sound Cue asset（音效提示資產：儲存節點式合成與隨機化音訊播放邏輯的資產）",
                                                  "Modulation Effect asset（調變效果資產：干擾項）",
                                                  "Reverb Effect asset（混響效果資產：可調整回音密度、整體混響增益與空氣吸收等空間聲學屬性）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q4",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  4,
                          "type":  "MC",
                          "question":  "In the Sound Cue Editor, a ____________ is used to trigger multiple Sound Wave nodes simultaneously.",
                          "questionZh":  "在 Sound Cue 編輯器中，____________ 用於同時觸發多個 Sound Wave 節點進行疊加播放。",
                          "options":  [
                                          "Wave Player node",
                                          "Random node",
                                          "Mixer node",
                                          "Looping node"
                                      ],
                          "optionsZh":  [
                                            "Wave Player node（波形播放器節點：在 Sound Cue 中讀取並播放單一 Sound Wave）",
                                            "Random node（隨機節點：從多個輸入音效中隨機挑選一個播放）",
                                            "Mixer node（混音器節點：在 Sound Cue 中同時觸發並疊加播放多個 Sound Wave 節點）",
                                            "Looping node（循環節點：讓音訊片段無限或依指定次數循環播放）"
                                        ],
                          "rawAnswer":  "Mixer node",
                          "correctIndex":  2,
                          "correctText":  "Mixer node",
                          "explanation":  "【UE 4.27 核心考點：Mixer node 混音器節點】\nMixer 節點可連接多個輸入音訊引腳並設定各軌音量權重，在觸發時將多個 Sound Wave 同時混合疊加播放（例如爆炸音效同時疊加低頻轟鳴、碎石飛濺與火光聲）。",
                          "keywords":  [
                                           {
                                               "term":  "Sound Cue 音訊合成系統",
                                               "role":  "Sound Cue Editor 以節點組合 Sound Wave，透過 Mixer 節點可同時觸發多個音效疊加播放"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "In the \u003cspan class=\"term-en\"\u003eSound Cue Editor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（音效提示編輯器）\u003c/span\u003e, a ____________ is used to trigger multiple \u003cspan class=\"term-en\"\u003eSound Wave nodes\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（音波節點）\u003c/span\u003e simultaneously.",
                          "detailedOptions":  [
                                                  "Wave Player node（波形播放器節點：在 Sound Cue 中讀取並播放單一 Sound Wave）",
                                                  "Random node（隨機節點：從多個輸入音效中隨機挑選一個播放）",
                                                  "Mixer node（混音器節點：在 Sound Cue 中同時觸發並疊加播放多個 Sound Wave 節點）",
                                                  "Looping node（循環節點：讓音訊片段無限或依指定次數循環播放）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q5",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  5,
                          "type":  "MC",
                          "question":  "The ____________ stores attenuation properties in a reusable manner. This allows adjustment to attenuation properties without having to revisit every sound Actor individually.",
                          "questionZh":  "____________ 以可重複使用的方式儲存聲音衰減屬性，讓你能統一調整衰減設定，而無需逐一重新修改關卡中的每一個音效 Actor。",
                          "options":  [
                                          "Modulation Effect asset",
                                          "Reverb Effect asset",
                                          "Audio Volume",
                                          "Sound Attenuation asset"
                                      ],
                          "optionsZh":  [
                                            "Modulation Effect asset（調變效果資產：干擾項）",
                                            "Reverb Effect asset（混響效果資產：可調整回音密度、整體混響增益與空氣吸收等空間聲學屬性）",
                                            "Audio Volume（音訊體積：放置於關卡中定義空間混響與隔音邊界的體積物件）",
                                            "Sound Attenuation asset（聲音衰減資產：以可重複使用的方式儲存距離衰減屬性，方便統一調整）"
                                        ],
                          "rawAnswer":  "Sound Attenuation asset",
                          "correctIndex":  3,
                          "correctText":  "Sound Attenuation asset",
                          "explanation":  "【UE 4.27 核心考點：Sound Attenuation asset 聲音衰減資產】\n將衰減距離、空間化設定封裝為獨立的 Sound Attenuation 資產並指派給多個音效後，只要修改該資產，所有引用它的音效 Actor 都會自動同步更新衰減行為。",
                          "keywords":  [
                                           {
                                               "term":  "Sound Attenuation \u0026 Reverb Effect",
                                               "role":  "Sound Attenuation 封裝可重用的距離衰減設定；Reverb Effect 控制空間回音密度與混響增益"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "The ____________ stores attenuation properties in a reusable manner."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "This allows adjustment to attenuation properties without having to revisit every sound Actor individually."
                                           }
                                       ],
                          "detailedQuestion":  "The ____________ stores attenuation properties in a reusable manner. This allows adjustment to attenuation properties without having to revisit every sound Actor individually.",
                          "detailedOptions":  [
                                                  "Modulation Effect asset（調變效果資產：干擾項）",
                                                  "Reverb Effect asset（混響效果資產：可調整回音密度、整體混響增益與空氣吸收等空間聲學屬性）",
                                                  "Audio Volume（音訊體積：放置於關卡中定義空間混響與隔音邊界的體積物件）",
                                                  "Sound Attenuation asset（聲音衰減資產：以可重複使用的方式儲存距離衰減屬性，方便統一調整）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q6",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  6,
                          "type":  "MC",
                          "question":  "The ____________ is a Material node that allows you to define layers, assign Textures, and set blend methods for terrain.",
                          "questionZh":  "____________ 是一個材質節點，允許你為地形定義多個圖層、指派紋理貼圖並設定圖層混合方式。",
                          "options":  [
                                          "FoliageLayerBlend",
                                          "LandscapeLayerBlend",
                                          "TerrainLayerBlend",
                                          "LB_WeightedBlend"
                                      ],
                          "optionsZh":  [
                                            "FoliageLayerBlend（干擾項：無此材質節點名稱）",
                                            "LandscapeLayerBlend（地貌圖層混合節點：定義地形圖層、指派貼圖並設定混合模式的材質節點）",
                                            "TerrainLayerBlend（干擾項：UE4 地形稱為 Landscape 而非 Terrain）",
                                            "LB_WeightedBlend（圖層混合模式枚舉選項之一，非材質節點本身的名稱）"
                                        ],
                          "rawAnswer":  "LandscapeLayerBlend",
                          "correctIndex":  1,
                          "correctText":  "LandscapeLayerBlend",
                          "explanation":  "【UE 4.27 核心考點：LandscapeLayerBlend 地貌圖層混合節點】\nLandscapeLayerBlend 是製作地貌材質的核心節點，可在細節面板新增多個地形圖層（如草地、泥土、岩石）並設定 Weight-Blend 或 Height-Blend 混合模式。",
                          "keywords":  [
                                           {
                                               "term":  "PBR 材質與法線系統",
                                               "role":  "Albedo 定義無光影純固有色；Normal Map 以 RGB 控制受光法線方向營造高低凹凸細節"
                                           },
                                           {
                                               "term":  "Landscape 地貌與高度圖系統",
                                               "role":  "Landscape Actor 具備高效 LOD，可透過 Sculpt 雕刻分頁或外部灰階 Height Map 建立地形並用 LandscapeLayerBlend 混合材質"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The ____________ is a Material node that allows you to define layers, assign Textures, and set blend methods for terrain.",
                          "detailedOptions":  [
                                                  "FoliageLayerBlend（干擾項：無此材質節點名稱）",
                                                  "LandscapeLayerBlend（地貌圖層混合節點：定義地形圖層、指派貼圖並設定混合模式的材質節點）",
                                                  "TerrainLayerBlend（干擾項：UE4 地形稱為 Landscape 而非 Terrain）",
                                                  "LB_WeightedBlend（圖層混合模式枚舉選項之一，非材質節點本身的名稱）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q7",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  7,
                          "type":  "MC",
                          "question":  "In Landscape mode, the ____________ has tools for deforming the surface of a Landscape Actor. There are different properties for editing brush sizes and shapes.",
                          "questionZh":  "在地貌模式（Landscape mode）中，____________ 提供了可使地貌 Actor 表面變形的工具，並具備可編輯筆刷大小與形狀的不同屬性。",
                          "options":  [
                                          "Foliage tab",
                                          "Paint tab",
                                          "Sculpt tab",
                                          "Manage tab"
                                      ],
                          "optionsZh":  [
                                            "Foliage tab（干擾項：植被工具位於獨立的 Foliage 模式面板中）",
                                            "Paint tab（繪製分頁：用於在地貌表面塗抹不同材質圖層權重）",
                                            "Sculpt tab（雕刻分頁：提供改變 Landscape Actor 表面高低起伏與調整筆刷尺寸形狀的工具）",
                                            "Manage tab（管理分頁：用於建立新地貌、新增或刪除地貌組件與分段設定）"
                                        ],
                          "rawAnswer":  "Sculpt tab",
                          "correctIndex":  2,
                          "correctText":  "Sculpt tab",
                          "explanation":  "【UE 4.27 核心考點：Landscape Sculpt tab 雕刻分頁】\n在地貌模式的 Sculpt（雕刻）分頁中，包含 Sculpt、Smooth、Flatten、Ramp、Erosion 等地形起伏塑形工具，並可自由調整 Brush Size 與 Falloff 筆刷衰減。",
                          "keywords":  [
                                           {
                                               "term":  "Landscape 地貌與高度圖系統",
                                               "role":  "Landscape Actor 具備高效 LOD，可透過 Sculpt 雕刻分頁或外部灰階 Height Map 建立地形並用 LandscapeLayerBlend 混合材質"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "In Landscape mode, the ____________ has tools for deforming the surface of a Landscape Actor."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "There are different properties for editing brush sizes and shapes."
                                           }
                                       ],
                          "detailedQuestion":  "In \u003cspan class=\"term-en\"\u003eLandscape mode\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（地貌模式）\u003c/span\u003e, the ____________ has tools for deforming the surface of a \u003cspan class=\"term-en\"\u003eLandscape Actor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（地貌地形物件）\u003c/span\u003e. There are different properties for editing brush sizes and shapes.",
                          "detailedOptions":  [
                                                  "Foliage tab（干擾項：植被工具位於獨立的 Foliage 模式面板中）",
                                                  "Paint tab（繪製分頁：用於在地貌表面塗抹不同材質圖層權重）",
                                                  "Sculpt tab（雕刻分頁：提供改變 Landscape Actor 表面高低起伏與調整筆刷尺寸形狀的工具）",
                                                  "Manage tab（管理分頁：用於建立新地貌、新增或刪除地貌組件與分段設定）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q8",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  8,
                          "type":  "MC",
                          "question":  "A ____________ is a specific Actor class used to represent terrain. This Actor has its own level of detail (LOD) system for efficiency.",
                          "questionZh":  "____________ 是專門用來代表大型地形的特定 Actor 類別，此 Actor 擁有自己專屬的細節層次（LOD）系統以維持高渲染效率。",
                          "options":  [
                                          "Terrain Actor",
                                          "Landscape Actor",
                                          "Foliage Actor",
                                          "Ground Actor"
                                      ],
                          "optionsZh":  [
                                            "Terrain Actor（干擾項：UE3 舊稱，UE4 中改稱為 Landscape Actor）",
                                            "Landscape Actor（地貌 Actor：專門代表廣袤地形並具備獨立高效 LOD 系統的特定 Actor 類別）",
                                            "Foliage Actor（植被 Actor：批量實例化管理樹木花草網格的物件）",
                                            "Ground Actor（干擾項：非 UE4 內建地形類別名稱）"
                                        ],
                          "rawAnswer":  "Landscape Actor",
                          "correctIndex":  1,
                          "correctText":  "Landscape Actor",
                          "explanation":  "【UE 4.27 核心考點：Landscape Actor 地貌物件與動態 LOD】\nLandscape Actor 是 UE4 專為廣闊戶外地形設計的類別，內建基於高度圖與四叉樹組件的連續動態 LOD 系統，能在維持遠景地貌輪廓的同時大幅降低多邊形負荷。",
                          "keywords":  [
                                           {
                                               "term":  "Landscape 地貌與高度圖系統",
                                               "role":  "Landscape Actor 具備高效 LOD，可透過 Sculpt 雕刻分頁或外部灰階 Height Map 建立地形並用 LandscapeLayerBlend 混合材質"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "A ____________ is a specific Actor class used to represent terrain."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "This Actor has its own level of detail (LOD) system for efficiency."
                                           }
                                       ],
                          "detailedQuestion":  "A ____________ is a specific Actor class used to represent terrain. This Actor has its own level of detail (LOD) system for efficiency.",
                          "detailedOptions":  [
                                                  "Terrain Actor（干擾項：UE3 舊稱，UE4 中改稱為 Landscape Actor）",
                                                  "Landscape Actor（地貌 Actor：專門代表廣袤地形並具備獨立高效 LOD 系統的特定 Actor 類別）",
                                                  "Foliage Actor（植被 Actor：批量實例化管理樹木花草網格的物件）",
                                                  "Ground Actor（干擾項：非 UE4 內建地形類別名稱）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q9",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  9,
                          "type":  "MC",
                          "question":  "A ____________ is a Texture that provides elevation information based on a gray scale.",
                          "questionZh":  "____________ 是一種依據灰階（Gray scale）明暗數值來提供地形高低起伏海拔資訊的紋理貼圖。",
                          "options":  [
                                          "Terrain map",
                                          "8-bit map",
                                          "Normal map",
                                          "Height map"
                                      ],
                          "optionsZh":  [
                                            "Terrain map（干擾項：一般通稱，非灰階海拔貼圖的專有技術名稱）",
                                            "8-bit map（8 位元貼圖：精度過低易產生階梯狀斷層，地貌高度圖標準為 16 位元）",
                                            "Normal map（法線貼圖：以 RGB 儲存表面法線方向以呈現微觀凹凸，非地貌海拔高度圖）",
                                            "Height map（高度圖：依據灰階明暗數值提供地形高低起伏海拔資訊的紋理貼圖）"
                                        ],
                          "rawAnswer":  "Height map",
                          "correctIndex":  3,
                          "correctText":  "Height map",
                          "explanation":  "【UE 4.27 核心考點：Height map 高度圖】\nHeight map（高度圖）使用灰階像素值表示地形高度：越接近純白代表海拔越高（山峰），越接近純黑代表海拔越低（山谷），UE4 標準使用 16-bit 灰階高度圖以確保平滑起伏。",
                          "keywords":  [
                                           {
                                               "term":  "PBR 材質與法線系統",
                                               "role":  "Albedo 定義無光影純固有色；Normal Map 以 RGB 控制受光法線方向營造高低凹凸細節"
                                           },
                                           {
                                               "term":  "Landscape 地貌與高度圖系統",
                                               "role":  "Landscape Actor 具備高效 LOD，可透過 Sculpt 雕刻分頁或外部灰階 Height Map 建立地形並用 LandscapeLayerBlend 混合材質"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "A ____________ is a Texture that provides elevation information based on a gray scale.",
                          "detailedOptions":  [
                                                  "Terrain map（干擾項：一般通稱，非灰階海拔貼圖的專有技術名稱）",
                                                  "8-bit map（8 位元貼圖：精度過低易產生階梯狀斷層，地貌高度圖標準為 16 位元）",
                                                  "Normal map（法線貼圖：以 RGB 儲存表面法線方向以呈現微觀凹凸，非地貌海拔高度圖）",
                                                  "Height map（高度圖：依據灰階明暗數值提供地形高低起伏海拔資訊的紋理貼圖）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q10",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  10,
                          "type":  "TF",
                          "question":  "Height maps can be authored directly in UE4 by using the Landscape Sculpt tools, or they can be made in other sculpting or photo-manipulation programs and imported into UE4.",
                          "questionZh":  "高度圖（Height maps）可以直接在 UE4 中使用地貌雕刻工具（Landscape Sculpt tools）創作生成，也可以在其他外部雕刻或影像處理軟體中製作後匯入 UE4。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：Height map 雙向建立與匯入工作流】\n正確。開發者既可在 UE4 內部使用 Sculpt 工具直接雕刻地貌高度圖，也可在 World Machine、Gaea、ZBrush 或 Photoshop 中製作 16-bit PNG/RAW 高度圖後匯入生成地貌。",
                          "keywords":  [
                                           {
                                               "term":  "Landscape 地貌與高度圖系統",
                                               "role":  "Landscape Actor 具備高效 LOD，可透過 Sculpt 雕刻分頁或外部灰階 Height Map 建立地形並用 LandscapeLayerBlend 混合材質"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "Height maps can be authored directly in UE4 by using the \u003cspan class=\"term-en\"\u003eLandscape Sculpt tools\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（地貌雕刻工具）\u003c/span\u003e, or they can be made in other sculpting or photo-manipulation programs and imported into UE4.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q11",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  11,
                          "type":  "MC",
                          "question":  "A ____________ Actor captures images (cubemaps) of the Level from its location and projects those images onto other Actors in its vicinity.",
                          "questionZh":  "____________ Actor 會從其所在位置捕捉關卡的周遭影像（立方體貼圖 Cubemaps），並將這些反射影像投射到其鄰近範圍內的其他 Actor 上。",
                          "options":  [
                                          "Sphere Capture",
                                          "Reflection Capture",
                                          "Sky Sphere",
                                          "Post Process Volume"
                                      ],
                          "optionsZh":  [
                                            "Sphere Capture（簡稱干擾項：完整正確類別名稱為 Reflection Capture）",
                                            "Reflection Capture（反射捕捉 Actor：從所在位置捕捉關卡立方體貼圖 Cubemap 並投射至周遭物件）",
                                            "Sky Sphere（天空球：呈現天空雲彩與太陽盤背景的藍圖物件）",
                                            "Post Process Volume（後製處理體積：控制景深、色調映射、泛光等畫面特效的空間範圍）"
                                        ],
                          "rawAnswer":  "Reflection Capture",
                          "correctIndex":  1,
                          "correctText":  "Reflection Capture",
                          "explanation":  "【UE 4.27 核心考點：Reflection Capture 反射捕捉物件】\nReflection Capture（包含 Sphere 與 Box 兩種類型）會預先捕捉周遭 360 度環境生成靜態 Cubemap，為範圍內的金屬、水面與光滑材質提供極低效能開銷的環境反射。",
                          "keywords":  [
                                           {
                                               "term":  "世界環境構建與後製處理",
                                               "role":  "涵蓋 Reflection Capture 區域反射、大氣霧/雙色指數高度霧，以及 DOF 景深鏡頭模糊效果"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "A ____________ Actor captures images (cubemaps) of the Level from its location and projects those images onto other Actors in its vicinity.",
                          "detailedOptions":  [
                                                  "Sphere Capture（簡稱干擾項：完整正確類別名稱為 Reflection Capture）",
                                                  "Reflection Capture（反射捕捉 Actor：從所在位置捕捉關卡立方體貼圖 Cubemap 並投射至周遭物件）",
                                                  "Sky Sphere（天空球：呈現天空雲彩與太陽盤背景的藍圖物件）",
                                                  "Post Process Volume（後製處理體積：控制景深、色調映射、泛光等畫面特效的空間範圍）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q12",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  12,
                          "type":  "MC",
                          "question":  "The ____________ gives an approximation of light scattering through a planetary atmosphere. It can give your outdoor Levels a much more realistic look.",
                          "questionZh":  "____________ 能近似模擬光線穿過行星大氣層時的光學散射現象，讓你的戶外關卡呈現更加真實自然的視覺外觀。",
                          "options":  [
                                          "Atmospheric Fog Actor",
                                          "Sky Sphere Blueprint Actor",
                                          "Sky Light Actor",
                                          "Post Process Volume Actor"
                                      ],
                          "optionsZh":  [
                                            "Atmospheric Fog Actor（大氣霧 Actor：模擬光線穿過行星大氣層的物理散射，讓戶外關卡更逼真）",
                                            "Sky Sphere Blueprint Actor（天空球藍圖 Actor：提供天空球頂網格與雲層材質）",
                                            "Sky Light Actor（天空光 Actor：捕捉遠處天空與環境作為場景全域漫反射補光）",
                                            "Post Process Volume Actor（後製處理體積 Actor：調整鏡頭畫面濾鏡與光學後製效果）"
                                        ],
                          "rawAnswer":  "Atmospheric Fog Actor",
                          "correctIndex":  0,
                          "correctText":  "Atmospheric Fog Actor",
                          "explanation":  "【UE 4.27 核心考點：Atmospheric Fog Actor 大氣霧】\nAtmospheric Fog Actor 依據物理大氣散射模型，與主定向光源（太陽）角度連動，自動呈現日出、正午蔚藍天空與黃昏晚霞的大氣色彩散射。",
                          "keywords":  [
                                           {
                                               "term":  "世界環境構建與後製處理",
                                               "role":  "涵蓋 Reflection Capture 區域反射、大氣霧/雙色指數高度霧，以及 DOF 景深鏡頭模糊效果"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "The ____________ gives an approximation of light scattering through a planetary atmosphere."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "It can give your outdoor Levels a much more realistic look."
                                           }
                                       ],
                          "detailedQuestion":  "The ____________ gives an approximation of light scattering through a planetary atmosphere. It can give your outdoor Levels a much more realistic look.",
                          "detailedOptions":  [
                                                  "Atmospheric Fog Actor（大氣霧 Actor：模擬光線穿過行星大氣層的物理散射，讓戶外關卡更逼真）",
                                                  "Sky Sphere Blueprint Actor（天空球藍圖 Actor：提供天空球頂網格與雲層材質）",
                                                  "Sky Light Actor（天空光 Actor：捕捉遠處天空與環境作為場景全域漫反射補光）",
                                                  "Post Process Volume Actor（後製處理體積 Actor：調整鏡頭畫面濾鏡與光學後製效果）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q13",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  13,
                          "type":  "MC",
                          "question":  "If it is taking a long time to build lighting for your Level, there is a good chance you need to place a ____________.",
                          "questionZh":  "如果你的關卡在建置光照（Build lighting）時花費過長的時間，很有可能你需要在場景中放置一個 ____________。",
                          "options":  [
                                          "Sky Light",
                                          "Post Process Volume",
                                          "Reflection Capture",
                                          "Lightmass Importance Volume"
                                      ],
                          "optionsZh":  [
                                            "Sky Light（天空光：提供天光漫反射照明，不會縮短 Lightmass 建置時間）",
                                            "Post Process Volume（後製處理體積：控制景深、色調映射、泛光等畫面特效的空間範圍）",
                                            "Reflection Capture（反射捕捉 Actor：從所在位置捕捉關卡立方體貼圖 Cubemap 並投射至周遭物件）",
                                            "Lightmass Importance Volume（Lightmass 重要體積：框定核心可玩區域以集中光子計算，大幅縮短光照建置時間）"
                                        ],
                          "rawAnswer":  "Lightmass Importance Volume",
                          "correctIndex":  3,
                          "correctText":  "Lightmass Importance Volume",
                          "explanation":  "【UE 4.27 核心考點：Lightmass Importance Volume 光照重要體積】\n當關卡包含廣闊遠景時，放置 Lightmass Importance Volume 包覆玩家實際活動的核心區域，能讓 Lightmass 將高精度間接光子計算集中在體積內，大幅縮短光照建置時間。",
                          "keywords":  [
                                           {
                                               "term":  "Lightmass \u0026 Swarm Agent",
                                               "role":  "Lightmass 負責離線輻射度全域光照烘焙；Swarm Agent 負責管理通訊與顯示建置進度"
                                           },
                                           {
                                               "term":  "世界環境構建與後製處理",
                                               "role":  "涵蓋 Reflection Capture 區域反射、大氣霧/雙色指數高度霧，以及 DOF 景深鏡頭模糊效果"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "If it is taking a long time to build lighting for your Level, there is a good chance you need to place a ____________.",
                          "detailedOptions":  [
                                                  "Sky Light（天空光：提供天光漫反射照明，不會縮短 Lightmass 建置時間）",
                                                  "Post Process Volume（後製處理體積：控制景深、色調映射、泛光等畫面特效的空間範圍）",
                                                  "Reflection Capture（反射捕捉 Actor：從所在位置捕捉關卡立方體貼圖 Cubemap 並投射至周遭物件）",
                                                  "Lightmass Importance Volume（Lightmass 重要體積：框定核心可玩區域以集中光子計算，大幅縮短光照建置時間）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q14",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  14,
                          "type":  "MC",
                          "question":  "The ____________ post processing property applies a blur to the scene based on distance in front of or behind a focal point. This is done to simulate what happens in real-world cameras. The effect can be used to draw the viewer’s attention and to make the rendering appear more like a photograph or a movie.",
                          "questionZh":  "____________ 後製處理屬性會依據對焦點（Focal point）前後的距離對場景套用模糊效果，用來模擬真實世界相機的光學現象，可吸引觀看者的視覺注意力，並讓渲染畫面更具攝影或電影質感。",
                          "options":  [
                                          "Depth of Field (DOF)",
                                          "Color Grading",
                                          "Eye Adaptation",
                                          "Anti-Aliasing"
                                      ],
                          "optionsZh":  [
                                            "Depth of Field (DOF)（景深：依據對焦點前後距離模糊場景，模擬真實相機鏡頭對焦虛化效果）",
                                            "Color Grading（色彩分級調色：調整畫面整體色偏、對比度與 LUT 電影色調）",
                                            "Eye Adaptation（人眼適應 / 自動曝光：模擬人眼在明暗環境切換時的瞳孔曝光調節）",
                                            "Anti-Aliasing（抗鋸齒：平滑幾何邊緣像素鋸齒的渲染技術）"
                                        ],
                          "rawAnswer":  "Depth of Field (DOF)",
                          "correctIndex":  0,
                          "correctText":  "Depth of Field (DOF)",
                          "explanation":  "【UE 4.27 核心考點：Depth of Field (DOF) 景深後製效果】\nDepth of Field（景深）透過設定對焦距離（Focal Distance）與光圈（Aperture f-stop），將焦點以外的前景與背景柔化模糊，突顯畫面主體並營造電影鏡頭感。",
                          "keywords":  [
                                           {
                                               "term":  "世界環境構建與後製處理",
                                               "role":  "涵蓋 Reflection Capture 區域反射、大氣霧/雙色指數高度霧，以及 DOF 景深鏡頭模糊效果"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "The ____________ post processing property applies a blur to the scene based on distance in front of or behind a focal point."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "This is done to simulate what happens in real-world cameras."
                                           },
                                           {
                                               "partNum":  3,
                                               "en":  "The effect can be used to draw the viewer’s attention and to make the rendering appear more like a photograph or a movie."
                                           }
                                       ],
                          "detailedQuestion":  "The ____________ post processing property applies a blur to the scene based on distance in front of or behind a focal point. This is done to simulate what happens in real-world cameras. The effect can be used to draw the viewer’s attention and to make the rendering appear more like a photograph or a movie.",
                          "detailedOptions":  [
                                                  "Depth of Field (DOF)（景深：依據對焦點前後距離模糊場景，模擬真實相機鏡頭對焦虛化效果）",
                                                  "Color Grading（色彩分級調色：調整畫面整體色偏、對比度與 LUT 電影色調）",
                                                  "Eye Adaptation（人眼適應 / 自動曝光：模擬人眼在明暗環境切換時的瞳孔曝光調節）",
                                                  "Anti-Aliasing（抗鋸齒：平滑幾何邊緣像素鋸齒的渲染技術）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q15",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  15,
                          "type":  "MC",
                          "question":  "____________ provides two fog colors, one for the hemisphere facing the dominant Directional Light (or straight up if none exists), and another for the opposite hemisphere.",
                          "questionZh":  "____________ 提供了兩種霧氣顏色：一種用於面向主定向光源（Directional Light）的半球（若無定向光則為正上方），另一種則用於相反方向的背光半球。",
                          "options":  [
                                          "Reflection Capture",
                                          "Sky Sphere Blueprint",
                                          "Atmospheric Fog Actor",
                                          "Exponential Height Fog"
                                      ],
                          "optionsZh":  [
                                            "Reflection Capture（反射捕捉 Actor：從所在位置捕捉關卡立方體貼圖 Cubemap 並投射至周遭物件）",
                                            "Sky Sphere Blueprint（天空球藍圖：呈現天空背景外觀的藍圖資產）",
                                            "Atmospheric Fog Actor（大氣霧 Actor：模擬光線穿過行星大氣層的物理散射，讓戶外關卡更逼真）",
                                            "Exponential Height Fog（指數高度霧：提供隨海拔遞減的濃度，並支援面向與背向主定向光源的雙半球霧色）"
                                        ],
                          "rawAnswer":  "Exponential Height Fog",
                          "correctIndex":  3,
                          "correctText":  "Exponential Height Fog",
                          "explanation":  "【UE 4.27 核心考點：Exponential Height Fog 指數高度霧與雙半球色彩】\nExponential Height Fog 的霧氣密度隨海拔高度呈指數平滑遞減，並支援 Inscattering Color（主霧色）與 Directional Inscattering Color（面向太陽方向的散射霧色）雙向光感。",
                          "keywords":  [
                                           {
                                               "term":  "世界環境構建與後製處理",
                                               "role":  "涵蓋 Reflection Capture 區域反射、大氣霧/雙色指數高度霧，以及 DOF 景深鏡頭模糊效果"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "____________ provides two fog colors, one for the hemisphere facing the dominant \u003cspan class=\"term-en\"\u003eDirectional Light\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（定向光源）\u003c/span\u003e (or straight up if none exists), and another for the opposite hemisphere.",
                          "detailedOptions":  [
                                                  "Reflection Capture（反射捕捉 Actor：從所在位置捕捉關卡立方體貼圖 Cubemap 並投射至周遭物件）",
                                                  "Sky Sphere Blueprint（天空球藍圖：呈現天空背景外觀的藍圖資產）",
                                                  "Atmospheric Fog Actor（大氣霧 Actor：模擬光線穿過行星大氣層的物理散射，讓戶外關卡更逼真）",
                                                  "Exponential Height Fog（指數高度霧：提供隨海拔遞減的濃度，並支援面向與背向主定向光源的雙半球霧色）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q16",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  16,
                          "type":  "MC",
                          "question":  "In the Cascade Editor, ____________ are a set of float or vector data types for handling data in specialized ways, such as using a range for a value, or interpolating a value along a curve.",
                          "questionZh":  "在 Cascade 粒子編輯器中，____________ 是一組浮點數（Float）或向量（Vector）資料類型，用於以專門方式處理數值資料，例如為數值設定隨機範圍，或沿著曲線對數值進行插值運算。",
                          "options":  [
                                          "Emitter Actors",
                                          "Distributions",
                                          "Color Over Life modules",
                                          "Particles"
                                      ],
                          "optionsZh":  [
                                            "Emitter Actors（發射器 Actor：放置於關卡中的粒子系統實例物件）",
                                            "Distributions（分佈器：Cascade 中處理浮點數或向量範圍隨機值與曲線插值的專用資料類型）",
                                            "Color Over Life modules（生命週期顏色模組：控制粒子隨時間改變色彩與透明度的模組）",
                                            "Particles（粒子：由發射器大量生成並在空間中運動渲染的個體元素）"
                                        ],
                          "rawAnswer":  "Distributions",
                          "correctIndex":  1,
                          "correctText":  "Distributions",
                          "explanation":  "【UE 4.27 核心考點：Distributions 分佈器資料結構】\n在 Cascade 中，Distributions 控制粒子屬性隨時間或隨機範圍的數值分佈，常見類型包含 DistributionFloatConstant、DistributionFloatUniform（最小/最大範圍隨機）與 ConstantCurve（曲線插值）。",
                          "keywords":  [
                                           {
                                               "term":  "Cascade 粒子特效系統",
                                               "role":  "由發射器與 Modules 組成，支援 Distributions 數據分佈、Beam 兩點光束與 ParticleColor 材質動態著色"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "In the \u003cspan class=\"term-en\"\u003eCascade Editor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（Cascade 粒子編輯器）\u003c/span\u003e, ____________ are a set of float or vector data types for handling data in specialized ways, such as using a range for a value, or interpolating a value along a curve.",
                          "detailedOptions":  [
                                                  "Emitter Actors（發射器 Actor：放置於關卡中的粒子系統實例物件）",
                                                  "Distributions（分佈器：Cascade 中處理浮點數或向量範圍隨機值與曲線插值的專用資料類型）",
                                                  "Color Over Life modules（生命週期顏色模組：控制粒子隨時間改變色彩與透明度的模組）",
                                                  "Particles（粒子：由發射器大量生成並在空間中運動渲染的個體元素）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q17",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  17,
                          "type":  "TF",
                          "question":  "An Emitter Actor is an instance of a Particle System asset placed in a Level.",
                          "questionZh":  "發射器 Actor（Emitter Actor）是放置在關卡中的粒子系統資產（Particle System asset）的實例。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：Emitter Actor 場景實例】\n正確。Particle System 是 Content Browser 中的特效資產；當將它拖入關卡場景中時，在 World Outliner 中生成的場景實例物件即稱為 Emitter Actor。",
                          "keywords":  [
                                           {
                                               "term":  "World Outliner（世界大綱）",
                                               "role":  "場景總管清單樹，以樹狀結構列出關卡內的所有實例化 Actor 物件"
                                           },
                                           {
                                               "term":  "Cascade 粒子特效系統",
                                               "role":  "由發射器與 Modules 組成，支援 Distributions 數據分佈、Beam 兩點光束與 ParticleColor 材質動態著色"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "An \u003cspan class=\"term-en\"\u003eEmitter Actor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（發射器物件）\u003c/span\u003e is an instance of a \u003cspan class=\"term-en\"\u003eParticle System asset\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（粒子系統資產）\u003c/span\u003e placed in a Level.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q18",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  18,
                          "type":  "MC",
                          "question":  "The ____________ is connected particles that form a stream between a source point and a target point. By default, it consists of a single quad polygon referred to as a sheet that always faces the camera and is stretched between two points.",
                          "questionZh":  "____________ 是由相互連接的粒子在起點（Source point）與目標點（Target point）之間形成的連續串流。預設情況下，它由單一四邊形多邊形（稱為 Sheet）組成，永遠面向攝影機並拉伸於兩點之間。",
                          "options":  [
                                          "Beam",
                                          "GPU",
                                          "Ribbon",
                                          "Anim Trail"
                                      ],
                          "optionsZh":  [
                                            "Beam（光束粒子：在起點 Source 與目標點 Target 之間拉伸連接形成連續光束串流的四邊形面片）",
                                            "GPU（GPU 粒子：利用顯示卡並行運算生成數十萬顆高密度粒子的類型）",
                                            "Ribbon（飄帶粒子：跟隨移動軌跡依序連接粒子形成連續拖尾絲帶）",
                                            "Anim Trail（動畫軌跡粒子：綁定於角色骨骼插槽之間，用於刀光揮砍殘影軌跡）"
                                        ],
                          "rawAnswer":  "Beam",
                          "correctIndex":  0,
                          "correctText":  "Beam",
                          "explanation":  "【UE 4.27 核心考點：Beam 光束粒子類型】\nBeam Type Data 用於在起點（Source）與終點（Target）之間生成連接光束面片，支援分段插值與噪波抖動，廣泛用於雷射光束、閃電電弧與醫療牽引光線。",
                          "keywords":  [
                                           {
                                               "term":  "Cascade 粒子特效系統",
                                               "role":  "由發射器與 Modules 組成，支援 Distributions 數據分佈、Beam 兩點光束與 ParticleColor 材質動態著色"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "The ____________ is connected particles that form a stream between a source point and a target point."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "By default, it consists of a single quad polygon referred to as a sheet that always faces the camera and is stretched between two points."
                                           }
                                       ],
                          "detailedQuestion":  "The ____________ is connected particles that form a stream between a source point and a target point. By default, it consists of a single quad polygon referred to as a sheet that always faces the camera and is stretched between two points.",
                          "detailedOptions":  [
                                                  "Beam（光束粒子：在起點 Source 與目標點 Target 之間拉伸連接形成連續光束串流的四邊形面片）",
                                                  "GPU（GPU 粒子：利用顯示卡並行運算生成數十萬顆高密度粒子的類型）",
                                                  "Ribbon（飄帶粒子：跟隨移動軌跡依序連接粒子形成連續拖尾絲帶）",
                                                  "Anim Trail（動畫軌跡粒子：綁定於角色骨骼插槽之間，用於刀光揮砍殘影軌跡）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q19",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  19,
                          "type":  "MC",
                          "question":  "____________ are used to control various aspects of particles that are released by an Emitter. They can affect a particle during spawning, updating, or both.",
                          "questionZh":  "____________ 用於控制發射器所釋放粒子的各個行為面向，它們可以在粒子生成期間（Spawning）、更新期間（Updating）或兩者兼具時對粒子產生影響。",
                          "options":  [
                                          "Type data",
                                          "Vectors",
                                          "Modules",
                                          "GPU Sprites"
                                      ],
                          "optionsZh":  [
                                            "Type data（類型資料模組：決定發射器輸出為精靈面片、網格、光束或飄帶的特殊模組）",
                                            "Vectors（向量：三維空間方向與大小數學結構）",
                                            "Modules（模組：用於控制發射器所釋放粒子在生成、更新或兩者期間各項行為屬性的組件）",
                                            "GPU Sprites（GPU 精靈面片：透過 GPU 硬體加速運算的粒子類型資料）"
                                        ],
                          "rawAnswer":  "Modules",
                          "correctIndex":  2,
                          "correctText":  "Modules",
                          "explanation":  "【UE 4.27 核心考點：Modules 粒子模組機制】\n在 Cascade 中，每個發射器由多個 Modules（模組）堆疊組成，例如 Initial Size / Initial Velocity 在生成瞬間（Spawn）設定初始狀態，而 Color Over Life / Drag 則在每幀更新期間（Update）持續改變粒子行為。",
                          "keywords":  [
                                           {
                                               "term":  "Cascade 粒子特效系統",
                                               "role":  "由發射器與 Modules 組成，支援 Distributions 數據分佈、Beam 兩點光束與 ParticleColor 材質動態著色"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "____________ are used to control various aspects of particles that are released by an Emitter."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "They can affect a particle during spawning, updating, or both."
                                           }
                                       ],
                          "detailedQuestion":  "____________ are used to control various aspects of particles that are released by an Emitter. They can affect a particle during spawning, updating, or both.",
                          "detailedOptions":  [
                                                  "Type data（類型資料模組：決定發射器輸出為精靈面片、網格、光束或飄帶的特殊模組）",
                                                  "Vectors（向量：三維空間方向與大小數學結構）",
                                                  "Modules（模組：用於控制發射器所釋放粒子在生成、更新或兩者期間各項行為屬性的組件）",
                                                  "GPU Sprites（GPU 精靈面片：透過 GPU 硬體加速運算的粒子類型資料）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q20",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  20,
                          "type":  "MC",
                          "question":  "If you want to change the color of a particle with the Color Over Life module, the assigned Material must use a ____________ Material expression.",
                          "questionZh":  "如果你想要使用 Color Over Life 模組動態改變粒子的顏色，所指派的材質必須使用 ____________ 材質表達式節點。",
                          "options":  [
                                          "SubUV Texture",
                                          "ParticleColor",
                                          "ParticleInfo",
                                          "Additive"
                                      ],
                          "optionsZh":  [
                                            "SubUV Texture（子 UV 序列貼圖：將多格動畫序列排列於單張貼圖供粒子逐格播放）",
                                            "ParticleColor（粒子顏色材質表達式：將 Cascade 中 Color Over Life 的動態色彩與透明度傳入材質）",
                                            "ParticleInfo（干擾項：無此材質表達式名稱）",
                                            "Additive（疊加混合模式 Blend Mode：將像素色彩直接相加產生發光感，非材質表達式節點）"
                                        ],
                          "rawAnswer":  "ParticleColor",
                          "correctIndex":  1,
                          "correctText":  "ParticleColor",
                          "explanation":  "【UE 4.27 核心考點：ParticleColor 材質表達式】\n粒子材質中必須加入「ParticleColor」節點並將其連接至 Base Color / Emissive 與 Opacity，Cascade 發射器中的 Color Over Life 或 Initial Color 數值才能正確傳遞至著色器。",
                          "keywords":  [
                                           {
                                               "term":  "PBR 材質與法線系統",
                                               "role":  "Albedo 定義無光影純固有色；Normal Map 以 RGB 控制受光法線方向營造高低凹凸細節"
                                           },
                                           {
                                               "term":  "Cascade 粒子特效系統",
                                               "role":  "由發射器與 Modules 組成，支援 Distributions 數據分佈、Beam 兩點光束與 ParticleColor 材質動態著色"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "If you want to change the color of a particle with the \u003cspan class=\"term-en\"\u003eColor Over Life module\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（生命週期顏色模組）\u003c/span\u003e, the assigned Material must use a ____________ \u003cspan class=\"term-en\"\u003eMaterial expression\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（材質表達式）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "SubUV Texture（子 UV 序列貼圖：將多格動畫序列排列於單張貼圖供粒子逐格播放）",
                                                  "ParticleColor（粒子顏色材質表達式：將 Cascade 中 Color Over Life 的動態色彩與透明度傳入材質）",
                                                  "ParticleInfo（干擾項：無此材質表達式名稱）",
                                                  "Additive（疊加混合模式 Blend Mode：將像素色彩直接相加產生發光感，非材質表達式節點）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q21",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  21,
                          "type":  "MC",
                          "question":  "____________ is a Sequencer term meaning an Actor that exists in the Level already and that Sequencer will take control of in order to apply changes to it.",
                          "questionZh":  "____________ 是一個 Sequencer 專有術語，代表原本就已經存在於關卡中、由 Sequencer 接管控制以便對其套用屬性與動畫變更的 Actor。",
                          "options":  [
                                          "Placeable",
                                          "Possessable",
                                          "Spawnable",
                                          "Addable"
                                      ],
                          "optionsZh":  [
                                            "Placeable（可放置：類別修飾詞，表示該 Actor 類別可手動拖放入關卡）",
                                            "Possessable（可附身/接管物件：Sequencer 術語，指關卡中原本就存在並由 Sequencer 接管控制的 Actor）",
                                            "Spawnable（可生成物件：Sequencer 術語，指原本不在關卡中，由 Sequencer 動態生成並管理的 Actor）",
                                            "Addable（干擾項：非 Sequencer 專有術語）"
                                        ],
                          "rawAnswer":  "Possessable",
                          "correctIndex":  1,
                          "correctText":  "Possessable",
                          "explanation":  "【UE 4.27 核心考點：Possessable 可附身接管物件】\n在 Sequencer 中，Possessable 指的是直接引用關卡內既有的 Actor 進行動畫控制；相對地，Spawnable 則是由 Sequencer 在播放期間動態生成、播放結束即銷毀的物件。",
                          "keywords":  [
                                           {
                                               "term":  "Sequencer 電影過場動畫系統",
                                               "role":  "編輯 Level Sequence 資產，管理 Possessable/Spawnable 物件、Camera Cut 切鏡軌與軌道車路徑運鏡"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "____________ is a \u003cspan class=\"term-en\"\u003eSequencer\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（Sequencer 序列器）\u003c/span\u003e term meaning an Actor that exists in the Level already and that Sequencer will take control of in order to apply changes to it.",
                          "detailedOptions":  [
                                                  "Placeable（可放置：類別修飾詞，表示該 Actor 類別可手動拖放入關卡）",
                                                  "Possessable（可附身/接管物件：Sequencer 術語，指關卡中原本就存在並由 Sequencer 接管控制的 Actor）",
                                                  "Spawnable（可生成物件：Sequencer 術語，指原本不在關卡中，由 Sequencer 動態生成並管理的 Actor）",
                                                  "Addable（干擾項：非 Sequencer 專有術語）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q22",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  22,
                          "type":  "MC",
                          "question":  "____________ are self-contained assets that store track and keyframe data used for creating in-game cinematics and are edited in the Sequencer Editor.",
                          "questionZh":  "____________ 是獨立封裝的資產，用來儲存製作遊戲內過場動畫所需的軌道（Track）與關鍵影格（Keyframe）資料，並在 Sequencer 編輯器中進行編輯。",
                          "options":  [
                                          "Level Sequence assets",
                                          "Level Sequence Actors",
                                          "Persona assets",
                                          "Matinee Actors"
                                      ],
                          "optionsZh":  [
                                            "Level Sequence assets（關卡序列資產：在 Sequencer 中編輯、獨立封裝儲存軌道與關鍵影格資料的過場動畫資產）",
                                            "Level Sequence Actors（關卡序列 Actor：將 Level Sequence 資產放置於關卡世界中的實例物件）",
                                            "Persona assets（干擾項：Persona 為骨骼網格與動畫藍圖編輯器名稱）",
                                            "Matinee Actors（舊版 Matinee 過場動畫物件，已被 Sequencer 取代）"
                                        ],
                          "rawAnswer":  "Level Sequence assets",
                          "correctIndex":  0,
                          "correctText":  "Level Sequence assets",
                          "explanation":  "【UE 4.27 核心考點：Level Sequence assets 關卡序列資產】\nLevel Sequence asset 是 Sequencer 的核心資料資產，封裝了所有時間軸軌道、攝影機運鏡與關鍵影格，可單獨儲存於 Content Browser 並嵌入其他主序列中。",
                          "keywords":  [
                                           {
                                               "term":  "Sequencer 電影過場動畫系統",
                                               "role":  "編輯 Level Sequence 資產，管理 Possessable/Spawnable 物件、Camera Cut 切鏡軌與軌道車路徑運鏡"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "____________ are self-contained assets that store track and keyframe data used for creating in-game cinematics and are edited in the \u003cspan class=\"term-en\"\u003eSequencer Editor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（Sequencer 序列編輯器）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "Level Sequence assets（關卡序列資產：在 Sequencer 中編輯、獨立封裝儲存軌道與關鍵影格資料的過場動畫資產）",
                                                  "Level Sequence Actors（關卡序列 Actor：將 Level Sequence 資產放置於關卡世界中的實例物件）",
                                                  "Persona assets（干擾項：Persona 為骨骼網格與動畫藍圖編輯器名稱）",
                                                  "Matinee Actors（舊版 Matinee 過場動畫物件，已被 Sequencer 取代）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q23",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  23,
                          "type":  "MC",
                          "question":  "A ____________ allows you to switch between cameras associated with Sequencer and provides a camera perspective.",
                          "questionZh":  "____________ 允許你在與 Sequencer 關聯的多台攝影機之間進行切換，並提供最終輸出的鏡頭畫面視角。",
                          "options":  [
                                          "Shot Track",
                                          "Event Track",
                                          "Camera Cut Track",
                                          "Play Rate Track"
                                      ],
                          "optionsZh":  [
                                            "Shot Track（分鏡軌道：在主序列中組織與管理多個子序列鏡頭段落）",
                                            "Event Track（事件軌道：在時間軸特定影格觸發自訂藍圖事件）",
                                            "Camera Cut Track（相機切鏡軌道：允許在與 Sequencer 關聯的多台攝影機之間切換剪輯並提供畫面視角）",
                                            "Play Rate Track（播放速率軌道：控制序列動畫的快轉或慢動作時間流速）"
                                        ],
                          "rawAnswer":  "Camera Cut Track",
                          "correctIndex":  2,
                          "correctText":  "Camera Cut Track",
                          "explanation":  "【UE 4.27 核心考點：Camera Cut Track 相機切鏡軌道】\nCamera Cut Track 決定序列播放時螢幕採用哪一台攝影機的視角，透過在時間軸上新增不同 Camera Binding 片段，即可實現多機位電影分鏡剪輯。",
                          "keywords":  [
                                           {
                                               "term":  "Perspective / Orthographic（透視與正交視圖）",
                                               "role":  "透視視圖具備近大遠小 3D 空間感；正交視圖為平行投影無變形，適合精密對齊"
                                           },
                                           {
                                               "term":  "Sequencer 電影過場動畫系統",
                                               "role":  "編輯 Level Sequence 資產，管理 Possessable/Spawnable 物件、Camera Cut 切鏡軌與軌道車路徑運鏡"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "A ____________ allows you to switch between cameras associated with \u003cspan class=\"term-en\"\u003eSequencer\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（Sequencer 序列器）\u003c/span\u003e and provides a camera perspective.",
                          "detailedOptions":  [
                                                  "Shot Track（分鏡軌道：在主序列中組織與管理多個子序列鏡頭段落）",
                                                  "Event Track（事件軌道：在時間軸特定影格觸發自訂藍圖事件）",
                                                  "Camera Cut Track（相機切鏡軌道：允許在與 Sequencer 關聯的多台攝影機之間切換剪輯並提供畫面視角）",
                                                  "Play Rate Track（播放速率軌道：控制序列動畫的快轉或慢動作時間流速）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q24",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  24,
                          "type":  "MC",
                          "question":  "If you want to animate a Cine Camera Actor along a path with Sequencer, you should use a ____________.",
                          "questionZh":  "如果你想要透過 Sequencer 讓電影攝影機（Cine Camera Actor）沿著一條自訂曲線路徑移動動畫，你應該使用 ____________。",
                          "options":  [
                                          "Camera Rig Crane Actor",
                                          "Level Sequence Actor",
                                          "Camera Rig Rail Actor",
                                          "Spawnable Actor"
                                      ],
                          "optionsZh":  [
                                            "Camera Rig Crane Actor（攝影搖臂 Actor：模擬機械搖臂升降與俯仰運鏡的輔助設備）",
                                            "Level Sequence Actor（關卡序列 Actor：在關卡中負責播放指定 Level Sequence 的物件）",
                                            "Camera Rig Rail Actor（攝影軌道車 Actor：透過樣條曲線路徑讓 Cine Camera 沿指定軌跡平滑移動運鏡）",
                                            "Spawnable Actor（由 Sequencer 在播放期間動態生成的物件統稱）"
                                        ],
                          "rawAnswer":  "Camera Rig Rail Actor",
                          "correctIndex":  2,
                          "correctText":  "Camera Rig Rail Actor",
                          "explanation":  "【UE 4.27 核心考點：Camera Rig Rail Actor 攝影軌道車】\nCamera Rig Rail Actor 內建可自由調整控制點的 3D 樣條曲線（Spline），將 Cine Camera 附加其上並在 Sequencer 中對「Current Position on Rail（0.0 ~ 1.0）」打關鍵影格，即可實現平滑的軌道運鏡。",
                          "keywords":  [
                                           {
                                               "term":  "Sequencer 電影過場動畫系統",
                                               "role":  "編輯 Level Sequence 資產，管理 Possessable/Spawnable 物件、Camera Cut 切鏡軌與軌道車路徑運鏡"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "If you want to animate a \u003cspan class=\"term-en\"\u003eCine Camera Actor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（電影攝影機物件）\u003c/span\u003e along a path with \u003cspan class=\"term-en\"\u003eSequencer\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（Sequencer 序列器）\u003c/span\u003e, you should use a ____________.",
                          "detailedOptions":  [
                                                  "Camera Rig Crane Actor（攝影搖臂 Actor：模擬機械搖臂升降與俯仰運鏡的輔助設備）",
                                                  "Level Sequence Actor（關卡序列 Actor：在關卡中負責播放指定 Level Sequence 的物件）",
                                                  "Camera Rig Rail Actor（攝影軌道車 Actor：透過樣條曲線路徑讓 Cine Camera 沿指定軌跡平滑移動運鏡）",
                                                  "Spawnable Actor（由 Sequencer 在播放期間動態生成的物件統稱）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q25",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  25,
                          "type":  "MC",
                          "question":  "The newest editor in UE4 used to edit in-game cinematics is called ____________.",
                          "questionZh":  "UE4 中用來編輯遊戲內過場動畫（In-game cinematics）的最新編輯器稱為 ____________。",
                          "options":  [
                                          "Cinematics",
                                          "Persona",
                                          "Matinee",
                                          "Sequencer"
                                      ],
                          "optionsZh":  [
                                            "Cinematics（過場動畫選單分類名稱，非編輯器本身名稱）",
                                            "Persona（骨骼角色、蒙太奇與動畫系統專用編輯器）",
                                            "Matinee（UE4 早期舊版過場動畫工具，現已棄用）",
                                            "Sequencer（序列器：UE4 中用於編輯遊戲內電影過場動畫的最新非線性多軌編輯器）"
                                        ],
                          "rawAnswer":  "Sequencer",
                          "correctIndex":  3,
                          "correctText":  "Sequencer",
                          "explanation":  "【UE 4.27 核心考點：Sequencer 現代過場動畫編輯器】\nSequencer 是 UE4 取代舊版 Matinee 的新一代專業非線性多軌過場動畫編輯器，支援即時預覽、子序列嵌套與電影級攝影機控制。",
                          "keywords":  [
                                           {
                                               "term":  "Sequencer 電影過場動畫系統",
                                               "role":  "編輯 Level Sequence 資產，管理 Possessable/Spawnable 物件、Camera Cut 切鏡軌與軌道車路徑運鏡"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "The newest editor in UE4 used to edit in-game cinematics is called ____________.",
                          "detailedOptions":  [
                                                  "Cinematics（過場動畫選單分類名稱，非編輯器本身名稱）",
                                                  "Persona（骨骼角色、蒙太奇與動畫系統專用編輯器）",
                                                  "Matinee（UE4 早期舊版過場動畫工具，現已棄用）",
                                                  "Sequencer（序列器：UE4 中用於編輯遊戲內電影過場動畫的最新非線性多軌編輯器）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q26",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  26,
                          "type":  "MC",
                          "question":  "____________ is a type of joint that allows you to connect two Actors together, presumably ones simulating physics. It gives you the ability to apply limits or set linear and angular forces. There are several preset joint types: ball-and-socket, hinge, and prismatic.",
                          "questionZh":  "____________ 是一種關節連接器，允許你將兩個 Actor（通常是模擬物理的物件）連接在一起，並賦予你施加角度限制或設定線性與角作用力的能力，內建球窩關節（ball-and-socket）、鉸鏈（hinge）與稜柱關節（prismatic）等預設類型。",
                          "options":  [
                                          "Destructible Actor",
                                          "Physics Thruster Actor",
                                          "Static Mesh Actor",
                                          "Physics Constraint Actor"
                                      ],
                          "optionsZh":  [
                                            "Destructible Actor（可破壞 Actor：當承受足夠外力或傷害時會碎裂崩解成小碎塊的剛體物件）",
                                            "Physics Thruster Actor（物理推進器 Actor：向指定方向持續施加推力，類似火箭推進器）",
                                            "Static Mesh Actor（靜態網格 Actor：場景中最基礎的剛性 3D 幾何模型物件）",
                                            "Physics Constraint Actor（物理約束 Actor：連接兩個物理 Actor 並設定球窩、鉸鏈或稜柱等關節旋轉與位移限制）"
                                        ],
                          "rawAnswer":  "Physics Constraint Actor",
                          "correctIndex":  3,
                          "correctText":  "Physics Constraint Actor",
                          "explanation":  "【UE 4.27 核心考點：Physics Constraint Actor 物理約束關節】\nPhysics Constraint Actor 可連接兩個剛體並分別限制 X/Y/Z 三軸的線性移動（Linear Limits）與擺動/扭轉角度（Angular Limits），輕鬆製作擺錘、旋轉門、吊橋與機械關節。",
                          "keywords":  [
                                           {
                                               "term":  "Static Mesh（靜態網格）",
                                               "role":  "剛性 3D 幾何模型，放置於關卡中稱為 Static Mesh Actor，預設使用 UV Channel 1 儲存 Lightmap"
                                           },
                                           {
                                               "term":  "UE 4.27 物理模擬與破碎系統",
                                               "role":  "包含 Physics Constraint 關節、PhAT 骨骼布娃娃工具、Physics Material（摩擦/彈力/密度）與 Voronoi 可破壞物件"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "____________ is a type of joint that allows you to connect two Actors together, presumably ones simulating physics."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "It gives you the ability to apply limits or set linear and angular forces."
                                           },
                                           {
                                               "partNum":  3,
                                               "en":  "There are several preset joint types: ball-and-socket, hinge, and prismatic."
                                           }
                                       ],
                          "detailedQuestion":  "____________ is a type of joint that allows you to connect two Actors together, presumably ones simulating physics. It gives you the ability to apply limits or set linear and angular forces. There are several preset joint types: ball-and-socket, hinge, and prismatic.",
                          "detailedOptions":  [
                                                  "Destructible Actor（可破壞 Actor：當承受足夠外力或傷害時會碎裂崩解成小碎塊的剛體物件）",
                                                  "Physics Thruster Actor（物理推進器 Actor：向指定方向持續施加推力，類似火箭推進器）",
                                                  "Static Mesh Actor（靜態網格 Actor：場景中最基礎的剛性 3D 幾何模型物件）",
                                                  "Physics Constraint Actor（物理約束 Actor：連接兩個物理 Actor 並設定球窩、鉸鏈或稜柱等關節旋轉與位移限制）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q27",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  27,
                          "type":  "MC",
                          "question":  "The ____________ Editor is used to set up physics constraints on the bone hierarchy for a Skeletal Mesh asset. It is used, for example, to create ragdoll effects on characters or dynamic hoses or chains that react with the world around them.",
                          "questionZh":  "____________ 編輯器用於在骨骼網格資產（Skeletal Mesh asset）的骨骼階層上設定物理約束，例如用來為角色製作布娃娃（Ragdoll）物理效果，或製作能與周遭世界互動的動態軟管與鎖鏈。",
                          "options":  [
                                          "Physics Asset Tool (PhAT)",
                                          "Destructible Mesh",
                                          "APEX PhysX Lab",
                                          "Static Mesh"
                                      ],
                          "optionsZh":  [
                                            "Physics Asset Tool (PhAT)（物理資產工具 PhAT：為骨骼網格階層設定物理碰撞與約束，製作角色布娃娃或動態鎖鏈）",
                                            "Destructible Mesh（可破壞網格：儲存破碎塊層級結構的資產類型）",
                                            "APEX PhysX Lab（NVIDIA 外部獨立破碎編輯工具，非 UE4 內建骨骼物理編輯器）",
                                            "Static Mesh（靜態網格：無骨骼階層的固定幾何模型）"
                                        ],
                          "rawAnswer":  "Physics Asset Tool (PhAT)",
                          "correctIndex":  0,
                          "correctText":  "Physics Asset Tool (PhAT)",
                          "explanation":  "【UE 4.27 核心考點：Physics Asset Tool (PhAT) 物理資產工具】\nPhAT 專門編輯骨骼網格對應的 Physics Asset，為各骨骼配置膠囊體/方塊碰撞幾何與關節活動角度限制，是實現角色死亡布娃娃（Ragdoll）與物理頭髮配件的必備工具。",
                          "keywords":  [
                                           {
                                               "term":  "Static Mesh（靜態網格）",
                                               "role":  "剛性 3D 幾何模型，放置於關卡中稱為 Static Mesh Actor，預設使用 UV Channel 1 儲存 Lightmap"
                                           },
                                           {
                                               "term":  "UE 4.27 物理模擬與破碎系統",
                                               "role":  "包含 Physics Constraint 關節、PhAT 骨骼布娃娃工具、Physics Material（摩擦/彈力/密度）與 Voronoi 可破壞物件"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "The ____________ Editor is used to set up physics constraints on the bone hierarchy for a Skeletal Mesh asset."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "It is used, for example, to create ragdoll effects on characters or dynamic hoses or chains that react with the world around them."
                                           }
                                       ],
                          "detailedQuestion":  "The ____________ Editor is used to set up physics constraints on the bone hierarchy for a \u003cspan class=\"term-en\"\u003eSkeletal Mesh asset\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（骨骼網格資產）\u003c/span\u003e. It is used, for example, to create ragdoll effects on characters or \u003cspan class=\"term-en\"\u003edynamic\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（動態模擬/即時）\u003c/span\u003e hoses or chains that react with the world around them.",
                          "detailedOptions":  [
                                                  "Physics Asset Tool (PhAT)（物理資產工具 PhAT：為骨骼網格階層設定物理碰撞與約束，製作角色布娃娃或動態鎖鏈）",
                                                  "Destructible Mesh（可破壞網格：儲存破碎塊層級結構的資產類型）",
                                                  "APEX PhysX Lab（NVIDIA 外部獨立破碎編輯工具，非 UE4 內建骨骼物理編輯器）",
                                                  "Static Mesh（靜態網格：無骨骼階層的固定幾何模型）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q28",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  28,
                          "type":  "MC",
                          "question":  "A ____________ contains a collection of properties that affect the behavior of an Actor simulating physics. It can be assigned to a Static Mesh Actor or a Material. Properties include Friction, Restitution, and Density.",
                          "questionZh":  "____________ 包含了一組影響模擬物理 Actor 行為的屬性集合，可指派給靜態網格 Actor 或材質（Material），其屬性包含摩擦力（Friction）、彈性恢復係數（Restitution）與密度（Density）。",
                          "options":  [
                                          "Skeletal Mesh asset",
                                          "Physics Material asset",
                                          "Destructible Mesh asset",
                                          "Physics property"
                                      ],
                          "optionsZh":  [
                                            "Skeletal Mesh asset（骨骼網格資產：具備骨骼階層與蒙皮權重的可動畫角色模型）",
                                            "Physics Material asset（物理材質資產：包含摩擦力 Friction、恢復係數 Restitution 與密度 Density 等物理屬性集合）",
                                            "Destructible Mesh asset（可破壞網格資產：用於破碎物體模擬的模型資產）",
                                            "Physics property（物理屬性：細節面板中的一般參數統稱，非獨立資產名稱）"
                                        ],
                          "rawAnswer":  "Physics Material asset",
                          "correctIndex":  1,
                          "correctText":  "Physics Material asset",
                          "explanation":  "【UE 4.27 核心考點：Physics Material asset 物理材質資產】\nPhysics Material 定義物體表面的物理力學屬性：Friction 控制滑動阻力、Restitution 控制碰撞反彈彈力、Density 控制單位體積質量，讓冰面、橡膠球或岩石展現真實物理反應。",
                          "keywords":  [
                                           {
                                               "term":  "Static Mesh（靜態網格）",
                                               "role":  "剛性 3D 幾何模型，放置於關卡中稱為 Static Mesh Actor，預設使用 UV Channel 1 儲存 Lightmap"
                                           },
                                           {
                                               "term":  "PBR 材質與法線系統",
                                               "role":  "Albedo 定義無光影純固有色；Normal Map 以 RGB 控制受光法線方向營造高低凹凸細節"
                                           },
                                           {
                                               "term":  "UE 4.27 物理模擬與破碎系統",
                                               "role":  "包含 Physics Constraint 關節、PhAT 骨骼布娃娃工具、Physics Material（摩擦/彈力/密度）與 Voronoi 可破壞物件"
                                           }
                                       ],
                          "hasSegments":  true,
                          "segments":  [
                                           {
                                               "partNum":  1,
                                               "en":  "A ____________ contains a collection of properties that affect the behavior of an Actor simulating physics."
                                           },
                                           {
                                               "partNum":  2,
                                               "en":  "It can be assigned to a Static Mesh Actor or a Material."
                                           },
                                           {
                                               "partNum":  3,
                                               "en":  "Properties include Friction, Restitution, and Density."
                                           }
                                       ],
                          "detailedQuestion":  "A ____________ contains a collection of properties that affect the behavior of an Actor simulating physics. It can be assigned to a \u003cspan class=\"term-en\"\u003eStatic Mesh Actor\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（靜態網格物件）\u003c/span\u003e or a Material. Properties include \u003cspan class=\"term-en\"\u003eFriction\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（摩擦力）\u003c/span\u003e, \u003cspan class=\"term-en\"\u003eRestitution\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（彈性恢復係數）\u003c/span\u003e, and \u003cspan class=\"term-en\"\u003eDensity\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（密度）\u003c/span\u003e.",
                          "detailedOptions":  [
                                                  "Skeletal Mesh asset（骨骼網格資產：具備骨骼階層與蒙皮權重的可動畫角色模型）",
                                                  "Physics Material asset（物理材質資產：包含摩擦力 Friction、恢復係數 Restitution 與密度 Density 等物理屬性集合）",
                                                  "Destructible Mesh asset（可破壞網格資產：用於破碎物體模擬的模型資產）",
                                                  "Physics property（物理屬性：細節面板中的一般參數統稱，非獨立資產名稱）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q29",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  29,
                          "type":  "TF",
                          "question":  "Voronoi is a mathematical tessellation algorithm that divides a large entity into small parts.",
                          "questionZh":  "Voronoi（沃羅諾伊圖）是一種將大型實體分割成多個細小碎塊的數學鑲嵌細分演算法。",
                          "options":  [
                                          "True",
                                          "False"
                                      ],
                          "optionsZh":  [
                                            "True（正確）",
                                            "False（錯誤）"
                                        ],
                          "rawAnswer":  "True",
                          "correctIndex":  0,
                          "correctText":  "True",
                          "explanation":  "【UE 4.27 核心考點：Voronoi 破碎分割演算法】\n正確。UE4 的可破壞網格系統使用 Voronoi 圖形細分演算法，依據隨機散佈的種子點將 3D 網格自然切割成不規則的多面體碎塊。",
                          "keywords":  [
                                           {
                                               "term":  "UE 4.27 物理模擬與破碎系統",
                                               "role":  "包含 Physics Constraint 關節、PhAT 骨骼布娃娃工具、Physics Material（摩擦/彈力/密度）與 Voronoi 可破壞物件"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "\u003cspan class=\"term-en\"\u003eVoronoi\u003c/span\u003e\u003cspan class=\"inline-trans\"\u003e（沃羅諾伊碎裂演算法）\u003c/span\u003e is a mathematical tessellation algorithm that divides a large entity into small parts.",
                          "detailedOptions":  [
                                                  "True（正確）",
                                                  "False（錯誤）"
                                              ]
                      },
                      {
                          "id":  "07_to_13_Texs_q30",
                          "chapterId":  "07_to_13_Texs",
                          "qNum":  30,
                          "type":  "MC",
                          "question":  "____________ is a rigid body that fractures and crumbles when enough force or damage has been applied.",
                          "questionZh":  "____________ 是一種當施加足夠的外力或傷害時，會破裂並崩解碎散的剛體物件。",
                          "options":  [
                                          "Radial Force Actor",
                                          "Static Mesh Actor",
                                          "Destructible Actor",
                                          "Skeletal Mesh Actor"
                                      ],
                          "optionsZh":  [
                                            "Radial Force Actor（徑向力場 Actor：從中心向外發射球形衝擊波或持續推力場的物件）",
                                            "Static Mesh Actor（靜態網格 Actor：場景中最基礎的剛性 3D 幾何模型物件）",
                                            "Destructible Actor（可破壞 Actor：當承受足夠外力或傷害時會碎裂崩解成小碎塊的剛體物件）",
                                            "Skeletal Mesh Actor（骨骼網格 Actor：放置於關卡中的骨骼動畫模型實例）"
                                        ],
                          "rawAnswer":  "Destructible Actor",
                          "correctIndex":  2,
                          "correctText":  "Destructible Actor",
                          "explanation":  "【UE 4.27 核心考點：Destructible Actor 可破壞剛體物件】\nDestructible Actor 基於 Destructible Mesh 建立，在承受超過 Damage Threshold（傷害閾值）的撞擊或爆炸力場時，會即時觸發物理碎裂崩解效果。",
                          "keywords":  [
                                           {
                                               "term":  "Static Mesh（靜態網格）",
                                               "role":  "剛性 3D 幾何模型，放置於關卡中稱為 Static Mesh Actor，預設使用 UV Channel 1 儲存 Lightmap"
                                           },
                                           {
                                               "term":  "UE 4.27 物理模擬與破碎系統",
                                               "role":  "包含 Physics Constraint 關節、PhAT 骨骼布娃娃工具、Physics Material（摩擦/彈力/密度）與 Voronoi 可破壞物件"
                                           }
                                       ],
                          "hasSegments":  false,
                          "segments":  [

                                       ],
                          "detailedQuestion":  "____________ is a rigid body that fractures and crumbles when enough force or damage has been applied.",
                          "detailedOptions":  [
                                                  "Radial Force Actor（徑向力場 Actor：從中心向外發射球形衝擊波或持續推力場的物件）",
                                                  "Static Mesh Actor（靜態網格 Actor：場景中最基礎的剛性 3D 幾何模型物件）",
                                                  "Destructible Actor（可破壞 Actor：當承受足夠外力或傷害時會碎裂崩解成小碎塊的剛體物件）",
                                                  "Skeletal Mesh Actor（骨骼網格 Actor：放置於關卡中的骨骼動畫模型實例）"
                                              ]
                      }
                  ]
};