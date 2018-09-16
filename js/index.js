window.onload=function () {
    let meau=document.querySelector(".meau");
    let meaubox=document.querySelector(".meaubox");
    let cuohao=document.querySelector(".cuohao");
   
    let body=document.querySelector("body");
    console.log(meau, meaubox,cuohao,body);
    meau.onclick=function () {
        meaubox.style.height="100%";
        body.style.overflow="hidden";
    }
    cuohao.onclick=function () {
        meaubox.style.height="0";
    }
   
    let addsli=document.querySelectorAll(".footer1 .big .big_li");
    let adds=document.querySelectorAll(".footer1 .big h2");
    let smalls=document.querySelectorAll(".footer1 .big .small");
    console.log(addsli,adds, smalls);
    let Times=0;
    for (let i=0;i<addsli.length;i++) {
        addsli[i].onclick=function () {
            Times++;
            if (Times%2!==0) {
                adds[i].style.transform="rotate(45deg)";
                smalls[i].style.display="block"
            }else if(Times%2==0){
                adds[i].style.transform="rotate(90deg)";
                smalls[i].style.display="none"
            }
        }
    }
}