import NewsCard from './news-card';

const News = () => {
  const items = [
    {
      color: 'primary2',
      title: 'Terzo Announces $16M Series A Round',
      description:
        'Managing your suppliers efficiently is nearly impossible if you have to juggle multiple systems and spreadsheets of data.',
      logo: {
        src: '/news-1__logo.svg',
        width: 48,
        height: 32,
        alt: 'Terzo',
      },
      bg: {
        src: '/news-1__bg.svg',
      },
      cardStyles: {
        borderGradient: 'linear-gradient(215.39deg, #322735 3.56%, #784691 49.07%, #322735 91.08%)',
        textGradient: 'text-gradient-1',
      },
    },
    {
      color: 'secondary2',
      title: 'Terzo Named to 2022 ProcureTech 100 Lis',
      description:
        'Legal teams lose time and create risk due to demand from various departments, often buried with contract reviews and chasing',
      logo: {
        src: '/news-2__logo.svg',
        width: 140,
        height: 32,
        alt: 'Terzo',
      },
      bg: {
        src: '/news-2__bg.svg',
      },
      cardStyles: {
        borderGradient: 'linear-gradient(215.39deg, #5A4D5D 0%, #49498B 48.43%, #3D3665 100%)',
        textGradient: 'text-gradient-2',
      },
    },
    {
      color: 'primary3',
      title: 'Terzo Named a 50 Best Companies to Watch in 2022',
      description:
        'Finance teams lack visibility into contract spend which complicates the budgeting process and creates inaccurate forecasting, posing risk to the business.',
      logo: {
        src: '/news-3__logo.svg',
        width: 137,
        height: 32,
        alt: 'Terzo',
      },
      bg: {
        src: '/news-3__bg.svg',
      },
      cardStyles: {
        borderGradient: 'linear-gradient(215.39deg, #4E4551 0%, #867452 47.04%, #3A2D32 100%)',
        textGradient: 'text-gradient-3',
      },
    },
    {
      color: 'primary1',
      title: 'Terzo Announces Partnership with Prevalent',
      description:
        'Storing contracts across multiple systems makes renewal management extremely difficult, leading to unfavorable renewal terms and missed renewals.',
      logo: {
        src: '/news-4__logo.svg',
        width: 106,
        height: 32,
        alt: 'Terzo',
      },
      bg: {
        src: '/news-4__bg.svg',
      },
      cardStyles: {
        borderGradient: 'linear-gradient(215.39deg, #4E4351 0%, #6D4E9D 50.02%, #2D2235 100%)',
        textGradient: 'text-gradient-4',
      },
    },
  ];

  return (
    <section id="news">
      <div className="container">
        <h2 className="text-shadow text-center font-aeonik text-6xl leading-[1.125] tracking-tight text-white lg:text-[40px] sm:text-[28px]">
          Latest news about Terzo
        </h2>
        <div className="mt-14 grid auto-rows-fr grid-cols-4 gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-6 md:gap-5 sm:mt-10 sm:grid-cols-1">
          {items.map((el, index) => (
            <NewsCard key={index} {...el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
