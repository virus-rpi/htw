/*! terminal.js v2.0 | (c) 2014 Erik Österberg | https://github.com/eosterberg/terminaljs */

const Terminal = (function () {
  // PROMPT_TYPE
  const PROMPT_INPUT = 1, PROMPT_PASSWORD = 2, PROMPT_CONFIRM = 3;

  const fireCursorInterval = function (inputField, terminalObj) {
    const cursor = terminalObj._cursor;
    setTimeout(function () {
      if (inputField.parentElement && terminalObj._shouldBlinkCursor) {
        cursor.style.visibility = cursor.style.visibility === 'visible' ? 'hidden' : 'visible'
        fireCursorInterval(inputField, terminalObj)
      } else {
        cursor.style.visibility = 'visible'
      }
    }, 500)
  };

  let firstPrompt = true;
  let promptInput = function (terminalObj, message, PROMPT_TYPE, callback) {
    const shouldDisplayInput = (PROMPT_TYPE === PROMPT_INPUT);
    const inputField = document.createElement('input');

    inputField.style.zIndex = '-100'
    inputField.style.outline = 'none'
    inputField.style.border = 'none'
    inputField.style.opacity = '0'
    inputField.style.fontSize = '0.2em'

    terminalObj._inputLine.textContent = '> '
    terminalObj._input.style.display = 'block'
    terminalObj.html.appendChild(inputField)
    fireCursorInterval(inputField, terminalObj)

    if (message.length) terminalObj.print(PROMPT_TYPE === PROMPT_CONFIRM ? message + ' (y/n)' : message)

    inputField.onblur = function () {
      terminalObj._cursor.style.display = 'none'
    }

    inputField.onfocus = function () {
      inputField.value = terminalObj._inputLine.textContent.substring(2)
      terminalObj._cursor.style.display = 'inline'
    }

    terminalObj.html.onclick = function () {
      inputField.focus()
    }

    inputField.onkeydown = function (e) {
      if (e.which === 37 || e.which === 39 || e.which === 38 || e.which === 40 || e.which === 9) {
        e.preventDefault()
      } else if (shouldDisplayInput && e.which !== 13) {
        setTimeout(function () {
          terminalObj._inputLine.textContent = '> ' + inputField.value
        }, 1)
      }
    }
    inputField.onkeyup = function (e) {
      if (PROMPT_TYPE === PROMPT_CONFIRM || e.which === 13) {
        terminalObj._input.style.display = 'none'
        const inputValue = inputField.value;
        if (shouldDisplayInput) terminalObj.print('> ' + inputValue)
        terminalObj.html.removeChild(inputField)
        if (typeof (callback) === 'function') {
          if (PROMPT_TYPE === PROMPT_CONFIRM) {
            callback(inputValue.toUpperCase()[0] === 'Y')
          } else callback(inputValue)
        }
      }
    }
    if (firstPrompt) {
      firstPrompt = false
      setTimeout(function () {
        inputField.focus()
      }, 50)
    } else {
      inputField.focus()
    }
  }

  let terminalBeep;

  return function (id) {
    if (!terminalBeep) {
      /*terminalBeep = document.createElement('audio')
      var source = '<source src="http://www.erikosterberg.com/terminaljs/beep.'
      terminalBeep.innerHTML = source + 'mp3" type="audio/mpeg">' + source + 'ogg" type="audio/ogg">'
      terminalBeep.volume = 0.05*/
    }

    this.html = document.createElement('div')
    this.html.className = 'Terminal'
    if (typeof (id) === 'string') {
      this.html.id = id
    }

    this._innerWindow = document.createElement('div')
    this._output = document.createElement('p')
    this._inputLine = document.createElement('span') //the span element where the user's input is put
    this._cursor = document.createElement('span')
    this._input = document.createElement('p') //the full element administering the user input, including cursor

    this._shouldBlinkCursor = true
    this.print = function (message) {
      const newLine = document.createElement('div');
      newLine.textContent = message
      if (!message) {
        newLine.innerHTML = '&nbsp;'
      }
      this._output.appendChild(newLine)
    }

    this.input = function (message, callback) {
      promptInput(this, message, PROMPT_INPUT, callback)
    }

    this.password = function (message, callback) {
      promptInput(this, message, PROMPT_PASSWORD, callback)
    }

    this.confirm = function (message, callback) {
      promptInput(this, message, PROMPT_CONFIRM, callback)
    }

    this.clear = function () {
      this._output.innerHTML = ''
    }

    this.setTextSize = function (size) {
      this._output.style.fontSize = size
      this._input.style.fontSize = size
    }

    this.setTextColor = function (col) {
      this.html.style.color = col
      this._cursor.style.background = col
    }

    this.setBackgroundColor = function (col) {
      this.html.style.background = col
    }

    this.setWidth = function (width) {
      this.html.style.width = width
    }

    this.setHeight = function (height) {
      this.html.style.height = height
    }
    this._input.appendChild(this._inputLine)
    this._input.appendChild(this._cursor)
    this._innerWindow.appendChild(this._output)
    this._innerWindow.appendChild(this._input)
    this.html.appendChild(this._innerWindow)

    this.setBackgroundColor('black')
    this.setTextColor('white')
    this.setTextSize('1em')
    this.setWidth('100%')
    this.setHeight('100%')

    this.html.style.fontFamily = 'Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace'
    this.html.style.margin = '0'
    this.html.style.overflow = "auto"
    this._innerWindow.style.padding = '10px'
    this._innerWindow.style.position = "relative"
    this._input.style.margin = '0'
    this._output.style.margin = '0'
    this._cursor.style.background = 'white'
    this._cursor.innerHTML = 'C' //put something in the cursor...
    this._cursor.style.display = 'none' //then hide it
    this._input.style.display = 'none'
  }
}());
