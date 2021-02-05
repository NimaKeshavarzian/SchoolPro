var demonum = 0; //Demo number
var num = -1; //arrque arguments
var objnum = -1; //object arguments
var firstNum = 0; // this for first click on start
var clickNum = 0;
var correctNum = 0;
var wrongNum = 0;
var emptyNum = 0;
var FinishMin, FinishSec, More;
const arrque = [];
console.log(screen.availWidth)
console.log(screen.availHeight)
const Add = () => {
    $(function() {
        Number($("#TimeNum").value);
        Number($("#TimeNum1").value)
        if ($("#question").val() == "" || $("#abc1").val() == "" || $("#abc2").val() == "" || $("#abc3").val() == "" || $("#abc4").val() == "") {
            swal("Attention", "Please complete all fields", "warning")
        } else {
            demonum++;
            num++;
            if ($("#TimeNum").val() != 0 || $("#TimeNum1").val() != 0) {
                FinishSec = $("#TimeNum1").val() % 60;
                FinishMin = (Math.floor(Number($("#TimeNum1").val() / 60))) + Number($("#TimeNum").val());
                console.log(FinishMin);
                console.log(FinishSec);
            }
            if ($("#More").val() != 0) {
                More = $("#More").val();
                console.log(More);
            }
            $("#start").css("display", "");
            $("#demo").html("You have " + demonum + " questions");
            var objj = {
                question: $("#question").val(),
                correct: $("#abc1").val(),
                wro1: $("#abc2").val(),
                wro2: $("#abc3").val(),
                wro3: $("#abc4").val()
            }; // an object for values
            arrque[num] = objj;
            console.table(arrque); // check values
        }
    })
}
if (demonum == 0) {
    $(function() {
        $("#start").css("display", "none");
    })
};
const sweet = () => {
    if (More == undefined) {
        More = "Lets go"
    }
    if (More != undefined || FinishMin != undefined || FinishSec != undefined) {
        swal({
            title: "Tips For Exam",
            text: `Your Time is ${FinishMin+":"+FinishSec}
        Tips:${More}`,
            icon: "warning",
        });
    }
}
const start = () => {
    let rand = 3;
    let rand1 = 3;
    let rand2 = 3;
    let rand3 = Math.floor(Math.random() * 4);
    do {
        rand = Math.floor(Math.random() * 4);
    } while (rand === rand2);
    do {
        rand1 = Math.floor(Math.random() * 4);
    } while (rand1 === rand2 || rand1 === rand);
    do {
        rand3 = Math.floor(Math.random() * 4);
    } while (rand3 === rand2 || rand3 === rand1 || rand3 === rand);
    console.log(rand)
    console.log(rand1)
    console.log(rand2);
    console.log(rand3);

    console.log(rand);
    console.log(rand1);
    console.log(rand2);
    console.log(rand3);
    objnum++;
    firstNum++;
    if (firstNum == 1) {
        setInterval(Time, 1000);
    }
    $(function() {
        $("#body").html();
        $("body").css({
            "background-color": "#708090",
            "text-align": "center",
            "color": "whitesmoke"
        });
        $("#body").html(`<div id='questionbox'>
<h2 id='questionh2'></h2>
</div>
<div id="div1" class='option'>
<h4 id='h40' class='speop'></h4>
</div>
<div id='div2' class='option'>
<h4 id='h41'></h4>
</div>
<div id='div3' class='option'>
<h4 id='h42'></h4>
</div>
<div id='div4' class='option'>
<h4 id='h43'></h4>
</div>
<div>
<div id='bottomleft'><i name='i' class='fas fa-stopwatch' style='margin-top:1.3%;font-size:200%'></i><label id="timeLa" for='i'>0:0</label></div>
<div id='bottomright'><button id='bunext' onclick='startque()'>Next</button></div>
</div>
<style id="style"></style>`);
        document.getElementById("div1").addEventListener("click", CheckAnwser)
        document.getElementById("div2").addEventListener("click", CheckAnwser1)
        document.getElementById("div3").addEventListener("click", CheckAnwser2)
        document.getElementById("div4").addEventListener("click", CheckAnwser3)
        $("h2").html(arrque[objnum].question);
        console.log(arrque[objnum].question);
        document.getElementsByTagName('h4')[rand].innerHTML = arrque[objnum].correct;
        console.log(arrque[objnum].correct);
        document.getElementsByTagName('h4')[rand1].innerHTML = arrque[objnum].wro1;
        console.log(arrque[objnum].wro1);
        document.getElementsByTagName('h4')[rand2].innerHTML = arrque[objnum].wro2;
        console.log(arrque[objnum].wro2);
        document.getElementsByTagName('h4')[rand3].innerHTML = arrque[objnum].wro3;
        console.log(arrque[objnum].wro3);
    });
}
$(function() {
    const h40 = $("#h40");
    const h41 = $("#41");
    const h42 = $("#h42");
    const h43 = $("#h43");
})
const test = (x, y) => {
    if (x.innerHTML == arrque[objnum].correct) {
        $(function() {
            $("#style").html(`#${y} {
    animation-name: correct;
    animation-duration: 1.9s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
}

@keyframes correct {
    10% {
        font-size: 200%;
    }
    40% {
        color: #788878;
    }
    70% {
        font-size: 170%;
        color: #788878;
    } 
    to {
        font-size: 150%;
        color: #788878;
    }
 }`);
        })
        correctNum++;
    } else {
        $(function() {
            $("#style").html(`#${y} {
    animation-name: correct;
    animation-duration: 1.9s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
}

@keyframes correct {
    10% {
        font-size: 200%;
    }
    40% {
        color: #e60000;
    }
    70% {
        font-size: 170%;
        color: #e60000;
    } 
    to {
        font-size: 150%;
        color: #e60000;
    }
 }`);
        })
        wrongNum++;
    }
    document.getElementById("div1").removeEventListener("click", CheckAnwser)
    document.getElementById("div2").removeEventListener("click", CheckAnwser1)
    document.getElementById("div3").removeEventListener("click", CheckAnwser2)
    document.getElementById("div4").removeEventListener("click", CheckAnwser3)
}

function CheckAnwser() {
    clickNum++;
    test(h40, 'h40');
}

function CheckAnwser1() {
    clickNum++;
    test(h41, 'h41');
}

function CheckAnwser2() {
    clickNum++;
    test(h42, 'h42');
}

function CheckAnwser3() {
    clickNum++;
    test(h43, 'h43');
}
var secNum = 0;
var minNum = 0;
const Time = () => {
    secNum++;
    if (secNum == 60) {
        minNum++;
        secNum = 0;
    }
    if (minNum + ':' + secNum == FinishMin + ':' + FinishSec) {
        emptyNum += num - objnum;
        objnum = num;
        startque();
    }
    $(function() {
        $("#timeLa").html(minNum + ":" + secNum);
    })
}
const startque = () => {
        if (objnum < num) {
            start();
        } else {
            $(function() {
                $("#body").remove();
                $("body").html(`
            <h1 id="ScoreHead"><i>Your Score</i></h1>
<table id="table">
<tr class="tr1">
    <td id="headcell1">
        <h3 class="h3" id="corH">Corrects</h3>
    </td>
    <td id="headcell2">
        <h3 class="h3" id="wroH">Wrongs</h3>
    </td>
    <td id="headcell3">
        <h3 class="h3" id="empH">Empty</h3>
    </td>
</tr>
<tr id="secTR">
    <td id="Td1">
        <h4 class="h4" id='coh'></h4>
    </td>
    <td id=Td2>
        <h4 class="h4" id="wrh"></h4>
    </td>
    <td id="Td3">
        <h4 class="h4" id="emh"></h4>
    </td>
</tr>
</table>
<br>
<br>
<div class="TimeDiv">
<h2 class="timeH2"><i>Your Time</i> <span id="YourTime">15:18</span></h2>
</div>
<h1 class="finalScore">Finally score is <br> <span id="Final">75%</span></h1>
<button id="BuFinish">FINISH</button>
            `);
                clearInterval(Time);
                objnum++;
                $("#coh").html(correctNum);
                $("#wrh").html(wrongNum);
                $("#emh").html(emptyNum);
                $("#YourTime").html(minNum + ":" + secNum);
                $("#Final").html(Math.floor(correctNum * 100 / objnum) + '%')
            })
        }
        if (clickNum == 0) {
            emptyNum++;
        } else {
            clickNum = 0;
        }
    }
    /* we want five functions: 
    1.Add..........................Check
    2.Start........................check
    3.Next.........................check
    4.Check Anwser.................check
    5. Time........................check
    -->
        <!-- 
        1. js optional
     -->
        <!-- we have 3 varible for optional settings:
        1. Finishmin............... A var for minuts time
        2. Finishsec............... A var for secend
        3. More.................... A var for more description
      --> */