// import { useState } from "react";
// import "./App.css";

// export default function App() {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState(null);
//   const [level, setLevel] = useState("easy");
//   const [options, setOptions] = useState([]);
//   const [userAnswer, setUserAnswer] = useState(null);
//   const [feedback, setFeedback] = useState("");
//   const [score, setScore] = useState(0);

//   const getRange = () => {
//     switch (level) {
//       case "easy": return 20;
//       case "medium": return 50;
//       case "hard": return 100;
//       case "veryhard": return 200;
//       case "extremelyhard": return 500;
//       default: return 20;
//     }
//   };

//   const getRandomOperator = () => {
//     const operators = ["+", "-", "*", "/"];
//     return operators[Math.floor(Math.random() * operators.length)];
//   };

//   const generateQuestion = () => {
//     const range = getRange();
//     const num1 = Math.floor(Math.random() * range) + 1;
//     const num2 = Math.floor(Math.random() * range) + 1;
//     const operator = getRandomOperator();

//     const expression = `${num1} ${operator} ${num2}`;
//     setQuestion(expression);

//     const correctAnswer = Math.floor(eval(expression));
//     setAnswer(correctAnswer);

//     let wrong1 = correctAnswer + (Math.floor(Math.random() * 10) + 1);
//     let wrong2 = correctAnswer - (Math.floor(Math.random() * 10) + 1);

//     const allOptions = [correctAnswer, wrong1, wrong2].sort(
//       () => Math.random() - 0.5
//     );
//     setOptions(allOptions);

//     setUserAnswer(null);
//     setFeedback("");
//   };

//   const checkAnswer = (opt) => {
//     setUserAnswer(opt);
//     if (opt === answer) {
//       setFeedback("✅ Correct! +1 point");
//       setScore((prev) => prev + 1);
//     } else {
//       setFeedback("❌ Wrong! -1 point");
//       setScore((prev) => prev - 1);
//     }

//     setTimeout(() => {
//       setFeedback("");
//       generateQuestion();
//     }, 800);
//   };

//   const resetGame = () => {
//     setScore(0);
//     setQuestion("");
//     setAnswer(null);
//     setOptions([]);
//     setUserAnswer(null);
//     setFeedback("");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500">
//       <div className="w-full max-w-lg p-6 text-center bg-white shadow-2xl rounded-2xl">
//         {score < 10 ? (
//           <>
//             <h1 className="mb-6 text-4xl font-extrabold text-purple-700">
//               🎯 Math Quiz Game
//             </h1>

//             {/* Difficulty Selector */}
//             <div className="mb-5">
//               <label htmlFor="level" className="mr-2 font-medium text-gray-700">
//                 Difficulty:
//               </label>
//               <select
//                 id="level"
//                 value={level}
//                 onChange={(e) => setLevel(e.target.value)}
//                 className="p-2 border-2 border-purple-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
//               >
//                 <option value="easy">Easy (0–20)</option>
//                 <option value="medium">Medium (0–50)</option>
//                 <option value="hard">Hard (0–100)</option>
//                 <option value="veryhard">Very Hard (0–200)</option>
//                 <option value="extremelyhard">Extremely Hard (0–500)</option>
//               </select>
//             </div>

//             <h2 className="mb-4 text-2xl font-semibold text-gray-800">
//               {question ? question : "🤔 Click Start to Begin"}
//             </h2>

//             {!question && (
//               <button
//                 onClick={generateQuestion}
//                 className="px-8 py-3 text-lg font-semibold text-white transition-transform duration-300 shadow-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl hover:scale-105"
//               >
//                 🚀 Start Game
//               </button>
//             )}

//             {/* Options */}
//             {question && (
//               <div className="grid w-full max-w-md grid-cols-3 gap-4 mx-auto my-6">
//                 {options.map((opt, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => checkAnswer(opt)}
//                     className={`px-6 py-4 rounded-2xl text-lg font-bold shadow-lg transition transform hover:scale-105
//                       ${
//                         userAnswer === opt
//                           ? opt === answer
//                             ? "bg-green-500 text-white"
//                             : "bg-red-500 text-white"
//                           : "bg-gray-100 hover:bg-gray-200"
//                       }`}
//                   >
//                     {opt}
//                   </button>
//                 ))}
//               </div>
//             )}

//             {/* Feedback */}
//             {feedback && (
//               <p className="text-xl font-semibold text-gray-800 animate-pulse">
//                 {feedback}
//               </p>
//             )}

//             {/* Score */}
//             {question && (
//               <p className="mt-4 text-lg font-medium text-purple-700">
//                 🏆 Score: {score}
//               </p>
//             )}

//             <button
//               className="px-6 py-2 mt-4 text-lg font-semibold text-white transition-all duration-300 bg-red-500 shadow-lg rounded-xl hover:bg-red-600"
//               onClick={resetGame}
//             >
//               🔄 Reset Game
//             </button>
//           </>
//         ) : (
//           <div className="flex flex-col items-center space-y-6">
//             <p className="text-2xl font-semibold text-gray-800">
//               🎉 Your score is 10! You completed the game!
//             </p>
//             <button
//               className="px-8 py-3 text-lg font-semibold text-white transition-transform duration-300 shadow-lg bg-gradient-to-r from-green-500 to-teal-600 rounded-xl hover:scale-105"
//               onClick={() => window.location.reload()}
//             >
//               🔁 Restart
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import { useState } from 'react';
import './App.css'

export default function App() {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let settingFormData = async () => {
        const setFormData = await fetch("https://my-portfolio-backend-as2h.onrender.com/setFormData", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        })
      }
      settingFormData()
    }
    catch (error) {
      console.error("Error submitting form:", error);
      
    }
    setData({ name: '', email: '', message: '' });
    alert("Message Sent successfully!");
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-[#2c3e50] to-[#34495e] flex flex-col items-center justify-center text-white py-12 shadow-lg">
        <h1 className="text-2xl font-bold tracking-wide md:text-4xl">Himanshu Rajoriya</h1>
        <h2 className="mt-2 text-gray-300 md:text-lg">Full Stack Web Developer</h2>

        <ul className="flex flex-col items-center mt-4 text-lg text-blue-400 md:gap-6 md:items-center md:justify-center md:flex-wrap md:flex-row">
          <li>
            <a href="https://www.linkedin.com/in/himanshu-rajoriya-84ba04304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/hr9510" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:underline">
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:himanshurajoriya9510@gmail.com" className="transition-all duration-300 hover:underline">
              Email
            </a>
          </li>
          <li>
            <a href="tel:+919685123395" className="transition-all duration-300 hover:underline">
              Call
            </a>
          </li>
        </ul>
      </header>

      {/* Main */}
      <main className="w-full min-h-screen bg-[#ecf0f1] flex flex-col items-center py-10 space-y-10">

        {/* About Section */}
        <section className="w-11/12 p-8 transition bg-white shadow-lg md:w-3/4 rounded-2xl hover:shadow-2xl">
          <h1 className="pb-2 mb-3 text-3xl font-bold border-b-2 border-blue-500">About Me</h1>
          <p className="text-lg leading-relaxed text-gray-700">
            I am a passionate web developer with hands-on experience in building modern, responsive, and 
            secure web applications. I love solving real-world problems with code.
          </p>
        </section>

        {/* Skills Section */}
        <section className="w-11/12 p-8 transition bg-white shadow-lg md:w-3/4 rounded-2xl hover:shadow-2xl">
          <h1 className="pb-2 mb-3 text-3xl font-bold border-b-2 border-blue-500">Skills</h1>
          {/* <ul className="grid grid-cols-2 text-center sm:gap-3 sm:justify-center sm:flex-wrap sm:flex "> */}
          <ul className="flex flex-wrap justify-center gap-3 text-center">
            {[
              "HTML", "CSS", "Git", "React", "JavaScript", "Flask", "Tailwind CSS",
              "Responsive Design", "SQLAlchemy (PostgreSQL, SQLite)"
            ].map((skill, index) => (
              <li 
                key={index} 
                className="px-5 py-2 font-medium text-white transition-all duration-300 shadow-md rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-110"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Projects Section */}
        <section className="w-11/12 p-8 transition bg-white shadow-lg md:w-3/4 rounded-2xl hover:shadow-2xl">
          <h1 className="pb-2 mb-6 text-3xl font-bold border-b-2 border-blue-500">Projects</h1>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {title: "Expense Tracker", desc: "Track and manage expenses with accounts.", tech: "React, Tailwind, Flask, PostgreSQL", link: "https://expanse-tracker-frontend-yve2.vercel.app/"},
              { title: "Restaurant App", desc: "Modern food ordering platform.", tech: "React, Flask, Tailwind", link: "https://my-react-app-1egg.vercel.app/" },
              {title: "Math Game", desc: "Fun interactive math learning game.", tech: "Vite-React, Tailwind", link: "https://frontend-game-xi.vercel.app/ "}
            ].map((project, idx) => (
              <div key={idx} className="p-5 transition bg-gray-100 shadow rounded-xl hover:shadow-xl hover:scale-105">
                <h1 className="text-xl font-bold">{project.title}</h1>
                <p className="mt-1 text-gray-700">{project.desc}</p>
                <i className="block mt-1 text-sm text-gray-500">Tech: {project.tech}</i>
                <div className="flex justify-between mt-3 font-semibold text-blue-500">
                  <a href={project.link} target='main'>View</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-11/12 p-8 transition bg-white shadow-lg md:w-3/4 rounded-2xl hover:shadow-2xl">
          <h1 className="pb-2 mb-3 text-3xl font-bold border-b-2 border-blue-500">Contact Me</h1>
          <form onSubmit={(e)=>{handleSubmit(e)}} className="flex flex-col items-center space-y-4">
            <input name='name' value={data.name} onChange={(e)=>{handleChange(e)}} placeholder="Your Name" className="md:w-[60%] border border-gray-300 rounded-xl px-4 py-2 w-[90%]" type="text" />
            <input name='email' value={data.email} onChange={(e)=>{handleChange(e)}} placeholder="Your Email" className="md:w-[60%] border border-gray-300 rounded-xl px-4 py-2 w-[90%]" type="email"/>
            <textarea name='message' value={data.message} onChange={(e)=>{handleChange(e)}} placeholder="Your Message" className="md:w-[60%] h-[20vh] border border-gray-300 rounded-xl px-4 py-2 w-[90%]" />
            <button type="submit" className="bg-gradient-to-r from-blue-600 to-blue-700 w-[90%] md:w-[60%] py-2 text-white text-lg font-semibold rounded-xl shadow hover:scale-105 transition">
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#2c3e50] text-gray-400 text-center py-4 mt-6">
        © {new Date().getFullYear()} Himanshu Rajoriya | All Rights Reserved
      </footer>
    </div>
  )
}
