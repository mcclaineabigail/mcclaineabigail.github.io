function rollDiceMath(max) {
    return Math.floor(Math.random() * max) + 1;
}

let rollDice = function() {
    let d20 = document.getElementById("d20")
    d20.addEventListener("click", () =>
        d20.innerText = rollDiceMath(20)
    );
    let d12 = document.getElementById("d12")
    d12.addEventListener("click", () =>
        d12.innerText = rollDiceMath(12)
    );
    let d10 = document.getElementById("d10")
    d10.addEventListener("click", () =>
        d10.innerText = rollDiceMath(10)
    );
    let d8 = document.getElementById("d8")
    d8.addEventListener("click", () =>
        d8.innerText = rollDiceMath(8)
    );
    let d6 = document.getElementById("d6")
    d6.addEventListener("click", () =>
        d6.innerText = rollDiceMath(6)
    );
    let d4 = document.getElementById("d4")
    d4.addEventListener("click", () =>
        d4.innerText = rollDiceMath(4)
    );

}

export { rollDice }