function movement_enemy () {
    if (enemy.get(LedSpriteProperty.Y) % 2 == 0) {
        if (enemy.get(LedSpriteProperty.X) == 4) {
            enemy.change(LedSpriteProperty.Y, 1)
        }
        enemy.change(LedSpriteProperty.X, 1)
    } else {
        if (enemy.get(LedSpriteProperty.X) == 0) {
            enemy.change(LedSpriteProperty.Y, 1)
        }
        enemy.change(LedSpriteProperty.X, -1)
    }
}
function bullet_end () {
    bullet.set(LedSpriteProperty.Blink, 10)
    basic.pause(200)
    bullet.delete()
    ammo += -1
    bullet.set(LedSpriteProperty.Blink, 0)
    bullet_shot = 0
}
input.onButtonPressed(Button.A, function () {
    if (moving_cooldown == 0) {
        moving_cooldown += 1
        if (0 > 0) {
            player_charakter.set(LedSpriteProperty.Blink, 5)
            basic.pause(500)
            player_charakter.set(LedSpriteProperty.Blink, 0)
        } else {
            player_charakter.move(-1)
        }
        basic.pause(200)
        moving_cooldown = 0
    }
})
function movement_heavy_enemy () {
    if (heavy_enemy.get(LedSpriteProperty.Y) % 2 == 0) {
        if (heavy_enemy.get(LedSpriteProperty.X) == 4) {
            heavy_enemy.change(LedSpriteProperty.Y, 1)
        }
        heavy_enemy.change(LedSpriteProperty.X, 1)
    } else {
        if (heavy_enemy.get(LedSpriteProperty.X) == 0) {
            heavy_enemy.change(LedSpriteProperty.Y, 1)
        }
        heavy_enemy.change(LedSpriteProperty.X, -1)
    }
}
function player_death_anim () {
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Breve)), music.PlaybackMode.InBackground)
    enemy.delete()
    enemy.set(LedSpriteProperty.Brightness, 0)
    player_charakter.set(LedSpriteProperty.Blink, 10)
    basic.pause(200)
    player_charakter.set(LedSpriteProperty.Brightness, 150)
    basic.pause(200)
    player_charakter.set(LedSpriteProperty.Brightness, 125)
    basic.pause(200)
    player_charakter.set(LedSpriteProperty.Brightness, 100)
    player_charakter.set(LedSpriteProperty.Blink, 50)
    basic.pause(200)
    player_charakter.set(LedSpriteProperty.Brightness, 50)
    player_charakter.delete()
    game.gameOver()
}
function movement_fastenemy () {
    if (fast_enemy.get(LedSpriteProperty.Y) % 2 == 0) {
        if (fast_enemy.get(LedSpriteProperty.X) == 4) {
            fast_enemy.change(LedSpriteProperty.Y, 1)
        }
        fast_enemy.change(LedSpriteProperty.X, 1)
    } else {
        if (fast_enemy.get(LedSpriteProperty.X) == 0) {
            fast_enemy.change(LedSpriteProperty.Y, 1)
        }
        fast_enemy.change(LedSpriteProperty.X, -1)
    }
}
function enemy_death_anim () {
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    bullet.set(LedSpriteProperty.Brightness, 0)
    enemy.set(LedSpriteProperty.Blink, 10)
    basic.pause(200)
    enemy.set(LedSpriteProperty.Brightness, 150)
    basic.pause(200)
    enemy.set(LedSpriteProperty.Brightness, 125)
    basic.pause(200)
    enemy.set(LedSpriteProperty.Brightness, 100)
    enemy.set(LedSpriteProperty.Blink, 50)
    basic.pause(200)
    enemy.set(LedSpriteProperty.Brightness, 50)
    enemy.set(LedSpriteProperty.Brightness, 0)
    basic.pause(100)
    enemy.set(LedSpriteProperty.X, 0)
    enemy.set(LedSpriteProperty.Y, 0)
    enemy.set(LedSpriteProperty.Blink, 0)
    enemy.set(LedSpriteProperty.Brightness, 500)
}
input.onButtonPressed(Button.AB, function () {
    if (ammo >= 1 && bullet_shot == 0) {
        music.play(music.tonePlayable(185, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
        bullet = game.createSprite(player_charakter.get(LedSpriteProperty.X), 4)
        bullet.set(LedSpriteProperty.Brightness, 150)
        bullet_shot = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (moving_cooldown == 0) {
        moving_cooldown += 1
        if (0 > 0) {
            player_charakter.set(LedSpriteProperty.Blink, 5)
            basic.pause(500)
            player_charakter.set(LedSpriteProperty.Blink, 0)
        } else {
            player_charakter.move(1)
        }
        basic.pause(200)
        moving_cooldown = 0
    }
})
function fastenemydeath_anim () {
    music.play(music.tonePlayable(466, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    bullet.set(LedSpriteProperty.Brightness, 0)
    fast_enemy.set(LedSpriteProperty.Blink, 25)
    basic.pause(200)
    fast_enemy.set(LedSpriteProperty.Brightness, 150)
    basic.pause(200)
    fast_enemy.set(LedSpriteProperty.Brightness, 125)
    basic.pause(200)
    fast_enemy.set(LedSpriteProperty.Brightness, 100)
    fast_enemy.set(LedSpriteProperty.Blink, 50)
    basic.pause(200)
    fast_enemy.set(LedSpriteProperty.Brightness, 50)
    fast_enemy.set(LedSpriteProperty.Brightness, 0)
    basic.pause(100)
    fast_enemy.set(LedSpriteProperty.X, 0)
    fast_enemy.set(LedSpriteProperty.Y, 0)
    fast_enemy.set(LedSpriteProperty.Blink, 0)
    fast_enemy.set(LedSpriteProperty.Brightness, 500)
}
function heavy_enemy_death_anim () {
    music.play(music.tonePlayable(311, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    bullet.set(LedSpriteProperty.Brightness, 0)
    heavy_enemy.set(LedSpriteProperty.Blink, 5)
    basic.pause(200)
    heavy_enemy.set(LedSpriteProperty.Brightness, 150)
    basic.pause(200)
    heavy_enemy.set(LedSpriteProperty.Brightness, 125)
    basic.pause(200)
    heavy_enemy.set(LedSpriteProperty.Brightness, 100)
    heavy_enemy.set(LedSpriteProperty.Blink, 15)
    basic.pause(200)
    heavy_enemy.set(LedSpriteProperty.Brightness, 50)
    heavy_enemy.set(LedSpriteProperty.Brightness, 0)
    basic.pause(100)
    heavy_enemy.set(LedSpriteProperty.X, 0)
    heavy_enemy.set(LedSpriteProperty.Y, 0)
    heavy_enemy.set(LedSpriteProperty.Blink, 0)
    heavy_enemy.set(LedSpriteProperty.Brightness, 500)
}
let playtime = 0
let moving_cooldown = 0
let bullet_shot = 0
let bullet: game.LedSprite = null
let fast_enemy_spawned = 0
let heavy_enemy_spawned = 0
let fast_enemy: game.LedSprite = null
let heavy_enemy: game.LedSprite = null
let enemy: game.LedSprite = null
let enemy_spawned = 0
let player_charakter: game.LedSprite = null
let ammo = 0
let heavy_enemy_times_hit = 0
let rand_number = randint(1, 3)
ammo = 3
let fast_enemy_speed = 4
let heavy_enemy_speed = 10
let enemy_speed = 7
let bullet_speed = 2
let score = 0
player_charakter = game.createSprite(2, 5)
if (randint(1, 3) == 0) {
    enemy_spawned = 1
    enemy = game.createSprite(0, 0)
    heavy_enemy = game.createSprite(0, 0)
    heavy_enemy.delete()
    fast_enemy = game.createSprite(0, 0)
    fast_enemy.delete()
}
if (rand_number == 1) {
    heavy_enemy_spawned = 1
    heavy_enemy = game.createSprite(0, 0)
    fast_enemy = game.createSprite(0, 0)
    fast_enemy.delete()
    enemy = game.createSprite(0, 0)
    enemy.delete()
}
if (rand_number == 3) {
    fast_enemy_spawned = 1
    fast_enemy = game.createSprite(0, 0)
    enemy = game.createSprite(0, 0)
    enemy.delete()
    heavy_enemy = game.createSprite(0, 0)
    heavy_enemy.delete()
}
if (rand_number == 2) {
    enemy_spawned = 1
    heavy_enemy = game.createSprite(0, 0)
    heavy_enemy.delete()
    fast_enemy = game.createSprite(0, 0)
    fast_enemy.delete()
    enemy = game.createSprite(0, 0)
}
enemy.set(LedSpriteProperty.Brightness, 180)
heavy_enemy.set(LedSpriteProperty.Brightness, 300)
fast_enemy.set(LedSpriteProperty.Brightness, 100)
bullet = game.createSprite(player_charakter.get(LedSpriteProperty.X), 4)
loops.everyInterval(500, function () {
    if (ammo == 0) {
        basic.pause(1000)
        ammo += 1
    }
    game.setScore(input.runningTime())
})
loops.everyInterval(100, function () {
    music.play(music.stringPlayable("C5 E A D E A F C ", 120), music.PlaybackMode.InBackground)
    if (playtime % bullet_speed == 0) {
        if (bullet_shot == 1) {
            bullet.change(LedSpriteProperty.Y, -1)
        }
        if (bullet.isTouchingEdge()) {
            basic.pause(10)
            bullet_end()
        }
    }
    if (enemy_spawned == 1) {
        if (playtime % enemy_speed == 0) {
            movement_enemy()
        }
    }
    if (heavy_enemy_spawned == 1) {
        if (playtime % heavy_enemy_speed == 0) {
            movement_heavy_enemy()
        }
    }
    if (fast_enemy_spawned == 1) {
        if (playtime % fast_enemy_speed == 0) {
            movement_fastenemy()
        }
    }
    if (enemy_spawned == 1) {
        if (enemy.isTouching(bullet)) {
            enemy_death_anim()
        }
    }
    if (heavy_enemy_spawned == 1) {
        if (heavy_enemy.isTouching(bullet)) {
            if (heavy_enemy_times_hit == 3) {
                heavy_enemy_times_hit = 0
                bullet.set(LedSpriteProperty.Brightness, 0)
                bullet = game.createSprite(2, 2)
                heavy_enemy_death_anim()
            } else {
                heavy_enemy_times_hit += 1
            }
        }
    }
    if (fast_enemy_spawned == 1) {
        if (fast_enemy.isTouching(bullet)) {
            fastenemydeath_anim()
        }
    }
    if (fast_enemy.isTouching(player_charakter) || (enemy.isTouching(player_charakter) || heavy_enemy.isTouching(player_charakter))) {
        player_death_anim()
    }
    playtime += 1
})
