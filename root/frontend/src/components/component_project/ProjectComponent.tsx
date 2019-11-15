

import Gridbg from './components/Gridbg';

 

import { connect } from 'react-redux';

 

import {Data} from '../../reducers/reducer_data/Data';
 

import { ThunkDispatch } from 'redux-thunk';

import {  bindActionCreators } from 'redux';
 
 
import { AllAppActions } from '../../reducers/actions/AllActionsTypes';

import { selectActive } from '../../reducers/actions/AllActions';
import * as React from 'react';

 

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
 
 
  
    const handleHover = () => {
        Props.selectProject(Props.index);
     
    }   
    return (
       
            <div className="project-wrapper" onMouseOver={handleHover}>
                {(Props.index===Props.selectedProject)? 
            <div className={`linkWrapper linkWrapper-type${Props.index}`}> <a href={Props.Data.url} rel="noopener noreferrer" target="_blank">LINK</a>   </div> : null}
                
            {(Props.index===1 && Props.index===Props.selectedProject) ? 
                <div className="passwordProvider"> <h1>LOGIN: TEST | PASSWORD: 123 </h1></div>
            :
            null}

                {Props.selectedProject === Props.index ? <div className="image-wrapper">

                    <Slider speed={150} slidesToShow={1} slidesToScroll={1} infinite={true} dots={false} arrows={false} autoplay={true}>
                        {Props.Data.images.map(el => {
                            return (
                                <img src={el.image} key={el.id} className="slider-img" />

                            )
                        })}
                    </Slider>
                </div> : null
     
                }
       
                
                <div className="shadowy"></div>
                <div className="curtain">
                    <img src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/>
                </div>               
                {/* <a href={Props.Data.url}> 
                <div className={`slanted-special slanted-${Props.index}`}  />                                        
                                   
                </a>              */}
                <div className="slanted-container">

                   
                    <Gridbg />
                    
                </div>
          

            </div>
       
   
    )
}
export default connect(null, mapDispatchToProps)(ProjectComponent);