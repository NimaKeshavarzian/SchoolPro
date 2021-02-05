<div>
    <header>
        <h1 class="FinishTitle">Your Scroe</h1>
    </header>
    <article>
        <table class="ScoreTable">
            <tr>
                <th class="Corrects">Correct</th>
                <th class="Wrongs">Wrong</th>
                <th class="Emptys">Empty</th>
            </tr>
            <tr>
                <td id="Corrects"></td>
                <td id="Wrongs"></td>
                <td id="Empty"></td>
            </tr>
        </table><br />
        <div class="TimeTitle">
            <h2 class="timeH2"><i class="LittleTitle">Your Time</i> <span id="YourTimeValue"></span></h2>
        </div>
        <h1 class="FinalTitle">
            Final Score is <br>
            <span id="Final"></span>
        </h1>
        <a href="../QuizHub/Index.html">
            <div class="FinishBU">
                <button class="FinishButton" type="submit">FINISH</button>
            </div>
        </a>
    </article>
</div>
    <?php /*
    // Variables
    # Element Nullable Mode
    $isNull = true;
    #Dom
    include './simplehtmldom/simple_html_dom.php';
    $html = file_get_html('Finish.php');
    #Client Info
    $ClientDate = date("Y/m/d");
    $ClientScore = $html->find('span', 1);
    $ClientTime = $html->find('span', 0);
    //............................................................

    function ConnectToSql()
    {
        global $ClientScore, $ClientTime, $ClientDate;
        echo $ClientScore . "<br>";
        #DataBase Info
        $dbname = "schoolpro";
        $username = "root";
        $pass = "";
        #Connect DataBase
        try {
            $connect = new PDO("mysql:host=localhost;dbname = $dbname", $username, $pass);
            $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "INSERT INTO `data` (`ID`, `Type`, `Score`, `Time`, `Date`) VALUES (NULL, 'Long Quiz', '$ClientScore', '$ClientTime', '$ClientDate')";
            echo "Connected<br>";
            echo "Finished" . "<br>";
        } catch (PDOException $err) {
            echo $err->getMessage();
            echo "<br>An Error";
        }
    }
   */ ?>