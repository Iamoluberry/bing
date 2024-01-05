document.getElementById("s-input").focus();

document.getElementById('s-input').onclick = function(){
    // document.body.style.opacity = 0.3;
    document.getElementById('s-input').style.opacity = 1;
    document.getElementById('opacity-div').style.backgroundImage.opacity = 0.1;
}


document.getElementById('bg-change-btn-left').onclick = function(){
    document.getElementById("s-input").focus();
    document.body.style.backgroundImage = "url('BingWallpaper.jpg')";
}

document.getElementById('bg-change-btn-right').onclick = function(){
    document.getElementById("s-input").focus();
    document.body.style.backgroundImage = "url('BingWallpaper (2).jpg')";
}

document.getElementById('visibilty-btn-fn').onclick = function(){
    document.getElementById('opacity-div').style.position = 'fixed';
    document.getElementById('opacity-div').style.width = '80%' 
    document.getElementById('opacity-div').style.marginTop = '90vh';
    document.getElementById('opacity-div').style.marginLeft = '10%';
    // document.getElementById('opacity-div').style.visibility = 'hidden'
}


