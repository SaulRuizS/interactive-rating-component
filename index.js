
const cardRating = document.querySelector('.card.rating')
const ratingButtons = document.querySelectorAll('.rating__btn');
const submitBtn = document.querySelector('.submit-btn');
const thankyouCard = document.querySelector('.card.thankyou');
const rateOfFive = document.querySelector('.selection span');

let activeBtn = 0;
let prevBtn = 0;
let rating = 0;

for (let index = 0; index < ratingButtons.length; index++) {

    const ratingBtn = ratingButtons[index];

    ratingBtn.addEventListener('click',() => {

        activeBtn = index;

        if (ratingBtn.className !== 'active' && activeBtn !== prevBtn) {
            ratingButtons[prevBtn].className = 'rating__btn';
            prevBtn = activeBtn;
            ratingBtn.className = 'active';
        } else if (activeBtn === 0) {
            prevBtn = activeBtn;
            ratingBtn.className = 'active';
        }

        rating = ratingBtn.innerHTML;
        console.log(rating);

    }, false);
}

submitBtn.addEventListener('click', () => {
    cardRating.style.display = 'none';
    thankyouCard.style.display = 'flex';
    rateOfFive.innerHTML = rating;
}, false);