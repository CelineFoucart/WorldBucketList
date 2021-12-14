import { data } from './data.js';

const dreamsContainer = document.querySelector('#dreams-container');

function buildDreams() {
    while (dreamsContainer.hasChildNodes()) {
        dreamsContainer.removeChild(dreamsContainer.lastChild);
    }
    data.forEach(buildOneDream);
    addDreamListeners();
}

function buildOneDream(dream) {
    const dreamElement = document.createElement('div');
    dreamElement.innerHTML =
    `<div class="card text-center" id="${dream.id}">
        <h4 class="card-header font-weight-bold">${dream.description}</h4>
        <img class="card-img-top" src="${dream.imagePath}" alt="">
        <div class="card-body">
            <a href="#" class="button-action btn btn-${dream.done ? "secondary" : "danger"} btn-block font-weight-bold">${dream.done ? "Je veux le refaire" : "Je me lance !"}</a>
        </div>
        <div class="card-footer text-right">
            <a href="https://www.google.com/maps/@${dream.coordinates.lat},${dream.coordinates.lng},861m/data=!3m1!1e3" target="_blank" class="btn btn-outline-secondary btn-sm">Visiter</a>
            <a href="${dream.link}" target="_blank" class="button-info btn btn-outline-dark btn-sm">Plus d'infos</a>
        </div>
    </div>`;
    dreamsContainer.appendChild(dreamElement);
}

function addDreamListeners() {
    document.querySelectorAll('.button-action').forEach(item => {
        item.addEventListener('click', event => {
            const id = item.parentElement.parentElement.getAttribute("id");
            let dream = data.filter(item => item.id === parseInt(id))[0];
            console.log(dream, id);
            dream.done = !dream.done;
            buildDreams();
        });
    });
}

export { buildDreams };