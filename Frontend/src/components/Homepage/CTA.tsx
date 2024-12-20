const CTA = () => {
  return (
    <div className="bg-indigo-600">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <br />
            Track your favorite stocks with ease
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
            Sign up now to start monitoring your investments and make informed
            decisions
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/register"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Sign up for free
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more
              <span aria-hidden="true">â</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
