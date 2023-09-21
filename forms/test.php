<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "Received POST data: " . json_encode($_POST);
} else {
    echo "No data received. This is a GET request.";
}
?>