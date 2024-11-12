import { useState } from "react";
import "./App.css";

function App() {
  let [joke, setJoke] = useState("hola como estas");

  async function clikKaro() {
    let response = await fetch(
      "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
    );
    let data = await response.json();
    setJoke(data.joke);
  }

  return (
    <>
      <div className="gg">
        <h1>Joke Genrator</h1>
        <h2>
          ⚠️ Sorry for that these jokes are not funny at all because these are
          in English 😂
        </h2>
        <h2>
          {" "}
          {joke
            ? joke
            : "Data is not available yet click it one more time for wonder"}
        </h2>
        <button onClick={clikKaro}>Click Here for More</button>
      </div>
    </>
  );
}

export default App;
