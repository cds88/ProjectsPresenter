

import Gridbg from './components/Gridbg';

import { Record } from '../../Master';

import { connect } from 'react-redux';

import './Styles.scss';

import {Data} from '../../reducers/reducer_data/Data';
import ReactPlayer from 'react-player';

import { ThunkDispatch } from 'redux-thunk';

import { Dispatch, bindActionCreators } from 'redux';

import { UserInterface } from '../../reducers/reducer_userinterface/UserInterface';
import { AppActions } from '../../reducers/reducer_data/Actions';
import { AllAppActions } from '../../reducers/actions/AllActionsTypes';

import { selectActive } from '../../reducers/actions/AllActions';
import * as React from 'react';

import Player from './components/Player';

import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface ProjectProps{
    index:number;
    selectedProject: number;
    image?: string;
    video?: string;
    Data?:Data
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
 
    const slantedType=()=>{
        switch(Props.index){
            case 1:
                return "slanted-special slanted-A"
            case 2:
                return "slanted-special slanted-C"
            case 3:
                return "slanted-special slanted-D"
            case 4:
                return "slanted-special slanted-B"
        }
    }
    
    const player=()=>{
   
        if (Props.selectedProject===Props.index){
            return(
            <div className="video-wrapper">
               <Player url={Props.Data.video}/>  
          
            </div> 
            )
            } 
        else{
            return(
                null
            )
        }
    }
 
    const myImagesList = Props.Data.images
    const images = ()=> myImagesList.map(el=>{
            return <img src={el.image} key={el.id} className="slider-img"/>
        })
    const imageGallery = () => {
        if (Props.selectedProject === Props.index) {
            return (
                <div className="image-wrapper">

                    <Slider speed={150} slidesToShow={1} slidesToScroll={1} infinite={true} dots={false} arrows={false} autoplay={true}>
                          {images()}
                    </Slider>
                </div>
            )
        }else{
            return(
                <div className="image-wrapper">
                    <div className="single-wrapper">
                    {/* <img src={Props.Data.image} alt=""/> */}
                    </div>
                </div>
            )
        }
    }
    const handleClick = () => {
        Props.selectProject(Props.index);
       
       
    }   
 
    return (
        <div>
            <div className="project-wrapper" onMouseOver={handleClick}>
              
                <div className="curtain"></div>
                <div className={slantedType()} />
              {player()}
               
                <div className="slanted-container">
                    {imageGallery()}
                   
                    <Gridbg />
                    
                </div>

            </div>
        </div>
    )
}
export default connect(null, mapDispatchToProps)(ProjectComponent);