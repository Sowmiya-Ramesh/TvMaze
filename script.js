var url='https://api.tvmaze.com/shows/'+15+'/episodes';
//console.log(url);

var container=document.createElement('div');      
container.setAttribute('class','container'); 

var h=document.createElement('h1');
h.innerHTML="Tv MAZE";

var row=document.createElement('row');
row.setAttribute('class','row');

fetch(url, {
    method: "GET"
    })
    .then((data) => data.json())
    .then((res) => {
        console.log(res)
  for(var i=0;i<=10;i++){  
    
   var col1=document.createElement('div');
    col1.setAttribute('class','col-12');
    var div1=document.createElement('div'); 
    div1.setAttribute('class','center');


var nam=document.createElement('span');
nam.setAttribute('class','name');
nam.innerHTML=res[i].name;

var dt=document.createElement('p');
dt.setAttribute('class','date');
dt.innerHTML="AirDate:"+" "+res[i].airdate +" "+"RunTime:"+" "+res[i].runtime;

var s=document.createElement('h6');
s.setAttribute('class','season');
s.innerHTML="Season:"+" " +res[i].season;

var img=document.createElement('img');
img.src=res[i].image.medium;
var sm=document.createElement('p');
sm.setAttribute('class','summary');

sm.innerHTML="Summary:"+res[i].summary;


var a=document.createElement('a');
a.setAttribute('href',res[i].url);
a.innerHTML="Wanna see more ?!";

div1.append(img,nam,dt,s,sm,a);
     col1.append(div1);
     row.append(col1); 
    container.append(h,row);
    document.body.append(container);

  }   
 }).catch((err)=>{
        console.log(error);
    
});
    