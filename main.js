$(function(){
   
   let result = document.getElementById("result");
   
   //ボタン入力時の処理
   
   $('input').on('click',function(){
    
   //=ボンタンは計算をし結果を出力
       if($(this).val() == "="){
       
       result.value = new Function("return " + result.value)();  
       
       }
   //AC押下時の処理
       else if($(this).val() == "AC"){
        result.value = '';
       }
   //押下した数値や記号を出力
       else{
       result.value += $(this).val();
       };
   })
   
   
   
});