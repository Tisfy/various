const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question">Bob has an <img src="https://www.nowcoder.com/equation?tex=n%5Ctimes%20m"/> matrix <img alt="" src="https://www.nowcoder.com/equation?tex=W"/>. <br/> <br/> This matrix is very special, It\s calculated by two sequences <img src="https://www.nowcoder.com/equation?tex=a_%7B1...n%7D%2Cb_%7B1...m%7D"/>, <img src="https://www.nowcoder.com/equation?tex=%5Cforall%20i%5Cin%20%5B1%2Cn%5D%2C%5Cforall%20j%5Cin%20%5B1%2Cm%5D"/>, <img src="https://www.nowcoder.com/equation?tex=W_%7Bi%2Cj%7D%3Da_%7Bi%7D%2Bb_%7Bj%7D"/><br/> <br/> Now Bob wants to find a submatrix of <img alt="" src="https://www.nowcoder.com/equation?tex=W"/> with the largest average value.<br/> <br/> Bob doesn\t want the size of submatrix to be too small, so the submatrix you find must satisfy that the width(the first dimension of matrix) of it is at least <img alt="" src="https://www.nowcoder.com/equation?tex=x"/> and the height(the second dimension of matrix) of it is at least <img alt="" src="https://www.nowcoder.com/equation?tex=y"/>.<br/> <br/> Now you need to calculate the largest average value.<br/></div>\n'; const input_description_data = '\<pre>The first line has four integers <img alt="" src="https://www.nowcoder.com/equation?tex=n%2Cm%2Cx%2Cy"/>.<br/><br/>The second line has <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> integers <img src="https://www.nowcoder.com/equation?tex=a_%7B1...n%7D"/>.<br/><br/>The third line has <img alt="" src="https://www.nowcoder.com/equation?tex=m"/> integers <img src="https://www.nowcoder.com/equation?tex=b_%7B1...m%7D"/>.<br/><br/><img src="https://www.nowcoder.com/equation?tex=1%5Cleq%20n%2Cm%5Cleq%2010%5E5"/><br/><br/><img src="https://www.nowcoder.com/equation?tex=1%5Cleq%20x%5Cleq%20n%2C1%5Cleq%20y%5Cleq%20m"/><br/><br/><img src="https://www.nowcoder.com/equation?tex=0%5Cleq%20a_i%2Cb_i%5Cleq%2010%5E5"/><br/></pre>\n'; const output_description_data = '\<pre>Output the largest average value.<br/><br/>Your answer will be considered correct if the absolute or relative error is less than <img src="https://www.nowcoder.com/equation?tex=10%5E%7B-6%7D"/><br/></pre>\n';

window.onload = function () {
    var isProblem = 1;
    var problem_description,input_description,output_description;
    try {
        problem_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(1) > div.panel-body.content");
        input_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(2) > div.panel-body.content");
        output_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(3) > div.panel-body.content");

        problem_description.innerHTML = begin + problem_description_data + end;
        input_description.innerHTML = begin + input_description_data + end;
        output_description.innerHTML = begin + output_description_data + end;
    }
    catch(TypeError){
        console.log("Not at Original page");
        try {
            problem_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(5) > div:nth-child(2) > div > div");
            input_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(5) > div:nth-child(3) > div > div");
            output_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(5) > div:nth-child(4) > div > div");
            problem_description.innerHTML = begin + problem_description_data + end;
            input_description.innerHTML = begin + input_description_data + end;
            output_description.innerHTML = begin + output_description_data + end;
            isProblem=2;
        }
        catch(TypeError)
        {
            console.log(TypeError);
            console.log("Not at second version page");
            isProblem=0;
        }
    }


    setTimeout(function () {
        var author = document.querySelector("#creator > a");
        author.href = "userinfo.php?user=2019040474";
        author.innerText="2019040474";
    }, 3000);
}

function alert(word, hei = 50, Time = 1500) {
    var length = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] > 255) {
            length += 2;
        } else {
            length++;
        }
    }
    var rwid = length;
    var line = 1;
    while (rwid > 40) {
        length = 40;
        hei += hei;
        rwid -= 40;
        line++;
    }
    var reminder = document.createElement('div');
    document.body.appendChild(reminder);
    reminder.style.cssText = "width: " + length * 24 + "px;height: " + hei + "px;position: fixed;display: block;border-radius: 5px;background-color: rgba(0, 0, 0, 0.3);text-align: center;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;font-size: 24px;word-break:break-all;";
    var left__ = 0.5 * document.body.offsetWidth - 0.5 * reminder.offsetWidth;
    var top__ = 0.5 * window.innerHeight - 0.5 * reminder.offsetHeight;
    reminder.id = "alert";
    reminder.style.color = "#fff";
    reminder.style.left = left__ + 'px';
    reminder.style.top = top__ + 'px';
    reminder.style.lineHeight = reminder.offsetHeight / line + 'px';
    reminder.innerHTML = word;
    setTimeout(function () {
        reminder.style.display = "none";
    }, Time);
}
