import React,{Component} from "react";
import Lottie from "react-lottie"
import Animzigzag  from "../lottie/datazig.json"
class Loading extends Component{
    render(){
    const defaultanimation={
        loop:true,
        autoplay:true,
        animationData:Animzigzag,
        renderSettings:{
            preserveAspectRatio:'xMidYmid slice'
        }

    };
    
    return(
        <div>
        <div className=" uk-heading-normal uk-text-normal uk-text-center">
        <Lottie options={defaultanimation}
        height={500}
        widht={500}
        ></Lottie>Loading
        </div>
    </div>);
    }
};

export default Loading;