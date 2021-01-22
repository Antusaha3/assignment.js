

 //1.--Coverted KilometerToMeter
function kilometerToMeter(length){
  
    for (i=length; i>=0; i++) {
    var meter = length*1000;
    return meter;
}
}
var result = kilometerToMeter(5);
console.log(result);
 
//2.--hotelCost
function hotelCost(count){
    for (i=count; i>=0; i++){
        if (count <= 10){
            return Math.round(count)*100;
        }
        else if( count >= 20){
         retrun (Math.round(count))*80;
        }
        else if (count <= 21){
            return ((Math.round(count)))*50;
        }
            
        
    }
}
  

  //    --budgetCalculator
  function budgetCalculator(nubmers){
      var kiteSum = 50;
      for(var i= 0; i < numbers.length; i++){
          var kiteNumbers = nubmers[i];
          kiteSum = kiteSum+kiteNumbers;

      }
      


  } 
// megaFriends--->
 function megaFriends(count){
     var maxWrod = count[0];
     for( var i=0; i< count.length; i++){
         var char = count[i];
         if(char > maxWrod){
             maxWrod = char;


         }
         return maxWrod;
     }
 }