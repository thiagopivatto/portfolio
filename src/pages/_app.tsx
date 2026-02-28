import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;