import * as character_exports from './Characters/index'

const data = [
    {
      "name": "Acheron",
      "icon": "icons/Character_Acheron_Icon.webp",
      "base_speed" : 101,
      "max_energy": 0,
      "class": character_exports.Acheron
    },
    {
      "name": "Argenti",
      "icon": "icons/Character_Argenti_Icon.webp",
      "base_speed": 103,
      "class": character_exports.Character
    },
    {
      "name": "Arlan",
      "icon": "icons/Character_Arlan_Icon.webp",
      "base_speed": 102,
      "class": character_exports.Character
    },
    {
      "name": "Asta",
      "icon": "icons/Character_Asta_Icon.webp",
      "base_speed": 106,
      "class": character_exports.Character,
      "stack_type": "atk none none none, ER 15 1 STACKS 2",
    },
    {
      "name": "Aventurine",
      "icon": "icons/Character_Aventurine_Icon.webp",
      "base_speed": 106,
      "class": character_exports.Character
    },
    {
      "name": "Bailu",
      "icon": "icons/Character_Bailu_Icon.webp",
      "base_speed": 98,
      "class": character_exports.Character
    },
    {
      "name": "BlackSwan",
      "icon": "icons/Character_Black_Swan_Icon.webp",
      "base_speed": 102,
      "class": character_exports.Character
    },
    {
      "name": "Blade",
      "icon": "icons/Character_Blade_Icon.webp",
      "base_speed": 97,
      "class": character_exports.Character
    },
    {
      "name": "Boothill",
      "icon": "icons/Character_Boothill_Icon.webp",
      "base_speed": 107,
      "class": character_exports.Character
    },
    {
      "name": "Bronya",
      "icon": "icons/Character_Bronya_Icon.webp",
      "base_speed": 99,
      "max_energy": 120,
      "class": character_exports.Bronya
    },
    {
      "name": "Clara",
      "icon": "icons/Character_Clara_Icon.webp",
      "base_speed": 90,
      "class": character_exports.Character
    },
    {
      "name": "DanHeng",
      "icon": "icons/Character_Dan_Heng_Icon.webp",
      "base_speed": 110,
      "class": character_exports.Character
    },
    {
      "name": "DanHeng•ImbibitorLunae",
      "icon": "icons/Character_Dan_Heng_•_Imbibitor_Lunae_Icon.webp",
      "base_speed": 102,
      "class": character_exports.Character
    },
    {
      "name": "Dr.Ratio",
      "icon": "icons/Character_Dr._Ratio_Icon.webp",
      "base_speed": 103,
      "class": character_exports.Character
    },
    {
      "name": "Firefly",
      "icon": "icons/Character_Sam_Icon.webp",
      "base_speed": 92,
      "class": character_exports.Character
    },
    {
      "name": "FuXuan",
      "icon": "icons/Character_Fu_Xuan_Icon.webp",
      "base_speed": 100,
      "class": character_exports.Character
    },
    {
      "name": "Gallagher",
      "icon": "icons/Character_Gallagher_Icon.webp",
      "base_speed": 98,
      "class": character_exports.Character
    },
    {
      "name": "Gepard",
      "icon": "icons/Character_Gepard_Icon.webp",
      "base_speed": 92,
      "class": character_exports.Character
    },
    {
      "name": "Guinaifen",
      "icon": "icons/Character_Guinaifen_Icon.webp",
      "base_speed": 106,
      "class": character_exports.Character
    },
    {
      "name": "Hanya",
      "icon": "icons/Character_Hanya_Icon.webp",
      "base_speed": 110,
      "class": character_exports.Character
    },
    {
      "name": "Herta",
      "icon": "icons/Character_Herta_Icon.webp",
      "base_speed": 100,
      "class": character_exports.Character
    },
    {
      "name": "Himeko",
      "icon": "icons/Character_Himeko_Icon.webp",
      "base_speed": 96,
      "class": character_exports.Character
    },
    {
      "name": "Hook",
      "icon": "icons/Character_Hook_Icon.webp",
      "base_speed": 94,
      "class": character_exports.Character
    },
    {
      "name": "Huohuo",
      "icon": "icons/Character_Huohuo_Icon.webp",
      "base_speed": 98,
      "class": character_exports.Character
    },//========================
    {
      "name": "Jade",
      "icon": "icons/Character_Jade_Icon.webp",
      "base_speed": 103,
      "class": character_exports.Character
    },
    {
      "name": "JingYuan",
      "icon": "icons/Character_Jing_Yuan_Icon.webp",
      "base_speed": 99,
      "class": character_exports.Character
    },
    {
      "name": "Jingliu",
      "icon": "icons/Character_Jingliu_Icon.webp",
      "base_speed": 96,
      "class": character_exports.Character
    },
    {
      "name": "Kafka",
      "icon": "icons/Character_Kafka_Icon.webp",
      "base_speed": 100,
      "class": character_exports.Character
    },
    {
      "name": "Luka",
      "icon": "icons/Character_Luka_Icon.webp",
      "base_speed": 103,
      "class": character_exports.Character
    },
    {
      "name": "Luocha",
      "icon": "icons/Character_Luocha_Icon.webp",
      "base_speed": 101,
      "class": character_exports.Character
    },
    {
      "name": "Lynx",
      "icon": "icons/Character_Lynx_Icon.webp",
      "base_speed": 100,
      "class": character_exports.Character
    },
    {
      "name": "March7th",
      "icon": "icons/Character_March_7th_Icon.webp",
      "base_speed": 101,
      "class": character_exports.Character
    },//
    {
      "name": "Misha",
      "icon": "icons/Character_Misha_Icon.webp",
      "base_speed": 96,
      "class": character_exports.Character
    },
    {
      "name": "Natasha",
      "icon": "icons/Character_Natasha_Icon.webp",
      "base_speed": 98,
      "class": character_exports.Character
    },
    {
      "name": "Pela",
      "icon": "icons/Character_Pela_Icon.webp",
      "base_speed": 105,
      "class": character_exports.Character
    },
    {
      "name": "Qingque",
      "icon": "icons/Character_Qingque_Icon.webp",
      "base_speed": 98,
      "class": character_exports.Character
    },
    {
      "name": "Robin",
      "icon": "icons/Character_Robin_Icon.webp",
      "base_speed": 102,
      "class": character_exports.Character
    },
    {
      "name": "RuanMei",
      "icon": "icons/Character_Ruan_Mei_Icon.webp",
      "base_speed": 104,
      "class": character_exports.Character
    },
    {
      "name": "Sampo",
      "icon": "icons/Character_Sampo_Icon.webp",
      "base_speed": 102,
      "class": character_exports.Character
    },//
    {
      "name": "Seele",
      "icon": "icons/Character_Seele_Icon.webp",
      "base_speed": 115,
      "class": character_exports.Character
    },
    {
      "name": "Serval",
      "icon": "icons/Character_Serval_Icon.webp",
      "base_speed": 104,
      "class": character_exports.Character
    },
    {
      "name": "SilverWolf",
      "icon": "icons/Character_Silver_Wolf_Icon.webp",
      "base_speed": 107,
      "class": character_exports.Character
    },
    {
      "name": "Sparkle",
      "icon": "icons/Character_Sparkle_Icon.webp",
      "base_speed": 101,
      "class": character_exports.Character
    },
    {
      "name": "Sushang",
      "icon": "icons/Character_Sushang_Icon.webp",
      "base_speed": 107,
      "class": character_exports.Character,
      "max_stacks": 2,
      "stack_type": "spd 20 2 BREAK"
    },
    {
      "name": "Tingyun",
      "icon": "icons/Character_Tingyun_Icon.webp",
      "base_speed": 112,
      "class": character_exports.Character
    },
    {
      "name": "Topaz&Numby",
      "icon": "icons/Character_Topaz_and_Numby_Icon.webp",
      "base_speed": 110,
      "class": character_exports.Character
    },
    {
      "name": "Trailblazer(Destruction)",
      "icon": "icons/Character_Trailblazer_Destruction_Icon.webp",
      "base_speed": 100,
      "class": character_exports.Character
    },
    {
      "name": "Trailblazer(Harmony)",
      "icon": "icons/Character_Trailblazer_Harmony_Icon.webp",
      "base_speed": 105,
      "class": character_exports.Character
    },
    {
      "name": "Trailblazer(Preservation)",
      "icon": "icons/Character_Trailblazer_Preservation_Icon.webp",
      "base_speed": 95,
      "class": character_exports.Character
    },
    {
      "name": "Welt",
      "icon": "icons/Character_Welt_Icon.webp",
      "base_speed": 102,
      "class": character_exports.Character
    },
    {
      "name": "Xueyi",
      "icon": "icons/Character_Xueyi_Icon.webp",
      "base_speed": 103,
      "class": character_exports.Character
    },
    {
      "name": "Yanqing",
      "icon": "icons/Character_Yanqing_Icon.webp",
      "base_speed": 109,
      "class": character_exports.Character
    },
    {
      "name": "Yukong",
      "icon": "icons/Character_Yukong_Icon.webp",
      "base_speed": 107,
      "class": character_exports.Character
    }
]

export function GetData() {
  let counted_data = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    element.id = i;
    counted_data.push(element);
  }  
    return counted_data;
}