//Best Price

const bestPrice = document.getElementById('best-price')


//memory

const firstMemory = document.getElementById('first-memory');
const secondMemory = document.getElementById('second-memory');


///Promo Code
/*
function promo_Btn() {
    const discountCode = document.getElementById('discount-code');


    if (discountCode == 'stevekaku') {
        const newTotal = finalTotalCost.innerText - 20;
        finalTotalCost.innerText = newTotal;
    }

}*/





//ssd

const firstStorage = document.getElementById('first-storage');
const secondStorage = document.getElementById('second-storage');
const thirdStorage = document.getElementById('third-storage');

//Delivery

const freeDelivery = document.getElementById('free-delivery');
const expressDelivery = document.getElementById('express-delivery');




//Total 

const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalCost = document.getElementById('total-cost');


//Final Total Cost

const finalTotalCost = document.getElementById('final-total-cost');

function finalTotal() {
    const grandBestPrice = parseInt(bestPrice.innerText);
    const grandMemoryCost = parseInt(memoryCost.innerText);
    const grandDeliveryCost = parseInt(deliveryCost.innerText);
    const grandStorageCost = parseInt(storageCost.innerText);

    const grandTotalCost = grandBestPrice + grandMemoryCost + grandDeliveryCost + grandStorageCost;
    finalTotalCost.innerText = grandTotalCost;




}



//Total cost


function updateTotal() {
    const grandBestPrice = parseInt(bestPrice.innerText);
    const grandMemoryCost = parseInt(memoryCost.innerText);
    const grandDeliveryCost = parseInt(deliveryCost.innerText);
    const grandStorageCost = parseInt(storageCost.innerText);

    const grandTotalCost = grandBestPrice + grandMemoryCost + grandDeliveryCost + grandStorageCost;
    totalCost.innerText = grandTotalCost;


}




//Memory cost 
firstMemory.addEventListener('click', function() {
    memoryCost.innerText = 0;
    updateTotal();
    finalTotal();
});

secondMemory.addEventListener('click', function() {
    memoryCost.innerText = 180;
    updateTotal();
    finalTotal();
});



//Storage cost 

firstStorage.addEventListener('click', function() {
    storageCost.innerText = 0;
    updateTotal();
    finalTotal();
});


secondStorage.addEventListener('click', function() {
    storageCost.innerText = 100;
    updateTotal();
    finalTotal();
});

thirdStorage.addEventListener('click', function() {
    storageCost.innerText = 180;
    updateTotal();
    finalTotal();
});


//delivery Cost

freeDelivery.addEventListener('click', function() {
    deliveryCost.innerText = 0;
    updateTotal();
    finalTotal();
})

expressDelivery.addEventListener('click', function() {
    deliveryCost.innerText = 20;
    updateTotal();
    finalTotal();
})