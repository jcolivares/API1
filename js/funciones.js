//$(document).ready(function(){
function completar(c){
    let valor = c;
    switch(c){
        case "0":
            valor="00"
            break;
        case "1":
            valor="01"
            break;
        case "2":
            valor="02"
            break;
        case "3":
            valor="03"
            break;
        case "4":
                valor="04"
                break;
            case "5":
                valor="05"
                break;
            case "6":
                valor="06"
                break;
            case "7":
                valor="07"
                break;
        case "8":
                    valor="08"
                    break;
            case "9":
                    valor="09"
                    break;
    }

    return valor;
}

const cambiarColor = () => {
    let r = (parseInt($("#r").val())).toString(16)
    let g = (parseInt($("#G").val())).toString(16)
    let b = (parseInt($("#B").val())).toString(16)

    r = completar(r)
    g = completar(g)
    b = completar(b)

    let color = "#"+r+g+b
    $("#color_texto").html(color)
    $("#caja_color").css("background-color", color)
}

//function posiciona(pos){
const posicionar = (pos) => {
    let latitud = pos.coords.latitude
    let longitud = pos.coords.longitude
    let centro = latitud+","+longitud
    
    $("#mapa").html("<img src='https://maps.googleapis.com/maps/api/staticmap?center="+centro+"&zoom=14&size=600x400&key='>")
}

$(function(){   
    
    /* 
    $("input[type=range]").change(()=>{
        let valor = $(this).val()
        alert("Valor"+valor)
    })
    */

    $("#r").change(()=>{
        cambiarColor()
    })

    $("#G").change(()=>{
        cambiarColor()
    })

    $("#B").change(()=>{
        cambiarColor()
    })

    if(navigator.geolocation){
        //codigo para obtener el punto de referencia
        navigator.geolocation.getCurrentPosition(posicionar)
    }else{
        $("#mapa").html("Tu navegador no soporta georeferenciacion")
    }
    
})