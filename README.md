### Commencer par git clone le répertoire:

```bash
git clone git@git.recast.ai:bots/starter.git
```

### Installer les node modules: 

```bash
npm install
```
### Modifier ces fichiers pour y mettre vos informations:

- package.json: name / url / author.
- config/index.js: port / tout les tokens utilisés.
- config/deploy.rb: repo_url.

### Il ne vous reste plus qu'a lancer le server.

```bash
npm start
```

### Et si besoin est, il y a un script pour check si vos intents match bien comme il faut.