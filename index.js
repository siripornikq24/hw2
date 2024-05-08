var sts=""
var sts1=""
var score=0;
const score_result = document.getElementById('score');
function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        sts="true"
       
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
        sts="false"
    }
    cal();
 }

 function checkAnswer1(answer) {
    const result1 = document.getElementById('result1');
    if (answer === 'c') {
        result1.textContent = "ถูกต้อง PBRU ย่อมาจาก มหาวิทยาลัยราชภัฏเพชรบุรี";
        result1.style.color = 'green';
        sts1="true"
    } else {
        result1.textContent = "Incorrect! Try again.";
        result1.style.color = 'red';
        sts1="false"
    }
    cal();

}


function cal() {
    if(sts=="true" && sts1=="true")
        {score=2;} 
    else if(sts=="true" || sts1=="true")
        {score=1;}
        else {score=0;}
    score_result.textContent = "คะแนนของคุณคือ "+score+" คะแนน";
}
 