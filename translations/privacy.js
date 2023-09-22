module.exports = privacy_transelation = {
    "en": {
        "content": `
        <h3 class="my-4">Personal data</h3>
        
        <p>We take the protection of your personal data very seriously. You can use the Hack The Web offer without disclosing personal data. Registration works without specifying an e-mail address, instead you enter a self-chosen pseudonym. If you want to remain anonymous, make sure that the pseudonym does not allow conclusions to be drawn about your person.
        </p>
        
        <h3 class="my-4">Account data</h3>
        
        <p>Your username will be displayed publicly in the highscore and possibly also on the start page. The time of the last activity on the platform is stored and also displayed. In addition, each challenge can be viewed to see how many users have already solved it (without reference to a single user). In the profile, your account can be completely deleted at any time. The operator reserves the right to change or delete accounts without notice.
        </p>
        
        <h3 class="my-4">Hosting</h3>
        
        <p>This website is hosted at <a href="https://uberspace.de">uberspace.de</a>. The data processing takes place entirely in Germany and is subject to the GDPR. When using the website, logs of calls and errors are kept. The IP address is masked.
        </p>
        
        <h3 class="my-4">Logs</h3>
        
        <p>Internal logs are kept and evaluated to improve the challenges and to detect possible problems. These logs are not publicly accessible, are not passed on and are not needed for any other purpose. The logs contain your solved challenges and the inputs for the challenges (without reference to a single user). The logs for the inputs are deleted after a maximum of one year.
        </p>
        
        <h3 class="my-4">Cookies</h3>
        
        <p>When you register or log in to HackTheWeb, the website sets a cookie with a session ID. This is required to maintain your login status. The cookie is automatically deleted when the browser window is closed or after one day. No tracking takes place.
        </p>
        
        
        <p>Local accounts are permanently stored in your browser. You can remove all local accounts by clicking <a onclick="resetLocalUsers()" href="#">here</a>.
        </p>
        
        <h3 class="my-4">Google Fonts</h3>
        
        <p>This website uses Google Fonts. For more information, visit their <a href="https://developers.google.com/fonts/faq" target="_blank">FAQ</a>.
        </p>
        
        <script>
        function resetLocalUsers() {
          localStorage.removeItem('htw_local_users')
          alert('Accounts erfolgreich entfernt.')
        }
        </script>
        `
    },
    "de": {
        "content": `
      <h3 class="my-4">Persönliche Daten</h3>
      
      <p>Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Du kannst das Angebot von Hack The Web nutzen, ohne personenbezogene Daten weiterzugeben. Die Registrierung funktioniert ohne Angabe einer E-Mail-Adresse, stattdessen gibst du ein selbstgewähltes Pseudonym an. Falls du anonym bleiben möchtest, achte darauf, dass man durch das Pseudonym nicht auf deine Person zurückschließen kann.
      </p>
      
      <h3 class="my-4">Accountdaten</h3>
      
      <p>Dein Benutzername wird in der Highscore öffentlich angezeigt und möglicherweise auch auf der Startseite. Es wird der Zeitpunkt der letzten Aktivität auf der Plattform gespeichert und ebenfalls mit angezeigt. Bei jeder Aufgabe ist zudem einsehbar, wie viele Nutzer sie bereits gelöst haben (ohne Rückführung auf einen einzelnen Benutzer). Im Profil lässt sich dein Account jederzeit vollständig löschen. Der Betreiber behält sich das Recht vor, ohne Ankündigung Accounts zu verändern oder zu löschen.
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
    `
    }
}