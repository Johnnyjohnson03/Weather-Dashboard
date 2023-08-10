const app = {
  init: () => {
    document
      .getElementById('btnGet')
      .addEventListener('click', app.fetchweather);
    document
      .getElementById('btnCurrent')
      .addEventListener('click', app.getLocation);
  },
  fetchWeather: (ev) => {
    // use the values from the longitude and latitude to fetch the weather
    let lat = document.getElementById('latitude').value;
    let lon = document.getElementById('longitude').value;
    let key = '2d498e008549c3183eeba1f30ba5afd6';
    let lang = 'en';
    let units = 'metric';
    let url = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';
    //fetch the weather
    fetch(url)
      .then((resp) => {
        if(!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((data) => {
        app.showWeather(data);
      })
      .catch(console.err);
  },
  getLocation: (ev) => {
    let opts = {
        enableHighAccuracy: true,
        timeout: 1000 * 10, //10 seconds
        maximumAge: 1000 * 60 * 5, //5 minutes
    };
    navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
  },
  ftw: (position) => {
    // got position
    document.getElementById('latitude').value = 
      position.coords.latitude.toFixed(2);
    document.getElementById('longitude'). value = 
      position.coords.longitude.toFixed(2);
  },
  wtf: (err) => {
    //geolocation failed
    console.error(eer);
  },
  showWeather: (resp) => {
    console.log(resp);
    let row = document.querySelector('.weather.row');
    // clear out the old weather and add the new
    // row.innerHTML = '';
    row.innerHTML = resp.daily
      .map((day, idx) => {
        if (idx <= 2) {
            let dt = new Date(day.dt * 1000); //timestamp * 1000
            let sr = new Date(day.sunrise * 1000).toTimeString();
            let ss = new Date(day.sunset * 1000).toTimeString();
            return '<div class="col">
                <div class="card">
                <h5 class
            
            ' 
        }
      }
      
      
      
      
      )
  },



































}