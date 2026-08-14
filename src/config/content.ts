/**
 * 🇨🇭 SWISS MINIMALIST VIDEO MANIFEST & CONTENT CONFIG
 *
 * 🤖 AGENT GUIDELINES (智能体编辑指南):
 * 1. 当用户需要制作新视频时，优先在此文件中修改内容声明（音频、字幕、分幕时长、各场景文案与素材映射）；
 * 2. 场景时长规划原则：
 *    - 每个分幕建议 8 ~ 15 秒（约 240 ~ 450 帧 @ 30 FPS），严格跟随口播 SRT 字幕的语义段落切分；
 *    - 确保后一个场景的 fromFrame 等于前一个场景的 fromFrame + durationInFrames；
 * 3. 视频资产使用规范：
 *    - 所有多媒体文件请放入 public/ 目录；
 *    - 视频播放始终使用 <OffthreadVideo> 保持确定性离线抽帧；
 *    - 严禁使用 Emoji，所有图标使用 SvgIcons.tsx 中的纯矢量 SVG。
 */

export interface SceneConfig {
  id: number;
  fromFrame: number;
  durationInFrames: number;
  title: string;
  subtitle: string;
  badge: string;
  template:
    | "HeroVideo"
    | "BenchmarkSplit"
    | "MultimodalShowcase"
    | "CarouselSwitcher"
    | "ComparisonPK"
    | "DualVideoTransition"
    | "GrandOutro";
  media?: string | string[];
  metrics?: Array<{
    label: string;
    value: string | number;
    unit?: string;
  }>;
}

export interface VideoManifest {
  projectName: string;
  audioSrc: string;
  srtSrc: string;
  fps: number;
  width: number;
  height: number;
  totalFrames: number;
  scenes: SceneConfig[];
}

export const defaultGeminiManifest: VideoManifest = {
  projectName: "Gemini 3.7 Flash 全新发布",
  audioSrc: "3.7发布口播.wav",
  srtSrc: "3.7发布口播.srt",
  fps: 30,
  width: 1920,
  height: 1080,
  totalFrames: 2740,
  scenes: [
    {
      id: 1,
      fromFrame: 0,
      durationInFrames: 281,
      title: "全新发布 · GEMINI 3.7 FLASH",
      subtitle: "新一代多模态推理与极速引擎",
      badge: "OFFICIAL RELEASE",
      template: "HeroVideo",
      media: "3.7发布.mp4",
    },
    {
      id: 2,
      fromFrame: 281,
      durationInFrames: 363,
      title: "基准评测 · 智能与极速",
      subtitle: "综合能力大幅升级，兼顾极致推理性能",
      badge: "BENCHMARK METRICS",
      template: "BenchmarkSplit",
      media: "Arenna跑分截图.png",
      metrics: [
        { label: "智能指数得分", value: 56 },
        { label: "断层领先极速", value: 340, unit: "tps" },
        { label: "成本阶梯降幅", value: "-50%" },
      ],
    },
    {
      id: 3,
      fromFrame: 644,
      durationInFrames: 358,
      title: "原生多模态 · 音频与视频",
      subtitle: "端到端原生音频处理，第一梯队视频流式解析",
      badge: "NATIVE MULTIMODAL",
      template: "MultimodalShowcase",
      media: "Google AI 3.7flsh采访画面.mp4",
    },
    {
      id: 4,
      fromFrame: 1002,
      durationInFrames: 616,
      title: "代码工程 · 智能体质变",
      subtitle: "WebDev 与 SWE-Bench 领先，复杂工具调用",
      badge: "CODE & AGENT",
      template: "CarouselSwitcher",
      media: [
        "3.7工程提升.png",
        "3.7工程提升截图2.png",
        "3.7工程截图3.png",
        "3.7工程截图4.png",
      ],
    },
    {
      id: 5,
      fromFrame: 1618,
      durationInFrames: 393,
      title: "横向对比 · 价格与智商",
      subtitle: "对标 DeepSeek V4 Pro 0813，智商与性价比",
      badge: "HEAD TO HEAD",
      template: "ComparisonPK",
      media: "价格对比图.png",
    },
    {
      id: 6,
      fromFrame: 2011,
      durationInFrames: 625,
      title: "具身智能 · 普惠科技",
      subtitle: "手语翻译与机器人模型演示，推动具身落地",
      badge: "EMBODIED ROBOTICS",
      template: "DualVideoTransition",
      media: ["手语翻译演示.mp4", "机器人模型.mp4"],
    },
    {
      id: 7,
      fromFrame: 2636,
      durationInFrames: 104,
      title: "未来展望 · 持续进化",
      subtitle: "大模型行业白热化竞争，探索智能边界",
      badge: "FINALE OUTRO",
      template: "GrandOutro",
    },
  ],
};
