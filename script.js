// MAd Lib with Javascript by mr. V

// Event Listener
document.getElementById(mad - lib - btn).addEventListener("click", BuildMadLib);

// Event Function
function BuildMadLib() {
  //Input
  let pluralnoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;

  //Process
  let result =
    '"There are too many ' +
    pluralnoun +
    " on this " +
    adjective +
    'airplane!", I screamed. "somebody has to ' +
    verb +
    " on the " +
    noun +
    ' to solve this problem."';

  //output
  document.getElementById("result").innerHTML = result;
}
