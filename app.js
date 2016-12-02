$(document).ready(function() {

		//Give us an alert to ensure that everything is set up
		alert("HTML loaded!");

		$("#search-button").on("click", function() {
			alert("Button clicked!");
			//Call the performSearch function with the BASE url endpoint
			//Get the form value via the .val() jQuery funcation (Loook up the documatation on jquery.com)
           
         	var userSearch = $("#search-query").val();

			performSearch("https://api.spotify.com/v1/search", userSearch);

           });
	});
