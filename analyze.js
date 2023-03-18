const { Op } = require('sequelize')
const window = require('svgdom')
const SVG = require('svg.js')(window)
const document = window.document
const fromDate = '2023-02-28'

function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

module.exports = function (App) {
  App.express.get('/peakStats', async (req, res) => {
    const attempts = (await App.db.models.KVPair.findAll()).map((a) =>
      App.moment(a.createdAt).unix()
    )

    attempts.sort((a, b) => (a < b ? -1 : 1))
    const start = attempts[0]
    const end = attempts[attempts.length - 1]

    console.log(start, end)

    let spans = {}

    for (let i = start; i < end; i++) {
      /*// 5 sec span
      const inSpan = attempts.filter((a) => a >= i && a < i + 5)
      if (inSpan.length > 0) {
        entries.push({ start: i, count: inSpan.length, data: inSpan })
      }*/
      spans[i] = 0
    }

    attempts.forEach((a) => {
      for (let i = a; i < a + 5; i++) {
        spans[i]++
      }
    })

    const entries = Object.entries(spans).map(([key, val]) => {
      return { start: key, count: val }
    })

    console.log(entries)

    entries.sort((a, b) => (a.count < b.count ? 1 : -1))

    entries.slice(0, 30).forEach((e) => {
      console.log(`Um ${App.moment(e.start * 1000)} mit ${e.count} Aufrufen.`)
    })

    res.send('ok')
  })

  App.express.get('/averages', async (req, res) => {
    const solutions = await App.db.models.Solution.findAll()
    const solvers = solutions.map((s) => ({
      user: s.UserId,
      date: App.moment.utc(s.createdAt),
    }))

    const usersDB = await App.db.models.User.findAll()
    const userCreated = usersDB
      .filter((u) => u.score > 0)
      .map((u) => App.moment.utc(u.createdAt))

    //console.log(userCreated)

    let output = ''

    solvers.sort((a, b) => (b.date.isBefore(a.date) ? 1 : -1))
    const start = solvers[0].date
    const end = App.moment(solvers[solvers.length - 1].date)

    const average = []
    let current = App.moment(start).add(29, 'days')
    const knowUsers = {}
    while (current.isBefore(end)) {
      const windowStart = App.moment(current).subtract(28, 'days')
      const dayEnd = App.moment(current).add(1, 'days')
      const users = {}
      const guardForDaily = {}
      let dailyNewUsers = 0
      let dailyReccuringUsers = 0
      solvers.forEach((s) => {
        if (
          s.date.isAfter(current) &&
          s.date.isBefore(dayEnd) &&
          !guardForDaily[s.user]
        ) {
          guardForDaily[s.user] = true
          if (knowUsers[s.user]) {
            dailyReccuringUsers++
          } else {
            dailyNewUsers++
            knowUsers[s.user] = true
          }
        }
        if (s.date.isBefore(dayEnd) && s.date.isAfter(windowStart)) {
          users[s.user] = true
        }
      })
      let newUsers = 0
      userCreated.forEach((u) => {
        if (u.isBefore(dayEnd) && u.isAfter(windowStart)) {
          newUsers++
        }
      })
      //console.log(newUsers)
      output += `${current.toString()},${
        Object.keys(users).length
      },${newUsers}<br>`
      current.add(1, 'day')
    }

    res.send(output)
  })

  App.express.get('/dashboard', async (req, res) => {
    let output =
      '<!DOCTYPE html><html><head><style>body{background-color:#222222;color:white;}</style></head><h1>Dashboard</h1><title>Dashboard</title>'

    output += `<p>Daten ab dem ${fromDate}</p>`

    const usersFromDB = await App.db.models.User.findAll()
    const currentUsers = usersFromDB.filter(
      (user) => !App.moment(user.createdAt).isBefore(fromDate)
    )
    const users = currentUsers.filter((user) => user.score > 0)

    output += `<p>${usersFromDB.length} Datenbankzeilen: ${
      users.length
    } aktiv + <span title="Punkte gleich null">${
      currentUsers.length - users.length
    } leer</span> + <span title="vor ${fromDate}">${
      usersFromDB.length - currentUsers.length
    } alt</span></p>`

    output += `<h2>Aktive Zeit</h2>`

    const activeTime = users.map((user) =>
      App.moment(user.updatedAt).diff(App.moment(user.createdAt), 'minutes')
    )
    activeTime.sort((a, b) => a - b)

    const attemptsFromDB = (await App.db.models.KVPair.findAll()).filter(
      (kvpair) =>
        kvpair.key.startsWith('attempt_') &&
        !App.moment(kvpair.createdAt).isBefore(fromDate)
    )
    const attempts = {}
    for (const attempt of attemptsFromDB) {
      const key = attempt.key
      const parts = key.split('_')
      const id = parts[1]
      const ts = parts[2]
      if (App.moment(parseInt(ts)).isBefore(fromDate)) continue // skip outdated attempt data
      if (!attempts[id]) attempts[id] = []
      attempts[id].push(attempt.value)
    }

    let median =
      activeTime.length % 2 == 1
        ? activeTime[(activeTime.length + 1) / 2]
        : Math.floor(
            (activeTime[activeTime.length / 2] +
              activeTime[activeTime.length / 2 + 1]) /
              2
          )

    output += `<p>Median: ${median} min</p>`

    const h1 = activeTime.filter((t) => t < 10).length
    const h2 = activeTime.filter((t) => t >= 10 && t < 29).length
    const h3 = activeTime.filter((t) => t >= 30 && t < 59).length
    const h3b = activeTime.filter((t) => t >= 60 && t < 119).length
    const h4 = activeTime.filter((t) => t >= 120 && t < 599).length
    const h5 = activeTime.filter((t) => t >= 600 && t < 1439).length
    const h6 = activeTime.filter((t) => t >= 1440).length

    output += `<p>0 bis 9 Minuten: ${h1}<br>`
    output += `10 bis 29 Minuten: ${h2}<br>`
    output += `30 bis 59 Minuten: ${h3}<br>`
    output += `60 bis 119 Minuten: ${h3b}<br>`
    output += `120 bis 599 Minuten: ${h4}<br>`
    output += `600 bis 1439 Minuten: ${h5}<br>`
    output += `1440 oder mehr Minuten: ${h6} <small>(${activeTime
      .filter((t) => t >= 1440)
      .map((t) => `${Math.round(t / 1440)}d`)
      .join(', ')})</small></p>`

    let scores = users.map((user) => user.score)
    scores = scores.sort((a, b) => a - b)
    const p10 = scores.length / 10
    const brackets = []
    for (let i = 0; i < 10; i++) {
      const arrStart = Math.round(i * p10)
      const arrEnd = Math.round((i + 1) * p10)
      brackets.push(scores.slice(arrStart, arrEnd))
    }

    output += '<p><a href="/mapWithStats" style="color:#007053">Karte</a></p>'

    output += '<h2>Punkte</h2>'

    output += `<p>${brackets
      .map(
        (x, i) =>
          `${i * 10}%) &nbsp;&nbsp; ${
            x.length > 0 ? `${x[0]} - ${x[x.length - 1]}` : ''
          }`
      )
      .join('<br>')}</p>`

    output += `<p>Ingesamt ${scores.reduce((a, b) => a + b, 0)} Punkte</p>`

    output += `<h2>Aufgaben</h2>`

    const userIds = users.map((user) => user.id)
    const solutions = await App.db.models.Solution.findAll({
      where: { UserId: { [Op.in]: userIds } },
    })

    console.log('Dashboard: Daten geladen')

    const userHistory = userIds.map((id) => {
      const userSolutions = solutions
        .filter((s) => s.UserId == id)
        .map((sol) => {
          const time = App.moment(sol.createdAt).diff(
            App.moment(users.filter((u) => u.id == id)[0].createdAt),
            'minutes'
          )
          const cid = sol.cid
          return { time, cid }
        })
      userSolutions.sort((a, b) => a.time - b.time)
      return { userSolutions }
    })

    const challengesData = App.challenges.data.map((c) => {
      const title = c.title
      const solvedBy = solutions.filter((s) => s.cid == c.id).length
      const seenBy = userHistory.filter((h) =>
        h.userSolutions.some((s) => c.deps.includes(s.cid))
      ).length
      return { title, solvedBy, seenBy, id: c.id }
    })

    challengesData.sort((a, b) => b.solvedBy - a.solvedBy)

    function generateAttemptsList(id) {
      if (!attempts[id]) return ''
      const obj = {}
      for (const att of attempts[id]) {
        if (!obj[att]) obj[att] = 0
        obj[att]++
      }
      const list = Object.entries(obj)
      list.sort((a, b) => b[1] - a[1])
      return `${attempts[id].length} Eingaben: ${list
        .map(
          (x) =>
            `${escapeHTML(
              x[0].length > 100 ? x[0].slice(0, 100) + ' ...' : x[0]
            )} <span style="color:gray">(x${x[1]})</span>`
        )
        .join('; ')}`
      // attempts[d.id] ? attempts[d.id].map(escapeHTML).map(x => x.length > 100 ? x.slice(0, 100) + ' ...' : x).join(', ') : ''
    }

    output += challengesData
      .map((d) =>
        d.id == 1
          ? `<h3>${d.title}</h3><p>Gelöst von ${
              d.solvedBy
            }<br>${generateAttemptsList(d.id)}`
          : `<h3>${d.title}</h3><p>Gelöst von ${d.solvedBy}<br>Gesehen von ${
              d.seenBy
            }<br>Ratio: ${
              d.seenBy > 0 ? Math.round((100 * d.solvedBy) / d.seenBy) : '-'
            }%<br>${generateAttemptsList(d.id)}`
      )
      .join('')

    challengesData.sort(
      (a, b) =>
        Math.round((100 * a.solvedBy) / a.seenBy) -
        Math.round((100 * b.solvedBy) / b.seenBy)
    )
    output +=
      '<h2>Löserate</h2> <ul>' +
      challengesData
        .filter((c) => c.id != 1)
        .map((c) => {
          return {
            title: c.title,
            solvedBy: Math.round((100 * c.solvedBy) / c.seenBy),
          }
        })
        .map((x) => `<li>${x.title} (${x.solvedBy}%)</li>`)
        .join(' ') +
      '</ul></html>'

    res.send(output)
  })

  App.express.get('/mapWithStats', async (req, res) => {
    const usersFromDB = await App.db.models.User.findAll()
    const currentUsers = usersFromDB.filter(
      (user) => !App.moment(user.createdAt).isBefore(fromDate)
    )
    const users = currentUsers.filter((user) => user.score > 0)
    const userIds = users.map((user) => user.id)
    const solutions = await App.db.models.Solution.findAll({
      where: { UserId: { [Op.in]: userIds } },
    })
    const userHistory = userIds.map((id) => {
      const userSolutions = solutions
        .filter((s) => s.UserId == id)
        .map((sol) => {
          const time = App.moment(sol.createdAt).diff(
            App.moment(users.filter((u) => u.id == id)[0].createdAt),
            'minutes'
          )
          const cid = sol.cid
          return { time, cid }
        })
      userSolutions.sort((a, b) => a.time - b.time)
      return { userSolutions }
    })

    const solved = []

    App.challenges.data.map((c) => solved.push(c.id))

    const element = document.createElement('svg')
    const canvas = SVG(element).size('100%', '100%')

    const points = []

    App.challenges.data.map((challenge) => {
      const isSolved = solved.includes(challenge.id)
      const point = {
        id: challenge.id,
        pos: challenge.pos,
        title: challenge.title,
        isSolved,
      }
      const visible =
        isSolved ||
        challenge.deps.some((c) => solved.includes(c)) ||
        challenge.deps.length === 0
      if (visible) {
        points.push(point)
        challenge.deps.forEach((dep) => {
          const previous = App.challenges.data.filter((c) => c.id === dep)[0]
          if (solved.includes(previous.id)) {
            canvas
              .line(
                previous.pos.x,
                previous.pos.y,
                challenge.pos.x,
                challenge.pos.y
              )
              .stroke({ width: 10 })
              .stroke('lightgray')
              .attr('stroke-linecap', 'round')
          }
        })
      }
    })

    // COMPAT: draw points after connections to show the above
    for (const point of points) {
      const solvedBy = solutions.filter((s) => s.cid == point.id).length
      const seenBy = userHistory.filter((h) =>
        h.userSolutions.some((s) =>
          App.challenges.data.find((x) => x.id == point.id).deps.includes(s.cid)
        )
      ).length
      const link = canvas
        .link(App.config.urlPrefix + '/challenge/' + point.id)
        .addClass('no-underline')
      link.circle(18).attr({
        fill: point.isSolved
          ? App.config.styles.pointColor_solved
          : App.config.styles.pointColor,
        cx: point.pos.x,
        cy: point.pos.y,
      })
      const text = link
        .plain(point.title)
        .fill('black')
        .font('family', 'inherit')
        .attr('font-weight', App.config.styles.mapTextWeight)
      text.center(
        point.pos.x + App.config.map.centeringOffset * point.title.length,
        point.pos.y - 23
      )
      const subtext =
        solvedBy + ' / ' + Math.round((100 * solvedBy) / seenBy) + '%'
      const text2 = link
        .plain(subtext)
        .fill('black')
        .font('family', 'inherit')
        .attr('font-weight', App.config.styles.mapTextWeight)
      text2.center(
        point.pos.x + App.config.map.centeringOffset * subtext.length,
        point.pos.y + 16
      )
    }

    res.renderPage({
      page: 'map',
      props: {
        map:
          canvas.svg() +
          '<style>.drawing{background-color:white!important}</style>',
      },
      outsideOfContainer: true,
      backButton: false,
      title: 'Karte mit Statistiken',
    })
  })
}