#Pierre, Feuille, Ciseaux

Ce projet est un jeu de Pierre, Feuille, Ciseaux, totalement utile et indispensable à la vie de tous les jours.
Les stacks utilisées sont Node.js et MongoDB.

## Installation

```bash
npm install
```

## Utilisation

```bash
npm run dev
```

/!\ Vous devez avec un cluster MongoDB pour pouvoir utiliser ce jeu. créer et configurez votre cluster dans le fichier .env

les routes disponibles sont les suivantes :

- GET /game/start
- GET /game/play/:choice  /!\choix possibles: rock, paper, scissors
- GET /game/score
- GET /game/reset

Consommez l'API à l'adresse suivante : http://localhost:3000/game avec votre meilleur client HTTP.


