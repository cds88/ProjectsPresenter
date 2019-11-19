import * as React from 'react';
 
import '../../styles/CentertextStyles.scss';
 

import { connect } from 'react-redux';

import styled from 'styled-components'; 

import { ThunkDispatch } from 'redux-thunk';

import {   bindActionCreators } from 'redux';

import { UserInterface } from '../../reducers/reducer_userinterface/UserInterface';
 
import { AllAppActions } from '../../reducers/actions/AllActionsTypes';
import { Project, Assets } from '../../reducers/reducer_data/Data';
import { selectActive } from '../../reducers/actions/AllActions';
 
import Typist from 'react-typist';
import { CSSProperties } from 'styled-components';
 
export interface CentertextProps{
    
    isActivated: boolean;
    userInterface?: UserInterface;
    titles: string[];
    details: Project;
    assets: Assets;
    
 

}

 
 
interface LinkDispatchProps {
    selectProject: (active: number) => void;
}
const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AllAppActions>,
    ownProps: CentertextProps): LinkDispatchProps => ({
        selectProject: bindActionCreators(selectActive, dispatch)

    });


const CentertextdDiv = styled('div')`
          overflow:hidden;
    position: fixed;
    background: black;
   color: white;
         z-index:60;
 
    height: 31vh;
       width: 25vw;
    left:50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    border: 2px solid white;    
    
 
             font-family: 'Slabo 27px', serif;
 &:hover{
            background: #202020;
  
    }
    &>.content-wrapper{
      
        position: relative;
        
      
        &>.text-content{
            width:100%;
            height:100%;
            
            position: relative;
            &>h3{
               clear:both;
                font-size: 3em;
                margin:0;
                position: fixed;
                left: 50%;
                top:0;
                transform: translateX(-50%);
                opacity: 0;
            transition: 0.5s;            } 
            &>h3.titleVisible{opacity:1;}    
            &>p{
                position: fixed;
                top: 40%;
                text-align: center;
                font-size: calc(0.5vw + 0.5rem); 
                opacity: 1; 
                transition: 1s;     
                margin: 0 30px;
                


            }
            &>.paragraphVisible{

                 opacity: 1;

            }                                                 
  
        }

        }
    `


type Props = CentertextProps & LinkDispatchProps;


const Centertext=(Props:Props) =>{
    

    const handleClick = () => {
        Props.selectProject(5);
           
        
        
    }
    

    if(!Props.details ){
        return(
            <div className="center-text center-loading"> 
            <h4 className="loading-data">LOADING 
                </h4>
            </div>
        )
    }
   
    const [counter, setCounter ] = React.useState(0)
     const myParagraphs = Props.details.textcontent.split('.')
        const [paragraphIndex, setParagraphIndex] = React.useState(0);
 
        React.useEffect(
            ()=>{   
               
                setCounter(counter + 1);
                setParagraphIndex(0);
            }
            , [ Props.details] )
 
    const centerStyle = {
        overflow: "hidden",
        position: "fixed" as "fixed",
        background: "black",
        color: "white",
        zIndex: 60,


    } as CSSProperties
     
   
  console.log(Props.assets);
    return (
        <CentertextdDiv onMouseEnter={Props.userInterface.active!==5?  handleClick : null  }>
        {/* <div className="center-text" onMouseOver={handleClick}> */}
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
                    <img src={Props.assets.mailLogo} alt="" />
                </div>
                <a href={Props.assets.git} rel="noopener noreferrer" target="_blank">
                <div className="github">
                   
                    <img src={Props.assets.gitLogo} alt=""/>
                    
                </div>
                </a>
                </div>
              

          

        </CentertextdDiv>
        // </div>
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