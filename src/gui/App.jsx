import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    window.electronAPI.onData((_, data) => {
      console.log("Received data from main process", data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
