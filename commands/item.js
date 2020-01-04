const Discord = require('discord.js')
const client = new Discord.Client()
const kayn = require('./kayn')

exports.run = async (client, message, args) => {
        if(args[0]){
            kayn.DDragon.Item.list()
            .region(REGIONS.BRAZIL)
            .version('9.20.1')
            .callback(function (error, Item) {
                
            function item(){           
                    if(args[0] == 'botas') {
                        if(args[1] == 'da') {
                            if(args[2]== 'velocidade') return '1001'
                        }
                    }
                    if(args[0] == 'Amuleto') {
                        if(args[1] == 'da') {
                            if(args[2]=='fada') return '1004'
                        }
                    }
                    if(args[0]=='Perola'){
                        if(args[1]=='do'){
                            if(args[2]== 'rejuvenescimento') return '1006'
                        }
                    }
                    if(args[0]=='Cinto'){
                        if(args[1]=='do'){
                            if(args[2]=='gigante') return '1011'
                        }
                    }
                    if(args[0]=='Capa'){
                        if(args[1]=='da'){
                            if(args[2]=='agilidade') return '1018'
                        }
                    }
                    if(args[0]== 'Varinha'){
                        if(args[1]== 'explosiva') return '1026'
                    }
                    if (args[0]=='Cristal'){
                        if(args[1]=='de'){
                            if(args[2]=='safira') return '1027'
                        }
                    }
                    if (args[0]=='Cristal'){
                        if(args[1]=='de'){
                            if(args[2]=='rubi') return '1028'
                        }
                    }
                    if (args[0]=='Couraça'){
                        if(args[1]=='de'){
                            if(args[2]=='pano') return '1029'
                        }
                    }
                    if (args[0]=='Cota'){
                        if(args[1]=='de'){
                            if(args[2]=='malha') return '1031'
                        }
                    }
                    if (args[0]=='Manto'){
                        if(args[1]=='anula-magia') return '1033' 
                    }
                    if (args[0]=='Espada'){
                            if(args[1]=='longa') return '1036'
                    }
                    if (args[0]=='Picareta') return '1037'
                    if (args[0]=='Espada'){
                        if(args[1]=='gpc') return '1038'
                    }
                    if (args[0]=='Talismã'){
                        if(args[1]=='do'){
                            if(args[2]=='caçador') return '1039'
                        }
                    }
                    if (args[0]=='Machete'){
                        if(args[1]=='do'){
                            if(args[2]=='caçador') return '1041'
                        }
                    }
                    if (args[0]=='Adaga') return '1042'
                    if (args[0]=='Arco'){
                        if(args[1]=='recurvo') return '1043'        
                    }
                    if (args[0]=='Luvas'){
                        if(args[1]=='da'){
                            if(args[2]=='pancadaria') return '1051'
                        }
                    }
                    if (args[0]=='Tomo'){
                        if(args[1]=='amplificador') return '1052'               
                    }
                    if (args[0]=='Cetro'){
                        if(args[1]=='vampírico') return '1053'
                    }
                    if (args[0]=='Escuro'){
                        if(args[1]=='de'){
                            if(args[2]=='doran') return '1054'
                        }
                    }
                    if (args[0]=='Lâmina'){
                        if(args[1]=='de'){
                            if(args[2]=='doran') return '1055'
                        }
                    }
                    if (args[0]=='Anel'){
                        if(args[1]=='de'){
                            if(args[2]=='doran') return '1056'
                        }
                    }
                    if (args[0]=='Capa'){
                        if(args[1]=='negatron') return '1057'              
                    }
                    if (args[0]=='Bastão'){
                        if(args[1]=='desnecessariamente'){
                            if(args[2]=='grande') return '1058'
                        }
                    }
                    if (args[0]=='Cetro'){
                        if(args[1]=='vampírico'){
                            if(args[2]=='espacial') return '1059'
                        }
                    }
                    if (args[0]=='Lacre'){
                        if(args[1]=='negro') return '1082'              
                    }
                    if (args[0]=='Abatedora') return '1083'   
                    if (args[0]=='Encantamento:'){
                        if(args[1]=='guerreiro') return '1400'
                    }
                    if (args[0]=='Encatamento:'){
                        if(args[1]=='titã'){
                            if(args[2]=='ardente') return '1401'
                        }
                    }
                    if (args[0]=='Encantamento:'){
                        if(args[1]=='ecos'){
                            if(args[2]=='rúnicos') return '1402'
                        }
                    }
                    if (args[0]=='Encantamento:'){
                        if(args[1]=='navalha'){
                            if(args[2]=='sangrenta') return '1416'
                        }
                    }
                    if (args[0]=='Poção'){
                        if(args[1]=='de'){
                            if(args[2]=='vida') return '2003'
                        }
                    }
                    if (args[0]=='Poção'){
                        if(args[1]=='de'){
                            if(args[2]=='mana') return '2004'
                        }
                    }
                    if (args[0]=='Biscoito'){
                        if(args[1]=='de'){
                            if(args[2]=='rejuvenescimento') {
                                if(args[3]=='total') return '2009'
                            }
                        }
                    }
                    if (args[0]=='Biscoito'){
                        if(args[1]=='total'){
                            if(args[2]=='da') {
                                if(args[3]=='determinação') {
                                    if(args[4]== 'eterna') return '2010'
                                }
                            }
                        }
                    }
                    if (args[0]=='Elixir'){
                        if(args[1]=='da'){
                            if(args[2]=='habilidade') return '2011'
                        }
                    }
                    if (args[0]=='Biscoito'){
                        if(args[1]=='do'){
                            if(args[2]=='rejuvenescimento')  return '2012' 
                        }
                    }
                    if (args[0]=='Essência'){
                        if(args[1]=='do'){
                            if(args[2]=='oráculo') return '2013'
                        }
                    }
                    if (args[0]=='Estilhaço'){
                        if(args[1]=='de'){
                            if(args[2]=='kircheis') return '2015'
                        }
                    }
                    if (args[0]=='Poção'){
                        if(args[1]=='com'){
                            if(args[2]=='refil') return '2031'
                        }
                    }
                    if (args[0]=='Poção'){
                        if(args[1]=='corrupta') return '2033'               
                    }
                    if (args[0]=='Sentinela'){
                        if(args[1]=='do'){
                            if(args[2]=='explorador') return '2050'
                        }
                    }
                    if (args[0]=='Berrante'){
                        if(args[1]=='do'){
                            if(args[2]=='guardião') return '2051'
                        }
                    }
                    if (args[0]=='Poritos') return '2052' 
                    if (args[0]=='Manto'){
                        if(args[1]=='de'){
                            if(args[2]=='rapina') return '2053'
                        }
                    }
                    if (args[0]=='Poritos'){
                        if(args[1]=='diet')return '2054'              
                    }        
                    if (args[0]=='Sentinela'){
                        if(args[1]=='de'){
                            if(args[2]=='controle') return '2055'
                        }
                    }
                    if (args[0]=='Sentinela'){
                        if(args[1]=='invisível'){
                            if(args[2]=='roubada') return '2056'
                        }
                    }
                    if (args[0]=='Sentinela'){
                        if(args[1]=='de'){
                            if(args[2]=='visão') {
                                if(args[3]=='penetrante') return '2057'
                            }
                        }
                    }
                    if (args[0]=='Elixir'){
                        if(args[1]=='de'){
                            if(args[2]=='ferro') return '2058'
                        }
                    }
                    if (args[0]=='Elixir'){
                        if(args[1]=='da'){
                            if(args[2]=='feitiçaria') return '2059'
                        }
                    }
                    if (args[0]=='Elixir'){
                        if(args[1]=='da'){
                            if(args[2]=='ira') return '2060'
                        }
                    }
                    if (args[0]=='Poção'){
                        if(args[1]=='de'){
                            if(args[2]=='vida'){
                                if(args[3]=='roubada') return '2061'
                            }
                        }
                    }
                    if (args[0]=='Poção'){
                        if(args[1]=='do'){
                            if(args[2]=='ladino'){
                                if(args[3]=='roubada') return '2062'
                            }
                        }
                    }
                    if (args[0]=='Devaneio'){
                        if(args[1]=='de'){
                            if(args[2]=='shurelya') return '2065'
                        }
                    }
                    if (args[0]=='Saco'){
                        if(args[1]=='de'){
                            if(args[2]=='ouro') return '2319'
                        }
                    }
                    if (args[0]=='Pulverizador'){
                        if(args[1]=='de'){
                            if(args[2]=='tropas') return '2403'
                        }
                    }
                    if (args[0]=='Cronômetro'){
                        if(args[1]=='iniciado') return '2419'              
                    }
                    if (args[0]=='Cronômetro') return '2420'
                    if (args[0]=='Cronômetro'){
                        if(args[1]=='quebrado') return '2421'
                    }
                    if (args[0]=='Botas'){
                        if(args[1]=='levementes'){
                            if(args[2]=='mágicas') return '2422'
                        }
                    }
                    if (args[0]=='Máscara'){
                        if(args[1]=='abissal') return '3001'
                    }
                    if (args[0]=='Cajado'){
                        if(args[1]=='do'){
                            if(args[2]=='arcanjo') return '3003'
                        }
                    }
                    if (args[0]=='Manamune') return '3004'
                    if (args[0]=='Acerto'){
                        if(args[1]=='de'){
                            if(args[2]=='contas') {
                                if(args[3]=='de'){
                                    if(args[4]=='atma') return '3005'
                                }
                            }
                        }
                    }
                    if (args[0]=='Grevas'){
                        if(args[1]=='do'){
                            if(args[2]=='berserker') return '3006'
                        }
                    }
                    if (args[0]=='Botas'){
                        if(args[1]=='da'){
                            if(args[2]=='rapidez') return '3009'
                        }
                    }
                    if (args[0]=='Cajado'){
                        if(args[1]=='do'){
                            if(args[2]=='arcanjo') {
                                if(args[3]=='(Carga'){
                                    if(args[4]=='rápida)') return '3007'
                                }
                            }
                        }
                    }
                    if (args[0]=='Manamune'){
                        if(args[1]=='(Carga'){
                            if(args[2]=='rápida)') return '3008'
                        }
                    }
                    if (args[0]=='Catalisador'){
                        if(args[1]=='das'){
                            if(args[2]=='eras') return '3010'
                        }
                    }
                    if (args[0]=='Sapatos'){
                        if(args[1]=='do'){
                            if(args[2]=='feiticeiro') return '3020'
                        }
                    }
                    if (args[0]=='Malho'){
                        if(args[1]=='congelado') return '3022'
                    }
                    if (args[0]=='Proteção'){
                        if(args[1]=='glacial') return '3024'
                    }
                    if (args[0]=='Manopla'){
                        if(args[1]=='dos'){
                            if(args[2]=='glacinatas') return '3025'
                        }
                    }
                    if (args[0]=='Anjo'){
                        if(args[1]=='guardião') return '3026'
                    }
                    if (args[0]=='Bastão'){
                        if(args[1]=='das'){
                            if(args[2]=='eras') return '3027'
                        }
                    }
                    if (args[0]=='Cálice'){
                        if(args[1]=='da'){
                            if(args[2]=='harmonia') return '3028'
                        }
                    }
                    if (args[0]=='Bastão'){
                        if(args[1]=='das'){
                            if(args[2]=='eras') {
                                if(args[3]=='(Carga'){
                                    if(args[4]=='rápida)') return '3029'
                                }
                            }
                        }
                    }
                    if (args[0]=='Hextec'){
                        if(args[1]=='GLP-800') return '3030'
                    }
                    if (args[0]=='Gume'){
                        if(args[1]=='do'){
                            if(args[2]=='infinito') return '3031'
                        }
                    }
                    if (args[0]=='Lembrete'){
                        if(args[1]=='mortal') return '3033'
                    }
                    if (args[0]=='Último'){
                        if(args[1]=='susurro') return '3035'
                    }
                    if (args[0]=='Lembranças'){
                        if(args[1]=='do'){
                            if(args[2]=='lorde') {
                                if(args[3]=='dominik') return '3036'
                            }
                        }
                    }
                    if (args[0]=='Abraço'){
                        if(args[1]=='de'){
                            if(args[2]=='seraph') return '3040'
                        }
                    }
                    if (args[0]=='Ladrão'){
                        if(args[1]=='de'){
                            if(args[2]=='almas') {
                                if(args[3]=='de'){
                                    if(args[4]=='mejai') return '3041'
                                }
                            }
                        }
                    }
                    if (args[0]=='Muramana') return '3042'
                    if (args[0]=='Fago') return '3044'
                    if (args[0]=='Dançarina'){
                        if(args[1]=='fantasma') return '3046'
                    }
                    if (args[0]=='Tabi'){
                        if(args[1]=='ninja') return '3047'
                    }
                    if (args[0]=='Convergência'){
                        if(args[1]=='de'){
                            if(args[2]=='zeke') return '3050'
                        }
                    }
                    if (args[0]=='Punho'){
                        if(args[1]=='de'){
                            if(args[2]=='jaurim') return '3052'
                        }
                    }
                    if (args[0]=='Fúria'){
                        if(args[1]=='de'){
                            if(args[2]=='sterak') return '3053'
                        }
                    }
                    if (args[0]=='Mergulhadora') return '3056'
                    if (args[0]=='Fulgor') return '3057'
                    if (args[0]=='Semblante'){
                        if(args[1]=='espiritual') return '3065'
                    }
                    if (args[0]=='Gema'){
                        if(args[1]=='ardente') return '3003'
                    }
                    if (args[0]=='Capa'){
                        if(args[1]=='de'){
                            if(args[2]=='fogo') {
                                if(args[3]=='solar') return '3068'
                            }
                        }
                    }
                    if (args[0]=='Resquício'){
                        if(args[1]=='dos'){
                            if(args[2]=='ascendentes') return '3069'
                        }
                    }
                    if (args[0]=='Lágrima'){
                        if(args[1]=='da'){
                            if(args[2]=='deusa') return '3070'
                        }
                    }
                    if (args[0]=='Cutelo'){
                        if(args[1]=='negro') return '3071'
                    }
                    if (args[0]=='Sedenta'){
                        if(args[1]=='por'){
                            if(args[2]=='sangue') return '3072'
                        }
                    }
                    if (args[0]=='Lágrima'){
                        if(args[1]=='da'){
                            if(args[2]=='deusa') {
                                if(args[3]=='(carga'){
                                    if(args[4]=='rápida)') return '3073'
                                }
                            }
                        }
                    }
                    if (args[0]=='Hidra'){
                        if(args[1]=='raivosa') return '3074'
                    }
                    if (args[0]=='Armadura'){
                        if(args[1]=='de'){
                            if(args[2]=='espinhos') return '3075'
                        }
                    }
                    if (args[0]=='Colete'){
                        if(args[1]=='espinhoso') return '3076'
                    }
                    if (args[0]=='Tiamat') return '3077'
                    if (args[0]=='Força'){
                        if(args[1]=='da'){
                            if(args[2]=='trindade') return '3078'
                        }
                    }
                    if (args[0]=='Sedenta'){
                        if(args[1]=='por'){
                            if(args[2]=='sangue') {
                                if(args[3]=='espacial') return '3080'
                            }
                        }
                    }
                    if (args[0]=='Carapaça'){
                        if(args[1]=='do'){
                            if(args[2]=='vigia') return '3082'
                        }
                    }
                    if (args[0]=='Armadura'){
                        if(args[1]=='de'){
                            if(args[2]=='warmog') return '3083'
                        }
                    }
                    if (args[0]=='Armadura'){
                        if(args[1]=='sangrenta'){
                            if(args[2]=='do') {
                                if(args[3]=='suserano') return '3084'
                            }
                        }
                    }
                    if (args[0]=='Furacão'){
                        if(args[1]=='de'){
                            if(args[2]=='runaan') return '3085'
                        }
                    }
                    if (args[0]=='Zelo') return '3086'
                    if (args[0]=='Faca'){
                        if(args[1]=='de'){
                            if(args[2]=='statikk') return '3087'
                        }
                    }
                    if (args[0]=='Capuz'){
                        if(args[1]=='da'){
                            if(args[2]=='morte') {
                                if(args[3]=='de'){
                                    if(args[4]=='rabadon') return '3089'
                                }
                            }
                        }
                    }
                    if (args[0]=='Chapéu'){
                        if(args[1]=='mágico'){
                            if(args[2]=='de') {
                                if(args[3]=='wooglet') return '3090'
                            }
                        }
                    }
                    if (args[0]=='Limite'){
                        if(args[1]=='da'){
                            if(args[2]=='razão') return '3091'
                        }
                    }
                    if (args[0]=='Resquício'){
                        if(args[1]=='dos'){
                            if(args[2]=='observadores') return '3092'
                        }
                    }
                    if (args[0]=='Canhão'){
                        if(args[1]=='fumegante') return '3094'
                    }
                    if (args[0]=='Chuva'){
                        if(args[1]=='de'){
                            if(args[2]=='canivete') return '3095'
                        }
                    }
                    if (args[0]=='Medalhão'){
                        if(args[1]=='do'){
                            if(args[2]=='nômade') return '3096'
                        }
                    }
                    if (args[0]=='Braçadeira'){
                        if(args[1]=='de'){
                            if(args[2]=='targon') return '3097'
                        }
                    }
                    if (args[0]=='Presas'){
                        if(args[1]=='gélidas') return '3098'
                    }
                    if (args[0]=='Perdição'){
                        if(args[1]=='de'){
                            if(args[2]=='lich') return '3100'
                        }
                    }
                    if (args[0]=='Ferrão') return '3101'
                    if (args[0]=='Véu'){
                        if(args[1]=='de'){
                            if(args[2]=='banshee') return '3102'
                        }
                    }
                    if (args[0]=='Saqueadora'){
                        if(args[1]=='do'){
                            if(args[2]=='lorde') {
                                if(args[3]=='van'){
                                    if(args[4]=='damm') return '3104'
                                }
                            }
                        }
                    }
                    if (args[0]=='Égide'){
                        if(args[1]=='da'){
                            if(args[2]=='legião') return '3105'
                        }
                    }
                    if (args[0]=='Redenção') return '3107'
                    if (args[0]=='Códex'){
                        if(args[1]=='demoníaco')return '3108'
                    }
                    if (args[0]=='Coração'){
                        if(args[1]=='congelado') return '3110'
                    }
                    if (args[0]=='Passos'){
                        if(args[1]=='de'){
                            if(args[2]=='mercúrio') return '3111'
                        }
                    }
                    if (args[0]=='Orbe'){
                        if(args[1]=='do'){
                            if(args[2]=='guardião') return '3112'
                        }
                    }
                    if (args[0]=='Cintilação'){
                        if(args[1]=='etérea') return '3113'
                    }
                    if (args[0]=='Ídolo'){
                        if(args[1]=='proibido') return '3114'
                    }
                    if (args[0]=='Dente'){
                        if(args[1]=='de'){
                            if(args[2]=='nashor') return '3115'
                        }
                    }
                    if (args[0]=='Cetro'){
                        if(args[1]=='de'){
                            if(args[2]=='cristal') {
                                if(args[3]=='de'){
                                    if(args[4]=='rylai') return '3116'
                                }
                            }
                        }
                    }
                    if (args[0]=='Botas'){
                        if(args[1]=='da'){
                            if(args[2]=='mobilidade') return '3117'
                        }
                    }
                    if (args[0]=='Juramento'){
                        if(args[1]=='do'){
                            if(args[2]=='cavaleiro') {
                                if(args[3]=='espacial') return '3118'
                            }
                        }
                    }
                    if (args[0]=='Machadinha'){
                        if(args[1]=='sinistra') return '3122'
                    }
                    if (args[0]=='Chamado'){
                        if(args[1]=='do'){
                            if(args[2]=='carrasco') return '3123'
                        }
                    }
                    if (args[0]=='Lâmina'){
                        if(args[1]=='da'){
                            if(args[2]=='fúria') {
                                if(args[3]=='de'){
                                    if(args[4]=='guinsoo') return '3124'
                                }
                            }
                        }
                    }
                    if (args[0]=='Sufocamento'){
                            if(args[1]=='ígneo') return '3128'
                    }
                    if (args[0]=='Espada'){
                        if(args[1]=='do'){
                            if(args[2]=='divino') return '3131'
                        }
                    }
                    if (args[0]=='Martelo'){
                        if(args[1]=='de'){
                            if(args[2]=='guerra') {
                                if(args[3]=='de') {
                                    if(args[4]=='caulfield') return '3133'
                                }
                            }
                        }
                    }
                    if (args[0]=='Punhal'){
                        if(args[1]=='serrilhado') return '3134'
                    }
                    if (args[0]=='Cajado'){
                        if(args[1]=='do'){
                            if(args[2]=='vazio') return '3135'
                        }
                    }
                    if (args[0]=='Máscara'){
                        if(args[1]=='assustadora') return '3136'
                    }
                    if (args[0]=='Espada'){
                        if(args[1]=='dervixe') return '3137'
                    }
                    if (args[0]=='Cimitarra'){
                        if(args[1]=='mercurial') return '3139'
                    }
                    if (args[0]=='Bandana'){
                        if(args[1]=='de'){
                            if(args[2]=='mercúrio') return '3140'
                        }
                    }
                    if (args[0]=='Lâmina'){
                        if(args[1]=='fantasma'){
                            if(args[2]=='de') {
                                if(args[3]=='youmuu') return '3142'
                            }
                        }
                    }
                    if (args[0]=='Presságio'){
                        if(args[1]=='de'){
                            if(args[2]=='randuin') return '3143'
                        }
                    }
                    if (args[0]=='Alfange'){
                        if(args[1]=='das'){
                            if(args[2]=='águas') {
                                if(args[3]=='de') {
                                    if(args[4]=='sentina') return '3144'
                                }
                            }
                        }
                    }
                    if (args[0]=='Revólver'){
                        if(args[1]=='hextec') return '3145'
                    }
                    if (args[0]=='Pistola'){
                        if(args[1]=='laminar'){
                            if(args[2]=='hextec') return '3146'
                        }
                    }
                    if (args[0]=='Crepúsculo'){
                        if(args[1]=='de'){
                            if(args[2]=='draktharr') return '3147'
                        }
                    }
                    if (args[0]=='Pistola'){
                        if(args[1]=='laminar'){
                            if(args[2]=='hextec') {
                                if(args[3]=='espacial') return '3148'
                            }
                        }
                    }
                    if (args[0]=='Espada'){
                        if(args[1]=='do'){
                            if(args[2]=='rei') {
                                if(args[3]=='destruído'){
                                    if(args[4]=='espacial') return '3149'
                                }
                            }
                        }
                    }
                    if (args[0]=='Tormento'){
                        if(args[1]=='de'){
                            if(args[2]=='liandry') return '3151'
                        }
                    }
                    if (args[0]=='Protocinturão-01'){
                            if(args[1]=='hextec') return '3152'
                    }
                    if (args[0]=='Espada'){
                        if(args[1]=='do'){
                            if(args[2]=='rei') {
                                if(args[3]=='destruído') return '3153'
                            }
                        }
                    }
                    if (args[0]=='Hexdrinker') return '3155'
                    if (args[0]=='Mandíbula'){
                        if(args[1]=='de'){
                            if(args[2]=='malmortius') return '3156'
                        }
                    }
                    if (args[0]=='Ampulheta'){
                        if(args[1]=='de'){
                            if(args[2]=='zhonya') return '3157'
                        }
                    }
                    if (args[0]=='Botas'){
                        if(args[1]=='ionianas'){
                            if(args[2]=='da') {
                                if(args[3]=='lucidez')  return '3158'
                            }
                        }
                    }
                    if (args[0]=='Lança'){
                        if(args[1]=='de'){
                            if(args[2]=='shojin') return '3161'
                        }
                    }
                    if (args[0]=='Morellonomicon' || args[0]=='Morello') return '3165'
                    if (args[0]=='Lâmina'){
                        if(args[1]=='enfeitiçada'){
                            if(args[2]=='moonflair') return '3170'
                        }
                    }
                    if (args[0]=='Zéfiro') return '3172'
                    if (args[0]=='Graal'){
                        if(args[1]=='profano'){
                            if(args[2]=='de') {
                                if(args[3]=='athene') return '3174'
                            }
                        }
                    }
                    if (args[0]=='Cabeça'){
                        if(args[1]=='de'){
                            if(args[2]=='khazix') return '3175'
                        }
                    }
                    if (args[0]=='Lâmina'){
                        if(args[1]=='sanguinária') return '3181'
                    }
                    if (args[0]=='Portador'){
                        if(args[1]=='da'){
                            if(args[2]=='luz') return '3185'
                        }
                    }
                    if (args[0]=='Analisador'){
                        if(args[1]=='arcano') return '3187'
                    }
                    if (args[0]=='Medalhão'){
                        if(args[1]=='dos'){
                            if(args[2]=='solari'){
                                if(args[3]=='de'){
                                    if(args[4]=='ferro') return '3190'
                                }
                            }
                        }
                    }
                    if (args[0]=='Armaguarda'){
                        if(args[1]=='da'){
                            if(args[2]=='caçadora') return '3191'
                        }
                    }
                    if (args[0]=='Elmo'){
                        if(args[1]=='adaptativo') return '3194'
                    }
                    if (args[0]=='Núcleo'){
                        if(args[1]=='hex'){
                            if(args[2]=='mk-1') return '3196'
                        }
                    }
                    if (args[0]=='Núcleo'){
                        if(args[1]=='hex'){
                            if(args[2]=='mk-2') return '3197'
                        }
                    }
                    if (args[0]=='Núcleo'){
                        if(args[1]=='hex'){
                            if(args[2]=='perfeito') return '3198'
                        }
                    }
                    if (args[0]=='Núcleo'){
                        if(args[1]=='hex'){
                            if(args[2]=='protótipo') return '3200'
                        }
                    }
                    if (args[0]=='Capuz'){
                        if(args[1]=='do'){
                            if(args[2]=='espectro') return '3211'
                        }
                    }
                    if (args[0]=='Cadinho'){
                        if(args[1]=='do'){
                            if(args[2]=='mikael') return '3222'
                        }
                    }
                    if (args[0]=='Eco'){
                        if(args[1]=='de'){
                            if(args[2]=='luden') return '3285'
                        }
                    }
                    if (args[0]=='Moeda'){
                        if(args[1]=='antiga') return '3301'
                    }
                    if (args[0]=='Escudo'){
                        if(args[1]=='relicário') return '3302'
                    }
                    if (args[0]=='Gume'){
                        if(args[1]=='do'){
                            if(args[2]=='ladrão') {
                                if(args[3]=='arcano') return '3303'
                            }
                        }
                    }
                    if (args[0]=='Moeda'){
                        if(args[1]=='antiga'){
                            if(args[2]=='desgastada') return '3304'
                        }
                    }
                    if (args[0]=='Medalhão'){
                        if(args[1]=='do'){
                            if(args[2]=='nômade') {
                                if(args[3]=='desgastado') return '3305'
                            }
                        }
                    }
                    if (args[0]=='Totem'){
                        if(args[1]=='de'){
                            if(args[2]=='vigilância') return '3340'
                        }
                    }
                    if (args[0]=='Âncora'){
                        if(args[1]=='da'){
                            if(args[2]=='alma') return '3345'
                        }
                    }
                    if (args[0]=='Analisador'){
                        if(args[1]=='arcano') return '3348'
                    }
                    if (args[0]=='Totem'){
                        if(args[1]=='superior'){
                            if(args[2]=='invisível') return '3361'
                        }
                    }
                    if (args[0]=='Totem'){
                        if(args[1]=='detector'){
                            if(args[2]=='superior') return '3362'
                        }
                    }
                    if (args[0]=='Alteração'){
                        if(args[1]=='vidente') return '3363'
                    }
                    if (args[0]=='Lente'){
                        if(args[1]=='do'){
                            if(args[2]=='oráculo') return '3191'
                        }
                    }
                    if (args[0]=='Gume'){
                        if(args[1]=='fundido') return '3191'
                    }
                    if (args[0]=='Capa'){
                        if(args[1]=='da'){
                            if(args[2]=='fornalha') return '3373'
                        }
                    }
                    if (args[0]=='Coroa'){
                        if(args[1]=='da'){
                            if(args[2]=='morte') {
                                if(args[3]=='de'){
                                    if(args[4]=='rabadon') return '3374'
                                }
                            }
                        }
                    }
                    if (args[0]=='Máscara'){
                        if(args[1]=='infernal') return '3379'
                    }
                    if (args[0]=='Cutelo'){
                        if(args[1]=='obsidiano') return '3380'
                    }
                    if(args[0]=='Salvação') return '3382'
                    if (args[0]=='Diadema'){
                        if(args[1]=='dos'){
                            if(args[2]=='solari') {
                                if(args[3]=='de'){
                                    if(args[4]=='ferro') return '3383'
                                }
                            }
                        }
                    }
                    if (args[0]=='Fusão'){
                        if(args[1]=='da'){
                            if(args[2]=='trindade') return '3384'
                        }
                    }
                    if (args[0]=='Coroa'){
                        if(args[1]=='mágica'){
                            if(args[2]=='de') {
                                if(args[3]=='wooglet') return '3385'
                            }
                        }
                    }
                    if (args[0]=='Paradoxo'){
                        if(args[1]=='de'){
                            if(args[2]=='zhonya') return '3386'
                        }
                    }
                    if (args[0]=='Punho'){
                        if(args[1]=='Congelado') return '3387'
                    }
                    if (args[0]=='Lâmina'){
                        if(args[1]=='da'){
                            if(args[2]=='ira') {
                                if(args[3]=='de'){
                                    if(args[4]=='youmuu') return '3388'
                                }
                            }
                        }
                    }
                    if (args[0]=='Poderio'){
                        if(args[1]=='do'){
                            if(args[2]=='rei') {
                                if(args[3]=='destruído') return '3389'
                            }
                        }
                    }
                    if (args[0]=='Pulso'){
                        if(args[1]=='de'){
                            if(args[2]=='luden') return '3390'
                        }
                    }
                    if (args[0]=='Resquício'){
                        if(args[1]=='do'){
                            if(args[2]=='aspecto') return '3401'
                        }
                    }
                    if (args[0]=='Transcendência'){
                        if(args[1]=='dourada') return '3460'
                    }
                    if (args[0]=='Pedra'){
                        if(args[1]=='vidente') return '3462'
                    }
                    if (args[0]=='Turíbulo'){
                        if(args[1]=='ardente') return '3504'
                    }
                    if (args[0]=='Colhedor'){
                        if(args[1]=='de'){
                            if(args[2]=='essência') return '3508'
                        }
                    }
                    if (args[0]=='Portal'){
                        if(args[1]=='de'){
                            if(args[2]=='zzrot') return '3512'
                        }
                    }
                    if (args[0]=='Olho'){
                        if(args[1]=='do'){
                            if(args[2]=='arauto') return '3514'
                        }
                    }
                    if (args[0]=='Poro'){
                        if(args[1]=='fantasma') return '3520'
                    }
                    if (args[0]=='Lança'){
                        if(args[1]=='negra') return '3599'
                    }
                    if (args[0]=='Teleporte'){
                        if(args[1]=='de'){
                            if(args[2]=='cerco') return '3630'
                        }
                    }
                    if (args[0]=='Balista'){
                        if(args[1]=='de'){
                            if(args[2]=='cerco') return '3631'
                        }
                    }
                    if (args[0]=='Torre:'){
                        if(args[1]=='feixe'){
                            if(args[2]=='da') {
                                if(args[3]=='destruição') return '3534'
                            }
                        }
                    }
                    if (args[0]=='Cápsula'){
                        if(args[1]=='de'){
                            if(args[2]=='teleporte') return '3635'
                        }
                    }
                    if (args[0]=='Torre:'){
                        if(args[1]=='baluarte'){
                            if(args[2]=='da') {
                                if(args[3]=='tempestade') return '3534'
                            }
                        }
                    }
                    if (args[0]=='Zona'){
                        if(args[1]=='de'){
                            if(args[2]=='flash') return '3640'
                        }
                    }
                    if (args[0]=='Flâmula'){
                        if(args[1]=='de'){
                            if(args[2]=='vanguarda') return '3641'
                        }
                    }
                    if (args[0]=='Recuperação'){
                        if(args[1]=='de'){
                            if(args[2]=='cerco') return '3635'
                        }
                    }
                    if (args[0]=='Campo'){
                        if(args[1]=='de'){
                            if(args[2]=='entropia') return '3643'
                        }
                    }
                    if (args[0]=='Pedra'){
                        if(args[1]=='Vidente') return '3645'
                    }
                    if (args[0]=='Totem'){
                        if(args[1]=='de'){
                            if(args[2]=='escudo') return '3647'
                        }
                    }
                    if (args[0]=='Sentinela'){
                        if(args[1]=='de'){
                            if(args[2]=='visão') {
                                if(args[3]=='do'){
                                    if(args[4]=='cerco') return '3649'
                                }
                            }
                        }
                    }
                    if (args[0]=='Poritos'){
                        if(args[1]=='refrescantes') return '3680'
                    }
                    if (args[0]=='Poritos'){
                        if(args[1]=='muito'){
                            if(args[2]=='picante') return '3681'
                        }
                    }
                    if (args[0]=='Poritos'){
                        if(args[1]=='espresso') return '3682'
                    }
                    if (args[0]=='Poritos'){
                        if(args[1]=='embalagem'){
                            if(args[2]=='para') {
                                if(args[3]=='festa') return '3683'
                            }
                        }
                    }
                    if (args[0]=='Grilhões'){
                        if(args[1]=='cósmicos') return '3690'
                    }
                    if (args[0]=='Lanterna'){
                        if(args[1]=='da'){
                            if(args[2]=='singularidade') return '3691'
                        }
                    }
                    if (args[0]=='Foice'){
                        if(args[1]=='de'){
                            if(args[2]=='matéria') {
                                if(args[3]=='escura') return '3692'
                            }
                        }
                    }
                    if (args[0]=='Botas'){
                        if(args[1]=='gravitacionais') return '3693'
                    }
                    if (args[0]=='Manto'){
                        if(args[1]=='de'){
                            if(args[2]=='estrelas') return '3694'
                        }
                    }
                    if (args[0]=='Sigilo'){
                        if(args[1]=='da'){
                            if(args[2]=='estrela') {
                                if(args[3]=='negra') return '3695'
                            }
                        }
                    }
                    if (args[0]=='Sabre'){
                        if(args[1]=='de'){
                            if(args[2]=='batalha') return '3715'
                        }
                    }
                    if (args[0]=='Coiraça'){
                        if(args[1]=='do'){
                            if(args[2]=='defunto') return '3742'
                        }
                    }
                    if (args[0]=='Hidra'){
                        if(args[1]=='titânica') return '3748'
                    }
                    if (args[0]=='Brasa'){
                        if(args[1]=='de'){
                            if(args[2]=='bami') return '3751'
                        }
                    }
                    if (args[0]=='Glória'){
                        if(args[1]=='íntegra') return '3800'
                    }
                    if (args[0]=='Braçadeira'){
                        if(args[1]=='cristalina') return '3801'
                    }
                    if (args[0]=='Capítulo'){
                        if(args[1]=='perdido') return '3802'
                    }
                    if (args[0]=='Dança'){
                        if(args[1]=='da'){
                            if(args[2]=='morte') return '3812'
                        }
                    }
                    if (args[0]=='Dança'){
                        if(args[1]=='da'){
                            if(args[2]=='morte') {
                                if(args[3]=='espacial') return '3813'
                            }
                        }
                    }
                    if (args[0]=='Limiar'){
                        if(args[1]=='da'){
                            if(args[2]=='noite') return '3814'
                        }
                    }
                    if (args[0]=='Disparar'){
                        if(args[1]=='à'){
                            if(args[2]=='vontade') return '3901'
                        }
                    }
                    if (args[0]=='Filha'){
                        if(args[1]=='da'){
                            if(args[2]=='morte') return '3902'
                        }
                    }
                    if (args[0]=='Levantar'){
                        if(args[1]=='o'){
                            if(args[2]=='mortal') return '3903'
                        }
                    }
                    if (args[0]=='Sombras'){
                        if(args[1]=='gêmeas') return '3905'
                    }
                    if (args[0]=='Prisão'){
                        if(args[1]=='de'){
                            if(args[2]=='feitiços') return '3907'
                        }
                    }
                    if (args[0]=='Salva-vidas') return '4003'
                    if (args[0]=='Alfanje'){
                        if(args[1]=='espectral') return '4004'
                    }
                    if (args[0]=='Lâmina'){
                        if(args[1]=='do'){
                            if(args[2]=='acossador') {
                                if(args[3]=='da'){
                                    if(args[4]=='alcateia') return '4101'
                                }
                            }
                        }
                    }
                    if (args[0]=='Escudo'){
                        if(args[1]=='perdido'){
                            if(args[2]=='de') {
                                if(args[3]=='doran') return '4201'
                            }
                        }
                    }
                    if (args[0]=='Lâmina'){
                        if(args[1]=='perdida'){
                            if(args[2]=='de') {
                                if(args[3]=='doran') return '4202'
                            }
                        }
                    }
                    if (args[0]=='Anel'){
                        if(args[1]=='perdido'){
                            if(args[2]=='de') {
                                if(args[3]=='doran') return '4203'
                            }
                        }
                    }
                    if (args[0]=='ídolo'){
                        if(args[1]=='perdido'){
                            if(args[2]=='de') {
                                if(args[3]=='doran') return '4204'
                            }
                        }
                    }
                    if (args[0]=='Medalhão'){
                        if(args[1]=='do'){
                            if(args[2]=='filósofo') return '4301'
                        }
                    }
                    if (args[0]=='Coração'){
                        if(args[1]=='de'){
                            if(args[2]=='targon') return '4302'
                        }
                    }
                    if (args[0]=='Força'){
                        if(args[1]=='da'){
                            if(args[2]=='naturea') return '4401'
                        }
                    }
                    if (args[0]=='Medalhão'){
                        if(args[1]=='enervante') return '4402'
                    }
                    if (args[0]=='Bastão'){
                        if(args[1]=='abastado'){
                            if(args[2]=='do') {
                                if(args[3]=='bastião') return '4403'
                            }
                        }
                    }
        
        
            }

            const ItemUnique = new Discord.RichEmbed()
            const OneItem = new Discord.RichEmbed()          
            const TwoItems = new Discord.RichEmbed()          
            const ThreeItems = new Discord.RichEmbed()
            
            if(Item.data[item()] == undefined) return message.channel.send('Digite o nome do item correto.')

            if(Item.data[item()].from == null){
                ItemUnique.setTitle(Item.data[item()].name)
                ItemUnique.addField('O que o item faz/da', Item.data[item()].plaintext)
                ItemUnique.addField('Preço combinado', Item.data[item()].gold.base)
                ItemUnique.setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${Item.version}/img/item/${Item.data[item()].image.full}`)
                ItemUnique.setFooter(`Preço total: ${Item.data[item()].gold.total}`)
                message.channel.send(ItemUnique)
                }
            
            if(Item.data[item()].from.length == 1){

                OneItem.setTitle(Item.data[item()].name)
                OneItem.addField('O que o item faz/da', Item.data[item()].plaintext)
                OneItem.addField('Item que compõe', `${Item.data[Item.data[item()].from[0]].name}`)
                OneItem.addField('Preço combinado', Item.data[item()].gold.base)
                OneItem.setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${Item.version}/img/item/${Item.data[item()].image.full}`)
                OneItem.setFooter(`Preço total: ${Item.data[item()].gold.total}`)
                }
            
            if(Item.data[item()].from.length == 2){
                TwoItems.setTitle(Item.data[item()].name)
                TwoItems.addField('O que o item faz/da', Item.data[item()].plaintext)
                TwoItems.addField('Itens que compõem', `${Item.data[Item.data[item()].from[0]].name} e ${Item.data[Item.data[item()].from[1]].name}`)
                TwoItems.addField('Preço combinado', Item.data[item()].gold.base)
                TwoItems.setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${Item.version}/img/item/${Item.data[item()].image.full}`)
                TwoItems.setFooter(`Preço total: ${Item.data[item()].gold.total}`)
                }

            if(Item.data[item()].from.length == 3){
                ThreeItems.setTitle(Item.data[item()].name)
                ThreeItems.addField('O que o item faz/da', `${Item.data[item()].plaintext}`, true)
                ThreeItems.addField('Itens que compõem', `${Item.data[Item.data[item()].from[0]].name}, ${Item.data[Item.data[item()].from[1]].name} e ${Item.data[Item.data[item()].from[2]].name}`, true)
                ThreeItems.addField('Preço combinado', Item.data[item()].gold.base)
                ThreeItems.setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${Item.version}/img/item/${Item.data[item()].image.full}`)
                ThreeItems.setFooter(`Preço total: ${Item.data[item()].gold.total}`)
                }

            switch (Item.data[item()].from.length){
                case 1: return message.channel.send(OneItem); break;
                case 2: return message.channel.send(TwoItems); break;
                case 3: return message.channel.send(ThreeItems); break;

            }           
        
        })
    }

}