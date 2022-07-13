import React from "react";

function App() {
  const accordionData = {
    title: "section 1",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime itaque odit esse non vitae veritatis numquam quia amet obcaecati? Libero, eos necessitatibus hic sint iusto reiciendis tempore est doloribus.`,
  };

  const { title, content } = accordionData;
  return (
    <div className="App">
      <h1>Accordion Demo</h1>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title">
            <div>{title}</div>
            <div>+</div>
          </div>
          <div className="accordion-content">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
