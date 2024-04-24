import { CheckIcon } from "@heroicons/react/20/solid";
import CustomForm from "./CustomForm";

interface Props {
  price: number;
  services: string[];
}

const CustomFormContainer = ({ price, services }: Props) => {
  return (
    <div className="space-y-10">
      <div className="p-5 sm:p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-5">
        <h4 className="font-semibold max-[350px]:text-sm">
          Személyreszabott csomag
        </h4>
        <p className="max-[350px]:text-2xl text-3xl sm:text-4xl font-bold">
          {price.toLocaleString("de-DE")} Ft
        </p>
      </div>
      <CustomForm price={price} services={services} />
    </div>
  );
};

export default CustomFormContainer;
