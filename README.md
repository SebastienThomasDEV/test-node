#PFS - (Pierre, Feuille, Ciseaux)

Ce projet est un jeu de Pierre, Feuille, Ciseaux, totalement utile et indispensable à la vie de tous les jours.
Les stacks utilisées sont Node.js et MongoDB.

Tout le monde connait les règles, donc je ne vais pas les expliquer.

## Installation


```bash
npm install
```

## Utilisation

```bash

npm run dev
```

/!\ Vous devez avec un cluster MongoDB pour pouvoir utiliser ce jeu. configurez votre cluster dans le fichier .env


C'est tout, vous pouvez maintenant jouer à Pierre, Feuille, Ciseaux, révolutionnaire non ?

les routes disponibles sont les suivantes :

- GET /game/start
- GET /game/play/:choice
- GET /game/score
- GET /game/reset

Consommez l'API à l'adresse suivante : http://localhost:3000/game avec votre meilleur client HTTP.


