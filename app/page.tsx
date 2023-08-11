import CallToAction from "./components/CallToAction/CallToAction";
import CategoryGrid from "./components/Catergory/CategoryGrid";
import Hero from "./components/Hero/Hero";
import Promotions from "./components/Promotions/Promotions";

export default function Home() {
  return (
    <main>
      <Hero />
      <CallToAction />
      <CategoryGrid/>
      <Promotions/>
    </main>
  )
}
