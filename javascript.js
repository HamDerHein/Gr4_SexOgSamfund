//starten

$(window).on("load", gangen);


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

    console.log("valg Af Karakter")


}

function gangen() {

    console.log("gangen")


    $("#gangen").addClass("")

    $("#baggrund").addClass("hide")
    $("#gangen").show();

    $("#offer_container").hide();
    setTimeout(sofiaKommerInd, 2000);

}

function sofiaKommerInd() {

    $("#offer_container").show();
    $("#offer_sprite").addClass("offer_walkcycle");
    $("#offer_container").addClass("gaa_til_venstre");

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

}

function lydStopper() {



}

// mobilInd funktion skal genbruges her.


function SofiaHarFaaetNotifikation() {



}

function graeder() {



}

function zoomMobil() {



}

function karinaValget() {



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
