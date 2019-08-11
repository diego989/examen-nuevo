/*function mostrar()
{
	var localidad;
	var habitantes;
	var temperatura;
	var localidadMin;
	var habitantesMin;
	var localidadTempMin;
	var temperaturaMin;
	
	var acumulador=0;
	var contadorTpar=0;
	var contadorTemp=0;
	var contador=0;

	var rta;

	do {
		localidad=prompt("Ingrese el nombre de la localidad: ");

		habitantes=prompt("Ingrese la cantidad de habitantes (en millones): ");
		while (isNaN(habitantes)==true || habitantes<1 || habitantes>40) 
		{
			habitantes=prompt("Error. Ingrese una cantidad de habitantes valida: "+"\n"+"cantidad válida entre 1 y 40");
		}
		temperatura=prompt("Ingrese la temperatura mínima que se registra en esta localidad: ");
			while (isNaN(temperatura)==true || temperatura<-50 || temperatura>50) 
		{
			temperatura=prompt("Error. Ingrese una temperatura válida: "+"\n"+"Temperatura válida entre -50 y 50");
		}

		if (temperatura!=0 &&temperatura%2==0 ) 
		{
			contadorTpar++;	
		}
		if (temperatura>40) 
		{
			contadorTemp++;	
		}
		if (contador==0)
		{
			localidadMin=localidad;
			temperaturaMin=temperatura;
			localidadTempMin=localidad;
			habitantesMin=habitantes;

			
		}
		else
		{
			if (habitantes<habitantesMin) 
			{
				habitantesMin=habitantes;
				localidadMin=localidad;	
			}
		}	
		if(temperatura<temperaturaMin)
		{
			temperaturaMin=temperatura;
			localidadTempMin=localidad;
		}

		contador++;
		habitantes=parseInt(habitantes);
		acumulador=acumulador+habitantes;
		acumulador=parseInt(acumulador);

		rta=confirm("Desea continuar?");
	} while (rta===true);

	document.write("a) La cantidad de temperaturas pares es: "+ contadorTpar+ "<br>");
	document.write("b) El nombre de la localidad con menos habitantes es: "+ localidadMin+ "<br>");
	document.write("c) La cantidad localidades que superan los 40 grados de temperatura es: "+ contadorTemp+ "<br>");
	document.write("d) El promedio de habitantes entre las localidades ingresadas es: "+ (acumulador/contador)+ "<br>");
	document.write("f) La temperatura mínima ingresada es: "+ temperaturaMin+ "<br>"+" y nombre de la localidad que registro esa temperatura es: "+ localidadTempMin);
}*/

/*Realizar el algoritmo que permita ingresar el nombre de una localidad,
 cantidad de habitantes en millones entre 1 y 40 (validar) 
la temperaruta mínima que se registra en esa localidad(entre -50 y 50) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre de la localidad con menos habitantes 
c) La cantidad localidades que superan los 40 grados de temperatura. 
d) El promedio de habitantes entre las localidades ingresadas	
f) La temperatura mínima ingresada, y nombre de la localidad que registro esa temperatura. */

function mostrar()
{
	var localidad;
	var cantHabitantes;
	var temperatura;
	var inicio;
	var tempPares=0;
	var i=0;
	var nombreMenorHab;
	var localidadMenorHab;
	var acumulador=0;
	var promedio;
	var tempMin;
	var localidadTempMin;
	var contadorTemp=0;
	
	do
	{
		localidad = prompt("Nombre de la localidad");

		cantHabitantes = prompt("Cantidad de habitantes de "+localidad);
		cantHabitantes = parseInt(cantHabitantes);
		while(isNaN(cantHabitantes) || (cantHabitantes<1 || cantHabitantes>40))
		{
			cantHabitantes = prompt("Error"+"\n"+"Cantidad de habitantes de "+localidad);
			cantHabitantes = parseInt(cantHabitantes);
		}

		temperatura = prompt("Temperatura mínima de la localidad de "+localidad);
		temperatura = parseInt(temperatura);
		while(isNaN(temperatura) || (temperatura<-50 || temperatura>50))
		{
			temperatura = prompt("Error"+"\n"+"Temperatura mínima de la localidad de "+localidad);
			temperatura = parseInt(temperatura);
		}

		if (temperatura %2 == 0)
		{
			tempPares++;
		}

		if (i==0 || cantHabitantes<localidadMenorHab)
		{
			nombreMenorHab = localidad;
			localidadMenorHab = cantHabitantes;
		}

		if (temperatura>40)
		{
			contadorTemp++;
		}
		acumulador += cantHabitantes;

		if (i==0 || temperatura<tempMin)
		{
			localidadTempMin = localidad;
			tempMin = temperatura;
		}

		i++;

		inicio = prompt("Si desea salir presiones n");
	}
	while (inicio!="n");

	promedio = acumulador/i;

	alert("a) La cantidad de temperaturas pares. "+tempPares+"\n"+"b) El nombre de la localidad con menos habitantes "+nombreMenorHab+"\n"+"c) La cantidad localidades que superan los 40 grados de temperatura. "+contadorTemp+"\n"+"d) El promedio de habitantes entre las localidades ingresadas "+promedio.toFixed(2)+"\n"+"f)1° La temperatura mínima ingresada, "+tempMin+"\n"+"2° nombre de la localidad que registro esa temperatura. "+localidadTempMin);
}