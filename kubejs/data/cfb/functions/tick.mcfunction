execute if score repair_factory factory_data matches 1 run function cfb:maintain_factory_building
execute unless score disable_boundaries factory_data matches 1 run function cfb:out_of_bounds
execute as @a[gamemode=creative,advancements={cfb:cheat=false}] run function cfb:no_creative
execute as @a[advancements={cfb:cheat=true}] run title @s actionbar {"text":"Cheats Enabled!"}
execute as @a[gamemode=!creative] run ftbquests editing_mode false @s