<?php
	/*
		USAGE:
			pics.php?roomID=xxx
				Will list all of the pictures for the room with roomID xxx
			rooms.php?stairID=xxx
				Will list all of the pictures for the staircase with stairID xxx
	*/

	require('pw.php');

	if(isset($_GET['roomID'])){

		//return a list of all staircases at a certain site
		try {
			$conn = new PDO('mysql:host=localhost;dbname=thjcr', $username, $password);
			$stmt = $conn->prepare('SELECT * FROM roomdatabase_pics WHERE roomID = :roomID');
			$stmt->execute(array(':roomID' => $_GET['roomID']));

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

	else if(isset($_GET['stairID'])){

		//return a list of all staircases at a certain site
		try {
			$conn = new PDO('mysql:host=localhost;dbname=thjcr', $username, $password);
			$stmt = $conn->prepare('SELECT * FROM roomdatabase_pics WHERE stairID = :stairID');
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

?>