myPix = new Array("corgi-meme-king-bbt.webp","corgi-meme-king-floods.webp","corgi-meme-king-merlion.webp",)

//changement manuel
thisPic = 0
imgCt = myPix.length - 1
function chgSlide(direction) {
  if (document.images) {
     thisPic = thisPic + direction
     if (thisPic > imgCt) {
        thisPic = 0
     }
     if (thisPic < 0) {
        thisPic = imgCt
     }
     document.Puzzle.src = myPix[thisPic]
  }
}

speed = 1000;
i = 0;
function autoSlideShow(imgname) {
  if (document.images)
  {
    document.getElementById(imgname).src = myPix[i];
    i++;
    if (i > myPix.length-1) i = 0;
    b=imgname;
    objet_timer = setTimeout('autoSlideShow(b)',speed);
  }
}


function arret() {
	clearTimeout(objet_timer);
}


function preload() { 
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
  var i,j=d.MM_p.length,a=preload.arguments; for(i=0; i<a.length; i++)
  if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}