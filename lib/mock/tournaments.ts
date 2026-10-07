export interface Tournament {
  id: number;
  title: string;
  provider: string;
  status: "active" | "upcoming";
}

export const TOURNAMENTS: Tournament[] = [
  { id:1, title:"PT – Gold Chip Challenge",                      provider:"Playtech",    status:"active" },
  { id:2, title:"PP – Gates of Olympus 2500 Daily Tournaments",  provider:"Pragmatic Play", status:"active" },
  { id:3, title:"Vplus – Scatter & Multiplier Event",            provider:"Vplus",       status:"active" },
  { id:4, title:"Spadegaming – Fishing Frenzy",                  provider:"Spadegaming", status:"active" },
  { id:5, title:"Spadegaming – Play & Win",                      provider:"Spadegaming", status:"active" },
  { id:6, title:"Fastspin – Dragon Awakens: Frostfire Clash",    provider:"Fastspin",    status:"active" },
  { id:7, title:"Playtech – Gold Chip",                          provider:"Playtech",    status:"active" },
  { id:8, title:"Spadegaming – Play And Win",                    provider:"Spadegaming", status:"upcoming" },
];
