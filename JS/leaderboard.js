let sortBtn = document.getElementById('sortBtn');
let assending = true;
function sortList(){
    if(assending){
        sortBtn.innerHTML=`<i class="fa-solid fa-arrow-down-wide-short"></i> Sort: Lowest Score`
        assending = false;
    }
    else{
        sortBtn.innerHTML=`<i class="fa-solid fa-arrow-up-wide-short"></i> Sort: Highest Score`
        assending = true;
    }
}