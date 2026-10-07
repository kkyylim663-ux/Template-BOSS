import MarqueeBanner from "@/components/home/MarqueeBanner";
import SocialBar from "@/components/home/SocialBar";
import HomeBanner from "@/components/home/HomeBanner";
import QuickAccessCards from "@/components/home/QuickAccessCards";
import CategorySlider from "@/components/home/CategorySlider";
import HotEventsSection from "@/components/home/HotEventsSection";
import UpcomingMatches from "@/components/home/UpcomingMatches";
import ProviderSections from "@/components/home/ProviderSections";
import JackpotBanner from "@/components/home/JackpotBanner";
import BrandVideo from "@/components/home/BrandVideo";
import RankingBoard from "@/components/home/RankingBoard";
import UserReviews from "@/components/home/UserReviews";

export default function HomePage() {
  return (
    <>
      <MarqueeBanner />
      <SocialBar />
      <HomeBanner />
      <QuickAccessCards />
      <CategorySlider />
      <HotEventsSection />
      <UpcomingMatches />
      <ProviderSections />
      <JackpotBanner />
      <BrandVideo />
      <RankingBoard />
      <UserReviews />
    </>
  );
}
