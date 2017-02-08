function Mostrar()
{
//tomo la edad  

	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad<18)
	{
		alert("es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN