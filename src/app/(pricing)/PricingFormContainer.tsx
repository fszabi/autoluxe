import { CheckIcon } from "@heroicons/react/20/solid";
import PricingForm from "./PricingForm";

interface Props {
  tierName: string;
  pkg: string;
  price: number;
  services: string[];
}

const PricingFormContainer = ({ tierName, pkg, price, services }: Props) => {
  console.log(pkg);

  return (
    <div className="space-y-10">
      <h3 className="text-2xl font-semibold">{tierName}</h3>

      <div className="p-5 sm:p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-5">
        <h4 className="font-semibold max-[350px]:text-sm">{pkg}</h4>
        <p className="max-[350px]:text-2xl text-3xl sm:text-4xl font-bold">
          {price.toLocaleString("de-DE")} Ft
        </p>
      </div>
      <PricingForm price={price} services={services} />
    </div>
  );
};

export default PricingFormContainer;
