

import Gridbg from './components/Gridbg';

 

import { connect } from 'react-redux';

 

import {Project} from '../../reducers/reducer_data/Data';
 

import { ThunkDispatch } from 'redux-thunk';

import {  bindActionCreators } from 'redux';
 
 
import { AllAppActions } from '../../reducers/actions/AllActionsTypes';

import { selectActive } from '../../reducers/actions/AllActions';
import * as React from 'react';

import styled from 'styled-components';

import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface ProjectProps{
    index:number;
    selectedProject: number;
  
  
    Project?: Project
}

interface LinkDispatchProps {
    selectProject: (active: number) => void;
}
const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AllAppActions>,
    ownProps: ProjectProps): LinkDispatchProps => ({
        selectProject: bindActionCreators(selectActive, dispatch)
            
    });

type Props = ProjectProps & LinkDispatchProps;



const ProjectComponent=(Props: Props) =>{
 
 
  
    const handleHover = () => {
      
         Props.selectProject(Props.index);
     
         
    }   
  const slantedSize = {
   height: "66%",
 //   height: "73%",
      width: "33%",
    //  width: "22%",
    //   transform: "rotate(45deg)"
      transform: "rotate(45deg)"
  }
 
    return (
       
            <div className="project-wrapper" onMouseOver={Props.index!==Props.selectedProject?  handleHover : null}>
                {(Props.index===Props.selectedProject)? 
                <a href={Props.Project.url} rel="noopener noreferrer" target="_blank">
                <div className={`linkWrapper linkWrapper-type${Props.index}`}> LINK   </div> </a>
                : null}
                
            {(Props.index===1 && Props.index===Props.selectedProject) ? 
                <div className="passwordProvider"> <h1>LOGIN: TEST | PASSWORD: 123 </h1></div>
            :
            null}

                {Props.selectedProject === Props.index ? <div className="image-wrapper">

                    <Slider speed={150} slidesToShow={1} slidesToScroll={1} infinite={true} dots={false} arrows={false} autoplay={true}>
                        {Props.Project.images.map(el => {
                            return (
                                <img src={el.image} key={el.id} className="slider-img" />

                            )
                        })}
                    </Slider>
                </div> : null
     
                }
       
                
                <div className="shadowy"></div>
                <div className="curtain">
                <img src={Props.Project.cover[0].cover} alt=""/>
                </div>               
                {/* <a href={Props.Data.url}> 
                <div className={`slanted-special slanted-${Props.index}`}  />                                        
                                   
                </a>              */}
                <div 
                style={{...slantedSize}}
                className="slanted-container">

                   
                    <Gridbg />
                    
                </div>
          

            </div>
       
   
    )
}
export default connect(null, mapDispatchToProps)(ProjectComponent);