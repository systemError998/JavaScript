// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") 
 e per ogni elemento stampa in console se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* function giveMeRandom (n) {       //n è il numero di elementi casuali da generare nell'array
   n = prompt("Inserisci un numero che creo un array randomico")
   var randArrayBox = [];         //Creo un array vuoto che immagazzinerà i numeri generati
   for (i=0; i<n; i++) {                                     // ciclo che si ripete n volte
       let randNum = Math.floor(Math.random() * 11);   //crea un numero random tra 0 e 1 con math random, lo moltiplica per 11 e lo arrotonda 
       randArrayBox.push(randNum)             //pusho i numeri generati nel ciclo nell'array 
   }                                                // quando i diventa n il ciclo si ferma 
   return randArrayBox          // ritorno l'array generato con i numeri pushati all'interno
} //FINE FUNZIONE

let myArray = giveMeRandom();
console.log(myArray);
// console.log(giveMeRandom());                                 //richiamo sta sfaccimm e funzion 

let sum = 0;
function checkArray () {
   for (let i=0; i<myArray.length; i++) {
      if (myArray[i]>5) {
         console.log(myArray[i] + " è maggiore di 5");
         sum = sum + myArray[i]
         console.log(sum);
      } else {console.log(myArray[i] + " non è maggiore 5");}
   } 
}
console.log(checkArray()); */



/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: 
 "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* let shoppingCart = [
   {
      price: 5,
      name: "peppe",
      id: "peppe",
      quantity: 2 //10
   },
   {
      price: 10,
      name: "arca",
      id: "arca",
      quantity: 6 //50
   },
   {
      price: 20,
      name: "umby",
      id: "umby",
      quantity: 3 //60
   }
]


let total = 0;
let total2 = 0;
function shoppingCartTotal() {
   for (let i=0; i<shoppingCart.length; i++) {

      total = shoppingCart[i].price * shoppingCart[i].quantity
      // console.log(total);
      total2 += total
   } return total2
} 
console.log(shoppingCartTotal()); */



/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", 
 "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e 
 ritorna il nuovo numero totale degli elementi.
*/

/* let shoppingCart = [
   {
      price: 5,
      name: "peppe",
      id: "peppe",
      quantity: 2 //10
   },
   {
      price: 10,
      name: "arca",
      id: "arca",
      quantity: 6 //50
   },
   {
      price: 20,
      name: "umby",
      id: "umby",
      quantity: 3 //60
   }
]

function addToShoppingCart () {
   let obj = {
      price: 5,
      name: "pippo",
      id: "pippo",
      quantity: 2 //10
   }
   shoppingCart.push(obj)

   return shoppingCart //  RETURN DEVE STARE DENTRO LA FUNZIONE
}  

console.log(addToShoppingCart());
console.log("Il nuovo array è di " + shoppingCart.length + " elementi"); */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: 
 "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e 
 ritorna l'oggetto più costoso in esso contenuto.
*/

/* let shoppingCart = [
   {
      price: 5,
      name: "peppe",
      id: "peppe",
      quantity: 2 //10
   },
   {
      price: 10,
      name: "arca",
      id: "arca",
      quantity: 6 //50
   },
   {
      price: 20,
      name: "umby",
      id: "umby",
      quantity: 3 //60
   }
]

let max;
function maxShoppingCart () {
   for (let i=0; i<shoppingCart.length; i++) {
      max = Math.max(shoppingCart[i].price)
   } return max
}

console.log(maxShoppingCart()); */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: 
 "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

let shoppingCart = [
   {
      price: 5,
      name: "peppe",
      id: "peppe",
      quantity: 2 //10
   },
   {
      price: 10,
      name: "arca",
      id: "arca",
      quantity: 6 //50
   },
   {
      price: 20,
      name: "umby",
      id: "umby",
      quantity: 3 //60
   }
]

function latestShoppingCart () {
   latestItem = shoppingCart.pop();
   return latestItem;
}
console.log(latestShoppingCart());

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/



/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente 
i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
