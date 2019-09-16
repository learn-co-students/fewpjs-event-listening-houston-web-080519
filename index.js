const input = document.getElementById('input');

function addingEventListener() {
    input.addEventListener('click', function(event) {
        alert('I was clicked!');
    });
}
