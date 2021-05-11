window.onload = function() {
    showWeather();
  };

function showJokes() {
    //alternate es un true/false random
    let alternate = (Math.random() < 0.5);
    console.log(alternate);

    //si alternate es falso mostrar API Icanhazdadjoke
    if (!alternate) {
		const url1 = 'https://icanhazdadjoke.com';

			let parametros1 = {
				method: 'get', 
				headers: {'Accept': 'application/json'}
			}

        fetch(url1, parametros1)
        .then(function(respuesta) {
            if (respuesta.ok) {
                return respuesta.json();
            } else {
                console.log('error en la peticion)');
            }
        })
        .then(function(mensaje) {
            //recuperar el chiste
            let joke = mensaje.joke;
			document.getElementById('joke').innerHTML = joke;
        })
        .catch(function(error) {
            console.log(error);
        })

    //si alternate es verdadero mostrar API Chuck Norris
    } else {
        const url2 = "https://api.chucknorris.io/jokes/random";

			let parametros2 = {
				method: 'get', 
				headers: {'Accept': 'application/json'}
			}

        fetch(url2, parametros2)
        .then(function(respuesta) {
            if (respuesta.ok) {
                return respuesta.json();
            } else {
                console.log('error en la peticion)');
            }
        })
        .then(function(mensaje) {
            //recuperar el chiste
            let joke2 = mensaje.value;
			document.getElementById('joke').innerHTML = joke2;
        })
        .catch(function(error) {
            console.log(error);
        })
    }      

 }

 

 function showWeather() {
     //saber las coordenadas de la persona que entra
     navigator.geolocation.getCurrentPosition(getLocation);

     function getLocation(pos) {
        var crd = pos.coords
    
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
            //recuperar el tiempo que hace
            let main = mensaje.weather[0].main
            let description = mensaje.weather[0].description
            document.getElementById('weather').innerHTML = `Today: ${main} - ${description}`
        })
        .catch(function(error) {
            console.log(error);
        })  
    
    }  
    
 }




