import { ADATLISTA } from "./adat.js"
$(function(){
    tablazat(ADATLISTA);
    megjelenit(tablazat, ADATLISTA);
})

function tablazat(lista){
    let txt = "<div class= `table-responsive`>";
    txt += "<table class=`table table-stripped table-boarded table-hover`>";
    txt += "<thead class=`table-dark`><tr>";
    for(const key in kulcsLista) {
        txt += `<th id='${key}' > ${kulcsLista[key]}  ⇅<th/>`;        
    }
    txt += "<th></th></tr></thead>";
    for (let index = 0; index < lista.length; index++) {
        txt += "<tr>";
        const object = lista[index];
        for (const key in object) {
            const element = object[key];
            if (key === "nev") {
                txt += `<th> ${element}</th>`;                
            }
            else{
                txt += `<td> ${element}</td>`;
            }
        }
        txt += '<td><button class="gomb torol" id="t${index}">✖</button></td>';
        txt += "</tr>";
    }
    txt += "</table>";
    txt += "</div>";
    return txt;
}

function megjelenit(tablazat, adat){
    adat.innerHTML = tablazat;
}