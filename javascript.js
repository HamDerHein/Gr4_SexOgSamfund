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

    console.log("valg Af Karakter")


}

function gangen() {

    console.log("gangen")

    $("#offer_sprite").show();

    $("#gangen").addClass("")

    $("#baggrund").addClass("hide")
    $("#gangen").show();




}

function sofiaKommerInd() {

    $("#offer_sprite").addClass("gaa");
    $("#offer_container").addClass("gaa_til_venstre");

}

function sofiaBloeder() {



}

function mobilInd() {

    $("#mobber_mobil_sprite").addClass("mobber_mobil_walkcycle");
    $("#mobber_mobil_container").addClass("mobber_mobil_ind");


}

function tagerBilledet() {



}

function mobilUd() {



}

function karinaOgVeninderKommerInd() {

    $("#mobber_sprite").addClass("mobber_gaa");
    $("#mobber_container").addClass("mobber_gaa_til_venstre");
    $("#veninde_red_sprite").addClass("veninde_red_ind_walkcycle");
    $("#veninde_red_container").addClass("veninde_red_move");
    $("#veninde_purple_container").addClass("veninde_purple_move");
    $("#veninde_purple_sprite").addClass("veninde_purple_ind_walkcycle");
}

function karinaOgVeninderFniser() {



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
