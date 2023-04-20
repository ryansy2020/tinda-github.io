
// nav toggle-----


const navToggle = document.querySelector(".nav-toggle")
const nav  = document.querySelector(".nav")
const navList = document.querySelector(".nav-list")
const socialIcon = document.querySelector(".social-Icon")
const tindaLogo = document.querySelector(".tinda-logo")
const videoSection = document.querySelector(".ads-section")
const videoBox = document.querySelector(".video-box")

const headContainer = document.querySelector(".header-container")

let optionPlay = "autoplay"
let volume = "muted"
let controler = "none"


navToggle.addEventListener("click", function() {
    
    console.log("navlink");
    nav.classList.toggle("show-nav")

})

//  Fixed nav-------------------
const headerContainer = document.querySelector(".header-container")



window.addEventListener("scroll", function() {
    
    const pageScroll = window.pageYOffset
    const navHeight = nav.getBoundingClientRect().height
    const navLink = document.querySelectorAll(".link-list")
    const headerHeight = headerContainer.getBoundingClientRect().height

    // console.log(videoControler);

    console.log(headerHeight);
   
    
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
            
           

        }

        if (pageScroll > navHeight) {
        //     optionPlay = "pause"
        //     volume = "muted"
        //     const ele = document.createElement("div")
        //     ele.classList.add("video-container")

           
        //    ele.innerHTML = `
        //                        <video class="video-box" ${controler} muted ${optionPlay}  loop >
           
        //                        <source src="./video/Ink in Water Background (720p).mp4">
           
        //                        </video> 
                               
        //                        <div class="video-desc">
                                   
           
        //                        </div>
           
        //                        <div class="phone-desc-btn">
                                 
           
        //                        </div>`
        //    headContainer.appendChild(ele)

        //     console.log("hi");
            
        }
        else {
        //     optionPlay = "autoplay"
        //     volume = "muted"

        //     const ele = document.createElement("div")
        //     ele.classList.add("video-container")
           
        //    ele.innerHTML = `
        //                        <video class="video-box" ${controler} muted ${optionPlay}  loop >
           
        //                        <source src="./video/Ink in Water Background (720p).mp4">
           
        //                        </video> 
                               
        //                        <div class="video-desc">
                                   
           
        //                        </div>
           
        //                        <div class="phone-desc-btn">
                                 
           
        //                        </div>`
        //    headContainer.appendChild(ele)

  

        }
       
    })
    

//  Fixed nav-------------------

//  slider btn----------------

function prev(t) {
    const elem = t.parentElement.parentElement.children[0]

    elem.scrollBy(-343, 0)

    // console.log(elem);
}

function next(t) {
    const elem = t.parentElement.parentElement.children[0]
    
    const elemlength = elem.childNodes.length
    
    elem.scrollBy(343, 0)  
    
}

//  slider btn-----xxx-----------

// ------video-- header-----


//  const ele = document.createElement("div")
//  ele.classList.add("video-container")

// ele.innerHTML = `
//                     <video class="video-box" ${controler} ${volume} ${optionPlay}  loop >

//                     <source src="./video/Ink in Water Background (720p).mp4">

//                     </video> 
                    
//                     <div class="video-desc">
                        

//                     </div>

//                     <div class="phone-desc-btn">
                      

//                     </div>`

// headContainer.appendChild(ele)

// console.log(videoBox);
// ---xx---video-- header--xx---





// ----------header phone btn-------------

const headerPhoneArr = [

    {
        id: 1,
        img: "./images/apspnokiac.png",
        title: "apsp nokia c",
        price: "10,000",
    
    },
    {
        id: 2,
        img: "./images/apsponeplusnord.png",
        title:" apsp oneplus nord",
        price: "10,000",
    
    },
    {
        id: 3,
        img: "./images/apsprealme.png",
        title: "apsp realme",
        price: "10,000",
    
    },


]

window.addEventListener("DOMContentLoaded", function( ) {
    
    phoneDisplay(headerPhoneArr)
  

})

const videoDesc = document.querySelector(".video-desc")
let phonecount = 1

// console.log(idFIleter);

function phoneDisplay(items) {

    let displayPhone = items.map(function(link) {

        return`<article class="sales-box" id="set${link.id}" >

            <img src="${link.img}" width="150" alt="">

        <div class="sales-desc" data-id="${link.id}">
            <h4>${link.title}</h4>
            <h4>$ ${link.price}</h4>
        </div>
        
        </article>`

    })
    displayPhone = displayPhone.join("")
    videoDesc.innerHTML = displayPhone


        // --------------Auto Animation------------------
    const salebox2 = document.querySelectorAll(".sales-box")

    salebox2.forEach(function(kings) {
        let loop = kings
                    let queen1 = document.getElementById("set1")
                    let queen2 = document.getElementById("set2")
                    let queen3 = document.getElementById("set3")

       
            function animationFrame() {

                // let rook1 = setInterval(queen2.classList.add("show-set"), 2000)
                // let rook2 = setInterval(queen3.classList.add("show-set"), 4000)
                // let rook3 = setInterval(queen1.classList.add("show-set"), 6000)

                setTimeout(() => {
                    queen2.classList.add("show-set")

    
                        setTimeout(() => {
                            queen3.classList.add("show-set")
                            
                          
                                    setTimeout(() => {
                                        queen1.classList.add("show-set")
                                        
                                       
                                    }, 3000);
    
                        }, 2000);
                
                 }, 1000);

                // setInterval(() => {
                //     queen2.classList.add("show-set")

    
                //         setInterval(() => {
                //             queen3.classList.add("show-set")
                            
                          
                //                     setInterval(() => {
                //                         queen1.classList.add("show-set")
                                        
                                       
                //                     }, 4000);
    
                //         }, 3000);
                
                //  }, 2000);

             }


        //  console.log(loop.parentElement.parentElement.children[2]);
        //  const elem = loop.parentElement.parentElement.children[2]
        //     const phoneThis = elem.getElementsByClassName(".phone-desc-btn")

        //     elem.addEventListener("click", function() {
                


        //         console.log();
        //     })


            let timeOut =  setTimeout(animationFrame)
    })


    // for (let i = 0; i < salebox2.length; i++) {
    //         const kings= salebox2[i];
    //             let queen1 = document.getElementById("set1")
    //             let queen2 = document.getElementById("set2")
    //             let queen3 = document.getElementById("set3")

    //         // console.log(queen2);
    //     animationFrame()

    //         function animationFrame() {

    //             // let rook1 = setInterval(queen2.classList.add("show-set"), 2000)
    //             // let rook2 = setInterval(queen3.classList.add("show-set"), 4000)
    //             // let rook3 = setInterval(queen1.classList.add("show-set"), 6000)

    //             setInterval(() => {
    //                 queen2.classList.add("show-set")

    
    //                     setInterval(() => {
    //                         queen3.classList.add("show-set")
                            
                          
    //                                 setInterval(() => {
    //                                     queen1.classList.add("show-set")
                                        
                                       
    //                                 }, 6000);
    
    //                     }, 4000);
                
    //              }, 2000);

     


    //          }

    //          setTimeout(() => {
    //             clearInterval(animationFrame)
    //                 let rook1 = setInterval(queen2.classList.remove("show-set"), 2000)
    //                     let rook2 = setInterval(queen3.classList.remove("show-set"), 4000)
    //                     let rook3 = setInterval(queen1.classList.remove("show-set"), 6000)
        
    //         }, 10000);     
       
    // }



         // -----xx---------Auto Animation-----------xx-------

    // -----------phone header Btn ----------
const phoneDescBtn = document.querySelector(".phone-desc-btn")

console.log(phoneDescBtn);

let btnPhone = headerPhoneArr.map(function(list) {
    return` <div class="phone-btn" data-id="${list.id}">
    <img src="${list.img}" width="25" alt="">
    </div>`
})

btnPhone.join("")
phoneDescBtn.innerHTML = btnPhone


const phoneBtn = document.querySelectorAll(".phone-btn")

phoneBtn.forEach(function(btn) {
    
    btn.addEventListener("click", function(e) {
        // console.log(e.currentTarget.dataset.id);
        const thisPhone = e.currentTarget.dataset.id
        

        phonecount = `${thisPhone}`

        let elem = e.currentTarget.parentElement.parentElement.children[1]
        // console.log(e.currentTarget.parentElement.parentElement.children[1]);
        const salesBox = elem.querySelector(`#set${phonecount}`)

        salesBox.classList.toggle("show-set")

        
     
        
    })


})

// ----xx-------phone header Btn -----xx-----
      

}





