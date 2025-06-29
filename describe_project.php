<?php

$message = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    require_once 'db.php'; // Use your DB connection file
    $title = trim($_POST['title']);
    $description = trim($_POST['description']);
    $user_id = 0; // or NULL if preferred
    
    if ($title && $description) {
        $stmt = $pdo->prepare('INSERT INTO projects (user_id, title, description) VALUES (?, ?, ?)');
        if ($stmt->execute([$user_id, $title, $description])) {
            $message = 'Project submitted successfully!';
        } else {
            $message = 'Error submitting project.';
        }
    } else {
        $message = 'Please fill in all fields.';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Describe Your Project</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:700,400&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Montserrat', Arial, sans-serif; }
        .project-card {
            max-width: 540px;
            margin: 40px auto;
            border-radius: 18px;
            box-shadow: 0 6px 32px rgba(30,30,30,0.09);
            border: none;
        }
        .project-header {
            background: linear-gradient(120deg, #ff00b7 60%, #e94560 100%);
            color: #fff;
            border-radius: 18px 18px 0 0;
            padding: 32px 24px 18px 24px;
        }
        .btn-brand {
            background: #ff00b7;
            color: #fff;
            border: none;
        }
        .btn-brand:hover {
            background: #3211b9;
            color: #fff;
        }
        .form-label {
            color: #3211b9;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card project-card">
            <div class="project-header text-center">
                <h2 class="mb-1">Describe Your Project</h2>
                <p class="mb-0" style="font-size:1.08rem;">Let us know what you need and we'll connect you with the right solution!</p>
            </div>
            <div class="card-body p-4">
                <?php if ($message): ?>
                    <div class="alert <?php echo ($message === 'Project submitted successfully!') ? 'alert-success' : 'alert-danger'; ?>" role="alert">
                        <?php echo htmlspecialchars($message); ?>
                    </div>
                <?php endif; ?>
                <form method="post" action="" autocomplete="off">
                    <div class="mb-3">
                        <label for="title" class="form-label">Project Title</label>
                        <input type="text" class="form-control" id="title" name="title" required maxlength="255" placeholder="e.g. Modern Website Redesign">
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Project Description</label>
                        <textarea class="form-control" id="description" name="description" rows="6" required placeholder="Describe your project goals, features, and vision..."></textarea>
                    </div>
                    <div class="d-grid">
                        <button type="submit" class="btn btn-brand btn-lg">Submit Project</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
