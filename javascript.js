//starten

$(window).on("load", skolegaarden);


function skolegaarden() {

    console.log("start");

    $(".knap").addClass("start");
    $(".start").addClass("puls");
    $("#offer_container").hide();


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



    $("#mobber_container").on("click", gangen);
    $("#offer_container").on("click", gangen);

    console.log("valg Af Karakter");


}

function gangen() {

    console.log("gangen")

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

    setTimeout(mobilIndNotifikation, 1500);
}

function lydStopper() {



}

function mobilIndNotifikation() {

    console.log("Mobil ind notifikation")

    $("#offer_mobil_container").addClass("offer_mobil_ind");

    $("#offer_mobil_container").on("animationend", SofiaHarFaaetNotifikation);
}



function SofiaHarFaaetNotifikation() {

    console.log("Sofie har fået notifikation")

    $("#offer_mobil_sprite").addClass("offer_faar_notifikation");

    setTimeout(graeder, 1500)

}

function graeder() {
    console.log("graeder");


    $("#offer_sprite").addClass("offer_graeder");

    //dette er er for at teste


}

function zoomMobil() {



}

function karinaValget1() {
    console.log("valget");
    $("#valgeta").addClass("valga");
    $("#valgeta").addClass("puls");

    $(".valga").on("click", karinaKontakteLaerer);


    $("#valgetb").addClass("valgb");
    $("valga").on("click", privatSnakPaaMobil);


    $("#valgetc").addClass("valgc");
    $("#valgetc").on("click", karinaKontakteLaerer);








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
    $("#valgeta").removeClass("valga");



}

function laererErKommetInd() {



}

function KarinaSporgerLaerer() {



}

function laererSvarerKarina() {



}


// KARINAS ANDET VALG (B)


// HER SKAL mobilInd genbruges igen

function privatSnakPaaMobil() {
    console.log("valgetlaerer");
    $("#valgeta").removeClass("valgb");




}

function karinaHenTilSofia() {



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



}

function sofiaKontakteLaerer() {



}

function laererErKommetIndTilSofia() {



}

function sofiaSporgerLaerer() {



}

function laererSvarerSofia() {



}

function sofiaMobilInd() {



}

function bogstavKommerInd() {



}

function knapKommerFrem() {



}

function trykPaaKnap() {



}

function brugerenTrykker() {



}
