// rollDice algo

function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const difficulty = document.getElementById("difficulty").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const finalResult = document.getElementById("finalResult");

    const values = [];
    const images = [];

    const fourOrMore = [];
    var fourOrMoreCount = 0;

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="dice: ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
    
    for (var i = 0; i < values.length; i++) {
        if (values[i]>=4) {
            var x = i;
            fourOrMore.push(x);
        }
    }

    fourOrMoreCount = fourOrMore.length;

    if (fourOrMoreCount>=difficulty) {
        finalResult.textContent = `Success`
        finalResult.style.color = "Green"
    }
    else {
        finalResult.textContent = "Fail"
        finalResult.style.color = "Red"
    }

}