export const RUNNING_TEXT =
  "Test123 —— 简单、快捷、稳定，享受属于您的精彩娱乐时光。Test123 官方网站致力于为用户打造便捷、稳定、流畅的在线娱乐体验。平台提供便捷的账户服务与多元化娱乐内容，让用户能够轻松进入专属娱乐空间，享受更加顺畅的操作体验。";

export const BANNERS = [
  { title: "DAILY TURNOVER REBATE NOW LIVE", href: "/zh-my/promotion" },
  { title: "USDT DEPOSITS NOW LIVE", href: "/zh-my/account/deposit" },
  { title: "REFERRAL BONUS 88 MYR", href: "/zh-my/account/referral" },
  { title: "WELCOME BONUS 300%", href: "/zh-my/promotion" },
  { title: "VIP WEEKLY ANGPAU", href: "/zh-my/vip" },
  { title: "REWARD MALL", href: "/zh-my/reward" },
  { title: "DAILY MISSION", href: "/zh-my/mission" },
  { title: "JOIN OUR TELEGRAM", href: "#" },
];

export const HOT_EVENT_PROVIDERS = [
  "Besoft", "Bcongo", "Creative Gaming", "Crowd Play", "Evoplay", "King Midas", "Yellow Bat", "Vplus", "Spadegaming", "Fastspin",
];

export const MATCHES = [
  { league: "UEFA CONFERENCE LEAGUE", home: "CS Universitatea Craiova", away: "Getafe CF", ha: "68275.png", hb: "2054.png", date: "16 OCT 2026 (FRI)", time: "12:45 AM (GMT +08)", h: "-0.98", a: "0.80" },
  { league: "UEFA CONFERENCE LEAGUE", home: "CSKA Sofia (N)", away: "AS Monaco", ha: "5768.png", hb: "2208.png", date: "16 OCT 2026 (FRI)", time: "12:45 AM (GMT +08)", h: "0.91", a: "0.91" },
  { league: "UEFA CONFERENCE LEAGUE", home: "Egnatia Rrogozhine (N)", away: "Midtjylland", ha: "279743.png", hb: "4310.png", date: "16 OCT 2026 (FRI)", time: "12:45 AM (GMT +08)", h: "0.97", a: "0.85" },
  { league: "UEFA CONFERENCE LEAGUE", home: "Hajduk Split", away: "Ajax", ha: "7669.png", hb: "2840.png", date: "16 OCT 2026 (FRI)", time: "12:45 AM (GMT +08)", h: "0.87", a: "0.95" },
  { league: "UEFA CONFERENCE LEAGUE", home: "KAA Gent", away: "AGF Aarhus", ha: "3936.png", hb: "2523.png", date: "16 OCT 2026 (FRI)", time: "12:45 AM (GMT +08)", h: "0.80", a: "-0.98" },
  { league: "UEFA CONFERENCE LEAGUE", home: "KuPS (N)", away: "Trabzonspor", ha: "3962.png", hb: "4028.png", date: "16 OCT 2026 (FRI)", time: "12:45 AM (GMT +08)", h: "0.91", a: "0.91" },
  { league: "UEFA CONFERENCE LEAGUE", home: "Lugano", away: "Crvena Zvezda", ha: "4726.png", hb: "87968.png", date: "16 OCT 2026 (FRI)", time: "12:45 AM (GMT +08)", h: "0.92", a: "0.90" },
  { league: "UEFA CONFERENCE LEAGUE", home: "Mjallby (N)", away: "Inter Club D Escaldes", ha: "4739.png", hb: "23220.png", date: "16 OCT 2026 (FRI)", time: "12:45 AM (GMT +08)", h: "0.80", a: "-0.98" },
];

export const PROVIDER_SECTIONS = [
  { title: "老虎机", href: "/zh-my/slot", providers: ["Pragmatic Play", "Pocket Games Soft", "Vplus", "JILI", "Fastspin", "Nextspin", "Spadegaming", "Relax Gaming", "Besoft", "Microgaming"] },
  { title: "真人娱乐场", href: "/zh-my/livecsn", providers: ["Evolution Gaming", "AE Sexy", "SA Gaming", "WM Casino", "Playtech Live", "Imagine Live", "ION Casino"] },
  { title: "体育", href: "/zh-my/sport", providers: ["M9Bet", "CMD368", "WBet", "SBO Sport"] },
  { title: "捕鱼", href: "/zh-my/fishing", providers: ["YB Fishing", "Spadegaming Fishing", "Vplus Fishing", "JILI Fishing", "KY Fishing", "RSG Fishing", "FC Fishing"] },
  { title: "彩票", href: "/zh-my/lottery", providers: ["HW95 Lottery", "TC Lottery", "Habanero Lottery"] },
  { title: "快速游戏", href: "/zh-my/crash", providers: ["Funky Fast", "JILI Fast", "King Midas Fast", "Joker Fast", "PP Fast"] },
  { title: "电子游戏", href: "/zh-my/arcade", providers: ["King Midas 3D", "JILI 3D", "Spribe", "Funky 3D", "Joker 3D", "PP 3D", "365 3D"] },
  { title: "扑克", href: "/zh-my/poker", providers: ["KY Poker", "MegaWin Poker", "JILI Poker", "JILI Poker H", "V8 Poker"] },
  { title: "弹珠", href: "/zh-my/plinko", providers: ["JILI Plinko", "Funky Plinko", "Spribe Plinko", "King Midas Plinko", "Joker Plinko"] },
];

/** cover artwork index (public/games/home/<n>.webp), by section href and card position; locally sourced, git-ignored */
export const HOME_ART: Record<string, number[]> = {
  "/zh-my/slot": [10, 11, 12, 13, 14],
  "/zh-my/livecsn": [15, 16, 17, 18, 19],
  "/zh-my/sport": [20, 21, 22, 23],
  "/zh-my/fishing": [24, 25, 26, 27, 28],
  "/zh-my/lottery": [29],
  "/zh-my/crash": [30, 31, 32, 33, 34],
  "/zh-my/arcade": [35, 36, 37, 38, 39],
  "/zh-my/poker": [40, 41, 42, 43, 44],
  "/zh-my/plinko": [45, 46, 47, 48],
};
export const HOT_ART = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const RANKING = [
  { game: "Thunderkick", player: "+60******551", mul: "35x", bet: "11.00", pay: "385.00" },
  { game: "5G Gaming", player: "+60******588", mul: "30x", bet: "41.00", pay: "1,230.00" },
  { game: "MegaH5 1:100", player: "+60******472", mul: "45x", bet: "12.00", pay: "540.00" },
  { game: "Belatra", player: "+60******654", mul: "35x", bet: "24.00", pay: "840.00" },
  { game: "Pussy888", player: "+60******063", mul: "50x", bet: "24.00", pay: "1,200.00" },
  { game: "Playtech", player: "+60******321", mul: "40x", bet: "46.00", pay: "1,840.00" },
  { game: "PlayStar", player: "+60******742", mul: "40x", bet: "26.00", pay: "1,040.00" },
  { game: "Imagine Live", player: "+60******189", mul: "50x", bet: "46.00", pay: "2,300.00" },
  { game: "888King", player: "+60******207", mul: "40x", bet: "48.00", pay: "1,920.00" },
  { game: "Evo 888", player: "+60******611", mul: "60x", bet: "25.00", pay: "1,500.00" },
  { game: "JILI", player: "+60******930", mul: "30x", bet: "20.00", pay: "600.00" },
];

export const REVIEWS = [
  { name: "Mintari", text: "服务出色，界面友好易用！" },
  { name: "Ipan188", text: "我喜欢丰富多样的游戏选择。" },
  { name: "Tego", text: "支付速度快，客服支持非常优秀。" },
  { name: "Jun84", text: "到目前为止都很顺畅，没有任何问题。" },
  { name: "Melvin25", text: "第一次在这里玩，整体感觉相当不错。" },
  { name: "Nicholas", text: "提款比我预期的还要快。" },
];
