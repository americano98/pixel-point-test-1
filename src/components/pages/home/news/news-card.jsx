import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';

const headerStyles = {
  base: 'relative pt-7 before:absolute before:top-0 before:left-0 before:h-2.5 before:w-2.5 before:rounded-full',
  color: {
    primary1: 'before:bg-primary-1',
    primary2: 'before:bg-primary-2',
    primary3: 'before:bg-primary-3',
    secondary2: 'before:bg-secondary-2',
  },
};

const NewsCard = ({ color, bg, cardStyles, title, description, logo = {} }) => (
  <article className="border-linear" style={{ background: cardStyles?.borderGradient }}>
    {bg?.src && (
      <div className="absolute left-[1px] top-[1px] h-[calc(100%_-_2px)] w-[calc(100%_-_2px)] overflow-hidden rounded-md">
        <Image src={bg.src} alt="" className="object-cover" fill />
      </div>
    )}
    <div className="relative z-10 flex h-full flex-col justify-between">
      <div className="">
        <header className={clsx(headerStyles.base, headerStyles.color[color])}>
          <h4 className="text-2xl font-normal leading-snug tracking-wide text-grey-98 lg:text-xl lg:leading-snug">
            {title}
          </h4>
        </header>
        <main>
          <p
            className={clsx(
              'mt-[14px] bg-clip-text font-light leading-normal tracking-wide text-transparent mix-blend-overlay lg:mt-3',
              cardStyles?.textGradient
            )}
          >
            {description}
          </p>
        </main>
      </div>
    </div>
    <footer
      className="relative py-6
      before:absolute before:top-0 before:left-0 before:h-[1px] before:w-full before:bg-white before:opacity-80 before:mix-blend-overlay"
    >
      <Image {...logo} className="mix-blend-overlay" />
      <Image {...logo} className="absolute top-1/2 -translate-y-1/2 mix-blend-overlay" />
      <Image {...logo} className="absolute top-1/2 -translate-y-1/2 mix-blend-overlay" />
    </footer>
  </article>
);

NewsCard.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cardStyles: PropTypes.exact({
    borderGradient: PropTypes.string,
    textGradient: PropTypes.string,
  }),
  logo: PropTypes.exact({
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string,
  }),
  bg: PropTypes.exact({
    src: PropTypes.string.isRequired,
  }),
};

export default NewsCard;
