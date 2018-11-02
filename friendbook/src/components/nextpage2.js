import React from "react";
import {Link} from 'react-router-dom';
// export default class extpage2 extends React.Component{
//     render(){
//         return(
//             <div>{nexPage2}</div>
//         )
//     }
// }
 const nexPage2 = () => {
      return (
        <div className="container emp-profile">
        <h1>Friends Of User</h1>
        <form method="post">
            <div className="row">
                <div className="col-md-4">
                <div className="card">
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog' alt="" style={{width:"100%"}}/>
<h1>John Doe</h1>
<p className="title">CEO  Founder, Example</p>
<p>Harvard University</p>
<div style={{margin:" 24px 0"}}>
<i className="fa fa-dribbble"></i>
<i className="fa fa-twitter"></i>
<i className="fa fa-linkedin"></i> 
<i className="fa fa-facebook"></i>
</div>
<p><Link to="/next-page2"><button>Contact</button></Link></p>
    </div>
     </div>
     <div class="vl"></div>
                <div className="col-md-6">
                    <div className="profile-head">
                               {/* <h1>Friends Suggestion</h1> */}
                            
                               <div className="col-md-6">
                <div className="card">
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog' alt="" style={{width:"100%"}}/>
<h1>John Doe</h1>
<p className="title">CEO  Founder, Example</p>
<p>Harvard University</p>
<div style={{margin:" 24px 0"}}>
<i className="fa fa-dribbble"></i>
<i className="fa fa-twitter"></i>
<i className="fa fa-linkedin"></i> 
<i className="fa fa-facebook"></i>
</div>
<p><Link to="/next-page2"><button>Contact</button></Link></p>
    </div>
    </div>
    </div>
</div>
</div>
            <div>
                <h3>Recomondation</h3>
                <div className="container col-md-4">
                <div className="card">
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog' alt="" style={{width:"100%"}}/>
<h1>John Doe</h1>
<p className="title">CEO  Founder, Example</p>
<p>Harvard University</p>
<div style={{margin:" 24px 0"}}>
<i className="fa fa-dribbble"></i>
<i className="fa fa-twitter"></i>
<i className="fa fa-linkedin"></i> 
<i className="fa fa-facebook"></i>
</div>
<p><Link to="/next-page2"><button>Contact</button></Link></p>
</div>

    </div>
            </div>
        </form>           
    </div>
        ); 
    
 }

 export default nexPage2;
