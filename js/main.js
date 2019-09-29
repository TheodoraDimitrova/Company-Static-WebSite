
function initMap() {
 const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.733883, lng: 25.485830},
    zoom: 8
  });
  const marker=new google.maps.Marker({
      position:{lat: 42.697708, lng: 23.321867},
      map:map
  })
}
