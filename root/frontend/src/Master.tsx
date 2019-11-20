import * as React from "react";

import Centertext from "./components/component_centertext/Centertext";
import "./styles/MasterStyles.scss";

import ProjectComponent from "./components/component_project/ProjectComponent";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";

import { AppState } from "./reducers/ConfigureStore";
import { Project, Assets } from "./reducers/reducer_data/Data";
import { UserInterface } from "./reducers/reducer_userinterface/UserInterface";
import { AllAppActions } from "./reducers/actions/AllActionsTypes";
import { fetchBeginDispatch } from "./reducers/actions/AllActions";
import { bindActionCreators } from "redux";
 
interface LinkStateProps {
    Data: Project[];
    Userinterface: UserInterface;
    Assets: Assets;
}

const mapStateToProps = (
    state: AppState,
    ownProps: MasterProps
): LinkStateProps => ({
    Data: state.DataReducer.Projects,
    Userinterface: state.InterfaceReducer,
    Assets: state.DataReducer.Assets
    
});
interface LinkDispatchProps {
    fetch: () => void;
}
const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AllAppActions>,
    ownProps: MasterProps
): LinkDispatchProps => ({
    fetch: bindActionCreators(fetchBeginDispatch, dispatch)
});

export interface MasterProps { }
export interface MasterState {
    name?: string;
    records: Record[];
    isFetched: boolean;
}
export interface Record {
    id: number;
    title: string;
    image: string;
    video: string;
}
export interface ScreenParameters {
    height: number;
    width: number;
    ratio: number;
}
type Props = MasterProps & LinkStateProps & LinkDispatchProps;
export const Master = (Props: Props) => {
    React.useEffect(() => {
        Props.fetch();
         
    }, []);
 
    function useWindowSize() {
        const [size, setSize] = React.useState<ScreenParameters>({
            height: window.outerHeight,
            width: window.outerWidth,
            ratio: window.innerWidth / window.innerHeight
        });
        React.useLayoutEffect(() => {
            function updateSize() {
                setSize({
                    height: window.outerHeight,
                    width: window.outerWidth,
                    ratio: window.innerWidth / window.innerHeight
                })
            }
            window.addEventListener('resize', updateSize);

        }, []);
        return size
    }

    const screenSize: ScreenParameters = useWindowSize();

 if(!Props.Assets || Props.Data.length===0){
     return <h1 style={{ position: "fixed", left: "50%", top: "50%", transform: "translateX(-50%) translateY(-50%)" }}>    LOADING   </h1>   
 }
 
 
    return (
        <div className="first-div">
     
                {Props.Data.map((el, index) => {
                    return (
                        <img
                            key={index}
                            src={el.image}
                            className={`mainBackgroundImage ${
                                Props.Userinterface.active === index + 1
                                    ? "bgActive"
                                    : "bgPassive"
                                }`}
                            alt=""
                        />
                    );
                })}
            <div className="master-wrapper">
                <div className="projects-container">
                    {Props.Data.slice(0, 4).map((el, index) => {
                        return (
                            <ProjectComponent
                                key={index}
                                index={el.id}
                                selectedProject={Props.Userinterface.active}
                                Project={el}
                                screenHeight={screenSize.height }
                                screenWidth={screenSize.width}
                                ratio={screenSize.ratio}
                            />
                        );
                    })}

                    <Centertext
                        isActivated={true}
                        userInterface={Props.Userinterface}
                        details={Props.Data[Props.Userinterface.active - 1]}
                        titles={Props.Data.reduce((result, el) => { return [...result, el.title] }, [])}  
                        assets={Props.Assets}                                                                                               
                    />
                </div>
            </div>                  
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Master);
