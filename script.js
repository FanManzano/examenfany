function saludar()
{
    let saludar = (prompt("escribe tu nombre"))
        alert ("Hola"+ saludar +"suerte en tu examen")

}

function calcularCuadrado()
{
    let numero = parseFloat (prompt("teclee el numero"))
    if (isNaN (numero) || numero==0)
    {
        alert("ingresa los datos correctamente")
        return calcularCuadrado();
    }
    else
    {       
    let resultado = numero*numero
    alert("el cuadrado del numero es:" + resultado)
    }
}