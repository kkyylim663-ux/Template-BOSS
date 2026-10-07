export const PROMO_TABS = [
  "全部", "日常活动", "新会员", "运动", "VIP 福利", "现场游戏", "邀请奖励",
  "Daily Mission", "免费奖金", "Special Bonus", "SLOT", "MINI GAME", "到期",
] as const;

export interface Promotion {
  id: number;
  title: string;
  tab: (typeof PROMO_TABS)[number];
  period: string;
  apply: boolean;
}

const P = "2026-10-01~2026-10-31";
const LONG = "长期有效";

export const PROMOTIONS: Promotion[] = [
  { id: 1,  title: "午夜狂欢 [老虎机] 20% 红利", tab: "SLOT", period: P, apply: false },
  { id: 2,  title: "首存即享 MYR 38 奖励", tab: "新会员", period: LONG, apply: true },
  { id: 3,  title: "每日流水返利高达 1.4%", tab: "日常活动", period: LONG, apply: false },
  { id: 4,  title: "邀请奖励 88 MYR", tab: "邀请奖励", period: LONG, apply: false },
  { id: 5,  title: "0.2% Referral Rebate", tab: "邀请奖励", period: LONG, apply: false },
  { id: 6,  title: "VIP 每周红包福利", tab: "VIP 福利", period: LONG, apply: true },
  { id: 7,  title: "幸运转盘", tab: "MINI GAME", period: LONG, apply: false },
  { id: 8,  title: "幸运刮刮乐", tab: "MINI GAME", period: LONG, apply: false },
  { id: 9,  title: "幸运红包雨", tab: "MINI GAME", period: LONG, apply: false },
  { id: 10, title: "热门活动！ 每日免费领取20马币", tab: "免费奖金", period: P, apply: false },
  { id: 11, title: "BO55 救援奖励 100%", tab: "日常活动", period: LONG, apply: false },
  { id: 12, title: "老虎机 300% 欢迎红利", tab: "新会员", period: LONG, apply: true },
  { id: 13, title: "真人娱乐场 55% 欢迎奖金", tab: "新会员", period: LONG, apply: true },
  { id: 14, title: "体育 55% 欢迎红利", tab: "运动", period: LONG, apply: true },
  { id: 15, title: "每日老虎机 20% 奖金", tab: "SLOT", period: LONG, apply: true },
  { id: 16, title: "每日真人娱乐 15% 奖金", tab: "现场游戏", period: LONG, apply: true },
  { id: 17, title: "每日体育 15% 奖金", tab: "运动", period: LONG, apply: true },
  { id: 18, title: "VIP 生日礼金高达 MYR13,888", tab: "VIP 福利", period: LONG, apply: false },
  { id: 19, title: "VIP 等级升级礼金高达 MYR13,888", tab: "VIP 福利", period: LONG, apply: false },
  { id: 20, title: "每日行动任务：边玩边赚！", tab: "Daily Mission", period: LONG, apply: false },
  { id: 21, title: "每日存款连击奖励！", tab: "Daily Mission", period: LONG, apply: false },
  { id: 22, title: "百家乐憾负补偿", tab: "现场游戏", period: P, apply: false },
  { id: 23, title: "百家连胜挑战赛", tab: "现场游戏", period: P, apply: false },
  { id: 24, title: "足球赛事连胜奖励", tab: "运动", period: P, apply: false },
  { id: 25, title: "PRAGMATIC SLOT SCATTER POINTS REWARD", tab: "Special Bonus", period: P, apply: false },
];
