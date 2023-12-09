
window.addEventListener("load",showPic);
document.getElementById("gayButton").addEventListener("click",yoMom);   
gayButton();

link="https://youtu.be/4n4rBrs5-LY?si=t7ZLx-XrdiLP_69z&t=11";

function yoMom(){
    //alert("YOMOM GAY LMAOOOOO");
    window.open(link,'_blank');
}

function showPic(){
    let gayPic=document.getElementById("image");
    gayPic.src="/images/the rock.jpg";
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