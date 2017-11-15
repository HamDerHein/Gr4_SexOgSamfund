//starten

var valgtKarakter = "";


$(window).on("load", skolegaarden);


function skolegaarden() {

    console.log("start");
    $("#mobber_mobil_container").hide();
    $("#graa_baggrund").hide();
    $(".knap").addClass("start");
    $(".start").addClass("puls");
    $("#offer_container").hide();
    $("#offer_mobil_container").hide();

    $(".snak")[0].play();
    $(".snak").animate({
        volume: .7
    }, 30000);
    $(".snak")[0].volume = 0.4;
    $(".snak")[0].loop = true;

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
    $("#offer_sprite").removeClass();


    $("#offer_sprite").addClass("postionOffer2");
    $("#offer_container").addClass("postionOffer1");
    $("#offer_container").addClass("puls2");



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
    $(".snak")[0].pause();

    $(".privatSnakLogo").hide();
    $("#mobber_container").off("click", mobber);
    $("#offer_container").off("click", offer);

    $("#offer_sprite").removeClass("postionOffer2");
    $("#offer_container").removeClass("postionOffer1");


    $("#mobber_sprite").removeClass("postion1");
    $("#mobber_container").removeClass("postion2");

    $("#baggrund").addClass("hide");
    $("#gangen").show();

    $("#offer_container").hide();
    setTimeout(sofiaKommerInd, 2000);

}

function sofiaKommerInd() {


    $("#offer_container").show();

    $(".offer_gaa")[0].play();

    $("#offer_sprite").addClass("offer_walkcycle");
    $("#offer_container").addClass("gaa_til_venstre");
    $("#offer_container").addClass("offer_position");


    $("#offer_container").on("animationend", sofiaBloeder);
}

function sofiaBloeder() {


    console.log("Sofia Bløder");
    $(".offer_gaa")[0].pause();
    $("#offer_container").off("animationend", sofiaBloeder);


    $("#offer_sprite").removeClass("offer_walkcycle");


    $("#offer_sprite").addClass("offer_bloder");

    $("#offer_container").on("animationend", mobilInd);

}

function mobilInd() {

    console.log("mobil ind");

    $("#mobber_mobil_container").show();
    $("#offer_container").off("animationend", mobilInd);

    $("#mobber_mobil_container").addClass("mobber_mobil_ind");
    $("#mobber_mobil_container").addClass("position_mobil1");


    setTimeout(shutter, 4000);
    $("#mobber_mobil_container").on("animationend", tagerBilledet);
}

function shutter() {
    console.log("shutter lyd");
    $(".shutter")[0].play();
    $(".shutter")[0].volume = 0.5;
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

    setTimeout(karinaOgVeninderKommerInd, 2000);
}

function karinaOgVeninderKommerInd() {
    $(".mobber_gaa")[0].play();
    $(".veninder_gaa")[0].play();

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
    $(".mobber_gaa")[0].pause();
    $(".veninder_gaa")[0].pause();
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

    console.log("Sofia har fået notifikation");


    $(".notifikation")[0].play();
    $(".notifikation")[0].playbackRate = 1.5;
    setTimeout(grin, 3000);


    $("#offer_mobil_container").show();
    $("#offer_mobil_sprite").addClass("offer_faar_notifikation");
    $("#graa_baggrund").show();

    setTimeout(graeder, 4000);

}

function grin() {
    $(".grin")[0].play();
    $(".grin")[0].loop = true;
}


function graeder() {
    console.log("graeder");


    $(".cry")[0].play();

    $("#offer_mobil_container").hide();
    $("#graa_baggrund").hide();
    $("#offer_sprite").addClass("offer_graeder");


    //dette er er for at teste
    setTimeout(sofiaLukkerNotifikation, 4000);


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

    $(".mobber")[0].play();

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
    $(".mobber")[0].pause();
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
    setTimeout(laerer, 2000);


    $("#Laerer").addClass("laererDukkerOp");




}

function laerer() {
    $(".laerer")[0].play();
    $("#privatSnak_container").addClass("offer_valget_privatsnak_laerer");

    $("#privatSnak_container").on("click", privatSnakKlik)
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


    $("#graa_baggrund").show();
    $("#mobber_container").hide();
    $("#mobber_sprite").hide();

    $("#mobber_mobil_container").addClass("position_mobil2");

    $("#mobber_mobil_container").removeClass("mobber_mobil_ind");

    $("#mobber_mobil_container").removeClass("mobber_mobil_ud");

    $("#mobber_mobil_container").addClass("mobber_mobil_privat");


    $("#mobber_mobil_container").on("animationend", privat);
    $("#mobber_mobil_sprite").removeClass("mobber_mobil_walkcycle");
    $("#mobber_mobil_sprite").addClass("mobber_mobil_start");
}

function privat() {
    console.log("privat");



    $("#mobber_mobil_sprite").removeClass("mobber_mobil_start");


    $("#mobber_mobil_container").off("animationend", privat);
    $("#mobber_mobil_sprite").addClass("mobber_mobil_walkcycle_privat");

    $("#mobber_mobil_container").on("animationend", privatlogo);
}

function privatlogo() {
    console.log("logo");
    $("#mobber_mobil_sprite").off("animationend", privatlogo);

    $("#privatsnak").addClass("privatlogo")
    $("#privatsnak").addClass("puls")


    $("#offer_container").hide();
    $("#offer_mobil_container").hide();

    $("#mobber_sprite").hide();
    $("#mobber_container").hide();

    $("#veninde_red_sprite").hide();
    $("#veninde_purple_sprite").hide();
    $("#privatsnak").on("click", privatSnakPaaM)


}

function privatSnakPaaM() {

    console.log("link til privatsnak");

    window.location.href = "http://privatsnak.dk/";
}

//valg 2 (B)
//undskyldTilSofia--->
function karinaHenTilSofia() {

    console.log("tilsofia");
    $("#valgeta").removeClass("valga");
    $("#valgetb").removeClass("valgb");
    $("#valgetc").removeClass("valgc");
    $("#valgetb").removeClass("valgb");
    $("#valgetb").addClass("puls");

    $("#mobber_sprite").removeClass("mobber_gaa");

    $("#mobber_container").removeClass("mobber_gaa_til_venstre");

    $("#mobber_sprite").addClass("mobber_gaa");
    $("#mobber_container").addClass("mobber_gaa_til_venstre2");

    $("#mobber_container").addClass("mobber_position");

    $("#mobber_container").addClass("mobber_gaa_til_venstre2");

    $("#mobber_container").on("animationend", mobber_gaa);


    $(".veninder_gaa")[0].play();


}

function mobber_gaa() {

    console.log("mobber_gaa");



    $("#mobber_container").removeClass("mobber_gaa_til_venstre2");

    $("#mobber_container").removeClass("mobber_position");

    $("#mobber_container").removeClass("mobber_gaa_til_venstre2");

    $("#mobber_sprite").removeClass("mobber_gaa");
    $("#mobber_sprite").removeClass("mobberStaaStille");

    $("#mobber_container").removeClass("puls");

    $("#mobber_sprite").addClass("mobberStaaStille");


    $("#mobber_container").addClass("postion3");

    setTimeout(sofiaGraeder, 2000);

}

function sofiaGraeder() {

    $("#offer_sprite").addClass("offer_graeder");

    setTimeout(karinaSporgerSofia, 4000);

    $(".cry")[0].play();



    //dette er er for at teste





}

function karinaSporgerSofia() {
    console.log("karinaSporgerSofia");

    setTimeout(sofiaDetVedJegIkke, 2000);



}

function sofiaDetVedJegIkke() {
    console.log("sofiaDetVedJegIkke");
    setTimeout(sofiaKontaktPrivatSnak, 2000);



}

function sofiaKontaktPrivatSnak() {
    console.log("sofiaKontaktPrivatSnak");


    $("#privatsnak").addClass("privatlogo");
    $("#privatsnak").addClass("puls");


    $("#privatsnak").on("click", privatSnakPaaM);




}

//
// GENTAGELSE AF HELE FØRSTE DEL - FRA "sofiaKommerInd" TIL "sofiaGraeder"
//

function sofiaValget() {
    console.log("valgetsofia");
    $(".grin")[0].pause();
    $("#graa_baggrund").show();
    $("#offer_container").hide();


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

    $(".laerer")[0].pause();

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


    $(".laerer")[0].play();
    console.log("læerer svarer sofia");
    $("#offer_valgB").show();
    $("#privatSnak_container").addClass("offer_valget_privatsnak_laerer");

    $("#privatSnak_container").on("click", privatSnakKlik)
}

function privatSnakKlik() {

    console.log("link til privatsnak");

    window.location.href = "http://privatsnak.dk/";
}

function sofiaMobilInd() {

    console.log("sofia mobil ind igen")
    $("#graa_baggrund").show();
    $("#offer_mobil_container").show();
    $("#veninde_purple_container").hide();
    $("#mobber_container").hide();
    $("#veninde_red_container").hide();
    $("#offer_valgB").hide();
    $("#offer_valgA").hide();
    $("#offer_mobil_sprite").addClass("offer_mobil_PrivatSnak");





    $("#offer_mobil_container").on("click", privatSnakChatKlik);


}

function privatSnakChatKlik() {

    window.location.href = "http://privatsnak.dk/13-15/chat/";
}

function bogstavKommerInd() {



}

function knapKommerFrem() {



}

function trykPaaKnap() {



}

function brugerenTrykker() {



}
