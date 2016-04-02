$(document).ready(function () {

// -- 1 --
// Найти все элементы h1, являющиеся потомками div и заменить их содержимое на произвольное.
    $('div h1').text("Произвольный текст");

// -- 2 --
// Установить всем input type="text" произвольное содержимое. Содержимое второго инпута должно отличаться от первого.
    $(":text[name=fname]").attr("placeholder","Введите фамилию").val("Белякова");
    $(":text[name=lname]").attr("placeholder","Введите имя").val("Светлана");

// -- 3--
// Выведите значение option с value=2
    //$("#myselect").children("option[value=2]").text();
    $("#optionValue").text($("#myselect").children("option[value=2]").text());
    alert($("#myselect").children("option[value=2]").text());

// -- 4 --
// Обернуть текст во втором li тегом b:
    var a = $("ul li:eq(1)").text();
    $("ul li:eq(1)").html('<b>'+a+'</b>');

// -- 5 --
// Извлеките последний li из предыдущего примера.
    $("#last_li").html($('ul li:last-child'));

});
