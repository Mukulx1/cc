// molesting dua feature\
document.querySelector("#dua").addEventListener("click" ,duaa)
function duaa(){
    alert("hawwwwww!!!! you're molesting herπ±π±π±π±π±π±π±π±π±")
    console.log("hawwwwww!!!! you're molesting herπ±π±π±π±π±π±π±π±π±")
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
let pp = distancejs * 2;
let amountOfPetrol = pp * 8.2;
let moneyPerPerson = amountOfPetrol/peoplejs

document.querySelector("#money").innerText = moneyPerPerson +" per person";
}



