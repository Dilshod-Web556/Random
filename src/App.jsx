import React, { useEffect, useState } from "react";
import RandomNumberCard from "./components/RandomNumberCard";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const hour = new Date().getHours();
    setTheme(hour > 6 && hour < 18 ? "light" : "dark");
  }, []);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen flex items-center justify-center transition-colors duration-500`}
    >
      <RandomNumberCard />
    </div>
  );
}

export default App;
