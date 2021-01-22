document.addEventListener('DOMContentLoaded', () => {
    const LEFT = document.querySelector('i.fas.fa-angle-left');
    const RIGHT = document.querySelector('i.fas.fa-angle-right');
    const SLIDE = document.querySelectorAll('ul.list-items li.list-item');
    console.log(SLIDE.length);
    
    var chiSoHienTai = 0;
    var movingStatus = false;
    console.log(movingStatus);


    // LEFT.addEventListener('click', () => {
    //     if (movingStatus == true ) {return false;}
    //     console.log(movingStatus);
    //         movingStatus = true;
    //     console.log(movingStatus);
       
    //     for (let i = 0; i < SLIDE.length - 1 ; i++) {
    //         for (let y = 0; y < SLIDE.length - 1; y++){
    //             SLIDE[chiSoHienTai].classList.remove('show');
    //             SLIDE[chiSoHienTai].classList.add('hidden');
    //         }
    //     }
    //     chiSoHienTai = chiSoHienTai - 1;
    //     chiSoHienTai = chiSoHienTai < 0 ?  SLIDE.length - 1  :  chiSoHienTai;
    //     console.log("Chỉ số slide hiện tại là : " ,chiSoHienTai);
    //     for (let y = 0; y < SLIDE.length - 1; y++){
    //         SLIDE[chiSoHienTai].classList.remove('hidden');
    //     }
    //     SLIDE[chiSoHienTai].classList.add('show');
    //     SLIDE[chiSoHienTai].addEventListener('webkitAnimationEnd',()=> {
    //         movingStatus = false;
    //         console.log(movingStatus);
    //     })
    // })


    // RIGHT.addEventListener('click', () => {

    //     if (movingStatus == true ) {return false;}
    //     console.log(movingStatus);
    //         movingStatus = true;
    //     console.log(movingStatus);
    //     for (let i = 0; i < SLIDE.length - 1 ; i++) {
    //         for (let y = 0; y < SLIDE.length - 1; y++){
    //             SLIDE[chiSoHienTai].classList.remove('show1');
    //             SLIDE[chiSoHienTai].classList.add('hidden1');
    //         }
    //     }
    //     chiSoHienTai = chiSoHienTai + 1;
    //     chiSoHienTai = chiSoHienTai > SLIDE.length - 1 ? 0 :  chiSoHienTai;
    //     console.log("Chỉ số slide hiện tại là : " ,chiSoHienTai);
    //     for (let y = 0; y < SLIDE.length - 1; y++){
    //         SLIDE[chiSoHienTai].classList.remove('hidden1');
    //     }
    //     SLIDE[chiSoHienTai].classList.add('show1');
    //     SLIDE[chiSoHienTai].addEventListener('webkitAnimationEnd',()=> {
    //         movingStatus = false;
    //         console.log(movingStatus);
    //     })
    // })

     //     } 
    //     if(button == 'left'){
    //         console.log('nut dang nhan la left');
    //         SLIDE[chiSoHienTai].classList.add('hidden');
    //         chiSoHienTai=chiSoHienTai-1;
    //         chiSoHienTai=chiSoHienTai<0 ? SLIDE.length -1 : chiSoHienTai;

    //     }
    //     else{
    //         console.log('nut dang nhan la right');
    //         SLIDE[chiSoHienTai].classList.add('hidden1')
    //         chiSoHienTai=chiSoHienTai+1;
    //         chiSoHienTai=chiSoHienTai >SLIDE.length -1 ? 0 : chiSoHienTai;
    //     }
    //     for (let y = 0; y < SLIDE.length; y++) {
    //       SLIDE[chiSoHienTai].classList.remove('hidden');
    //       SLIDE[chiSoHienTai].classList.remove('hidden1');
            
    //     }
    //     if(button == 'left'){
    //         SLIDE[chiSoHienTai].classList.add('show');
    //         SLIDE[chiSoHienTai].addEventListener('webkitAnimationEnd',() => {
    //             movingStatus =false;
    //         })
            
    //     }
    //     else{
    //         SLIDE[chiSoHienTai].classList.add('show1');
    //         SLIDE[chiSoHienTai].addEventListener('webkitAnimationEnd',() => {
    //             movingStatus =false;
    //         })
            
    //     }

    // }
    // LEFT.addEventListener('click',() => {
    //     LeftOrRight('left')
    // });
    // RIGHT.addEventListener('click',()=> {
    //     LeftOrRight('right')
    // })// function LeftOrRight(button){
    //     if (movingStatus == true ) {return false}
    //     movingStatus = true;
    //     console.log(movingStatus);
    //     for (let i = 0; i< SLIDE.length; i++) {
    //         SLIDE[chiSoHienTai].classList.remove('show');
    //         SLIDE[chiSoHienTai].classList.remove('show1');
           
   
    

    const controlBtn = document.querySelectorAll('ul.controlmovie li');
    console.log(controlBtn);

    var autoSlide = setInterval(() => {
        for (let i = 0; i< SLIDE.length - 1; i++) { 
            SLIDE[chiSoHienTai].classList.remove('show1');

        }
        SLIDE[chiSoHienTai].classList.add('hidden1');
        controlBtn[chiSoHienTai].classList.remove('active');
        chiSoHienTai=chiSoHienTai + 1;
        chiSoHienTai=chiSoHienTai > SLIDE.length-1 ? 0:chiSoHienTai;
        for (let y = 0; y < SLIDE.length -1; y++) {
            SLIDE[chiSoHienTai].classList.remove('hidden1');    
        } 
        SLIDE[chiSoHienTai].classList.add('show1');
        controlBtn[chiSoHienTai].classList.add('active');
        
    },2000);
    
    

    
}, false)

//iife -> immediately-invoked function expression -> hàm tự gọi
//var tenSecond = (() =>{
//     setTimeout(()=> {
//         clearInterval(time);
//     },3000);
// } 
