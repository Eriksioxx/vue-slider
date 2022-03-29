const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);

// Partendo dal template fornito renderizzare lo slider con Vue
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

const app = new Vue({
    el: '#app',
    data: {
        slides,
        activeSlideIndex: 0,
        intervalCleanerId: undefined
    },

    methods: {
        showPrevSlide() {
            if (this.activeSlideIndex > 0) {
                this.activeSlideIndex--;
            } else {
                this.activeSlideIndex = this.slides.length - 1;
            }
        },

        showNextSlide() {
            if (this.activeSlideIndex < this.slides.length - 1) {
                this.activeSlideIndex++;
            } else {
                this.activeSlideIndex = 0;
            }
        },

        checkIfActive(item) {
            console.log(item.title)

            /*const index = this.slides.findIndex(
                (slide) => {
                    return slide.title = item.title;
                }
            )

            if (index === this.activeSlideIndex) {
                return 'thumb active';
            }
            return 'thumb';*/

        },

        selectSlide(item) {

            // indice numerico che indica la posizione dell'elemento
            // all'interno dell'array

            this.activeSlideIndex = item;


            // Se non ci fose l'index saremmo costretti a iterare 
            // tutto l'array alla ricerca dell'elemento(cliccato in questo caso)
            // per essere certi di recuperare l'indice corretto, gli elementi non dovrebbero essere duplicati/simili

            // const index = this.slides.findIndex(
            //     (slide) => {
            //         return slide.title === item.title;
            //     }
            // )
            // if (index > -1) {
            //     this.activeSlideIndex = index;
            // }
        },

        startTimer() {
            this.intervalCleanerId = setInterval(this.showNextSlide, 3000);

            console.log('this.intervalCleanerId', this.intervalCleanerId);
        },

        stopTimer() {
            clearInterval(this.intervalCleanerId);
            console.log('clear interval');
        }
    }

});