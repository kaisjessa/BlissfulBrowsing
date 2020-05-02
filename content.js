function getText(){
    return document.body.innerText
}

let allText = getText();
let splitText = allText.split("\n");
for(i=0; i<splitText.length; i++) {
	console.log(splitText[i]);
}