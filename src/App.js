import React from 'react';
import {useState} from 'react'
import "./Clock.css";
import Clock from "./Clock.js";
import Hours from './Hours.js';

function App() {
  const [data, useData] = useState(true);

const Change = (e) => {
  useData(!data);
}

let label;
let balise;
if(data){
  label = "Heure"
  balise = <Clock/>;
}
else{
  label = "Clock"
  balise = <Hours/>;
}
   return (
   <>
     <div onClick={Change} id="Change">{label}</div>
     {balise}

   </>
  );
}

export default App;

