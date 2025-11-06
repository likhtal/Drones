const DELAY = 10;

const COLOR = "#880808"

const LIMITS = {1: 2000, 2: 500, 3: 1300, 4: 1400, 5: 1500, 6: 1600};

const DRONE_NAMES = {1: "Drone #1", 2: "Drone #2", 3: "Drone #3", 4: "Drone #4", 5: "Drone #5", 6: "Drone #6"};

const DRONE_ICON1 = L.icon({
    iconUrl: 'img/drone-icon1.png',
    shadowUrl: 'img/drone1-shadow.png',

    iconSize:     [95, 38], // size of the icon
    shadowSize:   [95, 38], // size of the shadow
    iconAnchor:   [48, 19], // point of the icon which will correspond to marker's location
    shadowAnchor: [30, 9],  // the same for the shadow
    popupAnchor:  [-76, -3] // point from which the popup should open relative to the iconAnchor
});

const DRONE_ICON2 = L.icon({
    iconUrl: 'img/drone-icon2.png',
    shadowUrl: 'img/drone2-shadow.png',

    iconSize:     [95, 38], // size of the icon
    shadowSize:   [95, 38], // size of the shadow
    iconAnchor:   [48, 19], // point of the icon which will correspond to marker's location
    shadowAnchor: [30, 9],  // the same for the shadow
    popupAnchor:  [-76, -3] // point from which the popup should open relative to the iconAnchor
});

const DRONE_ICON3 = L.icon({
    iconUrl: 'img/drone-icon1.png',
    shadowUrl: 'img/drone1-shadow.png',

    iconSize:     [95, 38], // size of the icon
    shadowSize:   [95, 38], // size of the shadow
    iconAnchor:   [48, 19], // point of the icon which will correspond to marker's location
    shadowAnchor: [30, 9],  // the same for the shadow
    popupAnchor:  [-76, -3] // point from which the popup should open relative to the iconAnchor
});

const DRONE_ICON4 = L.icon({
    iconUrl: 'img/drone-icon1.png',
    shadowUrl: 'img/drone1-shadow.png',

    iconSize:     [95, 38], // size of the icon
    shadowSize:   [95, 38], // size of the shadow
    iconAnchor:   [48, 19], // point of the icon which will correspond to marker's location
    shadowAnchor: [30, 9],  // the same for the shadow
    popupAnchor:  [-76, -3] // point from which the popup should open relative to the iconAnchor
});

const DRONE_ICON5 = L.icon({
    iconUrl: 'img/drone-icon1.png',
    shadowUrl: 'img/drone1-shadow.png',

    iconSize:     [95, 38], // size of the icon
    shadowSize:   [95, 38], // size of the shadow
    iconAnchor:   [48, 19], // point of the icon which will correspond to marker's location
    shadowAnchor: [30, 9],  // the same for the shadow
    popupAnchor:  [-76, -3] // point from which the popup should open relative to the iconAnchor
});

const DRONE_ICON6 = L.icon({
    iconUrl: 'img/drone-icon1.png',
    shadowUrl: 'img/drone1-shadow.png',

    iconSize:     [95, 38], // size of the icon
    shadowSize:   [95, 38], // size of the shadow
    iconAnchor:   [48, 19], // point of the icon which will correspond to marker's location
    shadowAnchor: [30, 9],  // the same for the shadow
    popupAnchor:  [-76, -3] // point from which the popup should open relative to the iconAnchor
});

const DRONES = {1: DRONE_ICON1, 2: DRONE_ICON2, 3: DRONE_ICON3, 4: DRONE_ICON4, 5: DRONE_ICON5, 6: DRONE_ICON6};

const EXPLOSION_ICON = L.icon({
    iconUrl: 'img/explosion.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [96, 96], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [48, 48], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-76, -3] // point from which the popup should open relative to the iconAnchor
});
