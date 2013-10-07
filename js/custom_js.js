function calculate() 
{
 if ((calc.rent.value == null || calc.rent.value.length == 0) ||
     (calc.yield.value == null || calc.yield.value.length == 0)
||
     (calc.price.value == null || calc.price.value.length == 0)||
     (calc.qv.value == null || calc.qv.value.length == 0))
 { 
 calc.answer.value = "Incomplete data";
 }
 else
 {
 var rent = calc.rent.value;
 var yield  = calc.yield.value / 100;
 var price = calc.price.value;
 var qv = calc.qv.value;
 calc.reqrent.value = (price * yield / 50).toFixed(0);
 calc.pyield.value = ((rent * 50 / price) * 100).toFixed(2);
 calc.maxprice.value = (rent * 50 / yield).toFixed(0);
 }
 }

function check() {
if (calc.maxprice.value < calc.price.value) {
calc.answer.value = "Don't Buy";
}
else {
calc.answer.value = "Buy"; 
}
}