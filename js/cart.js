
if (document.readyState == "loading") {
    window.addEventListener("DOMContentLoaded", function() {
        
        setUpLocal()

       
    })
}
else{
    setUpLocal()
}


// nav toggle-----

const navToggle = document.querySelector(".nav-toggle")
const nav  = document.querySelector(".nav")
const navList = document.querySelector(".nav-list")
const socialIcon = document.querySelector(".social-Icon")


navToggle.addEventListener("click", function() {
    

    nav.classList.toggle("show-nav")

})


//  Fixed nav-------------------


window.addEventListener("scroll", function() {
    
const pageScroll = window.pageYOffset
const navHeight = nav.getBoundingClientRect().height
const navLink = document.querySelectorAll(".link-list")

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

})

// header slider --------


//  to local storage-------------

const cartContainer = document.querySelector(".cart-container")

function createCartList(id, value) {

    
    const element = document.createElement('article')
    element.classList.add("cart-list")
    const attrib = document.createAttribute("data-id")
    attrib.value = id
    element.setAttributeNode(attrib)
    let item  = value[0]

    element.innerHTML =`
        
        <div class="cart-img cart-info">
            <h5>name</h5>
            <div class="cart-boxes" style="background-image: url(${item.img});">

            <span class="cart-title">${item.name}</span>
            </div>

        </div>
        
        <div class="cart-price cart-info">
            <h5>price</h5>
            <div class="items-prce">
                <span class="price-span">$${item.price}</span>
            </div>
            
        </div>
        <div class="cart-quantity cart-info">
            <h5>quantity</h5>

            <div class="quantity-box">
                <input type="number" value="1" class="quantity-input" data-id="${id}" >

                <div class="remove-btn">
                    <button class="remove-item" type="button" data-id="${id}" action="cartitem.html">remove</button>
                </div>
            </div>

        </div>
        <div class="cart-id cart-info">
            <h5>item-total</h5>
            <div class="id-item">
                <span class="cart-num"></span>  
            </div>
            
        </div>
        `
        
    cartContainer.appendChild(element)
    
    const removeItem = document.querySelectorAll(".remove-item")
    const cartTitle = document.querySelector(".cart-title")

    if (item.name.textContent == value[0].name) {
       
    }

    const totalPrice = document.querySelector(".total-price")
    const cartList = document.querySelectorAll(".cart-list")

    // console.log(item);

    cartList.forEach(function(list) {
        const priceItem = list.querySelector(".price-span")
        const quantity = list.querySelector(".quantity-input")
        const priceTotal = list.querySelector(".cart-num")
        
        const price = priceItem.textContent.slice(1)
        
        // -----total price modal text content------
        const totalModalPrice = document.querySelector(".total-price-modal")

        // totalModalPrice.textContent = "total price" + xTotal

        // ---xx--total price modal text content---xx---

        // total Order Price-------


        list.addEventListener("change", totalSum)
        totalSum()
        function totalSum () {
            // let currenIntput = e.currentTarget.dataset.id

            const itemTotal = document.querySelector(".item-total")
            const order = document.querySelector(".order-container")
    
            let total = parseInt(price) * parseInt(quantity.value)
            let totalOrder = 0
            
            priceTotal.textContent = '$'+ " " +  total 

            totalOrder = totalOrder + (parseInt(price) * parseInt(quantity.value))
            
    
            // totalPrice.textContent = '$'+ " " + totalOrder
            
            if (isNaN(quantity.value) || quantity.value <=0 ) {
                 quantity.value = 1
            }
            
            if (total === 0 ) {
                // console.log("hi"); 
                total =  parseInt(price) * 1
                // console.log(total);
                priceTotal.textContent = '$'+ " " +  total 

            }

            

            totalOrder = Math.round(total * 100) /100
            //  round off the the total price
           
            
            const cartPrice = document.querySelectorAll(".cart-num")
            let xTotal = 0

            cartPrice.forEach(function(list) {
                // console.log(list.textContent.slice(1));
                let listPrice = parseInt(list.textContent.slice(1))

                xTotal = xTotal + listPrice
                // console.log(x);
                 
                let eto = Math.max(xTotal)
                // console.log(eto);
               

            })
            
            totalPrice.textContent = '$'+ " " + xTotal
           
            totalModalPrice.textContent = "total price: " + "$" + xTotal

        }

        totalSum()
        
         // total Order Price-----XXX--

        //  ------------ Remove Items form List------
        removeItem.forEach(function (btns) {
        
            btns.addEventListener("click", function(e) {
    
                // console.log(e.currentTarget.parentElement.parentElement.parentElement
                //     .parentElement);
            
                    const cartElement = e.currentTarget.parentElement.parentElement
                    .parentElement.parentElement

                    // console.log(cartElement);
            
                    const id = cartElement.dataset.id


                    cartContainer.removeChild(cartElement)
            
                    deleteFromStorage(id)
                    totalSum()
                
            })
            
        })
    
         
    })

    // ------------PURCHASE MODAL RECEIPT-------
    purchaseModal()

    let qnty = element.children[2].children[1].children[0]
    let Qn = qnty.value
    
    qnty.addEventListener("change", function(e) {
        
        // console.log(e.currentTarget.dataset.id);
        const changeThis = e.currentTarget.dataset.id
        // let rook = changeThis.value
    

        let  Qny = qnty.value

        // console.log(Qny);

        for (let i = 0; i < quntyReceipt.length; i++) {
            const receipt = quntyReceipt[i];  
            
            let queen2 = Qny
            
            let itemReceipt = receipt.dataset.id

            // console.log(itemReceipt);
            if (itemReceipt === changeThis) {
                receipt.textContent = "qnty:" + queen2
            }
        }

    })

    // console.log(Qn);
    
    function purchaseModal() {
        //  -----added to purchase modal
        const ModalPurchaseList = document.querySelector(".modal-purchase-list")
        const modalPurchase = document.querySelector(".item-purchase-link")
        // const qnty = quantity.value
        
        let itemsPurchase  = value[0]
        let element = document.createElement("div")
        element.getElementsByClassName("item-purchase-link")

        element.innerHTML =`<span>id:${id}</span>|
        <span class="title-purchase">name: ${itemsPurchase.name}</span>|
        <span class="price-purchase">prc: ${itemsPurchase.price}</span>|
        <span class="quantity-receipt" data-id="${id}">qnty:</span>`

        ModalPurchaseList.appendChild(element)
    }

    const quntyReceipt = document.querySelectorAll(".quantity-receipt")
    
    for (let i = 0; i < quntyReceipt.length; i++) {
        const receipt = quntyReceipt[i];  
        
        let queen = Qn
        receipt.textContent = "qnty:" + queen

    }
    
    // ----XX--------PURCHASE MODAL RECEIPT---xx----
   
}



function toLocalStorage(id, value) {
    
    const listItems = {id, value}
    let item = getLocalStorage()

    item.push(listItems)
    localStorage.setItem('cartlist', JSON.stringify(item))

}


// -----REmove Btn----

function removeBtn(e) {


        const cartElement = e.currentTarget.parentElement.parentElement
        .parentElement.parentElement

        const id = cartElement.dataset.id

        cartContainer.removeChild(cartElement)

        deleteFromStorage(id)
        totalSum()
       
}

function getLocalStorage() {
    return localStorage.getItem('cartlist')
    ? JSON.parse(localStorage.getItem('cartlist')) : []
}

function setUpLocal() {
    let items = getLocalStorage()

    if (items.length > 0) {
        
        items.forEach(function(item) {
            item = createCartList(item.id,item.value)

        })
    }

}

function deleteFromStorage(id) {
    let items = getLocalStorage()

    items = items.filter(function(item) {
        if (item.id !== id) {
            return item
        }
    })
    localStorage.setItem('cartlist', JSON.stringify(items))
}


// --- purchasse method funtionality ----

const purchaseBtn = document.querySelector(".purchase-btn")
const modalContainer = document.querySelector(".modal-container")
const closeBtn = document.querySelector(".close-btn-modal")

closeBtn.addEventListener("click", function( ) {

    modalContainer.classList.remove("show-modal")
   
})


purchaseBtn.addEventListener("click", function() {

    modalContainer.classList.add("show-modal")
    
    // ------- Receipt Purchase Order Number---------
    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "T", "I", "N", "D", "A", "t", "i", "n", "d", "a"];
    const purchaseNum = document.querySelector(".purhase-num")
    let number = orderNum

    for (let i = 0; i < 8; i++) {
  
        number += numArr[RandomNumber()]
   
   }
   // console.log(number);
   purchaseNum.textContent = number
   
   
   function RandomNumber() {
       return Math.floor(Math.random() * numArr.length);
     }

// -----xx-- Receipt Purchase Order Number--xx-------


})


//--------------Date---Receipt------------
const orderDate = document.querySelector(".receipt-date")

const date = new Date()
const months = date.getMonth().toString()
const days = date.getDay().toString()
const year = date.getFullYear().toString()

// console.log( months +"|" + days + "|" + year );
const dateReceipt  = months +"|" + days + "|" + year 

orderDate.textContent = dateReceipt

const orderNum = year + months + days
//-----xx---------Date---Receipt-------xx-----


// ---------COD modal----------------
const CODBtn = document.querySelector(".cod-btn")
const CODModal = document.querySelector(".COD-modal")
const purchaseBoxModal = document.querySelector(".modal-box-purchase")

CODBtn.addEventListener("click", function() {

    purchaseBoxModal.classList.add("hide-purchase")
    CODModal.classList.add("show-modal-COD")

    
})

// -----xx----------COD modal---------xx----------

function toPurchaseLocalStorage(id, quantity) {
    
    const listPurchase = {id, quantity}
    let itemList = getLocalStorage()

    itemList.push(listPurchase)
    localStorage('purchaseList', JSON.stringify(item))

}


// --xx- purchasse method funtionality -xx---

