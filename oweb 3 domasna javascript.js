<script type="text/javascript">
var cekzelka;
var cekzajak;
var timer=1;
var broj=1;
var pozicijazajak=1;
var pozicijazelka=1;
var b1=pozicijazajak;
var b2=pozicijazelka;
function mrdni()
{
    broj=Math.floor(Math.random() * 11);
    if(broj==1 || broj==2)
    {
        document.querySelector("#i1").style.top= 100 + "px";
        document.querySelector("#i2").style.top= 200 + "px";
        pozicijazajak=pozicijazajak+3
        pozicijazelka=pozicijazelka+1
    }
    if(broj==3 || broj==4)
    {
        document.querySelector("#i1").style.top= 400 + "px";
        document.querySelector("#i2").style.top= 100 + "px";
        pozicijazajak=pozicijazajak+4
        pozicijazelka=pozicijazelka+3
    }
    if(broj==5 || broj==6)
    {
        document.querySelector("#i1").style.top= 300 + "px";
        document.querySelector("#i2").style.top= 400 + "px";
        pozicijazajak=pozicijazajak+2
        pozicijazelka=pozicijazelka+4
    }
    if(broj==7 || broj==8)
    {
        document.querySelector("#i1").style.top= 100 + "px";
        document.querySelector("#i2").style.top= 500 + "px";
        pozicijazajak=pozicijazajak+3
        pozicijazelka=pozicijazelka+5
    }
    if(broj==9 || broj==10)
    {
        document.querySelector("#i1").style.top= 200 + "px";
        document.querySelector("#i2").style.top= 200 + "px";
        pozicijazajak=pozicijazajak+2
        pozicijazelka=pozicijazelka+2
    }
    if(pozicijazajak>70)
    {
        window.alert("zajakot pobbedi");
    }
    if(pozicijazelka>70)
    {
        window.alert("zelkata pobedi");
    }
    if(pozicijazajak==pozicijazelka)
    {
        window.alert("ouch")
    }
    timer=timer+1;
}

</script> 