import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
const StaticLine = ({ value, text }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};
const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad;
  if (total !== 0) {
    return (
      <>
        <StaticLine value={good} text="Good" />
        <StaticLine value={neutral} text="Neutral" />
        <StaticLine value={bad} text="Bad" />
        <StaticLine value={total} text="all" />
        <StaticLine
          value={(good * 1 + neutral * 0 + bad * -1) / total}
          text="Average"
        />
        <StaticLine
          value={((good / total) * 100).toString() + "%"}
          text="Positive"
        />
      </>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (value) => {
    const click = () => {
      switch (value) {
        case "good":
          setGood(good + 1);
          break;
        case "neutral":
          setNeutral(neutral + 1);
          break;
        case "bad":
          setBad(bad + 1);
          break;
        default:
          break;
      }
    };
    return click;
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" onClick={handleClick("good")} />
      <Button text="neutral" onClick={handleClick("neutral")} />
      <Button text="bad" onClick={handleClick("bad")} />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
