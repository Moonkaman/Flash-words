let btn = document.querySelector('.btn');
let wpm = document.querySelector('.wpm');
let text = document.querySelector('.the-text');
let flashHere = document.querySelector('.flash-text');

btn.addEventListener('click', function() {
  console.log((60/wpm.value)*1000);
  let textArray = text.value.split(' ');
  (function theLoop (i) {
    setTimeout(function () {
      flashHere.innerHTML = textArray[i];
      if (i < textArray.length-1) {
        i++;          // If i > 0, keep going
        theLoop(i);       // Call the loop again, and pass it the current value of i
      }
    }, (60/wpm.value)*1000);
  })(0);
})