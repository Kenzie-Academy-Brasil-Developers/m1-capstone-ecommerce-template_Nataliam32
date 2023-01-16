// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "../img/kits/arduino_starterkit.jpg.webp",
    nameItem: "Arduino Starter Kit",
    description:
      "Neste kit da Arduino CC, pensado especialmente a todos aqueles que estão começando a desenvolver os primeiros projetos...",
    value: 1500,
    addCart: "Adicionar ao carrinho",
    tag: ["Kits"],
  },
  {
    id: 2,
    img: "../img/kits/kitArduinoUno.png",
    nameItem: "Kit Arduino Uno Iniciante 1",
    description:
      "Está querendo um kit para iniciantes com ótimo custo benefício? Então, este é para você. Repleto de acessórios para...",
    value: 145,
    addCart: "Adicionar ao carrinho",
    tag: ["Kits"],
  },
  {
    id: 3,
    img: "../img/kits/kitMarterRobocore.jpg",
    nameItem: "Kit Master Maker Robocore",
    description:
      "Quer um kit que seja tanto para iniciantes quanto para avançados? Então, este kit da Robocore é sua melhor escolha...",
    value: 400,
    addCart: "Adicionar ao carrinho",
    tag: ["Kits"],
  },
  {
    id: 4,
    img: "../img/kits/robocore_kit.png",
    nameItem: "Kit Avançado Robocore IoT",
    description:
      "Se seu desejo é um kit para IoT, então este kit avançado da Robocore é exatamente para você. Pensado para desenvolver...",
    value: 250,
    addCart: "Adicionar ao carrinho",
    tag: ["Kits"],
  },
  {
    id: 5,
    img: "../img/kits/kitMaker.jpeg",
    nameItem: "Kit Maker FilipFlop",
    description:
      "Mais uma excelente opção de kit para iniciantes em desenvolvimento com Arduino Uno, este kit da FilipFlop...",
    value: 200,
    addCart: "Adicionar ao carrinho",
    tag: ["Kits"],
  },
  {
    id: 6,
    img: "../img/kits/oplakit.jpg",
    nameItem: "Arduino Oplà Kit",
    description:
      "Está procurando um kit para IoT de altíssima qualidade e com direito à acesso por um ano ao Arduino Cloud? Então...",
    value: 2000,
    addCart: "Adicionar ao carrinho",
    tag: ["Kits"],
  },
  {
    id: 7,
    img: "../img/acessorios/caixaAcessorios.jpg",
    nameItem: "Caixa Acessórios",
    description: 
    "Quer uma caixa recheada com todos os acessórios que você precisa para desenvolver seu projeto?...",
    value: 155,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 8,
    img: "../img/acessorios/Dht11.jpg",
    nameItem: "Sensor de Umidade e Temperatura DHT11",
    description: 
    "Sensor de Umidade e Temperatura DHT11, de grande precisão",
    value: 14.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 9,
    img: "../img/acessorios/kit_400_resistores.jpg.webp",
    nameItem: "Kit 400 Resistores",
    description: 
    "Kit com 400 resistores de variadas amperagens",
    value: 30,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 10,
    img: "../img/acessorios/lcd.png",
    nameItem: "Display de LCD 16X2",
    description: "Display de LCD Display de LCD 16X2 I2C BackLight Azul",
    value: 15,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 11,
    img: "../img/acessorios/led.jpg",
    nameItem: "Kit 10 LEDs Variadas Cores",
    description: "Kit 10 LEDs Variadas Cores",
    value: 3.5,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 12,
    img: "../img/acessorios/motorServo.jpg",
    nameItem: "Motor Servo 180 graus",
    description: "Motor Servo 180 graus",
    value: 38.5,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 13,
    img: "../img/acessorios/Sensor-Capacitivo-de-Umidade-do-Solo-1.jpg",
    nameItem: "Sensor Capacitivo de Umidade de Solo",
    description: "Sensor Capacitivo de Umidade de Solo",
    value: 20,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 14,
    img: "../img/acessorios/displayOled.jpg",
    nameItem: "Display Oled 0.96 I2C",
    description: "Display Oled 0.96 I2C Backlight Branco",
    value: 35,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 15,
    img: "../img/placas/arduinoUnoR3.png",
    nameItem: "Arduino Uno R3",
    description: "Arduino Uno R3 da Robocore",
    value: 200,
    addCart: "Adicionar ao carrinho",
    tag: ["Placas"],
  },
  {
    id: 16,
    img: "../img/placas/blackboardMega.png",
    nameItem: "BlackBoard Mega 2560 R3",
    description: "BlackBoard Mega 2560 R3 da Robocore",
    value: 300,
    addCart: "Adicionar ao carrinho",
    tag: ["Placas"],
  },
  {
    id: 17,
    img: "../img/placas/arduinoUno.jpg.webp",
    nameItem: "Arduino Uno R3 da Arduino CC",
    description: "Arduino Uno R3 da Arduino CC, Original",
    value: 500,
    addCart: "Adicionar ao carrinho",
    tag: ["Placas"],
  },
  {
    id: 18,
    img: "../img/placas/arduinoUnoLimitado.webp",
    nameItem: "Arduino UNO Mini Limited Edition",
    description: "Arduino UNO Mini Limited Edition",
    value: 1000,
    addCart: "Adicionar ao carrinho",
    tag: ["Placas"],
  },
  {
    id: 19,
    img: "../img/placas/mkr1010.jpg",
    nameItem: "Arduino MKR WiFi 1010",
    description: "Arduino MKR WiFi 1010",
    value: 800,
    addCart: "Adicionar ao carrinho",
    tag: ["Placas"],
  },
  {
    id: 20,
    img: "../img/placas/nano.png",
    nameItem: "Arduino Nano 33 IoT",
    description: "Arduino Nano 33 IoT",
    value: 700,
    addCart: "Adicionar ao carrinho",
    tag: ["Placas"],
  },
];

const kits = new Array();
const acessorios = new Array();
const placas = new Array();

function divideEntreAsArrays(lista) {
  for(let i = 0; i < lista.length; i++) {
    //console.log(lista[i].tag);
    if(lista[i].tag == 'Kits') {
      kits.push(lista[i]);
    } else if(lista[i].tag == 'Acessórios') {
      acessorios.push(lista[i]);
    } else if (lista[i].tag == 'Placas') {
      placas.push(lista[i]);
    }
  }
}

// console.log(kits);
// console.log(acessorios);
// console.log(placas);

divideEntreAsArrays(data);

// Cria Arrays dos Tipos de Produtos: Placas, Ascessórios ou Kits

const tagPlacas = new Array();
const tagAcessorios = new Array();
const tagKits = new Array();

const arrayPrecos = new Array();
//console.log(arrayPrecos);

function obtemApenasOPreco(lista) {
    for (let i = 0; i < lista.length; i++){
      //console.log(lista[i].value);
      arrayPrecos.push(lista[i].value);
    }
    return arrayPrecos;
}

obtemApenasOPreco(data);
//console.log(arrayPrecos);




