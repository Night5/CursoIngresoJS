/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldito = parseInt(document.getElementById("sueldo").value);
	var aumento = (sueldito * 10) / 100;
	var resultadoFinal = sueldito + aumento;
	document.getElementById("resultado").value = resultadoFinal;

	
}
