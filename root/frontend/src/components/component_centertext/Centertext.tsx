import * as React from 'react';
 
import '../../styles/CentertextStyles.scss'
import styled from 'styled-components';  
import { CSSProperties } from 'styled-components';

import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { AllAppActions } from '../../reducers/actions/AllActionsTypes';


import { UserInterface } from '../../reducers/reducer_userinterface/UserInterface';
import { Project, Assets } from '../../reducers/reducer_data/Data';
import { selectActive } from '../../reducers/actions/AllActions';
 
import Typist from 'react-typist';

 
export interface CentertextProps{
    isActivated: boolean;
    userInterface?: UserInterface;
    titles: string[];
    details: Project;
    assets: Assets;
}

 
 
interface LinkDispatchProps{
    selectProject: (active: number) => void;
}
const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AllAppActions>,
    ownProps: CentertextProps)
    : LinkDispatchProps => ({
        selectProject: bindActionCreators(selectActive, dispatch)
    });

const CentertextdDiv = styled('div')`
    box-sizing: border-box;
    overflow:hidden;
    position: fixed;
    background: black;
    color: white;
    z-index:60;
    height: 33vh;
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
                font-size: calc(1.5vw + 0.7rem);
                margin:0;
                position: fixed;
                left: 50%;
                top:0;
                transform: translateX(-50%);
                opacity: 0;
                transition: 0.5s;           
                } 
            &>h3.titleVisible{opacity:1;}    
            &>p{
                position: fixed;
                top: 30%;
                text-align: center;
                font-size: calc(0.8vw + 0.2rem); 
                opacity: 1; 
                transition: 1s;     
                margin: 0 3vw;        
                }
            &>.paragraphVisible{opacity: 1;}
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
                <h4 className="loading-data">LOADING </h4>
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
            }, [ Props.details] )
 
    const centerStyle = {
        overflow: "hidden",
        position: "fixed" as "fixed",
        background: "black",
        color: "white",
        zIndex: 60,
    } as CSSProperties
     
  const [email, showEmail] = React.useState(false);
  const toggleEmail=()=>
  {
        showEmail(true);
        setTimeout(() => 
            {
            showEmail(false)
            }
            , 3000)   
  }
  
return (
    <CentertextdDiv onMouseEnter={Props.userInterface.active!==5?  handleClick : null  }>
    
        <div className="content-wrapper">
            <div className="text-content">
                {Props.titles.map(
                    (el, index)=>{
                        return <h3 key={index} 
                    className={(index+1)===Props.userInterface.active?
                    "titleVisible" : ""}> {el}</h3>})
                }
                
                <p> 
                    <Typist key={counter+"_"+paragraphIndex}
                        onTypingDone={()=>
                            setTimeout( ()=>{
                            setParagraphIndex( (paragraphIndex + 1) % myParagraphs.length) }, 1000)}>  {myParagraphs[paragraphIndex]}. 
                    </Typist> 
                </p>
            </div>
        </div>
        <div className="centerFooter">
            <div className={`useremail 
            ${email? "" : "useremailHidden"}`}>
                <p>
                    {Props.assets.mail}  
                </p>
            </div>
            <div className="email" onClick={toggleEmail}>
                <img src={Props.assets.mailLogo} alt="" />
            </div>
            <a href={Props.assets.git} rel="noopener noreferrer" target="_blank"  >
                <div className="github">
                    <img src={Props.assets.gitLogo} alt=""/>
                </div>
            </a>
        </div>              
    </CentertextdDiv>        
    )
}

    

export default connect(null, mapDispatchToProps)(Centertext);
