import CallToAction from "./components/CallToAction/CallToAction";
import CategoryGrid from "./components/Catergory/CategoryGrid";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <CallToAction />
      <CategoryGrid/>
    </main>
  )
}
