import React, { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => {
  const counterData = [
    {
      number: 10,
      text: "Problem Statement",
    },
    {
      number: 60,
      text: "Teams Participated",
    },
    {
      number: 250,
      text: "Participants",
    },
  ];

  const [countedNumbers, setCountedNumbers] = useState(
    Array(counterData.length).fill(0)
  );
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    if (isCounting) {
      const timers = counterData.map((item, index) => {
        const targetNumber = item.number;
        const timer = setInterval(() => {
          if (countedNumbers[index] < targetNumber) {
            setCountedNumbers((prevNumbers) => {
              const newNumbers = [...prevNumbers];
              newNumbers[index] += 1;
              return newNumbers;
            });
          } else {
            clearInterval(timer);
          }
        }, 100);
        return timer;
      });
    }
  }, [isCounting, counterData, countedNumbers]);

  useEffect(() => {
    setIsCounting(true);

    return () => {
      setIsCounting(false);
    };
  }, []);

  return (
    <section className="counter">
      <div className="container">
        <div className="counter_wrapper">
          {counterData.map((item, index) => (
            <div className="counter_item" key={index}>
              <h3 className="counter_number">
                {countedNumbers[index] <= item.number
                  ? countedNumbers[index]
                  : item.number}
                +
              </h3>
              <h4 className="counter_title">{item.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
