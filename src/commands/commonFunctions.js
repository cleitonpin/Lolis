const champ_name_by_id = {
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
    875: "Sett"
}

const emoji_by_champion_id = {
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
    106: "631303849012887572",
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
    "IRON": "700867641446760548",
    "BRONZE": "700875020427329656",
    "SILVER": "700875508405108826",
    "GOLD": "700875020188254269",
    "PLATINUM": "700875020330860656",
    "DIAMOND": "700875020414484580",
    "MASTER": "700875020439781436",
    "GRANDMASTER": "700875020443975731",
    "CHALLENGER": "700875020494176307",
    "UNRANKED": "729018162540052581"
}

const masteryImagesURL = {
    1: "700878777613287484",
    2: "700878785574338560",
    3: "700878785527939182",
    4: "700878785578532965",
    5: "700878785830191204",
    6: "700878785578401832",
    7: "700878786237038593"
}


checkItem = (args) => {
    let item_name = args.join(' ')
    console.log(item_name)
    if(item_name == 'Botas da Velocidade') return '1001';
    if(item_name == 'Amuleto da Fada') return '1004';
    if(args[0]=='Perola') {
        if(args[1]=='do') {
            if(args[2]== 'rejuvenescimento') return '1006'
        }
    }
    if(args[0]=='Cinto') {
        if(args[1]=='do') {
            if(args[2]=='gigante') return '1011'
        }
    }
    if(args[0]=='Capa') {
        if(args[1]=='da') {
            if(args[2]=='agilidade') return '1018'
        }
    }
    if(args[0]== 'Varinha') {
        if(args[1]== 'explosiva') return '1026'
    }
    if (args[0]=='Cristal') {
        if(args[1]=='de') {
            if(args[2]=='safira') return '1027'
        }
    }
    if (args[0]=='Cristal') {
        if(args[1]=='de') {
            if(args[2]=='rubi') return '1028'
        }
    }
    if (args[0]=='Couraça') {
        if(args[1]=='de') {
            if(args[2]=='pano') return '1029'
        }
    }
    if (args[0]=='Cota') {
        if(args[1]=='de') {
            if(args[2]=='malha') return '1031'
        }
    }
    if (args[0]=='Manto') {
        if(args[1]=='anula-magia') return '1033' 
    }
    if (args[0]=='Espada') {
            if(args[1]=='longa') return '1036'
    }
    if (args[0]=='Picareta') return '1037'
    if (args[0]=='Espada') {
        if(args[1]=='gpc') return '1038'
    }
    if (args[0]=='Talismã') {
        if(args[1]=='do') {
            if(args[2]=='caçador') return '1039'
        }
    }
    if (args[0]=='Machete') {
        if(args[1]=='do') {
            if(args[2]=='caçador') return '1041'
        }
    }
    if (args[0]=='Adaga') return '1042'
    if (args[0]=='Arco') {
        if(args[1]=='recurvo') return '1043'        
    }
    if (args[0]=='Luvas') {
        if(args[1]=='da') {
            if(args[2]=='pancadaria') return '1051'
        }
    }
    if (args[0]=='Tomo') {
        if(args[1]=='amplificador') return '1052'               
    }
    if (args[0]=='Cetro') {
        if(args[1]=='vampírico') return '1053'
    }
    if (args[0]=='Escuro') {
        if(args[1]=='de') {
            if(args[2]=='doran') return '1054'
        }
    }
    if (args[0]=='Lâmina') {
        if(args[1]=='de') {
            if(args[2]=='doran') return '1055'
        }
    }
    if (args[0]=='Anel') {
        if(args[1]=='de') {
            if(args[2]=='doran') return '1056'
        }
    }
    if (args[0]=='Capa') {
        if(args[1]=='negatron') return '1057'              
    }
    if (args[0]=='Bastão') {
        if(args[1]=='desnecessariamente') {
            if(args[2]=='grande') return '1058'
        }
    }
    if (args[0]=='Cetro') {
        if(args[1]=='vampírico') {
            if(args[2]=='espacial') return '1059'
        }
    }
    if (args[0]=='Lacre') {
        if(args[1]=='negro') return '1082'              
    }
    if (args[0]=='Abatedora') return '1083'   
    if (args[0]=='Encantamento:') {
        if(args[1]=='guerreiro') return '1400'
    }
    if (args[0]=='Encatamento:') {
        if(args[1]=='titã') {
            if(args[2]=='ardente') return '1401'
        }
    }
    if (args[0]=='Encantamento:') {
        if(args[1]=='ecos') {
            if(args[2]=='rúnicos') return '1402'
        }
    }
    if (args[0]=='Encantamento:') {
        if(args[1]=='navalha') {
            if(args[2]=='sangrenta') return '1416'
        }
    }
    if (args[0]=='Poção') {
        if(args[1]=='de') {
            if(args[2]=='vida') return '2003'
        }
    }
    if (args[0]=='Poção') {
        if(args[1]=='de') {
            if(args[2]=='mana') return '2004'
        }
    }
    if (args[0]=='Biscoito') {
        if(args[1]=='de') {
            if(args[2]=='rejuvenescimento') {
                if(args[3]=='total') return '2009'
            }
        }
    }
    if (args[0]=='Biscoito') {
        if(args[1]=='total') {
            if(args[2]=='da') {
                if(args[3]=='determinação') {
                    if(args[4]== 'eterna') return '2010'
                }
            }
        }
    }
    if (args[0]=='Elixir') {
        if(args[1]=='da') {
            if(args[2]=='habilidade') return '2011'
        }
    }
    if (args[0]=='Biscoito') {
        if(args[1]=='do') {
            if(args[2]=='rejuvenescimento')  return '2012' 
        }
    }
    if (args[0]=='Essência') {
        if(args[1]=='do') {
            if(args[2]=='oráculo') return '2013'
        }
    }
    if (args[0]=='Estilhaço') {
        if(args[1]=='de') {
            if(args[2]=='kircheis') return '2015'
        }
    }
    if (args[0]=='Poção') {
        if(args[1]=='com') {
            if(args[2]=='refil') return '2031'
        }
    }
    if (args[0]=='Poção') {
        if(args[1]=='corrupta') return '2033'               
    }
    if (args[0]=='Sentinela') {
        if(args[1]=='do') {
            if(args[2]=='explorador') return '2050'
        }
    }
    if (args[0]=='Berrante') {
        if(args[1]=='do') {
            if(args[2]=='guardião') return '2051'
        }
    }
    if (args[0]=='Poritos') return '2052' 
    if (args[0]=='Manto') {
        if(args[1]=='de') {
            if(args[2]=='rapina') return '2053'
        }
    }
    if (args[0]=='Poritos') {
        if(args[1]=='diet')return '2054'              
    }        
    if (args[0]=='Sentinela') {
        if(args[1]=='de') {
            if(args[2]=='controle') return '2055'
        }
    }
    if (args[0]=='Sentinela') {
        if(args[1]=='invisível') {
            if(args[2]=='roubada') return '2056'
        }
    }
    if (args[0]=='Sentinela') {
        if(args[1]=='de') {
            if(args[2]=='visão') {
                if(args[3]=='penetrante') return '2057'
            }
        }
    }
    if (args[0]=='Elixir') {
        if(args[1]=='de') {
            if(args[2]=='ferro') return '2058'
        }
    }
    if (args[0]=='Elixir') {
        if(args[1]=='da') {
            if(args[2]=='feitiçaria') return '2059'
        }
    }
    if (args[0]=='Elixir') {
        if(args[1]=='da') {
            if(args[2]=='ira') return '2060'
        }
    }
    if (args[0]=='Poção') {
        if(args[1]=='de') {
            if(args[2]=='vida') {
                if(args[3]=='roubada') return '2061'
            }
        }
    }
    if (args[0]=='Poção') {
        if(args[1]=='do') {
            if(args[2]=='ladino') {
                if(args[3]=='roubada') return '2062'
            }
        }
    }
    if (args[0]=='Devaneio') {
        if(args[1]=='de') {
            if(args[2]=='shurelya') return '2065'
        }
    }
    if (args[0]=='Saco') {
        if(args[1]=='de') {
            if(args[2]=='ouro') return '2319'
        }
    }
    if (args[0]=='Pulverizador') {
        if(args[1]=='de') {
            if(args[2]=='tropas') return '2403'
        }
    }
    if (args[0]=='Cronômetro') {
        if(args[1]=='iniciado') return '2419'              
    }
    if (args[0]=='Cronômetro') return '2420'
    if (args[0]=='Cronômetro') {
        if(args[1]=='quebrado') return '2421'
    }
    if (args[0]=='Botas') {
        if(args[1]=='levementes') {
            if(args[2]=='mágicas') return '2422'
        }
    }
    if (args[0]=='Máscara') {
        if(args[1]=='abissal') return '3001'
    }
    if (args[0]=='Cajado') {
        if(args[1]=='do') {
            if(args[2]=='arcanjo') return '3003'
        }
    }
    if (args[0]=='Manamune') return '3004'
    if (args[0]=='Acerto') {
        if(args[1]=='de') {
            if(args[2]=='contas') {
                if(args[3]=='de') {
                    if(args[4]=='atma') return '3005'
                }
            }
        }
    }
    if (args[0]=='Grevas') {
        if(args[1]=='do') {
            if(args[2]=='berserker') return '3006'
        }
    }
    if (args[0]=='Botas') {
        if(args[1]=='da') {
            if(args[2]=='rapidez') return '3009'
        }
    }
    if (args[0]=='Cajado') {
        if(args[1]=='do') {
            if(args[2]=='arcanjo') {
                if(args[3]=='(Carga') {
                    if(args[4]=='rápida)') return '3007'
                }
            }
        }
    }
    if (args[0]=='Manamune') {
        if(args[1]=='(Carga') {
            if(args[2]=='rápida)') return '3008'
        }
    }
    if (args[0]=='Catalisador') {
        if(args[1]=='das') {
            if(args[2]=='eras') return '3010'
        }
    }
    if (args[0]=='Sapatos') {
        if(args[1]=='do') {
            if(args[2]=='feiticeiro') return '3020'
        }
    }
    if (args[0]=='Malho') {
        if(args[1]=='congelado') return '3022'
    }
    if (args[0]=='Proteção') {
        if(args[1]=='glacial') return '3024'
    }
    if (args[0]=='Manopla') {
        if(args[1]=='dos') {
            if(args[2]=='glacinatas') return '3025'
        }
    }
    if (args[0]=='Anjo') {
        if(args[1]=='guardião') return '3026'
    }
    if (args[0]=='Bastão') {
        if(args[1]=='das') {
            if(args[2]=='eras') return '3027'
        }
    }
    if (args[0]=='Cálice') {
        if(args[1]=='da') {
            if(args[2]=='harmonia') return '3028'
        }
    }
    if (args[0]=='Bastão') {
        if(args[1]=='das') {
            if(args[2]=='eras') {
                if(args[3]=='(Carga') {
                    if(args[4]=='rápida)') return '3029'
                }
            }
        }
    }
    if (args[0]=='Hextec') {
        if(args[1]=='GLP-800') return '3030'
    }
    if (args[0]=='Gume') {
        if(args[1]=='do') {
            if(args[2]=='infinito') return '3031'
        }
    }
    if (args[0]=='Lembrete') {
        if(args[1]=='mortal') return '3033'
    }
    if (args[0]=='Último') {
        if(args[1]=='susurro') return '3035'
    }
    if (args[0]=='Lembranças') {
        if(args[1]=='do') {
            if(args[2]=='lorde') {
                if(args[3]=='dominik') return '3036'
            }
        }
    }
    if (args[0]=='Abraço') {
        if(args[1]=='de') {
            if(args[2]=='seraph') return '3040'
        }
    }
    if (args[0]=='Ladrão') {
        if(args[1]=='de') {
            if(args[2]=='almas') {
                if(args[3]=='de') {
                    if(args[4]=='mejai') return '3041'
                }
            }
        }
    }
    if (args[0]=='Muramana') return '3042'
    if (args[0]=='Fago') return '3044'
    if (args[0]=='Dançarina') {
        if(args[1]=='fantasma') return '3046'
    }
    if (args[0]=='Tabi') {
        if(args[1]=='ninja') return '3047'
    }
    if (args[0]=='Convergência') {
        if(args[1]=='de') {
            if(args[2]=='zeke') return '3050'
        }
    }
    if (args[0]=='Punho') {
        if(args[1]=='de') {
            if(args[2]=='jaurim') return '3052'
        }
    }
    if (args[0]=='Fúria') {
        if(args[1]=='de') {
            if(args[2]=='sterak') return '3053'
        }
    }
    if (args[0]=='Mergulhadora') return '3056'
    if (args[0]=='Fulgor') return '3057'
    if (args[0]=='Semblante') {
        if(args[1]=='espiritual') return '3065'
    }
    if (args[0]=='Gema') {
        if(args[1]=='ardente') return '3003'
    }
    if (args[0]=='Capa') {
        if(args[1]=='de') {
            if(args[2]=='fogo') {
                if(args[3]=='solar') return '3068'
            }
        }
    }
    if (args[0]=='Resquício') {
        if(args[1]=='dos') {
            if(args[2]=='ascendentes') return '3069'
        }
    }
    if (args[0]=='Lágrima') {
        if(args[1]=='da') {
            if(args[2]=='deusa') return '3070'
        }
    }
    if (args[0]=='Cutelo') {
        if(args[1]=='negro') return '3071'
    }
    if (args[0]=='Sedenta') {
        if(args[1]=='por') {
            if(args[2]=='sangue') return '3072'
        }
    }
    if (args[0]=='Lágrima') {
        if(args[1]=='da') {
            if(args[2]=='deusa') {
                if(args[3]=='(carga') {
                    if(args[4]=='rápida)') return '3073'
                }
            }
        }
    }
    if (args[0]=='Hidra') {
        if(args[1]=='raivosa') return '3074'
    }
    if (args[0]=='Armadura') {
        if(args[1]=='de') {
            if(args[2]=='espinhos') return '3075'
        }
    }
    if (args[0]=='Colete') {
        if(args[1]=='espinhoso') return '3076'
    }
    if (args[0]=='Tiamat') return '3077'
    if (args[0]=='Força') {
        if(args[1]=='da') {
            if(args[2]=='trindade') return '3078'
        }
    }
    if (args[0]=='Sedenta') {
        if(args[1]=='por') {
            if(args[2]=='sangue') {
                if(args[3]=='espacial') return '3080'
            }
        }
    }
    if (args[0]=='Carapaça') {
        if(args[1]=='do') {
            if(args[2]=='vigia') return '3082'
        }
    }
    if (args[0]=='Armadura') {
        if(args[1]=='de') {
            if(args[2]=='warmog') return '3083'
        }
    }
    if (args[0]=='Armadura') {
        if(args[1]=='sangrenta') {
            if(args[2]=='do') {
                if(args[3]=='suserano') return '3084'
            }
        }
    }
    if (args[0]=='Furacão') {
        if(args[1]=='de') {
            if(args[2]=='runaan') return '3085'
        }
    }
    if (args[0]=='Zelo') return '3086'
    if (args[0]=='Faca') {
        if(args[1]=='de') {
            if(args[2]=='statikk') return '3087'
        }
    }
    if (args[0]=='Capuz') {
        if(args[1]=='da') {
            if(args[2]=='morte') {
                if(args[3]=='de') {
                    if(args[4]=='rabadon') return '3089'
                }
            }
        }
    }
    if (args[0]=='Chapéu') {
        if(args[1]=='mágico') {
            if(args[2]=='de') {
                if(args[3]=='wooglet') return '3090'
            }
        }
    }
    if (args[0]=='Limite') {
        if(args[1]=='da') {
            if(args[2]=='razão') return '3091'
        }
    }
    if (args[0]=='Resquício') {
        if(args[1]=='dos') {
            if(args[2]=='observadores') return '3092'
        }
    }
    if (args[0]=='Canhão') {
        if(args[1]=='fumegante') return '3094'
    }
    if (args[0]=='Chuva') {
        if(args[1]=='de') {
            if(args[2]=='canivete') return '3095'
        }
    }
    if (args[0]=='Medalhão') {
        if(args[1]=='do') {
            if(args[2]=='nômade') return '3096'
        }
    }
    if (args[0]=='Braçadeira') {
        if(args[1]=='de') {
            if(args[2]=='targon') return '3097'
        }
    }
    if (args[0]=='Presas') {
        if(args[1]=='gélidas') return '3098'
    }
    if (args[0]=='Perdição') {
        if(args[1]=='de') {
            if(args[2]=='lich') return '3100'
        }
    }
    if (args[0]=='Ferrão') return '3101'
    if (args[0]=='Véu') {
        if(args[1]=='de') {
            if(args[2]=='banshee') return '3102'
        }
    }
    if (args[0]=='Saqueadora') {
        if(args[1]=='do') {
            if(args[2]=='lorde') {
                if(args[3]=='van') {
                    if(args[4]=='damm') return '3104'
                }
            }
        }
    }
    if (args[0]=='Égide') {
        if(args[1]=='da') {
            if(args[2]=='legião') return '3105'
        }
    }
    if (args[0]=='Redenção') return '3107'
    if (args[0]=='Códex') {
        if(args[1]=='demoníaco')return '3108'
    }
    if (args[0]=='Coração') {
        if(args[1]=='congelado') return '3110'
    }
    if (args[0]=='Passos') {
        if(args[1]=='de') {
            if(args[2]=='mercúrio') return '3111'
        }
    }
    if (args[0]=='Orbe') {
        if(args[1]=='do') {
            if(args[2]=='guardião') return '3112'
        }
    }
    if (args[0]=='Cintilação') {
        if(args[1]=='etérea') return '3113'
    }
    if (args[0]=='Ídolo') {
        if(args[1]=='proibido') return '3114'
    }
    if (args[0]=='Dente') {
        if(args[1]=='de') {
            if(args[2]=='nashor') return '3115'
        }
    }
    if (args[0]=='Cetro') {
        if(args[1]=='de') {
            if(args[2]=='cristal') {
                if(args[3]=='de') {
                    if(args[4]=='rylai') return '3116'
                }
            }
        }
    }
    if (args[0]=='Botas') {
        if(args[1]=='da') {
            if(args[2]=='mobilidade') return '3117'
        }
    }
    if (args[0]=='Juramento') {
        if(args[1]=='do') {
            if(args[2]=='cavaleiro') {
                if(args[3]=='espacial') return '3118'
            }
        }
    }
    if (args[0]=='Machadinha') {
        if(args[1]=='sinistra') return '3122'
    }
    if (args[0]=='Chamado') {
        if(args[1]=='do') {
            if(args[2]=='carrasco') return '3123'
        }
    }
    if (args[0]=='Lâmina') {
        if(args[1]=='da') {
            if(args[2]=='fúria') {
                if(args[3]=='de') {
                    if(args[4]=='guinsoo') return '3124'
                }
            }
        }
    }
    if (args[0]=='Sufocamento') {
            if(args[1]=='ígneo') return '3128'
    }
    if (args[0]=='Espada') {
        if(args[1]=='do') {
            if(args[2]=='divino') return '3131'
        }
    }
    if (args[0]=='Martelo') {
        if(args[1]=='de') {
            if(args[2]=='guerra') {
                if(args[3]=='de') {
                    if(args[4]=='caulfield') return '3133'
                }
            }
        }
    }
    if (args[0]=='Punhal') {
        if(args[1]=='serrilhado') return '3134'
    }
    if (args[0]=='Cajado') {
        if(args[1]=='do') {
            if(args[2]=='vazio') return '3135'
        }
    }
    if (args[0]=='Máscara') {
        if(args[1]=='assustadora') return '3136'
    }
    if (args[0]=='Espada') {
        if(args[1]=='dervixe') return '3137'
    }
    if (args[0]=='Cimitarra') {
        if(args[1]=='mercurial') return '3139'
    }
    if (args[0]=='Bandana') {
        if(args[1]=='de') {
            if(args[2]=='mercúrio') return '3140'
        }
    }
    if (args[0]=='Lâmina') {
        if(args[1]=='fantasma') {
            if(args[2]=='de') {
                if(args[3]=='youmuu') return '3142'
            }
        }
    }
    if (args[0]=='Presságio') {
        if(args[1]=='de') {
            if(args[2]=='randuin') return '3143'
        }
    }
    if (args[0]=='Alfange') {
        if(args[1]=='das') {
            if(args[2]=='águas') {
                if(args[3]=='de') {
                    if(args[4]=='sentina') return '3144'
                }
            }
        }
    }
    if (args[0]=='Revólver') {
        if(args[1]=='hextec') return '3145'
    }
    if (args[0]=='Pistola') {
        if(args[1]=='laminar') {
            if(args[2]=='hextec') return '3146'
        }
    }
    if (args[0]=='Crepúsculo') {
        if(args[1]=='de') {
            if(args[2]=='draktharr') return '3147'
        }
    }
    if (args[0]=='Pistola') {
        if(args[1]=='laminar') {
            if(args[2]=='hextec') {
                if(args[3]=='espacial') return '3148'
            }
        }
    }
    if (args[0]=='Espada') {
        if(args[1]=='do') {
            if(args[2]=='rei') {
                if(args[3]=='destruído') {
                    if(args[4]=='espacial') return '3149'
                }
            }
        }
    }
    if (args[0]=='Tormento') {
        if(args[1]=='de') {
            if(args[2]=='liandry') return '3151'
        }
    }
    if (args[0]=='Protocinturão-01') {
            if(args[1]=='hextec') return '3152'
    }
    if (args[0]=='Espada') {
        if(args[1]=='do') {
            if(args[2]=='rei') {
                if(args[3]=='destruído') return '3153'
            }
        }
    }
    if (args[0]=='Hexdrinker') return '3155'
    if (args[0]=='Mandíbula') {
        if(args[1]=='de') {
            if(args[2]=='malmortius') return '3156'
        }
    }
    if (args[0]=='Ampulheta') {
        if(args[1]=='de') {
            if(args[2]=='zhonya') return '3157'
        }
    }
    if (args[0]=='Botas') {
        if(args[1]=='ionianas') {
            if(args[2]=='da') {
                if(args[3]=='lucidez')  return '3158'
            }
        }
    }
    if (args[0]=='Lança') {
        if(args[1]=='de') {
            if(args[2]=='shojin') return '3161'
        }
    }
    if (args[0]=='Morellonomicon' || args[0]=='Morello') return '3165'
    if (args[0]=='Lâmina') {
        if(args[1]=='enfeitiçada') {
            if(args[2]=='moonflair') return '3170'
        }
    }
    if (args[0]=='Zéfiro') return '3172'
    if (args[0]=='Graal') {
        if(args[1]=='profano') {
            if(args[2]=='de') {
                if(args[3]=='athene') return '3174'
            }
        }
    }
    if (args[0]=='Cabeça') {
        if(args[1]=='de') {
            if(args[2]=='khazix') return '3175'
        }
    }
    if (args[0]=='Lâmina') {
        if(args[1]=='sanguinária') return '3181'
    }
    if (args[0]=='Portador') {
        if(args[1]=='da') {
            if(args[2]=='luz') return '3185'
        }
    }
    if (args[0]=='Analisador') {
        if(args[1]=='arcano') return '3187'
    }
    if (args[0]=='Medalhão') {
        if(args[1]=='dos') {
            if(args[2]=='solari') {
                if(args[3]=='de') {
                    if(args[4]=='ferro') return '3190'
                }
            }
        }
    }
    if (args[0]=='Armaguarda') {
        if(args[1]=='da') {
            if(args[2]=='caçadora') return '3191'
        }
    }
    if (args[0]=='Elmo') {
        if(args[1]=='adaptativo') return '3194'
    }
    if (args[0]=='Núcleo') {
        if(args[1]=='hex') {
            if(args[2]=='mk-1') return '3196'
        }
    }
    if (args[0]=='Núcleo') {
        if(args[1]=='hex') {
            if(args[2]=='mk-2') return '3197'
        }
    }
    if (args[0]=='Núcleo') {
        if(args[1]=='hex') {
            if(args[2]=='perfeito') return '3198'
        }
    }
    if (args[0]=='Núcleo') {
        if(args[1]=='hex') {
            if(args[2]=='protótipo') return '3200'
        }
    }
    if (args[0]=='Capuz') {
        if(args[1]=='do') {
            if(args[2]=='espectro') return '3211'
        }
    }
    if (args[0]=='Cadinho') {
        if(args[1]=='do') {
            if(args[2]=='mikael') return '3222'
        }
    }
    if (args[0]=='Eco') {
        if(args[1]=='de') {
            if(args[2]=='luden') return '3285'
        }
    }
    if (args[0]=='Moeda') {
        if(args[1]=='antiga') return '3301'
    }
    if (args[0]=='Escudo') {
        if(args[1]=='relicário') return '3302'
    }
    if (args[0]=='Gume') {
        if(args[1]=='do') {
            if(args[2]=='ladrão') {
                if(args[3]=='arcano') return '3303'
            }
        }
    }
    if (args[0]=='Moeda') {
        if(args[1]=='antiga') {
            if(args[2]=='desgastada') return '3304'
        }
    }
    if (args[0]=='Medalhão') {
        if(args[1]=='do') {
            if(args[2]=='nômade') {
                if(args[3]=='desgastado') return '3305'
            }
        }
    }
    if (args[0]=='Totem') {
        if(args[1]=='de') {
            if(args[2]=='vigilância') return '3340'
        }
    }
    if (args[0]=='Âncora') {
        if(args[1]=='da') {
            if(args[2]=='alma') return '3345'
        }
    }
    if (args[0]=='Analisador') {
        if(args[1]=='arcano') return '3348'
    }
    if (args[0]=='Totem') {
        if(args[1]=='superior') {
            if(args[2]=='invisível') return '3361'
        }
    }
    if (args[0]=='Totem') {
        if(args[1]=='detector') {
            if(args[2]=='superior') return '3362'
        }
    }
    if (args[0]=='Alteração') {
        if(args[1]=='vidente') return '3363'
    }
    if (args[0]=='Lente') {
        if(args[1]=='do') {
            if(args[2]=='oráculo') return '3191'
        }
    }
    if (args[0]=='Gume') {
        if(args[1]=='fundido') return '3191'
    }
    if (args[0]=='Capa') {
        if(args[1]=='da') {
            if(args[2]=='fornalha') return '3373'
        }
    }
    if (args[0]=='Coroa') {
        if(args[1]=='da') {
            if(args[2]=='morte') {
                if(args[3]=='de') {
                    if(args[4]=='rabadon') return '3374'
                }
            }
        }
    }
    if (args[0]=='Máscara') {
        if(args[1]=='infernal') return '3379'
    }
    if (args[0]=='Cutelo') {
        if(args[1]=='obsidiano') return '3380'
    }
    if(args[0]=='Salvação') return '3382'
    if (args[0]=='Diadema') {
        if(args[1]=='dos') {
            if(args[2]=='solari') {
                if(args[3]=='de') {
                    if(args[4]=='ferro') return '3383'
                }
            }
        }
    }
    if (args[0]=='Fusão') {
        if(args[1]=='da') {
            if(args[2]=='trindade') return '3384'
        }
    }
    if (args[0]=='Coroa') {
        if(args[1]=='mágica') {
            if(args[2]=='de') {
                if(args[3]=='wooglet') return '3385'
            }
        }
    }
    if (args[0]=='Paradoxo') {
        if(args[1]=='de') {
            if(args[2]=='zhonya') return '3386'
        }
    }
    if (args[0]=='Punho') {
        if(args[1]=='Congelado') return '3387'
    }
    if (args[0]=='Lâmina') {
        if(args[1]=='da') {
            if(args[2]=='ira') {
                if(args[3]=='de') {
                    if(args[4]=='youmuu') return '3388'
                }
            }
        }
    }
    if (args[0]=='Poderio') {
        if(args[1]=='do') {
            if(args[2]=='rei') {
                if(args[3]=='destruído') return '3389'
            }
        }
    }
    if (args[0]=='Pulso') {
        if(args[1]=='de') {
            if(args[2]=='luden') return '3390'
        }
    }
    if (args[0]=='Resquício') {
        if(args[1]=='do') {
            if(args[2]=='aspecto') return '3401'
        }
    }
    if (args[0]=='Transcendência') {
        if(args[1]=='dourada') return '3460'
    }
    if (args[0]=='Pedra') {
        if(args[1]=='vidente') return '3462'
    }
    if (args[0]=='Turíbulo') {
        if(args[1]=='ardente') return '3504'
    }
    if (args[0]=='Colhedor') {
        if(args[1]=='de') {
            if(args[2]=='essência') return '3508'
        }
    }
    if (args[0]=='Portal') {
        if(args[1]=='de') {
            if(args[2]=='zzrot') return '3512'
        }
    }
    if (args[0]=='Olho') {
        if(args[1]=='do') {
            if(args[2]=='arauto') return '3514'
        }
    }
    if (args[0]=='Poro') {
        if(args[1]=='fantasma') return '3520'
    }
    if (args[0]=='Lança') {
        if(args[1]=='negra') return '3599'
    }
    if (args[0]=='Teleporte') {
        if(args[1]=='de') {
            if(args[2]=='cerco') return '3630'
        }
    }
    if (args[0]=='Balista') {
        if(args[1]=='de') {
            if(args[2]=='cerco') return '3631'
        }
    }
    if (args[0]=='Torre:') {
        if(args[1]=='feixe') {
            if(args[2]=='da') {
                if(args[3]=='destruição') return '3534'
            }
        }
    }
    if (args[0]=='Cápsula') {
        if(args[1]=='de') {
            if(args[2]=='teleporte') return '3635'
        }
    }
    if (args[0]=='Torre:') {
        if(args[1]=='baluarte') {
            if(args[2]=='da') {
                if(args[3]=='tempestade') return '3534'
            }
        }
    }
    if (args[0]=='Zona') {
        if(args[1]=='de') {
            if(args[2]=='flash') return '3640'
        }
    }
    if (args[0]=='Flâmula') {
        if(args[1]=='de') {
            if(args[2]=='vanguarda') return '3641'
        }
    }
    if (args[0]=='Recuperação') {
        if(args[1]=='de') {
            if(args[2]=='cerco') return '3635'
        }
    }
    if (args[0]=='Campo') {
        if(args[1]=='de') {
            if(args[2]=='entropia') return '3643'
        }
    }
    if (args[0]=='Pedra') {
        if(args[1]=='Vidente') return '3645'
    }
    if (args[0]=='Totem') {
        if(args[1]=='de') {
            if(args[2]=='escudo') return '3647'
        }
    }
    if (args[0]=='Sentinela') {
        if(args[1]=='de') {
            if(args[2]=='visão') {
                if(args[3]=='do') {
                    if(args[4]=='cerco') return '3649'
                }
            }
        }
    }
    if (args[0]=='Poritos') {
        if(args[1]=='refrescantes') return '3680'
    }
    if (args[0]=='Poritos') {
        if(args[1]=='muito') {
            if(args[2]=='picante') return '3681'
        }
    }
    if (args[0]=='Poritos') {
        if(args[1]=='espresso') return '3682'
    }
    if (args[0]=='Poritos') {
        if(args[1]=='embalagem') {
            if(args[2]=='para') {
                if(args[3]=='festa') return '3683'
            }
        }
    }
    if (args[0]=='Grilhões') {
        if(args[1]=='cósmicos') return '3690'
    }
    if (args[0]=='Lanterna') {
        if(args[1]=='da') {
            if(args[2]=='singularidade') return '3691'
        }
    }
    if (args[0]=='Foice') {
        if(args[1]=='de') {
            if(args[2]=='matéria') {
                if(args[3]=='escura') return '3692'
            }
        }
    }
    if (args[0]=='Botas') {
        if(args[1]=='gravitacionais') return '3693'
    }
    if (args[0]=='Manto') {
        if(args[1]=='de') {
            if(args[2]=='estrelas') return '3694'
        }
    }
    if (args[0]=='Sigilo') {
        if(args[1]=='da') {
            if(args[2]=='estrela') {
                if(args[3]=='negra') return '3695'
            }
        }
    }
    if (args[0]=='Sabre') {
        if(args[1]=='de') {
            if(args[2]=='batalha') return '3715'
        }
    }
    if (args[0]=='Coiraça') {
        if(args[1]=='do') {
            if(args[2]=='defunto') return '3742'
        }
    }
    if (args[0]=='Hidra') {
        if(args[1]=='titânica') return '3748'
    }
    if (args[0]=='Brasa') {
        if(args[1]=='de') {
            if(args[2]=='bami') return '3751'
        }
    }
    if (args[0]=='Glória') {
        if(args[1]=='íntegra') return '3800'
    }
    if (args[0]=='Braçadeira') {
        if(args[1]=='cristalina') return '3801'
    }
    if (args[0]=='Capítulo') {
        if(args[1]=='perdido') return '3802'
    }
    if (args[0]=='Dança') {
        if(args[1]=='da') {
            if(args[2]=='morte') return '3812'
        }
    }
    if (args[0]=='Dança') {
        if(args[1]=='da') {
            if(args[2]=='morte') {
                if(args[3]=='espacial') return '3813'
            }
        }
    }
    if (args[0]=='Limiar') {
        if(args[1]=='da') {
            if(args[2]=='noite') return '3814'
        }
    }
    if (args[0]=='Disparar') {
        if(args[1]=='à') {
            if(args[2]=='vontade') return '3901'
        }
    }
    if (args[0]=='Filha') {
        if(args[1]=='da') {
            if(args[2]=='morte') return '3902'
        }
    }
    if (args[0]=='Levantar') {
        if(args[1]=='o') {
            if(args[2]=='mortal') return '3903'
        }
    }
    if (args[0]=='Sombras') {
        if(args[1]=='gêmeas') return '3905'
    }
    if (args[0]=='Prisão') {
        if(args[1]=='de') {
            if(args[2]=='feitiços') return '3907'
        }
    }
    if (args[0]=='Salva-vidas') return '4003'
    if (args[0]=='Alfanje') {
        if(args[1]=='espectral') return '4004'
    }
    if (args[0]=='Lâmina') {
        if(args[1]=='do') {
            if(args[2]=='acossador') {
                if(args[3]=='da') {
                    if(args[4]=='alcateia') return '4101'
                }
            }
        }
    }
    if (args[0]=='Escudo') {
        if(args[1]=='perdido') {
            if(args[2]=='de') {
                if(args[3]=='doran') return '4201'
            }
        }
    }
    if (args[0]=='Lâmina') {
        if(args[1]=='perdida') {
            if(args[2]=='de') {
                if(args[3]=='doran') return '4202'
            }
        }
    }
    if (args[0]=='Anel') {
        if(args[1]=='perdido') {
            if(args[2]=='de') {
                if(args[3]=='doran') return '4203'
            }
        }
    }
    if (args[0]=='ídolo') {
        if(args[1]=='perdido') {
            if(args[2]=='de') {
                if(args[3]=='doran') return '4204'
            }
        }
    }
    if (args[0]=='Medalhão') {
        if(args[1]=='do') {
            if(args[2]=='filósofo') return '4301'
        }
    }
    if (args[0]=='Coração') {
        if(args[1]=='de') {
            if(args[2]=='targon') return '4302'
        }
    }
    if (args[0]=='Força') {
        if(args[1]=='da') {
            if(args[2]=='naturea') return '4401'
        }
    }
    if (args[0]=='Medalhão') {
        if(args[1]=='enervante') return '4402'
    }
    if (args[0]=='Bastão') {
        if(args[1]=='abastado') {
            if(args[2]=='do') {
                if(args[3]=='bastião') return '4403'
            }
        }
    }
},

IDtoName = id => {
    try {
        if(champ_name_by_id[id]) {
            return champ_name_by_id[id]
        }
    }
    catch (err) {}
},

getChampionEmoji = (client, champion_id) => {
    try {
        if(emoji_by_champion_id[champion_id]) {
            return client.emojis.cache.get(emoji_by_champion_id[champion_id])
        }
    } catch (err) {}
},

Teams = team_id => {
    switch(team_id) {
        case 100: return "Vermelho"; break;
        case 200: return "Azul"; break;
    }
},

Spells = (client, spell_id) => {
    try {
        if(spells_image[spell_id]) {
            return client.emojis.cache.get(spells_image[spell_id])
        }
    } catch (err) {}
},

fila = id => {
    switch(id) {
        case 0: return 'Personalizada';
        case 2020: return 'Tutorial 3';
        case 2010: return 'Tutorial 2';
        case 2000: return 'Tutorial 1';
        case 1200: return 'Nexus Blitz';
        case 1100: return 'Odyssey Extraction';
        case 1020: return 'One for all';
        case 1010: return 'ARURF Snow';
        case 1000: return 'Project game';
        case 990 || 980: return 'Star Guardian Invasion';
        case 960 || 950: return 'Doom bots';
        case 940: return 'Nexus Siege games';
        case 920: return 'Rei poro';
        case 910: return 'Ascenção';
        case 900: return 'URF';
        case 850: return 'Co-op vs. Bots intermediários';
        case 840: return 'Co-op vs. Bots princinpiantes';
        case 830: return 'Co-op vs. Bots iniciantes';
        case 700: return 'Clash';
        case 610: return 'Dark Star';
        case 600: return 'Caça ao sangue';
        case 450: return 'ARAM';
        case 440: return 'Ranqueada flexível';
        case 430: return 'Partida normal';
        case 420: return 'Ranqueada solo/duo';
        case 400: return 'Partida normal';
        case 313: return 'Mercado negro';
        case 310: return 'Nemesis';
        case 100: return 'ARAM';
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
        } else return points


    } catch (err) {}
}

module.exports = {
    getChampionEmoji,
    Teams,
    Spells,
    IDtoName,
    checkItem,
    fila,
    getEloEmoji,
    getMasteryEmoji,
    virgulaPoints
}

//lucas é o bixo mesmo :v