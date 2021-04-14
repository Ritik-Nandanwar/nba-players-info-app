// import 'tailwindcss/tailwind.css'
import Navbar from "../Components/Navbar";
import "../styles/globals.css";
import Layout from "./Layout";
function MyApp({ Component, pageProps }) {
  return <Layout>
    <Navbar/>
    <Component {...pageProps} />
  </Layout>;
}

export default MyApp;
