
// nav toggle-----

const navToggle = document.querySelector(".nav-toggle")
const nav  = document.querySelector(".nav")
const navList = document.querySelector(".nav-list")
const socialIcon = document.querySelector(".social-Icon")
const tindaLogo = document.querySelector(".tinda-logo")
const videoSection = document.querySelector(".ads-section")

// console.log(videoControler.scrollHeight);

navToggle.addEventListener("click", function() {
    
    console.log("navlink");
    nav.classList.toggle("show-nav")

})



//  Fixed nav-------------------


window.addEventListener("scroll", function() {
    
const pageScroll = window.pageYOffset
const navHeight = nav.getBoundingClientRect().height
const navLink = document.querySelectorAll(".link-list")
// console.log(videoControler);
const videoHeight = videoSection.getBoundingClientRect().height

console.log(videoSection);

    if (pageScroll >= navHeight ) {
        
        nav.classList.add("fixed-nav")
      
        navLink.forEach(function(list) {

            list.style.color = "white"
            list.style.transition = "all 1s ease-in"
  
        })
    }
    else {
        nav.classList.remove("fixed-nav")
        navLink.forEach(function(list) {

            list.style.color = "black"
            list.style.transition = "all 1s ease-in"
        })
    }

    if (pageScroll >= 7300 || pageScroll <= 7800) {
        
        optionPlay = "autoplay"
        volume = "high"
        videoAds(videoArry)
       
    }
    if(pageScroll <= 7000) {
        optionPlay = "pause"
        volume = "muted"
        videoAds(videoArry)
    }
    
    if(pageScroll >= 7800){
        optionPlay = "pause"
        volume = "muted"
        videoAds(videoArry)
    }
    // console.log(pageScroll);
    // console.log(optionPlay);
})

// header slider --------

// arrya
const people = [

    { 
        id: 1,
        img: "./images/model1.png",
        title: "clothing",
        desk: "Lorem ipsum dolor sit amet.",
    },
    {
        id: 2,
        img: "./images/model2.png",
        title: "accesories",
        desk: "Lorem ipsum dolor sit amet.",
    },
    {
        id: 3,
        img: "./images/model3.png",
        title: "accesories",
        desk: "Lorem ipsum dolor sit amet.",
    },
    {
        id: 4,
        img: "./images/model4.png",
        title: "accesories",
        desk: "Lorem ipsum dolor sit amet.",
    },
    {
        id: 5,
        img: "./images/model8.png",
        title: "accesories",
        desk: "Lorem ipsum dolor sit amet.",
    },


];


const headerSlider = document.querySelector(".header-slide")
let currentDisplay = 0

window.addEventListener("DOMContentLoaded", function( ) {
    
  showSlide(people)

})

function showSlide (items) {
    
    let slideDisplay = items.map(function(list) {
        
        // list = items[currentDisplay]

        return`<article class="head-box" id="roll${list.id}" style="background-image: url(${list.img});">
       
            <div class="header-title">
                <h2>${list.title}</h2>
                <span>${list.desk}</span>
                <button class="slide-btn">
                    explore
                </button>
            </div>
         
        </article>`
        
    })
    slideDisplay = slideDisplay.join("")
        headerSlider.innerHTML = slideDisplay

    const buttonList = document.querySelector(".button-list")

    let displayBtn = people.map(function(items) {
        return`<li id="roll"><a href="#roll${items.id}"><i class="fa-solid fa-circle"></i></a></li> `
    })

    displayBtn = displayBtn.join("")
    buttonList.innerHTML = displayBtn

    const sliderBtn = document.querySelectorAll(".slider-link")
    

}


// header slider ----xx----

// product items------------------

// product array------------
const videoArry = [

    {
        id: 1,
        link: "./video/video2.mp4",
        title: "ads is her just wait",
        desc: "lorem impsum shtity madah fuckerssss",
    },
    {
        id: 2,
        link: "./video/video1.mp4",
        title: "just keep waiting your luck will come soon",
        desc: "lorem impsum shtity madah fuckerssss",
    },
    {
        id: 3,
        link: "./video/video3.mp4",
        title: "the more you wait the time is keep getting slower so just play around",
        desc: "lorem impsum shtity madah fuckerssss",
    },

]

const clothingWomen = [
    {
        id: 1,
        name: "clothes A",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img: "./images/png/Shopee_female1.png",
        images:[
              
            {   id: 0,
                image: "./images/png/Shopee_female1.png",},
        
          
            {   id: 1,
                image: "./images/png/Shopee_female12.png",},
        
          
            {   id: 2,
                image: "./images/png/Shopee_female21.png",},
        
          
            {   id: 3,
                image: "./images/png/Shopee_female22.png",},
        
          
            {   id: 4,
                image: "./images/png/Shopee_female16.png",},
        
          
            {   id: 5,
                image: "./images/png/Shopee_femalemode5.png",},
        
        ],
    },
    {
        id: 2,
        name: "clothes B",
        info: "Lorem ipsum dolor sit amet.",
        price: "220",
        img:"./images/png/Shopee_female2.png",
        images:[
              
            {   id: 0,
                image: "./images/png/Shopee_female2.png",},
        
          
            {   id: 1,
                image: "./images/png/Shopee_female11.png",},
        
          
            {   id: 2,
                image: "./images/png/Shopee_femalemode9.png",},
        
          
            {   id: 3,
                image: "./images/png/Shopee_femalemodel3.png",},
        
          
            {   id: 4,
                image: "./images/png/Shopee_female11.png",},
        
          
            {   id: 5,
                image: "./images/png/Shopee_femalemode9.png",},
        
        ],
    },
    {
        id: 3,
        name: "clothes c",
        info: "Lorem ipsum dolor sit amet.",
        price: "100",
        img:"./images/png/Shopee_female3.png",
        images:[
              
            {   id: 0,
                image: "./images/png/Shopee_female3.png",},
        
          
            {   id: 1,
                image: "./images/png/Shopee_female4.png",},
        
          
            {   id: 2,
                image: "./images/png/Shopee_female5.png",},
        
          
            {   id:3,
                image: "./images/png/Shopee_femalemode8.png",},
        
        ],
    },
    {
        id: 4,
        name: "clothes d",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"../images/png/Shopee_female4.png",
        images:[
              
            {   id: 0,
                image: "./images/png/Shopee_female3.png",},
        
          
            {   id: 1,
                image: "./images/png/Shopee_female4.png",},
        
          
            {   id: 2,
                image: "./images/png/Shopee_female5.png",},
        
          
            {   id:3,
                image: "./images/png/Shopee_femalemode8.png",},
        
        ],
    },
    {
        id: 5,
        name: "clothes e",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"./images/png/Shopee_female5.png",
        images:[
              
            {   id: 0,
                image: "./images/png/Shopee_female3.png",},
        
          
            {   id: 1,
                image: "./images/png/Shopee_female4.png",},
        
          
            {   id: 2,
                image: "./images/png/Shopee_female5.png",},
        
          
            {   id:3,
                image: "./images/png/Shopee_femalemode8.png",},
        
        ],
    },
    {
        id: 6,
        name: "clothes f",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"./images/png/Shopee_female6.png",
        images:[
              
            {   id: 0,
                image: "./images/png/Shopee_female6.png",},
        
          
            {   id: 1,
                image: "./images/png/Shopee_female12.png",},
        
          
            {   id: 2,
                image: "./images/png/Shopee_female21.png",},
        
          
            {   id: 3,
                image: "./images/png/Shopee_female22.png",},
        
          
            {   id: 4,
                image: "./images/png/Shopee_female16.png",},
        
          
            {   id: 5,
                image: "./images/png/Shopee_femalemode5.png",},
        
        ],
    },
    {
        id: 7,
        name: "clothes g",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"./images/png/Shopee_female7.png",
        images:[
              
            {   id: 0,
                image: "./images/png/Shopee_female7.png",},
        
          
            {   id: 1,
                image: "./images/png/Shopee_female20.png",},
        
          
            {   id: 2,
                image: "./images/png/Shopee_female15.png",},
        
          
            {   id: 3,
                image: "./images/png/Shopee_femalemodel.png",},
        
          
            {   id: 4,
                image: "./images/png/Shopee_femalemodel.png",},
        
          
            {   id: 5,
                image: "./images/png/Shopee_female13.png",},
        
        ],
    },
    {
        id: 8,
        name: "clothes h",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"./images/png/Shopee_female8.png",
        images:[
              
            {   id: 0,
                image: "./images/png/Shopee_female8.png",},
        
          
            {   id: 1,
                image: "./images/png/Shopee_female10.png",},
        
          
            {   id: 2,
                image: "./images/png/Shopee_female14.png",},
        
          
            {   id: 3,
                image: "./images/png/Shopee_femalemode6.png",},
        
          
            {   id: 4,
                image: "./images/png/Shopee_femalemodel6.png",},
        
          
            {   id: 5,
                image: "./images/png/Shopee_female18.png",},
        
        ],
    },
    {
        id: 9,
        name: "clothes i",
        info: "Lorem ipsum dolor sit amet.",
        price: "220",
        img:"./images/png/Shopee_female9.png",
        images:[
              
            {   id: 0,
                image: "./images/png/Shopee_female9.png",},
        
          
            {   id: 1,
                image: "./images/png/Shopee_female10.png",},
        
          
            {   id: 2,
                image: "./images/png/Shopee_female14.png",},
        
          
            {   id: 3,
                image: "./images/png/Shopee_female18.png",},
        
          
            {   id: 4,
                image: "./images/png/Shopee_femalemodel6.png",},
        
          
            {   id: 5,
                image: "./images/png/Shopee_female18.png",},
        
        ],
    },
    {
        id: 10,
        name: "clothes j",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"./images/png/Shopee_female10.png",
        images:[
              
            {   id: 0,
                image: "./images/png/Shopee_female9.png",},
        
          
            {   id: 1,
                image: "./images/png/Shopee_female10.png",},
        
          
            {   id: 2,
                image: "./images/png/Shopee_female14.png",},
        
          
            {   id: 3,
                image: "./images/png/Shopee_female18.png",},
        
          
            {   id: 4,
                image: "./images/png/Shopee_femalemodel8.png",},
        
          
            {   id: 5,
                image: "./images/png/Shopee_female18.png",},
        
        ],
    },
    {
        id: 11,
        name: "clothes k",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"./images/png/Shopee_female11.png",
        images:[
              
            {   id: 0,
                image: "./images/png/Shopee_female2.png",},
        
          
            {   id: 1,
                image: "./images/png/Shopee_female11.png",},
        
          
            {   id: 2,
                image: "./images/png/Shopee_femalemode9.png",},
        
          
            {   id: 3,
                image: "./images/png/Shopee_femalemodel3.png",},
        
          
            {   id: 4,
                image: "./images/png/Shopee_female11.png",},
        
          
            {   id: 5,
                image: "./images/png/Shopee_femalemode9.png",},
        
        ],
    },
    {
        id: 12,
        name: "clothes l",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"./images/png/Shopee_female12.png",
        images:[
              
            {   id: 0,
                image: "./images/png/Shopee_female1.png",},
        
          
            {   id: 1,
                image: "./images/png/Shopee_female12.png",},
        
          
            {   id: 2,
                image: "./images/png/Shopee_female21.png",},
        
          
            {   id: 3,
                image: "./images/png/Shopee_female22.png",},
        
          
            {   id: 4,
                image: "./images/png/Shopee_female16.png",},
        
          
            {   id: 5,
                image: "./images/png/Shopee_femalemode5.png",},
        
        ],
    },
    {
        id: 13,
        name: "clothes m",
        info: "Lorem ipsum dolor sit amet.",
        price: "320",
        img:"./images/png/Shopee_female13.png",
        images:[
              
            {   id: 0,
                image: "./images/png/Shopee_female13.png",},
        
          
            {   id: 1,
                image: "./images/png/Shopee_female20.png",},
        
          
            {   id: 2,
                image: "./images/png/Shopee_female15.png",},
        
          
            {   id: 3,
                image: "./images/png/Shopee_femalemodel.png",},
        
          
            {   id: 4,
                image: "./images/png/Shopee_femalemodel.png",},
        
          
            {   id: 5,
                image: "./images/png/Shopee_female13.png",},
        
        ],
    },
    {
        id: 14,
        name: "clothes n",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"./images/png/Shopee_female14.png",
        images:[
              
            {   id: 0,
                image: "./images/png/Shopee_female9.png",},
        
          
            {   id: 1,
                image: "./images/png/Shopee_female10.png",},
        
          
            {   id: 2,
                image: "./images/png/Shopee_female14.png",},
        
          
            {   id: 3,
                image: "./images/png/Shopee_female18.png",},
        
          
            {   id: 4,
                image: "./images/png/Shopee_femalemodel8.png",},
        
          
            {   id: 5,
                image: "./images/png/Shopee_female18.png",},
        
        ],
    },
    {
        id: 15,
        name: "clothes o",
        info: "Lorem ipsum dolor sit amet.",
        price: "200",
        img:"../images/png/Shopee_female15.png",
        images:[
              
            {   id: 0,
                image: "./images/png/Shopee_female13.png",},
        
          
            {   id: 1,
                image: "./images/png/Shopee_female20.png",},
        
          
            {   id: 2,
                image: "./images/png/Shopee_female15.png",},
        
          
            {   id: 3,
                image: "./images/png/Shopee_femalemodel.png",},
        
          
            {   id: 4,
                image: "./images/png/Shopee_femalemodel.png",},
        
          
            {   id: 5,
                image: "./images/png/Shopee_female13.png",},
        
        ],
    },
    {
        id: 16,
        name: "clothes p",
        info: "Lorem ipsum dolor sit amet.",
        price: "100",
        img:"../images/png/Shopee_female16.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_female16.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_female12.png",},
        
          
            {   id: 2,
                image: "../images/png/Shopee_female21.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_female22.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_female16.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_femalemode5.png",},
        
        ],
    },
    {
        id: 17,
        name: "clothes q",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"../images/png/Shopee_female17.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_female17.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_female10.png",},
        
          
            {   id: 2,
                image: "../images/png/Shopee_female14.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_female18.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_femalemodel8.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_female18.png",},
        
        ],
    },
    {
        id: 18,
        name: "clothes r",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"../images/png/Shopee_female18.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_female9.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_female10.png",},
        
          
            {   id: 2,
                image: "../images/png/Shopee_female14.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_female18.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_femalemodel8.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_female18.png",},
        
        ],
    },
    {
        id: 19,
        name: "clothes s",
        info: "Lorem ipsum dolor sit amet.",
        price: "300",
        img:"../images/png/Shopee_female19.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_female19.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_female20.png",},
        
          
            {   id: 2,
                image: "../images/png/Shopee_female15.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_femalemodel.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_femalemodel.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_female13.png",},
        
        ],
    },
    {
        id: 20,
        name: "clothes t",
        info: "Lorem ipsum dolor sit amet.",
        price: "320",
        img:"../images/png/Shopee_female20.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_female19.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_female20.png",},
        
          
            {   id: 2,
                image: "../images/png/Shopee_female15.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_femalemodel.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_femalemodel.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_female13.png",},
        
        ],
    },
    {
        id: 21,
        name: "clothes u",
        info: "Lorem ipsum dolor sit amet.",
        price: "220",
        img:"../images/png/Shopee_female21.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_female1.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_female12.png",},
        
          
            {   id: 2,
                image: "../images/png/Shopee_female21.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_female22.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_female16.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_femalemode5.png",},
        
    ],
    },
    {
        id: 22,
        name: "clothes v",
        info: "Lorem ipsum dolor sit amet.",
        price: "100",
        img:"../images/png/Shopee_female22.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_female1.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_female12.png",},
        
          
            {   id: 2,
                image: "../images/png/Shopee_female21.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_female22.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_female16.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_femalemode5.png",},
        
    ],
    }

];

const clothingMens = [
    {
        id: 1,
        name: "man clothes A",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"../images/png/Shopee_male1.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_male1.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_male5.png",},
          
            {   id: 2,
                image: "../images/png/Shopee_male9.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_male10.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_male11.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_male15.png",},
        
        ],
    },
    {
        id: 2,
        name: "man clothes b",
        info: "Lorem ipsum dolor sit amet.",
        price: "220",
        img:"../images/png/Shopee_male2.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_male2.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_male3.png",},
          
            {   id: 2,
                image: "../images/png/Shopee_male6.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_male8.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_male14.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_male16.png",},
        
        ],
    },
    {
        id: 3,
        name: "man clothes c",
        info: "Lorem ipsum dolor sit amet.",
        price: "100",
        img:"../images/png/Shopee_male3.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_male2.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_male3.png",},
          
            {   id: 2,
                image: "../images/png/Shopee_male6.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_male8.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_male14.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_male16.png",},
        
        ],
    },
    {
        id: 4,
        name: "man clothes d",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"../images/png/Shopee_male4.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_male4.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_male7.png",},
          
            {   id: 2,
                image: "../images/png/Shopee_male12.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_male13.png",},
        
        
        ],
    },
    {
        id: 5,
        name: "man clothes e",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"../images/png/Shopee_male5.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_male1.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_male5.png",},
          
            {   id: 2,
                image: "../images/png/Shopee_male9.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_male10.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_male11.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_male15.png",},
        
        ],
    },
    {
        id: 6,
        name: "man clothes f",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"../images/png/Shopee_male6.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_male2.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_male3.png",},
          
            {   id: 2,
                image: "../images/png/Shopee_male6.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_male8.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_male14.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_male16.png",},
        
        ],
    },
    {
        id: 7,
        name: "man clothes g",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"../images/png/Shopee_male7.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_male4.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_male7.png",},
          
            {   id: 2,
                image: "../images/png/Shopee_male12.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_male13.png",},
        
        
        ],
    },
    {
        id: 8,
        name: "man clothes h",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"../images/png/Shopee_male8.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_male2.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_male3.png",},
          
            {   id: 2,
                image: "../images/png/Shopee_male6.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_male8.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_male14.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_male16.png",},
        
        ],
    },
    {
        id: 9,
        name: "man clothes i",
        info: "Lorem ipsum dolor sit amet.",
        price: "220",
        img:"../images/png/Shopee_male9.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_male1.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_male5.png",},
          
            {   id: 2,
                image: "../images/png/Shopee_male9.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_male10.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_male11.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_male15.png",},
        
        ],
    },
    {
        id: 10,
        name: "man clothes j",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"../images/png/Shopee_male10.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_male1.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_male5.png",},
          
            {   id: 2,
                image: "../images/png/Shopee_male9.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_male10.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_male11.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_male15.png",},
        
        ],
    },
    {
        id: 11,
        name: "man clothes k",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"../images/png/Shopee_male11.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_male11.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_male5.png",},
          
            {   id: 2,
                image: "../images/png/Shopee_male9.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_male10.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_male11.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_male15.png",},
        
        ],
    },
    {
        id: 12,
        name: "man clothes l",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"../images/png/Shopee_male12.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_male4.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_male7.png",},
          
            {   id: 2,
                image: "../images/png/Shopee_male12.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_male13.png",},
        
        
        ],
    },
    {
        id: 13,
        name: "man clothes m",
        info: "Lorem ipsum dolor sit amet.",
        price: "320",
        img:"../images/png/Shopee_male13.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_male4.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_male7.png",},
          
            {   id: 2,
                image: "../images/png/Shopee_male12.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_male13.png",},
        
        
        ],
    },
    {
        id: 14,
        name: "man clothes n",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"../images/png/Shopee_male14.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_male2.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_male3.png",},
          
            {   id: 2,
                image: "../images/png/Shopee_male6.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_male8.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_male14.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_male16.png",},
        
        ],
    },
    {
        id: 15,
        name: "man clothes o",
        info: "Lorem ipsum dolor sit amet.",
        price: "200",
        img:"../images/png/Shopee_male15.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_male15.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_male5.png",},
          
            {   id: 2,
                image: "../images/png/Shopee_male9.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_male10.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_male11.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_male15.png",},
        
        ],
    },
    {
        id: 16,
        name: "man clothes p",
        info: "Lorem ipsum dolor sit amet.",
        price: "100",
        img:"../images/png/Shopee_male16.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_male16.png",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_male3.png",},
          
            {   id: 2,
                image: "../images/png/Shopee_male6.png",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_male8.png",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_male14.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_male16.png",},
        
        ],
    },

];

const bags = [
    {
        id: 1,
        name: "woamas bags a",
        info: "Lorem ipsum dolor sit amet.",
        price: "120",
        img:"../images/png/Shopee_bag1.PNG",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_bag1.PNG",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_bag2.PNG",},
          
            {   id: 2,
                image: "../images/png/Shopee_bag3.PNG",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_bag4.PNG",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_baggroup.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_baggroup2.png",},
        
        ],
    },
    {
        id: 2,
        name: "woamas bags b",
        info: "Lorem ipsum dolor sit amet.",
        price: "320",
        img:"../images/png/Shopee_bag2.PNG",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_bag1.PNG",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_bag2.PNG",},
          
            {   id: 2,
                image: "../images/png/Shopee_bag3.PNG",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_bag4.PNG",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_baggroup.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_baggroup2.png",},
            ]
    },
    {
        id: 3,
        name: "woamas bags c",
        info: "Lorem ipsum dolor sit amet.",
        price: "200",
        img:"../images/png/Shopee_bag3.PNG",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_bag1.PNG",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_bag2.PNG",},
          
            {   id: 2,
                image: "../images/png/Shopee_bag3.PNG",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_bag4.PNG",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_baggroup.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_baggroup2.png",},
            ]
    },
    {
        id: 4,
        name: "woamas bags d",
        info: "Lorem ipsum dolor sit amet.",
        price: "100",
        img:"../images/png/Shopee_bag4.PNG",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_bag1.PNG",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_bag2.PNG",},
          
            {   id: 2,
                image: "../images/png/Shopee_bag3.PNG",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_bag4.PNG",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_baggroup.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_baggroup2.png",},
            ]
    },
    {
        id: 5,
        name: "woamas bags e",
        info: "Lorem ipsum dolor sit amet.",
        price: "220",
        img:"../images/png/Shopee_baggroup.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_bag1.PNG",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_bag2.PNG",},
          
            {   id: 2,
                image: "../images/png/Shopee_bag3.PNG",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_bag4.PNG",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_baggroup.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_baggroup2.png",},
            ]
    },
    {
        id: 6,
        name: "woamas bags f",
        info: "Lorem ipsum dolor sit amet.",
        price: "220",
        img:"../images/png/Shopee_baggroup2.png",
        images:[
              
            {   id: 0,
                image: "../images/png/Shopee_bag1.PNG",},
        
          
            {   id: 1,
                image: "../images/png/Shopee_bag2.PNG",},
          
            {   id: 2,
                image: "../images/png/Shopee_bag3.PNG",},
        
          
            {   id: 3,
                image: "../images/png/Shopee_bag4.PNG",},
        
          
            {   id: 4,
                image: "../images/png/Shopee_baggroup.png",},
        
          
            {   id: 5,
                image: "../images/png/Shopee_baggroup2.png",},
            ]
    },


];

const shoes = [
    {
        id: 1,
        name: " shoes apparell a",
        info: "Lorem ipsum dolor sit amet.",
        price: "1200",
        img:"../images/png/Shopee_shoe1.png",
    },
    {
        id: 2,
        name: " shoes apparell b",
        info: "Lorem ipsum dolor sit amet.",
        price: "1200",
        img:"../images/png/Shopee_shoe2.png",
    },
    {
        id: 3,
        name: " shoes apparell c",
        info: "Lorem ipsum dolor sit amet.",
        price: "4000",
        img:"../images/png/Shopee_shoe3.png",
    },
    {
        id: 4,
        name: " shoes apparell d",
        info: "Lorem ipsum dolor sit amet.",
        price: "1200",
        img:"../images/png/Shopee_shoe4.png",
    },
    {
        id: 5,
        name: " shoes apparell e",
        info: "Lorem ipsum dolor sit amet.",
        price: "1200",
        img:"../images/png/Shopee_shoe5.png",
    },
    {
        id: 6,
        name: " shoes apparell f",
        info: "Lorem ipsum dolor sit amet.",
        price: "2020",
        img:"../images/png/Shopee_shoe6.png",
    },
    {
        id: 7,
        name: " shoes apparell g",
        info: "Lorem ipsum dolor sit amet.",
        price: "1200",
        img:"../images/png/Shopee_shoe7.png",
    },
    {
        id: 8,
        name: " shoes apparell h",
        info: "Lorem ipsum dolor sit amet.",
        price: "3203",
        img:"../images/png/Shopee_shoe8.png",
    },
    {
        id: 9,
        name: " shoes apparell i",
        info: "Lorem ipsum dolor sit amet.",
        price: "1200",
        img:"../images/png/Shopee_shoe9.png",
    },
    {
        id: 10,
        name: " shoes apparell j",
        info: "Lorem ipsum dolor sit amet.",
        price: "1200",
        img:"../images/png/Shopee_shoe10.png",
    },
    {
        id: 11,
        name: " shoes apparell k",
        info: "Lorem ipsum dolor sit amet.",
        price: "1200",
        img:"../images/png/Shopee_shoe12.png",
    },
    {
        id: 12,
        name: " shoes apparell l",
        info: "Lorem ipsum dolor sit amet.",
        price: "1020",
        img:"../images/png/Shopee_shoe13.png",
    },
    {
        id: 13,
        name: " shoes apparell m",
        info: "Lorem ipsum dolor sit amet.",
        price: "5200",
        img:"../images/png/Shopee_shoe14.png",
    },
    {
        id: 14,
        name: " shoes apparell n",
        info: "Lorem ipsum dolor sit amet.",
        price: "2220",
        img:"../images/png/Shopee_shoe15.png",
    },
    {
        id: 15,
        name: " shoes apparell o",
        info: "Lorem ipsum dolor sit amet.",
        price: "1200",
        img:"../images/png/Shopee_shoe16.png",
    },
    {
        id: 16,
        name: " shoes apparell p",
        info: "Lorem ipsum dolor sit amet.",
        price: "1200",
        img:"../images/png/Shopee_shoe17.png",
    },
    {
        id: 17,
        name: " shoes apparell q",
        info: "Lorem ipsum dolor sit amet.",
        price: "2020",
        img:"../images/png/Shopee_shoe18.png",
    },


];

// product array--------xx----

const galleryContainer = document.querySelector(".gallery-container")
const mensContainer = document.querySelector(".mens-container")
const accessContainer = document.querySelector(".accessories-container")
const shoesContainer = document.querySelector(".shoes-container")
const modalContainer = document.querySelector(".modal-container")


let countId = 0
let currentId = 0

window.addEventListener("DOMContentLoaded",function( ) {
    
showWomanItems(clothingWomen)
showManItems(clothingMens)
showBagItems(bags)
showShoesItems(shoes)

videoAds(videoArry)

// setUpLocal()

})

function showWomanItems(itemWoman) {
    
    let dipsplayWoman = itemWoman.map(function(list) {
        
        return` <article class="gallery-card" style="background-image: url(${list.img});">
        <div class="card-title">
            <h4 class="card-name">${list.name}</h4>
            
            <div class="card-desc">
                <div class="card-btn">
                <button type="button" data-id="${list.id}" class="btn-info">info</button>
                </div>
                <span class="card-price">${list.price}</span>
            </div>

        </div>
    </article>`

    })
    dipsplayWoman = dipsplayWoman.join("")
    galleryContainer.innerHTML = dipsplayWoman

    const btnInfo = document.querySelectorAll(".btn-info")
    const modalContainer = document.querySelector(".modal-container")

    btnInfo.forEach(function(btns) {
 
        btns.addEventListener("click", function(e) {
            // console.log(e.currentTarget.dataset.id);
            const itemId = e.currentTarget.dataset.id

            countId = `${itemId}`

            let womanId = itemWoman.filter(function(item) {
                return item.id == countId
            })
            // console.log(womanId);

            showModalDisplay(womanId)


            modalContainer.classList.add("show-modal")
      
            socialIcon.style.visibility = "hidden"
            navList.style.visibility = "hidden"
            navToggle.style.visibility = "hidden"

            const closeBtn = document.querySelector(".close-btn")

            closeBtn.addEventListener("click", function( ) {
        
                modalContainer.classList.remove("show-modal")
                
                socialIcon.style.visibility = "visible"
                navList.style.visibility = "visible"
                navToggle.style.visibility = "visible"
            })

          
            // console.log(modalContainer);
        })
    
    })

}

function showManItems(items) {
    
    let dipsplayMan = items.map(function(list) {
        
        return` <article class="gallery-card" style="background-image: url(${list.img});">
        <div class="card-title">
            <h4 class="card-name">${list.name}</h4>
            
            <div class="card-desc">
                <div class="card-btn">
                <button type="button" data-id="${list.id}" class="mens-info">info</button>
                </div>
                <span class="card-price">${list.price}</span>
            </div>

        </div>
    </article>`

    })
    dipsplayMan = dipsplayMan.join("")
    mensContainer.innerHTML = dipsplayMan

    const btnInfo = document.querySelectorAll(".mens-info")
    const modalContainer = document.querySelector(".modal-container")

   btnInfo.forEach(function(btn) {

        btn.addEventListener("click", function(e) {
            console.log(e.currentTarget.dataset.id);
            const itemId = e.currentTarget.dataset.id

            countId = `${itemId}`
            
            let mansId = items.filter(function(item) {
                return item.id == countId
            })

            showModalman(mansId)

            modalContainer.classList.add("show-modal")
            
            socialIcon.style.visibility = "hidden"
            navList.style.visibility = "hidden"
            navToggle.style.visibility = "hidden"
        })

   })


}

function showBagItems(items) {
    
    let dipsplayBag = items.map(function(list) {
        
        return` <article class="gallery-card" style="background-image: url(${list.img});">
        <div class="card-title">
            <h4 class="card-name">${list.name}</h4>
            
            <div class="card-desc">
                <div class="card-btn">
                <button type="button" data-id="${list.id}" class="bagBtn-info">info</button>
                </div>
                <span class="card-price">${list.price}</span>
            </div>

        </div>
    </article>`

    })
    dipsplayBag  = dipsplayBag .join("")
    accessContainer.innerHTML = dipsplayBag 

    const btnInfo = document.querySelectorAll(".bagBtn-info")

    btnInfo.forEach(function(btns) {
 
     btns.addEventListener("click", function(e) {
         console.log(e.currentTarget.dataset.id);

         const bagItemId = e.currentTarget.dataset.id

        countId = `${bagItemId}`

        let bagFilterId = items.filter(function(item) {
            return item.id == countId
        })

        showModalBag(bagFilterId)

         modalContainer.classList.add("show-modal")

         socialIcon.style.visibility = "hidden"
         navList.style.visibility = "hidden"
         navToggle.style.visibility = "hidden"

     })
 
    })

}

function showShoesItems(items) {
    
    let dipsplayShoes = items.map(function(list) {
        
        return` <article class="gallery-card" style="background-image: url(${list.img});">
        <div class="card-title">
            <h4 class="card-name">${list.name}</h4>
            
            <div class="card-desc">
                <div class="card-btn">
                <button type="button" data-id="${list.id}" class="shoesBtn-info">info</button>
                </div>
                <span class="card-price">${list.price}</span>
            </div>

        </div>
    </article>`

    })
    dipsplayShoes  = dipsplayShoes.join("")
    shoesContainer.innerHTML = dipsplayShoes

    const btnInfo = document.querySelectorAll(".shoesBtn-info")

    btnInfo.forEach(function(btns) {
 
     btns.addEventListener("click", function(e) {
        //  console.log(e.currentTarget.dataset.id);

         const shoesId = e.currentTarget.dataset.id

        countId = `${shoesId}`

        let filterShoes = items.filter(function(item) {
            return item.id == countId
        })

        showModalShoes(filterShoes)

        modalContainer.classList.add("show-modal")

        socialIcon.style.visibility = "hidden"
        navList.style.visibility = "hidden"
        navToggle.style.visibility = "hidden"

     })
 
    })
}

// product items--------xx----------

//  Modal Item-------------------

function showModalDisplay(itemsID) {
    
    
    let womanModal = itemsID.map(function(modals) {

        return`<article class="modal-box">
        <div class="close-btn">
            <i class="fa-solid fa-close"></i>
        </div>
        <div class="cart-icon-btn">
            <a href="cartitem.html"> <i class="fa-solid fa-cart-shopping"></i> </a>
        </div>

                <div class="alert-box">
                <span class="alert">this Item is already added to the list</span>
                </div>

        <div class="img-box">
            <div class="product-img" style="background-image: url(${modals.img});">
                   
            
            </div>
               
        </div>
        <div class="modal-desc">
            <div class="modal-info">
                <h4 class="modal-name" >${modals.name}</h4>
                <h4 class="modal-price" >${modals.price}</h4>
            </div> 



          
            <div class="btn-images">
                
            </div>
            
            <div class="cart-btn">
            <button class="add-cart" type="submit" data-id=${modals.id} action="cartitem.html">
                add to cart
            </button> 
            </div>
        </div>
    </article>`

    })
    womanModal =womanModal.join("join")
    modalContainer.innerHTML = womanModal

    const cartBtn = document.querySelectorAll(".add-cart")

    const btnImages = document.querySelector(".btn-images")

        let dipsBtnModal = itemsID.map(function(item) {
            return`<div class="img-item" style="background-image: url(${item.images[0].image});" data-id="${item.images[0].id}" ></div>
                    <div class="img-item" style="background-image: url(${item.images[1].image});" data-id="${item.images[1].id}" ></div>
                    <div class="img-item" style="background-image: url(${item.images[2].image});" data-id="${item.images[2].id}" ></div>
                    <div class="img-item" style="background-image: url(${item.images[3].image});" data-id="${item.images[3].id}" ></div>`
        })
        dipsBtnModal = dipsBtnModal.join("")
        btnImages.innerHTML = dipsBtnModal

    const imgItem = document.querySelectorAll(".img-item")
    const imgBox = document.querySelector(".img-box")

    imgItem .forEach(function(ids) {
        
        ids.addEventListener("click", function(e) {
            console.log(e.currentTarget.dataset.id);

            const count = e.currentTarget.dataset.id
            currentId = `${count}`

            let bgModal = itemsID.map(function(bg) {
                return` <div class="product-img" style="background-image: url(${bg.images[currentId].image});">`
            })
            bgModal = bgModal.join("")
            imgBox.innerHTML = bgModal


        })

    })

    // -----addto cart-----

    cartBtn.forEach(function(cart) {

        cart.addEventListener("click", addtoCart)

    })

        // -----addto cart---XXxx--

}

function showModalman(menId) {
    
    
    let mensModal = menId.map(function(modals) {

        return`<article class="modal-box">

        <div class="close-btn">
            <i class="fa-solid fa-close"></i>
        </div>
        <div class="cart-icon-btn">
            <a href="cartitem.html"> <i class="fa-solid fa-cart-shopping"></i> </a>
        </div>

            <div class="alert-box">
            <span class="alert">this Item is already added to the list</span>
            </div>

        <div class="img-box">
            <div class="product-img" style="background-image: url(${modals.img});">
                
        </div> 
           
        </div>
        <div class="modal-desc">
            <div class="modal-info">
            <h4 class="modal-name" >${modals.name}</h4>
            <h4 class="modal-price" >${modals.price}</h4>
            </div> 
      
            
            <div class="btn-images">
                
            </div>
            
            <div class="cart-btn">
            <button class="add-cart" type="submit" data-id=${modals.id} action="cartitem.html">
                add to cart
            </button> 
            </div>
        </div>
    </article>`

    })
    mensModal = mensModal.join("join")
    modalContainer.innerHTML = mensModal
    const cartBtn = document.querySelectorAll(".add-cart")

    const btnImages = document.querySelector(".btn-images")

        let dipsBtnModal = menId.map(function(item) {
            return`<div class="img-item" style="background-image: url(${item.images[0].image});" data-id="${item.images[0].id}" ></div>
                    <div class="img-item" style="background-image: url(${item.images[1].image});" data-id="${item.images[1].id}" ></div>
                    <div class="img-item" style="background-image: url(${item.images[2].image});" data-id="${item.images[2].id}" ></div>
                    <div class="img-item" style="background-image: url(${item.images[3].image});" data-id="${item.images[3].id}" ></div>`
        })
        dipsBtnModal = dipsBtnModal.join("")
        btnImages.innerHTML = dipsBtnModal

    const imgItem = document.querySelectorAll(".img-item")
    const imgBox = document.querySelector(".img-box")

    imgItem .forEach(function(ids) {
        
        ids.addEventListener("click", function(e) {
            console.log(e.currentTarget.dataset.id);

            const count = e.currentTarget.dataset.id
            currentId = `${count}`

            let bgModal = menId.map(function(bg) {
                return` <div class="product-img" style="background-image: url(${bg.images[currentId].image});">`
            })
            bgModal = bgModal.join("")
            imgBox.innerHTML = bgModal



        })

            // -----addto cart-----

    cartBtn.forEach(function(cart) {

        cart.addEventListener("click", addtoCart)

    })

        // -----addto cart---XXxx--

    })

        // -----close modal btn
   const closeBtn = document.querySelector(".close-btn")

   closeBtn.addEventListener("click", function( ) {
    modalContainer.classList.remove("show-modal")

            socialIcon.style.visibility = "visible"
            navList.style.visibility = "visible"
            navToggle.style.visibility = "visible"

   })

}


function showModalBag(bagId) {
    
    
    let bagsModal = bagId.map(function(modals) {

        return`<article class="modal-box">
        
        <div class="close-btn">
            <i class="fa-solid fa-close"></i>
        </div>
        <div class="cart-icon-btn">
            <a href="cartitem.html"> <i class="fa-solid fa-cart-shopping"></i> </a>
        </div>
        
            <div class="alert-box">
            <span class="alert">this Item is already added to the list</span>
            </div>

        <div class="img-box">
            <div class="product-img" style="background-image: url(${modals.img});">
                
        </div>
           
           
        </div>
        <div class="modal-desc">
            <div class="modal-info">
            <h4 class="modal-name" >${modals.name}</h4>
            <h4 class="modal-price" >${modals.price}</h4>
            </div> 
         

            <div class="btn-images">
                
            </div>
            
            <div class="cart-btn">
            <button class="add-cart" type="submit" data-id=${modals.id} action="cartitem.html">
               add to cart
            </button> 
            </div>
        </div>
    </article>`

    })
    bagsModal = bagsModal.join("join")
    modalContainer.innerHTML = bagsModal
    const cartBtn = document.querySelectorAll(".add-cart")

    const btnImages = document.querySelector(".btn-images")

        let dipsBtnModal = bagId.map(function(item) {
            return`<div class="img-item" style="background-image: url(${item.images[0].image});" data-id="${item.images[0].id}" ></div>
                    <div class="img-item" style="background-image: url(${item.images[1].image});" data-id="${item.images[1].id}" ></div>
                    <div class="img-item" style="background-image: url(${item.images[2].image});" data-id="${item.images[2].id}" ></div>
                    <div class="img-item" style="background-image: url(${item.images[3].image});" data-id="${item.images[3].id}" ></div>`
        })
        dipsBtnModal = dipsBtnModal.join("")
        btnImages.innerHTML=dipsBtnModal

    const imgItem = document.querySelectorAll(".img-item")
    const imgBox = document.querySelector(".img-box")

    imgItem .forEach(function(ids) {
        
        ids.addEventListener("click", function(e) {
            console.log(e.currentTarget.dataset.id);

            const count = e.currentTarget.dataset.id
            currentId = `${count}`

            let bgModal = bagId.map(function(bg) {
                return` <div class="product-img" style="background-image: url(${bg.images[currentId].image});">`
            })
            bgModal = bgModal.join("")
            imgBox.innerHTML = bgModal



        })

    })

        // -----close modal btn
   const closeBtn = document.querySelector(".close-btn")

   closeBtn.addEventListener("click", function( ) {
    modalContainer.classList.remove("show-modal")

            socialIcon.style.visibility = "visible"
            navList.style.visibility = "visible"
            navToggle.style.visibility = "visible"

   })

       // -----addto cart-----

       cartBtn.forEach(function(cart) {

        cart.addEventListener("click", addtoCart)

    })

        // -----addto cart---XXxx--
}

function showModalShoes(shoesId) {
    
    
    let shoessModal = shoesId.map(function(modals) {

        return`<article class="modal-box">
         
        <div class="close-btn">
        <i class="fa-solid fa-close"></i>
        </div>

        <div class="cart-icon-btn">
        <a href="cartitem.html"> <i class="fa-solid fa-cart-shopping"></i> </a>
        </div>

            <div class="alert-box">
            <span class="alert">this Item is already added to the list</span>
            </div>

        <div class="img-box">
            <div class="product-img" style="background-image: url(${modals.img});">
                
        </div>
           
           
        </div>
        <div class="modal-desc">
            <div class="modal-info">
            <h4 class="modal-name" >${modals.name}</h4>
            <h4 class="modal-price" >${modals.price}</h4>
            </div> 
            

            
            <div class="cart-btn">
            <button class="add-cart" type="submit" data-id=${modals.id} action="cartitem.html">
                add to cart
            </button> 
            </div>
        </div>
    </article>`

    })
    shoessModal = shoessModal.join("join")
    modalContainer.innerHTML = shoessModal
    const cartBtn = document.querySelectorAll(".add-cart")

        // -----close modal btn
   const closeBtn = document.querySelector(".close-btn")

   closeBtn.addEventListener("click", function( ) {
    modalContainer.classList.remove("show-modal")

            socialIcon.style.visibility = "visible"
            navList.style.visibility = "visible"
            navToggle.style.visibility = "visible"

   })

       // -----addto cart-----

       cartBtn.forEach(function(cart) {

        cart.addEventListener("click", addtoCart)

    })

        // -----addto cart---XXxx--

}


 //  Modal Item--------------xx-----

//  ----------Video ads Display----------------------
const adsContainer = document.querySelector(".ads-container")

let optionPlay = "pause"
let volume = "muted"

let  currentVideo = 0

// console.log(videoFilter);

function videoAds(ads) {

    let displayVideo = ads.map(function(list) {
        
        list = ads[currentVideo]

        return`
        <article class="ads-box">

        <video class="video-container" controls ${volume} ${optionPlay} next2 >
            <source src=${list.link}>
        
        </video>
        
        <div class="ads-desc"> 
            <div class="video-info">
                <h3>${list.title}</h3>

                <div class="btn-ads-info">
                <button class="btn-ads" data-id="${list.id}">click here</button>
                </div>
            </div>

            <div class="video-selections">
        
                <ul class="btn-video-list">

                </ul>
       
            </div>
        
        
        </div>



    </article>`

    })
    displayVideo = displayVideo.join("")
    adsContainer.innerHTML = displayVideo

    const btnVideoListy = document.querySelector(".btn-video-list")

        let videoBtn = videoArry.map(function(item) {
            return`<li class="video-roll" data-id="${item.id}">
            <i class="fa-solid fa-circle"></i>
            </li> `
        })
        videoBtn.join("")
        btnVideoListy.innerHTML = videoBtn

        const videoRoll = document.querySelectorAll(".video-roll")

        videoRoll.forEach(function(btns) {
            
            btns.addEventListener("click", function(e) {
                console.log(e.currentTarget.dataset.id);
                const countVideo = e.currentTarget.dataset.id

                currentVideo = `${countVideo}`-1

                videoAds(videoArry)

            })

        })



}







//  ---XX-------Video ads Display------------xx----------


//  to local storage-------------
function addtoCart(e) {
    // console.log(e.currentTarget.dataset.id);
    const productImg = document.querySelector(".product-img")
    const modalName = document.querySelector(".modal-name")
    const modalPrice = document.querySelector(".modal-price")
    const alertBox = document.querySelector(".alert-box") 
    const addCart = document.querySelector(".add-cart")

    const id = new Date().getTime().toString()

            const thisItem = e.currentTarget.dataset.id
            value = []

            // console.log(productImg.style.backgroundImage);
            let img = productImg.style.backgroundImage.slice(5,38)
            let price = modalPrice.textContent
            let name = modalName.textContent
            
           let itemList = {img, price, name}

           value.push(itemList)

            
           const arrLocal = getLocalStorage()

           for (let i = 0; i < arrLocal.length; i++) {
            const element = arrLocal[i];

           
            
            let valueItem = element.value[0].name

                if (modalName.textContent == valueItem) {
                    // alert("this Item is already added to the cartlist")
                    alertBox.classList.add("show-alert")
                    addCart.classList.add("warning-already-added")

                    return

                }
                
            
           }
          
        toLocalStorage(id, value)

        // window.location.href = 'cartitem.html'
        // console.log(img);

}




function toLocalStorage(id, value) {
    
    const listItems = {id, value}
    let item = getLocalStorage()

    item.push(listItems)
    localStorage.setItem('cartlist', JSON.stringify(item))

}

function getLocalStorage() {
    return localStorage.getItem('cartlist')
    ? JSON.parse(localStorage.getItem('cartlist')) : []
}


