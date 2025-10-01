
import Banner from "@/components/homePage/banner/Banner"; 
import StatsCounter from "@/components/homePage/StatsCounter/StatsCounter";
import Instructors from "@/components/homePage/Instructors/Instructors"
export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <StatsCounter></StatsCounter>
      <Instructors></Instructors>
    </div>
  );
}
