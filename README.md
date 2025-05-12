# Hackathon : Memory

Le but de ce hackathon est de se familiariser avec stimulus et les websockets.
On va donc créer un jeu, le memory.

Pour ceux qui ne savent pas ce qu'est un memory, c'est un jeu de mémoire où plusieurs joueurs jouent chacun leur tour dans le but de trouver des paires.

Vous allez donc partir de ce boilerplate.

## Contenu

1. [Card flip](#card-flip)
2. [Règles du jeu](#game-rules)
3. [Multijoueur](#multiplayer)
4. [Bonus](#bonus)

---

### <a name="card-flip"></a> Card flip

Dans un premier, il faut faire en sorte qu'on puisse tourner les cartes.

Il y a déjà un template qui gère la carte, il faut donc le modifier et ajouter toute l'intéractivité pour qu'au clique sur la carte, la carte se tourne.

Tout est à faire en utilisant Stimulus, il y a donc toute la mise en place pour que le projet puisse fonctionner avec Stimulus. Il y a déjà la gem `stimulus-rails`.

Indice 1 : Il faut lire le fichier .css correspondant

Indice 2 : Vous pouvez soudoyer les soi-disant mentors

---

### <a name="game-rules"></a> Règles du jeu

Vu que, maintenant, on peut appuyer sur les cartes et donc voir le chiffre de la carte. Il faut coder le jeu !

Les règles du jeu :
- Le jeu se termine lorsque toutes les paires ont été trouvées.
- À chaque tour, on ne peut révéler que 2 cartes.
- Si les 2 cartes révélées sont identiques, on les laisse visible.
- Si les 2 cartes révélées sont différentes, il faut les retourner.

Toutes les règles sont à gérer côté front, donc que du javascript !

---

### <a name="multiplayer"></a> Multijoueur

Trop bien, le jeu est codé, mais maintenant, on veut pouvoir jouer au jeu à plusieurs !
Quand je dis plusieurs, c'est 2, 3, 4, 5 !

Il faut donc pouvoir communiquer entre plusieurs devices qui sont connectés sur le jeu.
Pour ça, il faut donc utiliser les websockets !

Quelques changements de règle :
- Chaque joueur joue chacun leur tour.
- Quand un joueur joue, les autres joueurs voient en temps réel les cartes se tournaient.
- Garder le score des joueurs, pour pouvoir déterminer qui a eu le plus de paires !

---

### <a name="bonus"></a> Bonus

Si vous êtes là, vous êtes des boss ! Bravo !
Vous avez réussi les parties principales, c'est le plus important.
Si vous arrivez à cette étape, il faut en informer les mentors.

Pour cette étape bonus, ce qu'on veut, c'est pouvoir sauvegarder les parties.
Il faut donc configurer la database, et faire en sorte de sauvegarder les résultats et les scores de chaque joueur.

Si vous avez encore du temps, vous pouvez sauvegarder l'historique de chaque action de chaque joueur.
