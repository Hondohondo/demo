document.querySelector('.btn-red').addEventListener('click', function() {
    
    document.querySelector('.headingone').classList.add('red');
    document.querySelector('.headingone').classList.remove('blue');
    
    
});

document.querySelector('.btn-blue').addEventListener('click', function() {
    
    document.querySelector('.headingone').classList.add('blue');
    document.querySelector('.headingone').classList.remove('red');
    
    
});