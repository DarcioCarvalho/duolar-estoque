import { Stock } from "../types/stock";

export function getStock(id: number): Stock {
  return stockList.filter(stock => stock.id === id)[0];
}

export const stockList: Stock[] = [
  {
    id: 1,
    product: {
      name: 'Criado Mudo 1 Gaveta Copacabana',
      branch: 'Riamar',
      imageURL: ''
    },
    amount: 4
  },
  {
    id: 2,
    product: {
      name: 'Cômoda 4 Gavetas Copacabana',
      branch: 'Riamar',
      imageURL: 'riamóveis-cômoda-4-gavetas.png'
    },
    amount: 3
  },
  {
    id: 3,
    product: {
      name: 'Painel Maxi 1.80 Naturale para TV de até 60"',
      branch: 'EDN',
      imageURL: 'edn-painel-max-180-nature-ambientada.jpg'
    },
    amount: 4
  },
  {
    id: 4,
    product: {
      name: 'Painel Navi Branco/Ripado para TV de até 47"',
      branch: 'Bechara',
      imageURL: 'bechara-painel-navi-120-branco_ripado-01.png'
    },
    amount: 1
  },
  {
    id: 5,
    product: {
      name: 'Kit de Cozinha Magda 6 Portas Capuccino/Off White',
      branch: 'Poquema',
      imageURL: 'poquema-kit-6-portas-magda-capuccino_off-white-01.png'
    },
    amount: 1
  },
  {
    id: 6,
    product: {
      name: 'Painel Lexus Castanho',
      branch: 'Província',
      imageURL: 'província-painel-lexus-castanho-02.png'
    },
    amount: 1
  },
  {
    id: 7,
    product: {
      name: 'Painel Feel 1.4 Natura',
      branch: 'Província',
      imageURL: 'provincia-painel-feel-1_4-natura.png'
    },
    amount: 1,
    isAssembled: true
  },
  {
    id: 8,
    product: {
      name: 'Armário com Prateleira 270 Branco',
      branch: 'Bella Vercelli',
      imageURL: 'bella-vercelli-arm-prateleira-270-2-g.png'
    },
    amount: 2
  },
  {
    id: 9,
    product: {
      name: 'Armário para Galão de Água 1 Porta e 1 Gaveta 225 Branco',
      branch: 'Bella Vercelli',
      imageURL: 'bella-vercelli-armario-225-branco.png'
    },
    amount: 1
  },
  {
    id: 10,
    product: {
      name: 'Armário para Galão de Água 1 Porta e 1 Gaveta 225 Branco/Preto',
      branch: 'Bella Vercelli',
      imageURL: 'bella-vercelli-armario-225-preto_branco.png'
    },
    amount: 2
  },
  {
    id: 11,
    product: {
      name: 'Armário Roma 2 Portas e 1 Gaveta 480 Branco/Preto',
      branch: 'Bella Vercelli',
      imageURL: 'bella-vercelli-armario-roma-480-preto.png'
    },
    amount: 1
  },
  {
    id: 12,
    product: {
      name: 'Fruteira Pop 3 cestas e 1 Gaveta 290 Branco/Preto',
      branch: 'Bella Vercelli',
      imageURL: 'bella-vercelli-fruteira-pop-290-branco_preto.png'
    },
    amount: 4
  },
  {
    id: 13,
    product: {
      name: 'Fruteira Pop 3 cestas e 1 Gaveta 290 Branco',
      branch: 'Bella Vercelli',
      imageURL: 'bella-vercelli-fruteira-pop-branco.png'
    },
    amount: 2
  },
  {
    id: 14,
    product: {
      name: 'Treliche Tabaco',
      branch: 'Porto Madero',
      imageURL: 'porto-madero-treliche-tabaco.jpg'
    },
    amount: 1
  },
  {
    id: 15,
    product: {
      name: 'Beliche 88 Imbuia',
      branch: 'M. Sul',
      imageURL: 'msul-beliche-imbuia.png'
    },
    amount: 1
  },
  {
    id: 16,
    product: {
      name: 'Cômoda 4 Gavetas Barcelona Branco',
      branch: 'Lanza',
      imageURL: 'lanza-comoda-barcelona--branco.jpg'
    },
    amount: 1
  },
  {
    id: 17,
    product: {
      name: 'Guarda Roupa 4 Portas Pádua Noce Bronze',
      branch: 'Lanza',
      imageURL: 'lanza-roupeiro-padua-noce.png'
    },
    amount: 1
  },
  {
    id: 18,
    product: {
      name: 'Cama Casal 1.40 Montreal Plus Castanho Relevo',
      branch: 'Lanza',
      imageURL: 'lanza-cama-casal-140-montreal-plus-castanho-relevo.jpg'
    },
    amount: 1
  },
  {
    id: 19,
    product: {
      name: 'Criadão 5 Gavetas Imbuia',
      branch: 'OMS',
      imageURL: 'oms-criadao-5-gav-ref15.jpg'
    },
    amount: 2
  },
  {
    id: 20,
    product: {
      name: 'Cômoda Chiffonie 6 Gavetas Imbuia',
      branch: 'OMS',
      imageURL: 'oms-comoda-chiffonie-6-gavetas-imbuia.png'
    },
    amount: 2
  },
  {
    id: 21,
    product: {
      name: 'Rack Ravenna TB200 Terracota/Preto',
      branch: 'Dalla Costa',
      imageURL: 'dalla-costa-rack-ravenna-tb200-terracota-preto.jpg'
    },
    amount: 1,
    isAssembled: true
  },
  {
    id: 22,
    product: {
      name: 'Rack Ravenna TB200 Terracota/Demolição',
      branch: 'Dalla Costa',
      imageURL: 'dalla-costa-rack-ravenna-TB200-TD-demolicao.jpg'
    },
    amount: 1,
    isAssembled: true
  },
  {
    id: 23,
    product: {
      name: 'Criado Mudo Stilo Perola/Noce',
      branch: 'Albatroz',
      imageURL: 'albatroz-criado-mudo-stilo-perola-noce.jpg'
    },
    amount: 2
  },
  {
    id: 24,
    product: {
      name: 'Criado Mudo 2 Gavetas Modena Camurça/Avelã',
      branch: 'Eucamóveis',
      imageURL: 'eucamoveis-criado-mudo-modena-camurca_avela.png'
    },
    amount: 1
  },
  {
    id: 25,
    product: {
      name: 'Criado Mudo 2 Gavetas Apolo Avelã/Carvalho',
      branch: 'Moval',
      imageURL: 'moval-criado-mudo-apolo-avela-carvalho.png'
    },
    amount: 2
  },
  {
    id: 26,
    product: {
      name: 'Mesa 1.30 com 4 Cadeiras Grande Branca',
      branch: 'Scholl',
      imageURL: 'scholl-mesa-130x80-cadeira-grande-branca.jpg'
    },
    amount: 1,
    isAssembled: true
  },
  {
    id: 27,
    product: {
      name: 'Mesa 90 Redonda Branca',
      branch: 'Duolar',
      imageURL: 'duolar-mesa-redonda-branca.png'
    },
    amount: 1,
    isAssembled: true
  },
  {
    id: 28,
    product: {
      name: 'Colchão Solteiro D23 88x12 Sleep Max',
      branch: 'Castor',
      imageURL: 'castor-colchao-d23-sleep-max-88x12.jpeg'
    },
    amount: 2,
  },
  {
    id: 29,
    product: {
      name: 'Berço Ninho II Aviador',
      branch: 'Galzerano',
      imageURL: 'galzerano-berço-ninho-II-aviador.jpg'
    },
    amount: 1,
  },
  {
    id: 30,
    product: {
      name: 'Guarda Roupa Porta Deslizante Monte Carlos Imbuia Fosco',
      branch: 'RV',
      imageURL: 'rv-roupeiro-monte-carlos-imbuia-fosco.jpg'
    },
    amount: 1,
    isAssembled: true
  },
  {
    id: 31,
    product: {
      name: 'Colchão Casal D23 138x12 Light Liso',
      branch: 'Ortobom',
      imageURL: 'ortobom-colchão-d23-138x12.jpeg'
    },
    amount: 5,
  },
  {
    id: 32,
    product: {
      name: 'Antena Externa Digital UHF LP3000 28 Elementos',
      branch: 'Primetech',
      imageURL: 'primetech-antena-externa-lp3000-28-elem-02.jpg'
    },
    amount: 8,
  },
  {
    id: 33,
    product: {
      name: 'Rack Caribean Imbuia Fosco',
      branch: 'RV',
      imageURL: 'rv-rack-caribean-imbuia-fosco.png'
    },
    amount: 1,
    isAssembled: true
  },
  {
    id: 34,
    product: {
      name: 'Poltrona Bibi Impermeável Floral',
      branch: 'Molufan',
      imageURL: 'molufan-poltrona-bibi-impermeavel-floral.png'
    },
    amount: 1,
  }
];