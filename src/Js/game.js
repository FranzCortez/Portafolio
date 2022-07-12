// Cards
const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const card4 = document.querySelector('#card4');
const card5 = document.querySelector('#card5');
const card6 = document.querySelector('#card6');
const card7 = document.querySelector('#card7');
const card8 = document.querySelector('#card8');
const card9 = document.querySelector('#card9');
const card10 = document.querySelector('#card10');
const card11 = document.querySelector('#card11');
const card12 = document.querySelector('#card12');

let correcta = [];
let puntos = 0;
let parejas = [];
let semaforo = true;
let cards = [];


document.addEventListener('DOMContentLoaded', (e) => {
    console.log("inicie")
    par();

    card1.addEventListener('click',(e) => selected(e,card1));
    card2.addEventListener('click',(e) => selected(e,card2));
    card3.addEventListener('click',(e) => selected(e,card3));
    card4.addEventListener('click',(e) => selected(e,card4));
    card5.addEventListener('click',(e) => selected(e,card5));
    card6.addEventListener('click',(e) => selected(e,card6));
    card7.addEventListener('click',(e) => selected(e,card7));
    card8.addEventListener('click',(e) => selected(e,card8));
    card9.addEventListener('click',(e) => selected(e,card9));
    card10.addEventListener('click',(e) => selected(e,card10));
    card11.addEventListener('click',(e) => selected(e,card11));
    card12.addEventListener('click',(e) => selected(e,card12));
});

function selected (e, card) {

    if( semaforo ){ 
        card.parentElement.parentElement.parentElement.classList.add('cards__flip-move');

        const value = parseInt(e.target.id.slice(4));
        
        correcta[correcta.length] = value;
        cards[cards.length] = card;
        
        console.log(correcta)

        if(correcta.length == 2){
            semaforo = false;
            const points = comprobate();
            correcta = [];
            console.log(puntos)
            if(!points){
                setTimeout(() => {
                    reset(); 
                    semaforo = true;
                }, 1000);
            }else{
                cards = [];
                semaforo = true;
            }             
        }
    }
}

function comprobate() {

    for (let i = 0; i < parejas.length; i++) {

        const par = parejas[i];

        for (let x = 0; x < 2; x++) {
            if (par[x] === correcta[0]) {
                if( x === 1) {
                    if(par[0] === correcta[1]){
                        puntos++;
                        return true;
                    }
                }else {
                    if(par[1] === correcta[1]){
                        puntos++;
                        return true;
                    }
                }
            }

        }   
    }
    return false;
}

function par(){

    let listos = [];

    for (let i = 0; i < 12; i++) {

        let valor = Math.floor(Math.random() * (12 - 1 + 1) + 1);

        if(listos.length === 0){
            listos[i] = valor;
        } else {

            while(true){

                const repetido = listos.find( index => index === valor);

                if(!repetido){
                    break;
                }
                valor = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            }

            listos[i] = valor;
        }
    }

    for (let x = 0; x < 12; x+=2) {
        let final = [listos[x], listos[x+1]];
        parejas = [...parejas, final];
    }

    console.log(parejas)
    setImg();
}

function setImg(){

    const option1 = document.createElement('img');
    option1.classList.add('cards__img');
    option1.src = '../build/img/Cartas/carta1.png';
    option1.alt = 'imagen 1';
    const option1b = document.createElement('img');
    option1b.classList.add('cards__img');
    option1b.src = '../build/img/Cartas/carta1.png';
    option1b.alt = 'imagen 1';

    const option2 = document.createElement('img');
    option2.classList.add('cards__img');
    option2.src = '../build/img/Cartas/carta2.png';
    option2.alt = 'imagen 2';
    const option2b = document.createElement('img');
    option2b.classList.add('cards__img');
    option2b.src = '../build/img/Cartas/carta2.png';
    option2b.alt = 'imagen 2';

    const option3 = document.createElement('img');
    option3.classList.add('cards__img');
    option3.src = '../build/img/Cartas/carta3.png';
    option3.alt = 'imagen 3';
    const option3b = document.createElement('img');
    option3b.classList.add('cards__img');
    option3b.src = '../build/img/Cartas/carta3.png';
    option3b.alt = 'imagen 3';

    const option4 = document.createElement('img');
    option4.classList.add('cards__img');
    option4.src = '../build/img/Cartas/carta4.png';
    option4.alt = 'imagen 4';
    const option4b = document.createElement('img');
    option4b.classList.add('cards__img');
    option4b.src = '../build/img/Cartas/carta4.png';
    option4b.alt = 'imagen 4';

    const option5 = document.createElement('img');
    option5.classList.add('cards__img');
    option5.src = '../build/img/Cartas/carta5.png';
    option5.alt = 'imagen 5';
    const option5b = document.createElement('img');
    option5b.classList.add('cards__img');
    option5b.src = '../build/img/Cartas/carta5.png';
    option5b.alt = 'imagen 5';
    
    const option6 = document.createElement('img');
    option6.classList.add('cards__img');
    option6.src = '../build/img/Cartas/carta6.png';
    option6.alt = 'imagen 6';
    const option6b = document.createElement('img');
    option6b.classList.add('cards__img');
    option6b.src = '../build/img/Cartas/carta6.png';
    option6b.alt = 'imagen 6';

    const imgList = [option1, option1b, option2, option2b, option3, option3b, option4, option4b, option5, option5b, option6, option6b];

    let cont = 0;

    console.log(imgList)

    for (let i = 0; i < 6; i++) {
        
        switch (parejas[i][0]) {
            case parseInt(card1.id.slice("4")):
                card1.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card2.id.slice("4")):
                card2.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card3.id.slice("4")):
                card3.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card4.id.slice("4")):
                card4.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card5.id.slice("4")):
                card5.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card6.id.slice("4")):
                card6.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card7.id.slice("4")):
                card7.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card8.id.slice("4")):
                card8.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card9.id.slice("4")):
                card9.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;        
            case parseInt(card10.id.slice("4")):
                card10.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card11.id.slice("4")):
                card11.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card12.id.slice("4")):
                card12.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            default:
                break;
        }

        cont++;

        switch (parejas[i][1]) {
            case parseInt(card1.id.slice("4")):
                card1.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card2.id.slice("4")):
                card2.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card3.id.slice("4")):
                card3.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card4.id.slice("4")):
                card4.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card5.id.slice("4")):
                card5.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card6.id.slice("4")):
                card6.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card7.id.slice("4")):
                card7.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card8.id.slice("4")):
                card8.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card9.id.slice("4")):
                card9.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;        
            case parseInt(card10.id.slice("4")):
                card10.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card11.id.slice("4")):
                card11.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            case parseInt(card12.id.slice("4")):
                card12.parentElement.nextElementSibling.appendChild(imgList[cont]);
                break;
            default:
                break;
        }
        cont++;
    }
}

function reset() {
    for (let i = 0; i < cards.length; i++) {
        console.log(cards[i])
        cards[i].parentElement.parentElement.parentElement.classList.remove('cards__flip-move');
    }
    cards = [];  
}