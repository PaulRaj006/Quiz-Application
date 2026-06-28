let start = document.getElementById('stBtn');

let category = "";
let boxes = document.querySelectorAll('.box');
boxes.forEach((item)=>{
    item.onclick = function(){
        category = item.dataset.category;
        console.log(category); // for checking porpose 
    }
});

let diffLevel ="";
let diffBtn = document.querySelectorAll('.btn');
diffBtn.forEach((item)=>{
    item.onclick = function(){
        diffLevel = item.dataset.difflevel;
        console.log(diffLevel); // for checking porpose
    };
});

start.onclick = function(){
    let name = document.getElementById('userName').value;
    localStorage.setItem("userName",name);
    localStorage.setItem("category",category);
    localStorage.setItem("diffLevel", diffLevel);

    //itha last add pannanum
    window.location.href = "qiuz.html";
}
