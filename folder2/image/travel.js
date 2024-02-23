var navBar = document.getElementById("navBar");
function togglebtn(){
    navBar.classList.toggle("hidemenu");


}
let placeName = document.getElementById("placeName");
let submit = document.getElementById("submit");

submit.addEventListener("click", function(){
if(placeName.value== ""){
    alert("Fill Form")
}else{
    alert(placeName.value + " Tour Booked")
}
})



