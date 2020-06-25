

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    api_key:'6a215f0534845c83a6dfae1d7ea59ba1',
    url_base:'https://api.openweathermap.org/data/2.5/',
    input__value:'',
    weather:'',
    date:new Date(),
  },
  methods: {
  	search__submit(e) {
  		if(e.key == 'Enter') {
        	fetch(`${this.url_base}weather?q=${this.input__value}&units=metric&APPID=${this.api_key}`)
				.then(weather => {
					return weather.json();
				}).then(this.displayResults);
  		}
  	},
  	displayResults(results){
  		this.weather = results;
  		console.log(results);
  	}
  }

})