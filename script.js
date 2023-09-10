
window.addEventListener("load",showPic);
document.getElementById("gayButton").addEventListener("click",yoMom);   
gayButton();

function yoMom(){
    alert("YOMOM GAY LMAOOOOO");
}

function showPic(){
    let gayPic=document.getElementById("image");
    gayPic.src="the rock.jpg";
}

function gayButton() {
    let yesAns=document.getElementById("yesButton").addEventListener("click", function(){
        alert("u r gay HAHAHAHAHAHAHA");
    })
    let noAns=document.getElementById("noButton").addEventListener("click", function(){
        alert("lol what a shame");
    })
}
//yomom