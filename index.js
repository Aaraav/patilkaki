var circle=document.querySelector(".circle");
  

function cursor(){
  

  document.querySelector("body").addEventListener("mousemove",function(dets){
    gsap.to(circle,{
x:dets.x,
y:dets.y
    })
  })

}


cursor();


function animate0(){
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.to("#page0",{
      opacity:0,
      duration:2,
      delay:2,
     
      scrub:3
    })
  }
  animate0();

  function animate0text(){
    gsap.to("#page0 h1",{
      x:-60,
      opacity:1,
      duration:0.5,
      stagger:1
    })
  }
  animate0text();

const timer = () => {
    let timeInSeconds = 600; 
  
    const timerElement = document.getElementById('timer');
  
    const countdown = setInterval(updateTimer, 1000);
  
    function updateTimer() {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
  
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  
        if (timeInSeconds === 0) {
            clearInterval(countdown); 
            alert('Time"s up!'); 
        } else {
            timeInSeconds--;
        }
    }
};

const form = () => {
    const fr = document.getElementById('form');
    const why = document.querySelector('.why');

    gsap.set(fr, { opacity: 0, x: '-20vw' });

    setTimeout(() => {
        gsap.to(fr, {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: why,
                start: 'top 80%',
                end: 'top 20%',
            }
        });
    }, 15000); 
};

timer();
form();
