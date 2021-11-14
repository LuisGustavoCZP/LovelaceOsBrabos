class JobCategory 
{
    constructor (template){
        this.name = template.children[0].innerHTML;
        this.icon = template.children[1].innerHTML;
        let t = template.children[2];
        this.users = [];
        for(i = 0; i < t.childElementCount; i++){
            this.users.push(t.children[i]);
        }
    }

    /*
    constructor (owner, text, type){
        this.type = type;
        this.owner = owner;
        this.text = text;
    }
    

    CreateElement(parentElement) {
        LoadHTML("template-"+this.type+".html", element => 
        {
            element.children[0].innerText = this.text;
            element.classList.add(this.owner);
            parentElement.append(element);
        });
    }*/
}

class JobUser 
{
    constructor (template){
        this.name = template.children[0].innerHTML;
        this.category = parseInt(template.children[1].innerHTML, 0);
        this.job = template.children[2].innerHTML;
        this.photo = template.children[3].innerHTML;
        this.messenges = [];
        let messenges = template.children[4];
        for(i = 0; i < messenges.childElementCount; i++){
            
            this.messenges.push(JobMessenge.Load(messenges.children[i]));
        }
    }
}

class JobMessenge
{
    constructor (type, owner, text){
        this.type = type;
        this.owner = owner;
        this.text = text;
    }

    static Load (template)
    {
        let msg = new JobMessenge("","","");
        msg.type = template.children[0].innerHTML;
        msg.owner = template.children[1].innerHTML;
        msg.text = template.children[2].innerHTML;
        return msg;
    }

    CreateElement(parentElement) {
        LoadHTML("template-"+this.type+".html", element => 
        {
            if(this.type == "messenge")
            {
                element.children[0].innerText = this.text;
            }
            else 
            {
                element.children[0].children[0].innerText = this.text;
            }

            element.classList.add(this.owner);
            parentElement.append(element);
            if(this.text="..."){
                tempMsg = element;
            }

            parentElement.scroll(0, element.offsetTop);
        });
    }
}

var messengerElement = document.getElementById("messenger");
var headerElement = document.getElementById("messenger-header");
var photoElement = document.getElementById("messenger-header-photo");
var nameElement = document.getElementById("messenger-header-name");
var categoryElement = document.getElementById("messenger-header-category");
var jobElement = document.getElementById("messenger-header-job");
var inputmsgElement = document.getElementById("messenger-input-msg");
var contentElement = document.getElementById("messenger-content");
var sendbuttonElement = document.getElementById("messenger-input-send");

var categories = [];
var users = [];
var userIndex = 0;
var msgIndex = 0;

function OnLoadCategories(data)
{
    let categoriesElement = data.firstChild;
    for(i = 0; i < categoriesElement.childElementCount; i++)
    {
        let categorie =  new JobCategory (categoriesElement.children[i]);
        categories.push(categorie);
        /*messenge.CreateElement (contentElement);*/
    }
}

function OnLoadUsers(data)
{
    let usersElement = data.firstChild;
    for(i = 0; i < usersElement.childElementCount; i++)
    {
        let user =  new JobUser (usersElement.children[i]);
        users.push(user);
        
        console.log(user.name);
        //messenge.CreateElement (contentElement);
    }
    
    let userInicial = users[userIndex];
    inputmsgElement.value = userInicial.messenges[msgIndex].text;

    nameElement.innerText = userInicial.name;
    photoElement.src = userInicial.photo;
    jobElement.innerText = userInicial.job;

    let catIcon = categories[userInicial.category].icon;
    console.log(catIcon);
    categoryElement.src = catIcon;
}

var tempMsg;
function ReceivingMessage(){
    let msg = new JobMessenge("messenge", "otheruser", "...");
    msg.CreateElement(contentElement);
    setTimeout(ReceiveMessage, 2000);
}

function ReceiveMessage(){
    tempMsg.remove();
    users[userIndex].messenges[msgIndex++].CreateElement (contentElement);
    let msg = new JobMessenge("messenge", "otheruser", "...");
    msg.CreateElement(contentElement);
    setTimeout(ReceiveDoc, 2000);
}

function ReceiveDoc(){
    tempMsg.remove();
    users[userIndex].messenges[msgIndex++].CreateElement (contentElement);
}

LoadXML("datas/categories.xml", OnLoadCategories);
LoadXML("datas/users.xml", OnLoadUsers);

sendbuttonElement.onclick = x=> 
{
    sendbuttonElement.disabled = true;
    inputmsgElement.value = "";
    users[userIndex].messenges[msgIndex++].CreateElement (contentElement);
    setTimeout(ReceivingMessage, 2000);
};



