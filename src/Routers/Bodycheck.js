import React from "react";
import Ausculation from "../Components/bodycheckcomponent/Ausculation";
import Ear from "../Components/bodycheckcomponent/Ear";
import Eye from "../Components/bodycheckcomponent/Eye";
import Eentbox from "../Components/bodycheckcomponent/Eye";
import Skin from "../Components/bodycheckcomponent/Skin";
import Teeth from "../Components/bodycheckcomponent/Teeth";
import Boxtype1 from "../Components/test1component/Boxtype1";

function Bodycheck() {
  return (
    <div>
      <h1>씨발</h1>
      <form className="bodycheck">
        <Boxtype1 />
        <Boxtype1 />
        <Boxtype1 />
        <div>
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
