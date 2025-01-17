import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";


export const MyMeals = ({text, updatingInInput, deleteMeal}) => {
    return (
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={updatingInInput}></AiFillEdit>
            <MdDelete onClick={deleteMeal}></MdDelete>

        </div>
    ) 
}