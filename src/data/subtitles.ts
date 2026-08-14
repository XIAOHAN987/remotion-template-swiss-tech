export interface SubtitleItem {
  id: number;
  startSec: number;
  endSec: number;
  startFrame: number;
  endFrame: number;
  text: string;
}

export const SUBTITLES: SubtitleItem[] = [
  { id: 1, startSec: 0.2, endSec: 1.8, startFrame: 6, endFrame: 54, text: "沉寂许久被大家戏称美国" },
  { id: 2, startSec: 1.8, endSec: 5.3, startFrame: 54, endFrame: 159, text: "大豆包的Gemini终于放出全新3.7Flash" },
  { id: 3, startSec: 5.533, endSec: 7.166, startFrame: 166, endFrame: 215, text: "依旧是Flash产品线" },
  { id: 4, startSec: 7.166, endSec: 9.266, startFrame: 215, endFrame: 278, text: "但综合能力迎来大幅升级" },
  { id: 5, startSec: 9.466, endSec: 12.466, startFrame: 284, endFrame: 374, text: "按照最新智能指数榜单得分56" },
  { id: 6, startSec: 12.5, endSec: 14.533, startFrame: 375, endFrame: 436, text: "仅次于GPT5.6Tera" },
  { id: 7, startSec: 14.6, endSec: 16.7, startFrame: 438, endFrame: 501, text: "输出速度堪称断层领先" },
  { id: 8, startSec: 16.8, endSec: 18.6, startFrame: 504, endFrame: 558, text: "峰值可达340tokens" },
  { id: 9, startSec: 19.066, endSec: 21.166, startFrame: 572, endFrame: 635, text: "同时官方定价直接下调一半" },
  { id: 10, startSec: 21.466, endSec: 23.466, startFrame: 644, endFrame: 704, text: "Gemini还有一个很难替代的优势" },
  { id: 11, startSec: 23.6, endSec: 25.466, startFrame: 708, endFrame: 764, text: "它是目前极少数原生深度" },
  { id: 12, startSec: 25.466, endSec: 27.5, startFrame: 764, endFrame: 825, text: "支持音频理解的多模态模型" },
  { id: 13, startSec: 27.666, endSec: 30.166, startFrame: 830, endFrame: 905, text: "如果你的工作流大量处理视频素材" },
  { id: 14, startSec: 30.333, endSec: 33.133, startFrame: 910, endFrame: 994, text: "视频解析能力现阶段几乎是第一梯队" },
  { id: 15, startSec: 33.4, endSec: 36.2, startFrame: 1002, endFrame: 1086, text: "工程代码相关实测数据对比上" },
  { id: 16, startSec: 36.266, endSec: 39.166, startFrame: 1088, endFrame: 1175, text: "相比上代3.6Flash提升十分明显" },
  { id: 17, startSec: 39.566, endSec: 40.933, startFrame: 1187, endFrame: 1228, text: "官方测评表单里" },
  { id: 18, startSec: 41.0, endSec: 43.1, startFrame: 1230, endFrame: 1293, text: "代码工程agent智能体" },
  { id: 19, startSec: 43.1, endSec: 44.8, startFrame: 1293, endFrame: 1344, text: "执行能力提升尤其突出" },
  { id: 20, startSec: 44.933, endSec: 46.5, startFrame: 1348, endFrame: 1395, text: "处理复杂工具调用" },
  { id: 21, startSec: 46.533, endSec: 48.9, startFrame: 1396, endFrame: 1467, text: "长代码工程任务比上代强不少" },
  { id: 22, startSec: 49.0, endSec: 51.566, startFrame: 1470, endFrame: 1547, text: "哪怕是完整PDF截图设计稿" },
  { id: 23, startSec: 51.566, endSec: 53.6, startFrame: 1547, endFrame: 1608, text: "也能产出完成度更高的结果" },
  { id: 24, startSec: 53.933, endSec: 55.666, startFrame: 1618, endFrame: 1670, text: "最近大模型扎堆上新" },
  { id: 25, startSec: 55.666, endSec: 57.4, startFrame: 1670, endFrame: 1722, text: "刚好可以和国内性价比极强" },
  { id: 26, startSec: 57.4, endSec: 60.333, startFrame: 1722, endFrame: 1810, text: "的Deepseek V4 Pro 0813横向对比" },
  { id: 27, startSec: 60.466, endSec: 62.3, startFrame: 1814, endFrame: 1869, text: "智能指数高出3分" },
  { id: 28, startSec: 62.3, endSec: 64.6, startFrame: 1869, endFrame: 1938, text: "不过论单价成本还是Deepseek" },
  { id: 29, startSec: 64.866, endSec: 66.866, startFrame: 1946, endFrame: 2006, text: "圈内俗称良慎更占优势" },
  { id: 30, startSec: 67.2, endSec: 69.166, startFrame: 2016, endFrame: 2075, text: "能明显感受到下半年各大" },
  { id: 31, startSec: 69.166, endSec: 71.1, startFrame: 2075, endFrame: 2133, text: "厂商迭代节奏全面加快" },
  { id: 32, startSec: 71.1, endSec: 73.266, startFrame: 2133, endFrame: 2198, text: "大模型行业内卷越来越激烈" },
  { id: 33, startSec: 73.366, endSec: 74.466, startFrame: 2201, endFrame: 2234, text: "有意思的一点" },
  { id: 34, startSec: 74.566, endSec: 76.866, startFrame: 2237, endFrame: 2306, text: "谷歌迟迟没有推Pro旗舰模型" },
  { id: 35, startSec: 76.9, endSec: 78.8, startFrame: 2307, endFrame: 2364, text: "但能看到Gemini仍在努力" },
  { id: 36, startSec: 79.1, endSec: 81.733, startFrame: 2373, endFrame: 2452, text: "他们专门针对听障人群开发手语模型" },
  { id: 37, startSec: 81.8, endSec: 83.6, startFrame: 2454, endFrame: 2508, text: "实现手语实时转文字" },
  { id: 38, startSec: 83.7, endSec: 85.333, startFrame: 2511, endFrame: 2560, text: "同时推出面向人形机器人" },
  { id: 39, startSec: 85.333, endSec: 87.6, startFrame: 2560, endFrame: 2628, text: "的Gemini Robotics 2智能模型" },
  { id: 40, startSec: 87.866, endSec: 89.2, startFrame: 2636, endFrame: 2676, text: "让我们继续期待未来各" },
  { id: 41, startSec: 89.2, endSec: 90.766, startFrame: 2676, endFrame: 2723, text: "大厂商的白热化竞争吧" }
];

export const TOTAL_FRAMES = 2740;
