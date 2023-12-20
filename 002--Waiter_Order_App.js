/*// Watch this videos for project details 


// Link -->          https://www.youtube.com/watch?v=Dl3Z4gl413Y



// Solution-->*/




const headerAccess = document.querySelector('header');
// console.log(headerAccess);
headerAccess.style.color = 'orange';
headerAccess.style.borderBottom = 'solid 5px #f4f4f4'

//////////////////////////////////////////////////////////////////////////////////////////////////


const formAccess = document.getElementById("forming")
// console.log(formAccess);
formAccess.parentElement.style.color = 'yellow'


//////////////////////////////////////////////////////////////////////////////////////////////////


const orderAccess = document.querySelector("#table100");
// console.log(orderAccess);
orderAccess.style.borderBottom = 'solid 3px #000';


//////////////////////////////////////////////////////////////////////////////////////////////////



function storingOrderToLocalStorage(event){
    event.preventDefault();
    // console.log(1008);

    const orderObj = {
        chPriceInput : event.target.chosePrc.value,
        chDishInput : event.target.choseDis.value,
        chTableInput : event.target.opt.value
    }
    localStorage.setItem(orderObj.chDishInput , JSON.stringify(orderObj));
    showingOrderOnDisplay(orderObj);
}

function showingOrderOnDisplay(orderObj){
    const parentUlTagTbl01 = document.getElementById("tbl01");
    const childLiTagTbl01 = document.createElement('li');
    childLiTagTbl01.className = "adding-tables01";
    childLiTagTbl01.appendChild(document.createTextNode(`${orderObj.chDishInput[0]}`));
    parentUlTagTbl01.appendChild(childLiTagTbl01);


    
//////////////////////////////////////////////////////////////////////////////////////////////////

    const parentUlTagTbl02 = document.getElementById("tbl02");
    const childLiTagTbl02 = document.createElement('li');
    childLiTagTbl02.className = "adding-tables02";
    childLiTagTbl02.appendChild(document.createTextNode(`${orderObj.chDishInput[1]}`));
    parentUlTagTbl02.appendChild(childLiTagTbl02);


//////////////////////////////////////////////////////////////////////////////////////////////////

  
//////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("chP").value = '';
    document.getElementById("chD").value = '';
    

}