import axios from "axios";

// const myUrl = 'https://meal-plan-backend-5tsr.onrender.com'


const getAllMeals = (setMeal) => {
    axios.get("https://meal-plan-backend-5tsr.onrender.com")
    .then(({data}) => {console.log(data)
    setMeal(data)
    })
}

const addMeal = ( title, setTitle, setMeal ) => {
    axios.post(`https://meal-plan-backend-5tsr.onrender.com/saveMeals` , {title})
    .then((data) => {
        console.log(data)
        setTitle("")
        getAllMeals(setMeal)
    })
}

const editMeal = (mealId, title, setTitle, setMeal, setEditing) => {
        axios.put(`https://meal-plan-backend-5tsr.onrender.com/editMeal`, {_id: mealId, title})
        .then((data) => {
            console.log(data)
            setTitle("")
            setEditing(false)
            getAllMeals(setMeal)
        })
}

const deleteMeal = (_id, setMeal) => {
    axios.post(`http://localhost:4000/deleteMeal` , { _id })
    .then((data) => {
        console.log(data)
        getAllMeals(setMeal)
    })
}

export { getAllMeals, addMeal, editMeal, deleteMeal };