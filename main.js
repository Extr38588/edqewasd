const welcome =
  "▁ ▂ ▄ ▅ ▆ ▇ █ ಠ_ಠ 𝕟𝕠 𝕚 𝕟𝕒 𝕙𝕦𝕛 𝕥𝕦 𝕫𝕒𝕘𝕝𝕠𝕟𝕕𝕒𝕤𝕫 𝕔𝕨𝕒𝕟𝕚𝕒𝕔𝕫𝕜𝕦 ಠ_ಠ █ ▇ ▆ ▅ ▄ ▂ ▁ ";

console.log(welcome);

let degs = 0;
let y = 2;
const peepoSpin = () => {
  degs = degs + 360;

  let peepo = document.querySelector(".peepo__circle--spin");
  peepo.style.transform = `rotate(${degs}deg)`;
  //peepo.style.width = '310px';
  //peepo.style.height = '310px';

  /*
    if (peepo) {
        
        peepo.className = 'peepo__circle--spin';
    } else {
        peepo = document.querySelector('div.peepo__circle--spin');
        peepo.className = 'peepo__circle';
    }
    */
  return peepo;
};

let x = 0;

const loop = () => {
  for (let i = 0; i < 6; i++) {
    x = x + 1;
    //console.log(`x = ${x}`)
    peepoSpin();
  }
};

let clicks = 0;

let clickCount = () => {
  clicks = clicks + 1;
  //console.log(clicks);
  if (clicks === x + 6) {
    //window.setInterval(peepoSpin, 2000);
    loop();
  }
};

let clicker = document.querySelector(".peepo--js");
clicker.addEventListener("click", clickCount);

//let interval = window.setInterval(peepoSpin, 2000);

<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>

$(function(){   
  var cubuk_seviye = $(document).scrollTop();
  var header_yuksekligi = $('.yapiskan').outerHeight();

  $(window).scroll(function() {
      var kaydirma_cubugu = $(document).scrollTop();

      if (kaydirma_cubugu > header_yuksekligi){$('.yapiskan').addClass('gizle');}
      else {$('.yapiskan').removeClass('gizle');}

      if (kaydirma_cubugu > cubuk_seviye){$('.yapiskan').removeClass('sabit');}
      else {$('.yapiskan').addClass('sabit');}               

      cubuk_seviye = $(document).scrollTop();   
   });
});
