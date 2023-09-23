const object = document.getElementById("text");

function flipColor() {
  if (object.style.color === "white") {
    object.style.color = "red"
  } else {
    object.style.color = "white"
  }
}

function run() {
  flipColor()
  setTimeout(run, 400)
}

run()

function countdown() {
  const counter = document.getElementById('counter');
  if (counter) {
    const val = parseInt(counter.innerHTML)
    if (!isNaN(val) && val > 0) {
      counter.innerHTML = val - 1
    } else {
      document.getElementById('skipp').innerHTML = navigator.language.startsWith("de")?'Werbung jetzt überspringen':'Skip Ad Now'
      document.getElementById('skipp').onclick = function () {
        document.getElementById('banner').style.display = 'none'
      }
    }
    setTimeout(countdown, 1000)
  } else {
    // fail save!
    document.getElementById('skipp').onclick = function () {
      document.getElementById('banner').style.display = 'none'
    }
    setTimeout(countdown, 1000)
  }
}

countdown()
