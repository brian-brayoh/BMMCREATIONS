<?php
// contact_submit.php -- Handles contact form submissions
header('Content-Type: application/json');

// DB config (adjust as needed)
$host = 'localhost';
$db = 'bmm_db'; // Change to your DB name
$user = 'root'; // Default XAMPP user
$pass = '';

// Connect to MySQL
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database connection failed.']);
    exit;
}

// Get POST data
$name = $conn->real_escape_string($_POST['name'] ?? '');
$email = $conn->real_escape_string($_POST['email'] ?? '');
$message = $conn->real_escape_string($_POST['message'] ?? '');

// Basic validation
if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit;
}

// Insert into DB
$sql = "INSERT INTO contact_messages (name, email, message, submitted_at) VALUES ('$name', '$email', '$message', NOW())";
if ($conn->query($sql)) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to save message.']);
}
$conn->close();
?>
