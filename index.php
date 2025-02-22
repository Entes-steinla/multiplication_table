<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="style.css">
    <!-- FontAwesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <title>Bảng cửu chương</title>
</head>

<body class="container">
    <?php
    echo "<table id='tb'>";
    for ($i = 1; $i < 10; $i++) {
        echo "<tr>";
        for ($j = 1; $j < 10; $j++) {
            echo "<td class='button'>";
            // if ($j % 2 == 0)
            //     echo "<td class='button'>";
            // else
            //     echo "<td class='button' style='color: #eb94da;'>";

            echo $j . " <i class='fa-solid fa-xmark'></i> " . $i . " = " . ($i * $j);

            echo "<div class='description'>" . $j . " <i class='fa-solid fa-xmark fa-xmark1'></i> " . $i . " = " . ($i * $j) . "</div>";

            echo "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
    ?>
    <script src="main.js"></script>
</body>

</html>