var secretButton = document.getElementById('clik-4-secretz')
var randomNumber = Math.random() * 100

secretButton.addEventListener('click', function () {
  var codeword = window.prompt('What\'s the codeword?')
  codeword = codeword || ''
  codeword = codeword.toLowerCase().trim()
  if (codeword === 'bananas') {
    var answer = window.confirm('Oh hey pal! nice to see you again!')
    if (answer) {
      var Guessing = window.prompt('Guess the number in my head!')
      Guessing = parseInt(Guessing)
      if (isNaN(Guessing)) {
        Guessing = 0
      }
      if (randomNumber < 20) {
        window.alert('That is correct')
      } else if (randomNumber > 50) {
        window.alert('What? That was rude. You can\'t just star  screaming "Cancel" in the middle of a conversation.')
      } else {
        window.alert('Huh, OK then...')
      }
      if (Guessing < 10 || Guessing > 50) {
        window.alert('Nice Try but thats wrong!')
      } else {
        window.alert('Wise choice.')
      } }
  } })
