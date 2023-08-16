document.getElementById('withdraw-btn').addEventListener('click',function(){
  const withdrawField = document.getElementById('withdraw-field');
  const withdrawValue = withdrawField.value;
  const withdrawAmount = parseFloat(withdrawValue);
   withdrawField.value= '';
  if (isNaN(withdrawAmount)) {
   alert("please input a valid amount")
   return;
  }
  const withdrawTotal = document.getElementById('withdraw-total');
  const withdrawTotalValue = withdrawTotal.innerText;
  const withdrawTotalAmount = parseFloat(withdrawTotalValue);
  const balanceTotal = document.getElementById('balance-total');
  const balanceElementString = balanceTotal.innerText;
  const balanceAmount = parseFloat(balanceElementString);
   if(withdrawAmount > balanceAmount){
   alert('You dont have sufficient money')
   return;
  }
  withdrawField.value= '';
  const newWithdrawTotalAmount = withdrawTotalAmount + withdrawAmount;
  withdrawTotal.innerText =  newWithdrawTotalAmount;
  const totalBalanceAmount = balanceAmount - withdrawAmount;
  balanceTotal.innerText = totalBalanceAmount;
  
})