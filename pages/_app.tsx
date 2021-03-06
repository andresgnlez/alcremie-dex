import type { AppProps } from 'next/app';

import 'styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
