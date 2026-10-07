export interface VipLevel {
  name: string;
  turnoverReq: number;
  depositReq: number;
  dailyWithdrawLimit: number;
  cashbackRate: number; // %
  rebateSlot: number;
  rebateLive: number;
  rebateSport: number;
  rebateEsport: number;
  rebateFishing: number;
  rebateArcade: number;
  rebatePoker: number;
  rebatePlinko: number;
  rebateCockfight: number;
}

export const VIP_LEVELS: VipLevel[] = [
  { name:"PREMIUM",  turnoverReq:3_000_000,    depositReq:500,       dailyWithdrawLimit:100000, cashbackRate:0,    rebateSlot:0.35, rebateLive:0.15, rebateSport:0.15, rebateEsport:0.15, rebateFishing:0.35, rebateArcade:0.35, rebatePoker:0.15, rebatePlinko:0.15, rebateCockfight:0.15 },
  { name:"PRESTIGE", turnoverReq:12_000_000,   depositReq:2000,      dailyWithdrawLimit:200000, cashbackRate:0.5,  rebateSlot:0.40, rebateLive:0.20, rebateSport:0.20, rebateEsport:0.20, rebateFishing:0.40, rebateArcade:0.40, rebatePoker:0.20, rebatePlinko:0.20, rebateCockfight:0.20 },
  { name:"ELITE",    turnoverReq:50_000_000,   depositReq:10000,     dailyWithdrawLimit:300000, cashbackRate:1.0,  rebateSlot:0.45, rebateLive:0.25, rebateSport:0.25, rebateEsport:0.25, rebateFishing:0.45, rebateArcade:0.45, rebatePoker:0.25, rebatePlinko:0.25, rebateCockfight:0.25 },
  { name:"ROYAL",    turnoverReq:100_000_000,  depositReq:30000,     dailyWithdrawLimit:500000, cashbackRate:1.5,  rebateSlot:0.50, rebateLive:0.30, rebateSport:0.30, rebateEsport:0.35, rebateFishing:0.50, rebateArcade:0.50, rebatePoker:0.30, rebatePlinko:0.30, rebateCockfight:0.30 },
  { name:"PLATINUM", turnoverReq:1_000_000_000,depositReq:100000,    dailyWithdrawLimit:1000000,cashbackRate:2.0,  rebateSlot:0.65, rebateLive:0.45, rebateSport:0.45, rebateEsport:0.45, rebateFishing:0.65, rebateArcade:0.65, rebatePoker:0.45, rebatePlinko:0.45, rebateCockfight:0.45 },
  { name:"DIAMOND",  turnoverReq:3_000_000_000,depositReq:300000,    dailyWithdrawLimit:2000000,cashbackRate:2.5,  rebateSlot:0.70, rebateLive:0.50, rebateSport:0.50, rebateEsport:0.50, rebateFishing:0.70, rebateArcade:0.70, rebatePoker:0.50, rebatePlinko:0.50, rebateCockfight:0.50 },
  { name:"SOVEREIGN",turnoverReq:15_000_000_000,depositReq:3000000,  dailyWithdrawLimit:5000000,cashbackRate:3.0,  rebateSlot:0.75, rebateLive:0.55, rebateSport:0.55, rebateEsport:0.50, rebateFishing:0.75, rebateArcade:0.70, rebatePoker:0.50, rebatePlinko:0.55, rebateCockfight:0.55 },
  { name:"IMPERIAL", turnoverReq:30_000_000_000,depositReq:3000000,  dailyWithdrawLimit:8000000,cashbackRate:3.5,  rebateSlot:0.80, rebateLive:0.60, rebateSport:0.60, rebateEsport:0.60, rebateFishing:0.80, rebateArcade:0.80, rebatePoker:0.60, rebatePlinko:0.60, rebateCockfight:0.60 },
  { name:"SUPREME",  turnoverReq:100_000_000_000,depositReq:10000000,dailyWithdrawLimit:10000000,cashbackRate:4.0, rebateSlot:1.10, rebateLive:0.65, rebateSport:0.65, rebateEsport:0.65, rebateFishing:1.10, rebateArcade:1.10, rebatePoker:0.65, rebatePlinko:0.65, rebateCockfight:0.65 },
  { name:"MAJESTIC", turnoverReq:999_999_999_999,depositReq:99999999,dailyWithdrawLimit:20000000,cashbackRate:5.0, rebateSlot:1.20, rebateLive:0.70, rebateSport:0.70, rebateEsport:0.70, rebateFishing:1.20, rebateArcade:1.20, rebatePoker:0.70, rebatePlinko:1.20, rebateCockfight:0.60 },
];
