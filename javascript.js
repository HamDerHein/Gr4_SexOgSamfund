//starten

$(window).on("load", skolegaarden);

function skolegaarden() {

    console.log("start");


    $(".knap").addClass("start");
    $(".start").addClass("puls");



    $("#offer_sprite").addClass("gaa");
    $("#offer_container").addClass("gaa_til_venstre");

    $("#gangen").addClass("hide");

    $(".knap").on("click", gangen);

}
//$("#valgkarakter").on("click", valgAfKarakter);

function valgAfKarakter() {



}

function gangen() {

    console.log("gangen")

    $("#gangen").addClass("")
    $("#offer_sprite").removeClass("gaa")
    $("#offer_container").removeClass("gaa_til_venstre")

    $("#baggrund").addClass("hide")
    $("#gangen").removeClass("hide")


}

function sofiaKommerInd() {



}

function sofiaBloeder() {



}

function mobilInd() {



}

function tagerBilledet() {



}

function mobilUd() {



}

function karinaOgVeninderKommerInd() {

    $("#mobber_sprite").addClass("mobber_gaa");
    $("#mobber_container").addClass("mobber_gaa_til_venstre");


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
