<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flash Card</title>
    <link rel="stylesheet" href="Style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="https://unpkg.com/sweetalert@2.1.2/dist/sweetalert.min.js"></script>
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
</head>

<body>
    <div id="body">
        <div id="header">
            <img src="Images/FlashCard" alt="">
        </div>
        <fieldset id="Fieldset1">
            <legend>Question</legend>
            <input type="text" id="Question" placeholder="Flash card question"><br>
            <div id="QuesDiv">
                <label for="Bg-color1">Card background</label><input onchange="ChangeColor(this)" value="#005f9e" type="color" name="Bg-color1" id="Bg-color1">
            </div>
        </fieldset>
        <fieldset id="Fieldset2">
            <legend>Answer</legend>
            <input type="text" id="Answer" placeholder="Flash card Answer"><br>
            <div id="AnswerDiv">
                <label for="Bg-color2">Card background</label><input onchange="ChangeColor(this)" value="#005f9e" type="color" name="Bg-color2" id="Bg-color2">
            </div>
        </fieldset>
        <div id="AddDiv">
            <button onclick="Add()" id="AddBu">Add Your flash card</button>
        </div>
        <div id="StartDiv">
            <button onclick="Start();Time()" id="StartBu">Start cards</button>
        </div>
    </div>
    <script src="main.js"></script>
    </body>
</html>
