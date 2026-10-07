export interface Mission {
  id: string;
  group: string;
  label: string;
  reward: number;
  unit: string;
  current: number;
  target: number;
}

export const MISSIONS: Mission[] = [
  // 每日存款次数
  { id:"d1",group:"每日存款次数",label:"每日存款：1次",reward:1,unit:"Point",current:0,target:1 },
  { id:"d2",group:"每日存款次数",label:"每日存款：3次",reward:2,unit:"Point",current:0,target:3 },
  { id:"d3",group:"每日存款次数",label:"每日存款：5次",reward:3,unit:"Point",current:0,target:5 },
  { id:"d4",group:"每日存款次数",label:"每日充值次数 10x",reward:10,unit:"Point",current:0,target:10 },
  // 每日有效投注 - 老虎机
  { id:"db1",group:"每日有效投注",label:'"老虎机·3D·捕鱼" T1 每日有效投注',reward:5,unit:"Point",current:0,target:1000 },
  { id:"db2",group:"每日有效投注",label:'"老虎机·3D·捕鱼" T2 每日有效投注',reward:10,unit:"Point",current:0,target:5000 },
  { id:"db3",group:"每日有效投注",label:'"老虎机·3D·捕鱼" T3 每日有效投注',reward:15,unit:"Point",current:0,target:10000 },
  { id:"db4",group:"每日有效投注",label:'"真人娱乐" T1 每日有效投注',reward:5,unit:"Point",current:0,target:1000 },
  { id:"db5",group:"每日有效投注",label:'"真人娱乐" T2 每日有效投注',reward:10,unit:"Point",current:0,target:5000 },
  { id:"db6",group:"每日有效投注",label:'"真人娱乐" T3 每日有效投注',reward:15,unit:"Point",current:0,target:10000 },
  { id:"db7",group:"每日有效投注",label:'"体育游戏" T1 每日有效投注',reward:5,unit:"Point",current:0,target:1000 },
  { id:"db8",group:"每日有效投注",label:'"体育游戏" T2 每日有效投注',reward:10,unit:"Point",current:0,target:5000 },
  { id:"db9",group:"每日有效投注",label:'"体育游戏" T3 每日有效投注',reward:15,unit:"Point",current:0,target:10000 },
  // 每周
  { id:"w1",group:"每週存款次數",label:"每周存款笔数 7x",reward:2.55,unit:"Point",current:0,target:7 },
  { id:"w2",group:"每週存款次數",label:"每週存款次數 15x",reward:5.55,unit:"Point",current:0,target:15 },
  { id:"w3",group:"每週存款金額",label:"每周存款金额 RM 3,000",reward:5.55,unit:"Point",current:0,target:3000 },
  { id:"w4",group:"每週存款金額",label:"每周存款数额 RM 10,000",reward:10,unit:"Point",current:0,target:10000 },
  { id:"w5",group:"每週有效投注",label:"每周有效投注 RM 15,000",reward:5.55,unit:"Point",current:0,target:15000 },
  { id:"w6",group:"每週有效投注",label:"每周有效投注额 30,000 马币",reward:15.5,unit:"Point",current:0,target:30000 },
  // 每月
  { id:"m1",group:"每月存款次數",label:"每月存款次数 30 次",reward:5.55,unit:"Point",current:0,target:30 },
  { id:"m2",group:"每月有效投注",label:"每月有效投注额 30 万",reward:9.99,unit:"Point",current:0,target:300000 },
];
