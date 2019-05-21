// array containing all the data for the objects in the solar system

// solar system
exports.solarSystemData = {
  sun: {
    id: "sun",
    name: "Sun",
    parentId: "universe",
    angle: 0,
    angleChange: 0,
    diameter: 200,
    radius: 0,
    speed: 0,
    color: "#FFF048",
    zIndexVariation: 0
  },
  mercury: {
    id: "mercury",
    name: "Mercury",
    parentId: "sun",
    angle: 10,
    angleChange: 0.03,
    diameter: 15,
    radius: 150,
    speed: 1,
    color: "#FFE7D6",
    zIndexVariation: 100
  },
  venus: {
    id: "venus",
    name: "Venus",
    parentId: "sun",
    angle: 200,
    angleChange: 0.028,
    diameter: 25,
    radius: 250,
    speed: 0.85,
    color: "#FFCF10",
    zIndexVariation: 200
  },
  earth: {
    id: "earth",
    name: "Earth",
    parentId: "sun",
    angle: 0,
    angleChange: 0.025,
    diameter: 30,
    radius: 400,
    speed: 0.5,
    color: "#2da8ff",
    zIndexVariation: 300
  },
  moon: {
    id: "moon",
    name: "Moon",
    parentId: "earth",
    angle: 0,
    angleChange: 0.05,
    diameter: 5,
    radius: 50,
    speed: 2,
    color: "#FFE7D6",
    zIndexVariation: 1
  },
  mars: {
    id: "mars",
    name: "Mars",
    parentId: "sun",
    angle: 100,
    angleChange: 0.023,
    diameter: 20,
    radius: 600,
    speed: 0.5,
    color: "#FF5F36",
    zIndexVariation: 400
  },
  deimos: {
    id: "deimos",
    name: "Deimos",
    parentId: "mars",
    angle: 5,
    angleChange: 0.05,
    diameter: 4,
    radius: 40,
    speed: 1.9,
    color: "#FFE7D6",
    zIndexVariation: 1
  },
  phobos: {
    id: "phobos",
    name: "Phobos",
    parentId: "mars",
    angle: 25,
    angleChange: 0.06,
    diameter: 3,
    radius: 55,
    speed: 2.1,
    color: "#FFE7D6",
    zIndexVariation: 2
  }
};
