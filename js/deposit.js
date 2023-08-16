document.getElementById('btn-deposit').addEventListener('click',function(){
   const depositField = document.getElementById('deposit-field')
   const depositFieldString = depositField.value;
   const depositAmount = parseFloat(depositFieldString);
   depositField.value = '';
     if (isNaN(depositAmount)) {
   alert("please input a valid amount")
   return;
  }
   const depositElement = document.getElementById('deposit-total')
   const depositElementString = depositElement.innerText;
   const depositTotal = parseFloat(depositElementString);
   const depositTotalValue = depositAmount + depositTotal;
   depositElement.innerText = depositTotalValue;
    const balanceElement = document.getElementById('balance-total')
    const balanceElementString = balanceElement.innerText;
    const balanceAmount = parseFloat(balanceElementString);
    const balanceTotal = balanceAmount + depositAmount;
    balanceElement.innerText = balanceTotal;
})
