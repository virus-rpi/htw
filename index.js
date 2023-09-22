const Sequelize = require('sequelize')
const escapeHtml = require('escape-html')
const setupChallengesServer = require('./challenges-server.js')
const secrets = require('./secrets-loader.js')
const translations = require('./translations/translations.js')

const path = process.env.SERVERDEV
  ? '../challenges-server'
  : '@entkenntnis/challenges-server'

if (process.env.SERVERDEV) {
  console.log('SERVERDEV enabled')
}

require(path)((config) => {
  config.theme = 'darkly'

  if (process.env.UBERSPACE || process.env.LIVE) {
    console.log('using live database\n')
    config.database = {
      database: 'arrrg_hacktheweb',
      username: 'arrrg',
      password: secrets('config_db_password'),
      dialect: 'mariadb',
      dialectOptions: {
        timezone: 'Europe/Berlin',
      },
    }
  } else {
    config.database.storage = './db.sqlite'
  }

  config.reloadChallenges = !process.env.UBERSPACE
  config.configRoutes = !process.env.UBERSPACE

  config.locale = 'en'
  config.brand = 'Hack The Web'
  config.slogan = translations(config.locale, 'general.slogan')

  config.port = process.env.HTWPORT ? parseInt(process.env.HTWPORT) : 3000

  config.styles.mapTextColor = 'white'
  config.styles.connectionColor = '#464545'
  config.styles.pointColor_solved = '#666699'
  config.styles.hrColor = '#313030'
  config.styles.solutionClass_correct = 'primary'
  config.styles.tableHighlightClass = 'secondary'
  config.map.centeringOffset = 0.5
  config.map.width = 2400
  config.map.height = 2000
  config.editors.push('admin', 'demo')
  config.noSelfAdmin.push('demo')
  config.masterPassword = secrets('config_master_password')
  //config.urlPrefix = '//localhost:3000'
  config.hintPage = {
    url: '/hints',
    label: translations(config.locale, 'hints.heading'),
  }
  config.historyBack = true

  config.githubHref = '/links'
  config.githubTargetBlank = false
  config.i18nExtend.push({
    lng: config.locale,
    key: 'home.github',
    value: translations(config.locale, 'links.heading'),
  })

  config.scoreMode = 'distance'

  config.slowRequestWarning = true
  config.slowRequestThreshold = 5000

  config.autoPassword = true
  config.allowNewAutoPassword = false

  config.tokenSecret = secrets('config_token_secret')

  config.map.backgroundLicenseHtml = `
    <a href="http://www.flickr.com/photos/scotbot/9686457096">scotbot</a>
    (<a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>)
  `

  config.map.customMapHtml = `
    <img style="position:absolute;left:110px;top:100px;z-index:-1;" src="/start_galaxy.png">
    <img style="position:absolute;left:1298px;top:903px;z-index:-1;" src="/passage_galaxy.png">
    <img style="position:absolute;left:650px;top:1640px;z-index:-1;" src="/passage_2_galaxy.png">
    <span style="position:absolute; left:680px; top:1680px;z-index:-2; font-size:8px;">&#87;&#65;&#76;&#68;&#79;</span>
  `

  config.i18nExtend.push({
    lng: config.locale,
    key: 'home.version',
    value:
      'Version: September 2023 (<a href="' +
      config.urlPrefix +
      '/news">' + translations(config.locale, 'news.heading') + '</a>)',
  })
  config.i18nExtend.push({
    lng: config.locale,
    key: 'home.top10',
    value: 'Hacker*innen des Monats',
  })
  config.i18nExtend.push({
    lng: config.locale,
    key: 'contact.heading',
    value: 'Kontakt / Impressum',
  })
  config.i18nExtend.push({
    lng: config.locale,
    key: 'contact.content_',
    value: `
      <p class="my-5">
        David Li<br>
        ${secrets('config_address')}<br>
        E-Mail: <a rel="nofollow" href="mailto:hack@arrrg.de">hack@arrrg.de</a>
      </p>
    `,
  })
  config.i18nExtend.push({
    lng: config.locale,
    key: 'home.supporter_',
    value: `
      <p>Dieses Projekt wird freundlicherweise unterstützt von der <a href="https://fg-bil.gi.de/">Fachgruppe Bayerische Informatiklehrkräfte</a>.</p>
      <hr class="my-5"/>
    `,
  })
  config.i18nExtend.push({
    lng: config.locale,
    key: 'privacy.content_',
    value: `
      <h3 class="my-4">Persönliche Daten</h3>
      
      <p>Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Du kannst das Angebot von Hack The Web nutzen, ohne personenbezogene Daten weiterzugeben. Die Registrierung funktioniert ohne Angabe einer E-Mail-Adresse, stattdessen gibt du ein selbstgewähltes Pseudonym an. Falls du anonym bleiben möchtest, achte darauf, dass man durch das Pseudonym nicht auf deine Person zurückschließen kann.
      </p>
      
      <h3 class="my-4">Accountdaten</h3>
      
      <p>Dein Benutzername wird in der Highscore öffentlich angezeigt und möglicherweise auch auf der Startseite. Es wird der Zeitpunkt der letzten Aktivität auf der Plattform gespeichert und ebenfalls mit angezeigt. Bei jeder Aufgabe ist zudem einsehbar, wieviele Nutzer sie bereits gelöst haben (ohne Rückführung auf einen einzelnen Benutzer). Im Profil lässt sich dein Account jederzeit vollständig löschen. Der Betreiber behält sich das Recht vor, ohne Ankündigung Accounts zu verändern oder zu löschen.
      </p>
      
      <h3 class="my-4">Hosting</h3>
      
      <p>Diese Website wird bei <a href="https://uberspace.de">uberspace.de</a> gehostet. Die Datenverarbeitung findet vollständig in Deutschland statt und unterliegt der DSGVO. Bei der Nutzung der Website werden z.T. Protokolle über Aufrufe und Fehler geführt. Die IP-Adresse wird dabei maskiert.
      </p>
      
      <h3 class="my-4">Protokolle</h3>
      
      <p>Zur Verbesserung der Aufgaben und um mögliche Probleme zu entdecken, werden intern Protokolle geführt und ausgewertet. Diese Protokolle sind nicht öffentlich zugänglich, werden nicht weitergegeben und auch für keine anderen Zwecke gebraucht. Die Protokolle enthalten deine gelösten Aufgaben und die Eingaben für die Aufgaben (ohne Bezug auf einen einzelnen Nutzer). Nach spätestens einem Jahr werden die Protokolle zu den Eingaben gelöscht.
      </p>
      
      <h3 class="my-4">Cookies</h3>
      
      <p>Wenn du dich bei HackTheWeb registrierst bzw. einloggst, setzt die Website einen Cookie mit einer Session-ID. Diese wird benötigt, um deinen Login-Status aufrechtzuerhalten. Der Cookie wird beim Schließen des Browserfensters oder nach einem Tag automatisch gelöscht. Ein Tracking findet damit nicht statt.
      </p>
      
      <p>Lokale Accounts werden dauerhaft in deinem Browser gespeichert. Du kannst durch einen Klick <a onclick="resetLocalUsers()" href="#">alle lokale Accounts entfernen</a>.
      </p>
      
      <h3 class="my-4">Google Fonts</h3>
      
      <p>Diese Website verwendet Google Fonts. Für nähere Informationen dazu besuche ihre <a href="https://developers.google.com/fonts/faq" target="_blank">FAQ</a>.
      </p>
      
      <script>
        function resetLocalUsers() {
          localStorage.removeItem('htw_local_users')
          alert('Accounts erfolgreich entfernt.')
        }
      </script>
    `,
  })

  config.i18nExtend.push({
    lng: config.locale,
    key: 'finish.heading',
    value: 'Herzlichen Glückwunsch!',
  })

  config.i18nExtend.push({
    lng: config.locale,
    key: 'finish.content_',
    value: `
      <p>Du hast die Session erfolgreich absolviert. Deine 30 Minuten sind nun abgelaufen.</p>
      
      <p>Klicke auf OK, um dein Ergebnis in der Highscore zu speichern. Danach wird dein Account in den freien Modus geschaltet. Du kannst an den Aufgaben weiterarbeiten - ganz ohne Zeitdruck</p>
      
      <p>Vielen Dank für die Teilnahme. Wir wünschen dir alles Gute für deine Zukunft als Hacker!</p>
    `,
  })

  config.i18nExtend.push({
    lng: config.locale,
    key: 'home.invite_',
    value: `
      </p>
      
      <div class="jumbotron" style="padding-top:24px;margin-top:48px;border:#009670 solid 1px;background-image:url('background.jpg');">
        <p>Neu hier? Starte deine Reise in die Welt des Hackings:
        </p>
        <p class="text-center" style="margin-top:48px;">
          <a href="/register" class="btn btn-success btn-lg">Jetzt loslegen</a>
        </p>
      </div>

      <p>Besuche auch die <a href="https://de.serlo.org/200247" target="_blank">Info-Seite</a> oder schaue auf dem <a href="https://discord.gg/9zDMZP9edd" target="_blank">Discord-Server</a> vorbei.
    `,
  })

  config.onSubmit = async ({ App, id, correct, solved, isEditor, answer }) => {
    if (!isEditor) {
      const key = `attempt_${id}_${Date.now()}`
      await App.storage.setItem(key, answer)
    }
  }

  config.callback = function (App) {
    setupChallengesServer(App)

    App.express.get('/news', (req, res) => {
      res.renderPage({
        page: 'news',
        heading: translations(config.locale, 'news.heading'),
        content: translations(config.locale, 'news.content'),
      })
    })

    App.express.get('/hints', (req, res) => {
      res.renderPage({
        page: 'hints',
        heading: translations(config.locale, 'hints.heading'),
        content: translations(config.locale, 'hints.content'),
      })
    })

    App.express.get('/links', (req, res) => {
      res.renderPage({
        page: 'links',
        heading: 'Externe Links',
        content: `
          <div class="my-5"></div>
          
          <h3 class="mb-4">Quellcode</h3>
          
          <p>Die Engine hinter dieser Website ist als Open-Source-Projekt verfügbar. Damit gibt es die Möglichkeit, eigene Projekte auf dieser Basis zu entwickeln:</p>
          
          <p><a href="https://github.com/Entkenntnis/challenges-server" target="_blank">GitHub: Entkenntnis/challenges-server</a></p>
          
          <p><a href="https://github.com/Entkenntnis/create-challenges-server" target="_blank">GitHub: Entkenntnis/create-challenges-server</a></p>
          
          <div class="my-4"></div>
          
          <p>Auch der Quellcode von Hack The Web ist frei verfügbar. Falls diese Seite nicht mehr erreichbar ist, kann dadurch eine neue Instanz aufgesetzt werden:</p>
          
          <p><a href="https://github.com/Entkenntnis/htw" target="_blank">GitHub: Entkenntnis/htw</a></p>
          
          <div class="my-5"></div>
          
          <h3 class="mb-4">Robot Karol Online</h3>
          
          <p>Als weiteres Tool für den Informatikunterricht gibt es eine Umsetzung von Robot Karol für den Browser:</p>
          
          <p><a href="https://karol.arrrg.de/" target="_blank">Robot Karol Online (https://karol.arrrg.de/)</a></p>
          
          <p><a href="https://github.com/Entkenntnis/robot-karol-online" target="_blank">GitHub: Entkenntnis/robot-karol-online</a></p>
          
          <div class="my-5"></div>
          
          <h3 class="mb-4">Linksammlungen</h3>
          
          <p>Vielen Dank an die Webseiten, die Hack The Web verlinken! Besuche diese Partner und entdecke weitere Inhalte für den Informatikunterricht:</p>
          
          <p><a href="https://de.serlo.org/informatik/200247/hack-the-web" target="_blank">Serlo - Hack The Web (offizielle Community-Seite)</a></p>
          
          <p><a href="https://www.herr-rau.de/wordpress/2020/01/hack-the-web-unterrichts-und-fortbildungsformat.htm" target="_blank">Lehrerzimmer - Hack the Web: Unterrichts- und Fortbildungsformat?</a></p>
          
          <p><a href="https://www.lmz-bw.de/medienbildung/medienbildung-an/weiterfuehrende-schulen/mint-portal/informatik/mint-machen-informatik" target="_blank">Landesmedienzentrum Baden-Württemberg - MINT machen - Informatik</a></p>
          
          <p><a href="https://www.lmz-bw.de/medienbildung/medienbildung-an/weiterfuehrende-schulen/mint-portal/informatik/3x3-mediendossiers/kryptografie" target="_blank">Landesmedienzentrum Baden-Württemberg - Kryptographie</a></p>
          
          <p><a href="https://www.bildungsserver.de/Informatik-3727-de.html" target="_blank">Deutscher Bildungsserver - Informatik - Arbeitsblätter und weitere Unterrichtsmaterialen für die Sekundarstufe</a></p>
          
          <p><a href="https://onlineuebung.de/informatik" target="_blank">onlineuebung.de - Informatik in der Schule</a></p>
          
          <p><a href="https://suche.wirlernenonline.de/de/search?q=hack%20the%20web" target="_blank">WirLernenOnline - Hack The Web</a></p>
          
          <p><a href="https://informatik.schule.de/comments.php?material_id=503" target="_blank">Informatik.Schule.de - Hack The Web</a></p>
        `,
      })
    })

    App.express.get('/api/highscore', async (req, res) => {
      const users = await App.db.models.User.findAll({
        attributes: ['name', 'score', 'updatedAt'],
        where: {
          score: { [Sequelize.Op.gt]: 0 },
        },
        order: [
          ['score', 'DESC'],
          ['updatedAt', 'DESC'],
        ],
        limit: 10000,
        raw: true,
      })
      users.forEach((user, i) => {
        if (i > 0 && users[i - 1].score == user.score) {
          user.rank = users[i - 1].rank
        } else {
          user.rank = i + 1
        }
      })
      res.json(users)
    })

    App.express.get('/api/map', async (req, res) => {
      res.json(Object.keys(App.challenges.distance).filter((x) => x != 1337))
    })

    /*App.express.get('/experiment', async (req, res) => {
      const currentSolutions = await App.db.models.Solution.findAll({
        where: {
          updatedAt: {
            [Sequelize.Op.gte]: App.moment().subtract(29, 'days').toDate(),
          },
        },
        order: [['updatedAt']],
        raw: true,
      })

      const persistenceScore = currentSolutions.reduce((result, obj) => {
        const key = obj.UserId
        const entry = (result[key] = result[key] ?? { mins: 0, lastSolved: -1 })
        const ts = new Date(obj.updatedAt).getTime()
        if (entry.lastSolved > 0) {
          const diff = ts - entry.lastSolved
          entry.mins += Math.min(30, Math.round(diff / 1000 / 60))
        }
        entry.lastSolved = ts
        return result
      }, {})

      const persistenceArr = Object.entries(persistenceScore)

      persistenceArr.sort((a, b) => b[1].mins - a[1].mins)

      const top10 = persistenceArr.slice(0, 10)

      for (const entry of top10) {
        const user = await App.db.models.User.findOne({
          where: { id: entry[0] },
        })
        console.log(user)
        entry.name = user.name
      }

      console.log(top10)

      res.send('hi')
    })*/

    /*App.express.get('/internal/newusers', async (req, res) => {
      const usersFromDB = await App.db.models.User.findAll({
        limit: 2000,
        order: [['createdAt', 'DESC']],
      })

      function renderName(user) {
        let output = escapeHtml(user.name)
        if (user.score > 0) {
          output = `<b>${output}</b>`
        }
        return output
      }

      const userStrings = usersFromDB.map(
        (user) =>
          `${App.moment(user.createdAt).format(
            'DD.MM.YYYY HH:mm'
          )}: ${renderName(user)}, ${user.score} Punkte`
      )
      res.send(userStrings.join('<br>'))
    })*/

    if (process.env.SAVE2LOCAL && !process.env.UBERSPACE) {
      run()

      async function run() {
        if (!process.env.LIVE) throw 'NOT CONNECTED TO LIVE SERVER'
        const LOCALAPP = {}

        LOCALAPP.db = new Sequelize({
          dialect: 'sqlite',
          storage: './db.sqlite',
          logging: false,
        })
        await require('@entkenntnis/challenges-server/server/dbModel')(LOCALAPP)
        await LOCALAPP.db.authenticate()

        // Es ist viel schneller, die gesamte Datenbank neu aufzusetzen
        await LOCALAPP.db.sync({ force: true })

        console.log('Lokale Datenbank syncronisiert')

        console.log('Starte Import Räume ...')

        const rooms = await App.db.models.Room.findAll({ raw: true })
        await LOCALAPP.db.models.Room.bulkCreate(rooms, { silent: true })

        console.log('Starte Import Benutzer und gelöste Aufgaben ...')

        console.log('  Lade Nutzer von Server')
        const users = await App.db.models.User.findAll({ raw: true })

        console.log('  Lade Lösungen vom Server')
        const solutions = await App.db.models.Solution.findAll({ raw: true })

        console.log(`  Füge ${users.length} Nutzer lokal ein`)
        await LOCALAPP.db.models.User.bulkCreate(users)

        console.log(`  Füge ${solutions.length} Lösungen lokal ein`)
        await LOCALAPP.db.models.Solution.bulkCreate(solutions)

        console.log('Starte Import Protokolle ...')

        const kvpairs = await App.db.models.KVPair.findAll({ raw: true })

        // sqlite not supporting null bytes in strings
        for (const pair of kvpairs) {
          pair.value = pair.value.replace(/\0/g, '')
        }

        await LOCALAPP.db.models.KVPair.bulkCreate(kvpairs)

        console.log('Import vollständig')

        process.exit()
      }
    }

    if (!process.env.UBERSPACE) {
      require('./analyze.js')(App)
    }

    if (process.env.RECALCULATESCORE) {
      void (async () => {
        console.log('\nStart recalculating scores')
        const users = await App.db.models.User.findAll()

        const solutions = await App.db.models.Solution.findAll({ raw: true })

        // make sure data is consistent by retrieving scores again and compare
        const users2 = await App.db.models.User.findAll({ raw: true })
        const userScores1 = {}
        for (const user of users) {
          userScores1[user.id] = user.score
        }
        for (const user of users2) {
          if (user.score !== userScores1[user.id]) {
            console.log(
              `user ${user.name} solved a challenge while retrieving data, making data inconsistent. Please rerun.`
            )
            process.exit(1)
          }
        }

        const byUser = {}

        solutions.forEach((sol) => {
          if (!byUser[sol.UserId]) byUser[sol.UserId] = []

          byUser[sol.UserId].push(sol.cid)
        })

        let hasChange = false

        for (const user of users) {
          const solutions = byUser[user.id] ?? []
          let score = 0
          for (const solution of solutions) {
            if (App.challenges.data.some((c) => c.id == solution)) {
              score += 10 + (App.challenges.distance[solution] || 0)
            }
          }
          if (user.score != score) {
            hasChange = true
            console.log(`${user.score} -> ${score}`)
          }
          user.score = score
          await user.save({ silent: true })
        }
        console.log('completed')

        if (hasChange) {
          console.log(
            'changes saved. to make sure data is consistent, please rerun'
          )
          process.exit(1)
        }
        process.exit()
      })()
    }
  }

  if (process.env.UPTEST) {
    console.log(
      'UPTEST enabled: server will automatically exit after 10 seconds\n'
    )
    setTimeout(() => {
      process.exit()
    }, 10000)
  }

  return config
})
