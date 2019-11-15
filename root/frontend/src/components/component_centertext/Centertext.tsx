import * as React from 'react';
 
import '../../styles/CentertextStyles.scss';
 

import { connect } from 'react-redux';

 

import { ThunkDispatch } from 'redux-thunk';

import {   bindActionCreators } from 'redux';

import { UserInterface } from '../../reducers/reducer_userinterface/UserInterface';
 
import { AllAppActions } from '../../reducers/actions/AllActionsTypes';
import { Data } from '../../reducers/reducer_data/Data';
import { selectActive } from '../../reducers/actions/AllActions';
 
import Typist from 'react-typist';
 
export interface CentertextProps{
    
    isActivated: boolean;
    userInterface?: UserInterface;
    titles: string[];
    details: Data
 

}

 
 
interface LinkDispatchProps {
    selectProject: (active: number) => void;
}
const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AllAppActions>,
    ownProps: CentertextProps): LinkDispatchProps => ({
        selectProject: bindActionCreators(selectActive, dispatch)

    });

type Props = CentertextProps & LinkDispatchProps;


const Centertext=(Props:Props) =>{
    
    const handleClick = () => {
        Props.selectProject(5);
    }
    

    if(!Props.details){
        return(
            <div className="center-text center-loading"> 
            <h4 className="loading-data">LOADING 
                </h4>
            </div>
        )
    }
    console.log(Props.userInterface.active);
    const [counter, setCounter ] = React.useState(0)
     const myParagraphs = Props.details.textcontent.split('.')
        const [paragraphIndex, setParagraphIndex] = React.useState(0);
 
        React.useEffect(
            ()=>{   
               
                setCounter(counter + 1);
                setParagraphIndex(0);
            }
            , [ Props.details] )
 
 
    return (
        <div className="center-text" onMouseOver={handleClick}>
            <div className="content-wrapper">

                <div className="text-content">
           
                    {Props.titles.map(
                        (el, index)=>{return <h3 
                            key={index} className={(index+1)===Props.userInterface.active? 
                    "titleVisible" : ""}> {el}</h3>}
                        
                        
                        )
                        
                        }

                    <p> 
        <Typist key={counter+"_"+paragraphIndex}
                            onTypingDone={()=>
                                setTimeout( ()=>{
                            setParagraphIndex( (paragraphIndex + 1) % myParagraphs.length) }, 1000)
                            
                        } >  {myParagraphs[paragraphIndex]}. 
                        </Typist> </p>
  
          
                                    
                                    
                
                </div>
            </div>
            <div className="centerFooter">
                <div className="email">
                    <img src="https://www.stickpng.com/assets/images/584856b4e0bb315b0f7675ac.png" alt="" />
                </div>
                <a href="https://github.com/cds88">
                <div className="github">
                   
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSM2zjm1dX5GI-hVrQBAKzB8YfNO8WSVbL_cWUTCwyq2oF98Ahvg&s" alt=""/>
                    
                </div>
                </a>
                </div>
              

          


        </div>
    )



}

     


export default connect(null, mapDispatchToProps)(Centertext);










// const myParagraphs = Props.details.textcontent.split('.')
// const [paragraphIndex, setParagraphIndex] = React.useState(0);



// React.useEffect(
//     () => {
//         let interval = setInterval(() => {
//             setParagraphIndex((paragraphIndex + 1) % myParagraphs.length);
//             clearInterval(interval);

//         }, 7000)
//     })






// {
//     myParagraphs.map(
//         (el, index) => {
//             return <p
//                 key={index}
//                 className={index === paragraphIndex ? "paragraphVisible" : ""}>
//                 <Typist> {el} </Typist></p>


//         })
// }



// React.useEffect(
//     () => {
//         let interval = setInterval(() => {
//             setParagraphIndex((paragraphIndex + 1) % myParagraphs.length);
//             // clearInterval(interval);

//         }, 4000);
//         return () => {
//             clearInterval(interval)
//         }
//     })