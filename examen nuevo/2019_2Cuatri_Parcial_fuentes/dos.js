/*function mostrar()
{
	var edad;
	var animal;
	var peso;
	var nombre;
	var contador=0;
	var edadMax=0;
	var nombreMax;
	var edadMax;
	var primerPerro=true;
	var acumulador=0;
	var contadorDiez=0;

	
	while(contador<2)
	{
		nombre=prompt("Ingrese el NOMBRE de la mascota: ");

	    animal=prompt("Ingrese el TIPO de mascota: ");
	    while (animal!="perro" && animal!="gato") 
	    {
	      animal=prompt("Error. Ingrese un TIPO de mascota válida: "+"\n"+"Ingrese: perro/gato");
	    }
		
		peso=prompt("Ingrese el peso de la mascota: ");
		while (isNaN(peso)==true || peso <1 || peso >100)
		{
			peso=prompt("Error. Ingrese un peso de mascota válido: "+"\n"+"Peso válidos entre 1 y 100");
		}
		
		edad=prompt("Ingrese la EDAD de la mascota: ");
		while (isNaN(edad)==true || edad <1 || edad>25)
		{
			edad=prompt("Error. Ingrese un EDAD de mascota válida: "+"\n"+"edades válidos entre 1 y 25");
		}

		if(animal =="perro" && primerPerro)
	    {
	      edadMax=edad;
	      nombreMax=nombre;
	      primerePerro=false;
	    }
	    else if (animal =="perro" && edad>edadMax) 
	    {
	    	edadMax=edad;
	      	nombreMax=nombre;
	    }
	    if(edad>10 && peso<10)
	    {
	        contadorDiez++;
	    }     
	       

  		peso=parseInt(peso);
		acumulador=acumulador+peso;
		contador++;
   		}
				
	document.write("a) El promedio de los pesos totales es: "+ (acumulador/contador)+ "<br>");
  	document.write("b) El nombre del perro mas viejo es: "+ nombreMax+ "<br>");
  	document.write("c) La cantidad animales menores a 10 kilos de mas de 10 años es: "+ contadorDiez+ "<br>");
	
	
	

}*/
/*Debemos realizar la carga de cuatro mascotas de una veterinaria, 
de cada una debo optener los siguientes datos: 
el tipo (validar "perro" o "gato") , 
la edad (validar entre 1 y 25),
el peso (validar entre 1 y 100) 
y el nombre. 
Se debe Informar al usuario lo siguiente: 
a) El promedio de los pesos totales. 
b) El nombre del perro mas viejo 
c) La cantidad animales menores a 10 kilos de mas de 10 años.*/ 
function mostrar()
{
	var animal;
	var edad;
	var peso;
	var nombre;
	var ingreso;
	var i=0;
	var acumulador=0;
	var contPerro=0;
	var nombPerro;
	var edadPerro;
	var contAnimales=0;
	var promedio;


	
	for (i=0; i<4; i++)
	{
		animal = prompt("Tipo de animal");
		while(animal!="perro" && animal!="gato")
		{
			animal = prompt("Error"+"\n"+"Tipo de animal");
		}

		edad = prompt("Edad del "+animal);
		edad = parseInt(edad);
		while (isNaN(edad) || edad<1 || edad>25)
		{
			edad = prompt("Error"+"\n"+"Edad del "+animal);
			edad = parseInt(edad);
		}

		peso = prompt("Peso del "+animal);
		peso = parseInt(peso);
		while (isNaN(peso) || peso<1 || peso>100)
		{
			peso = prompt("Error"+"\n"+"Peso del "+animal);
			peso = parseInt(peso);
		}

		nombre = prompt("Nombre del "+animal);

		acumulador += peso;

		if (animal =="perro")
		{
			contPerro++;
			if (contPerro == 1 || edad>edadPerro)
			{
				edadPerro = edad;
				nombPerro = nombre;
			}
		}

		if (peso<10 && edad >10)
		{
			contAnimales++;
		}
	}

	promedio = acumulador/i;

	alert("a) El promedio de los pesos totales. "+promedio.toFixed(2)+"\n"+"b El nombre del perro mas viejo. "+nombPerro+"\n"+"c La cantidad animales menores a 10 kilos de mas de 10 años "+contAnimales);
}