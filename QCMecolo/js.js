// const questions = [
//   {
//     question: "Je m'appelle comment?",

//     reponses: [
//       { text: "Saad", correct: true },
//       { text: "youssef", correct: false },
//       { text: "akram", correct: false },
//       { text: "Maui", correct: false },
//     ],
//   },
//   {
//     question: "Maui s'appel comment",

//     reponses: [
//       { text: "Saad", correct: false },
//       { text: "youssef", correct: false },
//       { text: "akram", correct: false },
//       { text: "Maui", correct: true },
//     ],
//   },
// ];
// const questionElement = document.getElementById("question");
// const answerbutton = document.getElementById("answer-buttons");
// const nextbutton = document.getElementById("next-btn");
// let questionIndex = 0;
// let score = 0;
// function commencerLeQcm() {
//   questionIndex = 0;
//   score = 0;
//   nextbutton.innerHTML = "Next";
//   showQuestion();
// }
// function showQuestion() {
//   resest();
//   let laQuestion = questions[questionIndex];
//   let questionNo = questionIndex + 1;
//   questionElement.innerHTML = questionNo + ". " + laQuestion.question;
//   laQuestion.reponses.forEach((reponse) => {
//     const button = document.createElement("button");
//     button.innerHTML = reponse.text;
//     button.classList.add("btn");
//     answerbutton.appendChild(button);
//     button.addEventListener();
//     if (reponse.correct) {
//       button.dataset.correct = answer.correct;
//     }
//     answerbutton.appendChild("click", selectAnswer);
//   });
// }
// function resest() {
//   nextbutton.style.display = "none";
//   while (answerbutton.firstChild) {
//     answerbutton.removeChild(answerbutton.firstChild);
//   }
// }
// function selectAnswer() {
//   const selectbtn = e.target;
//   const isCorrect = selectbtn.dataset.correct === "true";
//   if (isCorrect) {
//     selectbtn.classList.add("correct");
//   } else {
//     selectbtn.classList.add("incorrect");
//   }
// }
// commencerLeQcm();
const questions = [
  {
    question: "Quel est le principal gaz responsable de l'effet de serre ?",
    reponses: [
      { text: "Oxygène", correct: false },
      { text: "Dioxyde de carbone (CO2)", correct: true },
      { text: "Azote", correct: false },
      { text: "Méthane", correct: false },
    ],
  },
  {
    question:
      "Quelle est la principale source de déforestation dans le monde ?",
    reponses: [
      { text: "Exploitation minière", correct: false },
      { text: "Agriculture", correct: true },
      { text: "Urbanisation", correct: false },
      { text: "Industrie du bois", correct: false },
    ],
  },
  {
    question:
      "Quel pourcentage des déchets plastiques finit-il dans les océans chaque année ?",
    reponses: [
      { text: "Environ 5%", correct: false },
      { text: "Environ 25%", correct: false },
      { text: "Environ 50%", correct: false },
      { text: "Environ 80%", correct: true },
    ],
  },
  {
    question:
      "Qu'est-ce que l'empreinte écologique mesure-t-elle principalement ?",
    reponses: [
      { text: "La quantité de CO2 émise par personne", correct: false },
      {
        text: "La superficie de terres nécessaires pour soutenir le mode de vie d'une personne",
        correct: true,
      },
      {
        text: "Le nombre d'espèces en voie de disparition dans une région",
        correct: false,
      },
      {
        text: "La qualité de l'air dans une zone géographique",
        correct: false,
      },
    ],
  },
  {
    question:
      "Quel pourcentage des espèces animales est menacé d'extinction en raison de l'activité humaine ?",
    reponses: [
      { text: "Environ 10%", correct: false },
      { text: "Environ 25%", correct: false },
      { text: "Environ 50%", correct: true },
      { text: "Environ 75%", correct: false },
    ],
  },
  {
    question:
      "Quel est l'impact le plus direct de la pollution lumineuse sur l'environnement ?",
    reponses: [
      { text: "Destruction des habitats naturels", correct: false },
      {
        text: "Perturbation des cycles de sommeil des animaux",
        correct: true,
      },
      { text: "Augmentation de la température globale", correct: false },
      {
        text: "Augmentation du niveau de CO2 dans l'atmosphère",
        correct: false,
      },
    ],
  },
  {
    question:
      "Quel est le principal gaz à effet de serre libéré par l'industrie de l'élevage ?",
    reponses: [
      { text: "Oxygène", correct: false },
      { text: "Dioxyde de carbone (CO2)", correct: false },
      { text: "Méthane", correct: true },
      { text: "Gaz fluorés", correct: false },
    ],
  },
  {
    question:
      "Quel phénomène climatique est associé à la disparition progressive des glaciers ?",
    reponses: [
      { text: "Érosion des côtes", correct: false },
      { text: "El Niño", correct: false },
      { text: "La montée du niveau de la mer", correct: true },
      { text: "Cyclones tropicauxaui", correct: false },
    ],
  },
  {
    question:
      "Quel est le nom de la plus grande zone morte océanique du monde, résultat de la pollution ?",
    reponses: [
      { text: "La Grande Barrière de Corail", correct: false },
      { text: "Golfe du Mexique", correct: true },
      { text: "Mer Baltique", correct: false },
      { text: "Mer d'Aral", correct: false },
    ],
  },
  {
    question:
      "Quelle est la principale cause de la dégradation des récifs coralliens ?",
    reponses: [
      { text: "La pollution plastique", correct: false },
      {
        text: "Le changement climatique et le réchauffement des océans",
        correct: true,
      },
      { text: "La surpêche", correct: false },
      { text: "La déforestation", correct: false },
    ],
  },
  {
    question:
      "Quel type de pollution est responsable de la formation des îles de déchets dans les océans ?",
    reponses: [
      { text: "Pollution sonore", correct: false },
      { text: "Pollution lumineuse", correct: false },
      { text: "Pollution plastique", correct: true },
      { text: "Pollution chimique", correct: false },
    ],
  },
  {
    question:
      "Quel est le principal contributeur à la production de gaz méthane ?",
    reponses: [
      { text: "Industrie pétrolière", correct: false },
      { text: "Élevage de bétail", correct: true },
      { text: "Déforestation", correct: false },
      { text: "Décharges de déchets", correct: false },
    ],
  },
  {
    question: "Qu'est-ce que l'effet de serre naturel ?",
    reponses: [
      {
        text: "Processus de capture de la chaleur par l'atmosphère",
        correct: true,
      },
      {
        text: "Augmentation soudaine de la température mondiale",
        correct: false,
      },
      { text: "Accumulation de plastique dans les océans", correct: false },
      {
        text: "Diminution des niveaux d'oxygène dans l'atmosphère",
        correct: false,
      },
    ],
  },
  {
    question: "Quel phénomène est associé à l'acidification des océans ?",
    reponses: [
      { text: " Augmentation des populations de plancton", correct: false },
      { text: "Destruction des récifs coralliens", correct: true },
      { text: "Augmentation de la biodiversité marine", correct: false },
      {
        text: "Diminution de la concentration de CO2 dans l'eau",
        correct: false,
      },
    ],
  },
  {
    question:
      "Quel est l'objectif principal de l'Accord de Paris sur le climat ?",
    reponses: [
      {
        text: "Limiter l'augmentation de la température mondiale à moins de 1,5°C",
        correct: true,
      },
      {
        text: "Réduire de moitié les émissions de CO2 d'ici 2050",
        correct: false,
      },
      {
        text: "Arrêter complètement l'utilisation des combustibles fossiles",
        correct: false,
      },
      {
        text: "Encourager la plantation massive d'arbres à travers le monde",
        correct: false,
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let questionIndex = 0;
let score = 0;
start = false;

function commencerLeQcm() {
  start = true;
  questionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion(questionIndex);
}

function showQuestion(id = 0) {
  reset();
  let currentQuestion = questions[id];
  let questionNo = id + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.reponses.forEach((reponse) => {
    const button = document.createElement("button");
    button.innerHTML = reponse.text;
    button.classList.add("btn");
    if (reponse.correct) {
      button.dataset.correct = reponse.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButton.appendChild(button);
  });
}

function reset() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
commencerLeQcm();
function voirLeScore() {
  reset();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.style.display = "block";
}
function handleNextButton() {
  questionIndex++;
  if (questionIndex < questions.length) {
    showQuestion(questionIndex);
  } else {
    voirLeScore();
    nextButton.style.display = "none";
  }
}
nextButton.addEventListener("click", () => {
  handleNextButton();
});
