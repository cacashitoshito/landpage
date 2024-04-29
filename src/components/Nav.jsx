import React from "react";
import {Link} from "react-router-dom"
import { BrowserRouter } from "react-router-dom";


function Nav(){
    return(
        <>
<div className="header">
<div className="logo">
<h2>C<span>S</span></h2>
</div>
<ul>
<BrowserRouter>
    <li><a  className="Link" href="#">Home</a></li>
    <li><a className="Link" href="#">Product</a></li>
    <li><a className="Link" href="#">About</a></li>
    <li><a className="Link" href="#">Contact</a></li>
    </BrowserRouter>
</ul>

</div>
        </>
    )
}

export default Nav;