let start = document.getElementById('stBtn');

// Category
let category = "";
let boxes = document.querySelectorAll('.box');
boxes.forEach((item)=>{
    item.onclick = function(){
        boxes.forEach((box)=>{
            box.classList.remove("active-category");
        })
        item.classList.add("active-category");
        category = item.dataset.category;
        console.log(category); // for checking porpose 
    }
});

// Difficulty
let diffLevel ="";
let diffBtn = document.querySelectorAll('.btn');
diffBtn.forEach((item)=>{
    item.onclick = function(){
        diffBtn.forEach((btn)=>{
            btn.classList.remove("activeBtn");
        })
        item.classList.add("activeBtn");
        diffLevel = item.dataset.difflevel;
        console.log(diffLevel); // for checking porpose
    };
});

start.onclick = function(){
    let name = document.getElementById('userName').value;
    localStorage.setItem("userName",name);
    localStorage.setItem("category",category);
    localStorage.setItem("diffLevel", diffLevel);

    //check user validation or not
    if(name.trim()==""){
        alert("please enter your name");
        return;
    }
    if(category == ""){
        alert("PLease select a category")
        return;
    }
    if(diffLevel == ""){
        alert("please select difficulty");
        return;
    }

    //itha last add pannanum
    window.location.href = "qiuz.html";
}
