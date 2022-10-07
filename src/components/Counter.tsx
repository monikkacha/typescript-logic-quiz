import { useSelector } from "react-redux";
import { State } from "../redux/store";

const Counter = () => {
    const data = useSelector((state: State) => state.reducer);
    return (
        <div className='absolute top-4 right-4'>
            <div className='text-4xl'>
                <span className='mr-2 text-gray-700'>
                    {data.rightAnswer}
                </span>
                /
                <span className='font-semibold ml-2'>
                    5
                </span>
            </div>
        </div>
    )
}

export default Counter