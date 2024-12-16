// Create the map
var map = L.map('map').setView([71.505, -3.09], 13);

// Add a basemap tile layer (you can choose a different one if you like)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// Load your GeoJSON layers (replace with your actual file names)
var layer1 = L.geoJSON(null); // Initialize empty layers
var layer2 = L.geoJSON(null);

fetch('layer1.geojson')
    .then(response => response.json())
    .then(data => {
         layer1.addData(data);
    });

fetch('layer2.geojson')
    .then(response => response.json())
    .then(data => {
        layer2.addData(data);
    });




// Create control for layer visibility
var overlayMaps = {
    "Layer 1": layer1,
    "Layer 2": layer2
};

L.control.layers(null, overlayMaps).addTo(map);
