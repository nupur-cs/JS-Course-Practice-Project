const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
button.forEach(function(button) {
    console.log(button);
    button.addEventListener('click',function(event){
        console.log(event)
        console.log(event.target)
        if(event.target.id==='salmon'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id==='blueviolet'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id==='aqua'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id==='pink'){
            body.style.backgroundColor = event.target.id;
        }

    });
});


