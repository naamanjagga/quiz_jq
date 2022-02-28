function first() {
    var html = '<div id="first"> '

    html += '<p>Which type of JavaScript language is ___</p>'
    html += '<ol>'
    html += '<li>Object-Oriented</li>'
    html += '<li>Object-Based</li>'
    html += '<li>Assembly-language</li>'
    html += '<li>High-level</li>'
    html += '</ol>'
    html += '<input type="text">'
    html += '<button id="btn1" onclick="second()">submit</button>'
    html += '</div>'

    document.getElementById('container').innerHTML = html;
}
function second() {
    var html = '<div id="second">'

    html += '<p>Which one of the following also known as Conditional Expression:</p>'
    html += '<ol>'
    html += '<li>Alternative to if-else</li>'
    html += '<li>Switch statement</li>'
    html += '<li>If-then-else statement</li>'
    html += '<li>immediate if</li>'
    html += '</ol>'
    html += '<input type="text">'
    html += '<button id="btn2" onclick="third()">submit</button>'
    html += '</div>'

    document.getElementById('container').innerHTML = html;
}
function third() {
    var html = '<div id="third"> '

    html += '<p>In JavaScript, what is a block of statement?</p>'
    html += '<ol>'
    html += '<li>Conditional block</li>'
    html += '<li>block that combines a number of statements into a single compound statement/li>'
    html += '<li>both conditional block and a single statement</li>'
    html += '<li>block that contains a single statement</li>'
    html += '</ol>'
    html += '<input type="text">'
    html += '<button id="btn3" onclick="forth()">submit</button>'
    html += '</div>'

    document.getElementById('container').innerHTML = html;

}
function forth() {
    var html = '<div id="forth"> '

    html += '<p>When interpreter encounters an empty statements, what it will do:</p>'
    html += '<ol>'
    html += ' <li>Shows a warning</li>'
    html += '<li>Prompts to complete the statement</li>'
    html += '<li>Throws an error</li>'
    html += ' <li>Ignores the statements</li>'
    html += '</ol>'
    html += '<input type="text">'
    html += '<button id="btn4" onclick="fifth()">submit</button>'
    html += '</div>'

    document.getElementById('container').innerHTML = html;

}
function fifth() {
    var html = '<div id="fifth">'

    html += '<p>The "function" and " var" are known as:</p>'
    html += '<ol>'
    html += ' <li>Keywords</li>'
    html += '<li>Data types</li>'
    html += ' <li>Declaration statements</li>'
    html += '<li>Prototypes</li>'
    html += '</ol>'
    html += '<input type="text">'
    html += '<button id="btn5" onclick="finish()">submit</button>'
    html += '</div>'

    document.getElementById('container').innerHTML = html;

}
function finish() {
    document.getElementById('container').innerHTML = "TEST SUBMMITTED";
}
