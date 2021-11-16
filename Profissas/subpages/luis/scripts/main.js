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

function SelectPerson(index) {
    Messenger(index>=0?true: false)
    messengerBox.contentWindow.UpdateMessenger();
    userIndex = index;
    console.log(index);
}

