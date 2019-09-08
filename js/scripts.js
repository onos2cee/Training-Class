    function showDate(){
        document.getElementById('demo').innerHTML = Date();
    }

    function clearDate(){
        document.getElementById('demo').innerHTML ='';
    }



    function showContent(){
        document.getElementById('demo').innerHTML = 
        '<h1>Welcome to Javascript Lesson</h1> <p>Its really amazing</p>';
    }

    function showEmail(){
        document.getElementById('contactImg').src='images/email.png';
        document.getElementById('contactContent').innerHTML='jameswhite@gmail.com';
    }

    function showPhone(){
        document.getElementById('contactImg').src='images/phone1.png';
        document.getElementById('contactContent').innerHTML='08033443355';
    }

    function changeColor(){
        document.getElementById('body').style.color='blue';
    }


    function changeBackground(){
        document.getElementById('body').style.backgroundColor='pink';
    }

    function login(){
        document.getElementById('loginForm').style.display='block';
        document.getElementById('register').style.display='none';
    }

    function register(){
        document.getElementById('loginForm').style.display='none';
        document.getElementById('register').style.display='block';
    }
    