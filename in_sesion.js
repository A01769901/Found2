function siguiente(){
	us=document.f_iniciar.c_us.value;
	contra=document.f_iniciar.c_contra.value;
	if (us.length==0) {//1 validar la longitud del nombre
		alert("Error, se debe indicar el usuario");
		document.f_iniciar.c_us.style.background="#FF7674";
	}//1
	else{//2
		if (contra.length==0) {//3
			alert("Error, se debe indicar la contaseña");
			document.f_iniciar.c_contra.style.background="#FF7674";
		}//3
		else{
			if ((us=="richi")&&(contra=="jip")){
				alert("ACCESO PERMITIDO !!!");
				window.location.href = "pag_inicial.html";
			}
			else{
				alert("ACCESO DENEGADO !!!");
				document.f_iniciar.c_us.style.background="#FF7674";
				document.f_iniciar.c_contra.style.background="#FF7674";
			}
		}
	}
}

function campos_azules(){
	document.f_iniciar.c_us.style.background="#6182A5";
	document.f_iniciar.c_contra.style.background="#6182A5";
	}// termina la funcion de campos azules