const boxers = {
    boxer_1: {
        name: 'Tom Eagle',
        titul: 'Чемпион Мира',
        impact_strength: 10,
        health: 100,
        stamina: 60,
    },
    boxer_2: {
        name: 'Mikky Neforsky',
        titul: {
            new: 'уборщик',
            old: 'Чемпион Мира',
        },
        impact_strength: 5,
        health: 56,
        stamina: 40,
    },
}

boxers.getStatus = function () {
    console.log(`Табло. В красном углу ринга находится ${boxers.boxer_1.name}, действующий ${boxers.boxer_1.titul}. В синем углу находится ${boxers.boxer_2.name}. На данный момент, он ${boxers.boxer_2.titul.new} нашего зала, но в далеком прошлом, он такой же ${boxers.boxer_2.titul.old   }. Информация о бойцах: Сила удара Тома равна ${boxers.boxer_1.impact_strength} тоннам, а Микки - ${boxers.boxer_2.impact_strength} граммам, ну и разница. По состоянию здоровья Том явно лидирует, его пульс ${boxers.boxer_1.health} у/c. Того не скажешь про Нефорски, его пульс составляет ${boxers.boxer_2.health} у/c, погодите, разве такое возможно?!. Что можно сказать про внешний вид бойцов. Здесь все не так однозначно, однако лично я бы дал ${boxers.boxer_1.stamina} баллов по сто бальной шкале привлекательности, Тому. Ну, а Мики бы дал около ${boxers.boxer_2.stamina} баллов.`)

    let impact_strength = ''
    let health = ''
    let stamina = ''

    if (boxers.boxer_1.impact_strength >= 7) {
        impact_strength = 'Потрясащий хук с левой!'
    } else if (boxers.boxer_1.impact_strength >= 5) {
        impact_strength = 'Хороший хук с правой!'
    } else {
        impact_strength = 'Плохой удар!'
    }

    if (boxers.boxer_1.health >= 70) {
        health = 'глаза сверкают'
    } else if (boxers.boxer_1.health >= 40) {
        health = 'все плывет'
    } else {
        health = 'кишки вываливаются'
    }

    if (boxers.boxer_1.stamina >= 40) {
        stamina = 'порхает, как бабочка'
    } else if (boxers.boxer_1.stamina >= 35) {
        stamina = 'порхает, как гусеница'
    } else {
        stamina = 'ползет!!!'
    }

    console.log(`${boxers.boxer_1.name} совершает резкий выпад! Вааау, какой ${impact_strength} Он снес ему ${boxers.boxer_1.impact_strength} очков здоровья. Вот это матч! Несмотря на эту технику, ${boxers.boxer_2.name} удается контрударить. У ${boxers.boxer_1.name} уже и ${health}, не понятно кому быстрее понадобится помощь врача. Однако одно нам известно точно! Том ${stamina}, а у меня аж дыхание перехватило.`)

    if (boxers.boxer_2.health === 0) {
        console.log(`Ой, Мики сдох.`)
    }

    if (boxers.boxer_1.health === 0) {
        console.log(`Ой, Том сдох.`)
    }
}

boxers.punch = function () {
    if (boxers.boxer_1.stamina >= 30) {
        boxers.boxer_1.impact_strength += 10
        boxers.boxer_1.stamina -= 40
        boxers.boxer_2.health -= 20
    } else {
        boxers.boxer_1.impact_strength -= 10
        boxers.boxer_1.stamina++
        boxers.boxer_2.health -= boxers.boxer_1.impact_strength
    }
}

boxers.dance = function () {
    console.log('Минутка танцев перед матчем. Тунц. Тунц.')
}

boxers.steroids = function () {
    boxers.boxer_1.stamina += 20
}

boxers.block = function () {
    boxers.boxer_1.stamina--
    boxers.boxer_1.health++
}
boxers.counterstrike = function () {
    boxers.boxer_1.impact_strength += 100
    boxers.boxer_2.health = 0
}

boxers.dance()
boxers.steroids()
boxers.getStatus()


