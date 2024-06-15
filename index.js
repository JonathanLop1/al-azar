function inicia(){
    const jug1 = document.getElementById("jugador1");
    const jug2 = document.getElementById("jugador2");
    const jug3 = document.getElementById("jugador3");
    const ganador = document.getElementById("ganador");
    let jugg1 = Math.floor(Math.random()*1000);
    let jugg11 = jugg1.toString();
    let jugg111 = jugg11.concat("px")
    jug1.style.width=jugg111;
    let jugg2 = Math.floor(Math.random()*1000);
    let jugg22 = jugg2.toString();
    let jugg222 = jugg22.concat("px")
    jug2.style.width=jugg222;
    let jugg3 = Math.floor(Math.random()*1000);
    let jugg33 = jugg3.toString();
    let jugg333 = jugg33.concat("px")
    jug3.style.width=jugg333;
    setTimeout(()=>{
        if(jugg1>jugg2 && jugg1>jugg3){
            ganador.innerHTML="El ganador es el jugador 1 con "+jugg1+" puntos";
        }
        if(jugg2>jugg1 && jugg2>jugg3){
            ganador.innerHTML="El ganador es el jugador 2 con "+jugg2+" puntos";
        }
        if(jugg3>jugg2 && jugg3>jugg1){
            ganador.innerHTML="El ganador es el jugador 3 con "+jugg1+" puntos";
        }
    },3000)
    
}
function reinicia(){
    location.reload()
}
