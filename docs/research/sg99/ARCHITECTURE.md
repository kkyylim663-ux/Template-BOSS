# BO55 (sg99) 外层架构 — 来源 https://ez99sgd-uat.vercel.app/en-sg

技术栈: Next.js (pages router) + Mantine UI, 字体 PingFang (Regular/Medium/SemiBold/Bold woff2, 路径 /templates/fonts/PingFang/), 深色主题, 主语言 en-sg。
证据: home.json, pages.json, home-requests.txt, shots/*.png

## 布局骨架 (所有页面共用)
- Header: Logo | Login | Sign Up | 语言/国旗下拉
- 左侧栏 3 组: 主导航(Home/Promotion/VIP/Reward/Mission/Tournament/Referral) · 游戏(Slot/Live Casino/Fishing/Sport/Poker/Arcade/Fast Game/Plinko/Cockfight/Hot Events) · 信息(About Us/FAQ/Terms and Conditions)
- 中间主内容 (约 1120px 宽)
- 右侧栏: 实时 DEPOSIT / WITHDRAW 滚动列表 (LIVE 徽章, 假数据滚动)
- 右下角: 悬浮红包/宝箱 (可关闭 ×)
- 页脚: Certification / Security / Responsible Gambling / Follow Us / Payment Method / Game Provider 图标条 / Copyright
- 手机端 (390px): 单列, 首页高 4052px

## 首页区块 (从上到下)
1. 公告跑马灯 → 2. 5 个社交按钮 (Facebook/Instagram/TikTok/Whatsapp/Telegram) → 3. 轮播 Banner (9 张, 链接去 promotion?pid=… / referral / deposit / reward / Telegram) → 4. 4 张入口卡 (Referral/Reward Mall/Mission/Promotion) → 5. 游戏分类横滑条 → 6. Hot Events 横滑 (+See All → /event) → 7. Hot Games 横滑 → 8. 各分类供应商列表 → 9. SEO 长文 (H1 + 7 个 H2 + 7 条 FAQ, "Show more")
- 进站弹窗: "HOW TO ENJOY" 5 步图 (Mantine Modal, 挡住点击, Esc 可关)

## 页面清单
### A. 公开页面 (19 个, 全部 200)
| 路由 | 说明 |
|---|---|
| /en-sg | 首页 |
| /promotion (?pid=2/12/55…) | 优惠, 长页 14266px, 带 SEO 文字 |
| /vip | VIP 等级 |
| /reward | Reward Mall, 8906px |
| /tournament | 页面几乎为空 (1167px) — 待登录后看 |
| /slot | 63 个供应商 |
| /livecsn | 15 个供应商 |
| /fishing | 11 |
| /sport | 4 |
| /poker | 3 |
| /arcade | 7 |
| /crash (Fast Game) | 5, 内容空壳 |
| /plinko | 4 |
| /cockfighting | SV388, 无 provider 列表 |
| /event (Hot Events) | 内容空壳 |
| /about-us /faq /tnc /contact-us | 静态内容页 |

### B. 登录后才能进 (未登录 → 重定向到 `/` + 弹出登录窗)
- /mission, /account/referral, /account/deposit (其余 /account/* 待登录探索)
- /referral 存在但内容很短 (1749px), 待确认

### C. 同页状态 (query, 非独立页面)
- ?provider=xxx: 共 **112** 个 (slot 63, livecsn 15, fishing 11, arcade 7, crash 5, sport 4, plinko 4, poker 3) — 同一页面按供应商筛选游戏

### D. 弹窗 (无独立 URL)
- Login: 用户名, 密码, Remember Me, Forgot Password, 右侧 "Welcome to BO55" 说明
- Register: 用户名, 手机, OTP(Request OTP), 密码, 邮箱, 姓名(与银行户名一致), 推荐码(可选), Submit; 文案 "Up To 299% Welcome Bonus"
- 进站 HOW TO ENJOY 弹窗

## 跳转点统计 (首页)
- `<a href>` 共 181 个, 去重 160 个; 按钮 71 个
- 站内页面链接 19 个 + provider 筛选 112 个
- 外链: Facebook, Instagram, TikTok, WhatsApp×2, Telegram×3 (官方群/VIP/社区)
- 指向另一域名 bo55sg.com / bo55sg.vip (promotion?pid=2/12/55, reward, mission, account/referral, account/deposit, 以及 SEO 文字里的各分类) — 克隆时需改写为本地路由
- 需登录才有效的入口: Mission, Referral, Deposit, 轮播里的 referral/deposit

## 未解决 / 待你登录后探索
- 登录后的头部 (余额、头像、Deposit/Withdraw 入口) 与 /account/* 全部子页
- /tournament, /event, /crash 为何空白 (可能数据接口需登录或 UAT 无数据)
- 语言切换下拉的选项 (自动点击没点中)
- 游戏卡点击后的启动流程 (需登录)
