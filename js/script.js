var money = 0;
var money_click = 1;
var rims_b = false;
var wide_b = false;
var pigg_b = false;
var rim_b
var money_sec = 0;

function dekk() {
    money = money + money_click;

    document.getElementById("score").innerHTML = "Du har " + money + " dekk";
}

function rim_size() {
    if (money < 2000) {
        return;
    }
    if (rim_b === false) {
        money_click = money_sec + 5;
        money = money - 2000;
        rim_b = true;
        document.getElementById("mon").innerHTML = "Tires: " + money;
        document.getElementById("mon_click").innerHTML = "TPC: " + money_click
    }
}

function rims() {
    if (money < 150) {
        return;
    }
    if (rims_b === false) {
        money_click = money_click + 5;
        money = money - 150;
        rims_b = true;
        document.getElementById("mon").innerHTML = "Tires: " + money;
        document.getElementById("mon_click").innerHTML = "TPC: " + money_click
    }
}

function wide() {
    if (money < 500) {
        return;
    }
    if (wide_b === false) {
        money_click = money_click + 10;
        money = money - 500;
        wide_b = true;
        document.getElementById("mon").innerHTML = "Tires: " + money;
        document.getElementById("mon_click").innerHTML = "TPC: " + money_click
    }
}

function pigg() {
    if (money < 1000) {
        return;
    }
    if (pigg_b === false) {
        money_click = money_click + 20;
        money = money - 1000;
        pigg_b = true;
        document.getElementById("mon").innerHTML = "Tires: " + money;
        document.getElementById("mon_click").innerHTML = "TPC: " + money_click
    }
}

var intervalId = window.setInterval(function(){
    save_var()
  }, 10000);

function load() {
    money = localStorage.getItem('mon_save');
    money = localStorage.getItem('tpc_save');
    money = localStorage.getItem('tps_save');

    x = parseInt(money, 10);
    x = isNaN(parseInt(x)) ? 0 : parseInt(x)

    document.getElementById("score").innerHTML = "Du har " + money + " dekk";

    document.getElementById("mon").innerHTML = "Tires: " + money;
    document.getElementById("mon_click").innerHTML = "TPC: " + money_click
    document.getElementById("mon_sec").innerHTML = "TPS: " + money_sec;
}

function save_var() {
    localStorage.setItem('mon_save', money);
    localStorage.setItem('tpc_save', money_click);
    localStorage.setItem('tps_save', money_sec);
}