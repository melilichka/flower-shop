$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .nav__container').toggleClass('active')
        $('body').toggleClass('lock')
    })
    
    $('.nav__link').click(function(event) {
        $('.header__burger, .nav__container').removeClass('active')
        $('body').toggleClass('lock')
    })
})

//reviews

const reviews = [
    {
        name: "Владимир",
        text: "«Уже несколько лет заказываю у вас цветы! Спасибо за организованность, качество, с вами приятно радовать близких!»",
        date: "01.11.2020"
    },
    {
        name: "Светлана", 
        text: "«Руководительница моего отдела была в неописуемом восторге от вашего букета! Обязательно буду заказывать еще!»",
        date: "29.12.2020"
    },
    {
        name: "Артем", 
        text: "«Хотел подарить цветы девушке, но сомневался насчет качества. Оказалось, совсем зря. И качество, и доставка, и цены - все радует!»", 
        date: "15.12.2020"
    }
];

const nextBtn = document.querySelector(".arrow_right"),
      prevBtn = document.querySelector(".arrow_left"),
      author = document.querySelector(".review__author"),
      text = document.querySelector(".review__content"),
      date = document.querySelector(".review__date");

let count = 0;

let countIncrease = function(){
    if (count === reviews.length - 1) {
        count = 0;
    } else {
        count += 1;
    }
    return count;
}

let countDecrease = function(){
    if (count === 0) {
        count = reviews.length - 1;
    } else {
    count -= 1;
    return count;
    }
}

nextBtn.onclick = () => {
    countIncrease();
    author.innerHTML = reviews[count].name;
    text.innerHTML = reviews[count].text;
    date.innerHTML = reviews[count].date;

}

prevBtn.onclick = () => {
    countDecrease();
    author.innerHTML = reviews[count].name;
    text.innerHTML = reviews[count].text;
    date.innerHTML = reviews[count].date;
}