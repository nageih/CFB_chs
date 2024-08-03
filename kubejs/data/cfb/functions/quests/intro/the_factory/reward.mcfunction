tellraw @s {"text": "You bought a factory!"}
tp @a 0 -58 0
setworldspawn 0 -58 0
spawnpoint @a 0 -58 0
gamestage add @s tutorial_1 true
gamerule keepInventory true
scoreboard objectives add factory_data dummy
execute unless score ceiling_height factory_data matches -1..10 run scoreboard players set ceiling_height factory_data 0
scoreboard players set repair_factory factory_data 1