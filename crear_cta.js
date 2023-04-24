function siguiente(){
	nom=document.f_crear.c_nom.value;
	ap=document.f_crear.c_ap.value;
	tel=document.f_crear.c_tel.value;
	fec=document.f_crear.c_fec.value;
	us=document.f_crear.c_us.value;
	contra=document.f_crear.c_contra.value;
	if (nom.length==0) {//1 validar la longitud del nombre
		alert("Error, se debe indicar el nombre");
		document.f_crear.c_nom.style.background="#FF7674";
	}
	else{
		if (ap.length==0) {//1 validar la longitud del nombre
		alert("Error, se deben indicar los apehidos");
		document.f_crear.c_ap.style.background="#FF7674";
	}
		else{
			if (tel.length==0) {//1 validar la longitud del nombre
			alert("Error, se debe indicar el numero de teléfono");
			document.f_crear.c_tel.style.background="#FF7674";
			}
			else{
				if (fec.length==0) {//1 validar la longitud del nombre
				alert("Error, se debe indicar la fecha de nacimiento");
				document.f_crear.c_fec.style.background="#FF7674";
				}
				else{
					if (us.length==0) {//1 validar la longitud del nombre
					alert("Error, se debe indicar el usuario");
					document.f_iniciar.c_us.style.background="#FF7674";
					}
					else{
						if (contra.length==0) {//3
						alert("Error, se debe indicar la contaseña");
						document.f_iniciar.c_contra.style.background="#FF7674";
						}//3
						else{
							alert("Se ha creado la cuenta");
							window.location.href = "pag_inicial.html";
						}
					}
				}
			}
		}
	}
}

function campos_azules(){
	document.f_crear.c_nom.style.background="#6182A5";
	document.f_crear.c_ap.style.background="#6182A5";
	document.f_crear.c_tel.style.background="#6182A5";
	document.f_crear.c_fec.style.background="#6182A5";
}// termina la funcion de campos azules