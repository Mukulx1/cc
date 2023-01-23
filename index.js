// molesting dua feature\
document.querySelector("#dua").addEventListener("click" ,duaa)
function duaa(){
    alert("hawwwwww!!!! you're molesting her😱😱😱😱😱😱😱😱😱")
    console.log("hawwwwww!!!! you're molesting her😱😱😱😱😱😱😱😱😱")
    document.querySelector("#sos").style.display = "unset";
}


// music which plays 
let sound = new Audio("images/lipamusic.aac");
console.log("working");
document.querySelector("#dancelipa").addEventListener("click", sing)
function sing(){
    sound.play();
}


// car calculator
document.getElementById('main-btn').addEventListener( "click" , calculator)

function calculator(){
let distancejs = document.querySelector("#distance").value;
let peoplejs = document.querySelector("#people").value;

let amountOfPetrol = distancejs * 9;
let moneyPerPerson = amountOfPetrol/peoplejs

document.querySelector("#money").innerText = moneyPerPerson +" per person";
}



