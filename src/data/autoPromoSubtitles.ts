export interface SubtitleItem {
  id: number;
  startFrame: number;
  endFrame: number;
  text: string;
}

export const AUTO_PROMO_TOTAL_FRAMES = 900; // 30.0s @ 30fps

export const AUTO_PROMO_SUBTITLES: SubtitleItem[] = [
  { id: 1, startFrame: 5, endFrame: 84, text: "我所有的视频都是AI自动剪辑的" },
  { id: 2, startFrame: 84, endFrame: 158, text: "之前已经分享过一期全流程教程" },
  { id: 3, startFrame: 161, endFrame: 220, text: "这次我把你们现在看到的这套" },
  { id: 4, startFrame: 220, endFrame: 305, text: "暗调极简视频风格的组件开源了" },
  { id: 5, startFrame: 310, endFrame: 342, text: "大家只需要把素材" },
  { id: 6, startFrame: 342, endFrame: 392, text: "放到对应的文件夹里" },
  { id: 7, startFrame: 393, endFrame: 438, text: "任何人都可以快速一键" },
  { id: 8, startFrame: 438, endFrame: 498, text: "复刻和我同款的视频风格" },
  { id: 9, startFrame: 502, endFrame: 546, text: "这套模板自由度很高" },
  { id: 10, startFrame: 546, endFrame: 597, text: "你可以随时和你的AI沟通" },
  { id: 11, startFrame: 597, endFrame: 635, text: "修改所有模块" },
  { id: 12, startFrame: 639, endFrame: 688, text: "非常适合做各种科普" },
  { id: 13, startFrame: 688, endFrame: 741, text: "汇报知识讲解等内容" },
  { id: 14, startFrame: 746, endFrame: 803, text: "项目名称我会放在评论区" },
  { id: 15, startFrame: 806, endFrame: 848, text: "大家可以让自己的agent" },
  { id: 16, startFrame: 849, endFrame: 894, text: "一键安装依赖体验" },
];
