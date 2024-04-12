/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics




/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
//*******IMPORTANTE : PER LE VISUALIZZAZIONI DEGLI OUTPUT,HO FATTO ALCUNE VOLTE IL TEMPLATE LITERAL,ALTRE NORMALE CONCATENAZIONE E ALTRE VOLTE NELL'HTML,GIUSTO PER VARIARE UN POCO***********
let a = 10;
let b = 20;
let sum = a + b ; 

console.log(`Esercizio A:la somma tra 10 e 20  è : ${sum}`);



/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.round(Math.random() * 20); 
console.log(`Esercizio B:numero casuale tra 0 e 20 : ${random}`);





/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name : "Sabrina",
  surname : "Cinque",
  age : 34
}

console.log(`Esercizio C: oggetto me con le mie caratteristiche : ${JSON.stringify(me)}`);//devo aggiungere JSON.stringify altrimenti nell'output si vede solo Object Object


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(`Esercizio D: oggetto me senza age : ${JSON.stringify(me)}`);






/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["javascript","java"];
console.log(`Esercizio E: oggetto me con aggiunta array skills : ${JSON.stringify(me)}`);



/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("css");//se o voglio aggiungere in fondo
//oppure
me.skills.unshift("html");//se lo voglio aggiungere in cima

console.log(`Esercizio F: oggetto me con aggiunta nuovo elemento in array skills : ${JSON.stringify(me)}`);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(`Esercizio G: oggetto me con eliminazione ultimo elemento in array skills : ${JSON.stringify(me)}`);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log(`******************Esercizi sulle funzioni************************`)
function dice(){
  return Math.floor((Math.random()*6)+1);
}
console.log(`Esercizio 1 : funzione per numero random : ${dice()}`);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(a,b){
  if(a > b){
    return a;
  }else{
    return b;
  }
  
}
console.log(`Esercizio 2 : funzione per ritornare un numero maggiore dati due parametri. Il numero maggiore è : ${whoIsBigger(100,20)}`);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(stringa){
  
  return stringa.split(" ");
}

console.log("Esercizio 3:funzione per ritornare un array contenente le parole di una stringa :");
console.log(splitMe("I love coding")); //i console.log li ho messi separati altrimenti in un'unica riga me li dava con la virgola e non con le parentesi quadre




/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(stringa,boolean){
  if(boolean){
    return stringa.slice(1);
  }else{
    return stringa.slice(0,stringa.length-1);
  }
}

console.log("Esercizio 4 : " + deleteOne("che bella giornata di sole",true));
console.log("oppure: " + deleteOne("che bella giornata di sole",false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(stringa) {
  return stringa.replace(/\d/g, ''); 
}

console.log("Esercizio 5 : funzione per rimuovere i numeri da una stringa :" + onlyLetters("ho 4 uccellini,3 canarini e 2 cani"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(stringa){
  if (stringa.includes("@")){
    return true;
  }else{
    return false;
  }
}
console.log("Esercizio 6 : funzione per verificare un'email :" + isThisAnEmail("epicode@epicode.com"));






/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt(){
//faccio un array con i giorni della settimana (partendo da domenica che è indice 0 ,e li assegno poi alla costante creata,dandogli come indice una costante che prendo da getDate
const giorniSettimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];

const dataCorrente = new Date();
const indiceGiorno = dataCorrente.getDay();//restituisce un numero da 0(domenica) a 6(sabato)

const nomeDelGiorno = giorniSettimana[indiceGiorno];
return nomeDelGiorno;
}
console.log(whatDayIsIt());



/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(numero) {
  let values = [];//inizializzo array vuoto e variabile sum
  let sum = 0;

  
for (let i = 0; i < numero; i++) {// qua gli dico di esegure la funzione un numero di volte(dato come parametro) 
  let numRandom = dice();
  values.push(numRandom); // qui mi aggiunge con il push il valore generato dalla funzone dice,nell'array vuoto creato sopra 
  sum += numRandom; // qui aggiorna la somma
}

// Ritorna sia la somma che l'array con i valori
return {
  sum: sum,
  values: values
  };
}
console.log("Esercizio 8 : " )
console.log(rollTheDices(5));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(data) {
  const giornoCorrente = new Date();
  const dataInserita = new Date(data);
  
  // differenza tra il giorno corrente e la data inserita nel parametro
  const differenza = giornoCorrente.getTime() - dataInserita.getTime();
  
  // dato cheè un numero in millisecondi , devo convertire in gg quindi millisecondi per 3600(i numeri di secondi in un h) * 24(le h in un gg)
  const giorniDidifferenza = Math.floor(differenza / (1000 * 3600 * 24));
  
  return giorniDidifferenza;
}

console.log("Esercizio 9 : tra la data indicata e la data di oggi , ci sono : " + howManyDays("2024-03-06") + " giorni di differenza");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday(giorno){
  const data = new Date();
  const oggi = data.getDate();
  const meseCorrente = data.getMonth() + 1;
  const meseFormattato = meseCorrente < 10 ? '0' + meseCorrente : meseCorrente; //se il numero del mese è inferiore a 10,allora voglio aggiungere lo 0
  const dataCompleanno = oggi + "-" + meseFormattato ;//creo una variabile per confrontare una insieme giorno e mese
  console.log(dataCompleanno);
  if(dataCompleanno === giorno){
    return true;
  }else{
    return false;
  }
 
}
isTodayMyBirthday();
const mioCompleanno = "12-04";  //inserire giorno e mese in formato "gg-mm". Ps=non ho inserito anche l'anno di nascita perchè non ha un fine per capire se oggi è il tuo compleanno
console.log("Esercizio 10: oggi è il tuo compleanno ? Risposta:" + isTodayMyBirthday(mioCompleanno));


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(oggetto,stringa){
  delete oggetto[stringa];
  return oggetto
}


let oggetto = {
  nome : "qualsiasi",
  colore : "nero",
  stringa : "qualsiasiStringa"
}

console.log("Esercizio 11 : l'oggetto" + (JSON.stringify(oggetto)) + " senza la proprietà passata nel parametro è " + (JSON.stringify(deleteProp(oggetto,"colore"))));


//sposto l'array altrimenti non mi fa accedere agli esercizi di sotto 
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(movies) {
  // Inizializza il film più nuovo come il primo film dell'array
  let filmPiuNuovo = movies[0]; //gli dico che il primo film è il più nuovo per fargli fare il confronto man mano...se trova qualcuno di più nuovo allora lo riassegna

  
  movies.forEach(function(movie) {
    //dobbiamo fare il parseInt perchè il numero è stato scritto come una stringa, tra apici
    let currentYear = parseInt(movie.Year);
    let newestYear = parseInt(filmPiuNuovo.Year);
    if (currentYear > newestYear) {
      filmPiuNuovo = movie; //riassegnazione
    }
  });//quando finisce di girare mi restituisce il film più nuovo dopo aver confrontato tutti
  return filmPiuNuovo;
}

console.log("Esercizio 12 : il film più nuovo è " + newestMovie(movies).Title);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(movies){
  return movies.length;
}
console.log("esercizio 13: l'array fornito contiene " + countMovies(movies) + " film");


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(movies) {
  let arrayAnni = [];

  movies.forEach(function(movie) {
    arrayAnni.push(movie.Year); // Supponendo che la proprietà che contiene l'anno sia "Year"
  });

  return arrayAnni;
}

console.log("Esercizio 14 .Questo array che segue , contiene gli anni di uscita dei film contenuti nell'array fornito :")
console.log(onlyTheYears(movies));


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(movie) {
  let anno = parseInt(movie.Year);
  return anno < 2000; 
}

let filmMillennio = movies.filter(onlyInLastMillennium);
console.log("Esercizio 15 : i film usciti lo scorso millennio sono :")
console.log(filmMillennio);


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = (array) => {
  return array.reduce((acc, curr) => acc + parseInt(curr.Year), 0)
}

console.log("Esercizio 16 :  la somma degli anni di produzione di tutti i film è " + sumAllTheYears(movies))




/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(movies, stringa) {
  let stringaArray = [];

  movies.forEach(function(movie) {
    if (movie.Title.toLowerCase().includes(stringa.toLowerCase())) {//metto to lower case così non ho problemi per maiuscole e minuscole
      stringaArray.push(movie);
    }
  });

  return stringaArray;
}
console.log("Esercizio 17 : i film che hanno nel titolo la parola passata per parametro sono : ");
console.log(searchByTitle(movies, 'LORD'));


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(movies,stringa){
  let oggetto = {
    match : [],
    unmatch : []
  }
 
  movies.forEach(function(movie) {
    if (movie.Title.toLowerCase().includes(stringa.toLowerCase())) {//metto to lower case così non ho problemi per maiuscole e minuscole
      oggetto.match.push(movie);
    }else{
      oggetto.unmatch.push(movie);
    }
  });

  return oggetto;
}
console.log("Esercizio 18 : di seguito i film che contegono e non contengono la stringa passata per parametro nel proprio titolo")
console.log(searchAndDivide(movies, 'LORD'));


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(movies, indice) {
  movies.splice(indice, 1);//vai all'indice indicato e rimuovi un solo elemento
  return movies;
}
console.log("Esercizio 19 : Di seguito l'array ,decurtando il film scelto nell'indice fornito : ")
console.log(removeIndex(movies, 13));


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)
//commento : li creo in modo che ,se c'è bisogno di controllare qualcosa, lo controllo;
/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
let container = document.getElementById("container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
let allTd = document.querySelectorAll("td");//in realtà basta fare così

function selectAllTd() {
  return document.querySelectorAll("td");//se lo devo fare per forza come una funzione, lo inserisco in una funzione con il return
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampaContenutoTd() {
  allTd = document.querySelectorAll("td");
  console.log("Esercizio 22: il contenuto di ciascun td è : ");//giusto per la visualizzazione...se lo concatenavo ovviamente mi usciva ripetuto il console.log
  allTd.forEach(function (td){ // Itera su ciascun tag <td>
  console.log(td.textContent); // Stampo il testo contenuto nel tag <td>
  });
}

stampaContenutoTd();


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function aggiungiBackgroundRosso() {
  let links = document.querySelectorAll("a"); // Seleziona tutti i link della pagine

  links.forEach(function(link) { 
    link.classList.add("red"); //e per ognuno aggiungi la class .red che ha lo sfondo rosso(ho messo la class drettamente nella head dell'html)
  });
}

aggiungiBackgroundRosso();




/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

//se voglio fare con l'appendChild
function addLi(){
  let ul = document.getElementById("ul");
  let newLi = document.createElement("li");
  newLi.textContent = "elemento nuovo";
  ul.appendChild(newLi);
}
addLi()

//se voglio fare con il template literal
function addLi2(){
  let ul = document.getElementById("ul");
  ul.innerHTML += `<li>Nuovo elemento con template literal</li>`;//il += altriimenti mi sovrascrive gli altri 

}
addLi2()


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function svuotaUl() {
  let allLi = document.querySelectorAll('#myList li');

  allLi.forEach(function(li) {
    li.remove(); // Rimuove ciascun elemento <li> dalla lista
  });
}
svuotaUl();



/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function aggiungiClassTest() {
  let links = document.querySelectorAll("tr");

  links.forEach(function(link) { 
    link.classList.add("test");//creo la class test sul css nell'html( nella head ) e metto uno sfondo di bg giusto per vedere se è corretto
  });
}

aggiungiClassTest();




// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(num) {
  let div = document.getElementById("esercizio27");
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {  
      div.innerHTML += "*";
    }
    div.innerHTML += "<br>";
    
  }

}
halfTree(5);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

function tree(numero){
  let div = document.getElementById("esercizio28");
  var spaziPrima;
  var asterischi;
  for (let i = 1; i <= numero; i++) {
    for (let j = 1; j <= i; j++) {
      spaziPrima = " &nbsp;".repeat(numero - i); //ci devono essere degli spazi prima,perchè devono essere centrati gli asterischi
      asterischi = "*".repeat(2 * i - 1);
      
    }
    div.innerHTML += spaziPrima + asterischi + "<br>";
    
  }
}

tree(5);




/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrime(numero) {

 
 if(numero >1){
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    // Se il numero è divisibile per i, non è primo
    if (numero % i === 0) {
      return false;
    }else{
      return true;
    }
  }

 }else{
  return "1 è un numero speciale in matematica";
 }
  

  
}

console.log(isItPrime(1)); 