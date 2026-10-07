# BO55 登录后深入报告 — https://www.bo55ms.com/zh-my (马来西亚站, 与 sg 站同一套模板)

方法: 内置浏览器, 你本人登录后, 我只读取页面 + 点导航; 未点充值/提款/兑换/提交类按钮。账户余额 MYR 0.00, 大多页面为空态。
注意: 路由模式 `/{语言}-{国家}/…`, 这里是 zh-my。Singapore 站是 en-sg / zh-sg。

## 1. 登录后 Header (桌面)
Logo(→首页) · 刷新余额按钮 · 余额胶囊 MYR 0.00(点开下拉: 我的促销 / 提款 / 历史记录) · Deposit 金色按钮(→/account/deposit) · 消息图标(→/account/message, 有红点) · 任务图标(→/mission) · 头像(含用户名) · 登出按钮 · 国家/语言下拉(Malaysia: English/中文/Malay; Singapore: English/中文)
- 余额下拉: 我的促销 → /account/mypromo; 提款 → /account/withdraw; 历史记录 → /account/history
- 头像点击 → 个人资料 (/account/profile, 推断; 待确认)

## 2. Sidebar (左, 共 26 个链接, 已逐个核对)
分组 1 主导航 (7): 首页 `/` · 促销 `/promotion` · VIP `/vip` · 奖励 `/reward` · 任务 `/mission` · 比赛 `/tournament` · 推荐 `/account/referral`
分组 2 游戏 (13, 比 SG 站多 3 项: 电子竞技/彩票/赛马): 老虎机 `/slot` · 真人娱乐场 `/livecsn` · 体育 `/sport` · **电子竞技 `/esport`** · 捕鱼 `/fishing` · **彩票 `/lottery`** · 快速游戏 `/crash` · 电子游戏 `/arcade` · 扑克 `/poker` · 弹珠 `/plinko` · 斗鸡 `/cockfighting` · **赛马 `/hracing`** · 热门活动 `/event`
分组 3 信息 (4): 关于我们 `/about-us` · 常见问题 `/faq` · 条款与细则 `/tnc` · 联系我们 `/contact-us`
- 注意: SG 站没有 Mission/Referral 之外的 account 入口; MY 站 sidebar 多 esport/lottery/hracing/contact-us。
- 手机端: sidebar 收起, 底部 5 格导航 (主页/存款/账户/促销/在线客服) + 右下悬浮聊天按钮(带红点)

## 3. 登录后页面清单 (/account/*, 全部 200)
| 路由 | 内容 | 关键控件 |
|---|---|---|
| /account/deposit | 主钱包余额 + 流水; 存款方式 6 个标签: Quick Pay / Bank Transfer / eWallet / eWallet Online / Crypto / Phone Credit; 渠道列表(FPay 30~5000, Luxepay 30~30000, Smartpay 30~5000, Onepay 30~30000); 重要提示 5 条 | 标签切换, 渠道卡选择 → 后续金额表单(未提交) |
| /account/withdraw | 主钱包 + 流水; 提款方式: Bank Account / Ewallet / Crypto Address; "+添加新账户"; 金额输入(最低 50/最高 30000); 重要须知 6 条 | 提交 |
| /account/bank | 3 个单选标签 Bank Account/Ewallet/Crypto Address; 空态"尚未添加…"; 按钮"添加…" | 添加银行 |
| /account/profile | 只读资料: 邮箱, 全名(与银行一致), 联系电话, 出生日期, 用户名; 提示"联系客服更新" | — |
| /account/changepassword | 当前密码 / 新密码(≥6 位, 含数字, 含小写) / 重复新密码 | 提交 |
| /account/kyc | 上传身份证正面/反面 (2 个文件输入) + 提交 | 文件上传 |
| /account/message | 消息列表, 空态"暂无消息" | — |
| /account/history | 标签: 投注/提款/存款/优惠/兑换/回扣/任务/返现/Minigame; 日期范围 + 快捷(今天/昨天/7/14/30 天) + 提交; 空态"未找到记录" | 日期选择 |
| /account/mypromo | 主钱包 + 促销钱包; "选择您的促销"下拉 + 金额 + 提交(转入促销钱包); "您的活跃促销"列表 | 提交 |
| /account/referral | 3 个标签: 推荐好友 / 我的奖励 / 条款与细则; 总奖金统计; 邀请/成就/投注三类奖励; 排行榜(含"领取奖励"); 推荐链接+复制+社交分享; "3 步赚取"说明 | 复制网址, 领取 |
| /account/transfer | 200 但内容为空 (疑似废弃/占位) | — |

## 4. 登录后新增/变化的非账户页面
- /mission: 积分奖励 0.00 · 已完成任务 · 免费积分 · "领取所有积分"; 任务分组: 每日存款次数(1/3/5/10 次→1/2/3/10 积分), 每日有效投注 老虎机·3D·捕鱼 / 真人 / 体育 各 T1~T3(1000/5000/10000 → 5/10/15 积分), 每周存款笔数(7/15), 每周存款金额(3000/10000), 每周有效投注(15000/30000), 每月存款次数 30, 每月有效投注 30 万; 每项有进度%、"(0/N)"、兑换按钮
- /vip: 10 个等级 PREMIUM→MAJESTIC(流水/存款要求逐级: 3000/500 … 999999999/99999999); 当前等级卡; 福利(每日提款限额 100000, 流水返水积分 0.2%); 表格: 各游戏类别返水率(老虎机 0.35%→1.2% 等, 彩票/赛马/热门活动 0%); 升级奖金/返现/生日礼物/终身 VIP
- /reward (Reward Mall): "我的积分 0.00", 赚取积分, 搜索, 兑换商品网格(包/手表/手机/电视/MacBook…, 255~11,755 积分, 每项"兑换"按钮)
- /tournament: 8 个赛事卡(PT Gold Chip Challenge, PP Gates of Olympus 2500, Vplus, Spadegaming×3, Fastspin, Playtech), 每张有"申请"+"详情" — 登录后才有内容(SG 未登录时为空)
- /event (热门活动): 10 张"活动"卡
- /esport, /hracing: 只有标题, 空壳; /lottery: 标题 + "NEW" 徽章, 空壳
- /blog: 全部标签 + "暂无记录"; /affiliate: 独立代理招募落地页(自带 登录/注册, 高额被动收入, 客户推荐, 产品, FAQ), 不是会员页
- 游戏页 (/slot 等): 点供应商 → 同页 `?provider=xxx` 显示该供应商游戏网格(PG: 48 张图), 无弹窗; 本次未启动具体游戏
- 弹窗: 首页进站大弹窗 "EC99 × BO55 正式合并"(公告)

## 5. 右栏/页脚/全局
- 右栏 Deposit/Withdraw LIVE 双列表: 无限滚动的伪实时数据(+60******nnn MYR 金额), 登录前后一致
- 页脚: 认证 · 安全 · 负责任博彩 · 关注我们 · 支付方式 · 游戏供应商 · 版权 @2026
- 余额条 "流水: x / y" 出现在存款/提款/促销钱包页

## 6. 对克隆的影响
1. 路由要做成 `[lang]/…` (zh-my, en-my, ms-my, en-sg, zh-sg)。
2. 需要登录态: 假登录 (mock auth) + 受保护路由, 未登录跳 `/` 并弹登录窗。
3. 必做页面: 公开 19 + 登录后 11 (/account/{deposit,withdraw,bank,profile,changepassword,kyc,message,history,mypromo,referral} + /mission) + MY 额外 3 空壳。
4. 后端接口未抓取 (只看了前端): 登录、余额、存款渠道、历史、任务、VIP、奖励商城、推荐都需要 mock 数据。
5. 未验证: 实际存款/提款提交流程, 游戏启动, 日期筛选结果, 推荐"领取奖励"。这些会动钱或账户状态, 需你确认再碰。

## 7. 待你决定
- 是否要我抓网络请求 (接口路径与 JSON 结构) 来做 mock 数据?
- 先克隆 SG(en-sg) 还是 MY(zh-my) 版?
