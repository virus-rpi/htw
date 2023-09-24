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
                // noinspection SpellCheckingInspection
                const message = 'terng lbh unir fhpprffshyyl qrpbqrq gur grkg nf n erjneq lbh abj trg gur nafjre naq vg vf fcvrtryovyq    (gur trezna jbeq sbe zveebe vzntr)'
                
                const slider = document.getElementById('slider')
                
                const cipher = document.getElementById('cipher')
                
                function translate(n) {
                  cipher.innerHTML = message.split('').map(c => {
                    if (c === ' ' || c === '(' || c === ')') return c
                    return String.fromCharCode(((c.charCodeAt(0) - 97 + n) % 26) + 97)
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
                <a href="https://discord.gg/9zDMZP9edd" target="_blank"><img src="/discord.png" style="max-width: 300px;" alt="discord"></a>
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
                
                <p><a href="/chals/chal23.png"><img src="/chals/chal23.png" style="max-width: 300px;" alt="challenge 23"></a>
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
              
              <p>Let try it! I zipped the answer a bunch of times: This is the <a href="/chals/antwort25.zip">File</a>. In it, there is the answer to this challenge. And no: If you zip a file more than once, it becomes only bigger.
              </p>
              
              <p>Note: The word "antwort" means "answer" in german</p>
            `
        },
        "26": {
            "titel": "Time-machine",
            "html": `
              <p>You look like someone who is interested in backstories! There are a few exciting aspects to Hack The Web's origin story, and here's a little history lesson just for you.
              </p>
              
              <p>The concept of challenges arranged in a map has been adopted by Hack The Web from <a href="https://hacker.org/" target="_blank">Hacker.org</a>. This site is a great inspiration, but it didn't fall from the sky either. When the Challenges were published in 2008, a project that could be described as a hacker community had been on the domain for many years.
              </p>
              
              <p>Thanks to the Internet Archive, we can travel back in time, and you can experience how this community got along.
              </p>
              
              <p>Here you can see a version of hacker.org from the <a href="https://web.archive.org/web/19961218220409/http://hacker.org/" target="_blank">December 18, 1996</a>.
              </p>
              
              <iframe src="https://web.archive.org/web/19961218220409/http://hacker.org/" style="width:100%;height:800px;"></iframe>
              
              <p>Your answer is the operator's email address.
              </p>
            `
        },
        "27": {
            "titel": "Tactility",
            "html": `
            <p>Carefully key over the field and read the answer:
            </p>
            
            <p><svg id="chal27"></svg></p>
              
            <script src="/svg.min.js"></script>
            <script src="/chals/chal27.js"></script>
            
            <p>Note: The answer is in German, so don't be confused if the word doesn't make sense to you.</p>
           `
        },
        "28": {
            "titel": "Ads",
            "html": `
              <p>Annoying advertising banners that block the content - who hasn't seen that? In this case too, an advertisement obscures the answer to the challenge.
              </p>
              
              <p>Fortunately, modern browsers offer tools with which you can edit a website and thus remove one or two annoying elements. (If these are not available: <a href="#" onclick="(function () { const script=document.createElement('script');script.src='https://x-ray-goggles.mouse.org/webxray.js';script.className='webxray';script.setAttribute('data-lang','en-US');script.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');document.body.appendChild(script);}())">Load X-Ray</a>)
              </p>
              
              <div style="position:absolute;width:1000px;height:1000px;background-color:green" id="banner">
                <span style="font-size:100px" id="text">Congratulations! You have won!</span>
                <div style="margin-top:20px; border: 2px solid black; width: 350px; margin-left: 40px; cursor: pointer; padding: 8px" id="skipp">Skip in <span id="counter">4568</span> seconds ...</div>
              </div>
              
              <p>The answer to this challenge is <span id="solution"></span>.
              </p>
              
              <script src="/chals/chal28.js"></script>
              <!--suppress JSDeprecatedSymbols -->
              <script>document.getElementById("solution").innerHTML = ' ' + atob('${Buffer.from(secrets('chal_28')).toString('base64')}')</script>
            `
        },
        "29": {
            "titel": "GPS-Code",
            "html": `
                <p>The first letters of these words are the answer to this challenge:  
                </p>
                
                <p>
                    52.7073, 8.5031<br>
                    48.63253, 12.85515<br>
                    50.9761, 8.8677<br>
                    53.2724, 12.824<br>
                    48.0336, 7.7649<br>
                    49.59637, 11.11833<br>
                    53.679, 10.6947
                </p>
            `
        },
        "30": {
            "titel": "UNIX timestamp",
            "html": `
            <p>In which year was the date 817876800?
            </p>
            `
        },
        "31": {
            "titel": "Calculator III",
            "html": `
              <p>It's time for a new calculator:
              </p>
              
              <br>
              
              <p id="op-buttons"></p>
              <p id="num-buttons"></p>
              <p><svg id="stack"></svg></p>
              
              <script src="/svg.min.js"></script>
              <script src="/chals/chal31.js"></script>
              
              <br>
              
              <p>This calculator consists of a "tube" that is open on the right. You can use the number keys to push individual numbers into this tube.
              </p>
              
              <p>To generate more numbers, you have to do math. There are four basic arithmetic operations. With these keys, the two numbers on the far right are taken out of the tube and added, subtracted, multiplied or divided together. Try this and see what happens!
              </p>
              
              <p>There are two special commands: <strong>drop</strong> removes the last number from the tube (i.e. the number on the far right), <strong>dup</strong> adds the last number again (duplicates).
              </p>
              
              <p>Calculate the result 1000:
              </p>
              
              <p><img src="/chals/chal31_result.png" style="max-width: 300px" alt="chal31"></p>
            `
        },
        "32": {
            "titel": "Calculator IV",
            "html": `
              <p id="op-buttons"></p>
              <p id="num-buttons"></p>
              <p><svg id="stack"></svg></p>
              
              <script src="/svg.min.js"></script>
              <script src="/chals/chal31.js"></script>
              
              <p>This time, calculate the number 1337.
              </p>
            `
        },
        "33": {
            "titel": "Calculator V",
            "html": `
              <p id="op-buttons"></p>
              <p id="num-buttons"></p>
              <p><svg id="stack"></svg></p>
              
              <script src="/svg.min.js"></script>
              <script src="/chals/chal33.js"></script>
              
              <p>Calculate the number 100. However, this time a few keys are missing.
              </p>
            `
        },
        "36": {
            "titel": "Username V",
            "html": `
                <p>It has never been easier to build your own website and put it online. Hence, the task for you: create a website that contains exactly your username (no HTML, no spaces, just your username!) and enter the URL as the answer:
                </p>
            `
        },
        "37": {
            "titel": "Emoji",
            "html": `
              <p>Nothing in the world is as beautiful as your smile. I could look at it all day.
              </p>
              
              <p>Send me a smile. Your answer is this emoji:
              </p>
              
              <p><img src="/chals/chal37.png" style="max-width: 80px" alt="chal37"/></p>
            `
        },
        "38": {
            "titel": "Metadata",
            "html": `
              <p>Oh, how sweet! Look at this photo:
              </p>
              
              <p><img src="/chals/chal38-en.jpg" alt="chal38-en"></p>
              
              <p>In addition to what you can see in the photo, many image files contain other information, such as the camera model or the ISO number. These are the so-called <em>EXIF-Tags</em> and unfortunately these are not immediately visible. However, there are some tools that can show you these tags. And there you will find the answer.</p>
            `
        },
        "39": {
            "titel": "Flags",
            "html": `
              <p>Flags can have many meanings: They exist for countries and territories, but you can also use them as signals and alphabets. This potential is fully exploited in shipping.
              </p>
              
              <p>Watch<a href="/chals/chal39.mp4">this video</a>. What word do the letters of the signal flags make?
              </p>
              
              <p>Note: The answer is in German, but you don't need to understand it to solve the challenge.
              </p>
            `
        },
        "40": {
            "titel": "Terminal",
            "html": `
              <p>Black screen, white font, cryptic characters and complicated commands...also known by the name <em>Terminal</em>.
              </p>
              
              <p>Behind this is a text-based way to interact with a computer. Instead of clicking with the mouse, the desired actions are entered and carried out using commands. And it's not that big of a rocket science!
              </p>
              
              <p>This task contains a lightweight terminal that manages a file system. There are various directories and files — one of these files contains the answer to this task.
              </p>
              
              <p>To move and orient yourself in the file system, there are four commands:
              <ul>
                <li><code>ls</code><br>This command shows the contents of the directory you are currently in.
                </li>
                <li><code>pwd</code><br>This command shows you the path of the current directory.
                </li>
                <li><code>cd DIR</code><br>This command moves you to a new directory whose name you write instead of DIR. There is a special variant to get back up a level <code>cd ..</code>
                </li>
                <li><code>cat FILE</code><br>This command displays the contents of a file in the current directory. Instead of FILE, write the name of the file.
                </li>
              </ul>
              </p>
              
              <p>Start your search for the answer in the file<strong>GOP/053/vjer</strong>:
              </p>
              
              <div id="terminal" class="my-4"></div>
              
              <script src="/seedrandom.min.js"></script>
              <script src="/chals/terminal.js"></script>
              <script src="/chals/chal40.js"></script>
              
              <p>Example: Enter the following commands one after the other<br>
                <code>cd GOP</code><br>
                <code>cd 239</code><br>
                <code>ls</code><br>
                <code>cat yley</code><br>
                <code>cd ..</code><br>
                <code>pwd</code>
              </p>
            `
        },
        "41": {
            "titel": "Cross Reading",
            "html": `
               <p>A just a bad poem... or a secret message?
               </p>
               
               <p>
                 <!-- noinspection SpellCheckingInspection -->
                 <em>
                 <strong>T</strong>he hours stretch before the glowing screen.<br>
                 <strong>H</strong>uman language is so imprecise.<br>
                 <strong>E</strong>verything depends on clarity.<br>
                 <strong>A</strong>nd clarity emerges through code's decree.<br>
                 <br>
                 <strong>N</strong>ow is the moment, a canvas to create,<br>
                 <strong>s</strong>culpting worlds in the digital state.<br>
                 <strong>W</strong>ith every line, a universe unfurls.<br>
                 <strong>E</strong>ager minds contemplate the code's weight.<br>
                 <br>
                 <strong>R</strong>evealing secrets in each algorithm's dance,<br>
                 <strong>i</strong>n the binary, we find our cosmic trance. <br>
                 <strong>S</strong>ynchronizing bytes in a digital romance: <br>
                 <br>
                 <strong>S</strong>eeking clarity, as we advance.<br>
                 <strong>T</strong>apping keys, we're bound to transcend,<br>
                 <strong>e</strong>levating thought, in this realm we intend,<br>
                 <strong>n</strong>urturing ideas, our journey won't end,<br>
                 <strong>o</strong>ffline is good, but online is better.
                 </em>
               </p>
               
               <p>Note: This poem may not make sense as it was partly ki generated for the reason that i (the translator) cannot write poetry</p>
            `
        },
        "42": {
            "titel": "Catchy Tune",
            "html": `
              <p>Who doesn't know him: the song that gets into our ears and haunts us day and night?
              </p>
              
              <p>Here is an example of this:
              </p>
              
              <audio src="/chals/chal_42.mp3" controls loop></audio>
              
              <p>The question now is: What is the name of the song?
              </p>
            `
        },
        "43": {
            "titel": "POST it",
            "html": `
                <p>This time there is no beating around the bush: the answer to this challenge is "Klamauk".
                </p>
                
                <p>Unfortunately, there is no input field for this challenge. But that shouldn't stop you from sending the answer to the website!
                </p>
            `
        },
        "44": {
            "titel": "Progressbar II",
            "html": `
              <p>The smarter one gives in — and you have no problem giving in if it definitely doesn't go any further.
              </p>
              
              <p>This loading bar takes a very long time. Will you wait it out until the end — or find another solution?
              </p>
              
              <div class="progress my-4">
                <div id="44_bar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 1%"></div>
              </div>
              
              <p id="value">SQNLPZWYVNYLZZ</p>
              
              <p id="status">...</p>
              
              <script>
                const bar = document.getElementById('44_bar')
                const valueDiv = document.getElementById('value')
                const status = document.getElementById('status')
                
                const string = "SQNLPZWYVNYLZZ"
                const steps = 100000
        
                let step = -steps
                let value = string
        
                function forward() {
                  const i = (((step + 1) % string.length) + string.length) % string.length
                  const chars = value.split('')
                  chars[i] = String.fromCharCode(65 + ((chars[i].charCodeAt(0) - 65 + 1) % 26))
                  value = chars.join('')
                  step++
                  return value
                }
                
                function work(noTimeout) {
                  if (step >= 0) {
                    bar.style.width = '100%'
                  } else {
                    bar.style.width = (((steps+step)/steps) * 98.9 + 1) + '%'
                    valueDiv.innerHTML = forward(valueDiv.innerHTML)
                    status.innerHTML = '(' + (step+steps) + '/' + steps + ')'
                    if (!noTimeout) {
                      setTimeout(work, 1000)
                    }
                  }
                }
                
                window.onkeydown = () => {
                  work(true)
                }
                
                setTimeout(work, 2000)
              </script>
            `
        },
        "45": {
            "titel": "Characters",
            "html": `
              <p>We live in an international world and hackers also speak many languages. Some languages differ greatly from our language and thus present us with challenges. What delicacy is hidden behind the following characters?
              </p>
              
              <p><img src="/chals/chal45.png" alt="schriftzeichen"></p>
            `
        },
        "46": {
            "titel": "Header",
            "html": `
              <p>Finding secret clues is no problem for you because you have a keen eye.
              </p>
              
              <p>When you open a website, a lot of things happen behind the scenes, even when you open one <a href="/chal/chal46">that is empty</a>. But the answer was already being transmitted in the background.
              </p>
              
              <p>Network analysis (usually F12) helps you view all data in the background. Find your answer there.
              </p>
              
              <p><img src="/chals/chal46.png" style="max-width:100%"  alt="chal46"/></p>
            `
        },
        "47": {
            "titel": "Progressbar",
            "html": `
              <p>II couldn't sit patiently like you and wait for the answer to load... I'm always impatient and fidgeting on the keyboard.
              </p>
              
              <p>But could it be that this actually makes the loading bar faster?
              </p>
              
              <p>You will receive the answer as soon as the loading bar is full.
              </p>
              
              <div class="progress my-4">
                <div id="44_bar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 1%"></div>
              </div>
              
              <p id="value"></p>
              
              <p id="status"></p>
              
              <script>
                const bar = document.getElementById('44_bar')
                const value = document.getElementById('value')
                const status = document.getElementById('status')
                
                let step = 1
                let steps = 1000
                let x = 3
                
                function transform(x) {
                  return (x * 11) % 10000
                }
                
                function work(noTimeout) {
                  if (step >= steps) {
                    bar.style.width = '100%'
                  } else {
                    step++
                    bar.style.width = ((step/steps) * 98.9 + 1) + '%'
                    x = transform(x)
                    value.innerHTML = x.toString()
                    status.innerHTML = '(' + step + '/' + steps + ')'
                    if (!noTimeout) {
                      setTimeout(work, 1000)
                    }
                  }
                }
                
                window.onkeydown = () => {
                  work(true)
                }
                
                value.innerHTML = x
                status.innerHTML = '(1/' + steps + ')'
                
                setTimeout(work, 1000)
              </script>
            `
        },
        "48": {
            "titel": "Silence",
            "html": `
              <p>Finding peace and listening to yourself - I need that again and again in order to connect with myself and be as balanced as you.
              </p>
              
              <p>Some people find it helpful to have an acoustic background.
              </p>
              
              <audio src="/chals/chal48_2.mp3" controls></audio>
              
              <p>But you are not alone. Your answer can be found among the chirping of the birds.
              </p>
            `
        },
        "49": {
            "titel": "Game save II",
            "html": `
              <p>There are games that are a lot of fun — and there are those that ultimately just want to take your money out of your pocket.
              </p>
              
              <p>In games like these, it's tempting to use a hack to improve your score. Unfortunately, many developers are aware of this possibility and encrypt the save game.
              </p>
              
              <p>But no encryption is perfect! It is usually easy to find out the key and thus crack the encryption.
              </p>
              
              <p>Your current score is: <code>cc76663b7d1e97ea2455b1c25676f44794fec90b0a9b823f916bf79387de4238</code>
              </p>
              
              <p>The key is: <code>786d229b0de877774a2f676d5bd895c3</code>
              </p>
              
              <p>The encryption method is AES-128 in ECB mode with PKCS padding.
              </p>
              
              <p>Your task: Increase your gold amount to 999999 and enter the new (encrypted) score.</p>
            `
        },
        "50": {
            "titel": "Pigpen Cipher",
            "html": `
              <p>What do these angular signs mean?
              </p>
              
              <p><img src="/chals/chal50-en.png" alt="chal50"></p>
              
              <p>Luckily, there is the following hint:
              </p>
              
              <p><img src="/chals/chal50.gif" alt="chal50"></p>
              
              <p>The first letter of the text would be a D, and the last letter of the text would be an S.
              </p>
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
                // noinspection SpellCheckingInspection
                const message = 'fhcre qh unfg qra grkg resbytervpu ragfpuyhrffryg nyf orybuahat reunryfg qh aha qvr nagjbeg haq fvr ynhgrg fcvrtryovyq'
                
                const slider = document.getElementById('slider')
                
                const cipher = document.getElementById('cipher')
                
                function translate(n) {
                  cipher.innerHTML = message.split('').map(c => {
                    if (c === ' ') return c
                    return String.fromCharCode(((c.charCodeAt(0) - 97 + n) % 26) + 97)
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
                <a href="https://discord.gg/9zDMZP9edd" target="_blank"><img src="/discord.png" style="max-width: 300px;" alt="discord"></a>
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
                
                <p><a href="/chals/chal23.png"><img src="/chals/chal23.png" style="max-width: 300px;" alt="challenge 23"></a>
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
              <p>Wenn man eine Datei zippt, dann wird sie kleiner und braucht weniger Speicherplatz. Wenn man eine Zip-Datei nochmal zippt, wird sie dann noch kleiner?
              </p>
              
              <p>Warum nicht ausprobieren? Ich habe die Antwort mal ordentlich gezippt: Hier ist die <a href="/chals/antwort25.zip">Datei</a>. Darin findet sich die Lösung zu dieser Aufgabe. Und nein, mehrfaches Zippen bringt nichts und macht die Datei sogar größer.
              </p>
            `
        },
        "26": {
            "titel": "Zeitmaschine",
            "html": `
              <p>Du siehst aus wie jemand, der sich für Backstories interessiert! Die Entstehungsgeschichte von Hack The Web hat ein paar spannende Aspekte und hier gibt es eine kleine Geschichtsstunde nur für dich.
              </p>
              
              <p>Das Konzept von Aufgaben (<em>Challenges</em>), die in einer Karte angeordnet sind, hat Hack The Web von <a href="https://hacker.org/" target="_blank">Hacker.org</a> übernommen. Diese Seite ist eine großartige Inspiration, aber auch sie ist nicht vom Himmel gefallen. Als die Challenges im Jahr 2008 veröffentlicht wurden, fand sich auf der Domain schon viele Jahre ein Projekt, dass als Hacker-Community beschrieben werden könnte.
              </p>
              
              <p>Dank des Internet-Archives können wir in der Zeit zurückreisen und du kannst erleben, wie sich diese Community verstanden hat.
              </p>
              
              <p>Hier siehst du eine Version von hacker.org vom <a href="https://web.archive.org/web/19961218220409/http://hacker.org/" target="_blank">18. Dezember 1996</a>.
              </p>
              
              <iframe src="https://web.archive.org/web/19961218220409/http://hacker.org/" style="width:100%;height:800px;"></iframe>
              
              <p>Deine Antwort ist die E-Mail-Adresse des Betreibers.
              </p>
            `
        },
        "27": {
            "titel": "Fingerspitzengefühl",
            "html": `
              <p>Taste vorsichtig über das Feld und lese die Antwort ab:
              </p>
              
              <p><svg id="chal27"></svg></p>
              
              <script src="/svg.min.js"></script>
              <script src="/chals/chal27.js"></script>
            `
        },
        "28": {
            "titel": "Werbung",
            "html": `
              <p>Nervige Werbebanner, die einen den Inhalt versperren - wer kennt das nicht? Auch in diesem Fall verdeckt eine Werbung die Antwort auf die Aufgabe.
              </p>
              
              <p>Zum Glück bieten moderne Browser Werkzeuge an, mit denen man eine Website bearbeiten kann und damit auch das eine oder andere nervige Element verschwinden lässt. (Falls diese nicht zur Verfügung stehen: <a href="#" onclick="(function () { const script=document.createElement('script');script.src='https://x-ray-goggles.mouse.org/webxray.js';script.className='webxray';script.setAttribute('data-lang','en-US');script.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');document.body.appendChild(script);}())">X-Ray laden</a>)
              </p>
              
              <div style="position:absolute;width:1000px;height:1000px;background-color:green" id="banner">
                <span style="font-size:100px" id="text">Herzlichen Glückwunsch! Sie haben gewonnen!</span>
                <div style="margin-top:20px; border: 2px solid black; width: 350px; margin-left: 40px; cursor: pointer; padding: 8px" id="skipp">Überspringe die Werbung in <span id="counter">4568</span> Sekunden ...</div>
              </div>
              
              <p>Die Antwort zu dieser Aufgabe lautet<span id="solution"></span>.
              </p>
              
              <script src="/chals/chal28.js"></script>
              <!--suppress JSDeprecatedSymbols -->
              <script>document.getElementById("solution").innerHTML = ' ' + atob('${Buffer.from(secrets('chal_28')).toString('base64')}')</script>
            `
        },
        "29": {
            "titel": "GPS-Code",
            "html": `
              <p>Die Anfangsbuchstaben folgender deutscher Orte ergeben die Antwort:
              </p>
              
              <p>
                52.7073, 8.5031<br>
                48.63253, 12.85515<br>
                50.9761, 8.8677<br>
                53.2724, 12.824<br>
                48.0336, 7.7649<br>
                49.59637, 11.11833<br>
                53.679, 10.6947
              </p>
            `
        },
        "30": {
            "titel": "UNIX Zeitstempel",
            "html": `
                <p>Im welchem Jahr liegt der Zeitpunkt 817876800?
                </p>
            `
        },
        "31": {
            "titel": "Taschenrechner III",
            "html": `
              <p>Es wird Zeit für einen neuen Taschenrechner:
              </p>
              
              <br>
              
              <p id="op-buttons"></p>
              <p id="num-buttons"></p>
              <p><svg id="stack"></svg></p>
              
              <script src="/svg.min.js"></script>
              <script src="/chals/chal31.js"></script>
              
              <br>
              
              <p>Dieser Taschenrechner besteht aus einer "Röhre", die rechts offen ist. Mit den Zahlentasten kannst du einzelne Zahlen in diese Röhre schieben.
              </p>
              
              <p>Um weitere Zahlen zu erzeugen, musst du rechnen. Dazu gibt es die vier Grundrechenarten. Bei diesen Tasten werden die zwei Zahlen ganz rechts aus der Röhre herausgeholt und miteinander addiert, subtrahiert, multipliziert oder dividiert. Probiere das aus und sieh, was passiert!
              </p>
              
              <p>Es gibt zwei Sonderbefehle: <strong>drop</strong> entfernt die letzte Zahl aus der Röhre (also die Zahl ganz rechts), <strong>dup</strong> fügt die letzte Zahl noch einmal hinzu (duplizieren).
              </p>
              
              <p>Berechne das Ergebnis 1000:
              </p>
              
              <p><img src="/chals/chal31_result.png" style="max-width: 300px" alt="chal31"></p>
            `
        },
        "32": {
            "titel": "Taschenrechner IV",
            "html": `
              <p id="op-buttons"></p>
              <p id="num-buttons"></p>
              <p><svg id="stack"></svg></p>
              
              <script src="/svg.min.js"></script>
              <script src="/chals/chal31.js"></script>
              
              <p>Berechne diesmal die Zahl 1337.
              </p>
            `
        },
        "33": {
            "titel": "Taschenrechner V",
            "html": `
              <p id="op-buttons"></p>
              <p id="num-buttons"></p>
              <p><svg id="stack"></svg></p>
              
              <script src="/svg.min.js"></script>
              <script src="/chals/chal33.js"></script>
              
              <p>Berechne die Zahl 100. Allerdings fehlen diesmal ein paar Tasten.
              </p>
            `
        },
        "36": {
            "titel": "Benutzername V",
            "html": `
              <p>Es war noch nie einfacher gewesen, eine eigene Website zu bauen und diese ins Internet zu stellen. Daher die Aufgabe für dich: Erstelle eine Website, die genau deinen Benutzernamen enthält (kein HTML, keine Leerzeichen, nur dein Benutzername!) und gib die URL als Antwort ein:
              </p>
            `
        },
        "37": {
            "titel": "Emoji",
            "html": `
              <p>Nichts auf der Welt ist so schön wie dein Lächeln. Ich könnte es den ganzen Tag anschauen.
              </p>
              
              <p>Schicke mir ein Lächeln. Deine Antwort ist dieses Emoji:
              </p>
              
              <p><img src="/chals/chal37.png" style="max-width: 80px" alt="chal37"/></p>
            `
        },
        "38": {
            "titel": "Metadaten",
            "html": `
              <p>Oh wie süß! Schau dir dieses Foto an:
              </p>
              
              <p><img src="/chals/chal38.jpg" alt="chal38"></p>
              
              <p>Neben dem, was du auf dem Foto sehen kannst, enthalten viele Bilddateien noch weitere Informationen, wie z.B. das Kameramodell oder die ISO-Zahl. Das sind die sog. <em>EXIF-Tags</em> und diese sind leider nicht sofort sichtbar. Allerdings gibt es einige Tools, die dir diese Tags anzeigen können. Und darin findest sich auch die Antwort.</p>
            `
        },
        "39": {
            "titel": "Flaggen",
            "html": `
              <p>Flaggen können viele Bedeutungen haben: Es gibt sie für Länder und Gebiete, aber man kann sie auch als Signal und Alphabet nutzen. In der Seefahrt wird dieses Potenzial voll ausgenutzt.
              </p>
              
              <p>Schau dir <a href="/chals/chal39.mp4">dieses Video</a> an. Welches Wort ergeben die Buchstaben der Signalflaggen?
              </p>
            `
        },
        "40": {
            "titel": "Terminal",
            "html": `
              <p>Schwarzer Bildschirm, weiße Schrift, kryptische Zeichen und komplizierte Befehle ... auch bekannt unter dem Namen <em>Terminal</em>.
              </p>
              
              <p>Dahinter steckt eine textbasierte Möglichkeit, mit einem Computer zu interagieren. Anstatt mit der Maus zu klicken, werden die gewünschten Aktionen per Befehl eingegeben und ausgeführt. Und das ist auch gar kein so großes Hexenwerk!
              </p>
              
              <p>Diese Aufgabe enthält ein schlankes Terminal, das ein Dateisystem verwaltet. Es gibt verschiedene Verzeichnisse und Dateien - in einer dieser Dateien findet sich die Antwort zu dieser Aufgabe.
              </p>
              
              <p>Um sich im Dateisystem zu bewegen und zu orientieren, gibt es vier Befehle:
              <ul>
                <li><code>ls</code><br>Dieser Befehl zeigt den Inhalt des Verzeichnisses, in dem du dich gerade befindest.
                </li>
                <li><code>pwd</code><br>Dieser Befehl zeigt dir den Pfad des aktuellen Verzeichnisses.
                </li>
                <li><code>cd VERZ</code><br>Dieser Befehl bewegt dich in ein neues Verzeichnis, dessen Namen du anstelle von VERZ schreibst. Um wieder eine Ebene hochzukommen, gibt es die spezielle Variante <code>cd ..</code>
                </li>
                <li><code>cat DATEI</code><br>Dieser Befehl zeigt den Inhalt einer Datei an im aktuellen Verzeichnis. Schreibe anstelle von DATEI den Namen der Datei.
                </li>
              </ul>
              </p>
              
              <p>Beginne deine Suche nach der Antwort in der Datei <strong>GOP/053/vjer</strong>:
              </p>
              
              <div id="terminal" class="my-4"></div>
              
              <script src="/seedrandom.min.js"></script>
              <script src="/chals/terminal.js"></script>
              <script src="/chals/chal40.js"></script>
              
              <p>Beispiel: Tippe nacheinander die Befehle<br>
                <code>cd GOP</code><br>
                <code>cd 239</code><br>
                <code>ls</code><br>
                <code>cat yley</code><br>
                <code>cd ..</code><br>
                <code>pwd</code>
              </p>
            `
        },
        "41": {
            "titel": "Querlesen",
            "html": `
               <p>Ein schnulziges Gedicht ... oder doch eine geheime Botschaft?
               </p>
               
               <p><em>
                 <strong>D</strong>ie langen Stunden vor dem Rechner<br>
                 <strong>i</strong>m dunklen oder hellen Zimmer,<br>
                 <strong>e</strong>rgeben doch einen Sinn<br>
                 <strong>a</strong>m Ende der Zeit!<br>
                 <br>
                 <strong>N</strong>icht verzagen ist das Motto<br>
                 <strong>t</strong>reuen Herzens weitergehen!<br>
                 "<strong>W</strong>ohin des Wegs", so mancher fragt,<br>
                 <strong>O</strong>, es ist ein weiter!<br>
                 <br>
                 <strong>R</strong>astet nicht, ihr Hacker-helden<br>
                 <strong>t</strong>reten nicht dem Rennen aus.<br>
                 <strong>L</strong>asst uns gemeinsam durch dieses Feuer:<br>
                 <strong>A</strong>lle für einen und einer für alle.<br>
                 <br>
                 <strong>U</strong>nd wenn uns doch mal Mühsal packt<br>
                 <strong>t</strong>raut euch auch um Hilfe zu bitten.<br>
                 <strong>E</strong>ine Schande ist es nicht, zu fragen,<br>
                 <strong>t</strong>raurig wär's, wenn es das wäre.<br>
                 <br>
                 <strong>S</strong>o ist das ganze Leben wohl<br>
                 <strong>t</strong>rotz all der müßigen Momente<br>
                 <strong>e</strong>in Fest des Lebens! Jawohl, das ist es.<br>
                 <strong>N</strong>icht zu vergessen,<br>
                 <strong>O</strong>stern und Weihnachten.</em>
               </p>
            `
        },
        "42": {
            "titel": "Ohrwurm",
            "html": `
              <p>Wer kennt ihn nicht: Der Wurm, der uns ins Gehör kriegt und uns Tag und Nacht verfolgt?
              </p>
              
              <p>Hier ein Beispiel dafür:
              </p>
              
              <audio src="/chals/chal_42.mp3" controls loop></audio>
              
              <p>Die Frage ist nun: Wie heißt der Song?
              </p>
            `
        },
        "43": {
            "titel": "POST it",
            "html": `
              <p>Diesmal gibt es keine Umschweife: Die Antwort auf diese Aufgabe lautet Klamauk.
              </p>
              
              <p>Leider gibt es zu dieser Aufgabe kein Eingabefeld. Aber das sollte dich nicht abhalten, der Webseite die Antwort zu schicken!
              </p>
            `
        },
        "44": {
            "titel": "Ladbalken II",
            "html": `
              <p>Der Klügere gibt nach - und du hast kein Problem nachzugeben, wenn es definitiv nicht weitergeht.
              </p>
              
              <p>Dieser Ladebalken dauert sehr lange. Wirst du ihn bis zum Ende abwarten - oder eine andere Lösung finden?
              </p>
              
              <div class="progress my-4">
                <div id="44_bar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 1%"></div>
              </div>
              
              <p id="value">SQNLPZWYVNYLZZ</p>
              
              <p id="status">...</p>
              
              <script>
                const bar = document.getElementById('44_bar')
                const valueDiv = document.getElementById('value')
                const status = document.getElementById('status')
                
                const string = "SQNLPZWYVNYLZZ"
                const steps = 100000
        
                let step = -steps
                let value = string
        
                function forward() {
                  const i = (((step + 1) % string.length) + string.length) % string.length
                  const chars = value.split('')
                  chars[i] = String.fromCharCode(65 + ((chars[i].charCodeAt(0) - 65 + 1) % 26))
                  value = chars.join('')
                  step++
                  //console.log('forward to', value)
                  return value
                }
                
                function work(noTimeout) {
                  if (step >= 0) {
                    bar.style.width = '100%'
                  } else {
                    bar.style.width = (((steps+step)/steps) * 98.9 + 1) + '%'
                    valueDiv.innerHTML = forward(valueDiv.innerHTML)
                    status.innerHTML = '(' + (step+steps) + '/' + steps + ')'
                    if (!noTimeout) {
                      setTimeout(work, 1000)
                    }
                  }
                }
                
                window.onkeydown = () => {
                  work(true)
                }
                
                setTimeout(work, 2000)
              </script>
            `
        },
        "45": {
            "titel": "Schriftzeichen",
            "html": `
              <p>Wir leben in einer internationalen Welt und auch Hacker sind in vielen Sprachen unterwegs. Manche Sprachen unterscheiden sich dabei stark von unserer Sprache und stellen uns so vor Herausforderungen. Welche Leckerei verbirgt sich nun hinter folgenden Schriftzeichen?
              </p>
              
              <p><img src="/chals/chal45.png" alt="schriftzeichen"></p>
            `
        },
        "46": {
            "titel": "Kopfdaten",
            "html": `
              <p>Geheime Spuren zu finden ist für dich kein Problem, denn du hast einen scharfen Blick.
              </p>
              
              <p>Wenn du eine Webseite öffnest, passieren hinter den Kulissen viele Dinge, selbst beim Aufruf einer <a href="/chal/chal46">leeren Seite</a>. Doch im Hintergrund wurde bereits die Antwort übertragen.
              </p>
              
              <p>Die Netzwerkanalyse (meist F12) hilft dir, alle Daten im Hintergrund anzuzeigen. Finde darin deine Antwort.
              </p>
              
              <p><img src="/chals/chal46.png" style="max-width:100%"  alt="chal46"/></p>
            `
        },
        "47": {
            "titel": "Ladebalken",
            "html": `
              <p>Ich könnte nicht wie du geduldig sitzen und warten, bis die Antwort lädt ... ich bin immer ungeduldig und drücke auf der Tastatur herum.
              </p>
              
              <p>Aber kann es sein, dass der Ladebalken dadurch tatsächlich schneller wird?
              </p>
              
              <p>Die Antwort erhälst du, sobald der Ladebalken voll ist.
              </p>
              
              <div class="progress my-4">
                <div id="44_bar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 1%"></div>
              </div>
              
              <p id="value"></p>
              
              <p id="status"></p>
              
              <script>
                const bar = document.getElementById('44_bar')
                const value = document.getElementById('value')
                const status = document.getElementById('status')
                
                let step = 1
                let steps = 1000
                let x = 3
                
                function transform(x) {
                  return (x * 11) % 10000
                }
                
                function work(noTimeout) {
                  if (step >= steps) {
                    bar.style.width = '100%'
                  } else {
                    step++
                    bar.style.width = ((step/steps) * 98.9 + 1) + '%'
                    x = transform(x)
                    value.innerHTML = x.toString()
                    status.innerHTML = '(' + step + '/' + steps + ')'
                    if (!noTimeout) {
                      setTimeout(work, 1000)
                    }
                  }
                }
                
                window.onkeydown = () => {
                  work(true)
                }
                
                value.innerHTML = x
                status.innerHTML = '(1/' + steps + ')'
                
                setTimeout(work, 1000)
              </script>
            `
        },
        "48": {
            "titel": "Stille",
            "html": `
              <p>Zur Ruhe kommen und in sich hineinhören - das brauche ich immer wieder, um mich mit mir selbst zu verbinden und so ausgeglichen sein zu können wie du.
              </p>
              
              <p>Manche Menschen finden es hilfreich, dabei eine akustische Untermalung zu haben.
              </p>
              
              <audio src="/chals/chal48_2.mp3" controls></audio>
              
              <p>Doch du bist nicht alleine. Deine Antwort findet sich zwischen dem Zwischern der Vögel.
              </p>
            `,
        },
        "49": {
            "titel": "Spielstand II",
            "html": `
              <p>Es gibt Spiele, die machen richtig viel Spaß - und es gibt welche, die am Ende doch nur dein Geld aus der Tasche ziehen wollen.
              </p>
              
              <p>Bei solchen Spielen ist verlockend, durch einen Hack seinen Spielstand zu verbessern. Leider sind sich viele Entwickler dieser Möglichkeit bewusst und verschlüsseln den Spielstand.
              </p>
              
              <p>Doch keine Verschlüsslung ist perfekt! Meist lässt sich der Schlüssel leicht herausfinden und damit die Verschlüsselung knacken.
              </p>
              
              <p>Dein aktueller Spielstand lautet: <code>cc76663b7d1e97ea2455b1c25676f44794fec90b0a9b823f916bf79387de4238</code>
              </p>
              
              <p>Der Schlüssel lautet: <code>786d229b0de877774a2f676d5bd895c3</code>
              </p>
              
              <p>Die Verschlüsselungsmethode ist AES-128 im ECB-Modus mit PKCS-Padding.
              </p>
              
              <p>Deine Aufgabe: Erhöhe deinen Goldbetrag auf 999999 und gib den neuen (verschlüsselten) Spielstand ein.</p>
            `
        },
        "50": {
            "titel": "Winkelschrift",
            "html": `
              <p>Was diese winkeligen Zeichen wohl sagen mögen?
              </p>
              
              <p><img src="/chals/chal50.png" alt="chal50"></p>
              
              <p>Zum Glück gibt es folgenden Hinweis:
              </p>
              
              <p><img src="/chals/chal50.gif" alt="chal50"></p>
              
              <p>Der erste Buchstabe des Texts wäre damit ein D, der letzte Buchstabe des Texts ein S.
              </p>
            `
        }
    },
}