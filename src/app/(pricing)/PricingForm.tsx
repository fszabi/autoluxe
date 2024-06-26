import { useForm, ValidationError } from "@formspree/react";
import { Switch } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

interface Props {
  tierName: string;
  pkgName: string;
  pkgPrice: number;
  pkgServices: string[];
}

const PricingForm = ({ tierName, pkgName, pkgPrice, pkgServices }: Props) => {
  const [state, handleSubmit] = useForm("mqkrjkpb");
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const [agreed, setAgreed] = useState(false);
  const [finalPrice, setFinalPrice] = useState(pkgPrice);
  const [extraCharge, setExtraCharge] = useState(false);
  const [isTenPercentChecked, setIsTenPercentChecked] = useState(false);
  const [isTwentyPercentChecked, setIsTwentyPercentChecked] = useState(false);

  const handleTenPercentDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTenPercentChecked(e.target.checked);
    setExtraCharge(!extraCharge);
    if (!extraCharge) {
      setFinalPrice(pkgPrice * 1.1);
    } else {
      setFinalPrice(pkgPrice);
    }
  };

  const handleTwentyPercentDiscount = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsTwentyPercentChecked(e.target.checked);
    setExtraCharge(!extraCharge);
    if (!extraCharge) {
      setFinalPrice(pkgPrice * 1.2);
    } else {
      setFinalPrice(pkgPrice);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!agreed) {
      toast.error("Az adatvédelmi tájékoztatót el kell fogadnia!", {
        id: "no-agreement-pricing",
      });
      e.preventDefault();
      return;
    }
    handleSubmit(e);
  };

  const handleEmailChange = () => {
    if (emailRef.current) {
      const email = emailRef.current.value;
      const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!emailIsValid) {
        emailRef.current.setCustomValidity(
          "Kérjük, adjon meg egy érvényes email címet!"
        );
      } else {
        emailRef.current.setCustomValidity("");
      }
    }
  };

  const handlePhoneChange = () => {
    if (phoneRef.current) {
      const phone = phoneRef.current.value;
      const phoneIsValid = /^[0-9+\- ]*$/.test(phone);

      if (!phoneIsValid) {
        phoneRef.current.setCustomValidity(
          "Kérjük, adjon meg egy érvényes telefonszámot!"
        );
      } else {
        phoneRef.current.setCustomValidity("");
      }
    }
  };

  if (state.succeeded) {
    return (
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Köszönjük bizalmát!
        </h2>
        <p className="text-lg font-medium">
          Hamarosan felvesszük Önnel a kapcsolatot.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <h3 className="text-2xl font-semibold">{tierName}</h3>
      <div className="p-5 sm:p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-5">
        <h4 className="font-semibold max-[360px]:text-xs max-[390px]:text-sm">
          {pkgName}
        </h4>
        <p className="max-[390px]:text-2xl text-3xl sm:text-4xl font-bold">
          {finalPrice.toLocaleString("de-DE")} Ft
        </p>
      </div>
      <form onSubmit={handleFormSubmit} className="space-y-10">
        <input type="hidden" name="tier" value={tierName} />
        <input type="hidden" name="package" value={pkgName} />
        <input type="hidden" name="price" value={finalPrice} />
        <input
          type="hidden"
          name="services"
          value={JSON.stringify(pkgServices)}
        />
        <div className="space-y-6">
          <p>
            7 személyes autóknál 10%, 9 személyes autóknál pedig 20% felárat
            számolunk!
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-center">
              <input
                type="checkbox"
                id="felar-10-szazalek"
                name="felar-10-szazalek"
                onChange={handleTenPercentDiscount}
                disabled={isTwentyPercentChecked}
                className="checkbox bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 [--chkbg:theme(colors.blue.500)] disabled:bg-neutral-300 dark:disabled:bg-neutral-700"
              />
              <label htmlFor="felar-10-szazalek">7 személyes autóm van</label>
            </div>
            <div className="flex gap-3 items-center">
              <input
                type="checkbox"
                id="felar-20-szazalek"
                name="felar-20-szazalek"
                onChange={handleTwentyPercentDiscount}
                disabled={isTenPercentChecked}
                className="checkbox bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 [--chkbg:theme(colors.blue.500)] disabled:bg-neutral-300 dark:disabled:bg-neutral-700"
              />
              <label htmlFor="felar-20-szazalek">9 személyes autóm van</label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6"
            >
              Keresztnév
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm bg-neutral-50 dark:bg-neutral-900 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6"
            >
              Vezetéknév
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm bg-neutral-50 dark:bg-neutral-900 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="flex items-center gap-2 text-sm font-semibold leading-6 sgy"
            >
              Email
              <span className="text-2xl text-blue-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                onChange={handleEmailChange}
                onFocus={handleEmailChange}
                ref={emailRef}
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm bg-neutral-50 dark:bg-neutral-900 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6"
            >
              Telefonszám
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                onChange={handlePhoneChange}
                ref={phoneRef}
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm bg-neutral-50 dark:bg-neutral-900 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6"
            >
              Üzenet
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm bg-neutral-50 dark:bg-neutral-900 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <Switch.Group as="div" className="flex flex-wrap gap-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames({
                  "bg-blue-500": agreed,
                  "bg-neutral-200 dark:bg-neutral-800": !agreed,
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-neutral-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600":
                    true,
                })}
              >
                <span className="sr-only">
                  Adatvédelmi tájékoztató elfogadása
                </span>
                <span
                  aria-hidden="true"
                  className={classNames({
                    "translate-x-3.5": agreed,
                    "translate-x-0": !agreed,
                    "h-4 w-4 transform rounded-full bg-neutral-50 shadow-sm ring-1 ring-neutral-900/5 transition duration-200 ease-in-out":
                      true,
                  })}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-neutral-600 dark:text-neutral-200 cursor-pointer">
              Elfogadom az{" "}
              <span className="font-semibold text-blue-500">
                adatvédelmi&nbsp;tájékoztatót
              </span>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={state.submitting}
            className="block w-full rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-neutral-50 shadow-sm hover:bg-blue-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Küldés
          </button>
        </div>
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
};

export default PricingForm;
