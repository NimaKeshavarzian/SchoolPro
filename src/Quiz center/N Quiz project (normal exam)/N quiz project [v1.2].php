<html lang="en">

<head>
    <script src="https:code.jquery.com/jquery-3.1.1.js"></script>
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="N quiz project v[1.2].css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="https://unpkg.com/sweetalert@2.1.2/dist/sweetalert.min.js"></script>
</head>

<body>
    <div id='body'>
        <img src="http://s14.picofile.com/file/8409652534/f92c4ba2_2d1c_4f3b_80a3_f5b1c80ddc50_200x200_2_.png " alt="">
        <input name="que" type="text" id="question" placeholder="Your Question"><br><br>
        <input class="abc" type="text" id="abc1" placeholder="Correct Answer"><br>
        <input class="abc" type="text" id="abc2" placeholder="wrong answer 1"><br>
        <input class="abc" type="text" id="abc3" placeholder="wrong answer 2"><br>
        <input class="abc" type="text" id="abc4" placeholder="wrong answer 3"><br>
        <fieldset>
            <legend>Optional Settings</legend>
            <label id="label" for="timeNum">Time</label>
            <input type="number" name="timeNum" id="TimeNum" value="00"><span id="SpTimeNum">:</span>
            <input type="number" name="timeNum" id="TimeNum1" value="00"><br><br>
            <input type="text" name="More" id="More" placeholder="More Description">
        </fieldset>
        <br><br>
        <button onclick="Add()" id="add">Add</button>
        <button onclick="start();sweet()" id="start">Start</button>
        <h3 id="demo">You have 0 question</h3>
    </div>
    <script src="N quiz project[v1.2].js"></script>
</body>

</html>