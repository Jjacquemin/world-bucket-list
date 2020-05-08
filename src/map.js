let map;
const resetMapButton = document.querySelector("#reset-map");

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.858159, lng: 2.294497},
        zoom: 3,
        mapTypeId: "roadmap" // roadmap, satellite, terrain
    });
    addMapListeners();
}

function addMapListeners() {
    resetMapButton.addEventListener("click", resetMap);
}

function addMarkerOnMap(dream) {
    const marker = new google.maps.Marker({
        position: dream.coordinates,
        map : map,
        icon: dream.done ? "images/marker_done.png" : "images/marker.png"
    });
    
    marker.addListener('click', function() {zoomOn(marker.getPosition())});
    
}
                       
function zoomOn(position) {
        map.setZoom(20);
        map.setCenter(position);
        map.setMapTypeId("satellite");
}

function resetMap() {
        map.setZoom(3);
        map.setCenter({lat: 48.858159, lng: 2.294497});
        map.setMapTypeId("roadmap");
}

export {initMap,addMarkerOnMap};
