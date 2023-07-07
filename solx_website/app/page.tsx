import {
  DiscountBanner,
  GridList,
  Hero,
  PurchaseOverview,
  PutOnMarket,
  RegisterGrid,
} from "@components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <RegisterGrid />
      <GridList />
      <DiscountBanner />
      <PurchaseOverview />
      {/* <PutOnMarket /> */}
      
    </main>
  );
}
