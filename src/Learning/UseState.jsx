import {useState} from "react";

function UseState(){
    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);


    return(
        <div>
            <p>{name ? `Name: ${name}` : "No name set yet"}</p>
            <button onClick={() => setName("Juwon")}>Set Name</button>

            <p>{age ? `Age: ${age}` : "No Age set yet"}</p>
            <button onClick={() => setAge(age + 1)}>Increment Age</button>

            <p>{isEmployed ? `Is employed: Yes` : `Is employed: No`}</p>
            <button onClick={() => setIsEmployed(!isEmployed)}>Toggle Status</button>
        </div>
    );
}

export default UseState;