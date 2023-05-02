<?php
    include_once "phpconnect.php";
    error_reporting(error_reporting() & ~E_NOTICE);

    $op = $_GET['op'];
    switch($op){
        case '':normal(); break;
        default:normal(); break;
        case 'createUser':createUser(); break;
        case 'getUser':searchUserByUsername();break;
    }

    function normal(){
        global $conn;
        $sql1 = "SELECT * FROM KeluarKawasan";
        $q1 = mysqli_query($conn, $sql1);
        while ($r1 = mysqli_fetch_array($q1)){
            $hasil[] = array(
                'id' => $r1['id'],
                'bill' => $r1['bill'],
                'status_payment' => $r1['status_payment'],
                'slot' => $r1['slot']
            );
        }
        $data['data']['result'] = $hasil;
        echo json_encode($data);
    }

    function searchUserByUsername(){
        global $conn;
        $username = $_GET['username'];
        $password = $_GET['password'];

        $sql1 = "SELECT * FROM Pengguna WHERE username = '$username' AND password = '$password'";
        $q1 = mysqli_query($conn, $sql1);

        if ($r1 = mysqli_fetch_assoc($q1)){
            $hasil[] = array(
                'id_number' => $r1['id_number'],
                'username' => $r1['username'],
                'password' => $r1['password'],
                'civitas_type' => $r1['civitas_type']
            );
            echo "Kamu berhasil Login!";
        } else {
            echo "Username dan Password yang dimasukkan SALAH!";
        }
    }

    function createUser(){
        global $conn;
        $id_number = $_POST['id_number'];
        $username = $_POST['username'];
        $password = $_POST['password'];
        $civitas_type = $_POST['civitas_type'];
        $result = "Registrasi gagal dilakukan!";
        if($id_number and $username and $password){
            $sql1 = "INSERT INTO Pengguna(id_number,username,password,civitas_type) VALUES ('$id_number','$username','$password','$civitas_type')";
            $q1 = mysqli_query($conn, $sql1);
            if($q1){
                $result = "Registrasi berhasil dilakukan!";
            }
        }
        $data['data']['result'] = $result;
        echo json_encode($data);
    }

    mysqli_close($conn);
?>