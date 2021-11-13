class Messenge 
{
    constructor (template){
        this.type = template.children[0].innerHTML;
        this.owner = template.children[1].innerHTML;
        this.text = template.children[2].innerHTML;
    }

    /*
    constructor (owner, text, type){
        this.type = type;
        this.owner = owner;
        this.text = text;
    }
    */

    CreateElement(parentElement) {
        LoadHTML("template-"+this.type+".html", element => 
        {
            element.children[0].innerText = this.text;
            element.classList.add(this.owner);
            parentElement.append(element);
        });
    }
}

var messengerElement = document.getElementById("messenger");
var headerElement = document.getElementById("messenger-header");
var inputmsgElement = document.getElementById("messenger-input-msg");
var contentElement = document.getElementById("messenger-content");
var sendbuttonElement = document.getElementById("messenger-input-send");

function OnLoadXML(data)
{
    let messenges = data.firstChild;
    for(i = 0; i < messenges.childElementCount; i++)
    {
        let messenge =  new Messenge (messenges.children[i]);
        messenge.CreateElement (contentElement);
    }
}

inputmsgElement.value = "Oi Yan, deu ruim aqui... ai menino meu filho fica jogando bola aqui em casa, esse pestinha! Enfim... Quanto que fica pra trocar as 12 lampadas?";   
sendbuttonElement.onclick = x=> 
{
    sendbuttonElement.disabled = true;
    inputmsgElement.value = "";
    LoadXML("datas/messenges.xml", OnLoadXML);
};
