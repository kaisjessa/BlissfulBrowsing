function getText(){
    return document.body.innerText
}

function getContent() {
  words = [];
  var elements = document.getElementsByTagName('*');
  for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      for (var j = 0; j < element.childNodes.length; j++) {
          var node = element.childNodes[j];
          if (node.nodeType === 3) {
              var text = node.nodeValue;
              words.push(text);
          }
      }
  }
  return words;
}

let allText = getText().split("\n");
//console.log(allText);
let splitText = allText.filter(word => word.length > 2);
//console.log(splitText);
console.log("NUMBER OF PHRASES:", splitText.length);

// The minimum prediction confidence.
const threshold = 0.5;
let filter = [];
let num = 0;
// Load the model. Users optionally pass in a threshold and an array of
// labels to include.
// WORKS BUT SLOW
// toxicity.load(threshold).then(model => {
//   const sentences = splitText;
//   for(let i=0; i<sentences.length; i++) {
//     model.classify([sentences[i]]).then(prediction => {
//       if(prediction[6].results[0].match == true) {
//         document.body.innerHTML = document.body.innerHTML.replace(sentences[i], '[removed due to toxicity]');
//         console.log(sentences[i], "REPLACED");
//       }
//     })
//   }
// });

// WORKS BUT CRASHES A LOT
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