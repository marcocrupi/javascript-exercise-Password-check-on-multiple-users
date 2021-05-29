var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is so cool"
    }
];

// Inserimento Username e Password

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);
// Ho chiamato la funzione signIn, che accetta due parametri "user" e "password", così quando chiamo la funzione
// associo i due argomenti "userNamePrompt" e "passwordPrompt" per confrontarli con quei parametri.
// In questo modo è possibile verificare quello che digitiamo.

// Verifica delle credenziali

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
           return true;
        // se l'utente è valido ritorna "vero", dopodiché se ritorna "vero" la funzione finisce.
        } 
    }
    return false;
    // se però la condizione non dovesse essere vera c'è "false"
}

function signIn(username, password) {
    // console.log(isUserValid(username, password));
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password");
    }
 
    // for (var i = 0; i < database.length; i++) {
    //     if (database[i].username === username &&
    //         database[i].password === password) {
    //         console.log(newsFeed);
    //     } else {
    //         alert("Sorry, wrong username and password");
    //     }
    // }
    // Questa funzione da errore perché verificando tutti gli item manda il messaggio di errrore per quelli non corrispondenti ai dati inseriti

    // if (user === database[0].username 
    //     && pass === database[0].password) {
    //     console.log(newsFeed);
    // }
    // else {
    //     alert("Sorry, wrong username and password");
    // }
}
// Questa funzione cerca solo il primo item dell'array, a noi serve una funzione che faccia un controllo su tutti gli item.

