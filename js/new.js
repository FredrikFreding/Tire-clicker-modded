var money = 0;
var money_click = 1;
var rims_b = false;
var wide_b = false;
var pigg_b = false;
var rim_b = false;
var money_sec = 0;

function dekk() {
    money = money + money_click;

    document.getElementById("score").innerHTML = "Du har " + money + " dekk";
    save_var()
}
function rim_size() {
    if (money < 2000) {
        var myNode = document.getElementById("shop_item03");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
              }
        document.getElementById("shop_item03").innerHTML = "<p><b>Pris:</b> 2000</p><br> <p><b>MPC:</b> + 5<br><p>Du har ikke nok dekk!"
        return;
    } else if (money > 2000) {
        if (money < 2000) {
            var myNode = document.getElementById("shop_item03");
            while (myNode.firstChild) {
                    myNode.removeChild(myNode.lastChild);
                  }
            document.getElementById("shop_item03").innerHTML = "<p><b>Pris:</b> 2000</p><br> <p><b>MPC:</b> + 5<br><button onclick=('kjøp(rim_s)')>Kjøp</button>"
    }
    //else if (rim_b === false ) {
      //  money_click = money_sec + 5;
        //money = money - 2000;
        //rim_b = true;
        //document.getElementById("mon").innerHTML = "Tires: " + money;
        //document.getElementById("mon_click").innerHTML = "TPC: " + money_click
    //}


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
    reload()
  }, 7000);

function save_var() {
    
}

function kjøp(type) {
    
}