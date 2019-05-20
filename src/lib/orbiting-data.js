// array containing all the data for the objects in the solar system

// solar system
exports.solarSystemData = {
  Sun: {
    id: "sun",
    name: "Sun",
    parentId: false,
    angle: 0,
    angleChange: 0,
    diameter: 100,
    radius: 0,
    speed: 0,
    color: "#FFF048"
  },
  Earth: {
    id: "earth",
    name: "Earth",
    parentId: "sun",
    angle: 45,
    angleChange: 0.025,
    diameter: 30,
    radius: 400,
    speed: 0.5,
    color: "#2da8ff"
  },
  Moon: {
    id: "moon",
    name: "Moon",
    parentId: "earth",
    angle: 0,
    angleChange: 0.05,
    diameter: 10,
    radius: 100,
    speed: 2,
    color: "#FFE7D6"
  }
};
exports.solarSystemData1 = {
  Sun: {
    name: "Sun",
    diameter: 75,
    radius: 0,
    speed: 0,
    orbitOffset: 0,
    color: "#FFF048"
  },
  Mercury: {
    name: "Mercury",
    diameter: 15,
    radius: 100,
    speed: 1.3,
    orbitOffset: 0,
    color: "#FFE7D6"
  },
  Venus: {
    name: "Venus",
    diameter: 20,
    radius: 200,
    speed: 1.1,
    orbitOffset: 30,
    color: "#FFCF10"
  },
  Earth: {
    name: "Earth",
    diameter: 30,
    radius: 400,
    speed: 1,
    orbitOffset: 45,
    color: "#2da8ff"
  },
  Mars: {
    name: "Mars",
    diameter: 25,
    radius: 600,
    speed: 0.9,
    orbitOffset: 60,
    color: "#FF5F36"
  }
};
