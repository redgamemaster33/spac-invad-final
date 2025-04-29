def on_button_pressed_a():
    global moving_cooldown
    if moving_cooldown == 0:
        moving_cooldown += 1
        if effect_stunned > 0:
            player_charakter.set(LedSpriteProperty.BLINK, 3)
            basic.pause(500)
            player_charakter.set(LedSpriteProperty.BLINK, 0)
        else:
            player_charakter.move(-1)
        basic.pause(200)
        moving_cooldown = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global bullet, ammo
    if ammo >= 1:
        bullet = game.create_sprite(player_charakter.get(LedSpriteProperty.X), 4)
        bullet.set(LedSpriteProperty.BRIGHTNESS, 150)
        for index in range(4):
            bullet.change(LedSpriteProperty.Y, -1)
            basic.pause(200)
            if bullet.is_touching_edge():
                bullet.set(LedSpriteProperty.BLINK, 10)
                basic.pause(200)
                bullet.delete()
                ammo += -1
                bullet.set(LedSpriteProperty.BLINK, 0)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global moving_cooldown
    if moving_cooldown == 0:
        moving_cooldown += 1
        if effect_stunned > 0:
            player_charakter.set(LedSpriteProperty.BLINK, 3)
            basic.pause(500)
            player_charakter.set(LedSpriteProperty.BLINK, 0)
        else:
            player_charakter.move(1)
        basic.pause(200)
        moving_cooldown = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

enemy_count = 0
playtime = 0
enemy_base: game.LedSprite = None
bullet: game.LedSprite = None
moving_cooldown = 0
ammo = 0
effect_stunned = 0
player_charakter: game.LedSprite = None
score = 0
player_charakter = game.create_sprite(2, 5)
effect_stunned = 0
ammo = 3

def on_forever():
    if enemy_base.is_touching(player_charakter):
        player_charakter.set(LedSpriteProperty.BLINK, 10)
        basic.pause(100)
        player_charakter.set(LedSpriteProperty.BRIGHTNESS, 175)
        basic.pause(100)
        player_charakter.set(LedSpriteProperty.BRIGHTNESS, 150)
        basic.pause(100)
        player_charakter.set(LedSpriteProperty.BRIGHTNESS, 100)
        basic.pause(100)
        player_charakter.set(LedSpriteProperty.BLINK, 25)
        player_charakter.set(LedSpriteProperty.BRIGHTNESS, 50)
        basic.pause(100)
        game.game_over()
basic.forever(on_forever)

def on_forever2():
    global ammo
    if ammo == 0:
        basic.pause(1500)
        ammo += 1
basic.forever(on_forever2)

def on_forever3():
    global playtime
    playtime += 1
    basic.pause(1000)
basic.forever(on_forever3)

def on_forever4():
    global enemy_base, enemy_count
    if enemy_count == 0:
        enemy_base = game.create_sprite(0, 0)
        enemy_count += 1
        for index2 in range(5):
            if enemy_base.get(LedSpriteProperty.X) == 0:
                for index3 in range(5):
                    basic.pause(500)
                    enemy_base.change(LedSpriteProperty.X, 1)
                enemy_base.change(LedSpriteProperty.Y, 1)
            else:
                if enemy_base.get(LedSpriteProperty.X) == 4:
                    for index4 in range(5):
                        basic.pause(500)
                        enemy_base.change(LedSpriteProperty.X, -1)
                    enemy_base.change(LedSpriteProperty.Y, 1)
basic.forever(on_forever4)
