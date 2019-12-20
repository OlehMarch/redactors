<?php
$result = mail ("test@test.ru","$_POST[theme]","Имя: $_POST[firstName]","\ne-mail: $_POST[e-mail]","\nТекст сообщения: $_POST[text]");
if ($result) {
echo "<p>Сообщение отправлено успешно!</p>";
}
else {
echo "<p>Сообщение НЕ отправлено!</p>";
}
?>