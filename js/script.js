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
    save_var()
    reload()
  }, 7000);

function load() {
    money = localStorage.getItem('mon_save');
    money_click = localStorage.getItem('tpc_save');
    money_sec = localStorage.getItem('tps_save');
    rims_b = localStorage.getItem('rims_b');
    wide_b = localStorage.getItem('wide_b');
    pigg_b = localStorage.getItem('pigg_b');
    rim_b = localStorage.getItem('rim_b');
    money = parseInt (money, 10)
    money_click = parseInt (money_click, 10)
    if (money = "NaN") {
        money = 0;
    }
    if (money_click > 0) {
        money_click = money_click;
    } else {
        money_click = 1;
    }
    

    document.getElementById("score").innerHTML = "Du har " + money + " dekk";
    document.getElementById("mon").innerHTML = "Tires: " + money;
    document.getElementById("mon_click").innerHTML = "TPC: " + money_click
    document.getElementById("mon_sec").innerHTML = "TPS: " + money_sec;
}

function save_var() {
    localStorage.setItem('rims_b', rims_b);
    localStorage.setItem('wide_b', wide_b);
    localStorage.setItem('pigg_b', pigg_b);
    localStorage.setItem('rim_b', rim_b);
    localStorage.setItem('mon_save', money);
    localStorage.setItem('tpc_save', money_click);
    localStorage.setItem('tps_save', money_sec);
}

function reload() {
    // Dårlig løsning
    // Denne er for å få tilbake bildene etter bruker har trykket på dem, og prisen kommer opp.
    // Burde heller ha en timer men gidder ikke å sette det opp.
    document.getElementById("shop_item00").innerHTML = "<img id='rims_img' src='https://www.pngall.com/wp-content/uploads/2/Alloy-Wheel-PNG-Picture.png' onclick='rims()'>"
    document.getElementById("shop_item01").innerHTML = "<img id='wide_img' src='https://i0.wp.com/timelessmuscle.com/wp-content/uploads/2017/07/15_inch_12.png?ssl=1' onclick='wide()'>"
    document.getElementById("shop_item02").innerHTML = "<img id='pigg_img' src='https://www.dekkgutta.no/uploads/1/2/3/5/123531798/published/piggdekk_2.png?1544526341' onclick='pigg()'>"
    document.getElementById("shop_item03").innerHTML = "<img id='rim_size_png' src='https://cdn.discounttire.com/sys-master/images/hc2/h9a/8812915884062/EDUwheel-size_width.png' onclick='rim_size()'>"

    document.getElementById("mon").innerHTML = "Tires: " + money;
    document.getElementById("mon_click").innerHTML = "TPC: " + money_click
    document.getElementById("mon_sec").innerHTML = "TPS: " + money_sec;
}

function kjøp(type) {
    
}