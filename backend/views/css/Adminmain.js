const apiKey = 'pk.eyJ1Ijoienlub2NvZGVzIiwiYSI6ImNsZnl1Y2w3bzA4YjkzbW10aXFvYTJoYm8ifQ.wqP0wnxpZIjsUSlMXfGqJQ';

const map = L.map('map').setView([35.25085802266448, -1.1686706542968752], 9.5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);



// Adding Marker
var marker = {};
function onMapClick(e) {
    lat = e.latlng.lat;
    lon = e.latlng.lng;
    console.log("You clicked the map at LAT: "+ lat+" and LONG: "+lon );
        //Clear existing marker, 

        if (marker != undefined) {
            map.removeLayer(marker);
        };

    //Add a marker to show where you clicked.
    marker = L.marker([lat,lon]).addTo(map);
    // Add popup message
    let template = `
    <h3>${lat + ', ' + lon}</h3>
    <div style="text-align:center">
        <img width="150" height="150"src="images/image.jpg"/>
        <button type="submit" title="Add" style="color: red"></button>
    </div>
    `
    marker.bindPopup(template);
    
}
map.on('click', onMapClick);

// Add Polygon

const polygon = L.polygon([
   
    [35.31575142965346, -1.1226439476013186],
    [35.300969163115546, -1.1295104026794436],
    [35.29087924098115, -1.1244463920593264],
    [35.29031865286951, -1.1428999900817873],
    [35.29704545398069, -1.1435008049011233],
    [35.30272075755531, -1.1556887626647951],
    [35.320514807289904, -1.1438441276550295],
], {
    color:'blue',
    fillColor:'blue',
    fillOpacity:0.2
}).addTo(map).bindPopup(' I am Ain temouchent')



let addButton = document.getElementById('add-btn');
let closeButton = document.getElementById('close-class');
let mapContainer = document.querySelector('.map-container');

addButton.addEventListener('click', () => {
    mapContainer.classList.add('new-article-active');
})

closeButton.addEventListener('click', () => {
    mapContainer.classList.remove('new-article-active');
})

