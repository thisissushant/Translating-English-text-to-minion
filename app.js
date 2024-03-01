const inputArea = document.querySelector("#input-area");
const processingBtn = document.querySelector("#processing-btn");
const outputArea = document.querySelector("#output-area");
const btns = document.querySelector("#btns");

const getURL = (inputText) => {
  const encodedInputText = encodeURI(inputText);

  return (
    "	https://api.funtranslations.com/translate/minion.json" +
    `?text=${encodedInputText}`
  );
};

const handleProcessingBtnClick = () => {
  fetch(getURL(inputArea.value))
    .then((response) => response.json())
    .then((json) => {
      outputArea.innerText = json.contents.translated;
    })
    .catch(() => alert("Some Error Occurs"));
};

processingBtn.addEventListener("click", handleProcessingBtnClick);
