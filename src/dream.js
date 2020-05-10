import {data} from './data.js';
import {addMarkerOnMap, visitDreamOnMap} from './map.js';

const dreamsContainer = document.querySelector("#dreams-container");

function buildAllDreams() {
    while(dreamsContainer.hasChildNodes()) {
        dreamsContainer.removeChild(dreamsContainer.lastChild);
    }
    data.forEach(buildOneDream);
    addDreamsListeners();
}

function buildOneDream(dream) {
    const dreamElement = document.createElement("div");
    dreamElement.innerHTML = `
                    <div class="card text-center" id="${dream.id}">
                      <h4 class="card-header font-weight-bold">
                        ${dream.description}
                      </h4>
                        <img src="${dream.imagePath}" class="card-img-top" alt="Card image cap">
                      <div class="card-body">
                        <a href="#" class="btn btn-${dream.done?"secondary":"danger"} font-weight-bold btn-block">${dream.done?"Je veux le refaire" :"Je me lance !"}</a>
                      </div>
                      <div class="card-footer text-muted text-right">
                        <a href="#" class="button-visit btn btn-outline-secondary btn-sm">Visiter</a>
                        <a href="${dream.link}" target= "_blank" class="btn btn-outline-dark btn-sm">Plus d'infos</a>
                      </div>
                    </div>
`;
    dreamsContainer.appendChild(dreamElement);
    
    addMarkerOnMap(dream);
}

function addDreamsListeners(){
    document.querySelectorAll(".button-visit").forEach(item => {
       item.addEventListener("click", event => {
           visitDream(item.parentElement.parentElement.getAttribute("id"));
       }); 
    });
}

function visitDream(dreamId) {
    const position = data.filter(item => item.id == dreamId)[0].coordinates;
    visitDreamOnMap(position);
}

export {buildAllDreams};