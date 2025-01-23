import { PulseLoader } from "react-spinners";

const Spinner = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <PulseLoader size={20} className="text-9xl" />
        </div>
    )
}

export default Spinner;
