function getClass(myclass) {
    var myclasses = [],
        htmlnodes = document.getElementsByTagName("*");
    for ( var c = 0; c < htmlnodes.length; c ++ ) {
        if (htmlnodes[c].className == myclass) {
            myclasses.push(htmlnodes[c]);
        }
    }
    return myclasses;
}
var seg = getClass("segment"),
    cl = false;
//初始状态
function init() {
    seg[0].setAttribute("class","segment showIt");
    seg[0].style.backgroundColor = "cyan";
    document.mounsewheel = giveNum(0);
}
init();
//改变页码
function setShowPage(anum) {
    for (var s = 0; s < seg.length; s ++) {
        seg[s].setAttribute("class","segment");
    }
    seg[anum].setAttribute("class","segment showIt");
    var clrs = ["cyan","lightblue","orange","wheat","#98AFC7","#eee8cd"],
        thisColor = clrs[Math.floor(Math.random() * clrs.length)];
    
    seg[anum].style.backgroundColor = thisColor;
}
//点击改变
(function getAnc() {
    var ancList = document.getElementById("anchor"),
        ancs = ancList.getElementsByTagName("ul")[0].getElementsByTagName("li");
    for (var i = 0; i < ancs.length; i ++) {
        ancs[i].onclick = function () {
            cl = true;
            var ancNum = this.getAttribute("anc");
            setShowPage(ancNum);
            giveNum(ancNum);
        }
    }
})();
//滚轮改变
function giveNum(gnum) {
    document.onmousewheel = function (event) {
        if (event.wheelDelta < 0) {
            if (gnum < seg.length - 1) {
                gnum ++;
            } else {
                gnum = 0;
            }
        } else {
            if (gnum > 0) {
                gnum --;
            } else {
                gnum = seg.length - 1;
            }
        }
        //console.log(gnum);
        setShowPage(gnum);
    }    
}