P5-1: Neighborhood Map Project
==============================
For finding cool places in my neighborhood !

How to run the application
------------------------------------
* Download GitHub repository from <https://github.com/srbrenton/myhood/>.
* Open the index.html file with your browser.
* All info's are shown using foursquare.com third-party API.
* Click on a list element or icon on the google map to open an information window for the location.
* You can add a location as favorite. Favorites are saved in the localeStorage of your browser.
* The search bar function is for filtering location by letters / name / autocomplete.
* Clicking on the logo will delete the localStorage data, refresh the page and eventually locations.
* Refreshing the page without clicking on the logo will render the same 7 places.

Build tools
------------------------------------
* Grunt watch plugin is used to automatically minify CSS and JS files saved in the dist folder.
* Images have been optimized and resized using an online tool (kraken.io) and Photoshop, not with grunt, as I get better results with the two.
* style.css and google font code merged and inlined in index.html from dist folder.

Library's and plugin's
------------------------------------
* Jquery 2.2.1
* knockout JS 3.4.0
* Featherlight plugin for images lightbox
