
//-----------------------------------------
	// Inicialización de variables

	var input = document.querySelector("input");
	var encriptar = document.querySelector(".encriptar");
	var desencriptar = document.querySelector(".desencriptar");
	var copyTextareaBtn = document.querySelector('.copiar');
	var pantalla = document.querySelector("#pantalla-salida")


//-----------------------------------------
	// función de verificar

	function encripta() {


		let temp = input.value

		let resultado = temp.replace("i","imes").replace("a","ai").replace("e","enter").replace("o","ober").replace("u","ufat")
		
		document.getElementById('pantalla-salida').value = resultado
			
		input.value = "";
		input.focus()
	
	}

//-----------------------------------------
	// función de desencriptar

	function desencripta() {


		let temp = input.value

		let resultado = temp.replace(/ai/g,"a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u")
		
		document.getElementById('pantalla-salida').value = resultado
				
		input.value = "";
		input.focus()
	}


//-----------------------------------------
	// función para copiar texto

	copyTextareaBtn.addEventListener('click', function(event) {
		var copyTextarea = document.querySelector("#pantalla-salida");
	  	copyTextarea.select();

	  	try {
		    var successful = document.execCommand('copy');
		    var msg = successful ? 'successful' : 'unsuccessful';
		    console.log('Copying text command was ' + msg);
		  } catch (err) {
		    console.log('Oops, unable to copy');
	  }
	});



//-----------------------------------------
	// Testeo 
	input.focus()
	input.mozactionhint = desencripta;
	desencriptar.onclick = desencripta
	encriptar.onclick = encripta;