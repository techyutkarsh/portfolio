

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem  = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) =>{
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);
    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    
    p_btn_clicked.classList.add("p-btn-active");
    const btn_num = p_btn_clicked.dataset.btnNum ;
    console.log(btn_num);

    const img_active = document.querySelectorAll('.p-btn--${btn_num}');

    p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));
    img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));
});

// *********************scroll buton**************************

const heroSection = document.querySelector(".section-hero");

const footerElem = document.querySelectior(".section-footer");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style ");

scroollElement.innerHTML = '<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>';
footerElem.after(scroollElement);

const scrollTop = () => {
    heroSection.scrollIntoView ( {
        behavior : "smooth"
    });
};
scroollElement.addEventListener ("click",scrollTop);

// animation number---------------------------------------------------------

const counterNum = document.querySelectorAll(".counter-number");

const speed = 1 ;

counterNum.forEach((curElem) => {
    const updateNumber = () =>{
        const targetNumber = parseInt(curElem.dataset.number);
        //console.log(targetNumber);
        const initialNum = paraseInt(currElem.innerText);

        const incrementNumber = math.trunc(targetNumber/speed);
       
        if(initialNum < targetNumber){
            currElem.innerText = initialNum + incrementNumber ;
            setTimeout(updateNumber,10);
        }
    };
    updateNumber();
});