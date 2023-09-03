import './App.css';
import { useEffect, useState } from 'react';

function App() {

const [tips, setTips] = useState("");

useEffect(() => {
fetchTips();
}, [])

const fetchTips = async () => {
const response = await fetch(`http://www.boredapi.com/api/activity/`);
const data = await response.json();
console.log(data.activity);
setTips(data.activity)
}


return (

<div className="App">
<h1>How to Overcome Boredom</h1>
    <div className="image">    
        <img src="https://images.unsplash.com/photo-1562823319-5287af0d1acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2NnxGem8zenVPSE42d3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt='hobby'/>
     </div>

<p> {tips} </p>
<button onClick={fetchTips}>New Tip</button>
</div>


);
}

export default App;