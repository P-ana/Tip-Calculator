

function calculateTip(){
    const bill=document.getElementById("bill");
    const tip=document.getElementById("tip");
    const total=document.getElementById("total");

    let billAmount=Number((bill.value*tip.value)/100);
     total.textContent=`Total amount: ${billAmount + Number(bill.value)}$`; 


}