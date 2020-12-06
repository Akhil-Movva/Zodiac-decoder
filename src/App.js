import React, { useState } from "react";
import "./styles.css";


var heading = "Zodiac Sign Decoder";

const zodiacSign = {
  "♈": "Aries",
  "♉": "Taurus",
  "♊": "Gemini",
  "♋": "Cancer",
  "♌": "Leo",
  "♍": "Virgo",
  "♎": "Libra",
  "♏": "Scorpio",
  "♐": "Sagittarius",
  "♑": "Capricorn",
  "♒": "Aquarius",
  "♓": "Pisces"
};

var signs = Object.keys(zodiacSign);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function changeHandler(event) {
    var output = zodiacSign[event.target.value];
    if (output === undefined) {
      output = "This is not a zodiac sign!";
    }

    setMeaning(output);
  }

  function clickHandler(sign) {
    var symbol = zodiacSign[sign];
    setMeaning(symbol);
  }
  return (
    <div className="App">
      <h1>{heading}</h1>
      <input onChange={changeHandler} />
      <div className="zodiac-text">{meaning} </div>
      <h2>Zodiac Signs</h2>
      {signs.map(function (sign) {
        return (
          <span onClick={() => clickHandler(sign)} className="sign">
            {sign}
          </span>
        );
      })}
    </div>
  );
}
