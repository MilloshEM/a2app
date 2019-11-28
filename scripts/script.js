let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let displayWords = document.getElementById('displayWords');
const form = document.getElementById("registration-form");
const submitButton = form.querySelector("button");


class Words {
	constructor(word1, word2)
	{
		this.word1 = word1;
		this.word2 = word2;
	}
}

	 function pushWords() {             //   OVA FUNKCIJA NE RADI
		/*
		PREDVIDJENO JE DA VALUE ATRIBUT INPUT ELEMENATA BUDE 
		U OVOJ FUNKCIJI I POSLAT NA SERVER, DA BI SE SA STRINGOVIMA (TEXTOM IZ INPUTA)
		ISPISAO JSON FAJL (words1.json).
		*/

		class Words {
			constructor(word1, word2)
			{
				this.word1 = word1;
				this.word2 = word2;
			}
		}

		const wordsAgain = [];
		let pusher = new Words(input1.value, input2.value);
			wordsAgain.push(pusher);
			console.log(wordsAgain);
			let xhttp = new XMLHttpRequest();
			let url = "words1.json";
			xhttp.open("POST", url, true);
			xhttp.setRequestHeader('Content-type', 'text/plain');
			xhttp.onreadystatechange = function() {
				if(xhttp.readyState == 4 && xhttp.status == 200) {
					alert(xhttp.responseText);
				}
				
			}
			
			xhttp.send(JSON.stringify(wordsAgain));                      
		
			
	};

const wordSearcher = ()=> {      //OVA FUNKCIJA RADI... ONA PRIKAZUJE REZULTAT PRETRAGE 
	                             //KORISNIKA, I TD... BICE JOS RAZVIJANA.

	let searchWords = document.getElementById("searchWords");

	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let response = JSON.parse(xhttp.responseText);
			let words = response.words1;
			console.log(words);
			 
		words.forEach(word => {
				if (word.word1 === searchWords.value || word.word2 === searchWords.value) 
					{return displayWords.innerHTML = word.word1 + ' ' + word.word2;}
				else if (searchWords.value === '') 
					{return displayWords.innerHTML = 'bitte, geben sie die Wort ein!!';}
				 })
			}
			
	}
	xhttp.open("GET", "words1.json", true);
	xhttp.send();
}

