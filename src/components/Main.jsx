import React from "react";

export default function Main(){
    const logo="img-1-removebg-preview (1).png";
    const imageAltText="deku-logo";
    return(
    <main className="container">
<div className="main">

     <div className="body-left">
       <h1>
       My Hero Academia
        </h1>
<p className="para">
Middle school student Izuku Midoriya wants to be a hero
<p> more than anything, but he hasn’t got an ounce of power in him.</p>
<p>With no chance of ever getting into the prestigious U.A. High School for budding heroes, </p>
<p>his life is looking more and more like a dead end. Then an encounter with All Might, </p>
<p>the greatest hero of them all, gives him a chance to change his destiny</p>

</p>


<div className="w-btn">
    <button className="btn1">Rate</button>
    <button className="btn2">Genre</button>
</div>
<p>availbe on </p>


<div className="ott">
<img className="img2" src="OIP-removebg-preview.png" />
<img className="img1" src="OIP__1_-removebg-preview.png" />
   
  
     
</div>
    </div>


    
<div className="body-right">
 <img  src={logo} alt={imageAltText} width="400" height="400" />
 

    </div>
</div>

</main>
    );
};