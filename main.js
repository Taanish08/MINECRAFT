var canvas=new fabric.Canvas('myCanvas');

playerx=10;
playery=10;
blockwidth=30;
blockheight=30;
var player_object="";
var block_object="";

function updateforplayer() {
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playery,
            left:playerx
        });
        canvas.add(player_object);
    });
}
function updateforblocks(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(blockwidth);
        block_object.scaleToHeight(blockheight);
        block_object.set({
            top:playery,
            left:playerx
        });
        canvas.add(block_object);

    });
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e) {

keypressed= e.keyCode;

console.log(keypressed);

if(e.shiftkey==true && keypressed=='80') {
    console.log("p and shiftkey press");
blockwidth=blockwidth+10;
blockheight=blockheight+10;
document.getElementById("cureentwidth").innerHTML=blockwidth;
document.getElementById("cureentheight").innerHTML=blockheight;
}

if(e.shiftkey==true && keypressed=='78') {
console.log("n and shiftkey press");
    blockwidth=blockwidth-10;
blockheight=blockheight-10;
document.getElementById("cureentwidth").innerHTML=blockwidth; 
document.getElementById("cureentheight").innerHTML=blockheight;

}

if(keypressed=='67') {
    updateforblocks('cloud.jpg');
    console.log('c');
    
}

if(keypressed=='71') {
    updateforblocks('ground.png');
    console.log('g');
    
}

if(keypressed=='68') {
    updateforblocks('dark_green.png');
    console.log('d');
    
}

if(keypressed=='76') {
    updateforblocks('light_green.png');
    console.log('l');
    
}

if(keypressed=='82') {
    updateforblocks('roof.jpg');
    console.log('r');
    
}

if(keypressed=='84') {
    updateforblocks('trunk.jpg');
    console.log('taanish');
    
}

if(keypressed=='85') {
    updateforblocks('unique.png');
    console.log('u');
    
}

if(keypressed=='89') {
    updateforblocks('yellow_wall.png');
    console.log('c');
    
}

if(keypressed=='87') {
    updateforblocks('wall.jpg');
    console.log('w');
    
}





}
