let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let newQuoteBtn = document.querySelector("button");
let copyButton = document.querySelector(".copy");
let soundButton = document.querySelector(".sound");

function newQuote() {
  newQuoteBtn.textContent = "Loading Quote...";
  newQuoteBtn.style.opacity = "0.7";
  newQuoteBtn.disabled = true;
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quote.innerHTML = data.content;
      author.innerHTML = data.author;
      newQuoteBtn.textContent = "New Quote";
      newQuoteBtn.style.opacity = "1";
      newQuoteBtn.disabled = false;
    });
}
newQuoteBtn.addEventListener("click", newQuote);
copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(quote.textContent);
});
soundButton.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(
    `${quote.textContent} by ${author.textContent}`
  );
  speechSynthesis.speak(utterance);
});
