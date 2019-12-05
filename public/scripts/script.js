let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let displayWords = document.getElementById("displayWords");

document.getElementById("addWords").addEventListener("click", addWords);
document.getElementById("search").addEventListener("click", translate);

function addWords() {
  let words = {
    word1: input1.value,
    word2: input2.value
  };

  fetch("api/word", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(words)
  })
    .then(r => r.text())
    .then(t => alert(t));
}

function translate() {
  let searchWords = document.getElementById("searchWords");

  fetch("api/word?w=" + searchWords.value)
    .then(r => r.json())
    .then(w => (displayWords.innerHTML = w.word1 + " " + w.word2));
}
