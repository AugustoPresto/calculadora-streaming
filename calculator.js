let numeroStreams = document.getElementById('num')
let resultado = document.getElementById('res')

function calc() {
	console.log(numeroStreams.value)
	if (numeroStreams.value > 0) {
		res.innerHTML = `<div class="container">
			<div class="platforms spotify">
				<img src="https://img.icons8.com/ios-filled/50/000000/spotify.png"/ class="logoplataforma">
				<h2>Spotify</h2>
				<p class="reais">R$ </p>
				<p class="dols">US$ </p>
			</div>
			<div class="platforms deezer">
				<img src="https://img.icons8.com/ios-filled/50/000000/deezer.png"/ class="logoplataforma">
				<h2 class="nomeplataforma">Deezer</h2>
				<p class="reais">R$ </p>
				<p class="dols">US$ </p>
			</div>
			<div class="platforms amazon">
				<img src="https://img.icons8.com/ios-filled/50/000000/amazon-music.png"/ class="logoplataforma">
				<h2 class="nomeplataforma">Amazon Music</h2>
				<p class="reais">R$ </p>
				<p class="dols">US$ </p>
			</div>
			<div class="platforms apple">
				<img src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"/ class="logoplataforma">
				<h2 class="nomeplataforma">Apple Music</h2>
				<p class="reais">R$ </p>
				<p class="dols">US$ </p>
			</div>
			<div class="platforms ytmusic">
				<img src="https://img.icons8.com/ios-filled/50/000000/youtube-music.png"/ class="logoplataforma">
				<h2 class="nomeplataforma">YouTube Music</h2>
				<p class="reais">R$ </p>
				<p class="dols">US$ </p>
			</div>
			<div class="platforms tidal">
				<img src="https://img.icons8.com/ios-filled/50/000000/tidal.png"/ class="logoplataforma">
				<h2 class="nomeplataforma">Tidal</h2>
				<p class="reais">R$ </p>
				<p class="dols">US$ </p>
			</div>
			<div class="platforms yt">
				<img src="https://img.icons8.com/ios-filled/50/000000/youtube.png"/ class="logoplataforma">
				<h2 class="nomeplataforma">YouTube</h2>
				<p class="reais">R$ </p>
				<p class="dols">US$ </p>
			</div>
		</div>`
	} else {
		console.log('número errado')
	}
}