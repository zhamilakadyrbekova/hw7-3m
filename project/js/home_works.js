// const emailInput = document.querySelector("#gmail_input");
// const emailBtn = document.querySelector("#gmail_button");
// const emailResalt = document.querySelector("#gmail_result");
//
// const regExp = /^[a-z0-9.]{6,30}@gmail\.com$/
//
// emailBtn.onclick = () => {
//     if (regExp.test(emailInput.value)) {
//         emailResalt.innerHTML = 'OK';
//         emailResalt.style.color = 'green';
//     } else {
//         emailResalt.innerHTML = 'Error';
//         emailResalt.style.color = 'red';
//     }
// }
//
//
//
//
//
// const parentBlock = document.querySelector(".parent_block");
// const childBlock = document.querySelector(".child_block");
//
// let positionX = 0;
// let positionY = 0;
//
// const maxWidth = parentBlock.clientWidth - childBlock.offsetWidth;
// const maxHeight = parentBlock.clientHeight - childBlock.offsetHeight;
//
// const move = () => {
//
//
//     if (positionX < maxWidth && positionY === 0) {
//         positionX++;
//     }
//     else if (positionX >= maxWidth && positionY < maxHeight) {
//         positionY++;
//     }
//     else if (positionY === maxHeight && positionX > 0) {
//         positionX--;
//     }
//     else if (positionX === 0 && positionY > 0){
//         positionY--;
//     }
//
//     childBlock.style.left = `${positionX}px`
//     childBlock.style.top = `${positionY}px`
//     requestAnimationFrame(move);
// }
// move();
//
//
// const second = document.querySelector('#seconds');
// const buttonStart = document.querySelector('#start');
// const buttonStop = document.querySelector('#stop');
// const buttonReset = document.querySelector('#reset');
//
// let time = 0;
// let interval = null;
//
// buttonStart.addEventListener('click', () => {
//     if (interval === null) {
//         interval = setInterval(() => {
//             time++;
//             second.textContent = time;
//         }, 1000);
//     }
// });
//
// buttonStop.addEventListener('click', () => {
//     clearInterval(interval);
//     interval = null;
// });
//
// buttonReset.addEventListener('click', () => {
//     clearInterval(interval);
//     interval = null;
//     time = 0;
//     second.textContent = time;
// });




const getDataCharacters = () => {
    const xhrCharacters = new XMLHttpRequest();
    xhrCharacters.open("GET", '../data/characters.json');
    xhrCharacters.send()

    xhrCharacters.onload = () => {
        const dataCharacters = JSON.parse(xhrCharacters.response);
        const container = document.querySelector('.characters-list');

        dataCharacters.forEach(character => {
            const card = document.createElement('div');
            card.classList.add('character-card');

            card.innerHTML = `
                <div class="character-photo">
                    <img src="${character.photo}" alt="${character.name}">
                </div>
                <h3>${character.name}</h3>
                <p>Возраст: ${character.age}</p>
            `;
            container.append(card);
        });
    }
}
getDataCharacters()




const getData = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '../data/any.json')
    xhr.send()

    xhr.onload = () => {
        const data = JSON.parse(xhr.response)
        console.log(data)
    }
}
getData();


















