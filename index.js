import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services"
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FadeUp from "../components/FadeUp";
import PopupWidget from "../components/popupWidget";
export default function Main() {
  return (
    <>

      <Navbar />
      <PopupWidget />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
      <FadeUp />
    </>
  );
}
