let commonBtn = document.querySelectorAll('.carousel-button');
let arrowBtn = document.querySelectorAll('.carousel-arrow')

let scrollCarousel = document.querySelector('.carousel-scroll');

let possition = 0;

for (let i = 0; i < commonBtn.length; i++) {

    commonBtn[i].addEventListener('click', () => {

        if (i == 0) {
    
            scrollCarousel.classList.remove('slideOne', 'slideTwo', 'slideThree', 'slideFour');
            possition = i;
    
        } else {
    
            if (i == 1) {
                scrollCarousel.classList.add('slideOne')
                scrollCarousel.classList.remove('slideTwo', 'slideThree', 'slideFour')

                possition = i;
            } else if (i == 2) {
                scrollCarousel.classList.add('slideTwo')
                scrollCarousel.classList.remove('slideThree', 'slideFour')

                possition = i;
            } else if (i == 3) {
                scrollCarousel.classList.add('slideThree')
                scrollCarousel.classList.remove('slideFour')

                possition = i;
            } else {
                scrollCarousel.classList.add('slideFour')
                
                possition = i;
            }
    
        }
    
    })

};

for (let i = 0; i < arrowBtn.length; i++) {

    arrowBtn[i].addEventListener('click', () => {
        
        if (i == 0) {
            
            if (possition == 1) {

                scrollCarousel.classList.remove('slideOne')
                possition--

            } else if (possition == 2) {
                
                scrollCarousel.classList.remove('slideTwo')
                possition--

            } else if (possition == 3) {

                scrollCarousel.classList.remove('slideThree')
                possition--

            } else if (possition == 4) {

                scrollCarousel.classList.remove('slideFour')
                possition--

            }

        } else {

            if (possition == 0) {

                scrollCarousel.classList.add('slideOne')
                possition++

            } else if (possition == 1) {
                
                scrollCarousel.classList.add('slideTwo')
                possition++

            } else if (possition == 2) {

                scrollCarousel.classList.add('slideThree')
                possition++

            } else if (possition == 3) {

                scrollCarousel.classList.add('slideFour')
                possition++

            }

        }

    })

}