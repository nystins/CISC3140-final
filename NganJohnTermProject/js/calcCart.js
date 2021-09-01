"use strict";

window.onload = calcCart;

document.getElementById("modelQty1").addEventListener("change", calcCart);
document.getElementById("modelQty2").addEventListener("change", calcCart);
document.getElementById("modelQty3").addEventListener("change", calcCart);
var shippingOptions = document.querySelectorAll('input[name="shipping"]');
for (var i=0; i<shippingOptions.length; i++){
		shippingOptions[i].addEventListener("click", calcCart);
}

function calcCart(){
	//Model 1
	var orderCost1 = document.getElementById("modelCost1").value * document.getElementById("modelQty1").value ;
	document.getElementById("orderCost1").value = formatUSCurrency(orderCost1);
	
	//Model 2
	var orderCost2 = document.getElementById("modelCost2").value * document.getElementById("modelQty2").value ;
	document.getElementById("orderCost2").value = formatUSCurrency(orderCost2);
	
	//Model 3
	var orderCost3 = document.getElementById("modelCost3").value * document.getElementById("modelQty3").value ;
	document.getElementById("orderCost3").value = formatUSCurrency(orderCost3);
	//total ordercost of all 3 units
	var totalOrder = orderCost1 +orderCost2+orderCost3;
	
	//shipping cost individual
	var shipCost1 = document.querySelector('input[name="shipping"]:checked').value * document.getElementById("modelQty1").value;
	var shipCost2 = document.querySelector('input[name="shipping"]:checked').value * document.getElementById("modelQty2").value;
	var shipCost3 = document.querySelector('input[name="shipping"]:checked').value * document.getElementById("modelQty3").value;
	document.getElementById("shippingCost").value = formatNumber(shipCost3, 2);
	
	//total shipping cost
	var totalShipCost = shipCost1 + shipCost2 + shipCost3;
	document.getElementById("shippingCost").value = formatNumber(totalShipCost, 2);
	//subtotal
	document.getElementById("subTotal").value = formatNumber(totalOrder + totalShipCost ,2);
	
	var salesTax = 0.08 * (totalOrder + totalShipCost);
	document.getElementById("salesTax").value = formatNumber(salesTax,2);
	
	var cartTotal = totalOrder + totalShipCost + salesTax;
	document.getElementById("cartTotal").value = formatUSCurrency(cartTotal);
	
	document.getElementById("shippingType").value=document.querySelector('input[name="shipping"]:checked').labels[0].textContent;
	
}

//login button
document.getElementById("myBtn").addEventListener("click",
function(){
		var user = document.getElementById("username").value;
		document.getElementById("memberID").style.display = "none";
		document.getElementById("id").innerHTML = "<label>Welcome, " + user + "!</label>"
		
});

function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
