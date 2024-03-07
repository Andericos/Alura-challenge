let fraseUsuario = document.querySelector(".textoUsuario");
let decriptionArea = document.querySelector('.decriptionarea');


function botonEncriptar(){
    let textoEncriptado = encriptacion(fraseUsuario.value);
    decriptionArea.value = textoEncriptado;
    fraseUsuario.value = ""
    decriptionArea.style.backgroundImage = "none";
}

function botonDesencriptar(){
    let textoEncriptado = desencriptacion(fraseUsuario.value);
    decriptionArea.value = textoEncriptado;
    decriptionArea.style.backgroundImage = "none";
}

async function botonCopiar(){
    await navigator.clipboard.writeText(decriptionArea.value);
    decriptionArea.value = "";
    decriptionArea.style.backgroundImage = "url('imagenes/zphm8ZCU_400x400.jpg')";
}


 

function encriptacion(text){
    let newText = "";
    for (let i = 0; i < text.length; i++){
        
        if(text[i] == "E" || text[i] == "e"){
            newText += 'enter';
        }
        else if(text[i] == "I" || text[i] == "i"){
            newText += 'imes';
        }
        else if(text[i] == "A" || text[i] == "a"){
            newText += 'ai';
        }
        else if(text[i] == "O" || text[i] == "o"){
            newText += 'ober';
        }
        else if (text[i] == "U" || text[i] == "u"){
            newText += 'ufat';
        }
        else{
            newText += text[i];
        }
    }
    return newText;
}

function desencriptacion(text){
    text = text.toLowerCase()
         
    if(text.includes("enter")){
        text = text.replaceAll("enter","e");
    }
    if(text.includes("imes")){
        text = text.replaceAll("imes","i");
    }
    if(text.includes("ai")){
        text = text.replaceAll("ai","a");
    }
    if(text.includes("ober")){
            text = text.replaceAll("ober","o");
    }
    if (text.includes("ufat")){
        text = text.replaceAll("ufat","u");
    }
   
return text;
}
