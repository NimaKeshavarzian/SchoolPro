//Variables
var DataNum = -1;
var DataObj, ClientTime, MyTXT, i, Score;
var More = "Let's Go"
var Min = 0;
var MinElement = Number(document.querySelector("#MinNum").value);
var Sec = 0;
var SecElement = Number(document.querySelector("#SecNum").value);
var MinTime = 0;
var SecTime = 0;
var Data = [];
var Answers = [];
var question = document.querySelector("#Question");
var answer = document.querySelector("#Answer");
var CheckBox = document.querySelector("#InputCheck");
var CheckMode = true;
var StartNum = -1; // A variable for Show Answer in Page
var AddNum = -1;
var Corrects = 0; // Correct Client Answers
var Wrong = 0; // Wrong Client Answers 
var Empty = 0; // Empty Client Answers
// Ajax Request
var xhr = new XMLHttpRequest();
xhr.open('GET', './Check.html');
xhr.onreadystatechange = function() {
    MyTXT = xhr.responseText;
};
xhr.send();
//Functions
function Add() {
    if (CheckBox.checked && answer.value == "") {
        swal("Attention", "Please complete all fields", "warning");
    } else {
        if (question.value == "") {
            swal("Attention", "Please complete all fields", "warning");
        } else {
            if (CheckBox.checked) {
                DataNum++;
                DataObj = {
                    Question: question.value,
                    Answer: answer.value
                };
            } else {
                DataNum++;
                DataObj = {
                    Question: question.value
                };
            }
            AddMore();
            Data[DataNum] = DataObj;
            document.querySelector("#StartDiv").style.display = "block";
            console.table(Data);
            answer.value = "";
            question.value = "";
        }
    }
} // Add Data
//......................................................................................................
function Check() {
    switch (CheckBox.checked) {
        case true:
            DataNum = -1;
            Data = [];
            CheckMode = true;
            document.querySelector("#StartDiv").style.display = "none";
            document.querySelector(".CheckAnswer").style.height = "20%";
            answer.style.display = "";
            swal("Auto Check Turn On", "Please Enter Questions Again", "warning");
            break;
        case false:
            for (var i = 0; i <= Data.length - 1; i++) {
                delete Data[i].Answer;
            }
            CheckMode = false;
            document.querySelector(".CheckAnswer").style.height = "10%";
            answer.style.display = "none";
            console.table(Data);
            swal("Auto Check Turn Off", "", "warning");
            break;
    }

} //Check Does client Want to Check Automatically Answers
//......................................................................................................
const AddMore = () => {
        if (document.querySelector("#More").value != "") {
            More = document.querySelector("#More").value;
            console.log(More);
        }
        if (MinElement != 0 || SecElement != 0) {
            Sec = SecElement % 60;
            Min = MinElement + Math.floor(SecElement / 60);
            console.log(Min + ':' + Sec);
            console.log(typeof MinElement);
        }
    } // Add Optional Settings
    //......................................................................................................
const Start = () => {
        // Page Body:
        document.querySelectorAll("body")[0].innerHTML = `
    <header>
    <div class="Header">
        <i name='i' class='fas fa-stopwatch' style='margin-top:1.3%;font-size:200%'></i><span id="YourTime">0:0</span>
        <span id="QuestionCount">1 Of 5</span>
    </div>
</header>
<div id="QuestionField">
    <h1 id="QuestionH1"></h1>
</div>
<textarea id="AnswerClient" placeholder="Your Answer"></textarea>
<br><br>
<footer>
<div onclick="Next()" class="Submit">
    <button class="submitBU">Submit</button>
</div>
</footer>
    `;
        // Variables
        var QuestionH1 = document.querySelector("#QuestionH1");
        var QuestionCount = document.querySelector("#QuestionCount");
        StartNum++;
        // More Statements
        QuestionH1.innerHTML = Data[StartNum].Question;
        QuestionCount.innerHTML = `${1 + StartNum}OF${Data.length}`
    } // Start Exam
    //......................................................................................................
const Next = () => {
        // Variables
        let AnswerClient = document.querySelector("#AnswerClient");
        // Check Answer
        CheckAnswer();
        // Check Part
        if (StartNum + 1 < Data.length) {
            Start();
        } else {
            if (CheckMode == true) {
                Finish();
            } else {
                CheckClient();
            }

        }
    }
    //......................................................................................................
const Time = () => {
        ClientTime = setInterval(function() {
            if (Min + ':' + Sec == MinTime + ':' + SecTime) {
                CheckAnswer();
                alert("Your Time is Finished");
                if (CheckMode == true) {
                    Finish();
                } else {
                    CheckClient();
                }
            } else {
                SecTime++;
                if (SecTime == 60) {
                    MinTime++;
                    SecTime = 0;
                }
                document.querySelector("#YourTime").innerHTML = `${MinTime}:${SecTime}`;
            }
        }, 1000)
    } // Show Time
    //......................................................................................................
const Finish = () => {
        clearInterval(ClientTime);
        Score = Math.floor(Corrects * 100 / Data.length) + '%';
        const Link = new XMLHttpRequest();
        Link.open('GET', './Finish.php');
        Link.send();
        Link.onreadystatechange = function() {
            document.getElementsByTagName("body")[0].innerHTML = Link.responseText;
            document.querySelector("#Wrongs").innerHTML = Wrong;
            document.querySelector("#Empty").innerHTML = Empty;
            document.querySelector("#Corrects").innerHTML = Corrects;
            document.querySelector("#YourTimeValue").innerHTML = `${MinTime}:${SecTime}`;
            document.querySelector("#Final").innerHTML = Score;
        }
        console.log(Link.status)
    } // Finish Exam
    //......................................................................................................
const CheckAnswer = () => {
        let AnswerClient = document.querySelector("#AnswerClient");
        if (CheckMode == true) {
            if (AnswerClient.value == Data[StartNum].Answer) {
                Corrects++;
                console.log(Corrects);
            } else if (AnswerClient.value != Data[StartNum].Answer && AnswerClient.value != "") {
                Wrong++;
                console.log(Wrong);
            } else if (AnswerClient.value == "") {
                Empty++;
                console.log(Empty);
            }
        } // True CheckBox
        else {
            Answers.push(AnswerClient.value)
        }
    } // Check Answers
    //......................................................................................................
const ShowMore = () => {
        if (More != "" || Min != 0 || Sec != 0) {
            swal({
                title: "Tips For Exam",
                text: `Your Time is ${Min+":"+Sec}
        Tips:${More}`,
                icon: "warning",
            });
        } else if (Min == 0 && Sec == 0) {
            swal({
                title: "Tips For Exam",
                text: `Your Time is Unlimited
        Tips:${More}`,
                icon: "warning",
            });
        }
    }
    //......................................................................................................
const CheckClient = () => {
        clearInterval(ClientTime);
        document.getElementsByTagName('body')[0].innerHTML = "";
        for (i = 0; i < Answers.length; i++) {
            document.getElementsByTagName('body')[0].innerHTML += MyTXT;
            document.getElementsByTagName("h1")[i].innerHTML = (1 + i) + '.' + Data[i].Question;
            document.getElementsByTagName("h2")[i].innerHTML = "Answer: " + Answers[i];
        }
        document.getElementsByTagName('table')[i - 1].addEventListener("click", function() {
            Finish();
        });
    }
    //......................................................................................................
const DeleteCheck = (Param) => {
    Param.parentElement.remove();
};
//..........................................................................................................