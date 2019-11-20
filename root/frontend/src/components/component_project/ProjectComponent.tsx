import * as React from 'react';
import Gridbg from './components/Gridbg';

import {Project} from '../../reducers/reducer_data/Data';
import { selectActive } from '../../reducers/actions/AllActions'; 

import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {  bindActionCreators } from 'redux'; 
import { AllAppActions } from '../../reducers/actions/AllActionsTypes';

import styled from 'styled-components';

import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface ProjectProps{
    index:number;
    selectedProject: number;
    screenHeight: number;
    screenWidth: number;
    ratio: number;
    Project: Project
}

interface LinkDispatchProps {
    selectProject: (active: number) => void;
}
const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AllAppActions>,
    ownProps: ProjectProps
    ): LinkDispatchProps => ({
        selectProject: bindActionCreators(selectActive, dispatch) 
    });

type Props = ProjectProps & LinkDispatchProps;

const ProjectComponent=(Props: Props) =>{
 
    const handleHover = () => {
        Props.selectProject(Props.index);              
    }   

   
const [slantedVisible, setSlantedVisible] = React.useState()

React.useEffect(()=>{
    if(Props.ratio>1.98 || Props.ratio<1.88)
    setSlantedVisible(false)
    else
    setSlantedVisible(true)
},  [Props.ratio])

  const slantedSize = {
    height: "66%",     
    width: "33%", 
    transform: "rotate(45deg)",
    opacity:`${slantedVisible? "1" : "0"}`             
  }  
 
 
return (
       

    <div className="projectWrapper" onMouseOver={Props.index !== Props.selectedProject ? handleHover : null}>

    {(Props.index===Props.selectedProject)? 
        <a href={Props.Project.url} rel="noopener noreferrer" target="_blank">
            <div className={`linkWrapper linkWrapper-type${Props.index}`}> LINK </div> 
        </a> : null}
                
    {(Props.index===1 && Props.index===Props.selectedProject)? 
        <div className="passwordProvider"> 
            <h1>LOGIN: TEST | PASSWORD: 123 </h1>
        </div> : null}

    {Props.selectedProject===Props.index? 
        <div className="image-wrapper">
            <Slider speed={150} slidesToShow={1} 
            slidesToScroll={1} infinite={true} 
            dots={false} arrows={false} autoplay={true}>
                {Props.Project.images.map(el => {
                    return (
                        <img src={el.image} key={el.id} className="slider-img" />
                        )
                        })}
            </Slider>
        </div> : null }
        { (slantedVisible && Props.selectedProject===Props.Project.id )? <div className="shadowy"/> : null} 
        <div className="curtain" style={slantedVisible ? {clipPath: "polygon(0% 0%, 0% 100%,52% 100%, 26.7% 50.4%, 50% 4%,  73.4% 49.6%, 50.15% 95.3%, 46% 100%, 100% 100%, 100% 0%)"}:null}>
            <img src={Props.Project.cover[0].cover} alt=""/>
        </div>               
         
        <div style={{...slantedSize}} className="slanted-container">
            <Gridbg />
        </div>
          

           
    </div>
   
    )
}
export default connect(null, mapDispatchToProps)(ProjectComponent);