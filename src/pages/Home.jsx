import React from "react";
import Banner from "../components/home/Banner";
import Bestdeal from "../components/home/Bestdeal";
import Categories from "../components/home/Categories";
import Brandslider from "../components/home/Brandslider";
import DailyEssentials from "../components/DailyEssentials";
import Babyclothes from "../components/home/Babyclothes";
import Womenshoes from "../components/home/Womenshoes";

const Home = () => {
  return (
    <>
      <Banner />
      <Bestdeal />
      <Categories />
      <Babyclothes />
      <Womenshoes />
      <Brandslider />
      <DailyEssentials />
    </>
  );
};

export default Home;
