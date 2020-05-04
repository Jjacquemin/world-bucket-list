let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.858159, lng: 2.294497},
        zoom: 3,
        mapTypeId: "roadmap" // roadmap, satellite, terrain
    });
    
    const marker = new google.maps.Marker({
        position: {lat: 48.858159, lng: 2.294497},
        map : map,
        icon: "./images/marker.png"
    });
}
export {initMap};
