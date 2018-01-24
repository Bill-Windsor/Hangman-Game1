// Hangman Game Engine

	var gameAgain = "Y";
	var playAgain = true;

	var categoryArray = ["Night", "Outcome", "Invention"];

	var nightArray = ["somnambulist", "nocturnal", "twilight", "midnight", "sundown", "sleep", "evening", "slumber"];

	var outcomeArray = ["success", "victory", "unresolved", "completed", "unresolved", "travesty", "closure", "victorious", "triumph"];

	var inventionArray = ["contraption", "innovation", "creation", "patentable", "gizmo", "technology", "innovative", "product", "transformation"];

	while (playAgain)  {

	var categorySelect = (Math.floor(Math.random() * 3));

		if (categorySelect === 0)  {
			console.log("Category: night time");
			var mysteryWord = nightArray[Math.floor(Math.random() * nightArray.length)];
		}
		else if (categorySelect === 1)  {
			console.log("Category: outcome");
			var mysteryWord = outcomeArray[Math.floor(Math.random() * outcomeArray.length)];
		}
		else if (categorySelect === 2)  {
			console.log("Category: invention");
			var mysteryWord = inventionArray[Math.floor(Math.random() * inventionArray.length)];
		}

		var answerArray = [];
		for (var i = 0; i < mysteryWord.length; i++ )  {
			answerArray[i] = "_";
		}

		var lettersGuessed = [];
		var remainingLetters = mysteryWord.length;
		var lettersCorrect = 0;
		var guessCorrect = 0;
		var maxWrongGuesses = 15;
		var guess = "";
		var numberWins = 0;

		document.getElementById("numWins").innerHTML = numberWins;
		document.getElementById("categorySel").innerHTML = categoryArray[categorySelect];
		document.getElementById("wordSel").innerHTML = mysteryWord;
		document.getElementById("continueLetter").innerHTML = answerArray.join(" ");

		while ((remainingLetters > 0) & (maxWrongGuesses != 0))  {


		while ((remainingLetters > 0) & (maxWrongGuesses != 0))  {

			document.onkeyup = function (event)  {
				var guess = lettersGuessed.concat(guess);
				console.log(lettersGuessed);
				var wordDisplay = "<p>" + lettersGuessed.join(" ") + "</p>";
				document.getElementById("lettersGuess").innerHTML = wordDisplay;
			}

/*
			document.onkeyup = function (event)  {
				var guess = letterGuess.concat(guess);
				console.log(letterGuess);
				var wordDisplay = "<p>" + letterGuess.join(" ") + "</p>";
				document.getElementById("letter-guessed").innerHTML = wordDisplay;
			}

			document.addEventListener('keypress', (event) => {
			guess = event.key;
 			});

*/


			lettersGuessed = lettersGuessed.concat(guess);

			document.getElementById("lettersLog").innerHTML = lettersGuessed;
			document.getElementById("numGuessesRemaining").innerHTML = maxWrongGuesses;

			for (var j = 0; j < mysteryWord.length; j++)  {
					if (mysteryWord[j] === guess)  {
						lettersCorrect++;
						guessCorrect++;
						remainingLetters--;
						answerArray[j] = guess;
					}
				}
				if (guessCorrect === 0)  {
					maxWrongGuesses--;
				}

			guessCorrect = 0;

			document.getElementById("numGuessesRemaining").innerHTML = maxWrongGuesses;
		}

		if (lettersCorrect === mysteryWord.length)  {
			numberWins++;
			document.getElementById("numWins").innerHTML = numberWins;
			alert("Congratulations, you guessed the correct word:  " + answerArray.join(""));
		}
	}
	playAgain = false;
}

/*
			gameAgain = prompt("Play again? (Y/N)");
			if (gameAgain === "Y")  {
				playAgain = true;
			}
				else if (gameAgain === "N")  {
				playAgain = false;
				}
				else if (gameAgain === null)  {
				playAgain = false;
				}
				else  { 
				alert("Please enter one letter answer, Y for Yes, or N for No.");
				gameAgain = prompt("Play again? (Y/N)");
				}
		}

*/
