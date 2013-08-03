<!--
  This page requires javascript to function. Site, stair and room information are loaded as selected via ajax calls through javascript.
 -->
<html>
    <head>
        <meta name="robots" content="noindex">
        <title>Room Database | Add/Modify Room</title>
        <link rel="stylesheet" href="style.css" />
        <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
        <script src="room.js"></script>
        <script src="pictures.js"></script>
    </head>
    <body>
        <form enctype="multipart/form-data" action="insertroom.php" method="post">
            <fieldset>
                <legend>Room location and name</legend>

                <p>
                  <label for="site-dropdown">
                    <span>Site: </span>
                    <select id="site-dropdown" name="site-id" >
                    </select>
                  </label>
                </p>

                <p>
                  <label for="stair-dropdown">
                    <span>Staircase: </span>
                    <select id="stair-dropdown" name="stair-id" disabled="disabled">
                    </select>
                  </label>
                </p>

                <p>
                  <label for="room-dropdown">
                    <span>Room Name (if already in database): </span>
                    <select id="room-dropdown" name="room_id" disabled="disabled">
                    </select>

                    <a href="" id="view-link" target="_blank">(view room)</a>
                  </label>
                </p>
                
                <p>
                  <label for="newentry">
                    <span>Check if room is not already in database: </span>
                     <input type="checkbox" id="newentry" name="newentry" value="newentry"  />
                  </label>
                </p>

                <p>
                  <label for="roomname">
                    <span>Room Name (if not already in database) : </span>
                    <input type="text" id="roomname" name="roomname" disabled="disabled" />
                  </label>
                </p>


            </fieldset>

            <fieldset>
                <legend>Room details</legend>

                <p>
                  <label for="roomsize">
                    <span>Size: </span>
                    <textarea id="roomsize" name="roomsize" ></textarea>
                  </label>
                </p>

                <p>
                  <label for="furniture">
                    <span>Furniture: </span>
                    <textarea id="furniture" name="furniture" ></textarea>
                  </label>
                </p>

                <p>
                  <label for="kitchen">
                    <span>Kitchen: </span>
                    <textarea id="kitchen" name="kitchen" ></textarea>
                  </label>
                </p>

                <p>
                  <label for="kitchenshare">
                    <span>Kitchen shared between: </span>
                    <textarea id="kitchenshare" name="kitchenshare" ></textarea>
                  </label>
                </p>

                <p>
                  <label for="eatingspace">
                    <span>Eating space: </span>
                    <textarea id="eatingspace" name="eatingspace" ></textarea>
                  </label>
                </p>

                <p>
                  <label for="view">
                    <span>Room view: </span>
                    <textarea id="view" name="view" ></textarea>
                  </label>
                </p>

                <p>
                  <label for="showershare">
                    <span>Shower shared between: </span>
                    <textarea id="showershare" name="showershare" ></textarea>
                  </label>
                </p>

                <p>
                  <label for="showercomment">
                    <span>Shower comment: </span>
                    <textarea id="showercomment" name="showercomment" ></textarea>
                  </label>
                </p>

                <p>
                  <label for="heating">
                    <span>Heating: </span>
                    <textarea id="heating" name="heating" ></textarea>
                  </label>
                </p>

                <p>
                  <label for="sunlight">
                    <span>Sunlight: </span>
                    <textarea id="sunlight" name="sunlight" ></textarea>
                  </label>
                </p>

                <p>
                  <label for="noise">
                    <span>Noise: </span>
                    <textarea id="noise" name="noise" ></textarea>
                  </label>
                </p>

                <p>
                  <label for="decoration">
                    <span>Decoration: </span>
                    <textarea id="decoration" name="decoration" ></textarea>
                  </label>
                </p>

                <p>
                  <label for="laundry">
                    <span>Laundry: </span>
                    <textarea id="laundry" name="laundry" ></textarea>
                  </label>
                </p>

                <p>
                  <label for="othercomments">
                    <span>Other comments: </span>
                    <textarea id="othercomments" name="othercomments" ></textarea>
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