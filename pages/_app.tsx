import { NextPage } from 'next';
import { AppProps } from 'next/app';
import '../public/css/globals.css';
import '../public/css/local.css';
import { wrapper } from '../redux/stores/configureStore';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
