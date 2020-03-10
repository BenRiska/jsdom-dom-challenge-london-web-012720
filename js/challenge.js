const counter = document.querySelector("#counter");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const likes = document.querySelector(".likes");
const list = document.querySelector("#list");
const commentForm = document.querySelector("#comment-form");
const CommentInput = document.querySelector("#comment-input");
const sub = document.querySelector("#submit");

function incrementCount() {
  currentCount = parseInt(counter.innerText) + 1;
  counter.innerText = currentCount;
}

function decCount() {
  currentCount = parseInt(counter.innerText) - 1;
  counter.innerText = currentCount;
}

function incCount() {
  currentCount = parseInt(counter.innerText) + 1;
  counter.innerText = currentCount;
}

function addLikes() {
  const currentCount = parseInt(counter.innerText);
  const li = document.createElement("li");
  li.innerText = `${currentCount} has 1 like`;
  likes.appendChild(li);
}
let paused = false;
function pauseEverything() {
  if (paused == false) {
    minus.removeEventListener("click", decCount);
    plus.removeEventListener("click", incCount);
    heart.removeEventListener("click", addLikes);
    clearInterval(count);
    paused = true;
  } else {
    minus.addEventListener("click", decCount);
    plus.addEventListener("click", incCount);
    heart.addEventListener("click", addLikes);
    count = setInterval(incrementCount, 1000);
    paused = false;
  }
}

let count = setInterval(incrementCount, 1000);

minus.addEventListener("click", decCount);
plus.addEventListener("click", incCount);
heart.addEventListener("click", addLikes);
pause.addEventListener("click", pauseEverything);
commentForm.addEventListener("submit", e => {
  e.preventDefault();
  value = CommentInput.value;
  p = document.createElement("p");
  p.textContent = value;
  list.appendChild(p);
});
