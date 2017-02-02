/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var sueldo = parseInt(document.getElementById("importe").value);
	var descuento = (sueldo * 25) / 100;
	var resultadoFinal = sueldo - descuento;
	document.getElementById("resultado").value = resultadoFinal;
}
