import React from "react";
import Carousel from "../../../components/ClientComponent/Carousel/Carousel";
import Community from "../../../components/ClientComponent/Community/Community";
import OurCompany from "../../../components/ClientComponent/OurCompany/OurCompany";
import FindOut from "../../../components/ClientComponent/FindOut/FindOut";
import OurStudents from "../../../components/ClientComponent/OurStudents/OurStudents";
import BrowseOnline from "../../../components/ClientComponent/BrowseOnline/BrowseOnline";
import OnlyMission from "../../../components/ClientComponent/OnlyMission/OnlyMission";
import Student from "../../../components/ClientComponent/Student/Student";
import Explore from "../../../components/ClientComponent/Explore/Explore";
import StartOnline from "../../../components/ClientComponent/StartOnline/StartOnline";

function Home() {
  return (
    <div>
      <Carousel />
      <BrowseOnline />
      <OnlyMission />
      <Student />
      <Explore />
      <StartOnline />
      <OurStudents />
      <FindOut />
      <OurCompany />
      <Community />
    </div>
  );
}

export default Home;
