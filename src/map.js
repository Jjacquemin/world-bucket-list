let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.858159, lng: 2.294497},
        zoom: 3,
        mapTypeId: "roadmap" // roadmap, satellite, terrain
    });
}

function addMarkerOnMap(dream) {
    const marker = new google.maps.Marker({
        position: dream.coordinates,
        map : map,
        icon: dream.done ? "images/marker_done.png" : "images/marker.png"
    });
}

export {initMap,addMarkerOnMap};
