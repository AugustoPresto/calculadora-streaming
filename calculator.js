let numeroStreams = document.getElementById('num')
let resultado = document.getElementById('res')

// let requestURL = 'https://economia.awesomeapi.com.br/json/all/USD-BRL';
// let request = new XMLHttpRequest();

// request.open('GET', requestURL);
// request.send();
// request.onload = function() {
// 	let cotacaoDolar = JSON.parse(request.response);
// 	let divisaoReais = parseFloat(cotacaoDolar['USD']['ask']);
// }
// codigo acima funciona, entender Promise e then para criar let real

let dolar = {
	Spotify: 0.00437,
	Deezer: 0.0064,
	Amazon: 0.00402,
	Apple: 0.00783,
	Ytmusic: 0.008,
	Tidal: 0.01284,
	Yt: 0.00087,
};


let divisaoReais = 5.37;

let real = { // fonte: geniusbrasil na pasta
	Spotify: dolar.Spotify*divisaoReais,
	Deezer: dolar.Deezer*divisaoReais,
	Amazon: dolar.Amazon*divisaoReais,
	Apple: dolar.Apple*divisaoReais,
	Ytmusic: dolar.Ytmusic*divisaoReais,
	Tidal: dolar.Tidal*divisaoReais,
	Yt: dolar.Yt*divisaoReais,
};

// let real = {
// 	Spotify: 0.00193,
// 	Deezer: 0.00195,
// 	Amazon: 0.00754,
// 	Apple: 0.00546,
// 	Ytmusic: 0.006,  // falta verificar esse valor
// 	Tidal: 0.00604,
// 	Yt: 0.00045,
// };

function calc() {
	if (numeroStreams.value > 0) {
		res.innerHTML = `<div class="container">
			<div class="platforms spotify">
				<img src="https://img.icons8.com/ios-filled/50/000000/spotify.png"/ class="logoplataforma">
				<h2>Spotify</h2>
				<p class="reais">R$ ${(numeroStreams.value*real.Spotify).toFixed(2)}</p>
				<p class="dols">US$ ${(numeroStreams.value*dolar.Spotify).toFixed(2)}</p>
			</div>
			<div class="platforms deezer">
				<img src="https://img.icons8.com/ios-filled/50/000000/deezer.png"/ class="logoplataforma">
				<h2 class="nomeplataforma">Deezer</h2>
				<p class="reais">R$ ${(numeroStreams.value*real.Deezer).toFixed(2)}</p>
				<p class="dols">US$ ${(numeroStreams.value*dolar.Deezer).toFixed(2)}</p>
			</div>
			<div class="platforms amazon">
				<img src="https://img.icons8.com/ios-filled/50/000000/amazon-music.png"/ class="logoplataforma">
				<h2 class="nomeplataforma">Amazon Music</h2>
				<p class="reais">R$ ${(numeroStreams.value*real.Amazon).toFixed(2)}</p>
				<p class="dols">US$ ${(numeroStreams.value*dolar.Amazon).toFixed(2)}</p>
			</div>
			<div class="platforms apple">
				<img src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"/ class="logoplataforma">
				<h2 class="nomeplataforma">Apple Music</h2>
				<p class="reais">R$ ${(numeroStreams.value*real.Apple).toFixed(2)}</p>
				<p class="dols">US$ ${(numeroStreams.value*dolar.Apple).toFixed(2)}</p>
			</div>
			<div class="platforms ytmusic">
				<img src="https://img.icons8.com/ios-filled/50/000000/youtube-music.png"/ class="logoplataforma">
				<h2 class="nomeplataforma">YouTube Music</h2>
				<p class="reais">R$ ${(numeroStreams.value*real.Ytmusic).toFixed(2)}</p>
				<p class="dols">US$ ${(numeroStreams.value*dolar.Ytmusic).toFixed(2)}</p>
			</div>
			<div class="platforms tidal">
				<img src="https://img.icons8.com/ios-filled/50/000000/tidal.png"/ class="logoplataforma">
				<h2 class="nomeplataforma">Tidal</h2>
				<p class="reais">R$ ${(numeroStreams.value*real.Tidal).toFixed(2)}</p>
				<p class="dols">US$ ${(numeroStreams.value*dolar.Tidal).toFixed(2)}</p>
			</div>
			<div class="platforms yt">
				<img src="https://img.icons8.com/ios-filled/50/000000/youtube.png"/ class="logoplataforma">
				<h2 class="nomeplataforma">YouTube</h2>
				<p class="reais">R$ ${(numeroStreams.value*real.Yt).toFixed(2)}</p>
				<p class="dols">US$ ${(numeroStreams.value*dolar.Yt).toFixed(2)}</p>
			</div>
		</div>`
	} else {
		window.alert('Digite um valor acima de zero.')
	}
}
