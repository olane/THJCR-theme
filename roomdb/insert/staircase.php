<!--
  This page requires javascript to function. Site, stair and room information are loaded as selected via ajax calls through javascript.
 -->
<html>
    <head>
        <meta name="robots" content="noindex">
        <title>Room Database | Add/Modify Staircase</title>
        <link rel="stylesheet" href="style.css" />
        <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
        <script src="staircase.js"></script>
        <script src="pictures.js"></script>
    </head>
    <body>
        <form enctype="multipart/form-data" action="insertstaircase.php" method="post">
            <fieldset>
               <legend>Staircase info</legend>

               <p>
                  <label for="site-dropdown">
                    <span>Site: </span>
                    <select id="site-dropdown" name="site-id" >
                    </select>
                  </label>
                </p>

                <p>
                  <label for="stair-dropdown">
                    <span>Staircase (if already in database): </span>
                    <select id="stair-dropdown" name="stair-id" disabled="disabled">
                    </select>
                  </label>
                </p>
                
                <p>
                  <label for="newentry">
                    <span>Check if staircase is not already in database: </span>
                     <input type="checkbox" id="newentry" name="newentry" value="newentry"  />
                  </label>
                </p>

                <p>
                  <label for="stairname">
                    <span>Staircase Name (if not already in database) : </span>
                    <input type="text" id="stairname" name="stairname" disabled="disabled" />
                  </label>
                </p>

            </fieldset>

            <fieldset id="images-fieldset">
                <legend>Images</legend>
                <a href="" id="add-image-field-button">Add image field</a>
            </fieldset>

            <input type="submit" value="Submit" />
        </form>
    </body>
</html>