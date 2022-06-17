let input = document.getElementById("input");
let nospace = document.getElementById("nospace");
let space = document.getElementById("space");
let words = document.getElementById("words");
let vowels = document.getElementById("vowels");
buttons = document.querySelector("button");
let n = 0, v = 0, m = 0, c = 0;

function myfunction() {
    const list1 = [" ", "\n", ".", "-", "!"]
    for (let i = 0; i < input.value.length; i++) {
        m = 1
        /*if (input.value.charAt(i) == " " || input.value.charAt(i) == "\n" || input.value.charAt(i) == "." || input.value.charAt(i) == "-" || input.value.charAt(i) == "!")*/
        if (list1.includes(input.value.charAt(i)))
            m = m + 1;
        else
            n = n + 1;
    }
    const vowel = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < input.value.length; i++) {
        /*if (input.value.charAt(i) == "a" || input.value.charAt(i) == "e" || input.value.charAt(i) == "i" || input.value.charAt(i) == "o" || input.value.charAt(i) == "u" || input.value.charAt(i) == "A" || input.value.charAt(i) == "E" || input.value.charAt(i) == "I" || input.value.charAt(i) == "O" || input.value.charAt(i) == "U")*/
        if (vowel.includes(input.value.charAt(i).toLowerCase()))
            v = v + 1;
        else
            c = c + 1;
    }
    if (input.value.length == 0) {
        myfunction2()
    }
    else {
        console.log(n);
        nospace.innerText = "Number of letter without space" + "  " + n;
        space.innerText = "Number of letter with space" + "  " + (input.value.length);
        words.innerText = "Number of words" + "  " + m
        vowels.innerText = "Number of vowels" + "  " + v; n = 0; m = 0; v = 0; c = 0;
    }
}

function myfunction1() {
    if (input.value == input.value.toLowerCase())
        input.value = input.value.toUpperCase();
    else
        input.value = input.value.toLowerCase();
}

/*function myfunction2() {
    for (let i = 0; i < input.value.length; i++) {
        if (input.value.charAt(i) == "." && input.value.charAt(i + 1) == " " && input.value.charAt(i + 2) == input.value.charAt(i + 2).toLowerCase()) {
            console.log(input.value.charAt(i + 2));
            console.log(i);
            a = i+2;
            console.log(a);
            chg = input.value.charAt(i + 2).toUpperCase();
            console.log(chg);
            input.value.charAt(i + 2) == chg;
            /*input.value.charAt(i+2) = input.value.charAt(i+2).toUpperCase();
        } else {
            continue;
        }
    }
}*/
function myfunction2() {
    input.value = "";
    nospace.innerText = ""
    space.innerText = ""
    words.innerText = ""
    vowels.innerText = ""
}
function myfunction3() {
    for (let i = 0; i < input.value.length; i++) {
        if (input.value.charAt(i - 1) != " " || input.value.charAt(i + 1) != " ")
            continue;
        else {
            input.value.charAt(i - 1) = "" 
            input.value.charAt(i + 1) = ""
        }
    }
}