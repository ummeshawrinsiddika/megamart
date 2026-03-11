import React from "react";
import Banner from "../components/home/Banner";
import Bestdeal from "../components/home/Bestdeal";
import Categories from "../components/home/Categories";
import Brandslider from "../components/home/Brandslider";
import DailyEssentials from "../components/DailyEssentials";
const Home = () => {
  return (
    <>
      <Banner />
      <Bestdeal />
      <Categories />
      <Brandslider />
      <DailyEssentials />
    </>
  );
};

export default Home;
