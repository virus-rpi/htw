const secrets = require('../secrets-loader.js')

module.exports = challanges_transelation = {
    "en": {
        "1": {
            "titel": "Start",
            "render": ({ req }) => `
              <p>Welcome to Hack The Web. Here begins your exciting journey through the world of hacking. It will be a journey full of adventures. Challenges from very different areas are waiting for you. You can prove your skills or bite your teeth out on them.</p>
    
              <p>Most of the challenges are about finding an answer from the information given. However, this can usually only be found if you look at the task from the right perspective — the perspective of a hacker.</p>
    
              <p>When working on the challenges, all aids are expressly allowed. You may search the Internet, use a calculator or chatbot, make notes with pen and paper... Feel free and use the tools that help you the most when working on the tasks.</p>
              
              ${
                req.user.RoomId !== null
                  ? `<p>If you have joined a room and are participating in a hacking session: After completing this task, the 30 minutes will start. Within this time, it is your goal to work on as many tasks as possible. Your score for these 30 minutes will be entered into the room's highscore.
              </p>`
                  : ''
              }
    
              <p>Are you read? Then let's go! The answer to this first challenge is the result of 6 + 4 * 9.</p>
            `
        },
        "2": {
            "titel": "Finger-Code",
            "html": `
                <p>The content of a message is completely independent of its encoding. You can use Latin letters — or your fingers!
                </p>
                
                <p>The answer to this challenge can be found in the following picture:
                </p>
                
                <p><img src="/chals/chal2.png" alt="challenge 2 picture"></p>
            `
        },
        "3": {
            "titel": "At sea",
            "html": `
                <p>How comfortable communication has become today! With WhatsApp and Facebook, you can easily send and receive messages all over the world — it is easy to forget that a hundred years ago the situation was completely different. At that time, for example, in seafaring, one had nothing more than a beep and the Morse alphabet to communicate!
                </p>
                
                <p>But that should not be an obstacle for you either. Listen to <a href ="/chals/chal3.wav">this file</a>. In it, you will find the answer to this challenge.
                </p>
                
                <audio src="/chals/chal3.wav" controls></audio>
                
                <p>Your PC has no speakers? Scan <a href="/chals/chal3_code.png">this QR code</a> to listen to the file on your mobile phone.</p>
            `
        },
        "4": {
            "titel": "ASCII",
            "html": `
              <p>You are a brave person! You were not deterred by the cryptic letters in the title of this challenge.
              </p>
              
              <p>
                Many things in computer science can seem confusing at first glance. Especially if you don't have translation aid. But as soon as you know
                where to look for things, they become less foreign.
              </p>
              
              <p>
                This is also the case with the ASCII code. Because computers can only work with numbers, there is a uniform code for each character.
                You can find an excerpt from this in this table.
              </p>
              
              <div class="container" style="margin-top:24px;margin-bottom:24px;">
                <div class="row">
                  <div class="col">
                    <table class="table table-bordered table-hover table-sm table-dark justify-content-between">
                      <thead>
                        <tr>
                          <th scope="col">Code</th>
                          <th scope="col">Character</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>33</td><td>!</td></tr>
                        <tr><td>34</td><td>"</td></tr>
                        <tr><td>35</td><td>#</td></tr>
                        <tr><td>36</td><td>$</td></tr>
                        <tr><td>97</td><td>a</td></tr>
                        <tr><td>98</td><td>b</td></tr>
                        <tr><td>99</td><td>c</td></tr>
                        <tr><td>100</td><td>d</td></tr>
                        <tr><td>101</td><td>e</td></tr>
                        <tr><td>102</td><td>f</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="col">
                    <table class="table table-bordered table-hover table-sm table-dark justify-content-between">
                      <thead>
                        <tr>
                          <th scope="col">Code</th>
                          <th scope="col">Character</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>103</td><td>g</td></tr>
                        <tr><td>104</td><td>h</td></tr>
                        <tr><td>105</td><td>i</td></tr>
                        <tr><td>106</td><td>j</td></tr>
                        <tr><td>107</td><td>k</td></tr>
                        <tr><td>108</td><td>l</td></tr>
                        <tr><td>109</td><td>m</td></tr>
                        <tr><td>110</td><td>n</td></tr>
                        <tr><td>111</td><td>o</td></tr>
                        <tr><td>112</td><td>p</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="col">
                    <table class="table table-bordered table-hover table-sm table-dark justify-content-between">
                      <thead>
                        <tr>
                          <th scope="col">Code</th>
                          <th scope="col">Character</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>113</td><td>q</td></tr>
                        <tr><td>114</td><td>r</td></tr>
                        <tr><td>115</td><td>s</td></tr>
                        <tr><td>116</td><td>t</td></tr>
                        <tr><td>117</td><td>u</td></tr>
                        <tr><td>118</td><td>v</td></tr>
                        <tr><td>119</td><td>w</td></tr>
                        <tr><td>120</td><td>x</td></tr>
                        <tr><td>121</td><td>y</td></tr>
                        <tr><td>122</td><td>z</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              <p>An example: The dollar sign is stored in the computer with the number 36. Voilà, now it's your turn. Your answer in codes is:
              </p>
              
              <p>35 &nbsp; 115 &nbsp; 116 &nbsp; 97 &nbsp; 98 &nbsp; 105 &nbsp; 108
              </p>
            `
        },
        "5": {
            "titel": "Lemon juice",
            "html": `
                <p>This challenge here works like writing with lemon juice: You take a fountain pen and dip it in the juice of a freshly squeezed lemon. With it, you write your secret message on a white sheet of paper. Because the juice is transparent, you write "white on white" and another person cannot read the message. The person who receives the message holds the paper over a flame. The heat discolors the lemon juice and the message becomes visible.
                </p>
                
                <p>The whole thing also works digitally. Below you will find a "prepared" sheet of paper with the answer:
                </p>
                
                <br>
                
                <p>--- Here starts the sheet ---</p>
                
                <p><br><span style="color:#222222;padding-left:150px">Hier ist nichts.</span><br><br><span style="color:#222222">Lalala, das Wetter ist schön</span><br><br><br><br><span style="color:#222222;padding-left:400px">Die Antwort lautet: ${secrets(
                    'chal_5'
                )}</span><br><br>
                </p>
                
                <p>--- Here ends the sheet ---</p>
            `
        },
        "6": {
            "titel": "HTML",
            "html": `
                <p>When you look at a website on your computer, you actually only see a small part of the website. But behind the scenes, there is a whole world full of technology to discover.
                </p>
                
                <p>Similar to the notes to a piece of music or the script to a film, there is also the code to a website. And in it, you can find information that is not visible otherwise. In the source code of the website, the answer is visible in this box:</p>
                
                <pre>
                
                __________________________________________
                |                                        |
                |<!-- The answer is ${secrets(
                'chal_6'
            )}. -->                                               |
                |________________________________________|
                
                </pre>
                
                <p><button onclick="transform()">Show sourcecode</button></p>
                
                <script>
                  function transform() {
                    const code = document.body.outerHTML
                    document.body.outerHTML = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;').replace(/\\n/g, '<br>').replace(/ /g, '&nbsp;');
                    document.body.style.lineHeight = '1.2';
                    document.body.style.fontFamily = 'monospace';
                    document.body.style.marginLeft = '4px';
                    history.pushState({}, '');
                    onpopstate = () => { window.location.reload(); };
                  }
                </script>
            `
        },
        "7": {
            "titel": "HTML II",
            "html": `
                <p>This time, too, it takes a look at the source code of the page. However, you have to find the portal yourself. The answer is directly below this line ...
                </p>
                
                <!-- ... and is ${secrets('chal_7')}. -->
                
                <p><small><a href="/chals/chal7_hint_en.png" target="_blank">Hint</a></small></p>
            `
        },
        "8": {
            "titel": "Hard work",
            "html": `
                <p>Hello, mental arithmetic artist! You solve tasks faster than I can enter them in the calculator.
                </p>
                
                <p>You don't believe it? Here is an example: Your answer is the result of 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10.
                </p>
                
                <p>Wait a minute, I'll get my calculator quickly ...
                </p>
            `
        },
        "9": {
            "titel": "Hard work II",
            "html": `
                <p>You are not only good at mental arithmetic, but also motivated. A task that you start, you follow through.
                </p>
                
                <p>Your answer is the result of 1 + 2 + 3 + ... + 98 + 99 + 100.
                </p>
            `
        },
        "10": {
            "titel": "Hard work III",
            "html": `
                <p>Mental arithmetic genius, focused — and also a mathematical sense. With this, you even solve complex problems in your own way.
                </p>
                
                <p>This time, calculate the result of 1 + 2 + 3 + ... + 998 + 999 + 1000.
                </p>
            `
        },
        "15": {
            "titel": "Username",
            "html": `
                <p>The answer to this challenge is simply your username. However, it may be that your input gets a little mixed up when you submit it. Can you find out what you have to enter?
                </p>
            `
        },
        "16": {
            "titel": "Username II",
            "html": `
                <p>In computer science, everything revolves around data processing. A <em>function</em> takes an input value (e.g. your answer) and generates an output value (the answer as it arrives here).
                </p>
                
                <p>A function can swap, change, omit, etc. values — anything you want. What does this function do to your input? The answer to this challenge is again your username.
                </p>
            `
        },
        "17": {
            "titel": "Username III",
            "html": `
                <p>Another round: The answer to this challenge is again your username. However, your input is again mixed up before the evaluation. What should the input be this time?
                </p>
            `
        },
        "18": {
            "titel": "ROT13",
            "html": `
              <p>You have received an encrypted message! It looks like complete nonsense. Your hacker's eye is in demand! You look wonderful when you think hard.
              </p>
              
              <p>Drag the slider to shift the letters in the alphabet.</p>
              
              <p style="word-wrap:break-word" class="my-4" id="cipher">
              </p>
              
              <input id="slider" type="range" min="0" max="26" step="1" style="width:500px" value="0" onchange="change()" oninput="change()"/>
              
              <script>
                const message = 'terng lbh unir fhpprffshyyl qrpbqrq gur grkg nf n erjneq lbh abj trg gur nafjre naq vg vf fcvrtryovyq    (gur trezna jbeq sbe zveebe vzntr)'
                
                const slider = document.getElementById('slider')
                
                const cipher = document.getElementById('cipher')
                
                function translate(n) {
                  cipher.innerHTML = message.split('').map(c => {
                    if (c === ' ' || c === '(' || c === ')') return c
                    return String.fromCharCode(((c.charCodeAt() - 97 + n) % 26) + 97)
                  }).join('')
                }
                
                function change() {
                  translate(parseInt(slider.value))
                }
                
                change()
                
                
              </script>
            `
        },
        "21": {
            "titel": "Fingerzeig",
            "html": `
                <p>
                    It is super cool to have helpful people like you. It makes everyday life so much more pleasant when you don't know the way or forget your wallet at the checkout :)
                </p>
                
                <p> At the same time, it is no problem to ask for help. We all have times when we need help.
                </p>
                
                <p>
                <a href="https://discord.gg/9zDMZP9edd" target="_blank"><img src="/discord.png" width="300px" alt="discord"></a>
                </p>
              
                <p>On the <a href="https://discord.gg/9zDMZP9edd" target="_blank">Discord-Server</a> of Hack the Web, you have the possibility to find hints or ask questions yourself. Click on the logo to join the server. In the forum you will find a post with the title of this task. There you will find your answer.
                </p>
                
                <p>
                Note: Hack the Web is a German website, which is why the Discord server is in German. Please write only in German on the server. But with the help of a translator, you should be able to find the answer anyway ;)
                </p>
            `
        },
        "23": {
            "titel": "Grey on grey",
            "html": `
                <p>Oh no, someone has taken away all the contrast in this picture! All that's left is gray:
                </p>
                
                <p><a href="/chals/chal23.png"><img src="/chals/chal23.png" width="300" alt="challenge 23"></a>
                </p>
                
                <p>[<a href="/chals/chal23.png" download="grau.png">Download picture</a>]</p>
                
                <p>The information is still present in the image — but so faint that it is no longer visible to the eye. With a method called <a href="https://threshold.imageonline.co/" target="_blank">Threshold</a>, these subtle differences can be amplified and made visible to humans again.</p>
                
                <p>What is the first name of the person who is depicted in the picture?</p>
                </p>
            `
        },
        "24": {
            "titel": "In a blick of an eye",
            "html": `
              <p id="poper">Don't blink! The answer to this challenge is revealed in a flash.</p>
              </p>
              <p>Note: the answer is not in English so pay close attention</p>
              
              <script>
                setTimeout(function(){
                  document.getElementById("poper").innerHTML = "The answer is            ${secrets(
                    'chal_24'
                    )}"
                  setTimeout(function(){
                    document.getElementById("poper").innerHTML = "Oh. This was fast. I hope you were able to read it."
                  }, 150)
                }, 1500)
              </script>
            `
        },
        "25": {
            "titel": "Russian Doll",
            'html': `
              <p>When you zip a file, it becomes smaller and requires less space. When you zip it again, does it become even smaller?</p>
              </p>
              
              <p>Let try it! I ziped the answer a bunch of times: This is the <a href="/chals/antwort25.zip">File</a>. In it, there is the answer to this challenge. And no: If you zip a file more than once, it becomes only bigger.
              </p>
              
              <p>Note: The word "antwort" means "answer" in german</p>
            `
        }
    },
    "de": {
        "1": {
            "titel": "Start",
            "render": ({ req }) => `
              <p>Herzlich willkommen bei Hack The Web. Hier beginnt deine spannende Reise durch die Welt des Hackings. Es wird eine Reise voller Abenteuer sein. Herausforderungen aus ganz verschiedenen Themenbereichen warten auf dich. An ihnen kannst du dein Können unter Beweis stellen oder dir die Zähne ausbeißen.</p>
    
              <p>Bei den meisten Aufgaben geht es darum, aus den Angaben heraus eine Antwort zu finden. Allerdings findet sich diese größtenteils nur, wenn man die Aufgabe aus der richtigen Perspektive betrachtet - eben aus der Perspektive eines Hackers.</p>
    
              <p>Bei der Bearbeitung der Aufgaben sind ausdrücklich alle Hilfsmittel erlaubt. Du darfst im Internet suchen, einen Taschenrechner oder Chatbot verwenden, mit Stift und Papier Notizen machen ... Fühl dich frei und nutze die Tools, die dir bei der Bearbeitung der Aufgaben am meisten helfen.
              </p>
              
              ${
                req.user.RoomId !== null
                  ? `<p>Falls du einem Raum beigetreten bist und an einer Hacking-Session teilnimmst: Nach der Bearbeitung dieser Aufgabe starten die 30 Minuten. Innerhalb dieser Zeit ist es dein Ziel, so viele Aufgaben wie möglich zu bearbeiten. Deine Punktzahl für diese 30 Minuten wird in die Highscore des Raums eingetragen.
              </p>`
                  : ''
              }
    
              <p>Bist du bereit? Dann lasst uns anfangen! Die Antwort auf diese erste Aufgabe ist das Ergebnis von 6 + 4 × 9.</p>
            `
        },
        "2": {
            "titel": "Finger-Code",
            "html": `
                <p>Der Inhalt einer Nachricht ist ganz unabhängig von seiner Codierung. Man kann lateinische Buchstaben verwenden - oder seine Finger!
                </p>
                
                <p>Die Antwort zu dieser Aufgabe findet sich im folgenden Bild:
                </p>
                
                <p><img src="/chals/chal2.png" alt="challenge 2 picture"></p>
            `
        },
        "3": {
            "titel": "Auf hoher See",
            "html": `
              <p>Wie komfortabel heute die Kommunikation geworden ist! Mit WhatsApp und Facebook kann man weltweit mühelos Nachrichten versenden und empfangen - da vergisst man leicht, dass noch vor hundert Jahren die Situation ganz anders aussah. Damals hatte man, zum Beispiel in der Seefahrt, zur Kommunikation nichts mehr als einen Pieps ton und das Morse-Alphabet!
              </p>
              
              <p>Aber das sollte auch für dich kein Hindernis sein. Höre dir <a href ="/chals/chal3.wav">diese Datei</a> an. Darin findest du die Antwort zu dieser Aufgabe.
              </p>
              
              <audio src="/chals/chal3.wav" controls></audio>
              
              <p>Dein PC hat keine Lautsprecher? Scanne <a href="/chals/chal3_code.png">diesen QR-Code</a>, um dir die Datei auf dem Handy anzuhören.</p>
            `
        },
        "4": {
            "titel": "ASCII",
            "html": `
                <p>Du bist eine mutige Person! Du hast dich von den kryptischen Buchstaben im Titel dieser Aufgabe nicht abschrecken lassen.
                </p>
                
                <p>
                  Viele Dinge in der Informatik sehen auf den ersten Blick verwirrend sein. Vor allem, wenn man keine Übersetzungshilfe hat. Aber sobald man weiß,
                  wo man Dinge nachschauen kann, werden diese weniger fremd.
                </p>
                
                <p>
                  So ist es auch mit dem ASCII-Code. Weil Computer nur mit Zahlen arbeiten können, gibt es zu jedem Schriftzeichen einen einheitlichen Code. Einen Auszug davon
                  findest du in dieser Tabelle.
                </p>
                
                <div class="container" style="margin-top:24px;margin-bottom:24px;">
                  <div class="row">
                    <div class="col">
                      <table class="table table-bordered table-hover table-sm table-dark justify-content-between">
                        <thead>
                          <tr>
                            <th scope="col">Code</th>
                            <th scope="col">Zeichen</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>33</td><td>!</td></tr>
                          <tr><td>34</td><td>"</td></tr>
                          <tr><td>35</td><td>#</td></tr>
                          <tr><td>36</td><td>$</td></tr>
                          <tr><td>97</td><td>a</td></tr>
                          <tr><td>98</td><td>b</td></tr>
                          <tr><td>99</td><td>c</td></tr>
                          <tr><td>100</td><td>d</td></tr>
                          <tr><td>101</td><td>e</td></tr>
                          <tr><td>102</td><td>f</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col">
                      <table class="table table-bordered table-hover table-sm table-dark justify-content-between">
                        <thead>
                          <tr>
                            <th scope="col">Code</th>
                            <th scope="col">Zeichen</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>103</td><td>g</td></tr>
                          <tr><td>104</td><td>h</td></tr>
                          <tr><td>105</td><td>i</td></tr>
                          <tr><td>106</td><td>j</td></tr>
                          <tr><td>107</td><td>k</td></tr>
                          <tr><td>108</td><td>l</td></tr>
                          <tr><td>109</td><td>m</td></tr>
                          <tr><td>110</td><td>n</td></tr>
                          <tr><td>111</td><td>o</td></tr>
                          <tr><td>112</td><td>p</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col">
                      <table class="table table-bordered table-hover table-sm table-dark justify-content-between">
                        <thead>
                          <tr>
                            <th scope="col">Code</th>
                            <th scope="col">Zeichen</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>113</td><td>q</td></tr>
                          <tr><td>114</td><td>r</td></tr>
                          <tr><td>115</td><td>s</td></tr>
                          <tr><td>116</td><td>t</td></tr>
                          <tr><td>117</td><td>u</td></tr>
                          <tr><td>118</td><td>v</td></tr>
                          <tr><td>119</td><td>w</td></tr>
                          <tr><td>120</td><td>x</td></tr>
                          <tr><td>121</td><td>y</td></tr>
                          <tr><td>122</td><td>z</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                
                <p>Ein Beispiel: Das Dollar-Zeichen wird im Computer mit der Zahl 36 gespeichert. Voila, jetzt bist du dran. Deine Antwort in Codes lautet:
                </p>
                
                <p>35 &nbsp; 115 &nbsp; 116 &nbsp; 97 &nbsp; 98 &nbsp; 105 &nbsp; 108
                </p>
            `
        },
        "5": {
            "titel": "Zitronentinte",
            "html": `
              <p>Diese Aufgabe hier funktioniert wie das Schreiben mit Zitronentinte: Man nimmt einen Füller und taucht ihn in den Saft einer frischgepressten Zitrone. Damit schreibt man seine geheime Nachricht auf ein weißes Blatt Papier. Weil der Saft transparent ist, schreibt man sozusagen "weiß auf weiß" und ein Anderer kann die Nachricht nicht lesen. Die Person, die die Nachricht empfängt, hält das Papier über eine Flamme. Durch die Hitze verfärbt sich der Zitronensaft und die Nachricht wird sichtbar.
              </p>
              
              <p>Das ganze funktioniert auch digital. Unten findest du ein "präpariertes" Blatt Papier mit der Antwort:
              </p>
              
              <br>
              
              <p>--- Hier fängt das Blatt an ---</p>
              
              <p><br><span style="color:#222222;padding-left:150px">Hier ist nichts.</span><br><br><span style="color:#222222">Lalala, das Wetter ist schön</span><br><br><br><br><span style="color:#222222;padding-left:400px">Die Antwort lautet:        ${secrets('chal_5')        }</span><br><br>
              </p>
              
              <p>--- Hier endet das Blatt ---</p>
            `
        },
        "6": {
            "titel": "HTML",
            "html": `
                <p>Wenn du dir eine Website am Computer anschaust, dann siehst du eigentlich nur einen kleinen Teil der Website. Hinter den Kulissen aber gibt es noch eine ganze Welt voller Technik zu entdecken.
                </p>
                
                <p>Ähnlich wie die Noten zu einem Musikstück oder das Drehbuch zu einem Film gibt es auch den Code zu einer Website. Und darin finden sich Informationen, die sonst nicht zu sehen sind. Im Quelltext der Website wird die Antwort in diesem Kasten sichtbar:</p>
                
                <pre>
                
                __________________________________________
                |                                        |
                |<!-- Die Antwort lautet ${secrets(
                'chal_6'
            )}. -->                                        |
                |________________________________________|
                
                </pre>
                
                <p><button onclick="transform()">Quelltext anzeigen</button></p>
                
                <script>
                  function transform() {
                    const code = document.body.outerHTML
                    document.body.outerHTML = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;').replace(/\\n/g, '<br>').replace(/ /g, '&nbsp;');
                    document.body.style.lineHeight = '1.2'
                    document.body.style.fontFamily = 'monospace'
                    document.body.style.marginLeft = '4px'
                    history.pushState({}, '')
                    onpopstate = () => { window.location.reload() };
                  }
                </script>
            `
        },
        "7": {
            "titel": "HTML II",
            "html": `
                <p>Auch diesmal braucht es einen Blick in den Quelltext der Seite. Allerdings musst du das Portal selber finden. Die Antwort befindet sich direkt unter dieser Zeile ...
                </p>
      
                <!-- ... und lautet ${secrets('chal_7')}. -->
      
                <p><small><a href="/chals/chal7_hint1.png" target="_blank">Tipp 1</a> / <a href="/chals/chal7_hint2.png" target="_blank">Tipp 2</a></small></p>
            `
        },
        "8": {
            "titel": "Fleißaufgabe",
            "html": `
              <p>Hallo, Kopfrechen-KünstlerIn! Du löst Aufgaben schneller, als ich sie in den Taschenrechner eingeben kann.
              </p>
              
              <p>Das glaubst du nicht? Hier ein Beispiel: Deine Antwort ist das Ergebnis von 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10.
              </p>
              
              <p>Warte kurz, ich hole schnell meinen Taschenrechner ...
              </p>
            `
        },
        "9": {
            "titel": "Fleißaufgabe II",
            "html": `
              <p>Du bist nicht nur gut im Kopfrechnen, sondern auch zielgerichtet. Eine Aufgabe, die du anfängst, ziehst du durch.
              </p>
              
              <p>Deine Antwort ist das Ergebnis von 1 + 2 + 3 + ... + 98 + 99 + 100.
              </p>
            `
        },
        "10": {
            "titel": "Fleißaufgabe III",
            "html": `
              <p>Kopfrechen-Genius, fokussiert - und dazu ein mathematisches Gespür. Damit löst du auch komplexe Probleme auf deine Art und Weise.
              </p>
              
              <p>Berechne diesmal das Ergebnis von 1 + 2 + 3 + ... + 998 + 999 + 1000.
              </p>
            `
        },
        "15": {
            "titel": "Benutzername",
            "html": `
                <p>Die Antwort zu dieser Aufgabe ist ganz einfach dein Benutzername. Allerdings kann es sein, dass deine Eingabe beim Absenden etwas durcheinander gerät. Findest du heraus, was du eingeben musst?
                </p>
            `
        },
        "16": {
            "titel": "Benutzername II",
            "html": `
              <p>In der Informatik dreht sich alles um Datenverarbeitung. Eine <em>Funktion</em> nimmt dabei einen Eingabewert (z.B. deine Antwort) und erzeugt daraus einen Ausgabewert (die Antwort, wie sie hier ankommt).
              </p>
              
              <p>Eine Funktion kann Werte vertauschen, verändern, auslassen, etc. - alles Mögliche, wie man will. Was macht diese Funktion hier mit deiner Eingabe? Die Antwort zu dieser Aufgabe ist wieder dein Benutzername.
              </p>
            `
        },
        "17": {
            "titel": "Benutzername III",
            "html": `
              <p>Eine weitere Runde: Die Antwort auf diese Aufgabe ist wieder dein Benutzername. Allerdings wird deine Eingabe vor der Auswertung wieder durcheinander gebracht. Wie muss diesmal die Eingabe lauten?
              </p>
            `
        },
        "18": {
            "titel": "ROT13",
            "html": `
              <p>Du hast eine verschlüsselte Nachricht erhalten! Sie sieht wie kompletter Nonsens aus. Dein Hacker-Blick ist gefragt! Du siehst wunderbar aus, wenn du scharf nachdenkst.
              </p>
              
              <p>Ziehe den Slider, um die Buchstaben im Alphabet zu verschieben.</p>
              
              <p style="word-wrap:break-word" class="my-4" id="cipher">
              </p>
              
              <input id="slider" type="range" min="0" max="26" step="1" style="width:500px" value="0" onchange="change()" oninput="change()"/>
              
              <script>
                const message = 'fhcre qh unfg qra grkg resbytervpu ragfpuyhrffryg nyf orybuahat reunryfg qh aha qvr nagjbeg haq fvr ynhgrg fcvrtryovyq'
                
                const slider = document.getElementById('slider')
                
                const cipher = document.getElementById('cipher')
                
                function translate(n) {
                  cipher.innerHTML = message.split('').map(c => {
                    if (c === ' ') return c
                    return String.fromCharCode(((c.charCodeAt() - 97 + n) % 26) + 97)
                  }).join('')
                }
                
                function change() {
                  translate(parseInt(slider.value))
                }
                
                change()
                
                
              </script>
            `
        },
        "21": {
            "titel": "Fingerzeig",
            "html": `
              <p>
                Es ist super cool, hilfsbereite Menschen wie dich zu haben. Das macht den Alltag so viel angenehmer, wenn man mal den Weg nicht weiß oder an der Kasse seinen Geldbeutel vergessen hat :)
              </p>
              
              <p>Gleichzeitig ist es auch kein Problem, um Hilfe zu bitten. Wir alle kommen irgendwann mal nicht weiter.
              </p>
                  
              <p>
                <a href="https://discord.gg/9zDMZP9edd" target="_blank"><img src="/discord.png" width="300px" alt="discord"></a>
              </p>
              
              <p>Auf dem <a href="https://discord.gg/9zDMZP9edd" target="_blank">Discord-Server</a> von Hack The Web hast du die Möglichkeit, Hinweise zu finden oder selbst Fragen zu stellen. Klicke auf das Logo, um dem Server beizutreten. Im Forum findest du einen Post mit dem Titel dieser Aufgabe. Dort findest du deine Antwort.
              </p>
            `
        },
        "23": {
            "titel": "Grau auf Grau",
            "html": `
                <p>Oje, bei diesem Bild hat jemand den ganzen Kontrast weggenommen! Übrig geblieben ist nur noch grau:
                </p>
                
                <p><a href="/chals/chal23.png"><img src="/chals/chal23.png" width="300" alt="challenge 23"></a>
                </p>
                
                <p>[<a href="/chals/chal23.png" download="grau.png">Bild herunterladen</a>]</p>
                
                <p>Die Informationen sind immer noch im Bild vorhanden - allerdings so schwach, dass sie mit dem Auge nicht mehr zu sehen sind. Mit einer Methode namens <a href="https://threshold.imageonline.co/" target="_blank">Threshold</a> können diese feinen Unterschiede verstärkt und wieder für den Menschen sichtbar gemacht werden.</p>
                
                <p>Wie lautet der Vorname der abgebildeten Person?
                </p>
            `
        },
        "24": {
            "titel": "Nicht blinzeln",
            "html": `
              <p id="poper">Achtung, nicht blinzeln!
              </p>
              
              <script>
                setTimeout(function(){
                  document.getElementById("poper").innerHTML = "Die Antwort auf diese Aufgabe lautet            ${secrets(
                    'chal_24'
                    )}"
                  setTimeout(function(){
                    document.getElementById("poper").innerHTML = "Ups, das ging schnell."
                  }, 150)
                }, 1500)
              </script>
            `
        },
        "25": {
            "titel": "Russische Puppen",
            "html": `
              <p>Wenn man eine Datei zipt, dann wird sie kleiner und braucht weniger Speicherplatz. Wenn man eine Zip-Datei nochmal zipt, wird sie dann noch kleiner?
              </p>
              
              <p>Warum nicht ausprobieren? Ich habe die Antwort mal ordentlich gezipt: Hier ist die <a href="/chals/antwort25.zip">Datei</a>. Darin findet sich die Lösung zu dieser Aufgabe. Und nein, mehrfaches Zippen bringt nichts und macht die Datei sogar größer.
              </p>
            `
        }
    },
}