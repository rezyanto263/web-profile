document.querySelectorAll('.nav-list a').forEach(function(a) {
    a.addEventListener('click', function(e) {
        document.querySelector('.nav-list a.active').classList.remove('active');
        e.target.classList.add('active');
    })
});

document.querySelectorAll('#quickInfo, #btnClose').forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('aside').classList.toggle('close');
        document.querySelector('aside').classList.toggle('open');
    });
});