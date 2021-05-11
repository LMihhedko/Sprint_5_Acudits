function showJokes() {
	
	//definir función para llamar a la API de obtención de datos

		const url = 'https://icanhazdadjoke.com';
        //informar los parámetros de la petición
			let parametros = {
				method: 'get', //metodo de envío
				headers: {'Accept': 'application/json'}
			}

        fetch(url, parametros)
        .then(function(respuesta) {
            if (respuesta.ok) {
                return respuesta.json();
            } else {
                console.log('error en la peticion)');
            }
        })
        .then(function(mensaje) {
            //Ejercicio 1 -> console.log(mensaje.joke);
            //Ejercicio 2
            let joke = mensaje.joke 
			document.getElementById('joke').innerHTML = joke
        })
        .catch(function(error) {
            console.log(error);
        })       

 }
