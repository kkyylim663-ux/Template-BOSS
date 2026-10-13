import fs from "node:fs";
import path from "node:path";
import CategorySlider from "./CategorySlider";
import { sidebarGroups } from "@/lib/nav";

export default function Categories() {
  const art = sidebarGroups[1].items.map((_, i) =>
    fs.existsSync(path.join(process.cwd(), "public", "icons", `cat-${i + 1}.png`)),
  );
  return <CategorySlider art={art} />;
}
