<?php
require_once '../inc/initDb.php';
$company_id = $_POST['company_id'];
$url = $_POST['url'];
foreach ($_POST['rest_name'] as $id)
{

    DB::insert('company_rest', array(
        "company_id" => $company_id,
        "rest_id" => $id,
    ));
}
header("location: $url");
