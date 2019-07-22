
let map;

function createMap() {
        let options = {
            center: { lat: 23.634501, lng: -102.552788},
            zoom: 10
        };

        map = new google.maps.Map(document.getElementById("map"),options);
    }
