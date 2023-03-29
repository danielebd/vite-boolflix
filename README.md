# Vue Template

Template di partenza per progetti Vue con option API

Per installare il progetto

- npm install
- npm run dev

#### Milestone 0

- intallazione pacchetti base per sviluppare il progetto
- installazione aggiuntiva pacchetto bootstrap per agevolare la futura creare dell'interfaccia
- intallazione aggiuntiva pacchetto axios per la manipolazione API
- creazione di store.js per importare le variabili in cui si vogliono manipolarli così da non essere vincolati ad un contenitore solo
- strutturazione base componenti

#### Milestone 1

- Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
- Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
Titolo
Titolo Originale
Lingua
Voto

#### Error: 

commit Millestone1 = Millestone0, Millestone2 = Millestone1

nei commit cio che viene contrassegnato come millestone 1 in realta è la millestone 0. Erroneamente si è partiti dall'1 anzichè dallo 0

Ora sono state compleate le milestone 0 e 1 quindi si procederà allo svolgimento della millestone 2

#### Milestone 2

Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).

Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)
