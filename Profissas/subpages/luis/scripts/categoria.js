let items = document.getElementsByTagName("li");
let n = items.length;

for(i = 0; i < n; i++) 
{
    let iaux = i;
    items[i].onclick = x => {
        parent.SelectPerson(iaux);
    }
}