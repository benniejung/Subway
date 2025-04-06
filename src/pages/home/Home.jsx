import React from "react";
import Header from "../../components/home/Header";
import Nav from "../../components/home/Nav";
import MenuSection from "../../components/home/MenuSection";
import BannerSection from "../../components/home/BannerSection";

const Home = () => {
  return (
    <div className="Home">
      <header>
        <Header />
      </header>
      <nav>
        <Nav />
      </nav>
      <section>
        <BannerSection />
      </section>
      <section>
        <MenuSection />
      </section>
    </div>
  );
};

export default Home;
