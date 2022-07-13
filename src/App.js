import React  from "react";
import Accordion from "./Accordion";
import { accordionData } from "./utils/content";

function App() {
  

  return (
    <div className="App">
      <h1>Accordion Demo</h1>
      <div className="accordion">
        {accordionData.map(({title,content})=>(
          <Accordion title={title} content ={content}/>
        ))}
      </div>
    </div>
  );
}

export default App;
