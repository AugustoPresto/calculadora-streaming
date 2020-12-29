let numeroStreams = document.getElementById('num')
let resultado = document.getElementById('res')

let dolarSpotify = 0.00437
let dolarDeezer = 0.0064
let dolarAmazon = 0.00402
let dolarApple = 0.00783
let dolarYtmusic = 0.008
let dolarTidal = 0.01284
let dolarYt = 0.00087

let divisaoReais = 5.18


function calc() {
	console.log(numeroStreams.value)
	if (numeroStreams.value > 0) {
		res.innerHTML = `<div class="container">
			<div class="platforms spotify">
				<img src="https://img.icons8.com/ios-filled/50/000000/spotify.png"/ class="logoplataforma">
				<h2>Spotify</h2>
				<p class="reais">R$ ${(numeroStreams.value*0.00129).toFixed(2)}</p>
				<p class="dols">US$ ${(numeroStreams.value*dolarSpotify).toFixed(2)}</p>
			</div>
			<div class="platforms deezer">
				<img src="https://img.icons8.com/ios-filled/50/000000/deezer.png"/ class="logoplataforma">
				<h2 class="nomeplataforma">Deezer</h2>
				<p class="reais">R$ </p>
				<p class="dols">US$ ${(numeroStreams.value*dolarDeezer).toFixed(2)}</p>
			</div>
			<div class="platforms amazon">
				<img src="https://img.icons8.com/ios-filled/50/000000/amazon-music.png"/ class="logoplataforma">
				<h2 class="nomeplataforma">Amazon Music</h2>
				<p class="reais">R$ </p>
				<p class="dols">US$ ${(numeroStreams.value*dolarAmazon).toFixed(2)}</p>
			</div>
			<div class="platforms apple">
				<img src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"/ class="logoplataforma">
				<h2 class="nomeplataforma">Apple Music</h2>
				<p class="reais">R$ </p>
				<p class="dols">US$ ${(numeroStreams.value*dolarApple).toFixed(2)}</p>
			</div>
			<div class="platforms ytmusic">
				<img src="https://img.icons8.com/ios-filled/50/000000/youtube-music.png"/ class="logoplataforma">
				<h2 class="nomeplataforma">YouTube Music</h2>
				<p class="reais">R$ </p>
				<p class="dols">US$ ${(numeroStreams.value*dolarYtmusic).toFixed(2)}</p>
			</div>
			<div class="platforms tidal">
				<img src="https://img.icons8.com/ios-filled/50/000000/tidal.png"/ class="logoplataforma">
				<h2 class="nomeplataforma">Tidal</h2>
				<p class="reais">R$ </p>
				<p class="dols">US$ ${(numeroStreams.value*dolarTidal).toFixed(2)}</p>
			</div>
			<div class="platforms yt">
				<img src="https://img.icons8.com/ios-filled/50/000000/youtube.png"/ class="logoplataforma">
				<h2 class="nomeplataforma">YouTube</h2>
				<p class="reais">R$ </p>
				<p class="dols">US$ ${(numeroStreams.value*dolarYt).toFixed(2)}</p>
			</div>
		</div>`
	} else {
		console.log('Digite um valor acima de zero.')
	}
}