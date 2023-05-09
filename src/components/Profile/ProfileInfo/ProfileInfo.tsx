import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";

export const ProfileInfo =(props:any)=>{
    if(!props.profile){
        return <Preloader/>
    }

    return(
      <div>
          <div>
              <img src="https://cdn.pixabay.com/photo/2015/09/11/08/48/banner-935470_960_720.jpg"
                   alt="logo main content"/>
          </div>
          <div className={classes.descriptionBlock}>
              <img src={props.profile.photos.large} alt='profile photo'/>
              avatar+description
          </div>
      </div>



    )
}