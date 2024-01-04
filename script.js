// let submit = document.querySelector('#submit');
let count = 0;
// submit.addEventListener('click', function(){
//     if(count == 0)
//     {
//         submit.innerHTML = "Form submitted";
//         count = 1;
//     }
//     else
//     {
//         submit.innerHTML = "Submit";
//         count = 0;
//     }
// })


let container = document.querySelector('.container');
let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
// let count2 = 0;
// let count3 = 0;

box1.addEventListener('click',function(){
    if(count == 0)
    {
        box1.style.backgroundColor = "white"
        document.body.style.backgroundColor = "red";
        count++;
    }
    else
    {
        box1.style.backgroundColor = "red"
        document.body.style.backgroundColor = "white";
        count--;
    }

})

box2.addEventListener('click',function(){
    if(count == 0)
    {
        document.body.style.backgroundColor = "blue";
        count++;
    }
    else
    {
        document.body.style.backgroundColor = "white";
        count--;
    }

})

box3.addEventListener('click',function(){
    if(count == 0)
    {
        document.body.style.backgroundColor = "green";
        count++;
    }
    else
    {
        document.body.style.backgroundColor = "white";
        count--;
    }

})