import { FC } from "react"
import {GiSpinningBlades} from "react-icons/gi"

type LoadingPageProps = {}

const LoadingPage:FC<LoadingPageProps> = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <GiSpinningBlades className="font-bold text-3xl text-gray-500 animate-spin"></GiSpinningBlades>
        </div>
    )
}
LoadingPage.defaultProps={}
export default LoadingPage