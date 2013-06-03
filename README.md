# THJCR Wordpress Theme #

This is the WordPress theme for the Trinity Hall JCR website. 

The theme itself is inside the `/thjcr/` directory. This folder goes into the `/wp-content/themes/` folder to use in a default WordPress install.

# RoomDB #

The `/roomdb/` folder contains the javascript to power the slick room database pages, and should be in /roomdb/ on the server. The data is pulled from the php API endpoints given by the php files in the same folder. Usage of these endpoints is shown in comments in the respective files.

Note that the endpoints won't work without inputting the correct username/password into the `pw.php` file, which are omitted here for obvious reasons. The pw.php file shouldn't be world readable on the server, for similarly obvious reasons.

The pictures for the room database should be under `/roomdb/pics/` or they won't display (these base URLs can be changed in the javascript files).

Note that this repository has no authentication inbuilt - this can be implemented by protecting the endpoints and display page, and will depend on the authentication required.

-------------------------------
## Author ##

Oli Lane

Trinity Hall JCR Webmaster 2013
