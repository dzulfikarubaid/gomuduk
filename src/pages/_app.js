import "../styles/globals.css";
import Navbar from '../pages/components/navbar'
import {Montserrat, Poppins} from "next/font/google";

// const montserrat = Montserrat({ subsets: ["latin"] })
const poppins = Poppins({weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"] , subsets: ["latin"] })
export default function App({ Component, pageProps }) {
  return <div className={`bg-gray-50 h-screen ${poppins.className}`} >
  <Navbar></Navbar>
  <Component {...pageProps} />
  </div>;
}
