import React from "react";

const Profile = () =>{
    return(
       <div style={{ maxWidth:"700px" , margin:"0px auto"}}>
           <div style={{ 
               display:"flex",
               justifyContent:"space-around",
               margin:"18px 0px",
               borderBottom:"1px solid grey"
           }}>
               <div>
                   <img style={ {width:"160px" , height:"160px" , borderRadius:"80px"}} 
                       src="data:image/jpeg;base64,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"
                   />
               </div>

               <div>
                   <h4>neha bora</h4>
                   <div style={{
                       display:"flex",
                       justifyContent:"space-between" , 
                       width:"108%"
                   }}>
                       <h6>10 posts</h6>
                       <h6>10 follower</h6>
                       <h6>10 following</h6>
                   </div>
               </div>


           </div>
             
             <div className="gallery">
             <img className="item" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>

             <img className="item" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>

             <img className="item" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>

             <img className="item" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>

             
             

             </div>

       </div>
    )
}

export default Profile;