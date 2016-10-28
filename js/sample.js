<script>
/* Drag & Drop */
var dragElem = null;
function handleDragStart(e) {
  this.classList.add('drop-over');
  dragElem = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}
function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}
function handleDragEnter(e) {
  this.classList.add('drop-over');
}
function handleDragLeave(e) {
  this.classList.remove('drop-over');
}
function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragElem != this) {
    dragElem.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}
function handleDragEnd(e) {
  var cols = document.querySelectorAll('.sidebar .menu-item');
  [].forEach.call(cols, function (col) {
    col.classList.remove('drop-over');
  });
}
function initDragAndDrop(selector) {
  var cols = document.querySelectorAll('.sidebar .menu-item');
  [].forEach.call(cols, function(col) {
    col.addEventListener('dragstart', handleDragStart, false);
    col.addEventListener('dragenter', handleDragEnter, false);
    col.addEventListener('dragover', handleDragOver, false);
    col.addEventListener('dragleave', handleDragLeave, false);
    col.addEventListener('drop', handleDrop, false);
    col.addEventListener('dragend', handleDragEnd, false);
  });
}
initDragAndDrop('.sidebar .menu-item');
/* Google Maps */
function initMap(latitude, longitude) {
  var pos = {lat: latitude, lng: longitude};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    scrollwheel: false,
    zoom: 15
  });
  var marker = new google.maps.Marker({
    position: pos,
    map: map
  });
}
initMap(37.5722910442, 126.972874442);
/*
  navigator.geolocation.getCurrentPosition(function(position) {
    initMap(position.coords.latitude, position.coords.longitude);
  });
*/
</script>
