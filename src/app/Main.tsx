import Contact from "./(contact)/Contact";
import CustomPricing from "./(custom_pricing)/CustomPricing";
import Features from "./(features)/Features";
import Hero from "./(hero)/Hero";
import Pricing from "./(pricing)/Pricing";
import References from "./(references)/References";
import Toast from "./Toast";

const Main = () => {
  return (
    <main>
      <Toast />
      <Hero />
      <Features />
      <References />
      <Pricing />
      <CustomPricing />
      <Contact />
    </main>
  );
};

export default Main;
