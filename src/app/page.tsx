import {
  BestSellers,
  CategoryRow,
  FeaturedProducts,
  HomeHero,
  PurposeStrip,
  StoryBanner,
  Testimonials,
  TrustBar,
} from "@/components/home-sections";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CategoryRow />
      <BestSellers />
      <TrustBar />
      <FeaturedProducts />
      <StoryBanner />
      <Testimonials />
      <PurposeStrip />
    </>
  );
}
