// resize the body to fit the 'screen' size
let screenView = window.innerHeight,
    body = document.body;
// change the body height with the 'screen' size
body.style.height = `${screenView}px`;
/* aim in the DOM the #score element which is an input type="range" 
   the score range is from 0 to 4
   0: happy
   4: verry worried
*/
let rangeScore = document.getElementById("score");
/* add an event listener on the #score element 
   to be able to trigger action on the user input */
rangeScore.addEventListener("input", function(){
  // aim in the DOM the #user-feelings element
  let score = document.getElementById("user-feelings");
  // fill the score within the feelings corresponding to the input range score 0 => 4
  score.innerHTML = humanFeeling(rangeScore.valueAsNumber);
  // some test in the console log
  // console.log(`VALUE >>> ${rangeScore.valueAsNumber} >>> ${humanFeeling(rangeScore.valueAsNumber)}`);
  /*
    func humanFeeling take the score and return the corresponding feeling as a text
  */
  function humanFeeling(f) {
    // var to store the text
    let userFeeling;
    if(f === 0){
        // fill the var with the text stored in the Array feelings[]
        userFeeling = `<span>😃</span> ${feelings[0]}`;
        // the func return the var with the text
        return userFeeling;
      
    } else if (f === 1) {
        userFeeling = `<span>🙂</span> ${feelings[1]}`;
        return userFeeling;
      
    } else if (f === 2) {
        userFeeling = `<span>😐</span> ${feelings[2]}`;
        return userFeeling;
      
    } else if (f === 3) {
        userFeeling = `<span>🙁</span> ${feelings[3]}`;
        return userFeeling;
      
    } else if (f === 4) {
        userFeeling = `<span>😫</span> ${feelings[4]}`;
        return userFeeling;
      
    } else {
      // won't be called but just in case…
        userFeeling === "error";
        return userFeeling;
    }
  };
});

// aim in the DOM the #save element which a simple hyperlink
var submit = document.getElementById("save");
// add an event listener to trigger action when clicked!
submit.addEventListener("click", function(evt){
  // just a simple alert() to be sure that everything is under controle ;)
  //alert(`${feelings[rangeScore.valueAsNumber]}`);
  var utterThis = new SpeechSynthesisUtterance(feelings[rangeScore.valueAsNumber]);
  utterThis.pitch = 1.2;
  utterThis.rate = 1;
  synth.speak(utterThis);
});

/* Using the Web Speech API */
// we call the speechSynthesis API and store in var synth
var synth = window.speechSynthesis;
//
var feelings = ["I'm happy and confident.", "I'm feeling ok.", "I'm a bit worried.", "I might need some time out soon.", "I'm very hungry or worried"];