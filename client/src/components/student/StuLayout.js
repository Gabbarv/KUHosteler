// manger Layout ..
import React from "react";
import {Link} from "react-router-dom"
import { signout, isAuthenticated } from "../../auth/index.js";
import '../../css/global.css'

import "../../css/student.css";

const StuLayout = ({
    className,
    children,
   history
}) => {

 const {user} = isAuthenticated();


return(

    <>   

    <div className="gradient">
    <nav className="navbar navbar-light ">
        <div className="container-fluid ">
            <h3 className="ps-5  text-white">KuHosteler</h3>
            <div className="d-flex justify-content-end"></div>
            {isAuthenticated() && (
                <Link className="nav-item ps-3 px-3 pt-1"  onClick={() => signout(() => { history.push("/auth/signin"); }) } >
                <button className="pt-1 pb-1 btn btn-outline-light fw-bold" type="submit">Signout</button>
                 </Link>
             )}          
        </div>
    </nav>

    <div className="row justify-content-center align-items-center h-100">
        <div className="bg-white shadow  overflow-hidden">
            <div className="ps-4 pt-4 pb-0 pe-4 cover">

                <div className="media align-items-end profile-head">
                    <div className="profile ps-4 pe-5 mt-5">
                        <img className="img mb-2 img-thumbnail" src="https://images.unsplash.com/photo-1422728280635-45167d8b7197?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU3fHxwZXJzb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="..." width="190" /></div>
                </div>
            </div>
            <div className=" bg-white pt-1 ">
                <div className="media-body mb-1 text-dark">
                    <h4 className="media mt-0 mb-0">{user.fname}  {user.lname}</h4>
                    <p className="small mb-4">{user.department}</p>
                </div>
            </div>
            <nav className="nav-link justify-content-center p-2 mt-5 navbar bg-dark fs-6">
                                <Link className="navbar-brand fs-6 pe-2 ps-2" to="/student/home"><span className="text1">Home</span>
                                 <span className="icon">
                                <i  className=" fa fa-home fa-md pe-2 ps-2"></i>
                                  </span></Link>
                        
                               <Link className="navbar-brand fs-6 pe-2 ps-2" to="/student/basicInfo">  
                               <span className="text1">My Profile</span>
                              <span className="icon ">
                                <i  className=" fa fa-user-circle fa-md pe-2 ps-2"></i>
                            </span></Link>
                         
                                <Link className="navbar-brand fs-6 pe-2 ps-2" to="/student/meal">
                                    <span className="text1">Meal</span>
                                    <span className="icon">
                                 <i  className=" fa fa-glass fa-md pe-2 ps-2"></i>
                             </span></Link>
                         
                               <Link className="navbar-brand fs-6 pe-2 ps-2" to="/student/guest/"><span className="text1">Add Guest</span>
                                <span className="icon">
                                 <i  className=" fa fa-user-plus fa-md pe-2 ps-2"></i>
                                </span></Link>
                           
                              <Link className="navbar-brand fs-6 pe-2 ps-2" to="/student/records"><span className="text1">Payment</span>
                              <span className="icon">
                                <i  className=" fa fa-money fa-md pe-2 ps-2"></i>
                            </span></Link>
                           {/* <li className="nav-item ps-3">
                                <Link className="nav-link fw-bold" to="#">Settings</Link>
                            </li>
                            <li className="nav-item ps-3">
                                <Link className="nav-link fw-bold" to="#">Blog</Link>
                            </li> */}
                      
                                     
                
            </nav>
        </div>
    </div>
{/* </div> */}


    <div>       
        <div className={className}>{children}</div>
    </div>
    

    </>
)};

export default StuLayout;
