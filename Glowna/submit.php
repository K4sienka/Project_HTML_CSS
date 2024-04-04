<?php
session_start();

$host = 'mysql.agh.edu.pl'; // Zastąp przykładowymi danymi dostępu do bazy
$username = 'kmurzyn';
$password = '0ChHhZzgQeizxj4P';
$dbName = 'kmurzyn';


$conn = new mysqli($host, $username, $password, $dbName);
$conn->set_charset("utf8");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Ta funkcja teraz zwraca dane przed zamknięciem połączenia
function getRegistrationsByDate($conn, $date) {
    $limitReached = false;
    $checkLimitSql = "SELECT COUNT(*) AS count FROM registrations WHERE date='$date'";
    $limitResult = $conn->query($checkLimitSql);
    $row = $limitResult->fetch_assoc();
    if ($row['count'] >= 10) {
        $limitReached = true;
    }

    $sql = "SELECT firstName, lastName, indexNumber FROM registrations WHERE date='$date'";
    $result = $conn->query($sql);
    $registrations = [];
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $registrations[] = $row;
        }
    }
    return ['registrations' => $registrations, 'limitReached' => $limitReached];
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $conn->real_escape_string($_POST['firstName']);
    $lastName = $conn->real_escape_string($_POST['lastName']);
    $indexNumber = $conn->real_escape_string($_POST['indexNumber']);
    $date = $conn->real_escape_string($_POST['date']);

    // Nowe: Sprawdzenie, czy użytkownik z danym imieniem i nazwiskiem już istnieje
    $checkUserSql = "SELECT * FROM registrations WHERE firstName='$firstName' AND lastName='$lastName'";
    $userResult = $conn->query($checkUserSql);
    if ($userResult->num_rows > 0) {
        // Użytkownik już istnieje, ustaw komunikat o błędzie
        $_SESSION['error'] = "Użytkownik o tym imieniu i nazwisku już się zarejestrował.";
    } else {
        // Kontynuacja wcześniejszej logiki sprawdzania limitu
        $checkLimitSql = "SELECT COUNT(*) AS count FROM registrations WHERE date='$date'";
        $limitResult = $conn->query($checkLimitSql);
        $row = $limitResult->fetch_assoc();

        if ($row['count'] < 10) {
            $sql = "INSERT INTO registrations (firstName, lastName, indexNumber, date) VALUES ('$firstName', '$lastName', '$indexNumber', '$date')";

            if ($conn->query($sql) === TRUE) {
                $_SESSION['message'] = "Zapisano pomyślnie!";
            } else {
                $_SESSION['error'] = "Wystąpił błąd podczas zapisu: " . $conn->error;
            }
        } else {
            $_SESSION['error'] = "Przepraszamy, limit osób na tę datę został już osiągnięty.";
        }
    }
}

// Pobieranie danych dla każdej daty
$registrations_29 = getRegistrationsByDate($conn, '2024-03-29');
$registrations_30 = getRegistrationsByDate($conn, '2024-03-30');
$registrations_31 = getRegistrationsByDate($conn, '2024-03-31');

$conn->close();
?>


<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Formularz zapisów</title>


    <link rel="stylesheet" href="../Plan_zajec/header.css">
    <link rel="stylesheet" href="../Plan_zajec/middle.css">
    <link rel="stylesheet" href="../Plan_zajec/footer.css">
    <script src="../Plan_zajec/ToSection.js"></script>
    <script src="../Plan_zajec/Menu.js"></script>

</head>
<body>
    <div class="wrapper">
        <form action="" method="post" autocomplete="off">
            <input type="text" name="firstName" placeholder="Imię" required>
            <input type="text" name="lastName" placeholder="Nazwisko" required>
            <input type="number" name="indexNumber" placeholder="Numer indeksu" required>
            <select name="date" required>
                <option value="">Wybierz datę...</option>
                <option value="2024-03-29">29 Marca 2024</option>
                <option value="2024-03-30">30 Marca 2024</option>
                <option value="2024-03-31">31 Marca 2024</option>
            </select>
            <button type="submit">Zapisz się</button>
        </form>

        <h2> LIMIT NA KAŻDĄ GRUPĘ 10 OSÓB </h2>


        <h2> 29.03.2024 </h2>
        <div id="result_29.03">
            <p> </p>
        </div>
        
        <h2> 30.03.2024 </h2>
        <div id="result_30.03">
        <p> </p>
        </div>

        <h2> 31.03.2024 </h2>
        <div id="result_31.03">
        <p> </p>
        </div>

        <?php if(isset($_SESSION['message'])): ?>
            <div class="message">
                <?php echo $_SESSION['message']; unset($_SESSION['message']); ?>
            </div>
        <?php endif; ?>

        <?php if(isset($_SESSION['error'])): ?>
            <div class="error">
                <?php echo $_SESSION['error']; unset($_SESSION['error']); ?>
            </div>
        <?php endif; ?>
    </div>

    <script>
    window.onload = function() {
        const data29 = <?php echo json_encode($registrations_29['registrations']); ?>;
        const data30 = <?php echo json_encode($registrations_30['registrations']); ?>;
        const data31 = <?php echo json_encode($registrations_31['registrations']); ?>;
        const limitReached29 = <?php echo json_encode($registrations_29['limitReached']); ?>;
        const limitReached30 = <?php echo json_encode($registrations_30['limitReached']); ?>;
        const limitReached31 = <?php echo json_encode($registrations_31['limitReached']); ?>;

        displayRegistrations(data29, 'result_29.03', limitReached29);
        displayRegistrations(data30, 'result_30.03', limitReached30);
        displayRegistrations(data31, 'result_31.03', limitReached31);
    };

    function displayRegistrations(data, elementId, limitReached) {
        const container = document.getElementById(elementId);
        if (limitReached) {
            const limitMessage = document.createElement('p');
            limitMessage.textContent = "Limit osiągnięty";
            limitMessage.style.color = 'red';
            container.appendChild(limitMessage);
        } else {
            data.forEach(reg => {
                const regInfo = document.createElement('p');
                regInfo.textContent = `${reg.firstName} ${reg.lastName} ${reg.indexNumber}`;
                container.appendChild(regInfo);
            });
        }
    }
</script>


</body>
</html>
