//Blocks stuff for cfb
StartupEvents.registry('block', Event => {
    Event.create('ice_iv_block')
    .displayName('Ice IV Block')
    .soundType('glass')
    .hardness(1.5)
    .resistance(1.5)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:stone')
    .requiresTool(true)

    Event.create('ice_bone_block')
    .displayName('Ice Bone Block')
    .soundType('glass')
    .hardness(1.5)
    .resistance(1.5)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:stone')
    .requiresTool(true)
})    

StartupEvents.registry('item', Event => {
    Event.create('andesite_pipe_casing')
    .displayName('Andesite Pipe Casing')

    Event.create('andesite_capacitor_casing')
    .displayName('Andesite Capacitor Casing')

    Event.create('half_copper_ingot')
    .displayName('Half Copper Ingot')

    Event.create('rose_gold_ingot')
    .displayName('Rose Gold Ingot')
})   