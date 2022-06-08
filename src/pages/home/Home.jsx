import React from "react";
import Carousal from "../../components/Carousal";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Carousal />
      <Footer />
    </div>
  );
}
