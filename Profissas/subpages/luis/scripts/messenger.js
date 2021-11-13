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

var subpage = document.getElementById("subpage");
var pagestyle = document.getElementById("pagestyle");
var pagelayout = document.getElementById("pagelayout");
var contentElement = document.getElementById("messenger-content");

function OnLoadXML(data)
{
    let messenges = data.firstChild;
    for(i = 0; i < messenges.childElementCount; i++)
    {
        let messenge =  new Messenge (messenges.children[i]);
        messenge.CreateElement (contentElement);
    }
}

LoadXML("datas/messenges.xml", OnLoadXML);