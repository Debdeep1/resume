import React from "react";
import Resume from './resume.pdf';

const App = () => {

  return (
    <div style={{ margin: 0, padding: 0, overflow: "hidden" }}>
      <iframe
        src={Resume}
        title="Resume"
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default App;
