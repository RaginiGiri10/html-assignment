function getData(){
  
    let user={
        firstNumber:parseInt(document.getElementById('firstNumber').value),
        lastNumber:parseInt(document.getElementById('secondNumber').value),
        Add:function(){
           return user.firstNumber+user.lastNumber
        },
        Subtract:function(){
            return user.firstNumber-user.lastNumber
         },
         Multiply:function(){
            return user.firstNumber*user.lastNumber
         },
         Divide:function(){
            try{
            return user.firstNumber/user.lastNumber
            }
            catch(err){
               console.log('Denominator should be greater than zero')
            }
         },
      }
    var operator=document.getElementById('operation').value;
    if(operator=="---Select Operation---"){
         document.getElementById('finalResult').innerText="Please select appropriate operation"
    }
    else if(operator=='Add'){
      document.getElementById('finalResult').innerText="User selected Add and the result is:" +user.Add()
    }
    else if(operator=='Subtract'){
      document.getElementById('finalResult').innerText="User selected Subtract and the result is:" +user.Subtract()
    }
    else if(operator=='Multiply'){
      document.getElementById('finalResult').innerText="User selected Multiply and the result is:" +user.Multiply()
   }
   else if(operator=='Divide'){
      document.getElementById('finalResult').innerText="User selected Divide and the result is:" +user.Divide()
   }
  
   
   
    let ButtonElement=document.getElementById('btnPerform').value;
}



