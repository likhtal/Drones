const LIMITS = {1: 1500, 2: 500};

const DRONE_ICON1 = L.icon({
    iconUrl: 'img/drone-icon1.png',
    shadowUrl: 'img/drone-shadow.png',

    iconSize:     [95, 38], // size of the icon
    shadowSize:   [95, 38], // size of the shadow
    iconAnchor:   [48, 19], // point of the icon which will correspond to marker's location
    shadowAnchor: [30, 9],  // the same for the shadow
    popupAnchor:  [-76, -3] // point from which the popup should open relative to the iconAnchor
});

const DRONE_ICON2 = L.icon({
    iconUrl: 'img/drone-icon2.png',
    shadowUrl: 'img/drone-shadow.png',

    iconSize:     [95, 38], // size of the icon
    shadowSize:   [95, 38], // size of the shadow
    iconAnchor:   [48, 19], // point of the icon which will correspond to marker's location
    shadowAnchor: [30, 9],  // the same for the shadow
    popupAnchor:  [-76, -3] // point from which the popup should open relative to the iconAnchor
});

const EXPLOSION_ICON = L.icon({
    iconUrl: 'img/explosion.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [96, 96], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [48, 48], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-76, -3] // point from which the popup should open relative to the iconAnchor
});
