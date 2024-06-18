const Home = () => {
    const handleClick = (e) => {
        console.log('Hello, World!',e);
    }
    const handleClickAgain = (name,e) => {
        console.log(`hello ${name}`,e);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick = {handleClick}>Click Me</button>
            <button onClick = {
                (e) => {
                    handleClickAgain('ani',e);
                }
            }>Click again</button>
        </div>
     );
}
 
export default Home;