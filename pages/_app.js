import Footer from '../components/Footer.js';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className="container">
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}

export default MyApp;
