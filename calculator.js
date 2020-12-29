let numeroStreams = document.getElementById('num')
let resultado = document.getElementById('res')

function calc() {
	console.log(numeroStreams.value)
	if (numeroStreams.value > 0) {
		console.log('número correto')
	} else {
		console.log('número errado')
	}
}