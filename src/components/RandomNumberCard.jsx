import React, { useEffect, useState } from "react";

const RandomNumberCard = () => {
  const [name, setName] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [date, setDate] = useState("");

  useEffect(() => {
    const userName = prompt("What is your name?") || "Anonymous";
    setName(userName);
    setDate(new Date().toLocaleDateString());
    setRandomNumber(Math.floor(Math.random() * 101));
  }, []);

  return (
    <div className="border-4 border-blue-500 rounded-xl p-8 text-center bg-white dark:bg-gray-700 shadow-xl">
      <p className="mb-2 font-semibold">
        Hello my name is: <span className="text-yellow-400">{name}</span>
      </p>
      <p className="mb-2">
        This is the day:{" "}
        <span className="text-yellow-400 font-semibold">{date}</span>
      </p>
      <p className="mb-2">A random number from 0 to 100:</p>
      <h1 className="text-6xl font-bold mt-4">{randomNumber}</h1>
    </div>
  );
};

export default RandomNumberCard;
