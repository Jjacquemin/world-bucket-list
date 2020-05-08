import {data} from './data.js';
import {addMarkerOnMap} from './map.js';

const dreamsContainer = document.querySelector("#dreams-container");

function buildAllDreams() {
    while(dreamsContainer.hasChildNodes()) {
        dreamsContainer.removeChild(dreamsContainer.lastChild);
    }
    data.forEach(buildOneDream);   
}

function buildOneDream(dream) {
    const dreamElement = document.createElement("div");
    dreamElement.innerHTML = `
                    <div class="card text-center">
                      <h4 class="card-header font-weight-bold">
                        ${dream.description}
                      </h4>
                        <img src="${dream.imagePath}" class="card-img-top" alt="Card image cap">
                      <div class="card-body">
                        <a href="#" class="btn btn-${dream.done?"secondary":"danger"} font-weight-bold btn-block">${dream.done?"Je veux le refaire" :"Je me lance !"}</a>
                      </div>
                      <div class="card-footer text-muted text-right">
                        <a href="#" class="btn btn-outline-secondary btn-sm">Visiter</a>
                        <a href="${dream.link}" class="btn btn-outline-dark btn-sm">Plus d'infos</a>
                      </div>
                    </div>
`;
    dreamsContainer.appendChild(dreamElement);
    
    addMarkerOnMap(dream);
}

export {buildAllDreams};