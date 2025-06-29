<?php
// admin.php -- View all contact form submissions
session_start();

// Simple password protection
$admin_password = 'changeme'; // Change this password!
if (!isset($_SESSION['logged_in'])) {
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_POST['password'] === $admin_password) {
        $_SESSION['logged_in'] = true;
        echo '<script>window.location.href = "admin.php";</script>';
        exit();
    } else {
        echo '<form method="POST" style="margin:40px auto;max-width:300px;text-align:center;">
            <h2>Admin Login</h2>
            <input type="password" name="password" placeholder="Password" style="padding:10px;width:100%;margin-bottom:10px;" required><br>
            <button type="submit" style="padding:10px 20px;">Login</button>
        </form>';
        exit;
    }
}

// DB config
$host = 'localhost';
$db = 'bmm_db';
$user = 'root';
$pass = '';
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die('Database connection failed.');
}
$result = $conn->query('SELECT * FROM contact_messages ORDER BY submitted_at DESC');
?>
<?php include 'header.php'; ?>
<style>
    body { background: #f6f8fb; }
    table { width: 100%; border-collapse: collapse; background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
    th, td { padding: 12px 8px; border: 1px solid #e0e0e0; }
    th { background: #1a2238; color: #fff; }
    tr:nth-child(even) { background: #f9f9f9; }
    .container { max-width: 900px; margin: 40px auto; }
    h1 { text-align: center; }
    .logout { float: right; margin-top: -40px; }
</style>
<div class="container">
    <form method="post" action="?logout=1" class="logout"><button name="logout">Logout</button></form>
    <h1>Contact Messages</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Submitted At</th>
        </tr>
        <?php while($row = $result->fetch_assoc()): ?>
        <tr>
            <td><?= htmlspecialchars($row['id']) ?></td>
            <td><?= htmlspecialchars($row['name']) ?></td>
            <td><?= htmlspecialchars($row['email']) ?></td>
            <td><?= nl2br(htmlspecialchars($row['message'])) ?></td>
            <td><?= htmlspecialchars($row['submitted_at']) ?></td>
        </tr>
        <?php endwhile; ?>
    </table>
</div>
<?php
if (isset($_POST['logout']) || isset($_GET['logout'])) {
    session_destroy();
    header('Location: admin.php');
    exit;
}
$conn->close();
?>
<?php include 'footer.php'; ?>
