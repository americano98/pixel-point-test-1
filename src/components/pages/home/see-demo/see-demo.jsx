import Image from 'next/image';

import Button from 'components/shared/button/button';

const SeeDemo = () => (
  <section className="mt-60 lg:mt-36 sm:mt-28" id="see-demo">
    <div className="container">
      <div
        className="
          relative flex flex-col items-center
          before:absolute
          before:top-1/2
          before:left-1/2
          before:block
          before:h-[266px]
          before:w-[266px]
          before:-translate-x-1/2
          before:-translate-y-1/2
          before:rounded-full
          before:bg-primary-1
          before:opacity-80
          before:blur-[200px]
        "
      >
        <Image
          src="/terzo-logo.svg"
          alt="Terzo logo"
          width="126"
          height="96"
          className="lg:h-20 lg:w-auto sm:h-auto sm:w-20"
        />
        <h2 className="text-shadow mt-10 max-w-[902px] text-center font-aeonik text-7xl font-normal leading-[1.125] tracking-tight text-grey-98 lg:mt-8 lg:max-w-[616px] lg:text-5xl lg:leading-[1.125] sm:text-[32px]">
          Speed to Value. Get answers in days, not months.
        </h2>
        <p className="mt-5 max-w-xl text-center text-xl font-light leading-normal tracking-wide text-grey-98 lg:mt-4 lg:max-w-[405px] lg:text-base sm:mt-4 sm:max-w-[300px]">
          Organize your data with the best technology, the best human data analysts, and the best UX
        </p>
        <Button to="/" size="lg" theme="primary-violet" className="mt-8 lg:mt-7 sm:mt-6">
          See a Demo
        </Button>
      </div>
    </div>
  </section>
);

export default SeeDemo;
