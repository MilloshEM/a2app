let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let displayWords = document.getElementById("displayWords");
const form = document.getElementById("registration-form");
const submitButton = document.getElementById("addWordButton");

class Words {
  constructor(word1, word2) {
    this.word1 = word1;
    this.word2 = word2;
  }
}

function pushWords() {
  let xhttp = new XMLHttpRequest();
  let url = "api/word";
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      alert(xhttp.responseText);
    }
  };

  xhttp.send(JSON.stringify(new Words(input1.value, input2.value)));
}

const wordSearcher = () => {

  let searchWords = document.getElementById("searchWords");

  fetch('api/word?w='+searchWords.value)
  .then(r => r.json())
  .then(w => displayWords.innerHTML = w.word1 + " " + w.word2);

};
