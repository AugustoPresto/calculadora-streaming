let numeroStreams = document.getElementById('num')
let resultado = document.getElementById('res')

function calc() {
	console.log(numeroStreams.value)
	if (numeroStreams.value > 0) {
		res.innerHTML = `<div class="container">
			<div class="platforms spotify">
				<img src="https://img.icons8.com/ios-filled/50/000000/spotify.png"/>
				<h2>Spotify</h2>
			</div>
			<div class="platforms deezer">
				<img src="https://img.icons8.com/ios-filled/50/000000/deezer.png"/>
				<h2>Deezer</h2>
			</div>
			<div class="platforms amazon">
				<img src="https://img.icons8.com/ios-filled/50/000000/amazon-music.png"/>
				<h2>Amazon Music</h2>
			</div>
			<div class="platforms apple">
				<img src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"/>
				<h2>Apple Music</h2>
			</div>
			<div class="platforms ytmusic">
				<img src="https://img.icons8.com/ios-filled/50/000000/youtube-music.png"/>
				<h2>YouTube Music</h2>
			</div>
			<div class="platforms tidal">
				<img src="https://img.icons8.com/ios-filled/50/000000/tidal.png"/>
				<h2>Tidal</h2>
			</div>
			<div class="platforms yt">
				<img src="https://img.icons8.com/ios-filled/50/000000/amazon-music.png"/>
				<h2>YouTube</h2>
			</div>
		</div>`
	} else {
		console.log('número errado')
	}
}