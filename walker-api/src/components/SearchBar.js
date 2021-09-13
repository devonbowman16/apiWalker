import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const SearchBar = () => {

    //state variable to  store categories in
    const [categories, setCategories]= useState([]);

    //state variable to store  form info collected
    const [formInfo, setFormInfo] = useState({
        category:"people",
        id: ""
    })

    //usehistory storing variable
    const history = useHistory();


    // on loading, axios retrieves the api and stores the categories to a state variable
    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(res=>{
            console.log("res looks like this -> ", res)
            setCategories(Object.keys(res.data));
        })
        .catch(err => console.log(err))
    },[])

    //OnChange Handling Function, keeps track of changing inputs in the form
    const changeHandler= (e) =>{
        console.log("Changing them inputs, baby!");
        console.log(e.target.value);
        console.log(e.target.name);
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    //Submit handler
    const submitHandler= (e)=> {
        e.preventDefault();
        console.log("form submitted!")
        console.log(formInfo);
        history.push(`/${formInfo.category}/${formInfo.id}`)
        {/*REDIRECT*/}


        // axios.get(`https://swapi.dev/api/${formInfo.category}/${formInfo.id}`)
        //     .then(res=>{
        //         console.log("THIS IS THE RES", res.data);
        //     })
        //     .catch()
        }


    return (
        <div>
            <form onSubmit= {submitHandler} className="d-flex justify-content-around" action="">
                <div className="col-auto">
                    {/*CATEGORY FORM*/}
                    <select onChange={changeHandler} name="category" id="" className="form-select">
                        {
                            categories.map((cat,i)=>{
                                return <option key={i} value ={cat}>{cat}</option>;
                            })
                        }
                    </select>
                </div>
                <div className="col-auto">
                    <h5>ID:</h5>
                </div>
                {/*NUMBER FORM*/}
                <div className="col-auto">
                    <input onChange={changeHandler} type="number" name="id" id="" className="form-control"/>
                </div>
                <div className="col-auto">
                <input className="btn btn-primary" type="submit" value="Search"/>
                </div>
            </form>
        </div>
    );
};


export default SearchBar;