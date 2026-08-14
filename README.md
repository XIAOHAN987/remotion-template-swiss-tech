# 🇨🇭 Remotion Template: Swiss Minimalist Tech Keynote
> 基于 **Remotion + React + TypeScript** 的高质感瑞士极简风格（Swiss Style）商业与科技产品发布会视频生成引擎。支持**人类创作者极简配置**与 **AI Coding Agent（如 Antigravity / Claude / Cursor）自然语言全自动编排与修改导出**。

[![Remotion](https://img.shields.io/badge/Remotion-4.0-blue?style=flat-square&logo=react)](https://www.remotion.dev/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

## ✨ 视觉设计与架构亮点

1. **🇨🇭 纯正瑞士极简主义（Swiss Minimalist Tech）**：
   - **高对比黑白灰阶**：告别杂乱的渐变与彩色边框，采用克制利落的黑白灰高对比基调；
   - **高辨识度徽标与卡片**：纯白底色配纯黑字体的 `SwissWhiteBadge` + 18px 几何圆角毛玻璃 `SwissCard`；
   - **无限流动 3D 透视网格**：连续单向运动的 3D 透视地平面网格与深红/冷灰漫射微光；
   - **大尺寸通透排版**：素材窗口占宽 80%+，拒绝层叠小卡片，呼吸感充足；
   - **纯矢量 SVG 图标库**：杜绝 Emoji，全量基于 `SvgIcons.tsx` 纯几何数学矢量绘制。

2. **⚙️ 生产级无头渲染稳定性（Zero-Flicker Architecture）**：
   - **`OffthreadVideo` 离线抽帧**：彻底规避无头 Chromium 在 Seek 时的关键帧偏差，**杜绝视频前后抽搐与掉帧**；
   - **多图层 Crossfade 交叉淡化**：多张图表/图片轮播采用多轨独立绝对定位图层，在 15 帧内平滑交叉渐变，**杜绝单图硬切白闪**；
   - **纯数学状态插值**：剔除所有在无头单帧渲染中失效的 CSS `transition`，全量由 `interpolateColors` 与 `spring` 驱动；
   - **连续单向坐标系**：剔除 `%` 模数取余，保证全时段坐标 100% 连续无单帧跳跃。

3. **🤖 专为 AI Agent 深度优化的架构**：
   - **统一内容配置清单 (`src/config/content.ts`)**：将文案、时间轴与素材引用统一声明，Agent 无需推断多个文件即可一键修改；
   - **内置 SRT 运行时解析器 (`src/utils/parseSrt.ts`)**：自动将任何标准 `.srt` 字幕时间戳换算为 30fps 精确起止帧。

---

## 🤖 极简工作流推荐（两种使用方式）

### 模式 A：交给 AI Agent 全自动处理（推荐 ⭐⭐⭐⭐⭐）
> 本工程完全为 AI 智能体（Antigravity、Claude Code、Cursor、Windsurf 等）深度优化。你无需手写任何代码或计算帧数，只需对 AI 说人话：

1. **一键生成新视频**：
   > “帮我把这篇口播音频和素材生成一个瑞士风格的发布会视频，参考这个模板。”
2. **指出时间点精准微调**：
   > “第 21 秒讲到多模态优势时切为采访视频。”  
   > “第 35 秒的代码工程部分，把 4 张实测大图做成平滑的 Tab 轮播切换。”  
   > “把第 12 秒的跑分从 56 分改成 68 分，断层极速改为 450 TPS。”
3. **一键自动渲染**：
   > “帮我重新渲染导出最终 1080P 高清成片。”  
   AI Agent 会全自动完成组件编排、精确毫秒时间轴对齐并一键调用命令导出成片。

---

### 模式 B：手动本地配置与快速上手

#### 1. 克隆并安装依赖
```bash
git clone https://github.com/XIAOHAN987/remotion-template-swiss-tech.git
cd remotion-template-swiss-tech
npm install
```

#### 2. 启动网页端实时预览
```bash
npm run dev
# 或
npx remotion studio
```
打开浏览器访问 **`http://localhost:3000`**，即可实时拖拽时间轴预览与逐帧检查。

#### 3. 替换为你自己的素材与导出
- 将口播录音（`.wav`）、字幕（`.srt`）、录屏（`.mp4`）与跑分截图（`.png`）放入 `public/` 目录；
- 在 `src/config/content.ts` 或 `src/MainVideo.tsx` 中调整各场景文案与素材映射；
- 在网页端右上角点击 **`Render video`** 或执行命令一键导出：
```bash
npm run build
# 导出宣传片版本：
npm run build:promo
```

---

## 📐 AI Agent 场景切分与节奏把控指导原则

AI 智能体在根据用户口播生成新视频时，请遵循以下**分镜编排黄金准则**：

1. **场景时长区间**：每个分幕建议控制在 **8 ~ 15 秒（约 240 ~ 450 帧 @ 30 FPS）**，避免单个场景停留过长导致视觉疲劳；
2. **字幕语义对齐**：场景的切换时刻必须与 SRT 字幕的自然段落起止毫秒严格吻合；
3. **分镜模版匹配建议**：
   - 0~10s（开场概览）：使用大窗浏览器/产品演示（`HeroVideo`）；
   - 10~25s（性能与评测）：使用长图漫游 + 瑞士白底黑字指标卡片（`BenchmarkSplit`）；
   - 25~45s（多特性/代码测试）：使用多图平滑 Crossfade 轮播（`CarouselSwitcher`）；
   - 45~60s（竞品横评）：使用双模型对比卡片（`ComparisonPK`）；
   - 收尾（总结与CTA）：使用大气收尾终章卡片（`GrandOutro`）。

---

## 📁 目录结构说明

```text
├── public/                       # 静态资产目录（音频、字幕、录屏、截图）
├── src/
│   ├── config/
│   │   └── content.ts            # ⭐️ 统一内容配置清单（Agent 优先修改这里）
│   ├── utils/
│   │   └── parseSrt.ts           # ⭐️ SRT 字幕时间戳自动转帧号工具
│   ├── components/               # 瑞士极简原子组件库
│   │   ├── Background.tsx        # 3D透视流动网格与环境微光
│   │   ├── SwissCard.tsx         # 18px圆角高斯磨砂玻璃容器
│   │   ├── SwissWhiteBadge.tsx   # 高对比白底黑字瑞士徽标
│   │   ├── SubtitleBar.tsx       # SRT精准高亮字幕条
│   │   └── SvgIcons.tsx          # 纯矢量 SVG 几何图标库 (严禁Emoji)
│   ├── scenes/                   # 7 大分幕场景模版
│   ├── MainVideo.tsx             # 视频主序列组装
│   └── Root.tsx                  # Remotion 入口定义 (1080P @ 30FPS)
└── remotion.config.ts
```

---

## 💡 Remotion 离线渲染避坑核心规则

| 常见陷阱 | 错误原因 | 本模板解决方案 |
| :--- | :--- | :--- |
| **视频疯狂抖动** | 原生 `<Video>` 在无头 Chrome 中 Seek 精度不足 | 全量使用 `<OffthreadVideo>` 进行 FFmpeg 离线抽帧 |
| **Tab / 颜色硬切** | 离线单帧抓图时 CSS `transition` 无法插值 | 使用 `interpolateColors` 进行逐帧纯数学计算 |
| **画面定时跳变** | 使用了 `frame % 600` 等模数取余 | 使用单调连续插值 `interpolate(frame, ...)` |
| **图片切换白闪** | 单一 `<Img>` 标签动态换 `src` | 采用多图层绝对定位 + Crossfade 交叉淡化 |

---

## 📄 开源许可
本项目基于 [MIT License](LICENSE) 开源，允许任何个人或企业免费商业使用、自由二次开发与分发。
