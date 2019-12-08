/*function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (valid) output = 'Адрес эл. почты введен правильно!';
    else output = 'Адрес электронной почты введен неправильно!';
    document.getElementById('message').innerHTML = output;
    return valid;
}
 */
 /*
function ValidPhone() {
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (valid) output = 'Номер телефона введен правильно!';
    else output = 'Номер телефона введен неправильно!';
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
    return valid;
}  
*/


/*
function validate(){
   //Считаем значения из полей name и email в переменные x и y
   var x=document.forms["form"]["name"].value;
   var y=document.forms["form"]["phone"].value;
   //Если поле name пустое выведем сообщение и предотвратим отправку формы
   if (x.length==0){
      document.getElementById("namef").innerHTML="*данное поле обязательно для заполнения";
      return false;
   }
   //Если поле email пустое выведем сообщение и предотвратим отправку формы
   if (y.length==0){
      document.getElementById("telf").innerHTML="*данное поле обязательно для заполнения";
      return false;
   }

   //Проверим содержит ли значение введенное в поле email символы @ и .
   at=y.indexOf("@");
   dot=y.indexOf(".");
   //Если поле не содержит эти символы знач email введен не верно
   if (at<1 || dot <1){
      document.getElementById("emailf").innerHTML="*email введен не верно";
      return false;
   }

}*/

/*
function validateComments(input) {
       if (input.value.length < 20) {
          input.setCustomValidity("Дайте более развернутый ответ.");   
       }
       else {
          // Длина комментария отвечает требованию, 
          // поэтому очищаем сообщение об ошибке
          input.setCustomValidity("");
       }
}*/

function validate(){
   //Считаем значения из полей name и email в переменные x и y
   var x=document.forms["form"]["name"].value;
   var y=document.forms["form"]["phone"].value;
   //Если поле name пустое выведем сообщение и предотвратим отправку формы
   if (x.length==0){
      document.getElementById("namef").innerHTML="*данное поле обязательно для заполнения";
      return false;
   } else {
          // Длина комментария отвечает требованию, 
          // поэтому очищаем сообщение об ошибке
          document.getElementById("namef").innerHTML="";
       }
   //Если поле email пустое выведем сообщение и предотвратим отправку формы
   if (y.length==0){
      document.getElementById("telf").innerHTML="*данное поле обязательно для заполнения";
      return false;
   }
   else {
          // Длина комментария отвечает требованию, 
          // поэтому очищаем сообщение об ошибке
          document.getElementById("telf").innerHTML="";
       }
}