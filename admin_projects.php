<?php
session_start();
// Check admin authentication
if (!isset($_SESSION['is_admin']) || !$_SESSION['is_admin']) {
    // Instead of header redirect, output JavaScript for client-side redirect
    echo '<script>window.location.href = "login.php";</script>';
    exit();
}

require_once 'db.php'; // Use your DB connection file
$message = '';

// Handle pay recommendation submission
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['project_id'])) {
    $project_id = intval($_POST['project_id']);
    $pay_min = floatval($_POST['pay_min']);
    $pay_max = floatval($_POST['pay_max']);
    $stmt = $pdo->prepare('UPDATE projects SET pay_min = ?, pay_max = ?, status = "reviewed" WHERE id = ?');
    if ($stmt->execute([$pay_min, $pay_max, $project_id])) {
        $message = 'Pay range updated.';
    } else {
        $message = 'Error updating pay range.';
    }
}

// Fetch all projects
$stmt = $pdo->query('SELECT * FROM projects ORDER BY created_at DESC');
$projects = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin - Project Submissions</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>Submitted Projects</h2>
    <?php if ($message): ?>
        <p><?php echo htmlspecialchars($message); ?></p>
    <?php endif; ?>
    <table border="1" cellpadding="8">
        <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Pay Range</th>
            <th>Action</th>
        </tr>
        <?php foreach ($projects as $project): ?>
        <tr>
            <td><?php echo $project['id']; ?></td>
            <td><?php echo $project['user_id']; ?></td>
            <td><?php echo htmlspecialchars($project['title']); ?></td>
            <td><?php echo nl2br(htmlspecialchars($project['description'])); ?></td>
            <td><?php echo $project['status']; ?></td>
            <td>
                <?php if ($project['pay_min'] !== null && $project['pay_max'] !== null): ?>
                    $<?php echo number_format($project['pay_min'], 2); ?> - $<?php echo number_format($project['pay_max'], 2); ?>
                <?php else: ?>
                    Not set
                <?php endif; ?>
            </td>
            <td>
                <?php if ($project['status'] === 'pending'): ?>
                <form method="post" action="">
                    <input type="hidden" name="project_id" value="<?php echo $project['id']; ?>">
                    <input type="number" name="pay_min" placeholder="Min" step="0.01" required>
                    <input type="number" name="pay_max" placeholder="Max" step="0.01" required>
                    <button type="submit">Recommend Pay</button>
                </form>
                <?php else: ?>
                    <em>Reviewed</em>
                <?php endif; ?>
            </td>
        </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>
