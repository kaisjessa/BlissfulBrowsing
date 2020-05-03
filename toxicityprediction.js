// get all text from the current html page
function getText(){
    return document.body.innerText
}

// call getText()
let allText = getText().split("\n");
// split into phrases
let splitText = allText.filter(word => word.length > 2);
console.log("NUMBER OF PHRASES:", splitText.length);

// The minimum prediction confidence.
const threshold = 0.05;
// boolean values for whether each phrase is toxic
let filter = [];
// call the TensorFlow.js sentiment analysis model
toxicity.load(threshold).then(model => {
  let sentences = splitText;
  // predict toxicity using the model
  model.classify(sentences).then(prediction => {
    for(let j=0; j<prediction[6].results.length;j++) {
      // push the boolean value to the array
      filter.push(prediction[6].results[j].match);
    };
    // if a phrase is toxic, replace it in the current page
    for(let i=0; i<filter.length; i++) {
      if(filter[i]==true) {
        document.body.innerHTML = document.body.innerHTML.replace(sentences[i], '[removed due to toxicity]');
        console.log(sentences[i], "REPLACED");
      }
    };
  });

});

console.log("PREDICTONS LOADED");