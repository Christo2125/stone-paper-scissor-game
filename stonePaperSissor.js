const rock = document.getElementById('img1');
const paper = document.getElementById('img2');
const sissors = document.getElementById('img3');

    rock.addEventListener('click', function(){
        var randomImg = document.getElementById('C1section1');
        randomImg.style.backgroundImage = 'url(./image/rock.jpg)';
        randomImg.style.backgroundSize = '30% 100%';
        randomImg.style.backgroundRepeat = 'no-repeat';
        randomImg.style.backgroundPositionX = '390px';

        const randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber);

        if(randomNumber <= 3) {
            var result = document.getElementById('C1section2')
            result.style.backgroundImage = 'url(./image/rock.jpg)';
            result.style.backgroundSize = '30% 100%';
            result.style.backgroundRepeat = 'no-repeat';
        }
        else if(randomNumber >3 && randomNumber <= 6) {
            var result = document.getElementById('C1section2')
            result.style.backgroundImage = 'url(./image/paper.jpg)';
            result.style.backgroundSize = '30% 100%';
            result.style.backgroundRepeat = 'no-repeat';
        }
    else{
        var result = document.getElementById('C1section2')
        result.style.backgroundImage = 'url(./image/sissors.jpg)';
        result.style.backgroundSize = '30% 100%';
        result.style.backgroundRepeat = 'no-repeat';
    }
    if(randomImg.style.backgroundImage === result.style.backgroundImage){
        const score = document.getElementById('score');
        score.style.display = 'flex';   
        score.innerText = "draw"; 
    }
    else if(randomNumber <= 3){
        const score = document.getElementById('score');
        score.style.display = 'flex';
        score.innerText = "win"; 
    }
    else if(randomNumber >3 && randomNumber <= 6){
        const score = document.getElementById('score');
        score.style.display = 'flex';
        score.innerText = "loose"; 
    }
    else{
        const score = document.getElementById('score');
        score.style.display = 'flex';
        score.innerText = "win";
    }
    })
    paper.addEventListener('click', function(){
        var randomImg = document.getElementById('C1section1');
        randomImg.style.backgroundImage = 'url(./image/paper.jpg)';
        randomImg.style.backgroundSize = '30% 100%';
        randomImg.style.backgroundRepeat = 'no-repeat';
        randomImg.style.backgroundPositionX = '390px';
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber);
        if(randomNumber <= 3) {
            var result = document.getElementById('C1section2')
            result.style.backgroundImage = 'url(./image/rock.jpg)';
            result.style.backgroundSize = '30% 100%';
            result.style.backgroundRepeat = 'no-repeat';
        }
        else if(randomNumber >3 && randomNumber <= 6) {
            var result = document.getElementById('C1section2')
            result.style.backgroundImage = 'url(./image/paper.jpg)';
            result.style.backgroundSize = '30% 100%';
            result.style.backgroundRepeat = 'no-repeat';
        }
    else{
        var result = document.getElementById('C1section2')
        result.style.backgroundImage = 'url(./image/sissors.jpg)';
        result.style.backgroundSize = '30% 100%';
        result.style.backgroundRepeat = 'no-repeat';
    }
    if(randomImg.style.backgroundImage === result.style.backgroundImage){
        const score = document.getElementById('score');
        score.style.display = 'flex';  
        score.innerText = "draw"; 
    }
    else if(randomNumber <= 3){
        const score = document.getElementById('score');
        score.style.display = 'flex';  
        score.innerText = "win"; 
    }
    else if(randomNumber >3 && randomNumber <= 6){
        const score = document.getElementById('score');
        score.style.display = 'flex';  
        score.innerText = "win"; 
    }
    else{
        const score = document.getElementById('score');
        score.style.display = 'flex';  
        score.innerText = "loose";
    }
    })  
    sissors.addEventListener('click', function(){
        var randomImg = document.getElementById('C1section1');
        randomImg.style.backgroundImage = 'url(./image/sissors.jpg)';
        randomImg.style.backgroundSize = '30% 100%';
        randomImg.style.backgroundRepeat = 'no-repeat';
        randomImg.style.backgroundPositionX = '390px'
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber);
        if(randomNumber <= 3) {
            var result = document.getElementById('C1section2')
            result.style.backgroundImage = 'url(./image/rock.jpg)';
            result.style.backgroundSize = '30% 100%';
            result.style.backgroundRepeat = 'no-repeat';
        }
        else if(randomNumber >3 && randomNumber <= 6) {
            var result = document.getElementById('C1section2')
            result.style.backgroundImage = 'url(./image/paper.jpg)';
            result.style.backgroundSize = '30% 100%';
            result.style.backgroundRepeat = 'no-repeat';
        }
    else{
        var result = document.getElementById('C1section2')
        result.style.backgroundImage = 'url(./image/sissors.jpg)';
        result.style.backgroundSize = '30% 100%';
        result.style.backgroundRepeat = 'no-repeat';
    }
    if(randomImg.style.backgroundImage === result.style.backgroundImage){
        const score = document.getElementById('score');
        score.style.display = 'flex';  
        score.innerText = "draw"; 
    }
    else if(randomNumber <= 3){
        const score = document.getElementById('score');
        score.style.display = 'flex';  
        score.innerText = "loose"; 
    }
    else if(randomNumber >3 && randomNumber <= 6){
        const score = document.getElementById('score');
        score.style.display = 'flex';
        score.innerText = "win"; 
    }
    else{
        const score = document.getElementById('score');
        score.style.display = 'flex';
        score.innerText = "loose";
    }
    })

    console.log( Math.random());

    



    