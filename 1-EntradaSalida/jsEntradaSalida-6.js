/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var num1 = parseInt(document.getElementById("numeroUno").value);
	var num2 = parseInt(document.getElementById("numeroDos").value);

/* En este caso, necesitamos convertir el texto (obtenido
por "getElementById") en números, por lo cual, utilizamos el 
"parseInt".
Lo que queremos trasnformar en enteros con "parseInt" debe 
estar entre parentesis y adelante de "doc...". 

*/

	//parseInt(num1);   mal
	//parseInt(num2);    mal



	var resultado = num1 + num2;

	alert("la suma es " + resultado);



}

