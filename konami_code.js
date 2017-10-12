const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const webPage = document.body
  webPage.addEventListener('keydown', triggerKeyDown)

  let i = 0;

  function triggerKeyDown(letter) {

    if(parseInt(letter.detail) === code[i]){
      i++;
      if (i === code.length){
        window.alert("Konami!");
        i = 0;
      }
    }else {
      i = 0;
    }
    return;
  }
  return;
}
