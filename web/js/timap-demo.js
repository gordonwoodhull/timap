var map = L.map('map').setView([40.7168293, -74.0061277], 11);

var layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


layer.on('load', function() {
    html2canvas(document.querySelector("#map div.leaflet-layer")).then(function(canvas) {
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "your-map.jpg";
        link.href = canvas.toDataURL();
        link.target = '_blank';
        link.click();
    });
});
