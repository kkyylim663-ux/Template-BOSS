import {
  Home, Tag, Crown, Gift, Target, Trophy, Users,
  Gamepad2, Tv2, Bike, Zap, Fish, Ticket, Flame,
  Joystick, ClubIcon, Circle, Feather, CircleDot, Star,
  Info, HelpCircle, FileText, Phone,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: "NEW" | "HOT";
  requireAuth?: boolean;
}

export interface NavGroup {
  label?: string;
  items: NavItem[];
}

export const sidebarGroups: NavGroup[] = [
  {
    items: [
      { label: "首页",     href: "/zh-my",                  icon: Home },
      { label: "促销",     href: "/zh-my/promotion",         icon: Tag },
      { label: "VIP",      href: "/zh-my/vip",               icon: Crown,   requireAuth: true },
      { label: "奖励",     href: "/zh-my/reward",            icon: Gift,    requireAuth: true },
      { label: "任务",     href: "/zh-my/mission",           icon: Target,  requireAuth: true },
      { label: "比赛",     href: "/zh-my/tournament",        icon: Trophy },
      { label: "推荐",     href: "/zh-my/account/referral",  icon: Users,   requireAuth: true },
    ],
  },
  {
    items: [
      { label: "老虎机",   href: "/zh-my/slot",              icon: Gamepad2 },
      { label: "真人娱乐场", href: "/zh-my/livecsn",         icon: Tv2 },
      { label: "体育",     href: "/zh-my/sport",             icon: Bike },
      { label: "电子竞技", href: "/zh-my/esport",            icon: Zap },
      { label: "捕鱼",     href: "/zh-my/fishing",           icon: Fish },
      { label: "彩票",     href: "/zh-my/lottery",           icon: Ticket,  badge: "NEW" },
      { label: "快速游戏", href: "/zh-my/crash",             icon: Flame },
      { label: "电子游戏", href: "/zh-my/arcade",            icon: Joystick },
      { label: "扑克",     href: "/zh-my/poker",             icon: ClubIcon },
      { label: "弹珠",     href: "/zh-my/plinko",            icon: Circle },
      { label: "斗鸡",     href: "/zh-my/cockfighting",      icon: Feather },
      { label: "赛马",     href: "/zh-my/hracing",           icon: CircleDot },
      { label: "热门活动", href: "/zh-my/event",             icon: Star },
    ],
  },
  {
    items: [
      { label: "关于我们", href: "/zh-my/about-us",          icon: Info },
      { label: "常见问题", href: "/zh-my/faq",               icon: HelpCircle },
      { label: "条款与细则", href: "/zh-my/tnc",             icon: FileText },
      { label: "联系我们", href: "/zh-my/contact-us",        icon: Phone },
    ],
  },
];

export const mobileNavItems: NavItem[] = [
  { label: "主页",     href: "/zh-my",                 icon: Home },
  { label: "存款",     href: "/zh-my/account/deposit", icon: Gift,  requireAuth: true },
  { label: "账户",     href: "/zh-my/account/profile", icon: Users, requireAuth: true },
  { label: "促销",     href: "/zh-my/promotion",        icon: Tag },
  { label: "客服",     href: "#livechat",               icon: Phone },
];
