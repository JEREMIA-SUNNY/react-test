import pic from "./jerry.jpg";
import pic1 from "./jerry1.jpg";
import pic2 from "./jerry2.JPG";
import pic3 from "./jerry3.jpg";
import pic4 from "./jerry5.jpg";
const   Gallery= () => {
//<div class="card">
//<img src={pic} >
//<div class="container">
 // <h4><b>John Doe</b></h4> 
 // <p>Architect  Engineer</p> 
//</div>
//</img></div>

    return ( 
<div className="images">



            <div className="card">
             <img src={pic} alt="Contain"  style={{width:"100%"}}/>
                    <div class="container">
                        <h4><b>jerry mon </b></h4> 
                     <p>His powerfull tool</p> 
                    </div>
            </div>
            
            <div className="card">
             <img src={pic1} alt="Contain"  style={{width:"100%"}}/>
                    <div class="container">
                        <h4><b>jerry mon </b></h4> 
                     <p>He is smart</p> 
                    </div>
            </div>
            <div className="card">
             <img src={pic2} alt="Contain"  style={{width:"100%"}}/>
                    <div class="container">
                        <h4><b>jerry mon </b></h4> 
                     <p>kind</p> 
                    </div>
            </div>
            <div className="card">
             <img src={pic3} alt="Contain"  style={{width:"100%"}}/>
                    <div class="container">
                        <h4><b>jerry mon </b></h4> 
                     <p>cute</p> 
                    </div>
            </div>
            <div className="card">
             <img src={pic4} alt="Contain"  style={{width:"100%"}}/>
                    <div class="container">
                        <h4><b>jerry mon </b></h4> 
                     <p>super cool</p> 
                    </div>
            </div>
        </div>
     );
}
 
export default Gallery ;