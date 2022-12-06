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
      imageURL: '',
      size: {
        width: '47cm',
        height: '47cm',
        depth: '45cm'
      },
      price: 15000 * 2
    },
    amount: 4
  },
  {
    id: 2,
    product: {
      name: 'Cômoda 4 Gavetas Copacabana',
      branch: 'Riamar',
      imageURL: 'riamóveis-cômoda-4-gavetas.png',
      size: {
        width: '87cm',
        height: '1,02m',
        depth: '40cm'
      },
      price: 44500 * 2
    },
    amount: 3
  },
  {
    id: 3,
    product: {
      name: 'Painel Maxi 1.80 Naturale para TV de até 60"',
      branch: 'EDN',
      imageURL: 'edn-painel-max-180-nature-ambientada.jpg',
      size: {
        width: '1,80m',
        height: '1,20m',
        depth: '28,5cm'
      },
      price: 21500 * 2
    },
    amount: 4
  },
  {
    id: 4,
    product: {
      name: 'Painel Navi Branco/Ripado para TV de até 47"',
      branch: 'Bechara',
      imageURL: 'bechara-painel-navi-120-branco_ripado-01.png',
      size: {
        width: '1,20m',
        height: '90cm',
        depth: '28,5cm'
      },
      price: 12500 * 2
    },
    amount: 1
  },
  {
    id: 5,
    product: {
      name: 'Kit de Cozinha Magda 6 Portas Capuccino/Off White',
      branch: 'Poquema',
      imageURL: 'poquema-kit-6-portas-magda-capuccino_off-white-01.png',
      size: {
        width: '90cm',
        height: '1,72m',
        depth: '35cm'
      },
      price: 21000 * 2
    },
    amount: 1
  },
  {
    id: 6,
    product: {
      name: 'Painel Lexus Castanho',
      branch: 'Província',
      imageURL: 'província-painel-lexus-castanho-02.png',
      size: {
        width: '1,80m',
        height: '1,07m',
        depth: '30cm'
      },
      price: 14000 * 2
    },
    amount: 1
  },
  {
    id: 7,
    product: {
      name: 'Painel Feel 1.4 Natura',
      branch: 'Província',
      imageURL: 'provincia-painel-feel-1_4-natura.png',
      size: {
        width: '1,35m',
        height: '1,33m',
        depth: '22cm'
      },
      price: 19500 * 2
    },
    amount: 1,
    isAssembled: true
  },
  {
    id: 8,
    product: {
      name: 'Armário com Prateleira 270 Branco',
      branch: 'Bella Vercelli',
      imageURL: 'bella-vercelli-arm-prateleira-270-2-g.png',
      size: {
        width: '41cm',
        height: '97cm',
        depth: '40cm'
      },
      price: 17500 * 2
    },
    amount: 2
  },
  {
    id: 9,
    product: {
      name: 'Armário para Galão de Água 1 Porta e 1 Gaveta 225 Branco',
      branch: 'Bella Vercelli',
      imageURL: 'bella-vercelli-armario-225-branco.png',
      size: {
        width: '41cm',
        height: '81cm',
        depth: '40cm'
      },
      price: 14500 * 2
    },
    amount: 1
  },
  {
    id: 10,
    product: {
      name: 'Armário para Galão de Água 1 Porta e 1 Gaveta 225 Branco/Preto',
      branch: 'Bella Vercelli',
      imageURL: 'bella-vercelli-armario-225-preto_branco.png',
      size: {
        width: '41cm',
        height: '81cm',
        depth: '40cm'
      },
      price: 14500 * 2
    },
    amount: 2
  },
  {
    id: 11,
    product: {
      name: 'Armário Roma 2 Portas e 1 Gaveta 480 Branco/Preto',
      branch: 'Bella Vercelli',
      imageURL: 'bella-vercelli-armario-roma-480-preto.png',
      size: {
        width: '58cm',
        height: '97cm',
        depth: '40cm'
      },
      price: 20000 * 2
    },
    amount: 1
  },
  {
    id: 12,
    product: {
      name: 'Fruteira Pop 3 cestas e 1 Gaveta 290 Branco/Preto',
      branch: 'Bella Vercelli',
      imageURL: 'bella-vercelli-fruteira-pop-290-branco_preto.png',
      size: {
        width: '40cm',
        height: '97cm',
        depth: '33cm'
      },
      price: 16000 * 2
    },
    amount: 4
  },
  {
    id: 13,
    product: {
      name: 'Fruteira Pop 3 cestas e 1 Gaveta 290 Branco',
      branch: 'Bella Vercelli',
      imageURL: 'bella-vercelli-fruteira-pop-branco.png',
      size: {
        width: '40cm',
        height: '97cm',
        depth: '33cm'
      },
      price: 16000 * 2
    },
    amount: 2
  },
  {
    id: 14,
    product: {
      name: 'Treliche Tabaco',
      branch: 'Porto Madero',
      imageURL: 'porto-madero-treliche-tabaco.jpg',
      size: {
        width: '94cm',
        height: '1,90m',
        depth: '2,02m'
      },
      price: 35000 * 2
    },
    amount: 1
  },
  {
    id: 15,
    product: {
      name: 'Beliche 88 Imbuia',
      branch: 'M. Sul',
      imageURL: 'msul-beliche-imbuia.png',
      price: 55000 * 2
    },
    amount: 1
  },
  {
    id: 16,
    product: {
      name: 'Cômoda 4 Gavetas Barcelona Branco',
      branch: 'Lanza',
      imageURL: 'lanza-comoda-barcelona--branco.jpg',
      size: {
        width: '75cm',
        height: '1,07m',
        depth: '45cm'
      },
      price: 26000 * 2
    },
    amount: 1
  },
  {
    id: 17,
    product: {
      name: 'Guarda Roupa 4 Portas Pádua Noce Bronze',
      branch: 'Lanza',
      imageURL: 'lanza-roupeiro-padua-noce.png',
      size: {
        width: '1,63m',
        height: '2,34m',
        depth: '56cm'
      },
      price: 65000 * 2
    },
    amount: 1
  },
  {
    id: 18,
    product: {
      name: 'Cama Casal 1.40 Montreal Plus Castanho Relevo',
      branch: 'Lanza',
      imageURL: 'lanza-cama-casal-140-montreal-plus-castanho-relevo.jpg',
      size: {
        width: '1,55m',
        height: '1,21m',
        depth: '2,06m'
      },
      price: 45000 * 2
    },
    amount: 1
  },
  {
    id: 19,
    product: {
      name: 'Criadão 5 Gavetas Imbuia',
      branch: 'OMS',
      imageURL: 'oms-criadao-5-gav-ref15.jpg',
      size: {
        width: '48cm',
        height: '1,02m',
        depth: '37,5cm'
      },
      price: 44500 * 2
    },
    amount: 2
  },
  {
    id: 20,
    product: {
      name: 'Cômoda Chiffonie 6 Gavetas Imbuia',
      branch: 'OMS',
      imageURL: 'oms-comoda-chiffonie-6-gavetas-imbuia.png',
      size: {
        width: '63cm',
        height: '1,15m',
        depth: '46cm'
      },
      price: 54500 * 2
    },
    amount: 2
  },
  {
    id: 21,
    product: {
      name: 'Rack Ravenna TB200 Terracota/Preto',
      branch: 'Dalla Costa',
      imageURL: 'dalla-costa-rack-ravenna-tb200-terracota-preto.jpg',
      size: {
        width: '1,60m',
        height: '59cm',
        depth: '46cm'
      },
      price: 39000 * 2
    },
    amount: 1,
    isAssembled: true
  },
  {
    id: 22,
    product: {
      name: 'Rack Ravenna TB200 Terracota/Demolição',
      branch: 'Dalla Costa',
      imageURL: 'dalla-costa-rack-ravenna-TB200-TD-demolicao.jpg',
      size: {
        width: '1,60m',
        height: '59cm',
        depth: '46cm'
      },
      price: 39000 * 2
    },
    amount: 1,
    isAssembled: true
  },
  {
    id: 23,
    product: {
      name: 'Criado Mudo Stilo Perola/Noce',
      branch: 'Albatroz',
      imageURL: 'albatroz-criado-mudo-stilo-perola-noce.jpg',
      size: {
        width: '53cm',
        height: '55cm',
        depth: '36cm'
      },
      price: 9000 * 2
    },
    amount: 2
  },
  {
    id: 24,
    product: {
      name: 'Criado Mudo 2 Gavetas Modena Camurça/Avelã',
      branch: 'Eucamóveis',
      imageURL: 'eucamoveis-criado-mudo-modena-camurca_avela.png',
      price: 9500 * 2
    },
    amount: 1
  },
  {
    id: 25,
    product: {
      name: 'Criado Mudo 2 Gavetas Apolo Avelã/Carvalho',
      branch: 'Moval',
      imageURL: 'moval-criado-mudo-apolo-avela-carvalho.png',
      size: {
        width: '46cm',
        height: '61cm',
        depth: '36cm'
      },
      price: 11000 * 2
    },
    amount: 2
  },
  {
    id: 26,
    product: {
      name: 'Mesa 1.30 com 4 Cadeiras Grande Branca',
      branch: 'Scholl',
      imageURL: 'scholl-mesa-130x80-cadeira-grande-branca.jpg',
      size: {
        width: '80cm',
        height: '76cm',
        depth: '1,30m'
      },
      price: 80000 * 2
    },
    amount: 1,
    isAssembled: true
  },
  {
    id: 27,
    product: {
      name: 'Mesa 90 Redonda Branca',
      branch: 'Duolar',
      imageURL: 'duolar-mesa-redonda-branca.png',
      size: {
        width: '90cm',
        height: '76cm',
        depth: '90cm'
      },
      price: 34500 * 2
    },
    amount: 1,
    isAssembled: true
  },
  {
    id: 28,
    product: {
      name: 'Colchão Solteiro D23 88x12 Sleep Max',
      branch: 'Castor',
      imageURL: 'castor-colchao-d23-sleep-max-88x12.jpeg',
      size: {
        width: '88cm',
        height: '12cm',
        depth: '1,88m'
      },
      price: 19000 * 2
    },
    amount: 2,
  },
  {
    id: 29,
    product: {
      name: 'Berço Ninho II Aviador',
      branch: 'Galzerano',
      imageURL: 'galzerano-berço-ninho-II-aviador.jpg',
      size: {
        width: '79cm',
        height: '79cm',
        depth: '1,05cm'
      },
      price: 30000 * 2
    },
    amount: 1,
  },
  {
    id: 30,
    product: {
      name: 'Guarda Roupa Porta Deslizante Monte Carlos Imbuia Fosco',
      branch: 'RV',
      imageURL: 'rv-roupeiro-monte-carlos-imbuia-fosco.jpg',
      size: {
        width: '2,28m',
        height: '2,32m',
        depth: '58cm'
      },
      price: 70000 * 2
    },
    amount: 1,
    isAssembled: true
  },
  {
    id: 31,
    product: {
      name: 'Colchão Casal D23 138x12 Light Liso',
      branch: 'Ortobom',
      imageURL: 'ortobom-colchão-d23-138x12.jpeg',
      size: {
        width: '1,38m',
        height: '12cm',
        depth: '1,88m'
      },
      price: 25000 * 2
    },
    amount: 5,
  },
  {
    id: 32,
    product: {
      name: 'Antena Externa Digital UHF LP3000 28 Elementos',
      branch: 'Primetech',
      imageURL: 'primetech-antena-externa-lp3000-28-elem-02.jpg',
      size: {
        width: '34cm',
        height: '6cm',
        depth: '97cm'
      },
      price: 2500 * 2
    },
    amount: 8,
  },
  {
    id: 33,
    product: {
      name: 'Rack Caribean Imbuia Fosco',
      branch: 'RV',
      imageURL: 'rv-rack-caribean-imbuia-fosco.png',
      size: {
        width: '1,83m',
        height: '68cm',
        depth: '45cm'
      },
      price: 32000 * 2
    },
    amount: 1,
    isAssembled: true
  },
  {
    id: 34,
    product: {
      name: 'Poltrona Bibi Impermeável Floral',
      branch: 'Molufan',
      imageURL: 'molufan-poltrona-bibi-impermeavel-floral.png',
      price: 27500 * 2
    },
    amount: 1,
  }
];