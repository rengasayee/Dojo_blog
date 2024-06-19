import {useState} from 'react'

const Home = () => {
    // let name = 'Ani';
    const[name, setName] = useState('Ani');
    const[age,setAge] = useState(20);

    const handleClick = () => {
        setName('Logan');
        setAge(30);
        // console.log(`${name} is ${age} years old`);
    }
    //console.log(`${name} is ${age} years old`);
    return ( 
        <div className="home">
            <p>{name} is {age} years old</p>
            <button onClick = {handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;