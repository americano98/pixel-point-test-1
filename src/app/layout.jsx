import '../styles/main.css';
import localFont from '@next/font/local';

const fontAeonik = localFont({
  variable: '--font-aeonik',
  src: [
    {
      path: './fonts/aeonik-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/aeonik-regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});
const fontRoboto = localFont({
  variable: '--font-roboto',
  src: [
    {
      path: './fonts/roboto-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/roboto-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/roboto-medium.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => (
  <html lang="en" className={`${fontAeonik.variable} ${fontRoboto.variable}`}>
    <head />
    <body className="bg-black text-grey-94">{children}</body>
  </html>
);

export default RootLayout;
