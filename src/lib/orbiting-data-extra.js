const dataDescPlanets = {
  Mercury: `Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet zipping around the Sun every 88 Earth days.`,
  Venus: `Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect making it the hottest planet in our solar system.`,
  Earth: `Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.`,
  Mars: `Mars is a dusty cold desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer with a thicker atmosphere.`,
  Jupiter: `Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.`,
  Saturn: `Adorned with a dazzling complex system of icy rings Saturn is unique in our solar system. The other giant planets have rings but none are as spectacular as Saturn's. `,
  Uranus: `Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.`,
  Neptune: `Neptune—the eighth and most distant major planet orbiting our Sun—is dark cold and whipped by supersonic winds. It was the first planet located through mathematical calculations. `,
  Pluto: `Pluto is a complex world of ice mountains and frozen plains. Once considered the ninth planet Pluto is the best known of a new class of worlds called dwarf planets.`,
  Ceres: `Ceres makes up almost a third of the asteroid belt's total mass but it is still far smaller than Earth's Moon. Ceres is heavily cratered with large amounts of ice underground. `,
  Makemake: `It takes 310 Earth years for Makemake to complete one orbit around our Sun.`,
  Haumea: `Haumea is one of the fastest rotating large objects in our solar system.`,
  Eris: `Eris is one of the largest known dwarf planets in our solar system. It's about the same size as Pluto but it is three times farther from the Sun. One orbit takes about 557 years.`
};

const dataStars = [
  {
    name: `Sun`,
    diamater: 1392684
  }
];

const dataPlanets = {
  // {
  //   name: ``,
  //   diamater: "km",
  //   radius: "million km",
  //   speed: "years"
  // },
  Mercury: {
    id: "Mercury",
    name: `Mercury`,
    parentId: "sun",
    angle: Math.floor(Math.random() * 360),
    orbitalTilt: 0,
    diamater: 4879,
    radius: 57.9,
    speed: 0.24,
    color: "#ffffff",
    zIndexVariation: 100
  },
  Venus: {
    id: "Venus",
    name: `Venus`,
    parentId: "sun",
    angle: Math.floor(Math.random() * 360),
    orbitalTilt: 0,
    diamater: 12104,
    radius: 108,
    speed: 0.61,
    color: "#ffffff",
    zIndexVariation: 100
  },
  Earth: {
    id: "Earth",
    name: `Earth`,
    parentId: "sun",
    angle: Math.floor(Math.random() * 360),
    orbitalTilt: 0,
    diamater: 12756,
    radius: 149,
    speed: 1,
    color: "#ffffff",
    zIndexVariation: 100
  },
  Mars: {
    id: "Mars",
    name: `Mars`,
    parentId: "sun",
    angle: Math.floor(Math.random() * 360),
    orbitalTilt: 0,
    diamater: 6805,
    radius: 227,
    speed: 1.9,
    color: "#ffffff",
    zIndexVariation: 100
  },
  Ceres: {
    id: "Ceres",
    name: `Ceres`,
    parentId: "sun",
    angle: Math.floor(Math.random() * 360),
    orbitalTilt: 0,
    diamater: 950,
    radius: 413,
    speed: 4.6,
    color: "#ffffff",
    zIndexVariation: 100
  },
  Jupiter: {
    id: "Jupiter",
    name: `Jupiter`,
    parentId: "sun",
    angle: Math.floor(Math.random() * 360),
    orbitalTilt: 0,
    diamater: 142984,
    radius: 778,
    speed: 11.9,
    color: "#ffffff",
    zIndexVariation: 100
  },
  Saturn: {
    id: "Saturn",
    name: `Saturn`,
    parentId: "sun",
    angle: Math.floor(Math.random() * 360),
    orbitalTilt: 0,
    diamater: 120536,
    radius: 1400000,
    speed: 29.5,
    color: "#ffffff",
    zIndexVariation: 100
  },
  Uranus: {
    id: "Uranus",
    name: `Uranus`,
    parentId: "sun",
    angle: Math.floor(Math.random() * 360),
    orbitalTilt: 0,
    diamater: 51118,
    radius: 2900000,
    speed: 84,
    color: "#ffffff",
    zIndexVariation: 100
  },
  Neptune: {
    id: "Neptune",
    name: `Neptune`,
    parentId: "sun",
    angle: Math.floor(Math.random() * 360),
    orbitalTilt: 0,
    diamater: 49528,
    radius: 4500000,
    speed: 164.8,
    color: "#ffffff",
    zIndexVariation: 100
  },
  Pluto: {
    id: "Pluto",
    name: `Pluto`,
    parentId: "sun",
    angle: Math.floor(Math.random() * 360),
    orbitalTilt: 0,
    diamater: 2306,
    radius: 5900000,
    speed: 246,
    color: "#ffffff",
    zIndexVariation: 100
  },
  Haumea: {
    id: "Haumea",
    name: `Haumea`,
    parentId: "sun",
    angle: Math.floor(Math.random() * 360),
    orbitalTilt: 0,
    diamater: 1960,
    radius: 6400000,
    speed: 283.3,
    color: "#ffffff",
    zIndexVariation: 100
  },
  Makemake: {
    id: "Makemake",
    name: `Makemake`,
    parentId: "sun",
    angle: Math.floor(Math.random() * 360),
    orbitalTilt: 0,
    diamater: 1434,
    radius: 6900000,
    speed: 309.9,
    color: "#ffffff",
    zIndexVariation: 100
  },
  Eris: {
    id: "Eris",
    name: `Eris`,
    parentId: "sun",
    angle: Math.floor(Math.random() * 360),
    orbitalTilt: 0,
    diamater: 2326,
    radius: 10100000,
    speed: 560.9,
    color: "#ffffff",
    zIndexVariation: 100
  }
};

const dataMoons = [
  {
    name: `Moon`,
    halfdiameter: 1737.1,
    radius: 384399,
    speed: 27.321582,
    parentId: `Earth`
  },
  {
    name: `Phobos`,
    halfdiameter: 11.1,
    radius: 9380,
    speed: 0.319,
    parentId: `Mars`
  },
  {
    name: `Deimos`,
    halfdiameter: 6.2,
    radius: 23460,
    speed: 1.262,
    parentId: `Mars`
  },
  {
    name: `Io`,
    halfdiameter: 1818.1,
    radius: 421800,
    speed: 1.769,
    parentId: `Jupiter`
  },
  {
    name: `Europa`,
    halfdiameter: 1560.7,
    radius: 671100,
    speed: 3.551,
    parentId: `Jupiter`
  },
  {
    name: `Ganymede`,
    halfdiameter: 2634.1,
    radius: 1070400,
    speed: 7.155,
    parentId: `Jupiter`
  },
  {
    name: `Callisto`,
    halfdiameter: 2408.4,
    radius: 1882700,
    speed: 16.69,
    parentId: `Jupiter`
  },
  {
    name: `Amalthea`,
    halfdiameter: 83.5,
    radius: 181400,
    speed: 0.498,
    parentId: `Jupiter`
  },
  {
    name: `Himalia`,
    halfdiameter: 67,
    radius: 11461000,
    speed: 250.56,
    parentId: `Jupiter`
  },
  {
    name: `Elara`,
    halfdiameter: 43,
    radius: 11741000,
    speed: 259.64,
    parentId: `Jupiter`
  },
  {
    name: `Pasiphae`,
    halfdiameter: 30,
    radius: 23624000,
    speed: -743.63,
    parentId: `Jupiter`
  },
  {
    name: `Sinope`,
    halfdiameter: 19,
    radius: 23939000,
    speed: -758.9,
    parentId: `Jupiter`
  },
  {
    name: `Lysithea`,
    halfdiameter: 18,
    radius: 11717000,
    speed: 259.2,
    parentId: `Jupiter`
  },
  {
    name: `Carme`,
    halfdiameter: 23,
    radius: 23404000,
    speed: -734.17,
    parentId: `Jupiter`
  },
  {
    name: `Ananke`,
    halfdiameter: 14,
    radius: 21276000,
    speed: -629.77,
    parentId: `Jupiter`
  },
  {
    name: `Leda`,
    halfdiameter: 10,
    radius: 11165000,
    speed: 240.92,
    parentId: `Jupiter`
  },
  {
    name: `Thebe`,
    halfdiameter: 49.3,
    radius: 221900,
    speed: 0.675,
    parentId: `Jupiter`
  },
  {
    name: `Adrastea`,
    halfdiameter: 8.2,
    radius: 129000,
    speed: 0.298,
    parentId: `Jupiter`
  },
  {
    name: `Metis`,
    halfdiameter: 21.5,
    radius: 128000,
    speed: 0.295,
    parentId: `Jupiter`
  },
  {
    name: `Callirrhoe`,
    halfdiameter: 4.3,
    radius: 24103000,
    speed: -758.77,
    parentId: `Jupiter`
  },
  {
    name: `Themisto`,
    halfdiameter: 4.0,
    radius: 7284000,
    speed: 130.02,
    parentId: `Jupiter`
  },
  {
    name: `Megaclite`,
    halfdiameter: 2.7,
    radius: 23493000,
    speed: -752.86,
    parentId: `Jupiter`
  },
  {
    name: `Taygete`,
    halfdiameter: 2.5,
    radius: 23280000,
    speed: -732.41,
    parentId: `Jupiter`
  },
  {
    name: `Chaldene`,
    halfdiameter: 1.9,
    radius: 23100000,
    speed: -723.72,
    parentId: `Jupiter`
  },
  {
    name: `Harpalyke`,
    halfdiameter: 2.2,
    radius: 20858000,
    speed: -623.32,
    parentId: `Jupiter`
  },
  {
    name: `Kalyke`,
    halfdiameter: 2.6,
    radius: 23483000,
    speed: -742.06,
    parentId: `Jupiter`
  },
  {
    name: `Iocaste`,
    halfdiameter: 2.6,
    radius: 21060000,
    speed: -631.6,
    parentId: `Jupiter`
  },
  {
    name: `Erinome`,
    halfdiameter: 1.6,
    radius: 23196000,
    speed: -728.46,
    parentId: `Jupiter`
  },
  {
    name: `Isonoe`,
    halfdiameter: 1.9,
    radius: 23155000,
    speed: -726.23,
    parentId: `Jupiter`
  },
  {
    name: `Praxidike`,
    halfdiameter: 3.4,
    radius: 20908000,
    speed: -625.39,
    parentId: `Jupiter`
  },
  {
    name: `Autonoe`,
    halfdiameter: 2.0,
    radius: 24046000,
    speed: -760.95,
    parentId: `Jupiter`
  },
  {
    name: `Thyone`,
    halfdiameter: 2.0,
    radius: 20939000,
    speed: -627.21,
    parentId: `Jupiter`
  },
  {
    name: `Hermippe`,
    halfdiameter: 2.0,
    radius: 21131000,
    speed: -633.9,
    parentId: `Jupiter`
  },
  {
    name: `Aitne`,
    halfdiameter: 1.5,
    radius: 23229000,
    speed: -730.18,
    parentId: `Jupiter`
  },
  {
    name: `Eurydome`,
    halfdiameter: 1.5,
    radius: 22865000,
    speed: -717.33,
    parentId: `Jupiter`
  },
  {
    name: `Euanthe`,
    halfdiameter: 1.5,
    radius: 20797000,
    speed: -620.49,
    parentId: `Jupiter`
  },
  {
    name: `Euporie`,
    halfdiameter: 1.0,
    radius: 19304000,
    speed: -550.74,
    parentId: `Jupiter`
  },
  {
    name: `Orthosie`,
    halfdiameter: 1.0,
    radius: 20720000,
    speed: -622.56,
    parentId: `Jupiter`
  },
  {
    name: `Sponde`,
    halfdiameter: 1.0,
    radius: 23487000,
    speed: -748.34,
    parentId: `Jupiter`
  },
  {
    name: `Kale`,
    halfdiameter: 1.0,
    radius: 23217000,
    speed: -729.47,
    parentId: `Jupiter`
  },
  {
    name: `Pasithee`,
    halfdiameter: 1.0,
    radius: 23004000,
    speed: -719.44,
    parentId: `Jupiter`
  },
  {
    name: `Hegemone`,
    halfdiameter: 1.5,
    radius: 23577000,
    speed: -739.88,
    parentId: `Jupiter`
  },
  {
    name: `Mneme`,
    halfdiameter: 1.0,
    radius: 21035000,
    speed: -620.04,
    parentId: `Jupiter`
  },
  {
    name: `Aoede`,
    halfdiameter: 2.0,
    radius: 23980000,
    speed: -761.5,
    parentId: `Jupiter`
  },
  {
    name: `Thelxinoe`,
    halfdiameter: 1.0,
    radius: 21164000,
    speed: -628.09,
    parentId: `Jupiter`
  },
  {
    name: `Arche`,
    halfdiameter: 1.5,
    radius: 23355000,
    speed: -731.95,
    parentId: `Jupiter`
  },
  {
    name: `Kallichore`,
    halfdiameter: 1.0,
    radius: 23288000,
    speed: -728.73,
    parentId: `Jupiter`
  },
  {
    name: `Helike`,
    halfdiameter: 2.0,
    radius: 21069000,
    speed: -626.32,
    parentId: `Jupiter`
  },
  {
    name: `Carpo`,
    halfdiameter: 1.5,
    radius: 17058000,
    speed: 456.3,
    parentId: `Jupiter`
  },
  {
    name: `Eukelade`,
    halfdiameter: 2.0,
    radius: 23328000,
    speed: -730.47,
    parentId: `Jupiter`
  },
  {
    name: `Cyllene`,
    halfdiameter: 1.0,
    radius: 23809000,
    speed: -752,
    parentId: `Jupiter`
  },
  {
    name: `Kore`,
    halfdiameter: 1.0,
    radius: 24543000,
    speed: -779.17,
    parentId: `Jupiter`
  },
  {
    name: `Herse`,
    halfdiameter: 1.0,
    radius: 22983000,
    speed: -714.51,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 1.0,
    radius: 23314335,
    speed: -723.2,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 0.5,
    radius: 20307150,
    speed: -588.1,
    parentId: `Jupiter`
  },
  {
    name: `Dia`,
    halfdiameter: 2.0,
    radius: 12570000,
    speed: 287.93,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 3.0,
    radius: 20595480,
    speed: -602.7,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 1.0,
    radius: 20426000,
    speed: -596.58,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 0.5,
    radius: 23329710,
    speed: -726.8,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 2.0,
    radius: 23498000,
    speed: -738.74,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 1.0,
    radius: 22630000,
    speed: -689.77,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 2.0,
    radius: 23483978,
    speed: -734.2,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 1.0,
    radius: 20224000,
    speed: -583.88,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 1.0,
    radius: 23535000,
    speed: -740.43,
    parentId: `Jupiter`
  },
  {
    name: `Valetudo`,
    halfdiameter: 0.5,
    radius: 18928095,
    speed: 532.0,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 1.0,
    radius: 23240957,
    speed: -723.8,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 1.0,
    radius: 20639315,
    speed: -605.8,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 1.0,
    radius: 11494801,
    speed: -251.8,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 1.0,
    radius: 23169389,
    speed: -720.5,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 1.0,
    radius: 22394682,
    speed: -684.7,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 1.0,
    radius: 20571458,
    speed: -602.8,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 0.5,
    radius: 23174446,
    speed: -720.7,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 1.0,
    radius: 21429955,
    speed: -640.9,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 1.0,
    radius: 11453004,
    speed: -250.4,
    parentId: `Jupiter`
  },
  {
    name: `Jupiter`,
    halfdiameter: 0.5,
    radius: 20155290,
    speed: -580.7,
    parentId: `Jupiter`
  },
  {
    name: `S`,
    halfdiameter: 1.0,
    radius: 28455000,
    speed: -981.55,
    parentId: `Jupiter`
  },
  {
    name: `S`,
    halfdiameter: 1.0,
    radius: 23933000,
    speed: -755.26,
    parentId: `Jupiter`
  },
  {
    name: `S`,
    halfdiameter: 0.5,
    radius: 23388000,
    speed: -733.3,
    parentId: `Jupiter`
  },
  {
    name: `S`,
    halfdiameter: 1.0,
    radius: 23044000,
    speed: -716.25,
    parentId: `Jupiter`
  },
  {
    name: `S`,
    halfdiameter: 0.5,
    radius: 17833000,
    speed: -489.72,
    parentId: `Jupiter`
  },
  {
    name: `S`,
    halfdiameter: 1.0,
    radius: 20956000,
    speed: -616.33,
    parentId: `Jupiter`
  },
  {
    name: `S`,
    halfdiameter: 1.0,
    radius: 23566000,
    speed: -732.45,
    parentId: `Jupiter`
  },
  {
    name: `Mimas`,
    halfdiameter: 198.2,
    radius: 185540,
    speed: 0.942,
    parentId: `Saturn`
  },
  {
    name: `Enceladus`,
    halfdiameter: 252.3,
    radius: 238040,
    speed: 1.37,
    parentId: `Saturn`
  },
  {
    name: `Tethys`,
    halfdiameter: 536.3,
    radius: 294670,
    speed: 1.888,
    parentId: `Saturn`
  },
  {
    name: `Dione`,
    halfdiameter: 562.5,
    radius: 377420,
    speed: 2.737,
    parentId: `Saturn`
  },
  {
    name: `Rhea`,
    halfdiameter: 764.5,
    radius: 527070,
    speed: 4.518,
    parentId: `Saturn`
  },
  {
    name: `Titan`,
    halfdiameter: 2575.5,
    radius: 1221870,
    speed: 15.95,
    parentId: `Saturn`
  },
  {
    name: `Hyperion`,
    halfdiameter: 138.6,
    radius: 1500880,
    speed: 21.28,
    parentId: `Saturn`
  },
  {
    name: `Iapetus`,
    halfdiameter: 734.5,
    radius: 3560840,
    speed: 79.33,
    parentId: `Saturn`
  },
  {
    name: `Phoebe`,
    halfdiameter: 106.6,
    radius: 12947780,
    speed: -550.31,
    parentId: `Saturn`
  },
  {
    name: `Janus`,
    halfdiameter: 90.4,
    radius: 151460,
    speed: 0.695,
    parentId: `Saturn`
  },
  {
    name: `Epimetheus`,
    halfdiameter: 58.3,
    radius: 151410,
    speed: 0.694,
    parentId: `Saturn`
  },
  {
    name: `Helene`,
    halfdiameter: 16,
    radius: 377420,
    speed: 2.737,
    parentId: `Saturn`
  },
  {
    name: `Telesto`,
    halfdiameter: 12,
    radius: 294710,
    speed: 1.888,
    parentId: `Saturn`
  },
  {
    name: `Calypso`,
    halfdiameter: 9.5,
    radius: 294710,
    speed: 1.888,
    parentId: `Saturn`
  },
  {
    name: `Atlas`,
    halfdiameter: 15.3,
    radius: 137670,
    speed: 0.602,
    parentId: `Saturn`
  },
  {
    name: `Prometheus`,
    halfdiameter: 46.8,
    radius: 139380,
    speed: 0.613,
    parentId: `Saturn`
  },
  {
    name: `Pandora`,
    halfdiameter: 40.6,
    radius: 141720,
    speed: 0.629,
    parentId: `Saturn`
  },
  {
    name: `Pan`,
    halfdiameter: 12.8,
    radius: 133580,
    speed: 0.575,
    parentId: `Saturn`
  },
  {
    name: `Ymir`,
    halfdiameter: 9,
    radius: 23140400,
    speed: -1315.58,
    parentId: `Saturn`
  },
  {
    name: `Paaliaq`,
    halfdiameter: 11,
    radius: 15200000,
    speed: 686.95,
    parentId: `Saturn`
  },
  {
    name: `Tarvos`,
    halfdiameter: 7.5,
    radius: 17983000,
    speed: 926.23,
    parentId: `Saturn`
  },
  {
    name: `Ijiraq`,
    halfdiameter: 6,
    radius: 11124000,
    speed: 451.42,
    parentId: `Saturn`
  },
  {
    name: `Suttungr`,
    halfdiameter: 3.5,
    radius: 19459000,
    speed: -1016.67,
    parentId: `Saturn`
  },
  {
    name: `Kiviuq`,
    halfdiameter: 8,
    radius: 11110000,
    speed: 449.22,
    parentId: `Saturn`
  },
  {
    name: `Mundilfari`,
    halfdiameter: 3.5,
    radius: 18628000,
    speed: -952.77,
    parentId: `Saturn`
  },
  {
    name: `Albiorix`,
    halfdiameter: 16,
    radius: 16182000,
    speed: 783.45,
    parentId: `Saturn`
  },
  {
    name: `Skathi`,
    halfdiameter: 4,
    radius: 15540000,
    speed: -728.2,
    parentId: `Saturn`
  },
  {
    name: `Erriapus`,
    halfdiameter: 5,
    radius: 17343000,
    speed: 871.19,
    parentId: `Saturn`
  },
  {
    name: `Siarnaq`,
    halfdiameter: 20,
    radius: 18015400,
    speed: 896.44,
    parentId: `Saturn`
  },
  {
    name: `Thrymr`,
    halfdiameter: 3.5,
    radius: 20314000,
    speed: -1094.11,
    parentId: `Saturn`
  },
  {
    name: `Narvi`,
    halfdiameter: 3.5,
    radius: 19007000,
    speed: -1003.86,
    parentId: `Saturn`
  },
  {
    name: `Methone`,
    halfdiameter: 1.6,
    radius: 194440,
    speed: 1.01,
    parentId: `Saturn`
  },
  {
    name: `Pallene`,
    halfdiameter: 2,
    radius: 212280,
    speed: 1.154,
    parentId: `Saturn`
  },
  {
    name: `Polydeuces`,
    halfdiameter: 1.25,
    radius: 377200,
    speed: 2.737,
    parentId: `Saturn`
  },
  {
    name: `Daphnis`,
    halfdiameter: 34,
    radius: 136500,
    speed: 0.594,
    parentId: `Saturn`
  },
  {
    name: `Aegir`,
    halfdiameter: 3,
    radius: 20751000,
    speed: -1117.52,
    parentId: `Saturn`
  },
  {
    name: `Bebhionn`,
    halfdiameter: 3,
    radius: 17119000,
    speed: 834.84,
    parentId: `Saturn`
  },
  {
    name: `Bergelmir`,
    halfdiameter: 3,
    radius: 19336000,
    speed: -1005.74,
    parentId: `Saturn`
  },
  {
    name: `Bestla`,
    halfdiameter: 3.5,
    radius: 20192000,
    speed: -1088.72,
    parentId: `Saturn`
  },
  {
    name: `Farbauti`,
    halfdiameter: 2.5,
    radius: 20377000,
    speed: -1085.55,
    parentId: `Saturn`
  },
  {
    name: `Fenrir`,
    halfdiameter: 2,
    radius: 22454000,
    speed: -1260.35,
    parentId: `Saturn`
  },
  {
    name: `Fornjot`,
    halfdiameter: 3,
    radius: 25146000,
    speed: -1494.2,
    parentId: `Saturn`
  },
  {
    name: `Hati`,
    halfdiameter: 3,
    radius: 19846000,
    speed: -1038.61,
    parentId: `Saturn`
  },
  {
    name: `Hyrrokkin`,
    halfdiameter: 4,
    radius: 18437000,
    speed: -931.86,
    parentId: `Saturn`
  },
  {
    name: `Kari`,
    halfdiameter: 3.5,
    radius: 22089000,
    speed: -1230.97,
    parentId: `Saturn`
  },
  {
    name: `Loge`,
    halfdiameter: 3,
    radius: 23058000,
    speed: -1311.36,
    parentId: `Saturn`
  },
  {
    name: `Skoll`,
    halfdiameter: 3,
    radius: 17665000,
    speed: -878.29,
    parentId: `Saturn`
  },
  {
    name: `Surtur`,
    halfdiameter: 3,
    radius: 22704000,
    speed: -1297.36,
    parentId: `Saturn`
  },
  {
    name: `Anthe`,
    halfdiameter: 1,
    radius: 197700,
    speed: 1.0365,
    parentId: `Saturn`
  },
  {
    name: `Jarnsaxa`,
    halfdiameter: 3,
    radius: 18811000,
    speed: -964.74,
    parentId: `Saturn`
  },
  {
    name: `Greip`,
    halfdiameter: 3,
    radius: 18206000,
    speed: -921.19,
    parentId: `Saturn`
  },
  {
    name: `Tarqeq`,
    halfdiameter: 3.5,
    radius: 18009000,
    speed: 887.48,
    parentId: `Saturn`
  },
  {
    name: `Aegaeon`,
    halfdiameter: 0.25,
    radius: 167500,
    speed: 0.808,
    parentId: `Saturn`
  },
  {
    name: `S`,
    halfdiameter: 3,
    radius: 20999000,
    speed: -1140.24,
    parentId: `Saturn`
  },
  {
    name: `S`,
    halfdiameter: 2.5,
    radius: 19878000,
    speed: -1046.19,
    parentId: `Saturn`
  },
  {
    name: `S`,
    halfdiameter: 3,
    radius: 18404000,
    speed: -933.48,
    parentId: `Saturn`
  },
  {
    name: `S`,
    halfdiameter: 2,
    radius: 19447000,
    speed: -1014.7,
    parentId: `Saturn`
  },
  {
    name: `S`,
    halfdiameter: 3,
    radius: 18790000,
    speed: -963.37,
    parentId: `Saturn`
  },
  {
    name: `S`,
    halfdiameter: 3,
    radius: 22096000,
    speed: -1227.21,
    parentId: `Saturn`
  },
  {
    name: `S`,
    halfdiameter: 3,
    radius: 16725000,
    speed: -808.08,
    parentId: `Saturn`
  },
  {
    name: `S`,
    halfdiameter: 3,
    radius: 18975000,
    speed: -977.8,
    parentId: `Saturn`
  },
  {
    name: `S`,
    halfdiameter: 0.15,
    radius: 117000,
    speed: 0.471,
    parentId: `Saturn`
  },
  {
    name: `Ariel`,
    halfdiameter: 578.9,
    radius: 190900,
    speed: 2.52,
    parentId: `Uranus`
  },
  {
    name: `Umbriel`,
    halfdiameter: 584.7,
    radius: 266000,
    speed: 4.144,
    parentId: `Uranus`
  },
  {
    name: `Titania`,
    halfdiameter: 788.9,
    radius: 436300,
    speed: 8.706,
    parentId: `Uranus`
  },
  {
    name: `Oberon`,
    halfdiameter: 761.4,
    radius: 583500,
    speed: 13.46,
    parentId: `Uranus`
  },
  {
    name: `Miranda`,
    halfdiameter: 235.8,
    radius: 129900,
    speed: 1.413,
    parentId: `Uranus`
  },
  {
    name: `Cordelia`,
    halfdiameter: 20.1,
    radius: 49800,
    speed: 0.335,
    parentId: `Uranus`
  },
  {
    name: `Ophelia`,
    halfdiameter: 21.4,
    radius: 53800,
    speed: 0.376,
    parentId: `Uranus`
  },
  {
    name: `Bianca`,
    halfdiameter: 25.7,
    radius: 59200,
    speed: 0.435,
    parentId: `Uranus`
  },
  {
    name: `Cressida`,
    halfdiameter: 39.8,
    radius: 61800,
    speed: 0.464,
    parentId: `Uranus`
  },
  {
    name: `Desdemona`,
    halfdiameter: 32.0,
    radius: 62700,
    speed: 0.474,
    parentId: `Uranus`
  },
  {
    name: `Juliet`,
    halfdiameter: 46.8,
    radius: 64400,
    speed: 0.493,
    parentId: `Uranus`
  },
  {
    name: `Portia`,
    halfdiameter: 67.6,
    radius: 66100,
    speed: 0.513,
    parentId: `Uranus`
  },
  {
    name: `Rosalind`,
    halfdiameter: 36,
    radius: 69900,
    speed: 0.558,
    parentId: `Uranus`
  },
  {
    name: `Belinda`,
    halfdiameter: 40.3,
    radius: 75300,
    speed: 0.624,
    parentId: `Uranus`
  },
  {
    name: `Puck`,
    halfdiameter: 81,
    radius: 86000,
    speed: 0.762,
    parentId: `Uranus`
  },
  {
    name: `Caliban`,
    halfdiameter: 49,
    radius: 7231100,
    speed: -579.73,
    parentId: `Uranus`
  },
  {
    name: `Sycorax`,
    halfdiameter: 75,
    radius: 12179400,
    speed: -1288.38,
    parentId: `Uranus`
  },
  {
    name: `Prospero`,
    halfdiameter: 25,
    radius: 16256000,
    speed: -1978.29,
    parentId: `Uranus`
  },
  {
    name: `Setebos`,
    halfdiameter: 24,
    radius: 17418000,
    speed: -2225.21,
    parentId: `Uranus`
  },
  {
    name: `Stephano`,
    halfdiameter: 10,
    radius: 8004000,
    speed: -677.36,
    parentId: `Uranus`
  },
  {
    name: `Trinculo`,
    halfdiameter: 9,
    radius: 8504000,
    speed: -749.24,
    parentId: `Uranus`
  },
  {
    name: `Francisco`,
    halfdiameter: 6,
    radius: 4276000,
    speed: -266.56,
    parentId: `Uranus`
  },
  {
    name: `Margaret`,
    halfdiameter: 5.5,
    radius: 14345000,
    speed: 1687.01,
    parentId: `Uranus`
  },
  {
    name: `Ferdinand`,
    halfdiameter: 6,
    radius: 20901000,
    speed: -2887.21,
    parentId: `Uranus`
  },
  {
    name: `Perdita`,
    halfdiameter: 15,
    radius: 76417,
    speed: 0.638,
    parentId: `Uranus`
  },
  {
    name: `Mab`,
    halfdiameter: 6,
    radius: 97736,
    speed: 0.923,
    parentId: `Uranus`
  },
  {
    name: `Cupid`,
    halfdiameter: 9,
    radius: 74392,
    speed: 0.613,
    parentId: `Uranus`
  },
  {
    name: `Triton`,
    halfdiameter: 1353.4,
    radius: 354800,
    speed: -5.877,
    parentId: `Neptune`
  },
  {
    name: `Nereid`,
    halfdiameter: 170,
    radius: 5513820,
    speed: 360.14,
    parentId: `Neptune`
  },
  {
    name: `Naiad`,
    halfdiameter: 33,
    radius: 48224,
    speed: 0.294,
    parentId: `Neptune`
  },
  {
    name: `Thalassa`,
    halfdiameter: 41,
    radius: 50075,
    speed: 0.311,
    parentId: `Neptune`
  },
  {
    name: `Despina`,
    halfdiameter: 75,
    radius: 52526,
    speed: 0.335,
    parentId: `Neptune`
  },
  {
    name: `Galatea`,
    halfdiameter: 88,
    radius: 61953,
    speed: 0.429,
    parentId: `Neptune`
  },
  {
    name: `Larissa`,
    halfdiameter: 97,
    radius: 73548,
    speed: 0.555,
    parentId: `Neptune`
  },
  {
    name: `Proteus`,
    halfdiameter: 210,
    radius: 117647,
    speed: 1.122,
    parentId: `Neptune`
  },
  {
    name: `Halimede`,
    halfdiameter: 31,
    radius: 15728000,
    speed: -1879.71,
    parentId: `Neptune`
  },
  {
    name: `Psamathe`,
    halfdiameter: 20,
    radius: 46695000,
    speed: -9115.91,
    parentId: `Neptune`
  },
  {
    name: `Sao`,
    halfdiameter: 22,
    radius: 22422000,
    speed: 2914.07,
    parentId: `Neptune`
  },
  {
    name: `Laomedeia`,
    halfdiameter: 21,
    radius: 23571000,
    speed: 3167.85,
    parentId: `Neptune`
  },
  {
    name: `Neso`,
    halfdiameter: 30,
    radius: 48387000,
    speed: -9373.99,
    parentId: `Neptune`
  },
  {
    name: `Hippocamp`,
    halfdiameter: 17.4,
    radius: 105283,
    speed: 0.9362,
    parentId: `Neptune`
  },
  {
    name: `Charon`,
    halfdiameter: 606,
    radius: 19591,
    speed: 6.387,
    parentId: `Pluto`
  },
  {
    name: `Nix`,
    halfdiameter: 23.0,
    radius: 48671,
    speed: 24.85,
    parentId: `Pluto`
  },
  {
    name: `Hydra`,
    halfdiameter: 30.5,
    radius: 64698,
    speed: 38.2,
    parentId: `Pluto`
  },
  {
    name: `Kerberos`,
    halfdiameter: 14.0,
    radius: 57729,
    speed: 32.17,
    parentId: `Pluto`
  },
  {
    name: `Styx`,
    halfdiameter: 10.0,
    radius: 42393,
    speed: 20.16,
    parentId: `Pluto`
  },
  {
    name: `Hi`,
    halfdiameter: 160,
    radius: 49880,
    speed: 49.12,
    parentId: `Haumea`
  },
  {
    name: `Namaka`,
    halfdiameter: 85,
    radius: 25657,
    speed: 18.2783,
    parentId: `Haumea`
  },
  {
    name: `S`,
    halfdiameter: 87.5,
    radius: 21000,
    speed: 12.4,
    parentId: `Makemake`
  },
  {
    name: `Dysnomia`,
    halfdiameter: 350,
    radius: 37370,
    speed: 15.774,
    parentId: `Eris`
  }
];
