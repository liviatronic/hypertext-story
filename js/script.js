window.onload = function () {

    var button = document.getElementById('hover');
    var body = document.body;

    button.onmouseover = function () {
        body.className = 'hovered';
    }

    button.onmouseout = function () {
        body.className = '';
    }

};