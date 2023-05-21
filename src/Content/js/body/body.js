import Hero from "./Component/hero";
import Filter from "./Component/filter";
import ListRoom from "./Component/roomList";
import SubAboutUs from "./Component/subAboutUs";
import Convenient from "./Component/convenient";
import Service from "./Component/service";
import FilterPageComp from "../../../components/Layout/FilterComponent";
import OutstandingArea from "./Component/OutstandsingArea/OutstandingArea";

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
