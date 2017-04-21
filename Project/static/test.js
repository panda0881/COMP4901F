/**
 * Created by jing on 2/24/17.
 */
var curIndex=0;
//时间间隔(单位毫秒)，每秒钟显示一张，数组共有5张图片放在Photos文件夹下。图片路径可以是绝对路径或者相对路径
var timeInterval=5000; //时间5秒
var arr=new Array();
arr[0]="images/DataJ-JMSC-Ad.jpg";
arr[1]="images/images.jpeg";
arr[2]="static/System/index-page.jpg";
var act=new Array();
setInterval(changeImg,timeInterval);
function changeImg()
{
    var obj=document.getElementById("obj");
    if (curIndex==arr.length-1)
    {
        curIndex=0;
    }
    else
    {
        curIndex+=1;
    }
    obj.src=arr[curIndex];
    if(curIndex==0){act[0]="active";act[2]=""}
    else if(curIndex==1){act[0]=""; act[1]="active"}
    else if(curIndex==2){act[1]=""; act[2]="active"}
}

function first() {
    var obj=document.getElementById("obj");
    obj.src=arr[0];
    curIndex=0;
}

function second(){
    var obj=document.getElementById("obj");
    obj.src=arr[1];
    curIndex=1;
}

function third(){
    var obj=document.getElementById("obj");
    obj.src=arr[2];
    curIndex=2;
}