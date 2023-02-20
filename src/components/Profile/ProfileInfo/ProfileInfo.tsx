import React from "react";
import classes from './ProfileInfo.module.css'

export const ProfileInfo =()=>{

    return(
      <div>
          <div>
              <img src="https://cdn.pixabay.com/photo/2015/09/11/08/48/banner-935470_960_720.jpg"
                   alt="logo main content"/>
          </div>
          <div className={classes.descriptionBlock}>avatar+description</div>
      </div>



    )
}