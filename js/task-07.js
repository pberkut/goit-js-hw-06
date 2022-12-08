const fontSizeControlRef = document.querySelector('#font-size-control');
const textFontSizeRef = document.querySelector('#text');

fontSizeControlRef.addEventListener('input', isChangeFontSize);

function isChangeFontSize(event) {
  textFontSizeRef.style.fontSize = `${event.target.value}px`;
}
