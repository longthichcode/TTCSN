<?php

function checkuser($user,$pass){
    $conn=connectdb();
    $stmt=$conn->prepare("SELECT * FROM tbl_user WHERE user='".$user."' AND pass='".$pass."'");
    $stmt->execute();
    $result=$stmt->setFetchMode(PDO::FETCH_ASSOC);
    $kq=$stmt->fetchAll();
    if(count($kq)>0) return $kq[0]['role'];
    else return 10;
}
function checkusername($user){
    $conn=connectdb();
    $stmt=$conn->prepare("SELECT * FROM tbl_user WHERE user='".$user."'");
    $stmt->execute();
    $kq=$stmt->fetchAll();
    if(count($kq)>0) return $kq[0]['role'];
    else return 10;
}
function checkemail($email){
    $conn=connectdb();
    $stmt=$conn->prepare("SELECT * FROM tbl_user WHERE email='".$email."'");
    $stmt->execute();
    $kq=$stmt->fetchAll();
    if(count($kq)>0) return $kq[0]['role'];
    else return 10;
}
function adduser($user,$email,$pass){
    $conn=connectdb();
    $sql="INSERT INTO tbl_user (user,email,pass) VALUES ('".$user."','".$email."','".$pass."')";
    $conn->exec($sql);
}
?>