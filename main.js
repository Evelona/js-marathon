const createNode = (tag, classname) => {
    const $tag = document.createElement(tag)
    if (classname) $tag.classList.add(classname)

    return $tag
}

const $randBtn = createNode('button', 'button')
// Task #0
const firstPlayer = {
    player: 1,
    name: 'Sonya',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['gun', 'rope'],
    attack: function() {
        console.log(this.name + ' - Fight..')
    },
    changeHP: function(hp) {
        if (this.hp > 0) {
            console.log(`${this.name} minus ${hp} hp`)
            let reducedHP = this.hp - hp
            this.hp = reducedHP >= 0? reducedHP : 0
            if (this.hp === 0) {
                console.log(`${secondPlayer.name} wins`)
                $randBtn.disabled = true
            }
        }
    }
}

const secondPlayer = {
    player: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['pin'],
    attack: function() {
        console.log(this.name + ' - Fight..')
    },
    changeHP: function(hp) {
        if (this.hp > 0) {
            console.log(`${this.name} minus ${hp} hp`)
            let reducedHP = this.hp - hp
            this.hp = reducedHP >= 0? reducedHP : 0
            if (this.hp === 0) {
                console.log(`${firstPlayer.name} wins`)
                $randBtn.disabled = true
            }
        }
    }
}

////////////////////////////////////////////////////////////////////


// Task #1
const $arenas = document.querySelector('div.arenas')

const createPlayer = ( player) => {
    const $player = createNode('div', 'player' + player.player)
    const $progressbar = createNode('div', 'progressbar')
    const $character = createNode('div', 'character')

    const $life = createNode('div', 'life')
    $life.style.width=`${player.hp}%`
    const $name = createNode('div','name')
    $name.innerHTML = player.name

    $progressbar.appendChild($life)
    $progressbar.appendChild($name)

    const $img = createNode('img')
    $img.src = player.img
    $character.appendChild($img)

    $player.appendChild($progressbar)
    $player.appendChild($character)


    return $player
}

$arenas.appendChild(createPlayer( firstPlayer))
$arenas.appendChild(createPlayer( secondPlayer))

////////////////////////////////////////////////////////////////////

const randomValue = Math.round(1 + Math.random() * 20)

const $control = createNode('div', 'control')
// const $randBtn = createNode('button', 'button')
$randBtn.innerHTML = 'Random'
const players = [firstPlayer, secondPlayer]
$randBtn.onclick = () => {
    players[Math.round(Math.random()*1)].changeHP(Math.round(1 + Math.random() * 20))
}

$control.appendChild($randBtn)
$arenas.appendChild($control)
