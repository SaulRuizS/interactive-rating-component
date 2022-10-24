
const cardRating = document.querySelector('.card.rating');
const logoStar = document.querySelector('.logo-star');
const titleRating = document.querySelector('.card.rating .title');
const textRating = document.querySelector('.card.rating .text');
const ratingContainer = document.querySelector('.rating-container');
const ratingButtons = document.querySelectorAll('.rating__btn');
const submitBtn = document.querySelector('.submit-btn');
const thankyouCard = document.querySelector('.card.thankyou');

let activeBtn = undefined;
let prevBtn = undefined;

for (let index = 0; index < ratingButtons.length; index++) {

    const ratingBtn = ratingButtons[index];

    ratingBtn.addEventListener('click',() => {

        if(ratingBtn.className !== 'active' && prevBtn !== index) {
            prevBtn = activeBtn
            activeBtn = index;
            // ratingButtons[prevBtn].className = 'rating__btn';
            console.log(prevBtn);
            ratingBtn.className = 'active';
        }
        else {
            ratingBtn.className = 'rating__btn';
        }
        
    }, false);
}

submitBtn.addEventListener('click', () => {
    cardRating.style.display = 'none';
    thankyouCard.style.display = 'flex';
}, false);