<?php
	/*
		USAGE:
			stairs.php?type=list&siteID=xxx
				Will list all of the staircases at the site with siteID xxx
			stairs.php?type=single&stairID=xxx
				Will list the staircase with the stairID xxx
	*/

	require('pw.php');

	if($_GET['type'] == "list"){

		//return a list of all staircases at a certain site
		try {
			$conn = new PDO('mysql:host=localhost;dbname=thjcr', $username, $password);
			$stmt = $conn->prepare(
				'SELECT * FROM roomdatabase_staircases 
				LEFT JOIN roomdatabase_sites on roomdatabase_staircases.siteID = roomdatabase_sites.siteID
				WHERE roomdatabase_staircases.siteID = :siteID');
			$stmt->execute(array(':siteID' => $_GET['siteID']));

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
				'SELECT * FROM roomdatabase_staircases 
				LEFT JOIN roomdatabase_sites on roomdatabase_staircases.siteID = roomdatabase_sites.siteID
				WHERE stairID = :stairID'
			);
			$stmt->execute(array(':stairID' => $_GET['stairID']));

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