const boom = new Audio("./sounds/boom.wav")
const clap = new Audio("./sounds/clap.wav")
const hihat = new Audio("./sounds/hihat.wav")
const kick = new Audio("./sounds/kick.wav")
const openhat = new Audio("./sounds/openhat.wav")
const ride = new Audio("./sounds/ride.wav")
const snare = new Audio("./sounds/snare.wav")
const tink = new Audio("./sounds/tink.wav")
const tom = new Audio("./sounds/tom.wav")
const soundDict = {
  65:boom,
  83:clap,
  68:hihat,
  70:kick,
  71:openhat,
  72:ride,
  74:snare,
  75:tink,
  76:tom,
}

const handleKeyPress = (event) => {
  sound = (soundDict[event.keyCode])
  sound.currentTime = 0
  sound.play()
}

window.addEventListener('keydown',(event=>handleKeyPress(event)))

