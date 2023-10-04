let commonBtn = document.querySelectorAll('.carousel-button');
let arrowBtn = document.querySelectorAll('.carousel-arrow')

let scrollCarousel = document.querySelector('.carousel-scroll');

let possition = 0;

for (let i = 0; i < commonBtn.length; i++) {                // press common button

    commonBtn[i].addEventListener('click', () => {

        if (i == 0) {
    
            scrollCarousel.classList.remove('slideOne', 'slideTwo', 'slideThree', 'slideFour');

            commonBtn[i].classList.add('carousel-button-active')
            commonBtn[i + 1].classList.remove('carousel-button-active')
            commonBtn[i + 2].classList.remove('carousel-button-active')
            commonBtn[i + 3].classList.remove('carousel-button-active')
            commonBtn[i + 4].classList.remove('carousel-button-active')

            possition = i;
    
        } else {
    
            if (i == 1) {
                scrollCarousel.classList.add('slideOne')
                scrollCarousel.classList.remove('slideTwo', 'slideThree', 'slideFour')

                commonBtn[i].classList.add('carousel-button-active')
                commonBtn[i - 1].classList.remove('carousel-button-active')
                commonBtn[i + 1].classList.remove('carousel-button-active')
                commonBtn[i + 2].classList.remove('carousel-button-active')
                commonBtn[i + 3].classList.remove('carousel-button-active')

                possition = i;
            } else if (i == 2) {
                scrollCarousel.classList.add('slideTwo')
                scrollCarousel.classList.remove('slideThree', 'slideFour')

                commonBtn[i].classList.add('carousel-button-active')
                commonBtn[i - 1].classList.remove('carousel-button-active')
                commonBtn[i - 2].classList.remove('carousel-button-active')
                commonBtn[i + 1].classList.remove('carousel-button-active')
                commonBtn[i + 2].classList.remove('carousel-button-active')

                possition = i;
            } else if (i == 3) {
                scrollCarousel.classList.add('slideThree')
                scrollCarousel.classList.remove('slideFour')

                commonBtn[i].classList.add('carousel-button-active')
                commonBtn[i - 1].classList.remove('carousel-button-active')
                commonBtn[i - 2].classList.remove('carousel-button-active')
                commonBtn[i - 3].classList.remove('carousel-button-active')
                commonBtn[i + 1].classList.remove('carousel-button-active')

                possition = i;
            } else {
                scrollCarousel.classList.add('slideFour')

                commonBtn[i].classList.add('carousel-button-active')
                commonBtn[i - 1].classList.remove('carousel-button-active')
                commonBtn[i - 2].classList.remove('carousel-button-active')
                commonBtn[i - 3].classList.remove('carousel-button-active')
                commonBtn[i - 4].classList.remove('carousel-button-active')
                
                possition = i;
            }
    
        }
    
    })

};

for (let i = 0; i < arrowBtn.length; i++) {                 // press arrow button (<1440px)

    arrowBtn[i].addEventListener('click', () => {
        
        if (i == 0) {
            
            if (possition == 1) {

                scrollCarousel.classList.remove('slideOne')
                commonBtn[possition].classList.remove('carousel-button-active')
                possition--
                commonBtn[possition].classList.add('carousel-button-active')

            } else if (possition == 2) {
                
                scrollCarousel.classList.remove('slideTwo')
                commonBtn[possition].classList.remove('carousel-button-active')
                possition--
                commonBtn[possition].classList.add('carousel-button-active')

            } else if (possition == 3) {

                scrollCarousel.classList.remove('slideThree')
                commonBtn[possition].classList.remove('carousel-button-active')
                possition--
                commonBtn[possition].classList.add('carousel-button-active')

            } else if (possition == 4) {

                scrollCarousel.classList.remove('slideFour')
                commonBtn[possition].classList.remove('carousel-button-active')
                possition--
                commonBtn[possition].classList.add('carousel-button-active')

            }

        } else {

            if (possition == 0) {

                scrollCarousel.classList.add('slideOne')
                commonBtn[possition].classList.remove('carousel-button-active')
                possition++
                commonBtn[possition].classList.add('carousel-button-active')

            } else if (possition == 1) {
                
                scrollCarousel.classList.add('slideTwo')
                commonBtn[possition].classList.remove('carousel-button-active')
                possition++
                commonBtn[possition].classList.add('carousel-button-active')

            } else if (possition == 2) {

                scrollCarousel.classList.add('slideThree')
                commonBtn[possition].classList.remove('carousel-button-active')
                possition++
                commonBtn[possition].classList.add('carousel-button-active')

            } else if (possition == 3) {

                scrollCarousel.classList.add('slideFour')
                commonBtn[possition].classList.remove('carousel-button-active')
                possition++
                commonBtn[possition].classList.add('carousel-button-active')

            }

        }

    })

}