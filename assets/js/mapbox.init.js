mapboxgl.accessToken = 'pk.eyJ1IjoiYWthcHBzIiwiYSI6ImNrdmFxZmRldTJlNnoyb2x1ZTU0aDJjbDUifQ.RggfZIBSoPE86XzMIOX0_w';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
	center: [-28.7041,77.1025], // starting position
    zoom: 13 // starting zoom
});

map.on('load', function () {
    map.resize();
    $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function(){
        map.resize();
    });
});

// create the popup
var popup = new mapboxgl.Popup({ offset: 40 }).setText(
    'Delhi, India'
);

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';
 
// create the marker
new mapboxgl.Marker(el)
    .setLngLat([-28.7041,77.1025])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
