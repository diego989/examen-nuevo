function mostrar()
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
}
