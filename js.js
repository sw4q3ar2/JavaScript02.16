window.addEventListener("load", init)

function init() {
    console.log("mehh")

    var valt1;
    let valt2 = 2;
    const valt3 = 2;

    console.log(typeof valt1);
    console.log(typeof valt2);
    console.log(typeof valt3);

    let logikai = 3 < 6;
    console.log("logikai", logikai, typeof logikai);

    let eredmeny = valt1 + valt2;
    console.log("eredmeny", eredmeny, typeof eredmeny);

    elagazas();
    ciklus();
}

function elagazas() {
    console.log("*** elagazas ***")
    var szam = 19;

    if ((szam % 2 == 0) && (szam % 3 == 0)) {
        console.log("paros");
    } else if (szam % 2 == 0) {
        console.log("paros");
    } else if (szam % 3 == 0) {
        console.log("3mal oszthato");
    } else {
        console.log("nem oszthato");
    }

    //  Tobbagu elagazas
    //  Veletlen szam 1-7
    var nap = parseInt(Math.random() * 7) + 1;

    switch (nap) {
        case 1:
            console.log("Hetfo");
            break;
        case 2:
            console.log("Kedd");
            break;
        case 3:
            console.log("Szerda");
            break;
        case 4:
            console.log("Csutortok");
            break;
        case 5:
            console.log("Pentek");
            break;
        case 6:
            console.log("Szombat");
            break;
        case 7:
            console.log("Vasarnap");
            break;
        default:
            console.log("Ez nem egy het napja!")
    }
}

function ciklus() {
    console.log("*** ciklus ***")

    for (let index = 0; index < 10; index++) {
        // random [100,500] kozott
        var vszam = parseInt(Math.random() * 401) + 100;

        console.log(vszam);

    }

    do {
        var vszam = parseInt(Math.random() * 31) - 20;
        console.log(vszam)
    }
    while (vszam <= 0);

    var vszam = parseInt(Math.random() * 31) - 20;
    while (vszam <= 0) {

        console.log(vszam)

        var vszam = parseInt(Math.random() * 31) - 20;
    }
}