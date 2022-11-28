
// declaration

let cards = Array.from(document.querySelectorAll('.card'));
let favs = Array.from(document.querySelectorAll('.fa-heart'));
let plusBtns = Array.from(document.querySelectorAll('.fa-plus-circle'));
let minusBtns = Array.from(document.querySelectorAll('.fa-minus-circle'));
let deleteBtns = Array.from(document.querySelectorAll('.fa-trash-alt'));

// activating the "heart" button

for (let fav of favs)(
    fav.addEventListener('click',function(){
        if (fav.style.color == 'black'){
            fav.style.color = 'violet'
        } else {
            fav.style.color = 'black'
        }
    })
)

// dumping items in trash

for (let i in deleteBtns)(
    deleteBtns[i].addEventListener('click',function(){
        cards[i].remove();
        total()
    })
)

// adjusting quantity (the plus button)

for (let plusBtn of plusBtns)(
    plusBtn.addEventListener('click',function(){
        plusBtn.nextElementSibling.innerHTML++ 
        total()
    })
)

// adjusting quantity (the minus button)

for (let minusBtn of minusBtns)(
    minusBtn.addEventListener('click',function(){
        minusBtn.previousElementSibling.innerHTML > 0 ?
        minusBtn.previousElementSibling.innerHTML-- : 
        total()
    })
)

// calculating the total

function total(event){
    let price = Array.from(document.querySelectorAll('.unitt-price'));
    let qte = Array.from(document.querySelectorAll('.qute'));
    let z = 0;

    for (i = 0; i<price.length; i++){
        z = z+price[i].innerHTML*qte[i].innerHTML
}
document.getElementById("total-price").innerHTML = z
}