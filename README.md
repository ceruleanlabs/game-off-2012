# Fork It!

**Playable URL:** [https://ceruleanlabs.github.io/game-off-2012/](https://ceruleanlabs.github.io/game-off-2012/)

**Description:** You are playing as Phil! He is a rare species of box that has the ability to push, pull, remove and take colors from inanimate boxes. He's also hungry so help him find the cake in each level!

**How To Play:** You'll find the gameplay instructions in the main window below the game.

**Hints:** Each level may have a hint. These hints will be in the green box below the game.

**Created By:** Thomas Jacobs, Sean Cusick, Dan Bergren and Tom Patterson

**Technologies Used:** [Crafty.js](http://craftyjs.com/)

![](https://ceruleanlabs.github.io/game-off-2012/images/forkit.png)

## Prereqs

- [Node](https://nodejs.org/en/)
- [nodenv](https://github.com/nodenv/nodenv)
  - `$ nodenv install`

## Setup

    $ nodenv install
    $ npm install

## Development

    $ gulp server

Then head to [localhost:8080](http://localhost:8080). Magic!

## Build

This will create a production-ready static site in the `dist` directory.

    $ gulp build

## Deploy

Deploys will always try to `build` first.

    $ gulp deploy
