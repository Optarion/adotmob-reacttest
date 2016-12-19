# Exercice

### `Objectif`
L'objectif de cet exercice est de récupérer un jeu de données depuis une API et d'afficher les resultats dans une grid CSS en utilisant React et une librairie CSS.

### `Données de l'exercice`

### API
    https://jsonplaceholder.typicode.com/photos

Cette url renvoie un tableau d'objets dont un exemple est donné ci-dessous:

    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "http://placehold.it/600/92c952",
        "thumbnailUrl": "http://placehold.it/150/30ac17"
    }

### RENDU FINAL

Afficher les 100 premiers resultats fournis par l'API dans une grid responsive en affichant 3 colonnes par ligne et dans lesquelles seront affichés l'image fournie par la clé 'thumbnailUrl' et le lien fourni par la clé 'url' (comme sur le screenshot ci-dessous).

<img src="src/screen.png" />


### NOTES

* Ce projet a été créé avec [Create React App](https://github.com/facebookincubator/create-react-app)

* Par defaut, la librarie CSS [bulma](http://bulma.io/) est inclue dans ce projet mais il est possible d'en utiliser une autre.

* Il est possible d'utiliser n'importe quelle methode/librairie pour fetcher les données de l'API. ([Fetch API](https://developers.google.com/web/updates/2015/03/introduction-to-fetch), await/async, Promises, generators etc...)

* Il est demandé d'utiliser au maximum la syntaxe ES6.

* La structure finale des fichiers est libre.

### COMMANDES

Starts the development server:

    npm start
