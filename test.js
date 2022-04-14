let btn = document.getElementById("btn");
btn.addEventListener('click', sth);

function sth(event){
    alert(event.type + event.target + event.currentTarget)
}