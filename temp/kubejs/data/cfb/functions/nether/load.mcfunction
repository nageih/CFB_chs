scoreboard objectives add tickets dummy {"text":"Tickets","underlined":true,"color":"green"}
scoreboard objectives setdisplay sidebar.team.white tickets
scoreboard objectives add loaded_tickets dummy
team add nether {"text":"Underworld"}
team modify nether color white
scoreboard objectives add nether_deaths deathCount