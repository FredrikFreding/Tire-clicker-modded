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
    } else {
        if (money > 2000) {
            var myNode = document.getElementById("shop_item03");
            while (myNode.firstChild) {
                    myNode.removeChild(myNode.lastChild);
                  }
            document.getElementById("shop_item03").innerHTML = "<p><b>Pris:</b> 2000</p><br> <p><b>MPC:</b> + 5<br><button class='w-50' onclick=('kjøp(rim_s)')>Kjøp</button>"
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
  }, 5000);

function reload() {
    // Dårlig løsning
    // Denne er for å få tilbake bildene etter bruker har trykket på dem, og prisen kommer opp.
    // Burde heller ha en timer som starter etter man har trykket, men gidder ikke å sette det opp.
    document.getElementById("shop_item00").innerHTML = "<img id='rims_img' src='https://www.pngall.com/wp-content/uploads/2/Alloy-Wheel-PNG-Picture.png' onclick='rims()'>"
    document.getElementById("shop_item01").innerHTML = "<img id='wide_img' src='https://i0.wp.com/timelessmuscle.com/wp-content/uploads/2017/07/15_inch_12.png?ssl=1' onclick='wide()'>"
    document.getElementById("shop_item02").innerHTML = "<img id='pigg_img' src='https://www.dekkgutta.no/uploads/1/2/3/5/123531798/published/piggdekk_2.png?1544526341' onclick='pigg()'>"
    document.getElementById("shop_item03").innerHTML = "<img id='rim_size_png' src='https://cdn.discounttire.com/sys-master/images/hc2/h9a/8812915884062/EDUwheel-size_width.png' onclick='rim_size()'>"

    document.getElementById("mon").innerHTML = "Tires: " + money;
    document.getElementById("mon_click").innerHTML = "TPC: " + money_click
    document.getElementById("mon_sec").innerHTML = "TPS: " + money_sec;
}

function load(type) {
    if (type === "shop") {
        document.getElementById("innhold").innerHTML = "<div id='shop'><h1>Item shop</h1><div id='items_shop'><div class='fuckoff'><div class='shop_item' id='shop_item00'><img id='rims_img' src='https://www.pngall.com/wp-content/uploads/2/Alloy-Wheel-PNG-Picture.png' onclick='rims()'></div><div class='shop_item' id='shop_item01'><img id='wide_img' src='https://i0.wp.com/timelessmuscle.com/wp-content/uploads/2017/07/15_inch_12.png?ssl=1' onclick='wide()'></div><div class='shop_item' id='shop_item02'><img id='pigg_img' src='https://www.dekkgutta.no/uploads/1/2/3/5/123531798/published/piggdekk_2.png?1544526341' onclick='pigg()'></div></div><div class='fuckoff'><div class='shop_item' id='shop_item03'><img id='rim_size_png' src='https://cdn.discounttire.com/sys-master/images/hc2/h9a/8812915884062/EDUwheel-size_width.png' onclick='rim_size()'></div><div class='shop_item'><p>g</p></div><div class='shop_item'><p>g</p></div></div><div class='fuckoff'><div class='shop_item'><p>g</p></div><div class='shop_item'><p>g</p></div><div class='shop_item'><p>g</p></div></div></div></div><div id='info'><h1>Bruker</h1><p id='mon'></p><p id='mon_click'></p><p id='mon_sec'></p></div>"
        reload()
    }
    if (type === "game") {
        document.getElementById("innhold").innerHTML = "<div id='game'><h1 id='overskrift'>Tire clicker</h1><h1 id='score'>Du har 0 dekk</h1><div id='tire' onclick='dekk()'><img src='/media/dekk.png'></div></div><div id='display_shop'><div class='items'><p>g</p></div><div class='items'><p>g</p></div><div class='items'><p>g</p></div><div class='items'><p>g</p></div><div class='items'><p>g</p></div><div class='items'><p>g</p></div></div>"
        reload()
    }
}

function kjøp(type) {
    if (type === "rim_s") {
        money_click = money_click + 5;
        money = money - 2000;
        rim_b = true;
        document.getElementById("mon").innerHTML = "Tires: " + money;
        document.getElementById("mon_click").innerHTML = "TPC: " + money_click;
    }
}