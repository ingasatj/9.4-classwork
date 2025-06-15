// Homework 4: Counter Button
// Question: Create a button that counts how many times it has been clicked and displays the number.
const countSpan = document.querySelector("#count");
const btn = document.querySelector("#countBtn");

let count = 0;

btn.addEventListener("click", () => {
  count++;
  countSpan.textContent = count;
});
