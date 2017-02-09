function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota = Math.floor((Math.random() * 10) + 1);
	alert(nota);

	if(nota>8)
	{
		alert("excelente");
	}

	if(nota<9 && nota>3)
	{
		alert("aprobo");
	}

	if(nota<4)
	{
		alert("vamos, para la proxima se puede");
	}



}//FIN DE LA FUNCIÓN