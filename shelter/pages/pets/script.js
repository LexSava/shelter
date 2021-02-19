document.getElementById("active").focus();

let pets = [
    {
      "id": "1",
      "name": "Jennifer",
      "img": "../../assets/images/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": "2",
      "name": "Sophia",
      "img": "../../assets/images/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": "3",
      "name": "Woody",
      "img": "../../assets/images/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "id": "4",
      "name": "Scarlett",
      "img": "../../assets/images/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": "5",
      "name": "Katrine",
      "img": "../../assets/images/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": "6",
      "name": "Timmy",
      "img": "../../assets/images/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "id": "7",
      "name": "Freddie",
      "img": "../../assets/images/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": "8",
      "name": "Charly",
      "img": "../../assets/images/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];

(function() {
    let burgerItem = document.querySelector('.burger');
    let nav = document.querySelector('.header__nav');
    burgerItem.addEventListener('click', () => {
        nav.classList.toggle('header__nav_active');
        burgerItem.classList.toggle('burger');
    });
    nav.addEventListener('click', () =>{
        nav.classList.toggle('header__nav_active');
        burgerItem.classList.toggle('burger');
    });
}())

let petsOne = document.querySelector("body > div.content > section.our__friends > div > div.our__friends_cards > div:nth-child(1)");
let petsTwo= document.querySelector("body > div.content > section.our__friends > div > div.our__friends_cards > div:nth-child(2)");
let petsThree = document.querySelector("body > div.content > section.our__friends > div > div.our__friends_cards > div:nth-child(3)");
let petsFour  = document.querySelector("body > div.content > section.our__friends > div > div.our__friends_cards > div:nth-child(4)");
let petsFive  = document.querySelector("body > div.content > section.our__friends > div > div.our__friends_cards > div:nth-child(5)");
let petsSix = document.querySelector("body > div.content > section.our__friends > div > div.our__friends_cards > div:nth-child(6)");
let petsSeven = document.querySelector("body > div.content > section.our__friends > div > div.our__friends_cards > div:nth-child(7)");
let petsEight = document.querySelector("body > div.content > section.our__friends > div > div.our__friends_cards > div:nth-child(8)");
let btnLeft = document.querySelector("body > div.content > section.our__friends > div > div.our__friends_cards_btn_block > button:nth-child(2)");
let btnLeftAll = document.querySelector("body > div.content > section.our__friends > div > div.our__friends_cards_btn_block > button:nth-child(1)");
let btnRight = document.querySelector("body > div.content > section.our__friends > div > div.our__friends_cards_btn_block > button:nth-child(4)");
let btnRightAll = document.querySelector("body > div.content > section.our__friends > div > div.our__friends_cards_btn_block > button:nth-child(5)");
let pageNumber = document.querySelector('.page__number');

pageNumber.textContent = 1;

function clickBtnRight() {
    if (pageNumber.textContent < 6){
        pageNumber.textContent++;
    }else{
        pageNumber.textContent + 0;
    }
}

function clickBtnLeft() {
if (pageNumber.textContent > 1){
    pageNumber.textContent--;
}else{
    pageNumber.textContent - 0;
}
}
function clickBtnRightAll() {
    pageNumber.textContent = 6;
}

function clickBtnLeftAll() {
    pageNumber.textContent = 1;
}

console.log(pageNumber.textContent);



function disabledBtn(){
    console.log(pageNumber.textContent);
    if (pageNumber.textContent === "1"){
        btnLeft.setAttribute("disabled", "disabled");
        btnLeftAll.setAttribute("disabled", "disabled");
        btnRight.removeAttribute ("disabled");
        btnRightAll.removeAttribute ("disabled");
        btnLeftAll.classList.remove('our__friends_cards_btn_active');
        btnLeft.classList.remove('our__friends_cards_btn_active');
        btnRight.classList.add('our__friends_cards_btn_active');
        btnRightAll.classList.add('our__friends_cards_btn_active');

    } else if (pageNumber.textContent === "6"){
        btnRight.setAttribute("disabled", "disabled");
        btnRightAll.setAttribute("disabled", "disabled");
        btnLeft.removeAttribute ("disabled");
        btnLeftAll.removeAttribute ("disabled");
        btnLeft.classList.add('our__friends_cards_btn_active');
        btnLeftAll.classList.add('our__friends_cards_btn_active');
        btnRight.classList.remove('our__friends_cards_btn_active');
        btnRightAll.classList.remove('our__friends_cards_btn_active');
}else {
    btnLeft.removeAttribute ("disabled");
    btnLeftAll.removeAttribute ("disabled");
    btnRight.removeAttribute ("disabled");
    btnRightAll.removeAttribute ("disabled");
    btnLeft.classList.add('our__friends_cards_btn_active');
    btnLeftAll.classList.add('our__friends_cards_btn_active');
    btnRight.classList.add('our__friends_cards_btn_active');
    btnRightAll.classList.add('our__friends_cards_btn_active');
}
}
function animationRetsCart() {
petsOne.classList.toggle('animation__card');
petsTwo.classList.toggle('animation__card');
petsThree.classList.toggle('animation__card');
petsFour.classList.toggle('animation__card');
petsFive.classList.toggle('animation__card');
petsSix.classList.toggle('animation__card');
petsSeven.classList.toggle('animation__card');
petsEight.classList.toggle('animation__card');
function removeClass() {
petsOne.classList.toggle('animation__card');
petsTwo.classList.toggle('animation__card');
petsThree.classList.toggle('animation__card');
petsFour.classList.toggle('animation__card');
petsFive.classList.toggle('animation__card');
petsSix.classList.toggle('animation__card');
petsSeven.classList.toggle('animation__card');
petsEight.classList.toggle('animation__card');
}
setTimeout(removeClass, 200);
}
btnRight.addEventListener('click', disabledBtn);
btnLeft.addEventListener('click', disabledBtn);
btnRightAll.addEventListener('click', disabledBtn);
btnLeftAll.addEventListener('click', disabledBtn);

btnRight.addEventListener('click', animationRetsCart);
btnLeft.addEventListener('click', animationRetsCart);
btnRightAll.addEventListener('click', animationRetsCart);
btnLeftAll.addEventListener('click', animationRetsCart);

console.log(Number(pageNumber.textContent));

disabledBtn();
