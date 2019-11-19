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

type Props = MasterProps & LinkStateProps & LinkDispatchProps;
export const Master = (Props: Props) => {
    React.useEffect(() => {
        Props.fetch();
         
    }, []);
    console.log(Props.Data.slice(0,3));
 
 
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
