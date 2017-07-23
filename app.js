 
   var geocoder = new google.maps.Geocoder();
   var address = '28208';
   
 if (geocoder) {
      geocoder.geocode({ 'address': address }, function (results, status) {
         if (status == google.maps.GeocoderStatus.OK) {
           authorization: AIzaSyDmg4k6st0ttHzlXgLHUpsFqTDriqj33rw;
            console.log(results[0].geometry.location);
         }
         else {
            console.log("Geocoding failed: " + status);
         }
      })};
      
   var distance = 18;
   var lat = "35.234664";
   var lng = "-80.851075";
   var api = "AIzaSyDmg4k6st0ttHzlXgLHUpsFqTDriqj33rw";
   var radius = (distance*(1609.34));
   var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=" + radius + "&location=" + lat + "," + lng + "&key=" + api + "&type=park";
   console.log(queryURL);



  
     $.ajax({
      url: queryURL,
      type: "GET",   
            dataType: 'jsonp',
            cache: false,
            success: function(response){                          
                alert(response);                   
            }    

     });
   
//$.ajax({
//            type: "GET",   
//            dataType: 'jsonp',
//            cache: false,
//            success: function(response){                          
//                alert(response);                   
//        });   

