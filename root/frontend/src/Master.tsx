import * as React from "react";

import Centertext from "./components/component_centertext/Centertext";
import "./styles/MasterStyles.scss";

import ProjectComponent from "./components/component_project/ProjectComponent";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";

import { AppState } from "./reducers/ConfigureStore";
import { Data } from "./reducers/reducer_data/Data";
import { UserInterface } from "./reducers/reducer_userinterface/UserInterface";
import { AllAppActions } from "./reducers/actions/AllActionsTypes";
import { fetchBeginDispatch } from "./reducers/actions/AllActions";
import { bindActionCreators } from "redux";
interface LinkStateProps {
    Data: Data[];
    Userinterface: UserInterface;
}

const mapStateToProps = (
    state: AppState,
    ownProps: MasterProps
): LinkStateProps => ({
    Data: state.DataReducer,
    Userinterface: state.InterfaceReducer
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
        document.body.addEventListener("wheel", e => {
            if (e.ctrlKey) {
                e.preventDefault();
            }
        });
    }, []);

    return (
        <div className="first-div">
            <div className="master-wrapper">
                {Props.Data.map((el, index) => {
                    return (
                        <img
                            key={index}
                            src={el.image}
                            className={`background-GG ${
                                Props.Userinterface.active === index + 1
                                    ? "bgActive"
                                    : "bgPassive"
                                }`}
                            alt=""
                        />
                    );
                })}

                <div className="projects-container">
                    {Props.Data.map((el, index) => {
                        return (
                            <ProjectComponent
                                key={index}
                                index={el.id}
                                selectedProject={Props.Userinterface.active}
                                Data={el}
                            />
                        );
                    })}

                    <Centertext
                        isActivated={true}
                        userInterface={Props.Userinterface}
                        details={Props.Data[Props.Userinterface.active - 1]}
                        titles={Props.Data.reduce((result, el)=>{return [...result,el.title] }, [] )  }
                    />
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Master);
