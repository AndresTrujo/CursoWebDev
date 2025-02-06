function getLocation(){
    navigator.geolocation.getCurrentPosition(onSuccess);
     
}

function onSuccess(position){
    let name = prompt('Ingresa aqui tu nombre: ')
    document.getElementById("output").innerHTML = "Hola " + name
    + " esta es tu ubicacion actual: <br>Latitud: " + position.coords.latitude
    + ".<br>Longitud: " + position.coords.longitude + ".";
}