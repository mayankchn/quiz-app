import {FC} from "react"

type OptionProps = {
    name:string;
    handleVal:()=>void;
}

const Option:FC<OptionProps> = ({name,handleVal}) => {
    return (
        <div onClick={handleVal}>
            {name}
        </div>
    )
}
Option.defaultProps = {};

export default Option;
