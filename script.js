console.log("chl bhi rha hai ya nhi")
// Initialize the variable
let songIndex=0;
let audioElement=new Audio('1.mp3');
let mainPlay=document.getElementById('mainPlay');
let myProgessBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItem=Array.from(document.getElementsByClassName("songItem"));    // due to this is html collection

let songs=[                                   /* array of object*/
    {songName: " Arrogant-A.P Dhillon ",            filepath:"1.mp3",               coverPath:"1.jpg"},
    {songName: "Lover-Dijlit Dosanjh",              filepath:"2.mp3",               coverPath:"2.jpg"},
    {songName: "Chanel No 5-Dijlit Dosanjh",        filepath:"3.mp3",               coverPath:"3.jpg"},
    {songName: "Excuses-A.P Dhillon",               filepath:"4.mp3",               coverPath:"4.jpg"},
    {songName: "Majhail",                           filepath:"5.mp3",               coverPath:"5.jpg"},
    {songName: "Toxic",                             filepath:"6.mp3",               coverPath:"6.jpg"},
    {songName: "Saada Pyaar",                       filepath:"7.mp3",               coverPath:"7.jpg"},
    {songName: "G.O.A.T",                           filepath:"8.mp3",               coverPath:"8.jpg"},
]
songItem.forEach((element,i)=>
{
//console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

//audioElement.play();
//to handle play/pause click
mainPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement<=0)
    {
        audioElement.play();
        mainPlay.classList.remove('fa-play-circle');     /* to remove the stop icon(class)*/
        mainPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else 
    {
        audioElement.pause();
        mainPlay.classList.remove('fa-pause-circle');
        mainPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

})
 
// Listen to Events
// seekbar change krega through audio
audioElement.addEventListener('timeupdate',()=>{       /* time is update when audio is play*/
    //console.log('timeupdate');
    // update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   // console.log(progress);
    myProgessBar.value=progress;
})
// go to that second when we change seekbar by itself
myProgessBar.addEventListener('change',()=>{
    
    audioElement.currentTime=myProgessBar.value*audioElement.duration/100;

})
const makeAllPlays=()=>{
 Array.from(document.getElementsByClassName('playthisitem')).forEach((element)=>{
    element.classList.add('fa-play-circle');
     element.classList.remove('fa-pause-circle');
 })
}

// when we click on any song 
Array.from(document.getElementsByClassName('playthisitem')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    console.log(e.target);  // ise vo element jispe click hua
    makeAllPlays();
    songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src=`${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;        // taaki vo gaana shuru se chle
    audioElement.play();
    gif.style.opacity=1;
    mainPlay.classList.remove('fa-play-circle');
    mainPlay.classList.add('fa-pause-circle');
});
});

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1)
    {
        songIndex=8;
    }
    else 
    {
        songIndex--;
    }
    audioElement.src=`${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;   // taaki vo gaana shuru se chle
    audioElement.play();
    gif.style.opacity=1;
    mainPlay.classList.remove('fa-play-circle');
    mainPlay.classList.add('fa-pause-circle');

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8)
    {
        songIndex=1;
    }
    else 
    {
        songIndex++;
    }
    audioElement.src=`${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;   // taaki vo gaana shuru se chle
    audioElement.play();
    gif.style.opacity=1;
    mainPlay.classList.remove('fa-play-circle');
    mainPlay.classList.add('fa-pause-circle');
})
