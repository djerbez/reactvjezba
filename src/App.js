import React, { useState } from "react";
import "./App.css";
const divovi = [
  { id: "div1", backgroundcolor: "red", hex: "#FF0000" },
  { id: "div2", backgroundcolor: "blue", hex: "#0000FF" },
  { id: "div3", backgroundcolor: "green", hex: "#00FF00" },
  { id: "div4", backgroundcolor: "brown", hex: "#964B00" },
  { id: "div5", backgroundcolor: "pink", hex: "#FFC0CB" },
  { id: "div6", backgroundcolor: "black", hex: "#000000" },
];
function App() {
  const [hex, setHex] = useState("#FF0000")
  const [divs, setDivs] = useState(divovi)
function renderDiv(div) {
  return(
    <div key={div.id} style={{ backgroundColor: div.backgroundcolor , width:"500px", height: "300px", alignItems:"center"}} onClick={()=> changeHex(div.id)}></div>
  )
}
function changeHex(id) {
  const currentDiv = divs.filter(div => div.id === id)
  var obj = currentDiv.reduce(function(acc, cur, i) {
    acc[i] = cur;
    return acc;
  }, {});
  const newHex = obj[0].hex
  setHex(newHex)
}
  return (
    <div>
      <div className="container">{divs.map(renderDiv)}</div>
      <div className="hex">{hex}</div>
    </div>
    
  );
}
export default App;