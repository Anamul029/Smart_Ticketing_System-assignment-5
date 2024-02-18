// go to main page
function clickBuyTicketButton() {
    hideElementById('header');
    unhideElementById('main');
    unhideElementById('footer');
}

// select ticket

function selectSeatButton(id) {
    // inner text of button
    const content = document.getElementById(id);
    const val = content.innerText;
    //    disableBtn(id)
    const value = getElementTextById('total-seat-left');
    if (value > 36) {
        disableBtn(id)
        totalSeatBooking('total-selected-sit');
    }

    //  selected ticket number


    if (value === 40) {
        const item1 = document.getElementById('Seat-Number1');
        item1.innerText = id;
    }
    if (value === 39) {
        const item2 = document.getElementById('Seat-Number2');
        item2.innerText = id;
    }
    if (value === 38) {
        const item3 = document.getElementById('Seat-Number3');
        item3.innerText = id;
    }
    if (value === 37) {
        const item4 = document.getElementById('Seat-Number4');
        item4.innerText = id;
    }
    //  // Enable Next button to go next page
    document.getElementById('Mobile').addEventListener('keyup',function(event){
        const stringVal=event.target.value;
        const intVal=parseInt(stringVal);
        
        if((value===37||value===38||value===39||value===40)&& (intVal>=0)){
            const NextBtn = document.getElementById('NextBtn');
            NextBtn.removeAttribute('disabled')
            }  
    })
    
}


// click next button to go next page

// const element = document.getElementById('total-selected-sit');
// const elementInt=parseInt(element.innerText)
// if(elementInt>=0){
//     const NextBtn = document.getElementById('NextBtn');
//     NextBtn.removeAttribute('disabled')
// }
// console.log(element.innerText);