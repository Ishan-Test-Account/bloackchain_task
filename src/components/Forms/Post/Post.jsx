import React, { useState } from "react";
import './Forms.css';

function Post(props) {

    const [inputpost, setinputpost]=useState({
        src:"",
        alt:"",
        password:"",
    })

    function handlechange(event){
        const {name, value}=event.target;
        setinputpost(prevpost=>{
            return {
                ...prevpost,
                [name]:value,
            }
        })
    }

    function handleclick(event) {
        props.onAdd(inputpost);
        setinputpost({
            src:"",
            alt:"",
            password:"",
        })
        event.preventDefault();
    }

    return <div>
        <form>
            <input type="text" name="alt" value={inputpost.alt} placeholder="Username" onChange={handlechange} /><br />
            <input type="password" placeholder="Password" name="password" value={inputpost.password} onChange={handlechange} /><br />
            {/* <input type="file" name="src" value={inputpost.src} onChange={handlechange} /><br /> */}
            <input type="text" name="src" value={inputpost.src} placeholder="ImageURL" onChange={handlechange} />
            <input type="button" value="NFT" style={{backgroundColor: "green", color: "#fff", cursor:"pointer"}} />
            <button onClick={handleclick}>Post</button>
        </form>
    </div>
}

export default Post;