// initialize the map on the "map" div with a given center and zoom
var map = new L.Map('map', {
    zoom: 40,
    minZoom: 10,
});

// create a new tile layer
var tileUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    layer = new L.TileLayer(tileUrl,
        {
            attribution: 'Maps © <a href=\"www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',
            maxZoom: 18
        });

// add the layer to the map
map.addLayer(layer);

var Pointsofstopping = [
    [34.050499, -6.813492],

    [34.059783, -6.802546],
    [34.059783, -6.802546],

    [34.063972, -6.808971],
    [34.063972, -6.808971],

    [34.061447, -6.812482],
    [34.061447, -6.812482],

    [34.059344, -6.817213],
    [34.059344, -6.817213],

    [34.053808, -6.822638],
    [34.053808, -6.822638],

    [34.046701, -6.828114],
    [34.046701, -6.828114],

    [34.041947, -6.820833],
    [34.041947, -6.820833],

    [34.050499, -6.813492],
    [34.050499, -6.813492]
];
map.fitBounds(Pointsofstopping);

var durations = [
    5000,

    2000,
    5000,

    2000,
    4000,

    2000,
    3000,

    2000,
    3000,

    2000,
    3000,

    2000,
    4000,

    2000,
    5000
];
var marker1 = L.Marker.movingMarker(Pointsofstopping, durations).addTo(map);

// Add icons for each point
var icons = [];
for (var i = 0; i < Pointsofstopping.length; i++) {
    var icon = L.icon({
        iconUrl: 'https://st4.depositphotos.com/24479230/30259/v/600/depositphotos_302598362-stock-illustration-muster-point-symbol-sign-vector.jpg',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
    });
    icons.push(icon);
    var marker = L.marker(Pointsofstopping[i], { icon: icon }).addTo(map);
}

L.polyline(Pointsofstopping).addTo(map);

marker1.once('click', function () {
    marker1.start();
    marker1.closePopup();
    marker1.unbindPopup();
    marker1.on('click', function () {
        if (marker1.isRunning()) {
            marker1.pause();
        } else {
            marker1.start();
        }
    });
    // setTimeout(function () {
    //     marker1.bindPopup('<b>Click me to pause !</b>').openPopup();
    // }, 2000);
});

marker1.on('end', function () {
    marker1.bindPopup('<b>Click to start the ride again !</b> ', { closeOnClick: false }).openPopup();
});

marker1.bindPopup('<b>Click to start the ride</b>', { closeOnClick: false });
marker1.openPopup();