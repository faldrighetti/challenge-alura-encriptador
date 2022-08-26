$botonEncriptar = document.querySelector('#boton-encriptar')
$botonDesencriptar = document.querySelector('#boton-desencriptar')
$botonCopiar = document.querySelector('#boton-copiar')

const cambios = [['e', 'enter'], ['i','imes'], ['a', 'ai'], ['o','ober'], ['u', 'ufat']]

let textoIngresado = document.querySelector('#campo-texto')

let cajaMunieco = document.querySelector('.muneco')
let advertencia = document.querySelector('.advertencia')
let textoInstruccion = document.querySelector('.texto-instruccion')
let campoCopiar = document.querySelector('#copiar')
let resultado = document.querySelector('#resultado')

$botonEncriptar.onclick = function() {
    let textoEncriptado = encriptar(textoIngresado.value)
    resultado.textContent = textoEncriptado
    resultado.className = ''
    campoCopiar.className = ''
    cajaMunieco.className = 'oculto'
    advertencia.className = 'oculto'
    textoInstruccion.className = 'oculto'
}

$botonDesencriptar.onclick = function(){
    let textoEncriptado = desencriptar(textoIngresado.value)
    resultado.textContent = textoEncriptado
    resultado.className = ''
    campoCopiar.className = ''
    cajaMunieco.className = 'oculto'
    advertencia.className = 'oculto'
    textoInstruccion.className = 'oculto'
}

$botonCopiar.onclick = function(){
    let textoACopiar = resultado.textContent
    navigator.clipboard.writeText(textoACopiar)
}

function encriptar(frase){
    frase = frase.toLowerCase()
    for (let i = 0; i < cambios.length; i++){
        if(frase.includes(cambios[i][0])){
            frase = frase.replaceAll(cambios[i][0], cambios[i][1])
        }
    }

    let textoEncriptado = frase    
    return textoEncriptado
}

function desencriptar(encriptado){
    frase = encriptado.toLowerCase()
    for (let i = 0; i < cambios.length; i++){
        if(frase.includes(cambios[i][1])){
            frase = frase.replaceAll(cambios[i][1], cambios[i][0])
        }
    }

    let textoDesencriptado = frase    
    return textoDesencriptado
}
