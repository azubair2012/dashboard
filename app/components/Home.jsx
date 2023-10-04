import React from "react";
import Topbox from "/app/components/Topbox";
import { IoMdPerson, IoMdCash, IoMdCalculator } from "react-icons/io";

const Home = () => {
  return (
    <div>
      Home
      <div className="flex justify-around gap-2 mx-2 ">
        <Topbox title={"User online"} icon={<IoMdPerson />} number={2023} />
        <Topbox title={"Total Sale"} icon={<IoMdCalculator />} number={10023} />
        <Topbox title={"Net Income"} icon={<IoMdCash />} number={98663} />
      </div>
    </div>
  );
};

export default Home;
