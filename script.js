// Selecting the toggle button
const button = document.querySelector("#toggle_button");

const useDark = window.matchMedia("(prefers-color-scheme: dark)");

console.log(useDark);

function toggleDarkMode(state) {
    document.documentElement.classList.toggle("dark-mode", state);
    document.querySelector(".highlight h2").classList.toggle("dark-mode-h2", state);
    document.querySelector(".dark").classList.toggle("dark-mode-h2", state);
    document.querySelector("#request h2").classList.toggle("dark-mode-h2", state);
    document.querySelector("#request p").classList.toggle("dark-mode-p", state);
}

console.log(document.documentElement)

toggleDarkMode(useDark.matches);

useDark.addListener((evt) => toggleDarkMode(evt.matches));

button.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
    document.querySelector(".highlight h2").classList.toggle("dark-mode-h2");
    document.querySelector(".dark h2").classList.toggle("dark-mode-h2");
    document.querySelector("#request h2").classList.toggle("dark-mode-h2");
    document.querySelector("#request p").classList.toggle("dark-mode-p");
});

// Animations //

const properties = {
  duration: 1000,
  iterations: Infinity,
  direction: "alternate",
  easing: "ease-in-out"
};

const keyframes = [{
    transform: "translateY(1rem)"
  },
  {
    transform: "translateY(0,0)"
  }
];

const keyframes2 = [{
    transform: "rotate(10deg)"
  },
  {
    transform: "rotate(0deg)"
  }
];

const keyframes3 = [{
    transform: "rotate(-10deg)"
  },
  {
    transform: "rotate(0deg)"
  }
];

const icon1 = document.querySelector("#animated-icon1");
const icon2 = document.querySelector("#animated-icon2");
const blueAlpaca = document.querySelector("#blue-alpaca");
const orangeAlpaca = document.querySelector("#orange-alpaca");
blueAlpaca.animate(keyframes, properties);
orangeAlpaca.animate(keyframes, properties);
icon1.animate(keyframes2, properties);
icon2.animate(keyframes3, properties);
