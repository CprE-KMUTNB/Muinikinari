const pics = [
    'url("foodpic/1.jpg")',
    'url("foodpic/2.jpg")',
    'url("foodpic/3.jpg")',
    'url("foodpic/4.jpg")',
    'url("foodpic/5.jpg")',
    'url("foodpic/6.jpg")',
    'url("foodpic/7.jpg")',
    'url("foodpic/8.jpg")',
    'url("foodpic/9.jpg")',
    'url("foodpic/10.jpg")',
    'url("foodpic/11.jpg")',
    'url("foodpic/12.jpg")',
    'url("foodpic/13.jpg")',
    'url("foodpic/14.jpg")',
    'url("foodpic/15.jpg")',

];

const pic = document.querySelector('section');


function showImage(){
    var a = Math.floor(Math.random()*pics.length);
    console.log(a);
    var img = pics[a];
    console.log(img);
    pic.style.backgroundImage = img;
}

setInterval(showImage,1000);