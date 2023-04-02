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

#### Milestone 3

In questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco. Ci viene passata dall’API solo la parte finale dell’URL, questo perché poi potremo generare da quella porzione di URL tante dimensioni diverse. 
Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote (troviamo le icone in FontAwesome).
Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze piene

#### Milestone 4

Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp, creando un layout completo simil-Netflix:
- Un header che contiene logo e search bar
- Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma di “card” in cui lo sfondo è rappresentato dall’immagine di copertina (consiglio la poster_path con w342)
- Andando con il mouse sopra una card (on hover), appaiono le informazioni aggiuntive già prese nei punti precedenti più la overview
