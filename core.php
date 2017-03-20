<?php
   	$m = new MongoClient();
   	$db = $m->Darwin;
   	if($_POST){
   		if($_POST['type']=='name'){
   			$get_val = new MongoRegex("/".$_POST['value']."/");
   			$collection = $db->user;
			$cursor = $collection->find(array('$or' => 
											array(
												array('first_name' => $get_val),
												array('last_name' => $get_val)
											)
										)
									);
   			$temp = array();
   			foreach ($cursor as $document) {
   				$name = $document['first_name'].' '.$document['last_name'];
   				$name = array('label' => $document['first_name'].' '.$document['last_name'],'value'=>$document['emp_id']);
   				array_push($temp, $name);
   			}		
   			echo json_encode($temp);
   			exit();
   		}
   }
?>
