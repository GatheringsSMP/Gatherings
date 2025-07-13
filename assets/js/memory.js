$('#chk').click(function (e) {
    if (e.target.checked) {
        localStorage.setItem('checked','true');
    } else {
        localStorage.setItem('checked','false');
    }
})

$(document).ready(function () {
    document.querySelector('#chk').checked = (localStorage.getItem('checked') === 'true')
});