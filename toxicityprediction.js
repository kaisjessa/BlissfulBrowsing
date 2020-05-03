// function getText(){
//     return document.body.innerText
// }

// let allText = getText();
// let splitText = allText.split("\n").filter(word => word.length > 2);
// console.log(splitText);
// var elements = document.getElementsByTagName('*');
// console.log(elements);

// // The minimum prediction confidence.
// const threshold = 0.9;
// let filter = [];
// let num = 0;
// // Load the model. Users optionally pass in a threshold and an array of
// // labels to include.
// toxicity.load(threshold).then(model => {
//   const sentences = splitText;
//   for(let i=0; i<splitText.length; i++) {
//     model.classify([sentences[i]]).then(prediction => {
//       num = prediction[6].results[0].probabilities[1]
//       console.log(sentences[i], num);
//       if(num >= threshold) {
//         document.body.innerHTML = document.body.innerHTML.replace(sentences[i], '[removed due to toxicity]');
//       }
//     })
//   }
//   console.log(filter);
// });

console.log("PREDICTONS LOADED");