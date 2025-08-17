import { useState } from "react";
import "./App.css";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [level, setLevel] = useState("easy");
  const [options, setOptions] = useState([]);
  const [userAnswer, setUserAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);

  const getRange = () => {
    switch (level) {
      case "easy": return 20;
      case "medium": return 50;
      case "hard": return 100;
      case "veryhard": return 200;
      case "extremelyhard": return 500;
      default: return 20;
    }
  };

  const getRandomOperator = () => {
    const operators = ["+", "-", "*", "/"];
    return operators[Math.floor(Math.random() * operators.length)];
  };

  const generateQuestion = () => {
    const range = getRange();
    const num1 = Math.floor(Math.random() * range) + 1;
    const num2 = Math.floor(Math.random() * range) + 1;
    const operator = getRandomOperator();

    const expression = `${num1} ${operator} ${num2}`;
    setQuestion(expression);

    const correctAnswer = Math.floor(eval(expression));
    setAnswer(correctAnswer);

    let wrong1 = correctAnswer + (Math.floor(Math.random() * 10) + 1);
    let wrong2 = correctAnswer - (Math.floor(Math.random() * 10) + 1);

    const allOptions = [correctAnswer, wrong1, wrong2].sort(
      () => Math.random() - 0.5
    );
    setOptions(allOptions);

    setUserAnswer(null);
    setFeedback("");
  };

  const checkAnswer = (opt) => {
    setUserAnswer(opt);
    if (opt === answer) {
      setFeedback("✅ Correct! +1 point");
      setScore((prev) => prev + 1);
    } else {
      setFeedback("❌ Wrong! -1 point");
      setScore((prev) => prev - 1);
    }

    setTimeout(() => {
      setFeedback("");
      generateQuestion();
    }, 800);
  };

  const resetGame = () => {
    setScore(0);
    setQuestion("");
    setAnswer(null);
    setOptions([]);
    setUserAnswer(null);
    setFeedback("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500">
      <div className="w-full max-w-lg p-6 text-center bg-white shadow-2xl rounded-2xl">
        {score < 10 ? (
          <>
            <h1 className="mb-6 text-4xl font-extrabold text-purple-700">
              🎯 Math Quiz Game
            </h1>

            {/* Difficulty Selector */}
            <div className="mb-5">
              <label htmlFor="level" className="mr-2 font-medium text-gray-700">
                Difficulty:
              </label>
              <select
                id="level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="p-2 border-2 border-purple-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="easy">Easy (0–20)</option>
                <option value="medium">Medium (0–50)</option>
                <option value="hard">Hard (0–100)</option>
                <option value="veryhard">Very Hard (0–200)</option>
                <option value="extremelyhard">Extremely Hard (0–500)</option>
              </select>
            </div>

            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              {question ? question : "🤔 Click Start to Begin"}
            </h2>

            {!question && (
              <button
                onClick={generateQuestion}
                className="px-8 py-3 text-lg font-semibold text-white transition-transform duration-300 shadow-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl hover:scale-105"
              >
                🚀 Start Game
              </button>
            )}

            {/* Options */}
            {question && (
              <div className="grid w-full max-w-md grid-cols-3 gap-4 mx-auto my-6">
                {options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => checkAnswer(opt)}
                    className={`px-6 py-4 rounded-2xl text-lg font-bold shadow-lg transition transform hover:scale-105
                      ${
                        userAnswer === opt
                          ? opt === answer
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* Feedback */}
            {feedback && (
              <p className="text-xl font-semibold text-gray-800 animate-pulse">
                {feedback}
              </p>
            )}

            {/* Score */}
            {question && (
              <p className="mt-4 text-lg font-medium text-purple-700">
                🏆 Score: {score}
              </p>
            )}

            <button
              className="px-6 py-2 mt-4 text-lg font-semibold text-white transition-all duration-300 bg-red-500 shadow-lg rounded-xl hover:bg-red-600"
              onClick={resetGame}
            >
              🔄 Reset Game
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center space-y-6">
            <p className="text-2xl font-semibold text-gray-800">
              🎉 Your score is 10! You completed the game!
            </p>
            <button
              className="px-8 py-3 text-lg font-semibold text-white transition-transform duration-300 shadow-lg bg-gradient-to-r from-green-500 to-teal-600 rounded-xl hover:scale-105"
              onClick={() => window.location.reload()}
            >
              🔁 Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
