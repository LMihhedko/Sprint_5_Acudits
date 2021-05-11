window.onload = function() {
    showWeather();
  };

function showJokes() {

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
            //console.log(mensaje.joke);
            let joke = mensaje.joke 
			document.getElementById('joke').innerHTML = joke
        })
        .catch(function(error) {
            console.log(error);
        })       

 }

 

 function showWeather() {
     //saber las coordenadas de la persona que entra
     navigator.geolocation.getCurrentPosition(getLocation);

     function getLocation(pos) {
        var crd = pos.coords
        console.log(crd.latitude)
    
        const api_key = 'd1cfddacc887d8e7ac4980c1dbd0371f';
    
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${api_key}`;
        
        fetch(url)
        .then(function(respuesta) {
            if (respuesta.ok) {
                return respuesta.json();
            } else {
                console.log('error en la peticion)');
            }
        })
        .then(function(mensaje) {
            let main = mensaje.weather[0].main
            let description = mensaje.weather[0].description
            console.log(mensaje)
            document.getElementById('weather').innerHTML = `Today: ${main} - ${description}`
        })
        .catch(function(error) {
            console.log(error);
        })  
    
    }  
    
 }




