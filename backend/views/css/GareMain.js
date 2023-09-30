document.addEventListener("DOMContentLoaded", function () {
    const apiKey = 'pk.eyJ1Ijoienlub2NvZGVzIiwiYSI6ImNsZnl1Y2w3bzA4YjkzbW10aXFvYTJoYm8ifQ.wqP0wnxpZIjsUSlMXfGqJQ';

    const GareMap = L.map('GareMap').setView([35.25085802266448, -1.1686706542968752], 9.5);
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: apiKey
    }).addTo(GareMap);
    
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
    // var lineCoordinates = [
    //   [35.69873978861225, -0.638246122889966],
    //   [35.19818878238979, -0.638986240747964],
    //   [34.8838884782675, -1.29996700832521],
    //   [34.843525731781575, -1.725710056911823],
    //   [34.68234233656023, -1.92172169537964]
    // ];
    var polyline = L.polyline(lineCoordinates, { color: 'blue', weight: 10 });
    polyline.addTo(GareMap);
    //colors
    const PrimaryColor = 'red'
    const FillColor = '#f03'
    //icons
    var GarsIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        iconSize: [25, 41],
        iconAnchor:   [12, 41],
    });
    // Places Data
    const GarsData = [{
        "_id": {
          "$oid": "64870747f4705307bba4910c"
        },
        "wkt_geom": "Point (-0.63893611253705607 35.69816801454017963)",
        "Type": "Gare Terminus",
        "wilaya": "Oran",
        "Ancien_Nom": "Gare de Karguentah",
        "Dispositio": "En U",
        "Code_Wilay": 31,
        "Code_Commu": 3101,
        "Commune": "Oran",
        "PositionKm": "421k.245m,00",
        "M_Oeuvre": "Albert Ballut (Architecte)",
        "LigneFerro": "Oran_Tlélat",
        "StyleArchi": "Néo-Mauresque",
        "Date_Const": "01-01-1868",
        "Date_Recon": "1912-1913",
        "Cie_Ferrov": "P.L.M",
        "Etat_Actu": "Fonctionnel",
        "LattitudeY": "35.69873978861225",
        "LongitudeX": "-0.638246122889966",
        "Nom": "Gare d'Oran"
      },
      {
        "_id": {
          "$oid": "64870747f4705307bba49116"
        },
        "wkt_geom": "Point (-0.63839096525188599 35.19929255061203577)",
        "Type": "Gare Terminus",
        "wilaya": "Sidi-Bel-Abbes",
        "Ancien_Nom": "Gare_de_Sidi-Bel-Abbes",
        "Dispositio": "Latérale",
        "Code_Wilay": 22,
        "Code_Commu": 2201,
        "Commune": "Sidi-Bel-Abbes",
        "PositionKm": "51k.572m,60",
        "M_Oeuvre": "MM.Wybo et Lagrange(Architecte)",
        "LigneFerro": "Tlélat_Sidi Bel Abbes",
        "StyleArchi": "Moderne(Art déco)",
        "Date_Const": "03.05.1877",
        "Date_Recon": "11.08.1932",
        "Cie_Ferrov": "Cie O.A Puis P.L.M",
        "Etat_Actu": "Fonctionnel",
        "LattitudeY": "35.19818878238979",
        "LongitudeX": "-0.638986240747964",
        "Nom": "Gare de Sidi Bel Abbès"
      },
      {
        "_id": {
          "$oid": "64870747f4705307bba49121"
        },
        "wkt_geom": "Point (-1.3011123591539373 34.88508891000836343)",
        "Type": "Gare Terminus",
        "wilaya": "Tlemcen",
        "Ancien_Nom": "Gare de Tlemcen",
        "Dispositio": "Latérale",
        "Code_Wilay": 13,
        "Code_Commu": 1301,
        "Commune": "Tlemcen",
        "PositionKm": "138k.660m,33",
        "M_Oeuvre": "Mr Clerc (Ingénieur)",
        "LigneFerro": "Tabia-Tlemcen",
        "StyleArchi": "Néo-Mauresque",
        "Date_Const": "15.04.1890",
        "Date_Recon": "03.04.1957(Modernis)",
        "Cie_Ferrov": "Cie O.A Puis C.F.A",
        "Etat_Actu": "Fonctionnel",
        "LattitudeY": "34.8838884782675",
        "LongitudeX": "-1.29996700832521",
        "Nom": "Gare_de_Tlemcen"
      },
      {
        "_id": {
          "$oid": "64870747f4705307bba49128"
        },
        "wkt_geom": "Point (-1.72685353425828181 34.84283384761207003)",
        "Type": "Gare Terminus",
        "wilaya": "Tlemcen",
        "Ancien_Nom": "Marnia",
        "Dispositio": "Latérale",
        "Code_Wilay": 13,
        "Code_Commu": 1327,
        "Commune": "MAGHNIA",
        "PositionKm": "197k.906m,84",
        "LigneFerro": "Tlemcen-F.du Maroc",
        "StyleArchi": "Néo-Classique",
        "Date_Recon": "Non Reconstruite",
        "Cie_Ferrov": "Cie O.A",
        "Etat_Actu": "Fonctionnel",
        "LattitudeY": "34.843525731781575",
        "LongitudeX": "-1.725710056911823",
        "Nom": "Maghnia"
      },
      {
        "_id": {
          "$oid": "64870747f4705307bba4912a"
        },
        "wkt_geom": "Point (-1.92172169537963966 34.68234233656023235)",
        "Type": "Gare Terminus",
        "wilaya": "Oujda(Maroc)",
        "Ancien_Nom": "Gare d'Oujda",
        "Dispositio": "Latérale",
        "Code_Wilay": 0,
        "Code_Commu": 0,
        "Commune": "Oujda",
        "PositionKm": "222k.093m,79",
        "LigneFerro": "Tlemcen-F.du Maroc",
        "StyleArchi": "Néo-Mauresque",
        "Date_Const": 1916,
        "Date_Recon": 1928,
        "Etat_Actu": "Fonctionnel",
        "LattitudeY": "34.68234233656023",
        "LongitudeX": "-1.92172169537964",
        "Nom": "Nouvelle Gare Oujda"
    }]
    // function to add markers to the map
    function addMarkersToMap(data, Icon) {
        data.forEach((JSONData) => {
            const lat = JSONData.LattitudeY;
            const lon = JSONData.LongitudeX;
    
            // Add a marker to show the location.
            const Place = L.marker([lat, lon], { icon: Icon }).addTo(GareMap);
            const circle = L.circle([lat, lon], {
                color: PrimaryColor,
                fillColor: FillColor,
                fillOpacity: 0.2,
                radius: 50
            }).addTo(GareMap);
    
            // Add popup message
            const id = JSONData._id.$oid;
            const template = `
                <div style="text-align:center" class="LocationDisplay">
                    <form method="POST" action="/places/${id}">
                        <h1>${JSONData.Nom}</h1>
                        <h2>Location:</h2>
                        <h3>${lat + ', ' + lon}</h3>
                        <input type="submit" value="voir"/>
                    </form>
                </div>
            `;
            Place.bindPopup(template);
        });
    }
    function Markers(){
        addMarkersToMap(GarsData, GarsIcon)
    }
    Markers();
});


