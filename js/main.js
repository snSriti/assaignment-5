//memory
const memory8gb = document.getElementById('memory-8gb');
const memory16gb = document.getElementById('memory-16gb');
const memoryInput1 = document.getElementById('memory-input1');

memory8gb.addEventListener('click',function(){
    memoryInput1.innerText='0';
    updateTotal();
})
memory16gb.addEventListener('click',function(){
    memoryInput1.innerText= '180';
    updateTotal();
})
//storage
const storage1 = document.getElementById('storage-1');
const storage2 = document.getElementById('storage-2');
const storage3 = document.getElementById('storage-3');
const storageCost = document.getElementById('storage-cost');

storage1.addEventListener('click',function(){
    storageCost.innerText ='0';
    updateTotal();
})
storage2.addEventListener('click',function(){
    storageCost.innerText = '100';
    updateTotal();
})
storage3.addEventListener('click',function(){
    storageCost.innerText = '180';
    updateTotal();
})
//delivery

const deliveryFree = document.getElementById('delivery-free');
const deliveryCost = document.getElementById('delivery-cost');
const deliveryCharge = document.getElementById('delivery-charge');

deliveryFree.addEventListener('click',function(){
    deliveryCharge.innerText= '0';
    updateTotal();
})
deliveryCost.addEventListener('click',function(){
    deliveryCharge.innerText= '20';
      updateTotal();
})
//total
const totalPrice = document.getElementById('total-price');
const price = document.getElementById('price');

//update total
function updateTotal(){
const memoryInput1 = memoryInput1.innerText;
const storageCost = storageCost.innerText;
const deliveryCharge = deliveryCharge.innerText;

 const grandTotal = parseInt(memoryInput1) + parseInt(storageCost) + parseInt(deliveryCharge);
 
totalPrice.innerText = grandTotal;
console.log(grandTotal);

}