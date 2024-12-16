                      
// Create the map and set its initial view
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a basemap tile layer (this is your background layer)
var osmLayer = L.tileLayer('https://a.tile.openstreetmap.org/8/127/87.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // Automatically add this base layer to the map

// Add another basemap as an option (e.g., a different style of basemap)
var satelliteLayer = L.tileLayer('https://a.tile.openstreetmap.org/8/127/83.png', {
    attribution: 'Map data &copy; OpenTopoMap contributors'
});

// Create your GeoJSON layers (these will be toggleable)
var layer1 = L.geoJSON(null, { style: { color: 'blue' } }).addTo(map); // Load data later
var layer2 = L.geoJSON(null, { style: { color: 'green' } }).addTo(map); // Load data later

// Load GeoJSON data for each layer
fetch('layer1.geojson')
    .then(response => response.json())
    .then(data => layer1.addData(data)); // Add data to layer1

fetch('layer2.geojson')
    .then(response => response.json())
    .then(data => layer2.addData(data)); // Add data to layer2

// Create a layer control, allowing the user to toggle between base layers and GeoJSON layers
var baseMaps = {
    "OpenStreetMap": osmLayer,
    "Satellite": satelliteLayer
};

var overlayMaps = {
    "Blue Layer": layer1,
    "Green Layer": layer2
};

// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps).addTo(map);
