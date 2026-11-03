# Unreal Engine 4.27 Interactive Certification & Quiz Platform
虛幻引擎 4.27 24小時官方教材全真互動測驗與刷題系統

本專案將官方教材《Teach Yourself Unreal Engine 4 Game Development in 24 Hours》共 12 個章節、120 道全真章節考題完整現代化重構，採用頂級教育科技 UI（參考多益線上測驗系統 TOEIC Pro 介面架構），完全獨立集中於單一資料夾，支援 GitHub 快速上傳與 GitHub Pages 零配置一鍵部署。

---

## 🌟 核心特色功能

1. **考題以英文原文為主，繁體中文翻譯為輔**：
   - 預設提供 **「英中雙語對照模式」**（英文考題在上、高雅淡藍色中文翻譯卡在下）。
   - 頂部支援一鍵切換：`English 原文`（擬真官方認證環境）、`英中雙語對照`、`繁體中文`。
2. **100% 逐字核對官方考題與標準解答**：
   - 12 個章節、120 道題目（Hour 01 ~ 10, 12, 13）。
   - 包含是非題（True / False）與四選一單選題，考題字元、標點與正確答案完全與原始教材考卷 100% 契合。
3. **專為 Unreal Engine 4.27 版本定製之深入內容解釋**：
   - 包含細節面板（Details）、專案結構（.ini/Saved）、左手坐標系、靜態網格碰撞（Simple vs Complex）、Lightmass 光照烘焙、PBR 基於物理著色（Albedo/Roughness/Metallic）、Sound Cue、地貌植被（Landscape/Foliage）、大氣霧（Atmospheric Fog/Height Fog）、Cascade 粒子系統、Sequencer 電影序列器與剛體物理模擬。
   - 逐題詳解「正確答案核心邏輯」與「干擾選項功能對比」。
4. **完整測驗模式**：
   - **刷題練習模式**：即時回饋正誤、可自由開啟/關閉答案顯示與專業解釋、作答統計率即時計算。
   - **全真章節模考**：30 分鐘官方倒數計時器（倒數 5 分鐘緊急變色警示），10 題每題 2 分滿分 20 分，考後生成成績單與答對率結算。
   - **智慧錯題本**：作答錯誤自動記錄於瀏覽器 `localStorage`，可單獨選取重刷錯題直至熟練。
5. **右側題目卡導覽盤與鍵盤快捷鍵**：
   - 1~10 題號盤視覺化標示未答、已答、標記（★）、答對（綠色）、答錯（紅色）。
   - 支援鍵盤快速鍵：`← / →` 題號切換、`1/2/3/4` 或 `A/B/C/D` 快速選擇答案。

---

## 📁 檔案結構說明（完全集中、適合 GitHub 部署）

本資料夾內所有檔案均採用相對路徑引用，無任何外部框架依賴（純 Vanilla JS + CSS3 + HTML5）：

```text
ue_quiz_website/
├── index.html        # 主網頁結構（相容各大現代瀏覽器與行動裝置）
├── ue_style.css      # 虛幻引擎 Cyber Slate 深色高品質科技風格樣式表
├── ue_questions.js   # 12 章 120 題完整英文考題、中文翻譯與 4.27 深入解析資料庫
├── ue_script.js      # 測驗邏輯、計時器、錯題本、鍵盤快捷鍵與狀態管理
├── README.md         # 專案說明與部署指南
└── 啟動測驗網站.bat  # Windows 桌面一鍵雙擊開啟捷徑
```

---

## 🚀 部署至 GitHub Pages 指南

1. 將本 `ue_quiz_website` 資料夾內的所有檔案上傳或推送至您的 GitHub 儲存庫（Repository）的 `main` 分支。
2. 進入該 GitHub 儲存庫的 **Settings** -> **Pages**。
3. 在 **Build and deployment** -> **Branch** 選擇 `main` 分支與 `/ (root)` 資料夾，點擊 **Save**。
4. 等待約 1 分鐘，即可獲得公開線上的測驗系統網址（如 `https://<username>.github.io/<repo>/`）。

