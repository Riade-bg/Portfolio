"use client";

import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import React from "react"
import Work from "./components/portfolio/work";
import Contact from "./components/contact/contact";

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
      <>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Contact />
      </>
  );
}