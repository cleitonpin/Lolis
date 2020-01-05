

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

IDtoName = (ID) => {
    switch(ID) {
        case 164: return "Camille"; break; 
        case 497: return "Rakan"; break;
        case 498: return "Xayah"; break;
        case 142: return "Zoe"; break;
        case 145: return "Kaisa"; break;
        case 141: return "Kayn"; break;
        case 555: return "Pyke"; break;
        case 516: return "Ornn"; break;
        case 266: return "Aatrox"; break;
        case 412: return "Thresh"; break;
        case 23: return "Tryndamere"; break;
        case 79: return "Gragas"; break;
        case 69: return "Cassiopeia"; break;
        case 136: return "Aurelion Sol"; break;
        case 13: return "Ryze"; break;
        case 78: return "Poppy"; break;
        case 14: return "Sion"; break;
        case 1: return "Annie"; break;
        case 202: return "Jhin"; break;
        case 43: return "Karma"; break;
        case 111: return "Nautilus"; break;
        case 240: return "Kled"; break;
        case 99: return "Lux"; break;
        case 103: return "Ahri"; break;
        case 2: return "Olaf"; break;
        case 112: return "Viktor"; break;
        case 34: return "Anivia"; break;
        case 27: return "Singed"; break;
        case 86: return "Garen"; break;
        case 127: return "Lissandra"; break;
        case 57: return "Maokai"; break;
        case 25: return "Morgana"; break;
        case 28: return "Evelynn"; break;
        case 105: return "Fizz"; break;
        case 74: return "Heimerdinger"; break;
        case 238: return "Zed"; break;
        case 68: return "Rumble"; break;
        case 82: return "Mordekaiser"; break;
        case 37: return "Sona"; break;
        case 96: return "Kog'Maw"; break;
        case 55: return "Katarina"; break;
        case 117: return "Lulu"; break;
        case 22: return "Ashe"; break;
        case 30: return "Karthus"; break;
        case 12: return "Alistar"; break;
        case 122: return "Darius"; break;
        case 67: return "Vayne"; break;
        case 110: return "Varus"; break;
        case 77: return "Udyr"; break;
        case 89: return "Leona"; break;
        case 126: return "Jayce"; break;
        case 134: return "Syndra"; break;
        case 80: return "Pantheon"; break;
        case 92: return "Riven"; break;
        case 121: return "Kha'Zix"; break;
        case 42: return "Corki"; break;
        case 268: return "Azir"; break;
        case 51: return "Caitlyn"; break;
        case 76: return "Nidalee"; break;
        case 85: return "Kennen"; break;
        case 3: return "Galio"; break;
        case 45: return "Veigar"; break;
        case 432: return "Bard"; break;
        case 150: return "Gnar"; break;
        case 90: return "Malzahar"; break;
        case 104: return "Graves"; break;
        case 254: return "Vi"; break;
        case 10: return "Kayle"; break;
        case 39: return "Irelia"; break;
        case 64: return "Lee Sin"; break;
        case 420: return "Illaoi"; break;
        case 60: return "Elise"; break;
        case 106: return "Volibear"; break;
        case 20: return "Nunu"; break;
        case 4: return "Twisted Fate"; break;
        case 24: return "Jax"; break;
        case 102: return "Shyvana"; break;
        case 429: return "Kalista"; break;
        case 36: return "Dr. Mundo"; break;
        case 427: return "Ivern"; break;
        case 131: return "Diana"; break;
        case 223: return "Tahm Kench"; break;
        case 63: return "Brand"; break;
        case 113: return "Sejuani"; break;
        case 8: return "Vladimir"; break;
        case 154: return "Zac"; break;
        case 421: return "Rek'Sai"; break;
        case 133: return "Quinn"; break;
        case 84: return "Akali"; break;
        case 163: return "Taliyah"; break;
        case 18: return "Tristana"; break;
        case 120: return "Hecarim"; break;
        case 15: return "Sivir"; break;
        case 236: return "Lucian"; break;
        case 107: return "Rengar"; break;
        case 19: return "Warwick"; break;
        case 72: return "Skarner"; break;
        case 54: return "Malphite"; break;
        case 157: return "Yasuo"; break;
        case 101: return "Xerath"; break;
        case 17: return "Teemo"; break;
        case 75: return "Nasus"; break;
        case 58: return "Renekton"; break;
        case 119: return "Draven"; break;
        case 35: return "Shaco"; break;
        case 50: return "Swain"; break;
        case 91: return "Talon"; break;
        case 40: return "Janna"; break;
        case 115: return "Ziggs"; break;
        case 245: return "Ekko"; break;
        case 61: return "Orianna"; break;
        case 114: return "Fiora"; break;
        case 9: return "Fiddlesticks"; break;
        case 31: return "Cho'Gath"; break;
        case 33: return "Rammus"; break;
        case 7: return "LeBlanc"; break;
        case 16: return "Soraka"; break;
        case 26: return "Zilean"; break;
        case 56: return "Nocturne"; break;
        case 222: return "Jinx"; break;
        case 83: return "Yorick"; break;
        case 6: return "Urgot"; break;
        case 203: return "Kindred"; break;
        case 21: return "Miss Fortune"; break;
        case 62: return "Wukong"; break;
        case 53: return "Blitzcrank"; break;
        case 98: return "Shen"; break;
        case 201: return "Braum"; break;
        case 5: return "Xin Zhao"; break;
        case 29: return "Twitch"; break;
        case 11: return "Master Yi"; break;
        case 44: return "Taric"; break;
        case 32: return "Amumu"; break;
        case 41: return "Gangplank"; break;
        case 48: return "Trundle"; break;
        case 38: return "Kassadin"; break;
        case 161: return "Vel'Koz"; break;
        case 143: return "Zyra"; break;
        case 267: return "Nami"; break;
        case 59: return "Jarvan IV"; break;
        case 81: return "Ezreal"; break;
        case 517: return "Sylas"; break;
        case 518: return "Neeko"; break;
        case 517: return "Sylas"; break;
        case 246: return "Qiyana"; break;
        case 350: return "Yuumi"; break;
    }
},

checkSkin = (client, championId) => {
    switch(championId) {
        case 523: return client.emojis.get("663143768995921972"); break;
        case 235: return client.emojis.get("663140424449523752"); break;
        case -1: return client.emojis.get("631208516719214617"); break;
        case 164: return client.emojis.get("631204793670434847"); break; 
        case 497: return client.emojis.get("631204793813303325"); break;
        case 498: return client.emojis.get("631203770901987349"); break;
        case 142: return client.emojis.get("631204794316619796"); break;
        case 145: return client.emojis.get("631205291253301249"); break;
        case 141: return client.emojis.get("631205289613590559"); break;
        case 555: return client.emojis.get("631205289894608897"); break;
        case 516: return client.emojis.get("631205656199692289"); break;
        case 266: return client.emojis.get("631205656430379028"); break;
        case 412: return client.emojis.get("631205655499505700"); break;
        case 23: return client.emojis.get("631205940636680232"); break;
        case 79: return client.emojis.get("631205941093728257"); break;
        case 69: return client.emojis.get("631205940410187817"); break;
        case 136: return client.emojis.get("631206269507731495"); break;
        case 13: return client.emojis.get("631206269323313155"); break;
        case 78: return client.emojis.get("631206269386096640"); break;
        case 14: return client.emojis.get("631206552711462953"); break;
        case 1: return client.emojis.get("631206552661000203"); break;
        case 202: return client.emojis.get("631206552300158982"); break;
        case 43: return client.emojis.get("631206902650634240"); break;
        case 111: return client.emojis.get("631206901891465236"); break;
        case 240: return client.emojis.get("631206902130278410"); break;
        case 99: return client.emojis.get("631207540960657408"); break;
        case 103: return client.emojis.get("631207541363179541"); break;
        case 2: return client.emojis.get("631207540956332061"); break;
        case 112: return client.emojis.get("631207541501722644"); break;
        case 34: return client.emojis.get("631207540931166208"); break;
        case 27: return client.emojis.get("631207541061451823"); break;
        case 86: return client.emojis.get("631207540843216916"); break;
        case 127: return client.emojis.get("631207540881096704"); break;
        case 57: return client.emojis.get("631207540914520074"); break;
        case 25: return client.emojis.get("631207540864188436"); break;
        case 28: return client.emojis.get("631207540855799827"); break;
        case 105: return client.emojis.get("631209262605008926"); break;
        case 74: return client.emojis.get("631209264916070416"); break;
        case 238: return client.emojis.get("631209262848147466"); break;
        case 68: return client.emojis.get("631209264916201515"); break;
        case 82: return client.emojis.get("631209263360114700"); break;
        case 37: return client.emojis.get("631209262835564620"); break;
        case 96: return client.emojis.get("631209265247551521"); break;
        case 55: return client.emojis.get("631209263347269656"); break;
        case 117: return client.emojis.get("631209262827307009"); break;
        case 22: return client.emojis.get("631209265436295198"); break;
        case 30: return client.emojis.get("631209264924327937"); break;
        case 12: return client.emojis.get("631209264785915904"); break;
        case 122: return client.emojis.get("631209262399619074"); break;
        case 67: return client.emojis.get("631209262948810783"); break;
        case 110: return client.emojis.get("631209264102244385"); break;
        case 77: return client.emojis.get("631211788498632714"); break;
        case 89: return client.emojis.get("631211788586975232"); break;
        case 126: return client.emojis.get("631211786430840867"); break;
        case 134: return client.emojis.get("631211788381323264"); break;
        case 80: return client.emojis.get("631211788192710688"); break;
        case 92: return client.emojis.get("631211788259557389"); break;
        case 121: return client.emojis.get("631211786015735840"); break;
        case 42: return client.emojis.get("631211787978670094"); break;
        case 268: return client.emojis.get("631211788234391572"); break;
        case 51: return client.emojis.get("631211788096241705"); break;
        case 76: return client.emojis.get("631211788092047388"); break;
        case 85: return client.emojis.get("631211787840126977"); break;
        case 3: return client.emojis.get("631211788133728279"); break;
        case 45: return client.emojis.get("631211788200837152"); break;
        case 432: return client.emojis.get("631211788100436020"); break;
        case 150: return client.emojis.get("631211787907366934"); break;
        case 90: return client.emojis.get("631211788234522624"); break;
        case 104: return client.emojis.get("631211788402425856"); break;
        case 254: return client.emojis.get("631264351998967855"); break;
        case 10: return client.emojis.get("631303849537175592"); break;
        case 39: return client.emojis.get("631303850942398467"); break;
        case 64: return client.emojis.get("631303849143042052"); break;
        case 420: return client.emojis.get("631303849562603520"); break;
        case 60: return client.emojis.get("631303849482911744"); break;
        case 106: return client.emojis.get("631303849012887572"); break;
        case 20: return client.emojis.get("631303848908029966"); break;
        case 4: return client.emojis.get("631303849566797835"); break;
        case 24: return client.emojis.get("631303849562341387"); break;
        case 102: return client.emojis.get("631303851173085194"); break;
        case 429: return client.emojis.get("631303851063902221"); break;
        case 36: return client.emojis.get("631303850220978206"); break;
        case 427: return client.emojis.get("631303849570861065"); break;
        case 131: return client.emojis.get("631303849528786984"); break;
        case 223: return client.emojis.get("631303849562603530"); break;
        case 63: return client.emojis.get("631303850904780821"); break;
        case 113: return client.emojis.get("631303851055775766"); break;
        case 8: return client.emojis.get("631303850967695382"); break;
        case 154: return client.emojis.get("631306879242600458"); break;
        case 421: return client.emojis.get("631306879267766292"); break;
        case 133: return client.emojis.get("631306879120703489"); break;
        case 84: return client.emojis.get("631306883625385994"); break;
        case 163: return client.emojis.get("631306886028853278"); break;
        case 18: return client.emojis.get("631306887500922881"); break;
        case 120: return client.emojis.get("631306884086890507"); break;
        case 15: return client.emojis.get("631306885470879774"); break;
        case 236: return client.emojis.get("631306885458427924"); break;
        case 107: return client.emojis.get("631306890248454154"); break;
        case 19: return client.emojis.get("631306885441781790"); break;
        case 72: return client.emojis.get("631306890504044554"); break;
        case 54: return client.emojis.get("631306887643791360"); break;
        case 157: return client.emojis.get("631329144600264714"); break;
        case 101: return client.emojis.get("631309765221548073"); break;
        case 17: return client.emojis.get("631309766764920832"); break;
        case 75: return client.emojis.get("631309768656420864"); break;
        case 58: return client.emojis.get("631325019397685248"); break;
        case 119: return client.emojis.get("631327738808107049"); break;
        case 35: return client.emojis.get("631309773480001557"); break;
        case 50: return client.emojis.get("631309772703924224"); break;
        case 91: return client.emojis.get("631309772817432576"); break;
        case 40: return client.emojis.get("631309772767100929"); break;
        case 115: return client.emojis.get("631309772775489546"); break;
        case 245: return client.emojis.get("631322664077754369"); break;
        case 61: return client.emojis.get("631309772645466142"); break;
        case 114: return client.emojis.get("631325019427045386"); break;
        case 9: return client.emojis.get("631309772783878145"); break;
        case 31: return client.emojis.get("631309772989399060"); break;
        case 33: return client.emojis.get("631309773538852864"); break;
        case 7: return client.emojis.get("631312187671052298"); break;
        case 16: return client.emojis.get("631312189386653706"); break;
        case 26: return client.emojis.get("631312189428334602"); break;
        case 56: return client.emojis.get("631312188887269396"); break;
        case 222: return client.emojis.get("631312188547661847"); break;
        case 83: return client.emojis.get("631312189008904202"); break;
        case 6: return client.emojis.get("631330382783971369"); break;
        case 203: return client.emojis.get("631319722457169940"); break;
        case 21: return client.emojis.get("631312188862103562"); break;
        case 62: return client.emojis.get("631312189340254208"); break;
        case 53: return client.emojis.get("631312189046915074"); break;
        case 98: return client.emojis.get("631312187998076941"); break;
        case 201: return client.emojis.get("631312189189390346"); break;
        case 5: return client.emojis.get("631312189042720768"); break;
        case 29: return client.emojis.get("631312189336191016"); break;
        case 11: return client.emojis.get("631328969584541716"); break;
        case 44: return client.emojis.get("631312188950446120"); break;
        case 32: return client.emojis.get("631312187746418718"); break;
        case 41: return client.emojis.get("631319721962110995"); break;
        case 48: return client.emojis.get("631312190946803765"); break;
        case 38: return client.emojis.get("631326380776357908"); break;
        case 161: return client.emojis.get("631312189298311168"); break;
        case 143: return client.emojis.get("631313800800501810"); break;
        case 267: return client.emojis.get("631313800720547860"); break;
        case 59: return client.emojis.get("631313800888451093"); break;
        case 81: return client.emojis.get("631313803388256266"); break;
        case 517: return client.emojis.get("631326380780683314"); break;
        case 518: return client.emojis.get("631313803912544256"); break;
        case 246: return client.emojis.get("631202429563830272"); break;
        case 350: return client.emojis.get("631313803723669522"); break;
    }
},

Bans = (client, Bans) => {
    switch(Bans) {
        case 523: return client.emojis.get("663143768995921972"); break;
        case 235: return client.emojis.get("663140424449523752"); break;
        case -1: return client.emojis.get("631208516719214617"); break;
        case 164: return client.emojis.get("631204793670434847"); break; 
        case 497: return client.emojis.get("631204793813303325"); break;
        case 498: return client.emojis.get("631203770901987349"); break;
        case 142: return client.emojis.get("631204794316619796"); break;
        case 145: return client.emojis.get("631205291253301249"); break;
        case 141: return client.emojis.get("631205289613590559"); break;
        case 555: return client.emojis.get("631205289894608897"); break;
        case 516: return client.emojis.get("631205656199692289"); break;
        case 266: return client.emojis.get("631205656430379028"); break;
        case 412: return client.emojis.get("631205655499505700"); break;
        case 23: return client.emojis.get("631205940636680232"); break;
        case 79: return client.emojis.get("631205941093728257"); break;
        case 69: return client.emojis.get("631205940410187817"); break;
        case 136: return client.emojis.get("631206269507731495"); break;
        case 13: return client.emojis.get("631206269323313155"); break;
        case 78: return client.emojis.get("631206269386096640"); break;
        case 14: return client.emojis.get("631206552711462953"); break;
        case 1: return client.emojis.get("631206552661000203"); break;
        case 202: return client.emojis.get("631206552300158982"); break;
        case 43: return client.emojis.get("631206902650634240"); break;
        case 111: return client.emojis.get("631206901891465236"); break;
        case 240: return client.emojis.get("631206902130278410"); break;
        case 99: return client.emojis.get("631207540960657408"); break;
        case 103: return client.emojis.get("631207541363179541"); break;
        case 2: return client.emojis.get("631207540956332061"); break;
        case 112: return client.emojis.get("631207541501722644"); break;
        case 34: return client.emojis.get("631207540931166208"); break;
        case 27: return client.emojis.get("631207541061451823"); break;
        case 86: return client.emojis.get("631207540843216916"); break;
        case 127: return client.emojis.get("631207540881096704"); break;
        case 57: return client.emojis.get("631207540914520074"); break;
        case 25: return client.emojis.get("631207540864188436"); break;
        case 28: return client.emojis.get("631207540855799827"); break;
        case 105: return client.emojis.get("631209262605008926"); break;
        case 74: return client.emojis.get("631209264916070416"); break;
        case 238: return client.emojis.get("631209262848147466"); break;
        case 68: return client.emojis.get("631209264916201515"); break;
        case 82: return client.emojis.get("631209263360114700"); break;
        case 37: return client.emojis.get("631209262835564620"); break;
        case 96: return client.emojis.get("631209265247551521"); break;
        case 55: return client.emojis.get("631209263347269656"); break;
        case 117: return client.emojis.get("631209262827307009"); break;
        case 22: return client.emojis.get("631209265436295198"); break;
        case 30: return client.emojis.get("631209264924327937"); break;
        case 12: return client.emojis.get("631209264785915904"); break;
        case 122: return client.emojis.get("631209262399619074"); break;
        case 67: return client.emojis.get("631209262948810783"); break;
        case 110: return client.emojis.get("631209264102244385"); break;
        case 77: return client.emojis.get("631211788498632714"); break;
        case 89: return client.emojis.get("631211788586975232"); break;
        case 126: return client.emojis.get("631211786430840867"); break;
        case 134: return client.emojis.get("631211788381323264"); break;
        case 80: return client.emojis.get("631211788192710688"); break;
        case 92: return client.emojis.get("631211788259557389"); break;
        case 121: return client.emojis.get("631211786015735840"); break;
        case 42: return client.emojis.get("631211787978670094"); break;
        case 268: return client.emojis.get("631211788234391572"); break;
        case 51: return client.emojis.get("631211788096241705"); break;
        case 76: return client.emojis.get("631211788092047388"); break;
        case 85: return client.emojis.get("631211787840126977"); break;
        case 3: return client.emojis.get("631211788133728279"); break;
        case 45: return client.emojis.get("631211788200837152"); break;
        case 432: return client.emojis.get("631211788100436020"); break;
        case 150: return client.emojis.get("631211787907366934"); break;
        case 90: return client.emojis.get("631211788234522624"); break;
        case 104: return client.emojis.get("631211788402425856"); break;
        case 254: return client.emojis.get("631264351998967855"); break;
        case 10: return client.emojis.get("631303849537175592"); break;
        case 39: return client.emojis.get("631303850942398467"); break;
        case 64: return client.emojis.get("631303849143042052"); break;
        case 420: return client.emojis.get("631303849562603520"); break;
        case 60: return client.emojis.get("631303849482911744"); break;
        case 106: return client.emojis.get("631303849012887572"); break;
        case 20: return client.emojis.get("631303848908029966"); break;
        case 4: return client.emojis.get("631303849566797835"); break;
        case 24: return client.emojis.get("631303849562341387"); break;
        case 102: return client.emojis.get("631303851173085194"); break;
        case 429: return client.emojis.get("631303851063902221"); break;
        case 36: return client.emojis.get("631303850220978206"); break;
        case 427: return client.emojis.get("631303849570861065"); break;
        case 131: return client.emojis.get("631303849528786984"); break;
        case 223: return client.emojis.get("631303849562603530"); break;
        case 63: return client.emojis.get("631303850904780821"); break;
        case 113: return client.emojis.get("631303851055775766"); break;
        case 8: return client.emojis.get("631303850967695382"); break;
        case 154: return client.emojis.get("631306879242600458"); break;
        case 421: return client.emojis.get("631306879267766292"); break;
        case 133: return client.emojis.get("631306879120703489"); break;
        case 84: return client.emojis.get("631306883625385994"); break;
        case 163: return client.emojis.get("631306886028853278"); break;
        case 18: return client.emojis.get("631306887500922881"); break;
        case 120: return client.emojis.get("631306884086890507"); break;
        case 15: return client.emojis.get("631306885470879774"); break;
        case 236: return client.emojis.get("631306885458427924"); break;
        case 107: return client.emojis.get("631306890248454154"); break;
        case 19: return client.emojis.get("631306885441781790"); break;
        case 72: return client.emojis.get("631306890504044554"); break;
        case 54: return client.emojis.get("631306887643791360"); break;
        case 157: return client.emojis.get("631329144600264714"); break;
        case 101: return client.emojis.get("631309765221548073"); break;
        case 17: return client.emojis.get("631309766764920832"); break;
        case 75: return client.emojis.get("631309768656420864"); break;
        case 58: return client.emojis.get("631325019397685248"); break;
        case 119: return client.emojis.get("631327738808107049"); break;
        case 35: return client.emojis.get("631309773480001557"); break;
        case 50: return client.emojis.get("631309772703924224"); break;
        case 91: return client.emojis.get("631309772817432576"); break;
        case 40: return client.emojis.get("631309772767100929"); break;
        case 115: return client.emojis.get("631309772775489546"); break;
        case 245: return client.emojis.get("631322664077754369"); break;
        case 61: return client.emojis.get("631309772645466142"); break;
        case 114: return client.emojis.get("631325019427045386"); break;
        case 9: return client.emojis.get("631309772783878145"); break;
        case 31: return client.emojis.get("631309772989399060"); break;
        case 33: return client.emojis.get("631309773538852864"); break;
        case 7: return client.emojis.get("631312187671052298"); break;
        case 16: return client.emojis.get("631312189386653706"); break;
        case 26: return client.emojis.get("631312189428334602"); break;
        case 56: return client.emojis.get("631312188887269396"); break;
        case 222: return client.emojis.get("631312188547661847"); break;
        case 83: return client.emojis.get("631312189008904202"); break;
        case 6: return client.emojis.get("631330382783971369"); break;
        case 203: return client.emojis.get("631319722457169940"); break;
        case 21: return client.emojis.get("631312188862103562"); break;
        case 62: return client.emojis.get("631312189340254208"); break;
        case 53: return client.emojis.get("631312189046915074"); break;
        case 98: return client.emojis.get("631312187998076941"); break;
        case 201: return client.emojis.get("631312189189390346"); break;
        case 5: return client.emojis.get("631312189042720768"); break;
        case 29: return client.emojis.get("631312189336191016"); break;
        case 11: return client.emojis.get("631328969584541716"); break;
        case 44: return client.emojis.get("631312188950446120"); break;
        case 32: return client.emojis.get("631312187746418718"); break;
        case 41: return client.emojis.get("631319721962110995"); break;
        case 48: return client.emojis.get("631312190946803765"); break;
        case 38: return client.emojis.get("631326380776357908"); break;
        case 161: return client.emojis.get("631312189298311168"); break;
        case 143: return client.emojis.get("631313800800501810"); break;
        case 267: return client.emojis.get("631313800720547860"); break;
        case 59: return client.emojis.get("631313800888451093"); break;
        case 81: return client.emojis.get("631313803388256266"); break;
        case 517: return client.emojis.get("631326380780683314"); break;
        case 518: return client.emojis.get("631313803912544256"); break;
        case 246: return client.emojis.get("631202429563830272"); break;
        case 350: return client.emojis.get("631313803723669522"); break;
    }
},

Teams = (client, cores) => {
    switch(cores) {
        case 100: return "Vermelho"; break;
        case 200: return "Azul"; break;
    }
},

Spells = (client, imgs) => {
    switch(imgs) {
        case 1: return client.emojis.get("631195262194417694"); break;
        case 7: return client.emojis.get("631195264371130391"); break;
        case 3: return client.emojis.get("631195262085234721"); break;
        case 4: return client.emojis.get("631195263855362081"); break;
        case 6: return client.emojis.get("631195264400490507"); break;
        case 11: return client.emojis.get("631195264501284889"); break;
        case 12: return client.emojis.get("631195264832634880"); break;
        case 13: return client.emojis.get("631195262370709525"); break;
        case 14: return client.emojis.get("631195264815988747"); break;
        case 21: return client.emojis.get("631195261787439106"); break;
        case 32: return client.emojis.get("631195261968056340"); break;
    }
},

Freeweek = (client, free) => {
    switch(free) {
        case 523: return client.emojis.get("663143768995921972"); break;
        case 235: return client.emojis.get("663140424449523752"); break;
        case -1: return client.emojis.get("631208516719214617"); break;
        case 164: return client.emojis.get("631204793670434847"); break; 
        case 497: return client.emojis.get("631204793813303325"); break;
        case 498: return client.emojis.get("631203770901987349"); break;
        case 142: return client.emojis.get("631204794316619796"); break;
        case 145: return client.emojis.get("631205291253301249"); break;
        case 141: return client.emojis.get("631205289613590559"); break;
        case 555: return client.emojis.get("631205289894608897"); break;
        case 516: return client.emojis.get("631205656199692289"); break;
        case 266: return client.emojis.get("631205656430379028"); break;
        case 412: return client.emojis.get("631205655499505700"); break;
        case 23: return client.emojis.get("631205940636680232"); break;
        case 79: return client.emojis.get("631205941093728257"); break;
        case 69: return client.emojis.get("631205940410187817"); break;
        case 136: return client.emojis.get("631206269507731495"); break;
        case 13: return client.emojis.get("631206269323313155"); break;
        case 78: return client.emojis.get("631206269386096640"); break;
        case 14: return client.emojis.get("631206552711462953"); break;
        case 1: return client.emojis.get("631206552661000203"); break;
        case 202: return client.emojis.get("631206552300158982"); break;
        case 43: return client.emojis.get("631206902650634240"); break;
        case 111: return client.emojis.get("631206901891465236"); break;
        case 240: return client.emojis.get("631206902130278410"); break;
        case 99: return client.emojis.get("631207540960657408"); break;
        case 103: return client.emojis.get("631207541363179541"); break;
        case 2: return client.emojis.get("631207540956332061"); break;
        case 112: return client.emojis.get("631207541501722644"); break;
        case 34: return client.emojis.get("631207540931166208"); break;
        case 27: return client.emojis.get("631207541061451823"); break;
        case 86: return client.emojis.get("631207540843216916"); break;
        case 127: return client.emojis.get("631207540881096704"); break;
        case 57: return client.emojis.get("631207540914520074"); break;
        case 25: return client.emojis.get("631207540864188436"); break;
        case 28: return client.emojis.get("631207540855799827"); break;
        case 105: return client.emojis.get("631209262605008926"); break;
        case 74: return client.emojis.get("631209264916070416"); break;
        case 238: return client.emojis.get("631209262848147466"); break;
        case 68: return client.emojis.get("631209264916201515"); break;
        case 82: return client.emojis.get("631209263360114700"); break;
        case 37: return client.emojis.get("631209262835564620"); break;
        case 96: return client.emojis.get("631209265247551521"); break;
        case 55: return client.emojis.get("631209263347269656"); break;
        case 117: return client.emojis.get("631209262827307009"); break;
        case 22: return client.emojis.get("631209265436295198"); break;
        case 30: return client.emojis.get("631209264924327937"); break;
        case 12: return client.emojis.get("631209264785915904"); break;
        case 122: return client.emojis.get("631209262399619074"); break;
        case 67: return client.emojis.get("631209262948810783"); break;
        case 110: return client.emojis.get("631209264102244385"); break;
        case 77: return client.emojis.get("631211788498632714"); break;
        case 89: return client.emojis.get("631211788586975232"); break;
        case 126: return client.emojis.get("631211786430840867"); break;
        case 134: return client.emojis.get("631211788381323264"); break;
        case 80: return client.emojis.get("631211788192710688"); break;
        case 92: return client.emojis.get("631211788259557389"); break;
        case 121: return client.emojis.get("631211786015735840"); break;
        case 42: return client.emojis.get("631211787978670094"); break;
        case 268: return client.emojis.get("631211788234391572"); break;
        case 51: return client.emojis.get("631211788096241705"); break;
        case 76: return client.emojis.get("631211788092047388"); break;
        case 85: return client.emojis.get("631211787840126977"); break;
        case 3: return client.emojis.get("631211788133728279"); break;
        case 45: return client.emojis.get("631211788200837152"); break;
        case 432: return client.emojis.get("631211788100436020"); break;
        case 150: return client.emojis.get("631211787907366934"); break;
        case 90: return client.emojis.get("631211788234522624"); break;
        case 104: return client.emojis.get("631211788402425856"); break;
        case 254: return client.emojis.get("631264351998967855"); break;
        case 10: return client.emojis.get("631303849537175592"); break;
        case 39: return client.emojis.get("631303850942398467"); break;
        case 64: return client.emojis.get("631303849143042052"); break;
        case 420: return client.emojis.get("631303849562603520"); break;
        case 60: return client.emojis.get("631303849482911744"); break;
        case 106: return client.emojis.get("631303849012887572"); break;
        case 20: return client.emojis.get("631303848908029966"); break;
        case 4: return client.emojis.get("631303849566797835"); break;
        case 24: return client.emojis.get("631303849562341387"); break;
        case 102: return client.emojis.get("631303851173085194"); break;
        case 429: return client.emojis.get("631303851063902221"); break;
        case 36: return client.emojis.get("631303850220978206"); break;
        case 427: return client.emojis.get("631303849570861065"); break;
        case 131: return client.emojis.get("631303849528786984"); break;
        case 223: return client.emojis.get("631303849562603530"); break;
        case 63: return client.emojis.get("631303850904780821"); break;
        case 113: return client.emojis.get("631303851055775766"); break;
        case 8: return client.emojis.get("631303850967695382"); break;
        case 154: return client.emojis.get("631306879242600458"); break;
        case 421: return client.emojis.get("631306879267766292"); break;
        case 133: return client.emojis.get("631306879120703489"); break;
        case 84: return client.emojis.get("631306883625385994"); break;
        case 163: return client.emojis.get("631306886028853278"); break;
        case 18: return client.emojis.get("631306887500922881"); break;
        case 120: return client.emojis.get("631306884086890507"); break;
        case 15: return client.emojis.get("631306885470879774"); break;
        case 236: return client.emojis.get("631306885458427924"); break;
        case 107: return client.emojis.get("631306890248454154"); break;
        case 19: return client.emojis.get("631306885441781790"); break;
        case 72: return client.emojis.get("631306890504044554"); break;
        case 54: return client.emojis.get("631306887643791360"); break;
        case 157: return client.emojis.get("631329144600264714"); break;
        case 101: return client.emojis.get("631309765221548073"); break;
        case 17: return client.emojis.get("631309766764920832"); break;
        case 75: return client.emojis.get("631309768656420864"); break;
        case 58: return client.emojis.get("631325019397685248"); break;
        case 119: return client.emojis.get("631327738808107049"); break;
        case 35: return client.emojis.get("631309773480001557"); break;
        case 50: return client.emojis.get("631309772703924224"); break;
        case 91: return client.emojis.get("631309772817432576"); break;
        case 40: return client.emojis.get("631309772767100929"); break;
        case 115: return client.emojis.get("631309772775489546"); break;
        case 245: return client.emojis.get("631322664077754369"); break;
        case 61: return client.emojis.get("631309772645466142"); break;
        case 114: return client.emojis.get("631325019427045386"); break;
        case 9: return client.emojis.get("631309772783878145"); break;
        case 31: return client.emojis.get("631309772989399060"); break;
        case 33: return client.emojis.get("631309773538852864"); break;
        case 7: return client.emojis.get("631312187671052298"); break;
        case 16: return client.emojis.get("631312189386653706"); break;
        case 26: return client.emojis.get("631312189428334602"); break;
        case 56: return client.emojis.get("631312188887269396"); break;
        case 222: return client.emojis.get("631312188547661847"); break;
        case 83: return client.emojis.get("631312189008904202"); break;
        case 6: return client.emojis.get("631330382783971369"); break;
        case 203: return client.emojis.get("631319722457169940"); break;
        case 21: return client.emojis.get("631312188862103562"); break;
        case 62: return client.emojis.get("631312189340254208"); break;
        case 53: return client.emojis.get("631312189046915074"); break;
        case 98: return client.emojis.get("631312187998076941"); break;
        case 201: return client.emojis.get("631312189189390346"); break;
        case 5: return client.emojis.get("631312189042720768"); break;
        case 29: return client.emojis.get("631312189336191016"); break;
        case 11: return client.emojis.get("631328969584541716"); break;
        case 44: return client.emojis.get("631312188950446120"); break;
        case 32: return client.emojis.get("631312187746418718"); break;
        case 41: return client.emojis.get("631319721962110995"); break;
        case 48: return client.emojis.get("631312190946803765"); break;
        case 38: return client.emojis.get("631326380776357908"); break;
        case 161: return client.emojis.get("631312189298311168"); break;
        case 143: return client.emojis.get("631313800800501810"); break;
        case 267: return client.emojis.get("631313800720547860"); break;
        case 59: return client.emojis.get("631313800888451093"); break;
        case 81: return client.emojis.get("631313803388256266"); break;
        case 517: return client.emojis.get("631326380780683314"); break;
        case 518: return client.emojis.get("631313803912544256"); break;
        case 246: return client.emojis.get("631202429563830272"); break;
        case 350: return client.emojis.get("631313803723669522"); break;
    }             
},

fila = (id) => {
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

module.exports = {
    checkSkin,
    Bans,
    Teams,
    Spells,
    Freeweek,
    IDtoName,
    checkItem,
    fila
}

//lucas é o bixo mesmo :v