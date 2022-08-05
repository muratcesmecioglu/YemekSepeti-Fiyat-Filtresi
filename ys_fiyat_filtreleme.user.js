// ==UserScript==
// @name         YemekSepeti Fiyat Filtresi
// @namespace    http://murat.cesmecioglu.net/
// @version      0.1
// @description  Herşey ateş pahası..
// @author       Murat Çeşmecioğlu
// @match        https://www.yemeksepeti.com/restaurant/*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yemeksepeti.com
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';
    function fiyat_ayarla() {
        var soru = parseFloat(prompt("Maksimum Fiyat?"));
        GM_setValue("hedefFiyatValue" , soru);
        console.log("Maksimum Fiyat Ayarlandı: " + GM_getValue( "hedefFiyatValue" ));
    }
    GM_registerMenuCommand("Fiyat Ayarla", fiyat_ayarla, "f");
    setTimeout(function(){
    var hedefFiyat = GM_getValue( "hedefFiyatValue" , 50 );
    var urunler = document.querySelectorAll("li.dish-card");
    urunler.forEach(function(urun){
        var fiyat = parseFloat(urun.querySelector("div > section > div > div > span").innerHTML.replace(" TL","").replace(",","."));
        if (fiyat > hedefFiyat) {
            urun.remove();
        }
    });
        console.log("Filtrelendi. Maksimum Fiyat: " + hedefFiyat);
    },10000);
})();
