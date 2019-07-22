let map;

function createMap() {
  let options = {
    center: { lat: 23.634501, lng: -102.552788 },
    zoom: 10
  };

  map = new google.maps.Map(document.getElementById("map"), options);
}

// let registro=document.getElementById("registro");
// let modal= document.getElementById("miModal");
// let flex= document.getElementById("flex");

// registro.addEventListener("click", function(){
//     modal.style.display = "block";
// })

// window.addEventListener("click", function(e){
//     if(e.target == flex){
//       modal.style.display = "none";
//     }
//    });
