# 🎯 Interactive Quiz Game

A simple interactive **Quiz Game** built with **HTML, CSS, and JavaScript** where users answer multiple-choice questions, receive instant feedback, and see a final performance summary at the end of the quiz.[file:19][file:20]

---

## ✨ Features

- 🧠 Multiple-choice questions rendered dynamically from a JavaScript question bank.[file:20]  
- ⚡ Instant feedback with color highlighting for correct ✅ and incorrect ❌ answers.  
- 📈 Live score tracking as you progress through the quiz.[file:20]  
- 📊 Progress bar that fills as you move through the questions.[file:20][file:21]  
- 🏁 Result screen showing final score and a personalized message based on performance (Perfect, Great Job, Keep Learning, etc.).[file:20]  
- 📱 Responsive, card-style UI centered on the page for a clean and focused quiz experience.[file:19][file:21]

---

## 🛠 Tech Stack

- 🧩 **HTML5** – Structure and layout (`index.html`).[file:19]  
- 🎨 **CSS3** – Styling, layout, and responsive design (`style.css`).[file:21]  
- 🚀 **Vanilla JavaScript** – Quiz logic, DOM manipulation, scoring, and messaging (`script.js`).[file:20]

No external libraries or frameworks required.

---

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/quiz-game.git
   cd quiz-game
   ```

2. **Run the game**:

   **Option 1: Open directly**  
   - Double-click `index.html` and open it in your browser.  

   **Option 2: Use a simple local server (recommended)**  
   ```bash
   # Python 3
   python -m http.server 8000
   # then visit http://localhost:8000 in your browser
   ```

That’s it – no build tools, no package installs. 🎉

---

## 🎮 How to Play

1. On the **Start Screen**, click **“Start Quiz”** to begin. ▶️[file:19]  
2. On the **Quiz Screen**:
   - Read the question at the top.  
   - Click one of the answer buttons to make your choice.  
   - Your selected answer is immediately marked as:
     - ✅ Correct (highlighted in a success color), or  
     - ❌ Incorrect (highlighted in an error color), while the correct answer is also shown.[file:20][file:21]  
   - Your **score** and the **progress bar** update as you go.[file:20][file:21]

3. After the last question, the **Result Screen** appears:
   - You’ll see: **“You scored X out of Y.”**[file:19][file:20]  
   - A performance message appears, such as:
     - 🌟 *Perfect! You’re a genius!*  
     - 💪 *Great Job! You know your stuff!*  
     - 📚 *Keep Studying! You’ll get better!*[file:20]

4. Click **“Restart Quiz”** 🔄 to play again from the beginning.[file:19][file:20]

---

## 🧱 Project Structure

```text
.
├── index.html   # Main page: start, quiz, and result screens
├── style.css    # Styling for layout, buttons, progress bar, and responsiveness
└── script.js    # Quiz logic: questions, scoring, progress, and result messages
```

- `index.html` defines three main screens:  
  - `#start-screen` – Intro and **Start Quiz** button  
  - `#quiz-screen` – Question text, answers, score, progress bar  
  - `#result-screen` – Final score and performance message, restart button[file:19]  

- `style.css` includes:  
  - Centered card-style layout  
  - Button hover states  
  - Correct/incorrect answer color states  
  - Responsive tweaks for smaller screens[file:21]  

- `script.js` handles:  
  - `quizQuestions` array (questions + answers + `isCorrect` flags)  
  - Quiz state (`currentQuestionIndex`, `score`)  
  - Functions to start the quiz, render questions, handle answer selection, update progress, and show results.[file:20]

---

## 🎨 Customization

You can easily make the quiz your own:

- ✏️ **Edit Questions**  
  - Modify the `quizQuestions` array in `script.js` to change question text, options, and which answer is correct.[file:20]

- 🎭 **Change Styling / Theme**  
  - Update colors, fonts, border radius, and spacing in `style.css` for a new look (e.g., dark mode, brand colors, etc.).[file:21]

- 💬 **Adjust Result Messages**  
  - In `showResult` (inside `script.js`), adjust the score thresholds and messages to match your tone and difficulty.[file:20]

---

## 🔮 Future Improvements

Ideas to extend this project:

- ⏱ Add a countdown timer per question or for the entire quiz.  
- 📂 Add categories (e.g., General Knowledge, Programming, History).  
- 🏆 Save and display high scores using `localStorage`.  
- 📊 Show a review screen listing which questions were answered incorrectly.

---

## 📜 License

This project is currently unlicensed.  
You can add an open-source license (for example, **MIT License**) by creating a `LICENSE` file and updating this section accordingly.
