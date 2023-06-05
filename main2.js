function send(){
    number1= document.getElementById("number1").ariaValueMax;
    number2=document.getElementById("number2").ariaValueMax;
    actual_answer=parseInt(number1)*parseInt(number);

    question_number='<h4 id="h4word"> '+number1+ "X" +number2'</h4>'
    input_box='<br>Answer :<input type="text" id="input_check_box"> <br>'
    button='<input type="button" id="b1" value="check" onclick='check()>'
    row=input_word+answer+button;
    document.getElementById("number1").innerHTML=row
    document.getElementById("number2").value=""

}