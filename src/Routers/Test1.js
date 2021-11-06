import React, { useEffect, useState } from "react";
import Navigation from "../Components/Navigation";
import Boxtype1 from "../Components/test1component/Boxtype1";
import Race from "../Components/test1component/Race";
import Sex from "../Components/test1component/Sex";
import Specise from "../Components/test1component/Species";
import Testoption from "../Components/test1component/Testoption";
import "../css/Test1.css";
import { addDoc, setDoc, doc, getDocs, collection } from "@firebase/firestore";
import Firedb from "../firebase";

function Test1() {
  const [inputs, setInputs] = useState({
    chartNum: "",
    animalName: "",
    companion: "",
    vet: "",
    specise: "",
    race: "",
    age: "",
    sex: "",
    testOption: {},
  });
  const [testoptioninputs, setTestoptioninputs] = useState({});

  const {
    chartNum,
    animalName,
    companion,
    vet,
    specise,
    race,
    age,
    sex,
    testOption,
  } = inputs;

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const checkingbox = (event) => {
    const { checked, name, value } = event.target;

    if (checked) {
      setTestoptioninputs({ ...testoptioninputs, [value]: "" });
    } else {
      console.log(testoptioninputs);
      console.log(testoptioninputs.value);
      console.log(testoptioninputs[value]);
      //   const { value, ...updateinput } = testoptioninputs;
      //   setTestoptioninputs(updateinput);
    }
  };

  console.log(testoptioninputs);

  const getdb = async () => {
    const dbdata = await getDocs(collection(Firedb, "patientdata"));
    // dbdata.forEach((doc) => console.log(doc.data()));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await setDoc(doc(Firedb, "patientdata", chartNum), inputs);
  };

  useEffect(() => getdb(), []);

  return (
    <div>
      <form className="test1form" onSubmit={onSubmit}>
        <div className="test1row">
          <Boxtype1 name="chartNum" onChange={onChange} value="hospitalname" />
          <Boxtype1 name="animalName" onChange={onChange} value="animalname" />
          <Boxtype1 name="companion" onChange={onChange} value="companion" />
          <Boxtype1 name="vet" onChange={onChange} value="vet" />
        </div>
        <div className="test1row">
          <Specise name="specise" onChange={onChange} />
          <Race name="race" onChange={onChange} />
          <Sex name="sex" value="sex" onChange={onChange} />
          <Boxtype1 name="age" value="age" onChange={onChange} />
        </div>
        <div className="test1row">
          <Testoption name="testOption" checkingbox={checkingbox} />
          <input type="submit" value="다음"></input>
        </div>
      </form>
    </div>
  );
}

export default Test1;
