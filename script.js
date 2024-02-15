const number = document.getElementById("number");

const body = document.body;

const getColour = () => {
    switch(number.value){
        case "zero":
            body.style.backgroundColor = "brown";
            break;
            
        case "one":
            body.style.backgroundColor = "aqua";
            break;

        case "two":
            body.style.backgroundColor = "yellow";
            break;

        case "three":
            body.style.backgroundColor = "orange";
            break;

        case "four":
            body.style.backgroundColor = "green";
            break;

        case "five":
            body.style.backgroundColor = "lightblue";
            break;

        case "six":
            body.style.backgroundColor = "wheat";
            break;

        case "seven":
            body.style.backgroundColor = "purple";
            break;

        case "eight":
            body.style.backgroundColor = "pink";
            break;

        case "nine":
            body.style.backgroundColor = "#99ff66";
            break;

        default:
            body.style.backgroundColor = "white";
            break;
    }
}