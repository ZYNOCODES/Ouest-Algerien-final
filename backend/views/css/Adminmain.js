const apiKey = 'pk.eyJ1Ijoienlub2NvZGVzIiwiYSI6ImNsZnl1Y2w3bzA4YjkzbW10aXFvYTJoYm8ifQ.wqP0wnxpZIjsUSlMXfGqJQ';

const map = L.map('map').setView([35.25085802266448, -1.1686706542968752], 9.5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);



// // Adding Marker
// var marker = {};
// function onMapClick(e) {
//     lat = e.latlng.lat;
//     lon = e.latlng.lng;
//     console.log("You clicked the map at LAT: "+ lat+" and LONG: "+lon );
//         //Clear existing marker, 

//         if (marker != undefined) {
//             map.removeLayer(marker);
//         };

//     //Add a marker to show where you clicked.
//     marker = L.marker([lat,lon]).addTo(map);
//     // Add popup message
//     let template = `
//     <h3>${lat + ', ' + lon}</h3>
//     <div style="text-align:center">
//         <img width="150" height="150"src="images/image.jpg"/>
//         <button type="submit" title="Add" style="color: red"></button>
//     </div>
//     `
//     marker.bindPopup(template);
    
// }
// map.on('click', onMapClick);

// Add Polygon


// Create polyline
var lineCoordinates = [
    [35.69873978861225,-0.638246122889966],
    [35.620785751059096,-0.587130866775292],
    [35.571189937514404,-0.542709265572674],
    [35.54640802694567,-0.451877913450755],
    [35.51251325759334,-0.409461181912292],
    [35.46468716752258,-0.394971002004698],
    [35.36335514696351,-0.509810282506524],
    [35.30571864597986,-0.548126089601797],
    [35.2614948947815,-0.568341666776229],
    [35.19818878238979,-0.638986240747964],
    [35.164151645081716,-0.687870932839916],
    [35.11254620982446,-0.714891602615403],
    [35.05908450831036,-0.724831277543694],
    [35.02105796173658,-0.74320176925427],
    [34.96313968410208,-0.859732376506406],
    [34.933297455112964,-0.914493494491647],
    [34.929732683452066,-0.956618569601194],
    [34.9025044549154,-1.026417210924172],
    [34.86911516043487,-1.131273656413615],
    [34.87694183471008,-1.241009846869554],
    [34.8838884782675,-1.29996700832521],
    [34.87226781556607,-1.342611666673615],
    [34.853547776791025,-1.405527702450567],
    [34.85156117106218,-1.438351977120567],
    [34.82672874650801,-1.522472239359875],
    [34.77424460929712,-1.63696947207084],
    [34.78806731630351,-1.673740095519786],
    [34.843525731781575,-1.725710056911823],
    [34.787887688424256,-1.80241009315232],
    [34.68234233656023,-1.92172169537964],
];
var polyline = L.polyline(lineCoordinates, { color: 'gold', weight: 10 }).addTo(map);

//colors
const PrimaryColor = 'red'
const FillColor = '#f03'
//icons
var GarsIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor:   [12, 41],
});
var HalteIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    iconSize: [25, 41],
    iconAnchor:   [12, 41],
});
var StationIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    iconSize: [25, 41],
    iconAnchor:   [12, 41],
});
   
// Places
function GareOran() {
    lat = "35.69873978861225";
    lon = "-0.638246122889966";
    
    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: GarsIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba4910c"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Gare d'Oran</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function EsSénia() {
    lat = "35.6513070936874";
    lon = "-0.607681997218178";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba4910d"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Es Sénia</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function Valmy() {
    lat = "35.620785751059096";
    lon = "-0.587130866775292";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba4910e"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Valmy</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function Arbal() {
    lat = "35.571189937514404";
    lon = "-0.542709265572674";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba4910f"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Arbal</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function OuedTlélat() {
    lat = "35.54640802694567";
    lon = "-0.451877913450755";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49110"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Oued Tlélat</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function Zahana() {
    lat = "35.51251325759334";
    lon = "-0.409461181912292";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49111"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Zahana</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function LauriersRoses() {
    lat = "35.46468716752258";
    lon = "-0.394971002004698";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49112"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Lauriers Roses</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function AinElBerd() {
    lat = "35.36335514696351";
    lon = "-0.509810282506524";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49113"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Ain El Berd</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function SidiHamadouche() {
    lat = "35.30571864597986";
    lon = "-0.548126089601797";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49114"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Sidi Hamadouche</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function SidiBrahim() {
    lat = "35.2614948947815";
    lon = "-0.568341666776229";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49115"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Sidi Brahim</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function GaredeSidiBelAbbès() {
    lat = "35.19818878238979";
    lon = "-0.638986240747964";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: GarsIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49116"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Gare de Sidi BelAbbès</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function SidiLahcen() {
    lat = "35.164151645081716";
    lon = "-0.687870932839916";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49117"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Sidi Lahcen</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function SidiKhaled() {
    lat = "35.11254620982446";
    lon = "-0.714891602615403";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49118"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Sidi Khaled</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function Bouchabka() {
    lat = "35.05908450831036";
    lon = "-0.724831277543694";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49119"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Bouchabka</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function Tabia() {
    lat = "35.02105796173658";
    lon = "-0.74320176925427";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba4911a"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Tabia</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function TffaminTassin() {
    lat = "34.96313968410208";
    lon = "-0.859732376506406";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba4911b"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Tffamin Tassin</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function BenBadis() {
    lat = "34.933297455112964";
    lon = "-0.914493494491647";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba4911c"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Ben Badis</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function AinTellout() {
    lat = "34.929732683452066";
    lon = "-0.956618569601194";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba4911d"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Ain Tellout</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function OuledMimoun() {
    lat = "34.9025044549154";
    lon = "-1.026417210924172";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba4911e"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Ouled Mimoun</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function OuedLakhdar() {
    lat = "34.86911516043487";
    lon = "-1.131273656413615";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: HalteIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba4911f"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Oued Lakhdar</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function AinFezza() {
    lat = "34.87694183471008";
    lon = "-1.241009846869554";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: HalteIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49120"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Ain Fezza</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function GareDeTlemcen() {
    lat = "34.8838884782675";
    lon = "-1.29996700832521";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: GarsIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49121"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Gare De Tlemcen</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function Mansourah() {
    lat = "34.87226781556607";
    lon = "-1.342611666673615";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: HalteIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49122"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Mansourah</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function AinDouz() {
    lat = "34.853547776791025";
    lon = "-1.405527702450567";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: HalteIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49123"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Ain Douz</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function Zelboune() {
    lat = "34.85156117106218";
    lon = "-1.438351977120567";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49124"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Zelboune</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function Sebra() {
    lat = "34.82672874650801";
    lon = "-1.522472239359875";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49125"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Sebra</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function SidiMedjahed() {
    lat = "34.77424460929712";
    lon = "-1.63696947207084";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: HalteIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49126"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Sidi Medjahed</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function Teghalimet() {
    lat = "34.78806731630351";
    lon = "-1.673740095519786";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49127"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Teghalimet</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function Maghnia() {
    lat = "34.843525731781575";
    lon = "-1.725710056911823";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: GarsIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49128"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Maghnia</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function AkidAbbes() {
    lat = "34.787887688424256";
    lon = "-1.80241009315232";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: StationIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba49129"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Akid Abbes</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function NouvelleGareOujda() {
    lat = "34.68234233656023";
    lon = "-1.92172169537964";

    //Add a marker to show where you clicked.
    const Place = L.marker([lat,lon],{icon: GarsIcon}).addTo(map);
    const circle = L.circle([lat,lon], {
        color: PrimaryColor,
        fillColor: FillColor,
        fillOpacity: 0.2,
        radius: 50
    }).addTo(map);
    // Add popup message
    id = "64870747f4705307bba4912a"
    let template = `
    <div style="text-align:center" class="LocationDisplay">
        <form methode="POST" action="/places/Place/${id}">    
            <h1>Nouvelle Gare Oujda</h1>
            <h2>Location :</h2>
            <h3>${lat + ', ' + lon}</h3>
            <input type="submit" value="voir"/>
        </form>
    </div>
    `
    Place.bindPopup(template);
    
}

function Markers(){
    GareOran()
    EsSénia()
    Valmy()
    Arbal()
    OuedTlélat()
    Zahana()
    LauriersRoses()
    AinElBerd()
    SidiHamadouche()
    SidiBrahim()
    GaredeSidiBelAbbès()
    SidiLahcen()
    SidiKhaled()
    Bouchabka()
    Tabia()
    TffaminTassin()
    BenBadis()
    AinTellout()
    OuledMimoun()
    OuedLakhdar()
    AinFezza()
    GareDeTlemcen()
    Mansourah()
    AinDouz()
    Zelboune()
    Sebra()
    SidiMedjahed()
    Teghalimet()
    Maghnia()
    AkidAbbes()
    NouvelleGareOujda()

}
map.add(Markers());


let addButton = document.getElementById('add-btn');
let closeButton = document.getElementById('close-class');
let mapContainer = document.querySelector('.map-container');

addButton.addEventListener('click', () => {
    mapContainer.classList.add('new-article-active');
})

closeButton.addEventListener('click', () => {
    mapContainer.classList.remove('new-article-active');
})

