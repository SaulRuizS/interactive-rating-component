
const cardRating = document.querySelector('.card.rating');
const logoStar = document.querySelector('.logo-star');
const titleRating = document.querySelector('.card.rating .title');
const textRating = document.querySelector('.card.rating .text');
const ratingContainer = document.querySelector('.rating-container');
const ratingButtons = document.querySelectorAll('.rating__btn');
const submitBtn = document.querySelector('.submit-btn');
const thankyouCard = document.querySelector('.card.thankyou');

ratingButtons.forEach((button) => {


    button.addEventListener('click',() => {

        console.log(button.innerHTML);
        
        if(button.className !== 'active') {
            button.className = 'active';
        }
        else {
            button.className = 'rating__btn';
        }
        
    }, false);
})

submitBtn.addEventListener('click', () => {
    console.log('test')
    cardRating.style.display = 'none';
    thankyouCard.style.display = 'flex';
}, false);