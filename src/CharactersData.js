const data = [
    {
      "name": "Acheron",
      "icon": "icons/Character_Acheron_Icon.webp",
      "base_speed" : 101,
      "max_energy": 9,
      "basic": "",
      "skill": "achs stack SELF 1 0 TURN",
      "ult": "achu stack SELF -9 0 TURN",
      "TSTART": "",
      "TEND": "",
      "max_stacks": 12,
      "stack_type": "none none none none",
    },
    {
      "name": "Argenti",
      "icon": "icons/Character_Argenti_Icon.webp",
      "base_speed": 103
    },
    {
      "name": "Arlan",
      "icon": "icons/Character_Arlan_Icon.webp",
      "base_speed": 102
    },
    {
      "name": "Asta",
      "icon": "icons/Character_Asta_Icon.webp",
      "base_speed": 106,
      "stack_type": "atk none none none, ER 15 1 STACKS 2",
    },
    {
      "name": "Aventurine",
      "icon": "icons/Character_Aventurine_Icon.webp",
      "base_speed": 106
    },
    {
      "name": "Bailu",
      "icon": "icons/Character_Bailu_Icon.webp",
      "base_speed": 98
    },
    {
      "name": "BlackSwan",
      "icon": "icons/Character_Black_Swan_Icon.webp",
      "base_speed": 102
    },
    {
      "name": "Blade",
      "icon": "icons/Character_Blade_Icon.webp",
      "base_speed": 97
    },
    {
      "name": "Boothill",
      "icon": "icons/Character_Boothill_Icon.webp",
      "base_speed": 107
    },
    {
      "name": "Bronya",
      "icon": "icons/Character_Bronya_Icon.webp",
      "base_speed": 99,
      "max_energy": 120,
      "basic": "aa SELF 30 0 TURN, energy SELF 20 0 TURN",
      "skill": "aa TARGET 100 0 TURN, spd target 30 1 TEND, energy SELF 30 0 TURN",
      "ult": "energy SELF -120 0 TURN, energy SELF 5 0 TURN",
      "max_stacks": 0,
      "stack_type": "",
    },
    {
      "name": "Clara",
      "icon": "icons/Character_Clara_Icon.webp",
      "base_speed": 90
    },
    {
      "name": "DanHeng",
      "icon": "icons/Character_Dan_Heng_Icon.webp",
      "base_speed": 110
    },
    {
      "name": "DanHeng•ImbibitorLunae",
      "icon": "icons/Character_Dan_Heng_•_Imbibitor_Lunae_Icon.webp",
      "base_speed": 102
    },
    {
      "name": "Dr.Ratio",
      "icon": "icons/Character_Dr._Ratio_Icon.webp",
      "base_speed": 103
    },
    {
      "name": "Firefly",
      "icon": "icons/Character_Sam_Icon.webp",
      "base_speed": 92
    },
    {
      "name": "FuXuan",
      "icon": "icons/Character_Fu_Xuan_Icon.webp",
      "base_speed": 100
    },
    {
      "name": "Gallagher",
      "icon": "icons/Character_Gallagher_Icon.webp",
      "base_speed": 98
    },
    {
      "name": "Gepard",
      "icon": "icons/Character_Gepard_Icon.webp",
      "base_speed": 92
    },
    {
      "name": "Guinaifen",
      "icon": "icons/Character_Guinaifen_Icon.webp",
      "base_speed": 106
    },
    {
      "name": "Hanya",
      "icon": "icons/Character_Hanya_Icon.webp",
      "base_speed": 110
    },
    {
      "name": "Herta",
      "icon": "icons/Character_Herta_Icon.webp",
      "base_speed": 100
    },
    {
      "name": "Himeko",
      "icon": "icons/Character_Himeko_Icon.webp",
      "base_speed": 96
    },
    {
      "name": "Hook",
      "icon": "icons/Character_Hook_Icon.webp",
      "base_speed": 94
    },
    {
      "name": "Huohuo",
      "icon": "icons/Character_Huohuo_Icon.webp",
      "base_speed": 98
    },//========================
    {
      "name": "Jade",
      "icon": "icons/Character_Jade_Icon.webp",
      "base_speed": 103
    },
    {
      "name": "JingYuan",
      "icon": "icons/Character_Jing_Yuan_Icon.webp",
      "base_speed": 99
    },
    {
      "name": "Jingliu",
      "icon": "icons/Character_Jingliu_Icon.webp",
      "base_speed": 96
    },
    {
      "name": "Kafka",
      "icon": "icons/Character_Kafka_Icon.webp",
      "base_speed": 100
    },
    {
      "name": "Luka",
      "icon": "icons/Character_Luka_Icon.webp",
      "base_speed": 103
    },
    {
      "name": "Luocha",
      "icon": "icons/Character_Luocha_Icon.webp",
      "base_speed": 101
    },
    {
      "name": "Lynx",
      "icon": "icons/Character_Lynx_Icon.webp",
      "base_speed": 100
    },
    {
      "name": "March7th",
      "icon": "icons/Character_March_7th_Icon.webp",
      "base_speed": 101
    },//
    {
      "name": "Misha",
      "icon": "icons/Character_Misha_Icon.webp",
      "base_speed": 96
    },
    {
      "name": "Natasha",
      "icon": "icons/Character_Natasha_Icon.webp",
      "base_speed": 98
    },
    {
      "name": "Pela",
      "icon": "icons/Character_Pela_Icon.webp",
      "base_speed": 105
    },
    {
      "name": "Qingque",
      "icon": "icons/Character_Qingque_Icon.webp",
      "base_speed": 98
    },
    {
      "name": "Robin",
      "icon": "icons/Character_Robin_Icon.webp",
      "base_speed": 102
    },
    {
      "name": "RuanMei",
      "icon": "icons/Character_Ruan_Mei_Icon.webp",
      "base_speed": 104
    },
    {
      "name": "Sampo",
      "icon": "icons/Character_Sampo_Icon.webp",
      "base_speed": 102
    },//
    {
      "name": "Seele",
      "icon": "icons/Character_Seele_Icon.webp",
      "base_speed": 115
    },
    {
      "name": "Serval",
      "icon": "icons/Character_Serval_Icon.webp",
      "base_speed": 104
    },
    {
      "name": "SilverWolf",
      "icon": "icons/Character_Silver_Wolf_Icon.webp",
      "base_speed": 107
    },
    {
      "name": "Sparkle",
      "icon": "icons/Character_Sparkle_Icon.webp",
      "base_speed": 101
    },
    {
      "name": "Sushang",
      "icon": "icons/Character_Sushang_Icon.webp",
      "base_speed": 107,
      "max_stacks": 2,
      "stack_type": "spd 20 2 BREAK"
    },
    {
      "name": "Tingyun",
      "icon": "icons/Character_Tingyun_Icon.webp",
      "base_speed": 112
    },
    {
      "name": "Topaz&Numby",
      "icon": "icons/Character_Topaz_and_Numby_Icon.webp",
      "base_speed": 110
    },
    {
      "name": "Trailblazer(Destruction)",
      "icon": "icons/Character_Trailblazer_Destruction_Icon.webp",
      "base_speed": 100
    },
    {
      "name": "Trailblazer(Harmony)",
      "icon": "icons/Character_Trailblazer_Harmony_Icon.webp",
      "base_speed": 105
    },
    {
      "name": "Trailblazer(Preservation)",
      "icon": "icons/Character_Trailblazer_Preservation_Icon.webp",
      "base_speed": 95
    },
    {
      "name": "Welt",
      "icon": "icons/Character_Welt_Icon.webp",
      "base_speed": 102
    },
    {
      "name": "Xueyi",
      "icon": "icons/Character_Xueyi_Icon.webp",
      "base_speed": 103
    },
    {
      "name": "Yanqing",
      "icon": "icons/Character_Yanqing_Icon.webp",
      "base_speed": 109
    },
    {
      "name": "Yukong",
      "icon": "icons/Character_Yukong_Icon.webp",
      "base_speed": 107
    }
]

export function GetData() {
    return data;
}