function Mostrar()
{
//tomo la edad  

var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);
if(edad>17)
{
	alert("es mayor");
}

if(edad <18 && edad >12)
{
	alert("es adolescente");
}

if(edad <13)
{
	alert("es niño");
}

}//FIN DE LA FUNCIÓN