
const champ_name_by_id = {
    147: "Seraphine",
    360: "Samira",
    777: "Yone",
    876: "Lillia",
    1: "Annie",
    2: "Olaf",
    3: "Galio",
    4: "Twisted Fate",
    5: "Xin Zhao",
    6: "Urgot",
    7: "LeBlanc",
    8: "Vladimir",
    9: "Fiddlesticks",
    10: "Kayle",
    11: "Master Yi",
    12: "Alistar",
    13: "Ryze",
    14: "Sion",
    15: "Sivir",
    16: "Soraka",
    17: "Teemo",
    18: "Tristana",
    19: "Warwick",
    20: "Nunu",
    21: "Miss Fortune",
    22: "Ashe",
    23: "Tryndamere",
    24: "Jax",
    25: "Morgana",
    26: "Zilean",
    27: "Singed",
    28: "Evelynn",
    29: "Twitch",
    30: "Karthus",
    31: "Cho'Gath",
    32: "Amumu",
    33: "Rammus",
    34: "Anivia",
    35: "Shaco",
    36: "Dr. Mundo",
    37: "Sona",
    38: "Kassadin",
    39: "Irelia",
    40: "Janna",
    41: "Gangplank",
    42: "Corki",
    43: "Karma",
    44: "Taric",
    45: "Veigar",
    48: "Trundle",
    50: "Swain",
    51: "Caitlyn",
    53: "Blitzcrank",
    54: "Malphite",
    55: "Katarina",
    56: "Nocturne",
    57: "Maokai",
    58: "Renekton",
    59: "Jarvan IV",
    60: "Elise",
    61: "Orianna",
    62: "Wukong",
    63: "Brand",
    64: "Lee Sin",
    67: "Vayne",
    68: "Rumble",
    69: "Cassiopeia",
    72: "Skarner",
    74: "Heimerdinger",
    75: "Nasus",
    76: "Nidalee",
    77: "Udyr",
    78: "Poppy",
    79: "Gragas",
    80: "Pantheon",
    81: "Ezreal",
    82: "Mordekaiser",
    83: "Yorick",
    84: "Akali",
    85: "Kennen",
    86: "Garen",
    89: "Leona",
    90: "Malzahar",
    91: "Talon",
    92: "Riven",
    96: "Kog'Maw",
    98: "Shen",
    99: "Lux",
    101: "Xerath",
    102: "Shyvana",
    103: "Ahri",
    104: "Graves",
    105: "Fizz",
    106: "Volibear",
    107: "Rengar",
    110: "Varus",
    111: "Nautilus",
    112: "Viktor",
    113: "Sejuani",
    114: "Fiora",
    115: "Ziggs",
    117: "Lulu",
    119: "Draven",
    120: "Hecarim",
    121: "Kha'Zix",
    122: "Darius",
    126: "Jayce",
    127: "Lissandra",
    131: "Diana",
    133: "Quinn",
    134: "Syndra",
    136: "Aurelion Sol",
    141: "Kayn",
    142: "Zoe",
    143: "Zyra",
    145: "Kaisa",
    150: "Gnar",
    154: "Zac",
    157: "Yasuo",
    161: "Vel'Koz",
    163: "Taliyah",
    164: "Camille", 
    201: "Braum",
    202: "Jhin",
    203: "Kindred",
    222: "Jinx",
    223: "Tahm Kench",
    236: "Lucian",
    238: "Zed",
    240: "Kled",
    245: "Ekko",
    246: "Qiyana",
    254: "Vi",
    266: "Aatrox",
    267: "Nami",
    268: "Azir",
    350: "Yuumi",
    412: "Thresh",
    420: "Illaoi",
    421: "Rek'Sai",
    427: "Ivern",
    429: "Kalista",
    432: "Bard",
    497: "Rakan",
    498: "Xayah",
    516: "Ornn",
    517: "Sylas",
    517: "Sylas",
    518: "Neeko",
    555: "Pyke",
    523: "Aphelios",
    235: "Senna",
    875: "Sett",
    "-1": "Não baniu"
}

const champ_id_by_name = {
    "Samira": 360,
    "Seraphine": 147,
    "Yone": 777,
    "Lillia": 876,
    "Annie": 1,
    "Olaf": 2,
    "Galio": 3,
    "Twisted Fate": 4,
    "Xin Zhao": 5,
    "Urgot": 6,
    "LeBlanc": 7,
    "Vladimir": 8,
    "Fiddlesticks": 9,
    "Kayle": 10,
    "Master Yi": 11,
    "Alistar": 12,
    "Ryze": 13,
    "Sion": 14,
    "Sivir": 15,
    "Soraka": 16,
    "Teemo": 17,
    "Tristana": 18,
    "Warwick": 19,
    "Nunu": 20,
    "Miss Fortune": 21,
    "Ashe": 22,
    "Tryndamere": 23,
    "Jax": 24,
    "Morgana": 25,
    "Zilean": 26,
    "Singed": 27,
    "Evelynn": 28,
    "Twitch": 29,
    "Karthus": 30,
    "Cho'Gath": 31,
    "Amumu": 32,
    "Rammus": 33,
    "Anivia": 34,
    "Shaco": 35,
    "Dr. Mundo": 36,
    "Sona": 37,
    "Kassadin": 38,
    "Irelia": 39,
    "Janna": 40,
    "Gangplank": 41,
    "Corki": 42,
    "Karma": 43,
    "Taric": 44,
    "Veigar": 45,
    "Trundle": 48,
    "Swain": 50,
    "Caitlyn": 51,
    "Blitzcrank": 53,
    "Malphite": 54,
    "Katarina": 55,
    "Nocturne": 56,
    "Maokai": 57,
    "Renekton": 58,
    "Jarvan IV": 59,
    "Elise": 60,
    "Orianna": 61,
    "Wukong": 62,
    "Brand": 63,
    "Lee Sin": 64,
    "Vayne": 67,
    "Rumble": 68,
    "Cassiopeia": 69,
    "Skarner": 72,
    "Heimerdinger": 74,
    "Nasus": 75,
    "Nidalee": 76,
    "Udyr": 77,
    "Poppy": 78,
    "Gragas": 79,
    "Pantheon": 80,
    "Ezreal": 81,
    "Mordekaiser": 82,
    "Yorick": 83,
    "Akali": 84,
    "Kennen": 85,
    "Garen": 86,
    "Leona": 89,
    "Malzahar": 90,
    "Talon": 91,
    "Riven": 92,
    "Kog'Maw": 96,
    "Shen": 98,
    "Lux": 99,
    "Xerath": 101,
    "Shyvana": 102,
    "Ahri": 103,
    "Graves": 104,
    "Fizz": 105,
    "Volibear": 106,
    "Rengar": 107,
    "Varus": 110,
    "Nautilus": 111,
    "Viktor": 112,
    "Sejuani": 113,
    "Fiora": 114,
    "Ziggs": 115,
    "Lulu": 117,
    "Draven": 119,
    "Hecarim": 120,
    "Kha'Zix": 121,
    "Darius": 122,
    "Jayce": 126,
    "Lissandra": 127,
    "Diana": 131,
    "Quinn": 133,
    "Syndra": 134,
    "Aurelion Sol": 136,
    "Kayn": 141,
    "Zoe": 142,
    "Zyra": 143,
    "Kaisa": 145,
    "Gnar": 150,
    "Zac": 154,
    "Yasuo": 157,
    "Vel'Koz": 161,
    "Taliyah": 163,
    "Camille": 164,
    "Braum": 201,
    "Jhin": 202,
    "Kindred": 203,
    "Jinx": 222,
    "Tahm Kench": 223,
    "Lucian": 236,
    "Zed": 238,
    "Kled": 240,
    "Ekko": 245,
    "Qiyana": 246,
    "Vi": 254,
    "Aatrox": 266,
    "Nami": 267,
    "Azir": 268,
    "Yuumi": 350,
    "Thresh": 412,
    "Illaoi": 420,
    "Rek'Sai": 421,
    "Ivern": 427,
    "Kalista": 429,
    "Bard": 432,
    "Rakan": 497,
    "Xayah": 498,
    "Ornn": 516,
    "Sylas": 517,
    "Sylas": 517,
    "Neeko": 518,
    "Pyke": 555,
    "Aphelios": 523,
    "Senna": 235,
    "Sett": 875,
}

const emoji_by_champion_id = {
    360: "773731908500455425",
    147: "773731930486603786",
    777: "752727323660255233",
    876: "752727323735752705",
    "-1": "631208516719214617",
    1: "631206552661000203",
    2: "631207540956332061",
    3: "631211788133728279",
    4: "631303849566797835",
    5: "631312189042720768",
    6: "631330382783971369",
    7: "631312187671052298",
    8: "631303850967695382",
    9: "631309772783878145",
    10: "631303849537175592",
    11: "631328969584541716",
    12: "631209264785915904",
    13: "631206269323313155",
    14: "631206552711462953",
    15: "631306885470879774",
    16: "631312189386653706",
    17: "631309766764920832",
    18: "631306887500922881",
    19: "631306885441781790",
    20: "631303848908029966",
    21: "631312188862103562",
    22: "631209265436295198",
    23: "631205940636680232",
    24: "631303849562341387",
    25: "631207540864188436",
    26: "631312189428334602",
    27: "631207541061451823",
    28: "631207540855799827",
    29: "631312189336191016",
    30: "631209264924327937",
    31: "631309772989399060",
    32: "631312187746418718",
    33: "631309773538852864",
    34: "631207540931166208",
    35: "631309773480001557",
    36: "631303850220978206",
    37: "631209262835564620",
    38: "631326380776357908",
    39: "631303850942398467",
    40: "631309772767100929",
    41: "631319721962110995",
    42: "631211787978670094",
    43: "631206902650634240",
    44: "631312188950446120",
    45: "631211788200837152",
    48: "631312190946803765",
    50: "631309772703924224",
    51: "631211788096241705",
    53: "631312189046915074",
    54: "631306887643791360",
    55: "631209263347269656",
    56: "631312188887269396",
    57: "631207540914520074",
    58: "631325019397685248",
    59: "631313800888451093",
    60: "631303849482911744",
    61: "631309772645466142",
    62: "631312189340254208",
    63: "631303850904780821",
    64: "631303849143042052",
    67: "631209262948810783",
    68: "631209264916201515",
    69: "631205940410187817",
    72: "631306890504044554",
    74: "631209264916070416",
    75: "631309768656420864",
    76: "631211788092047388",
    77: "631211788498632714",
    78: "631206269386096640",
    79: "631205941093728257",
    80: "631211788192710688",
    81: "631313803388256266",
    82: "631209263360114700",
    83: "631312189008904202",
    84: "631306883625385994",
    85: "631211787840126977",
    86: "631207540843216916",
    89: "631211788586975232",
    90: "631211788234522624",
    91: "631309772817432576",
    92: "631211788259557389",
    96: "631209265247551521",
    98: "631312187998076941",
    99: "631207540960657408",
    101: "631309765221548073",
    102: "631303851173085194",
    103: "631207541363179541",
    104: "631211788402425856",
    105: "631209262605008926",
    106: "730847995846852638",
    107: "631306890248454154",
    110: "631209264102244385",
    111: "631206901891465236",
    112: "631207541501722644",
    113: "631303851055775766",
    114: "631325019427045386",
    115: "631309772775489546",
    117: "631209262827307009",
    119: "631327738808107049",
    120: "631306884086890507",
    121: "631211786015735840",
    122: "631209262399619074",
    126: "631211786430840867",
    127: "631207540881096704",
    131: "631303849528786984",
    133: "631306879120703489",
    134: "631211788381323264",
    136: "631206269507731495",
    141: "631205289613590559",
    142: "631204794316619796",
    143: "631313800800501810",
    145: "631205291253301249",
    150: "631211787907366934",
    154: "631306879242600458",
    157: "631329144600264714",
    161: "631312189298311168",
    163: "631306886028853278",
    164: "631204793670434847", 
    201: "631312189189390346",
    202: "631206552300158982",
    203: "631319722457169940",
    222: "631312188547661847",
    223: "631303849562603530",
    235: "663140424449523752",
    236: "631306885458427924",
    238: "631209262848147466",
    240: "631206902130278410",
    245: "631322664077754369",
    246: "631202429563830272",
    254: "631264351998967855",
    266: "631205656430379028",
    267: "631313800720547860",
    268: "631211788234391572",
    350: "631313803723669522",
    412: "631205655499505700",
    420: "631303849562603520",
    421: "631306879267766292",
    427: "631303849570861065",
    429: "631303851063902221",
    432: "631211788100436020",
    497: "631204793813303325",
    498: "631203770901987349",
    516: "631205656199692289",
    517: "631326380780683314",
    518: "631313803912544256",
    523: "663143768995921972",
    555: "631205289894608897",
    235: "663140424449523752",
    875: '691439559908655245',
    523: "663143768995921972"
}

const spells_image = {
    1: "631195262194417694",
    7: "631195264371130391",
    3: "631195262085234721",
    4: "631195263855362081",
    6: "631195264400490507",
    11: "631195264501284889",
    12: "631195264832634880",
    13: "631195262370709525",
    14: "631195264815988747",
    21: "631195261787439106",
    32: "631195261968056340",
}

const elo_emoji = {
    "IRON": "732076707774726154",
    "BRONZE": "700875020427329656",
    "SILVER": "700875508405108826",
    "GOLD": "700875020188254269",
    "PLATINUM": "700875020330860656",
    "DIAMOND": "700875020414484580",
    "MASTER": "700875020439781436",
    "GRANDMASTER": "700875020443975731",
    "CHALLENGER": "700875020494176307",
    "Unranked": "729018162540052581"
}

const masteryImagesURL = {
    1: "729418938605109268",
    2: "700878785574338560",
    3: "700878785527939182",
    4: "729418939154825286",
    5: "729418939104231555",
    6: "729418939150630944",
    7: "729418939205025824"
}

const runesEmoji = {
    5007: "731375080264695814",
    8100: "730244168101920790",
    8300: "730245671931740211",
    8000: "730244167971635312",
    8400: "730244168039006220",
    8200: "730244168139407420",
    8112: "731363891233423371",
    8124: "731363891732414495",
    8128: "731363890541101146",
    9923: "731363892017758218",
    8126: "731363878973341706",
    8139: "731363879661207603",
    8143: "731363878918684724",
    8136: "731363878939656193",
    8120: "731363879031930891",
    8138: "731363879342440518",
    8135: "731363878566363156",
    8134: "731363878981730304",
    8105: "731363879287783454",
    8106: "731363880856453120",
    8351: "731366628301865020",
    8360: "731366628880678912",
    8358: "731366627286712370",
    8306: "731366620936667176",
    8304: "731366620685008937",
    8313: "731366621255565332",
    8321: "731366621343383662",
    8316: "731366621008101387",
    8345: "731366620945055785",
    8347: "731366620865232936",
    8410: "731367884445450251",
    8352: "731366622341758996",
    8005: "731368407760633876",
    8008: "731368406409805854",
    8021: "731368408020680715",
    8010: "731368406028386346",
    9101: "731368400638705745",
    9111: "731368398553874513",
    8009: "731368400411951125",
    9104: "731368400491905084",
    9105: "731368400219144205",
    9103: "731368400525197393",
    8014: "731368400302899203",
    8017: "731368400567402527",
    8299: "731369777653874720",
    8437: "731370140121169941",
    8439: "731370140699983923",
    8465: "731370140331016314",
    8446: "731370134396207188",
    8463: "731370134345875467",
    8401: "731370134694002754",
    8429: "731370134333161554",
    8444: "731370134157131827",
    8473: "731370136770052136",
    8451: "731370134282829905",
    8453: "731370134291349565",
    8242: "731371694010400770",
    8214: "731372401287364659",
    8229: "731372395692163202",
    8230: "731372401367187536",
    8224: "731372397474873425",
    8226: "731372397395050500",
    8275: "731372394060578826",
    8210: "731372398019870750",
    8234: "731372397663617094",
    8233: "731372394110779462",
    8237: "731372397789184070",
    8232: "731372397994705026",
    8236: "731372397311164427",
    5003: "731375080252112936",
    5002: "731375080390656019",
    5001: "731375080327872582",
    5005: "731375080247918673",
    5008: "731375080285667388"
}

const runesName = {
    5007: "CDR",
    8446: "Demolir",
    8100: "Eletrocutar",
    8124: "Predador",
    8128: "Colheita Sombria",
    9923: "Chuva da Lâminas",
    8126: "Golpe Desleal",
    8139: "Gosto de Sangue",
    8143: "Impacto Repentino",
    8136: "Sentinela Zumbi",
    8120: "Poro Fantasma",
    8138: "Globos Oculares",
    8135: "Caça Voraz",
    8105: "Caça Ardilosa",
    8106: "Caça Incansável",
    8300: "Inspiração",
    8351: "Aprimoramento Glacial",
    8360: "Livro de Feitiços Deslacrado",
    8358: "Onirruna",
    8306: "Flashtração Hextec",
    8304: "Calçados Mágicos",
    8313: "Sincronia Perfeita",
    8321: "Mercado do Futuro",
    8316: "Pulverizador de Tropas",
    8345: "Entrega de Biscoitos",
    8347: "Perspicácia Cósmica",
    8410: "Velocidade de Aproximação",
    8352: "Tempo de Poção Tônica",
    8000: "Precisão",
    8005: "Pressione o Ataque",
    8008: "Ritmo Fatal",
    8021: "Agilidade nos Pés",
    8010: "Conquistador",
    9101: "Cura Excessiva",
    9111: "Triunfo",
    8009: "Presença de Espírito",
    9104: "Lenda: Espontaneidade",
    9105: "Lenda: Tenacidade",
    9103: "Lenda: Linhagem",
    8014: "Golpe de Misericórdia",
    8017: "Dilacerar",
    8299: "Até a Morte",
    8400: "Determinação",
    8437: "Aperto dos Mortos-vivos",
    8439: "Pós-choque",
    8465: "Guardião",
    8463: "Fonte da Vida",
    8401: "Casco Duplicado",
    8429: "Condicionamento",
    8444: "Ventos Revigorantes",
    8473: "Platina Óssea",
    8451: "Crescimento Excessico",
    8453: "Revitalizar",
    8242: "Inabalável",
    8200: "Feitiçaria",
    8214: "Invocar Aery",
    8229: "Cometa Arcano",
    8230: "Ímpeto Gradual",
    8224: "Orbe Anulador",
    8226: "Faixa de Fluxo de Mana",
    8275: "Manto Nimbus",
    8210: "Transcedência",
    8234: "Celeridade",
    8233: "Foco Absoluto",
    8237: "Chamuscar",
    8232: "Caminhas Sob as Águas",
    8236: "Tempestade Crescente",
    5003: "Resistência Mágica",
    5002: "Armadura",
    5001: "Vida",
    5005: "Velocidade de Ataque",
    5008: "Força Adaptativa"
}

const itemsEmoji = {
    3027: "731691346615861249",
    3030: "731691346657673237",
    3033: "731691346670125056",
    3193: "731696294522781757",
    1001: "731685832460861441",
    1004: "731685836101517414",
    1006: "731685836281741433",
    1011: "731685836013174816",
    1018: "731685835921162270",
    1026: "731685838160920646",
    1027: "731685836537724988",
    1028: "731685836495650956",
    1029: "731685836587925544",
    1031: "731685836562759761",
    1033: '731685836432867328',
    1036: "731685835857985578",
    1037: "731685837770850305",
    1038: "731685837108150383",
    1039: "731685836684394528",
    1041: "731685837137510500",
    1042: "731685836965281823",
    1043: "731685836709691443",
    1052: "731685838223835207",
    1053: "731685838290812948",
    1054: "731685837951074317",
    1055: "731685838139686942",
    1056: "731685838148337704",
    1057: "731685837871251498",
    1058: "731685838169178124",
    1082: "731685837061881866",
    1083: "731685835208130590",
    1400: "731685836952698902",
    1401: "731685836877332571",
    1402: "731685837778976829",
    1412: "731685838114783334",
    1413: "731685838252933165",
    1414: "731685836554502285",
    1416: "731685836914950166",
    1419: "731685836613222481",
    2003: "731685836998836264",
    2006: "731685837044973608",
    2009: "731691149559070790",
    2010: "731691346984829009",
    2015: "731691345420484638",
    2031: "731691343172206652",
    2033: "731691345810555002",
    2047: "731691343176531988",
    2051: '731691345609097315',
    2052: '731691345386930257',
    2054: "731691344950722661",
    2055: "731691345042997380",
    2065: "731691345185341461",
    2138: "731691346586501191",
    2139: "731691345428611133",
    2140: "731691345378279486",
    2403: "731691345487331379",
    2419: "731691345462427691",
    2420: "731691345353375805",
    2421: "731691345042997381",
    2422: "731691345697177660",
    2423: "731691346317803640",
    2424: "731691345332273173",
    3001: "731691347073040435",
    3003: "731691345659559966",
    3004: "731691345617354872",
    3005: "731691346498158675",
    3006: "731691345609228290",
    3007: "731691345923538986",
    3008: "731691345881595946",
    3009: "731691345999298592",
    3010: "731691346460409966",
    3020: "731691346418728962",
    3035: "731691346628313191",
    3036: '731691346771050587',
    3040: "731691347198869576",
    3041: "731691346183585833",
    3042: "731691346632376381",
    3043: "731691346837897276",
    3044: "731691346359877763",
    3046: "731691346716393593",
    3047: "731691346623987804",
    3048: "731693857976221707",
    3050: "731693858357903450",
    3052: "731693858123153449",
    3053: "731693858404040764",
    3057: "731693840653746309",
    3065: "731693858328412191",
    3067: "731693839798108220",
    3068: "731693858051719320",
    3070: "731693839592718337",
    3071: "731693857942798387",
    3072: "731693858005581824",
    3073: "731693844323893298",
    3074: "731693858425143436",
    3075: "731693858945106053",
    3076: "731693858731196467",
    3077: "731693859049963593",
    3078: "731693843769983046",
    3082: "731693858689122325",
    3083: "731693860929011712",
    3084: "731693859079192652",
    3085: "731693846647406632",
    3086: "731693860962566184",
    3087: "731693865433694279",
    3089: "731693843803537488",
    3091: "731693854461263874",
    3094: "731693866318561291",
    3095: "731693865421111419",
    3100: "731693866411098164",
    3101: "731693855144935494",
    3105: "731693858005450866",
    3107: "731693866629070869",
    3108: "731693861247647845",
    3109: "731693866758963220",
    3110: "731693862011273217",
    3111: "731693867132256266",
    3112: "731693862552076340",
    3113: "731693862669516800",
    3114: "731693867111284827",
    3115: "731693864686977024",
    3116: "731693864758542337",
    3117: "731693865102475295",
    3123: "731693867077992499",
    3124: "731693865530163254",
    3128: "731693867199627376",
    3131: "731693867476320276",
    3133: "731693867258216520",
    3134: "731693867593760809",
    3135: "731693867807539230",
    3136: "731693867853807717",
    3137: "731696287648448552",
    3139: "731696287895912489",
    3140: "731696288046907392",
    3142: "731696287514361938",
    3143: "731696287992512552",
    3144: "731696287916884030",
    3145: "731696288235520030",
    3146: "731696288244170913",
    3147: "731696288441303121",
    3151: "731696288285851718",
    3152: "731696290722873434",
    3153: "731696290542649375",
    3155: "731696290718810183",
    3156: "731696290454437960",
    3157: "731696290634661919",
    3158: "731696291511533598",
    3161: "731696291486236723",
    3165: "731696291922444288",
    3170: "731696291549151313",
    3172: "731696291960061962",
    3174: "731696291415064647",
    3175: "731696291712729160",
    3179: "731696291419127920",
    3181: "731696291892953138",
    3184: "731696291649683559",
    3190: "731696291867787284",
    3191: "731696291414933505",
    3194: "731696295089274931",
    3194: "731696295089274931",
    3196: "731696295068303360",
    3197: "731696294837616644",
    3198: "731696294757924865",
    3200: "731696294875103323",
    3211: "731696294644416574",
    3222: "731696295323893800",
    3285: "731696295365967962",
    3330: "731696305285496892",
    3340: "731696295026098286",
    3348: "731696295257047072",
    3361: "731696295541997609",
    3362: "731696295344996452",
    3363: "731696295495991426",
    3364: "731696297450537061",
    3371: "731696297584885875",
    3373: "731696297374908497",
    3374: "731696297572302929",
    3379: "731696297475833917",
    3380: "731696297337290873",
    3382: "731696297496674419",
    3383: "731696297748332646",
    3384: "731697982210048031",
    3386: "731697982596055113",
    3387: "731697980528394281",
    3388: "731697980486451262",
    3389: "731697982461706250",
    3390: "731697980624863334",
    3400: "731697980503228507",
    3410: "731697980142387221",
    3416: "731697979865694300",
    3422: "731697979920089121",
    3455: "731697979890729001",
    3504: "731697982386471026",
    3508: "731697981371318343",
    3513: "731697981421518860",
    3514: "731697981476044853",
    3520: "731697981883154452",
    3599: "731697982042275950",
    3600: "731697981341827144",
    3671: "731697978347225170",
    3672: "731697977655165031",
    3673: "731697978619985981",
    3675: "731697978016006234",
    3680: "731697982411374672",
    3681: "731697981358735421",
    3682: "731697982130487481",
    3684: "731697981073522758",
    3683: "731697981916446791",
    3685: "731697980373074033",
    3690: "731697980771401779",
    3691: "731697982071898143",
    3692: "731697980599435285",
    3693: "731697981300146246",
    3694: "731697980658286655",
    3695: "731697980817670215",
    3706: "731697980607823945",
    3715: "731697981514055781",
    3742: "731697981342089298",
    3748: "731697982453317682",
    3751: "731697981035774033",
    3800: "731697982411505685",
    3801: "731697982017241098",
    3802: "731697981585096746",
    3812: "731697982314905621",
    3814: "731697982164172952",
    3850: "731697982164172890",
    3851: "731697982235475999",
    3853: "731697982118035497",
    3854: "731697982151590028",
    3855: "731697982453317722",
    3857: "731697982402986114",
    3858: "731699691317624893",
    3859: "731699693431554069",
    3860: "731699693955842048",
    3862: "731699691418288138",
    3863: "731699691586322533",
    3864: "731699693633011785",
    3901: "731699693826080858",
    3902: "731699690906583103",
    3903: "731699690965434500",
    3905: "731699691363893329",
    3907: "731699693645725777",
    3916: "731699691783192616",
    4001: "731699693460914176",
    4003: "731699693268238477",
    4004: "731699693159186434",
    4101: "731699693461045269",
    4102: "731699693184090154",
    4103: "731699693217906690",
    4104: "731699693595263047",
    4105: "731699693175963702",
    4201: "731699691355635742",
    4202: "731699689094774786",
    4203: "731699693377028187",
    4204: "731699693763035196",
    4401: "731699693855309853",
    4402: "731699693897383936",
    4403: "731699691296784396",
    3026: "731691346808799252",
    3031: "731691346590564374",
    3022: "731691346812862464",
    0: "631208516719214617",
    3024: "731691346133254236"

}

getRunesName = (id) => {
    try {
        if(runesName[id]){
            return runesName[id]
        }
    } catch (err) {}
}


getEmojiItems = (id, client) => {
    try {
        if(itemsEmoji[id]){
            return client.emojis.cache.get(itemsEmoji[id])
        }
    } catch (err) {}
}

getRunesEmoji = (id, client) => {
    try {
        if(runesEmoji[id]){
            return client.emojis.cache.get(runesEmoji[id])
        }
    } catch (err) {}
}

IDtoName = id => {
    try {
        if(champ_name_by_id[id]) {
            return champ_name_by_id[id]
        }
    }
    catch (err) {}
},

nameToId = name => {
    try {
        if(champ_id_by_name[name]) {
            return champ_id_by_name[name]
        }
    }
    catch (err) {}
}

getChampionEmoji = (client, champion_id) => {
    try {
        if(emoji_by_champion_id[champion_id]) {
            return client.emojis.cache.get(emoji_by_champion_id[champion_id])
        }
    } catch (err) {}
},

Teams = team_id => {
    switch(team_id) {
        case 100: return "Azul"; break;
        case 200: return "Vermelho"; break;
    }
},

Spells = (client, spell_id) => {
    try {
        if(spells_image[spell_id]) {
            return client.emojis.cache.get(spells_image[spell_id])
        }
    } catch (err) {}
},

fila = (id, client) => {


    switch(id) {
        case 0: return `Personalizada`;
        case 2020: return `Tutorial 3`;
        case 2010: return `Tutorial 2`;
        case 2000: return `Tutorial 1`;
        case 1200: return `Nexus Blitz`;
        case 1100: return `Odyssey Extraction`;
        case 1020: return `One for all`;
        case 1010: return `ARURF Snow`;
        case 1000: return `Project game`;
        case 990 || 980: return `Star Guardian Invasion`;
        case 960 || 950: return `Doom bots`;
        case 940: return `Nexus Siege games`;
        case 920: return `Rei poro`;
        case 910: return `Ascenção`;
        case 900: return `URF`;
        case 850: return `Co-op vs. Bots intermediários`;
        case 840: return `Co-op vs. Bots princinpiantes`;
        case 830: return `Co-op vs. Bots iniciantes`;
        case 700: return `Clash `;
        case 610: return `Dark Star`;
        case 600: return `Caça ao sangue`;
        case 450: return `ARAM`;
        case 440: return `Ranqueada flexível`;
        case 430: return `Partida normal`;
        case 420: return `Ranqueada solo/duo`;
        case 400: return `Partida normal`;
        case 313: return `Mercado negro`;
        case 310: return `Nemesis`;
        case 100: return `ARAM`;
        case 98 || 75: return 'Hexakill';
    }
},

getEloEmoji = (client, tier) => {
    try {
        if(elo_emoji[tier]) {
            return client.emojis.cache.get(elo_emoji[tier])
        }
        
    } catch(err) {}
},

getMasteryEmoji = (client, champion_level) => {
    try {
        if(masteryImagesURL[champion_level]) {
            return client.emojis.cache.get(masteryImagesURL[champion_level])
        }
    } catch (err) {}
},

virgulaPoints = points => {
    try {

        if(points.toString().length == 6){
            let v = points.slice(3)
            let g = points.slice(0, 3)

            return (g + ',' + v)
        } 
        else if (points.toString().length == 4) {
            let v = points.slice(1)
            let g = points.slice(0, 1)

            return (g + ',' + v)
        }
        else if(points.toString().length == 7){
            let v = points.slice(0, 1)
            let x = points.slice(1, 4)
            let y = points.slice(4)

            return (v + ',' + x + ',' + y)
        }
        else if(points.length == 5) {
            let v = points.slice(0, 2)
            let x = points.slice(2)

            return (v + ',' + x)
        } 
        else if(points.length == 8) {
            let v = points.slice(0, 2)
            let x = points.slice(2, 5)
            let y = points.slice(5, 8)

            return (v+ ',' + x + ',' + y    )
        }
        else return points


    } catch (err) {}
}

module.exports = {
    getChampionEmoji,
    Teams,
    Spells,
    IDtoName,
    fila,
    getEloEmoji,
    getMasteryEmoji,
    virgulaPoints,
    getRunesEmoji,
    getRunesName,
    getEmojiItems,
    nameToId
}

//lucas é o bixo mesmo :v,
