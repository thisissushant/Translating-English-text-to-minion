var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "	https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("somthing wrong with server! Please try again later")
}
function clickHandler() {
    var InputText = txtInput.value;

    fetch (getTranslationURL(InputText))
    .then(response => response.json())
    .then(json => {
        varTranslatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)