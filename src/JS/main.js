import bmdimg from "../img/bmd-word-2.png";


let tbox = document.getElementById("tbox");
let titlebox = tbox.querySelectorAll(".bmdlogo, .bmdsymbol");
tbox.appendChild(createImg());

let bmdsymbol = tbox.querySelector(".bmdsymbol");

//let winwidth = window.innerWidth;
bmdsymbol.onclick = function () {
    location.href = "/home.html";
};

titlebox[0].onclick = function () {
  location.href = "/home.html";
};

let newimg;

/* mouseover */
let jitterG = tbox.addEventListener("mouseover", e => jitter(), false); 

/* mouseleave */
let noJitterG = tbox.addEventListener("mouseleave", e => noJitter(), false);

  


/* everytime the mouse runs over the "tbox" div it runs the jitter() */
    function jitter(){
      let visit = tbox.childElementCount;
      let limitimg = 6;  
        if(visit < limitimg){
          tbox.appendChild(createImg(`${random(-50, 950)}px`));
          console.log("one mo' gen");
        }
        //if window size is > 577px then disable jitterG
      setRandomTranslate3d(titlebox); 
  }

    function noJitter(){
      tbox.querySelectorAll("*").forEach((img,i)=>{
        if (i !== 0 && img !== bmdsymbol){
          img.remove(img);  
        } 
      }
    )
    console.log("deleted");
  }

    function createImg(randomPX){
      newimg = new Image()
      newimg.src = bmdimg;
      newimg.classList.add("bmdlogo");
      newimg.style.marginLeft = `${randomPX}`
      newimg.style.marginLeft = `${randomPX}`
      newimg.style.transform = `translate3d(${randomPX}px, ${randomPX}px, 0)`
      newimg.setAttribute('id', "bmdl");
      return newimg;
  }

     function setRandomTranslate3d(titlebox) {
      titlebox.forEach(function(t) {
        let x = random(2,1100);
        let y = random(2,1100);
        t.style.transform = "translate3d(${x}px, ${y}px, 0"
      })
  }

    function random(min,max){
      const num = Math.floor(Math.random()*(max-min)) + min; 
      return num;
  }
  

    // console.log(titlebox);
    // console.log(tbox.childNodes[2]);   
    // console.log(createImg);
    // console.log("Number of imgs in tbox:" + " ", tbox.childElementCount);
    // console.log(random(3, 50));