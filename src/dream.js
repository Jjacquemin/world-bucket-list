import {data} from './data.js';
import {addMarkerOnMap} from './map.js';

function buildAllDreams() {
    data.forEach(buildOneDream);   
}

function buildOneDream(dream) {
    addMarkerOnMap(dream);
}

export {buildAllDreams};