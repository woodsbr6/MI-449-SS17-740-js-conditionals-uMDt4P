var secretButton = document.getElementById('clik-4-secretz')

secretButton.addEventListener('click', function () {
	var codeword = window.prompt('What\'s the codeword?')
	codeword = codeword||''
	codeword = codeword.toLowerCase().trim()
	if (codeword === 'bananas') {
		var answer = window.confirm('Oh hey pal! nice to see you again!')
		if (answer) {
			var Guessing = window.prompt('Guess the number in my head!')
			Guessing = parseInt(Guessing)
			if (isNaN(Guessing)) {
				Guessing = 0
			}
			if (Guessing < 10||Guessing>50) {
				window.alert('Nice Try but thats wrong!')
			}else {
				window.alert('Wise choice.')
			}
		} else {
			window.alert('Goodbye!')
		}
	} else if (codeword === 'apples') {
		window.alert('Sorry, wrong fruit.')
	} else {
		window.alert('Nice try... 😏')
	}
})
function coolFunction() {
    var x = document.getElementById("demo")
    x.innerHTML = Math.floor((Math.random() * 100) + 1);
}
