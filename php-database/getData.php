<?php
    include_once "phpconnect.php";
    error_reporting(error_reporting() & ~E_NOTICE);

    $op = $_GET['op'];
    switch($op){
        case '':normal(); break;
        default:normal(); break;
        case 'createUser':createUser(); break;
        case 'getUser':searchUserByUsername();break;
        case 'getDataUser':getDataUserByUsername();break;
        case 'createAreaParkir':createAreaParkir(); break;
        case 'getAreaParkir':getAreaParkir();break;
        case 'createKendaraan':createKendaraan();break;
        case 'getKendaraan':getKendaraan();break;
        case 'createRiwayatParkir':createRiwayatParkir();break;
        case 'getRiwayatParkir':getRiwayatParkir();break;
        case 'getPembayaran':getPembayaran();break;
        case 'getAllRiwayatParkir':getAllRiwayatParkir();break;
        case 'postPeta':postPeta();break;
        case 'getPeta':getPeta();break;
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

        if($r1 = mysqli_fetch_assoc($q1)){
            $hasil = true;
            // echo "Kamu berhasil Login!";
        } else {
            $hasil = false;
            // echo "Username dan Password yang dimasukkan SALAH!";
        }
        $data['data']['result'] = $hasil;
        echo json_encode($data);
    }
    
    function getDataUserByUsername(){
        global $conn;
        $username = $_GET['username'];
        $password = $_GET['password'];

        $sql1 = "SELECT * FROM Pengguna WHERE username = '$username' AND password = '$password'";
        $q1 = mysqli_query($conn, $sql1);
        $hasil = array();
        while($r1 = mysqli_fetch_assoc($q1)){
            $hasil[] = [
                'id_number' => $r1['id_number'],
                'username' => $r1['username'],
                'password' => $r1['password'],
                'civitas_type' => $r1['civitas_type'],
            ];
        } 
        $data['data']['result'] = $hasil;
        echo json_encode($data);
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

    function createAreaParkir(){
        global $conn;
        
        // $id_parking_lot = $_POST['id_parking_lot'];
        $parking_area = $_POST['parking_area'];
        $max_park_slot = $_POST['max_park_slot'];
        $current_park_slot = $_POST['current_park_slot'];
        $predict_park_slot = $_POST['predict_park_slot'];
        
        $result = "Data Informasi Area Parkir gagal ditambahkan!";
        if($parking_area and $max_park_slot){
            $sql2 = "INSERT INTO AreaParkir(parking_area,max_park_slot,current_park_slot,predict_park_slot) VALUES ('$parking_area','$max_park_slot','$current_park_slot','$predict_park_slot')";
            $q2 = mysqli_query($conn, $sql2);
            if($q2){
                $result = "Data Informasi Area Parkir berhasil ditambahkan!";
            }
        }
        $data['data']['result'] = $result;
        echo json_encode($data);
    }
    
    function getAreaParkir(){
        global $conn;
        
        $parking_area = $_GET['parking_area'];
        $sql1 = "SELECT * FROM AreaParkir WHERE parking_area = '$parking_area' ORDER BY id_parking_lot DESC";
        $q1 = mysqli_query($conn,$sql1);
        $hasil = array();
        while($r1 = mysqli_fetch_assoc($q1)){
            $hasil[] = [
                'id_parking_lot' => $r1['id_parking_lot'],
                'parking_area' => $r1['parking_area'],
                'max_park_slot' => $r1['max_park_slot'],
                'current_park_slot' => $r1['current_park_slot'],
                'predict_park_slot' => $r1['predict_park_slot'],
            ];
        }
        $data['data']['result'] = $hasil;
        echo json_encode($data);
    }
    
    function createKendaraan(){
        global $conn;
        
        $vehicle_number = $_POST['vehicle_number'];
        $vehicle_type = $_POST['vehicle_type'];
        $vehicle_location_status = $_POST['vehicle_location_status'];
        $id_number = $_POST['id_number'];
        
        $result = "Data Kendaraan gagal ditambahkan, mohon diperiksa apakah NIM atau NIP belum terdaftar?";
        if($vehicle_number and $vehicle_type and $vehicle_location_status and $id_number){
            $sql1 = "INSERT INTO Kendaraan(vehicle_number,vehicle_type,vehicle_location_status,id_number) VALUES ('$vehicle_number','$vehicle_type','$vehicle_location_status','$id_number')";
            $q1 = mysqli_query($conn, $sql1);
            if($q1){
                $result = "Data Kendaraan berhasil ditambahkan!";
            }
        }
        $data['data']['result'] = $result;
        echo json_encode($data);
    }
    
    function getKendaraan(){
        global $conn;
        
        $id_number = $_GET['id_number'];
        $sql1 = "SELECT * FROM Kendaraan WHERE id_number = '$id_number'";
        $q1 = mysqli_query($conn,$sql1);
        $hasil = array();
        while($r1 = mysqli_fetch_assoc($q1)){
            $hasil[] = [
                'vehicle_number' => $r1['vehicle_number'],
                'vehicle_type' => $r1['vehicle_type'],
                'vehicle_location_status' => $r1['vehicle_location_status'],
                'vehicle_enter_time' => $r1['vehicle_enter_time'],
                'id_number' => $r1['id_number'],
            ];
        }
        $data['data']['result'] = $hasil;
        echo json_encode($data);
    }
    
    function createRiwayatParkir(){
        global $conn;
        
        $enter_time = $_POST['enter_time'];
        $leave_time = $_POST['leave_time'];
        $park_slot_location = $_POST['park_slot_location'];
        $parking_lot = $_POST['parking_lot'];
        $fee_bill = $_POST['fee_bill'];
        $vehicle_number = $_POST['vehicle_number'];
        
        $result = "Data Riwayat Parkir gagal ditambahkan, mohon diperiksa apakah Nomor Kendaraan tidak terdaftar?";
        if($vehicle_number and $parking_lot){
            $sql1 = "INSERT INTO RiwayatParkir(enter_time,leave_time,park_slot_location,fee_bill,parking_lot,vehicle_number) VALUES ('$enter_time','$leave_time','$park_slot_location','$fee_bill','$parking_lot','$vehicle_number')";
            $q1 = mysqli_query($conn, $sql1);
            if($q1){
                $result = "Data Riwayat Parkir berhasil ditambahkan!";
            }
        }
        $data['data']['result'] = $result;
        echo json_encode($data);
    }
    
    function getRiwayatParkir(){
        global $conn;
        
        $vehicle_number = $_GET['vehicle_number'];
        $sql1 = "SELECT * FROM RiwayatParkir WHERE vehicle_number = '$vehicle_number'";
        $q1 = mysqli_query($conn,$sql1);
        $hasil = array();
        while($r1 = mysqli_fetch_assoc($q1)){
            $hasil[] = [
                'enter_time' => $r1['enter_time'],
                'leave_time' => $r1['leave_time'],
                'park_slot_location' => $r1['park_slot_location'],
                'parking_lot' => $r1['parking_lot'],
                'fee_bill' => $r1['fee_bill'],
                'vehicle_number' => $r1['vehicle_number'],
            ];
        }
        $data['data']['result'] = $hasil;
        echo json_encode($data);
    }
    
    function getPembayaran(){
        global $conn;
        
        $vehicle_number = $_GET['vehicle_number'];
        $sql1 = "SELECT * FROM Payment WHERE vehicle_number = '$vehicle_number'";
        $q1 = mysqli_query($conn,$sql1);
        $hasil = array();
        while($r1 = mysqli_fetch_assoc($q1)){
            $hasil[] = [
                'vehicle_number' => $r1['vehicle_number'],
                'bill' => $r1['bill'],
                'status_payment' => $r1['status_payment'],
                'payment_time' => $r1['payment_time'],
            ];
        }
        $data['data']['result'] = $hasil;
        echo json_encode($data);
    }
    
    function getAllRiwayatParkir(){
        global $conn;
        
        $sql1 = "SELECT * FROM RiwayatParkir";
        $q1 = mysqli_query($conn,$sql1);
        $hasil = array();
        
        if($q1->num_rows > 0) {
            while($r1 = $q1->fetch_assoc()){
                $hasil[] = [
                    'id_park_history' => $r1['id_park_history'],
                    'enter_time' => $r1['enter_time'],
                    'leave_time' => $r1['leave_time'],
                    'vehicle_number' => $r1['vehicle_number'],
                    'parking_lot' => $r1['parking_lot'],
                    'fee_bill' => $r1['fee_bill'],
                    'park_slot_location' => $r1['park_slot_location'],
                ];
            }
        }
        echo json_encode($hasil);
    }

    function postPeta(){
        global $conn;
        
        if (isset($_FILES['file_map']) && $_FILES['file_map']['error'] === UPLOAD_ERR_OK &&
            isset($_FILES['file_text']) && $_FILES['file_text']['error'] === UPLOAD_ERR_OK) {
                
            // Mengambil informasi gambar_map
            $namaGambar = $_FILES['gambar_map']['name'];
            $tmpGambar = $_FILES['gambar_map']['tmp_name'];
            $destination_path = 'image_map/' . $namaGambar;
            move_uploaded_file($tmpGambar, $destination_path);
                    
            // Mendapatkan isi file yang diupload
            $file_map_name = $_POST['file_map_name'];
            $file_text_name = $_POST['file_text_name'];
            $file_map_content = file_get_contents($_FILES['file_map']['tmp_name']);
            $file_text_content = file_get_contents($_FILES['file_text']['tmp_name']);
                
            $lokasi_slot = $_POST['lokasi_slot'];
            $map_type = $_POST['map_type'];
            $filled_slot = $_POST['filled_slot'];
                    
            // Menyimpan file ke database
            $sql = 'INSERT INTO FilePeta (lokasi_slot, file_map, file_text, map_type, gambar_map, filled_slot) VALUES (?, ?, ?, ?, ?, ?)';
            $statement = $conn->prepare($sql);
            $statement->bind_param('ssssss', $lokasi_slot, $file_map_content, $file_text_content, $map_type, $namaGambar, $filled_slot);
            $statement->execute();
                    
            // Mendapatkan ID dari data yang baru saja dimasukkan
            $map_id = $conn->insert_id;
                
            // Mengirim respons berhasil beserta ID file yang baru saja dimasukkan
            echo json_encode(['success' => true, 'map_id' => $map_id]);
            // $statement = null
        } else {
            // Mengirim respons gagal
            echo json_encode(['success' => false]);
        }
    }


    function getPeta(){
        global $conn;
        $map_type = $_GET['map_type'];
        $filled_slot = $_GET['filled_slot'];
        
        $sql = "SELECT lokasi_slot, file_map, file_text, gambar_map FROM FilePeta WHERE map_type = ? AND filled_slot = ? ORDER BY map_id ASC LIMIT 1";
        $statement = $conn->prepare($sql);
        $statement->bind_param('ss', $map_type, $filled_slot);
        $statement->execute();
        $statement->bind_result($lokasi_slot, $file_map, $file_text, $gambar_map);
        $statement->fetch();
        
        // Menyimpan data dalam array
        $response = array(
            'lokasi_slot' => $lokasi_slot, 
            'file_map' => $file_map,
            'file_text'=> $file_text, 
            'gambar_map' => base64_encode(file_get_contents('image_map/' . $gambar_map)) 
        );
        
        // Mengirimkan data sebagai JSON
        header('Content-Type: application/json');
        echo json_encode($response);
    }

    mysqli_close($conn);
?>