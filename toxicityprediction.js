function getText(){
    return document.body.innerText
}

let allText = getText().split("\n");
//console.log(allText);
let splitText = allText.filter(word => word.length > 2);
//console.log(splitText);
console.log("NUMBER OF PHRASES:", splitText.length);

// The minimum prediction confidence.
const threshold = 0.05;
let filter = [];
let num = 0;

toxicity.load(threshold).then(model => {
  let sentences = splitText;
  model.classify(sentences).then(prediction => {
    for(let j=0; j<prediction[6].results.length;j++) {
      filter.push(prediction[6].results[j].match);
      //console.log(prediction[6].results[j].match);
    };
    for(let i=0; i<filter.length; i++) {
      if(filter[i]==true) {
        document.body.innerHTML = document.body.innerHTML.replace(sentences[i], '[removed due to toxicity]');
        console.log(sentences[i], "REPLACED");
      }
    };
  });

});

console.log("PREDICTONS LOADED");