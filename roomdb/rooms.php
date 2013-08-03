<?php
	/*
		USAGE:
			rooms.php?type=list&stairID=xxx
				Will list all of the rooms on the staircase with stairID xxx
			rooms.php?type=single&roomID=xxx
				Will list the room with the roomID xxx
	*/

	require('pw.php');

	if($_GET['type'] == "list"){

		//return a list of all staircases at a certain site
		try {
			$conn = new PDO('mysql:host=localhost;dbname=thjcr', $username, $password);
			$stmt = $conn->prepare(
				'SELECT * FROM roomdatabase_rooms
				LEFT JOIN roomdatabase_staircases on roomdatabase_rooms.stairID = roomdatabase_staircases.stairID
				LEFT JOIN roomdatabase_sites on roomdatabase_staircases.siteID = roomdatabase_sites.siteID
				WHERE roomdatabase_rooms.stairID = :stairID'
			);
			$stmt->execute(array(':stairID' => $_GET['stairID']));

			$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

			if ( count($result) ) { 

				echo json_encode($result); 

			} else {
				echo "No rows returned.";
			}
		} catch(PDOException $e) {
			echo 'ERROR: ' . $e->getMessage();
		}

	}

	else if($_GET['type'] == "single"){
		//return the details of a single staircase

		try {
			$conn = new PDO('mysql:host=localhost;dbname=thjcr', $username, $password);
			$stmt = $conn->prepare(
				'SELECT * FROM roomdatabase_rooms
				LEFT JOIN roomdatabase_staircases on roomdatabase_rooms.stairID = roomdatabase_staircases.stairID
				LEFT JOIN roomdatabase_sites on roomdatabase_staircases.siteID = roomdatabase_sites.siteID
				WHERE roomID = :roomID'
			);
			$stmt->execute(array(':roomID' => $_GET['roomID']));

			$result = $stmt->fetch(PDO::FETCH_ASSOC);

			if ( count($result) ) { 

				echo json_encode($result); 

			} else {
				echo "No rows returned.";
			}
		} catch(PDOException $e) {
			echo 'ERROR: ' . $e->getMessage();
		}
	}

?>