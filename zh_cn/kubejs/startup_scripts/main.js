// priority: 0

StartupEvents.registry('mob_effect', event => {
    event.create('tired').modifyAttribute('minecraft:generic.movement_speed',
    '8b50fa8d-9f78-47a7-93c6-9bbeb36587f9',
    -2, 'addition').color(Color.GRAY).displayName('Tired')
})