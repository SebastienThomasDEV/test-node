const controller = {};
const Score = require('../model/score');
const env = require('dotenv').config();


controller.play = (req, res) => {
    // Je fait une requête pour récupérer les données de la partie
    Score.find().then((score) => {
        // Si la partie n'est pas commencée, je renvoie un message d'erreur
        if (score.length === 0) {
            res.status(400).json({message: "Game not started"});
            return;
        }
        // Je définis les choix possibles pour le jeu pierre, feuille, ciseaux
        const choices = ["rock", "paper", "scissors"];
        // puis je définis le choix de l'ordinateur
        const computer = Math.floor(Math.random() * 3);
        // et je récupère le choix du joueur
        const player = choices.indexOf(req.params.choice);
        // Je définis une variable
        let result = "";
        // Je compare les choix du joueur et de l'ordinateur pour déterminer le résultat de la partie
        // Si les choix sont les mêmes, c'est une égalité
        if (player === computer) {
            result = "sadly, it's a tie";
            score[0].tie += 1;
        } else if ((player === 0 && computer === 2)
            || (player === 1 && computer === 0)
            || (player === 2 && computer === 1)) {
            // Si le joueur gagne, je renvoie un message de victoire
            result = "excellent, you win keep it up";
            // et j'incrémente le score du joueur
            score[0].win += 1;
        } else {
            // Sinon, je renvoie un message de défaite
            result = "sorry, you loose the server wins once again";
            // et j'incrémente le score de l'ordinateur
            score[0].loose += 1;
        }
        // Je mets à jour les données de la partie
        Score.updateOne({_id: score[0]._id}, score[0]).then((score) => {
            res.json({
                player: `The player has played ${req.params.choice}`,
                computer: `The server has played ${choices[computer]}`,
                result: result
            });
        }).catch((err) => {
            res.status(500).json(err);
        });
    }).catch((err) => {
        res.status(500).json(err);
    });
}

controller.start = (req, res) => {
// Je vérifie si la partie est déjà commencée
    Score.find().then((score) => {
        if (score.length > 0) {
            res.status(400).json({message: "Game already started"});
            return;
        }
        // Si la partie n'est pas commencée, je crée une nouvelle partie
        Score.create({
            win: 0,
            loose: 0,
            tie: 0
        }).then((score) => {
            // et je renvoie un message de confirmation
            res.json({message: "Game started, good luck ! ༼つ ◕_◕ ༽つ (server is not cheating, I swear)"});
        }).catch((err) => {
            res.status(500).json(err);
        });
    }).catch((err) => {
        res.status(500).json(err);
    });
}


controller.getScore = (req, res) => {
    // Je récupère les données de la partie
    Score.find().then((score) => {
        // Si la partie n'est pas commencée, je renvoie un message d'erreur
        if (score.length === 0) {
            res.status(400).json({message: "Game not started"});
            return;
        }
        // Je définis un message personnalisé en fonction du score
        let customResponse = "";
        // et j'attribue un message en fonction du score
        if (score[0].win > score[0].loose) {
            customResponse = "nice one ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧, keep it up !";
        } else if (score[0].win < score[0].loose) {
            customResponse = "the server is winning, try harder (╯°□°）╯︵ ┻━┻";
        } else {
            customResponse = "it's a tie, fight harder (ง •̀_•́)ง";
        }
        // Je renvoie les données de la partie
        const response = {
            a: " ________________ ",
            b: `|  win: ${score[0].win}        |`,
            c: `|  loose: ${score[0].loose}      |`,
            d: `|  tie: ${score[0].tie}        |`,
            e: "|________________|",
            msg: customResponse
        }
        res.json(response);
    }).catch((err) => {
        res.status(500).json(err);
    });
}


controller.reset = (req, res) => {
    // Je vérifie si la partie est déjà commencée
    Score.find().then((score) => {
        if (score.length === 0) {
            res.status(400).json({message: "Game not started"});
            return;
        }
        // Si la partie est commencée, je supprime les données de la partie
        Score.deleteMany().then(() => {
            // je renvoie un message de confirmation
            res.json({message: "arrrgh shit here we go again, ٩(ˊᗜˋ')و"})
        }).catch((err) => {
            res.status(500).json(err);
        });
    }).catch((err) => {
        res.status(500).json(err);
    });
}

controller.cheat = (req, res) => {
    Score.find().then((score) => {
        if (score.length === 0) {
            res.status(400).json({message: "Game not started"});
            return;
        }
        // je vérifie que que j'ai recu les données de ma requête post
        if (req.body.win) {
            score[0].win = req.body.win;
        }
        if (req.body.loose) {
            score[0].loose = req.body.loose;
        }
        if (req.body.tie) {
            score[0].tie = req.body.tie;
        }
        // et je sauvegarde la partie
        Score.updateOne({_id: score[0]._id}, score[0]).then(() => {
            res.json({message: "Score updated, mission accomplished"});
        }).catch((err) => {
            res.status(500).json({message: "Score not updated, abort mission, ABORT MISSION"});
        });
    }).catch((err) => {
        res.status(500).json(err);
    });
}
module.exports = controller;


