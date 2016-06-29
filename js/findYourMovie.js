 var xmlhttp;
            
     window.onload = function()
     {
       document.getElementById('btnGetInfo').addEventListener('click', getMovieInfo, false);
     }

     function getMovieInfo(e)
       {
           var title = document.getElementById('title').value;
           var url = "https://www.omdbapi.com/?t=" + title + "&plot=full&r=json";
           xmlhttp = new XMLHttpRequest();
           xmlhttp.onreadystatechange = processData;
           xmlhttp.open("GET", url, true);
           xmlhttp.send()
       }

       function processData() {
          if(xmlhttp.readyState==4 && xmlhttp.status== 200) {
	         var movieJSON = xmlhttp.responseText;
	         movieJSON = JSON.parse(movieJSON);
	         var title= movieJSON.Title;
	         var year = movieJSON.Year;
	         var actors = movieJSON.Actors;
	         var plot = movieJSON.Plot;
	         var rating = movieJSON.Rated;
	         var posterURL = movieJSON.Poster;
	                        
	         document.getElementById('poster').src = posterURL;
	         document.getElementById('movieTitle').innerHTML = "<h1>" + title + " ["+ rating +"]</h1>";
	         document.getElementById('movieYear').innerHTML += "<h3>" + year + "</h3>";
	         document.getElementById('movieActors').innerHTML = "<p>" + actors + "</p>";
	         document.getElementById('moviePlot').innerHTML += "<p>" + plot + "</p>";    		
 		 	}
 		}
