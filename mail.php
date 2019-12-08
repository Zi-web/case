<?php
/* Здесь проверяется существование переменных */
/*$anonim = '';
    if (empty($_POST["anonim"]))
    {
       $anonim = "Анонимное размещение";
    }
    elseif (!empty($_POST["anonim"]) && is_array($_POST["anonim"]))
    {
       $anonim = implode("", $_POST["anonim"]);
    }

if (isset($_POST['tel1'])) {$tel1 = $_POST["tel1"];}
*/
if (isset($_POST['name'])) {$name = $_POST["name"];}
if (isset($_POST['phone'])) {$phone = $_POST["phone"];}



/* Сюда впишите свою эл. почту */
$myaddres  = "zstr2011@yandex.ru"; // кому отправляем
 
/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "Тема: Новая заявка с сайта\nИмя: $name\nНомер телефона: $phone\n";
 

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заявка'; //сабж
$email='ladyzi89@mail.ru'; // от кого
$send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom: $email<$email>");


ini_set('short_open_tag', 'On');
/*header('Refresh: 3; URL=index.html');*/
header('location: thank-you.html');
?>

