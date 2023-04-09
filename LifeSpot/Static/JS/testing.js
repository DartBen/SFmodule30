// для получения пользовательского ввода самое простое - воспользоваться конструкцией prompt()
function nameSymbolsAndPageElements() {
    let userName = prompt("Пожалуйста, введите ваше имя");
    alert(`Приветствуем, ${userName}. В вашем имени ${userName.length} символов`);

    let elements = document.getElementsByTagName('*');
    alert(`Количество элементов на странице:  ${elements.length}`);
}

function saveInputText(){
    let inputText= document.getElementsByTagName('input')[0].value.toLowerCase();
    if (this.lastInputText !=null) {
        alert('Последний ввод: ' + this.lastInputText + '\n' + 'Текущий ввод: ' + inputText);
    }
    else{
        alert('Текущий ввод: ' + inputText);
    }
    this.lastInputText = inputText;

}