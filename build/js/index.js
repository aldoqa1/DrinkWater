const smalls = document.querySelectorAll(".small-cup");
const big = document.querySelector(".big-cup .liquido");
const remained = document.getElementById("remained");
const percentage = document.getElementById("percentage");

smalls.forEach(small => {
    small.addEventListener("click", ()=>{
        liq = small.querySelector(".liquido");
        liq.classList.toggle("active");
        console.log(small);

        if(liq.classList.contains("active")){
            let p = Number(percentage.innerText);
            percentage.innerText = p+12.5;
        }else{
            let p = Number(percentage.innerText);
            percentage.innerText = p-12.5;
        }

        big.style.height = percentage.innerText+"%";

        r = 2 - (percentage.innerText/100)*2;
        remained.innerText = r;

    })

});

