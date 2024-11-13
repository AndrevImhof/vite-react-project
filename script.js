const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("min");
const segundo = document.getElementById("seg");

const lancamento = "12 aug 2024";

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor (segTotal / 60 / 60 / 24); // math.floor, pega apenas o inteiro mais proximo
    const finalHoras = Math.floor(segTotal / 60 / 60 ) % 24;
    const finalMinutos = Math.floor(segTotal / 60 ) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;


    dia.innerHTML = `<strong>${finalDias}D</strong>`
    hora.innerHTML = `<strong>${finalHoras}H</strong>`
    minuto.innerHTML = `<strong>${finalMinutos}M</strong>`
    segundo.innerHTML = `<strong>${finalSegundos}S</strong>`
}



countDown();
setInterval(countDown, 1000) // 1000 = a cada segundo