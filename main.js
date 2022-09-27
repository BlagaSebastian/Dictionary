const dictionary = [];

function searchWord(searchedWord) {
    for (let i = 0; i < dictionary.length; ++i) {
        if (searchedWord.toUpperCase() === dictionary[i].toUpperCase()) {
            return true;
        }
    }
    return false;
}

function addWord() {
    let word = document.querySelector('#addWord').value;
    if (/^[a-zA-Z]+$/.test(word)) {
        if (searchWord(word)) {
            alert("This word is already present in the dictionary.");
        } else {
            dictionary.push(word);
        }
    } else {
        alert("Please enter a word.");
    }
    document.getElementById('addWord').value = '';
}

function checkPresence() {
    let searchedWord = document.querySelector("#searchWord").value;
    if (searchWord(searchedWord)) {
        findWord.innerHTML = "The word is present in the dictionary.";
        document.getElementById("findWord").style.color = "green";
    } else {
        findWord.innerHTML = "I can not find this word in the dictionary.";
        document.getElementById("findWord").style.color = "red";
    }
    document.getElementById('searchWord').value = '';
}
