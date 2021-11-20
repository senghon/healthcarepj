import React from "react";
import Ausculation from "../Components/bodycheckcomponent/Ausculation";
import Ear from "../Components/bodycheckcomponent/Ear";
import Eye from "../Components/bodycheckcomponent/Eye";
import Eentbox from "../Components/bodycheckcomponent/Eye";
import Skin from "../Components/bodycheckcomponent/Skin";
import Teeth from "../Components/bodycheckcomponent/Teeth";
import Boxtype1 from "../Components/test1component/Boxtype1";
import "../css/Bodycheck.css";
import "react-router-dom";

function Bodycheck() {
  console.log(this.props);
  return (
    <div>
      <form className="bodycheck">
        <h1>씨발</h1>
        <div className="bodycondition">
          <Boxtype1 name="BCS" />
          <Boxtype1 name="Weight" />
          <Boxtype1 name="BT" />
        </div>
        <div className="bodycondition">
          <Eye name="Eye" />
          <Ear name="Ear" />
          <Teeth name="Teeth" />
          <Skin name="Skin" />
          <Ausculation name="Ausculation" />
        </div>
      </form>
    </div>
  );
}
export default Bodycheck;
