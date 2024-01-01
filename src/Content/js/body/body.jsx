
import ListRoom from "./Component/roomList";
import SubAboutUs from "./Component/subAboutUs/subAboutUs";

import Service from "./Component/Service/service";
import FilterPageComp from "../../../components/Layout/FilterComponent";
import OutstandingArea from "./Component/OutstandsingArea/OutstandingArea";
import Convenient from "./Component/Convenient/convenient";
import Filter from "./Component/Filter/filter";
import Hero from "./Component/Hero/hero";

function Body(props) {
  return (
    <div className={props.className}>
      {props.Hero ? <Hero /> : ""}
      {props.FilterPageComp ? <FilterPageComp /> : ""}
      {props.Filter ? <Filter /> : ""}
      {props.ListRoom ? <ListRoom /> : ""}
      {props.SubAboutUs ? <SubAboutUs /> : ""}
      {props.OutstandingArea ? <OutstandingArea /> : ""}
      {props.Convenient ? <Convenient /> : ""}
      {props.Service ? <Service /> : ""}
    </div>
  );
}

export default Body;
