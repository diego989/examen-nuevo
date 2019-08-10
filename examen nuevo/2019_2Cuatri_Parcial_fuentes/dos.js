function mostrar()
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
	
	
	

}
