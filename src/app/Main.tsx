import Contact from "./(contact)/Contact";
import Features from "./(features)/Features";
import Hero from "./(hero)/Hero";
import Pricing from "./(pricing)/Pricing";
import CustomPricing from "./custom_pricing/CustomPricing";

const Main = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Pricing />
      <CustomPricing />
      <Contact />
    </main>
  );
};

export default Main;
