// get

function  getElementTextById(id){
    const content=document.getElementById(id);
    const contentInt=parseInt(content.innerText);
    const value=contentInt-1;
    if(contentInt>36){
        content.innerText=value;
        return contentInt;
        // return val;
    }
    return value;
   

    // if(val===36){
    //   const ids= document.getElementsByClassName('btn');
      
    //  for(const id of ids){
    //     console.log(id);
    //     id.disabled=true;

    //  }
    // }

}

// sit booking count
function totalSeatBooking(id){
    const content=document.getElementById('total-selected-sit');
    const contentInt=parseInt(content.innerText);
    const total=contentInt+1;
    content.innerText=total;
    if(total===1){
        const id=document.getElementById('SelectedTicketAndGetPrice1');
        id.classList.remove('hidden');
        // when total ticket == 1 then total cost
        const totalPrice=document.getElementById('totalCost');
        totalPrice.innerText=550;
        // grand total part
        const grandTotal=document.getElementById('grand-total')
        grandTotal.innerText=550;
    }
    if(total===2){
        const id=document.getElementById('SelectedTicketAndGetPrice2');
        id.classList.remove('hidden');
         // when total ticket == 2 then total cost
         const totalPrice=document.getElementById('totalCost');
         totalPrice.innerText=1100;
         // grand total part
         const grandTotal=document.getElementById('grand-total')
         grandTotal.innerText=1100;
    }
    if(total===3){
        const id=document.getElementById('SelectedTicketAndGetPrice3');
        id.classList.remove('hidden');
         // when total ticket == 3 then total cost
         const totalPrice=document.getElementById('totalCost');
         totalPrice.innerText=1650
         // grand total part
         const grandTotal=document.getElementById('grand-total')
         grandTotal.innerText=1650;
         
    }
    if(total===4){
        const id=document.getElementById('SelectedTicketAndGetPrice4');
        id.classList.remove('hidden');
         // when total ticket == 4 then total cost
         const totalPrice=document.getElementById('totalCost');
         totalPrice.innerText=2200;
         
        //  enable the submit button
        const btnn=document.getElementById('submit');
        // total discount tk
        const totalDiscount=document.getElementById('totalDiscountCost');
        // manage discount div
        const discoundDiv=document.getElementById('discoundDiv');
        btnn.removeAttribute('disabled');
         // grand total part
         const grandTotal=document.getElementById('grand-total');
         grandTotal.innerText=2200;

        //  discount part
        document.getElementById('coupon').addEventListener('keyup',function(event){
            if(event.target.value==='NEW15'){
                btnn.addEventListener('click',function(){
                    grandTotal.innerText=2200-330;
                    discoundDiv.classList.remove('hidden');
                    totalDiscount.innerText=330;
                    // coupon input hide
                    CouponHide();
                    // const couponInput=document.getElementById('couponInput');
                    // couponInput.classList.add('hidden');
                })
                
               
            }
            else if(event.target.value==='Couple 20'){
                btnn.addEventListener('click',function(){
                    grandTotal.innerText=2200-440;
                    discoundDiv.classList.remove('hidden');
                    totalDiscount.innerText=440;
                    CouponHide();
                })
               
            }
            
        })
       
        // if(couponDiscount==='NEW15'){}
        //  grandTotal.innerText=2200+discountPrice;
    }
    
}

// Hide element by id

function hideElementById(id){
    const element=document.getElementById(id);
    element.classList.add('hidden');
}
// Unhide elementById

function unhideElementById(id){
    const element=document.getElementById(id);
    element.classList.remove('hidden')
}

// set a button disable onclick
function disableBtn(id) {
    const element=document.getElementById(id);
    element.disabled=true;
    element.style.background = 'green';
    element.style.color='white'
    
}

// set background-color by id
// function setBackgroundColorById(id){
//     const element=document.getElementById(id);
//     element.classList.add('bg-orange-400')
// }


// get element by id
// function getElement(id){
//     document.getElementById(id);
// }

// function coupon input hide
function CouponHide(){
    const couponInput=document.getElementById('couponInput');
     couponInput.classList.add('hidden');
    
}