<?php
	//lists a single site's info if ?siteID is set to its ID, otherwise lists all sites

	require('pw.php');

	if(isset($_GET['siteID'])){
		try {
			$conn = new PDO('mysql:host=localhost;dbname=thjcr', $username, $password);
			$stmt = $conn->prepare('SELECT * FROM roomdatabase_sites WHERE siteID = :siteID');
			$stmt->execute(array(':siteID' => $_GET['siteID']));

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
	else{
		try {
			$conn = new PDO('mysql:host=localhost;dbname=thjcr', $username, $password);
			$stmt = $conn->prepare('SELECT * FROM roomdatabase_sites');
			$stmt->execute();

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