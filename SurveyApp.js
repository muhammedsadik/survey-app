const invalidEntry = "Invalid Entry.";
const exitSurvey = "You exited the survey.";
const validAnswers = ["a", "b", "c", "d"];

let ans;
const answer = {};

const survey = [
  {
    question: "What is your favorite color?",
    options: { a: "Red", b: "Blue", c: "Green", d: "Yellow" }
  },
  {
    question: "What is your favorite season?",
    options: { a: "Spring", b: "Summer", c: "Autumn", d: "Winter" }
  },
  {
    question: "Which country would you like to visit?",
    options: { a: "Japan", b: "France", c: "Italy", d: "Canada" }
  },
  {
    question: "What kind of music do you enjoy the most?",
    options: { a: "Pop", b: "Rock", c: "Classical", d: "Jazz" }
  },
  {
    question: "How do you usually spend your weekends?",
    options: { a: "Watching movies", b: "Going out with friends", c: "Reading books", d: "Playing sports" }
  }
];

for (const item of survey) {
  ans = prompt(item.question + ":\nA : " + item.options.a + "\nB : " + item.options.b + "\nC : " + item.options.c + "\nD : " + item.options.d);

  if (ans === null) {
    alert(exitSurvey);
    break;
  }

  if (!validAnswers.includes(ans?.toLowerCase())) {
    answer[item.question] = invalidEntry;
    continue;
  }

  answer[item.question] = item.options[ans.toLowerCase()];

}

if (Object.keys(answer).length > 0) {
  console.log(answer);
}