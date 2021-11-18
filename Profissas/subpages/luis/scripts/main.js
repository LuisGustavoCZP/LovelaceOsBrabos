var messengerBox = document.getElementById("principal-messenger");
var userIndex = 0;
var msgIndex = -1;

function Messenger(enable) {
    if(!enable){
        messengerBox.classList.add("invisivel");
    } else {
        messengerBox.classList.remove("invisivel");
    }
}
// => Alternativa para a função acima
// function Messenger() {
//     messengerBox.classList.toggle("invisivel");
// }

function SelectPerson(index) {
    messengerBox.contentWindow.UpdateMessenger(index);
    userIndex = index;
    msgIndex = -1;
    Messenger(index>=0?true: false);
    console.log(index);
}

