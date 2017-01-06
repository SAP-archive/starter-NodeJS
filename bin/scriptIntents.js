'use strict'

const request = require('request-promise')
const recast = require('recastai')

const recastClient = new recast.Client('d79279ce5a8d14b2a2090b12e7237d6a')

const questions = [
  { intent: 'feelings', message: 'Merci' },
  { intent: 'feelings', message: 'merci cool' },
  { intent: 'feelings', message: 'super merci' },
  { intent: 'feelings', message: 'merci top' },
  { intent: 'feelings', message: 'ok' },
  //------------------------------
  { intent: 'goodbyes', message: 'Au revoir!' },
  { intent: 'goodbyes', message: 'A bientot' },
  { intent: 'goodbyes', message: 'bye' },
  { intent: 'goodbyes', message: 'ciao' },
  { intent: 'goodbyes', message: 'aurevoir' },
  //------------------------------
  { intent: 'greetings', message: 'Bonjour' },
  { intent: 'greetings', message: 'hey' },
  { intent: 'greetings', message: 'Salut' },
  { intent: 'greetings', message: 'coucou' },
  { intent: 'greetings', message: 'hello' },
  //------------------------------
  { intent: 'taux-tva', message: 'TVA?' },
  { intent: 'taux-tva', message: 'renseignement sur la TVA' },
  { intent: 'taux-tva', message: 'de combien est le taux de tva?' },
  { intent: 'taux-tva', message: 'differences taux TVA' },
  { intent: 'taux-tva', message: 'taxe valeur ajoutée' },
  //------------------------------
  { intent: 'mensualisation', message: 'mensualisation?' },
  { intent: 'mensualisation', message: 'avantages de la mensualisation' },
  { intent: 'mensualisation', message: 'comment mensualiser?' },
  { intent: 'mensualisation', message: 'qu\'est ce la mensualisation' },
  { intent: 'mensualisation', message: 'mensualiser les paiements' },
  //------------------------------
  { intent: 'reglementation', message: 'reglementation?' },
  { intent: 'reglementation', message: 'changements reglementation' },
  { intent: 'reglementation', message: 'nouvelles reglementations?' },
  { intent: 'reglementation', message: 'parle moi de la reglementation' },
  { intent: 'reglementation', message: 'evolution des reglementations' },
  //------------------------------
  // { intent: 'facture-electronique', message: 'facture electronique?' },
  // { intent: 'facture-electronique', message: 'parle moi de la facture electronique' },
  // { intent: 'facture-electronique', message: 'acceder a mes factures' },
  // { intent: 'facture-electronique', message: 'factures sur internet' },
  // { intent: 'facture-electronique', message: 'facture en ligne' },
  //------------------------------
  { intent: 'erreur-facture', message: 'erreur facture?' },
  { intent: 'erreur-facture', message: 'resoudre une erreur de facture' },
  { intent: 'erreur-facture', message: 'soucis de facture' },
  { intent: 'erreur-facture', message: 'erreur de facturation' },
  { intent: 'erreur-facture', message: 'que faire si erreur de factures?' },
  //------------------------------
  { intent: 'voir-facture', message: 'factures' },
  { intent: 'voir-facture', message: 'donne moi ma facture de Novembre' },
  { intent: 'voir-facture', message: 'mars' },
  { intent: 'voir-facture', message: 'je veux ma derniere facture' },
  { intent: 'voir-facture', message: 'janvier 2014' },
  //------------------------------
  { intent: 'aide', message: 'aide moi stp' },
  { intent: 'aide', message: 'aide' },
  { intent: 'aide', message: 'Que peux tu faire pour moi?' },
  { intent: 'aide', message: 'j\'ai besoin d\'aide' },
  { intent: 'aide', message: 'Je suis perdu' },
  //------------------------------
  { intent: 'aide-facture', message: 'support facture' },
  { intent: 'aide-facture', message: 'Je veux parler de ma facture' },
  { intent: 'aide-facture', message: 'Aide sur ma facture' },
  { intent: 'aide-facture', message: 'Je cherche un conseiller pour ma facture' },
  { intent: 'aide-facture', message: 'conseils pour ma facture?' },
  //------------------------------
  { intent: 'aide-panne', message: 'Panne?' },
  { intent: 'aide-panne', message: 'Je n\'ai plus de gaz' },
  { intent: 'aide-panne', message: 'J\'ai une panne' },
  { intent: 'aide-panne', message: 'J\'ai plus de courant' },
  { intent: 'aide-panne', message: 'Il n\'y a plus d\'electricité' },
  //------------------------------
  { intent: 'support', message: 'Support?' },
  { intent: 'support', message: 'Je cherche a contacter EDF' },
  { intent: 'support', message: 'Je veux contacter un conseiller' },
  { intent: 'support', message: 'Comment etre mis en relation?' },
  { intent: 'support', message: 'Je veux parler a un humain' },
]


let curIndex = 0;

const Id = ((questions, curIndex) => {

  (function (curIndex) {
    if (questions[curIndex].message === '0') {
      process.stdout.write('*')
      return
    }
    recastClient.textRequest(questions[curIndex].message, { language: 'fr' })
      .then(recast => {
        if (!recast.intent() || recast.intent().slug !== questions[curIndex].intent) {
          console.log('\n[ERROR] Recast matched: ' + (recast.intent() ? recast.intent().slug : 'nothing') + ' | Should be: ' + questions[curIndex].intent + ' | Sentence: ' + questions[curIndex].message)
        } else {
          process.stdout.write('.')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }) (curIndex)

  if (curIndex < questions.length - 1) {
    setTimeout(function() { Id(questions, ++curIndex) }, 0)
  } else {
    return
  }
})

Id(questions, 0)
