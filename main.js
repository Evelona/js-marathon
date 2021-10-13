// Task #0
const firstPlayer = {
    name: 'Sonya',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['gun', 'rope'],
    attack: function() {
        console.log(this.name + ' - Fight..')
    }
}

const secondPlayer = {
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['pin'],
    attack: function() {
        console.log(this.name + ' - Fight..')
    }
}

firstPlayer.attack()

// Task #1
const createPlayer = (playerClass, player) => {
    const $player = document.createElement('div')
    $player.classList.add(playerClass)
    

    const $progressbar = document.createElement('div')
    $progressbar.classList.add('progressbar')
    const $character = document.createElement('div')
    $character.classList.add('character')

    const $life = document.createElement('div')
    $life.classList.add('life')
    $life.style.width=`100%`
    const $name = document.createElement('div')
    $name .classList.add('name')
    $name.innerHTML = player.name

    $progressbar.appendChild($life)
    $progressbar.appendChild($name)

    const $img = document.createElement('img')
    $img.src = player.img
    $character.appendChild($img)

    $player.appendChild($progressbar)
    $player.appendChild($character)


    document.querySelector('div.arenas').appendChild($player)
}


// Task #2
// createPlayer('player1', 'SCORPION', 50);
// createPlayer('player2', 'SUB-ZERO', 80);


// Task #3
createPlayer('player1', firstPlayer);
createPlayer('player2', secondPlayer);
