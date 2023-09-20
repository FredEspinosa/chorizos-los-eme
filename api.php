<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

try{

// get customer class
include "./lib/customer.php";

$NewsletterSuscription = new customer();

// get posted data
$data = json_decode(file_get_contents('php://input'), true);

if(!empty($data["firstName"]) && !empty($data["lastName"]) && !empty($data["email"]) )
{
  
    // set product property values
    $NewsletterSuscription->firstName = $data["firstName"];
    $NewsletterSuscription->lastName = $data["lastName"];
    $NewsletterSuscription->email = $data["email"];
  
   // create the product
   if($NewsletterSuscription->create()){
  
    // set response code - 201 created
    http_response_code(201);

    // tell the user
    //echo json_encode(array("message" => "Product was created."));
}

// if unable to create the product, tell the user
else{

    // set response code - 503 service unavailable
    http_response_code(503);

    // tell the user
    echo json_encode(array("message" => "Unable to create subscription."));
}
}
  
// tell the user data is incomplete
else{
  
    // set response code - 400 bad request
    http_response_code(400);
  
    // tell the user
    echo json_encode(array("message" => "Unable to create subscription. Data is incomplete."));
}

} catch (Exception $ex) {
 // set response code - 503 service unavailable
    http_response_code(503);
    // tell the user
    echo json_encode(array("message" => $ex));
}
