'use strict';
import {usuwanie} from "./polskie_znaki.js";

const baseUrl = "https://danepubliczne.imgw.pl/api/data/synop/station/";
const list = document.querySelector("#miasto");
const suma_opadu = document.querySelector("#suma_opadu");
const stacja = document.querySelector("#stacja");
const data_pomiaru = document.querySelector("#data_pomiaru");
const godzina_pomiaru = document.querySelector("#godzina_pomiaru");
const cisnienie = document.querySelector("#cisnienie");
const temperatura = document.querySelector("#temp");


fetch(baseUrl).then((response) => response.json()).then((data) => {
    for(let i = 0; i < data.length; i++)
    {
        let opt = document.createElement('option');
        opt.value = `${data[i].stacja}`.split(" ").join("").toLowerCase();
        opt.innerHTML = `${data[i].stacja}`;
        list.appendChild(opt);
    }
});


function reset()
{
    stacja.innerHTML = "";
    suma_opadu.innerHTML = "";
    data_pomiaru.innerHTML = "";
    godzina_pomiaru.innerHTML = "";
    cisnienie.innerHTML = "";
    temperatura.innerHTML = "";
}


list.addEventListener("change", () => {

    let city = list.value;
    city = usuwanie(city);
    fetch(baseUrl + city).then((response) => response.json()).then((datas) => {
        reset();
        stacja.innerHTML += datas.stacja;
        suma_opadu.innerHTML += datas.suma_opadu;
        data_pomiaru.innerHTML += datas.data_pomiaru;
        godzina_pomiaru.innerHTML += datas.godzina_pomiaru;
        cisnienie.innerHTML += datas.cisnienie;
        temperatura.innerHTML += datas.temperatura + "&deg;C";


    });
});