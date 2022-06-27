number1 = parseInt(document.getElementById("input1").value);
number2 = parseInt(document.getElementById("input2").value);
number3 = parseInt(document.getElementById("input3").value);
number4 = parseInt(document.getElementById("input4").value);

number1 = parseInt(localStorage.getItem("item1"));
document.getElementById("input1").value = number1;
number2 = parseInt(localStorage.getItem("item2"));
document.getElementById("input2").value = number2;
number3 = parseInt(localStorage.getItem("item3"));
document.getElementById("input3").value = number3;
number4 = parseInt(localStorage.getItem("item4"));
document.getElementById("input4").value = number4;
checkNumber()
storages()

function correctie() {
    document.getElementById('input1').removeAttribute("readonly");
    document.getElementById('input2').removeAttribute("readonly");
    document.getElementById('input3').removeAttribute("readonly");
    document.getElementById('input4').removeAttribute("readonly");
}

function opslaan() {
    document.getElementById('input1').setAttribute("readonly", true);
    number1 = parseInt(document.getElementById("input1").value);
    document.getElementById('input2').setAttribute("readonly", true);
    number2 = parseInt(document.getElementById("input2").value);
    document.getElementById('input3').setAttribute("readonly", true);
    number3 = parseInt(document.getElementById("input3").value);
    document.getElementById('input4').setAttribute("readonly", true);
    number4 = parseInt(document.getElementById("input4").value);
    checkNumber()
    storages();
}

function input1() {
    document.getElementById("input1").value = number1 + 1;
    number1 = parseInt(document.getElementById("input1").value)
    checkNumber();
    storages();
}
function input2() {
    document.getElementById("input2").value = number2 + 1;
    number2 = parseInt(document.getElementById("input2").value);
    checkNumber();
    storages();
}
function input3() {
    document.getElementById("input3").value = number3 + 1;
    number3 = parseInt(document.getElementById("input3").value);
    checkNumber();
    storages();
}
function input4() {
    document.getElementById("input4").value = number4 + 1;
    number4 = parseInt(document.getElementById("input4").value);
    checkNumber();
    storages();
}
function checkNumber() {
    if(number1 > 180) {
        document.getElementById("urenVak1").classList.add("bg-danger");
    } else {
        document.getElementById("urenVak1").classList.remove("bg-danger");
    }
    if(number2 > 120) {
        document.getElementById("urenVak2").classList.add("bg-danger");
    } else {
        document.getElementById("urenVak2").classList.remove("bg-danger");
    }
    if(number3 > 180) {
        document.getElementById("urenVak3").classList.add("bg-danger");
    } else {
        document.getElementById("urenVak3").classList.remove("bg-danger");
    }
    if(number4 > 150) {
        document.getElementById("urenVak4").classList.add("bg-danger");
    } else {
        document.getElementById("urenVak4").classList.remove("bg-danger");
    }
}
function storages() {
    localStorage.setItem("item1", number1);
    localStorage.setItem("item2", number2);
    localStorage.setItem("item3", number3);
    localStorage.setItem("item4", number4);
}