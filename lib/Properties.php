<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Properties
 *
 * @author Max
 */
class Properties {
    //put your code here
    function GetProperty($propertyName) {
        
        try{
               $propertyVale = parse_ini_file("properties.ini");
    return isset($propertyVale[$propertyName]) ? $propertyVale[$propertyName] : null ;
        } catch (Exception $ex) {
return null;
        }
 
}
}
