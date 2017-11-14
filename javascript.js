//starten

var valgtKarakter = "";


$(window).on("load", skolegaarden);


function skolegaarden() {

    console.log("start");
    $("#graa_baggrund").hide();
    $(".knap").addClass("start");
    $(".start").addClass("puls");
    $("#offer_container").hide();
    $("#offer_mobil_container").hide();


    //    $("#offer_sprite").addClass("gaa");
    //    $("#offer_container").addClass("gaa_til_venstre");

    $("#gangen").addClass("hide");

    $(".knap").on("click", valgAfKarakter);

}
//$("#valgkarakter").on("click", valgAfKarakter);

function valgAfKarakter() {

    console.log("valg");
    $(".knap").hide();
    $("#mobber_container").removeClass();
    $("#offer_container").show();

    $("#offer_sprite").addClass("postionOffer2");
    $("#offer_container").addClass("postionOffer1");
    $("#offer_container").addClass("puls");


    $("#mobber_sprite").addClass("postion1");
    $("#mobber_container").addClass("postion2");
    $("#mobber_container").addClass("puls");



    $("#mobber_container").on("click", mobber);
    $("#offer_container").on("click", offer);

    console.log("valg Af Karakter");


}

function mobber() {
    valgtKarakter = "karina";
    gangen();
}

function offer() {
    valgtKarakter = "sofia";
    gangen();
}



function gangen() {

    console.log("gangen")

    $("#mobber_container").off("click", mobber);
    $("#offer_container").off("click", offer);

    $("#offer_sprite").removeClass("postionOffer2");
    $("#offer_container").removeClass("postionOffer1");

    $("#mobber_sprite").removeClass("postion1");
    $("#mobber_container").removeClass("postion2");

    $("#baggrund").addClass("hide")
    $("#gangen").show();

    $("#offer_container").hide();
    setTimeout(sofiaKommerInd, 2000);

}

function sofiaKommerInd() {

    $("#offer_container").show();
    $("#offer_sprite").addClass("offer_walkcycle");
    $("#offer_container").addClass("gaa_til_venstre");
    $("#offer_container").addClass("offer_position");

    $("#offer_container").on("animationend", sofiaBloeder);
}

function sofiaBloeder() {

    console.log("Sofia Bløder");
    $("#offer_container").off("animationend", sofiaBloeder);

    $("#offer_sprite").removeClass("offer_walkcycle");

    $("#offer_sprite").addClass("offer_bloder");

    $("#offer_container").on("animationend", mobilInd);

}

function mobilInd() {

    console.log("mobil ind");
    $("#offer_container").off("animationend", mobilInd);

    $("#mobber_mobil_container").addClass("mobber_mobil_ind");

    $("#mobber_mobil_container").on("animationend", tagerBilledet);
}

function tagerBilledet() {
    console.log("Tager billedet");
    $("#mobber_mobil_container").off("animationend", tagerBilledet);
    $("#mobber_mobil_sprite").addClass("mobber_mobil_walkcycle");

    $("#mobber_mobil_container").on("animationend", mobilUd);
}

function mobilUd() {
    console.log("mobil ud");
    $("#mobber_mobil_container").off("animationend", mobilUd);

    $("#mobber_mobil_container").addClass("mobber_mobil_ud");

    setTimeout(karinaOgVeninderKommerInd, 1500);
}

function karinaOgVeninderKommerInd() {



    $("#mobber_sprite").addClass("mobber_gaa");
    $("#mobber_container").addClass("mobber_gaa_til_venstre");
    $("#mobber_container").addClass("mobber_position");

    $("#veninde_red_sprite").addClass("veninde_red_ind_walkcycle");
    $("#veninde_red_container").addClass("veninde_red_move");
    $("#veninde_purple_container").addClass("veninde_purple_move");
    $("#veninde_purple_sprite").addClass("veninde_purple_ind_walkcycle");

    $("#mobber_container").on("animationend", karinaOgVeninderFniser);

}



function karinaOgVeninderFniser() {

    console.log("karina + veninder fniser");
    $("#mobber_container").off("animationend", karinaOgVeninderFniser);


    $("#veninde_purple_sprite").removeClass("veninde_purple_ind_walkcycle");
    $("#mobber_sprite").removeClass("mobber_gaa");
    $("#veninde_red_sprite").removeClass("veninde_red_ind_walkcycle");
    $("#mobber_sprite").addClass("mobberStaaStille");
    if (valgtKarakter == "sofia") {
        setTimeout(SofiaHarFaaetNotifikation, 1500);
    }
    if (valgtKarakter == "karina") {
        setTimeout(karinaValget1, 1500);
    }
}

function lydStopper() {



}



function SofiaHarFaaetNotifikation() {

    console.log("Sofie har fået notifikation")

    $("#offer_mobil_container").show();
    $("#offer_mobil_sprite").addClass("offer_faar_notifikation");
    $("#graa_baggrund").show();


    setTimeout(graeder, 2000)

}


function graeder() {
    console.log("graeder");

    $("#offer_mobil_container").hide();
    $("#graa_baggrund").hide();
    $("#offer_sprite").addClass("offer_graeder");

    //dette er er for at teste
    setTimeout(sofiaLukkerNotifikation, 4000)

}

function sofiaLukkerNotifikation() {

    console.log("sofia lukker notifikation")

    $("#offer_mobil_container").show();
    $("#graa_baggrund").show();
    $("#offer_mobil_sprite").removeClass("offer_faar_notifikation");
    $("#offer_mobil_sprite").addClass("offer_luk_notifikation");

    $("#offer_mobil_sprite").on("animationend", sofiaValget);

}


function karinaValget1() {
    console.log("valget");
    $("#valgeta").addClass("valga");
    $("#valgeta").addClass("puls");

    $(".valga").on("click", karinaKontakteLaerer);



    $("#valgetb").addClass("valgb");
    $("#valgetb").addClass("puls");
    $(".valgb").on("click", privatSnakPaaMobil);



    $("#valgetc").addClass("valgc");
    $("#valgetc").addClass("puls");
    $(".valgc").on("click", karinaHenTilSofia);








}

// Her skal mobilUd genbruges

function karinaFaarNotifikation() {



}

function karinaDaarligSamvittighed() {



}

function karinaHvadSKalJegGore() {



}

function karinaValget() {



}

// KARINAS VALG !!!!!!

// KARINAS FØRSTE VALG (A)


function karinaKontakteLaerer() {
    console.log("valgetlaerer");
    $("#offer_container").hide();
    $("#offer_mobil_container").hide();

    $("#mobber_sprite").hide();
    $("#mobber_container").hide();

    $("#veninde_red_sprite").hide();
    $("#veninde_purple_sprite").hide();

    $("#valgeta").removeClass("valga");
    $("#valgetb").removeClass("valgb");
    $("#valgetc").removeClass("valgc");

    $("#Laerer").addClass("laererDukkerOp");



}

function laererErKommetInd() {
    // slet??



}

function KarinaSporgerLaerer() {
    //lyd:lydHvadSkalJegGoreKarina
    $("#")[0].play();





}

function laererSvarerKarina() {
    // Spil lyd: lydKontaktPrivatSnak
    $("#")[0].play();
    //Start anim: privatSnakDukkerOp
    //↺ Stop lyd: lydBaggrund
    $("#")[0].pause();





}


// KARINAS 3 VALG (C)


// HER SKAL mobilInd genbruges igen

function privatSnakPaaMobil() {
    console.log("snakpåmobil");
    $("#valgeta").removeClass("valga");
    $("#valgetb").removeClass("valgb");
    $("#valgetc").removeClass("valgc");
    $("#mobber_mobil_container").addClass("mobber_mobil_ind");

}
//valg 2 (B)
//undskyldTilSofia--->
function karinaHenTilSofia() {
    console.log("valgetlaerer");
    $("#valgeta").removeClass("valga");
    $("#valgetb").removeClass("valgb");
    $("#valgetc").removeClass("valgc");
    $("#valgetb").removeClass("valgb");
    $("#valgetb").addClass("puls");



}

function sofiaGraeder() {



}

function karinaSporgerSofia() {



}

function sofiaDetVedJegIkke() {



}

function sofiaKontaktPrivatSnak() {



}

//
// GENTAGELSE AF HELE FØRSTE DEL - FRA "sofiaKommerInd" TIL "sofiaGraeder"
//

function sofiaValget() {
    console.log("valgetsofia");

    $("#graa_baggrund").show();
    $("#offer_mobil_sprite").addClass("offer_sofia_gor_jeg");

    $("#offer_mobil_sprite").on("animationend", sofiavaelgemellem1);
    $("#offer_mobil_sprite").on("animationend", sofiavaelgemellem2);

}

function sofiavaelgemellem1() {

    $("#offer_mobil_sprite").off("animationend", sofiavaelgemellem1);
    $("#offer_valgB").addClass("offer_valget_privatsnak");
    $("#offer_valgB").addClass("puls");



    $("#offer_valgB").on("click", sofiaMobilInd);
}

function sofiavaelgemellem2() {
    $("#offer_mobil_sprite").off("animationend", sofiavaelgemellem2);

    $("#offer_valgA").addClass("offer_valget_laerer");
    $("#offer_valgA").addClass("puls");

    $("#offer_valgA").on("click", sofiaKontakteLaerer);
}


function sofiaKontakteLaerer() {

    console.log("sofia kontakt lærer");

    $("#graa_baggrund").hide();
    $("#offer_valgA").removeClass("offer_valget_laerer");
    $("#offer_valgB").removeClass("offer_valget_privatsnak");
    $("#offer_mobil_container").hide();
    $("#mobber_container").hide();
    $("#veninde_red_container").hide();
    $("#veninde_purple_container").hide();

    $("#Laerer").addClass("laererDukkerOp");




    setTimeout(laererErKommetIndTilSofia, 2000);


}

function laererErKommetIndTilSofia() {

    console.log("Lærer kommer ind")

    $("#Laerer").addClass("laererDukkerOp");

    $("#Laerer").on("animationend", sofiaSporgerLaerer);

}

function sofiaSporgerLaerer() {

    // lyd ind
    console.log("sofia spørger lærer");

    setTimeout(laererSvarerSofia, 1000)
}

function laererSvarerSofia() {

    // lyd eller talebobel ind
    console.log("læerer svarer sofia")
    $("#offer_valgB").addClass("offer_valget_privatsnak_laerer");


}

function sofiaMobilInd() {
    console.log("sofia mobil ind igen")
    $("#graa_baggrund").show();
    $("#offer_mobil_container").hide();
    $("#veninde_purple_container").hide();
    $("#mobber_container").hide();
    $("#veninde_red_container").hide();
    $("#offer_valgB").hide();
    $("#offer_valgA").hide();
    $("#offer_mobil_sprite").addClass("offer_mobil_PrivatSnak");




}

function bogstavKommerInd() {



}

function knapKommerFrem() {



}

function trykPaaKnap() {



}

function brugerenTrykker() {



}
