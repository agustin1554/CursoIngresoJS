function Mostrar()
{
//tomo la edad  

	var edad;
	var estadoCivil;
	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;
	edad=parseInt(edad);
	if(edad<18 && estadoCivil!="soltero")
	{
		document.write("es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN