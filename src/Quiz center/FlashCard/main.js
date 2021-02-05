//Variables
var data = [];
var obj, time, Score;
var CardNum = 0;
var ArrNum = -1;
var startNum = -1;
var correct = 0;
var wrong = 0;
var MinTime = 0;
var SecTime = 0;
var QuestionIn = document.getElementById('Question');
var AnswerIn = document.getElementById('Answer');
var QuesColor = document.getElementById('Bg-color1');
var AnswerColor = document.getElementById('Bg-color2');
var StartDiv = document.getElementById('StartDiv');
var body = document.getElementById('body');

// Functions
const ChangeColor = (BG) => {
        BG.style.borderColor = BG.value;
        BG.style.backgroundColor = BG.value;
        if (BG == QuesColor) {
            AnswerColor.value = BG.value;
            AnswerColor.style.borderColor = BG.value;
            AnswerColor.style.backgroundColor = BG.value;
        }
    }
    //.............................................
const Add = () => {
        if (QuestionIn.value == "" || AnswerIn.value == "") {
            swal("Attention", "Please complete all fields", "warning")
        } else {
            ArrNum++;
            obj = {
                Question: QuestionIn.value,
                QuestionBG: QuesColor.value,
                Answer: AnswerIn.value,
                AnswerBG: AnswerColor.value
            }
            data[ArrNum] = obj;
            StartDiv.style.display = "block";

            console.table(data);
            QuestionIn.value = "";
            AnswerIn.value = "";
        }
    }
    //.............................................
const Start = () => {
        body.remove();
        document.getElementsByTagName('body')[0].innerHTML = ` <div id="question1">
<header>
    <div id="Header1">
        <i name='i' class='fas fa-stopwatch' style='margin-top:1.3%;font-size:200%'></i><span id="YourTime"></span>
        <span id="quesNumCount">1 Of 5</span>
    </div>
</header>
<div id="QuesDiv1">
    <br><br><br>
    <h1 id="QuesH1"></h1>
</div>
<footer>
<div onclick="Show()" id="ButtonDiv1">
    <button id="Show">Show Answer</button>
</div>
</footer>
</div>`;
        var quesNumCount = document.querySelector("#quesNumCount");
        var QuesH1 = document.querySelector("#QuesH1");
        var question1 = document.querySelector("#question1");
        startNum++;
        quesNumCount.innerHTML = 1 + startNum + "of" + (1 + ArrNum);
        QuesH1.innerHTML = data[startNum].Question;
        question1.style.backgroundColor = data[startNum].QuestionBG;
    }
    //.............................................
const Show = () => {
        QuesH1.innerHTML = data[startNum].Answer;
        question1.style.backgroundColor = data[startNum].AnswerBG;
        var footer = document.querySelectorAll("footer")[0];
        footer.innerHTML = `
        <div id="ButtonDiv">
        <button onclick="wrong++;Next()" class="DidNot">Didn't Know</button><button onclick="correct++;Next()" class="Know">Know</button>
    </div>
        `
    }
    //.............................................
const Time = () => {
        time = setInterval(function() {
            SecTime++;
            if (SecTime == 60) {
                MinTimeTime++;
                SecTime = 0;
            }
            document.querySelector("#YourTime").innerHTML = MinTime + ":" + SecTime;
        }, 1000)
    } // A function for client Time to Do FlashCards
    //.............................................
const Next = () => {
        if (1 + startNum > ArrNum) {
            clearInterval(time);
            Finish();
        } else {
            Start();
        }

        console.log(wrong);
        console.log(correct);
    }
    //.............................................
const Finish = () => {
        Score = Math.floor(correct * 100 / (1 + ArrNum)) + '%';
        Save();
        document.getElementsByTagName('body')[0].innerHTML = `
        <h1 class="ScoreTitle"><i>Your Score</i></h1>
<table>
<tr>
    <td class="WrongNumsTitle">Wrong</td>
    <td class="CorrectTitle">Correct</td>
</tr>
<tr>
    <td id="WrongNums">4</td>
    <td id="CorrectNums">5</td>
</tr>
</table>
<br><br>
<div class="TimeTitle">
<h2 class="timeH2"><i class="LittleTitle">Your Time</i> <span id="YourTimeValue">15:18</span></h2>
</div>
<h1 class="FinalTitle">
Final Score is <br>
<span id="Final">65%</span>
</h1>
<div class="Retry">
<button onclick="Retry();Time()" class="RetryBu">Retry Cards</button>
</div>
<a href="../QuizHub/Index.html">
<div class="FINISH">
<button class="FinishBu">FINISH</button>
</div>
</a>
        `;
        document.querySelector("#WrongNums").innerHTML = wrong;
        document.querySelector("#CorrectNums").innerHTML = correct;
        document.querySelector("#YourTimeValue").innerHTML = MinTime + ':' + SecTime;
        document.querySelector("#Final").innerHTML = Score;
    }
    //.............................................
const Retry = () => {
        startNum = -1;
        MinTime = 0;
        SecTime = 0;
        correct = 0;
        wrong = 0;
        Start();
    }
    //.............................................
const Save = () => {
        // Cookie Expires Time
        var NowTime = new Date();
        NowTime.setTime(NowTime.getTime() + (365 * 24 * 60 * 60 * 1000))
        var ExpiresCookie = NowTime.toUTCString();
        // Cookies
        document.cookie = `Type= Flash Card; expires= ${ExpiresCookie};path=/`
        document.cookie = `Score= ${Score}; expires= ${ExpiresCookie};path=/`
        document.cookie = `Time= ${MinTime}:${SecTime}s; expires= ${ExpiresCookie};path=/`
    }
    /*
    Facts:
        1.We need Two text inputs
        2.We need Two color inputs
        3.Later We use Import for Save Func
            
    Script Notes:
         1. 3 functions are too important:
                A.Add.................Add data
                B.Start...............Start quiz
                C.Next................Next
                */