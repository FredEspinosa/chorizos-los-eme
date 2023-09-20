<?php
class customer{
    // object properties
    public $firstName;
    public $lastName;
    public $email;

    // create product
function create():bool{
  
    try{
        
    // sanitize
    $this->firstName=htmlspecialchars(strip_tags($this->firstName));
    $this->lastName=htmlspecialchars(strip_tags($this->lastName));
    $this->email=htmlspecialchars(strip_tags($this->email));
    
    $JsonString = '{
  "customer": {
    "first_name": "%%FNAME%%",
    "last_name": "%%LNAME%%",
    "email": "%%EMAIL%%",
    "verified_email": true,
     "accepts_marketing": true,
    "marketing_opt_in_level": "confirmed_opt_in"
  }
}';
    
    $JsonString = str_replace("%%FNAME%%",$this->firstName,$JsonString);
    $JsonString = str_replace("%%LNAME%%",$this->lastName,$JsonString);
    $JsonString = str_replace("%%EMAIL%%",$this->email,$JsonString);
  
    include "Properties.php";
    $property = new Properties();
    
    $curl = curl_init();

  curl_setopt_array($curl, array(
  CURLOPT_URL => $property->GetProperty("ShopifyURL"),
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>$JsonString,
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

$data = json_decode($response);

if (!empty($data->errors)){
    return false;
}
else{
    return true;
}


    } catch (Exception $ex) {

    }
}  }  