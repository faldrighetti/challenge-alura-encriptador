/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

`La letra "a" es convertida para "ai"`
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`

**Requisitos:**
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. 

Por ejemplo:
`"gato" => "gaitober"`
`gaitober" => "gato"`

- La página debe tener campos para inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre las dos 
  opciones.
- El resultado debe ser mostrado en la pantalla.

**Extras:**
- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del `ctrl+C`
  o de la opción "copiar" del menú de las aplicaciones.

*/

$botonEncriptar = document.querySelector('#boton-encriptar')
$botonDesencriptar = document.querySelector('#boton-desencriptar')
$botonCopiar = document.querySelector('#boton-copiar')

const cambios = [['e', 'enter'], ['i','imes'], ['a', 'ai'], ['o','ober'], ['u', 'ufat']]

let textoIngresado = document.querySelector('#campo-texto')

let cajaMunieco = document.querySelector('.caja-muneco')
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
