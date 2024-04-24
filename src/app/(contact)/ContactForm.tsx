import SwitchComponent from "../components/SwitchComponent";

const ContactForm = () => {
  return (
    <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
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
            className="block text-sm font-semibold leading-6"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm bg-neutral-50 dark:bg-neutral-900 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
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
        </div>
        <SwitchComponent />
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-neutral-50 shadow-sm hover:bg-blue-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Küldés
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
