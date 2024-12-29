import { useEffect } from "react";

export default function Key({sound, name, letter}){
    useEffect(()=>{

        document.addEventListener("keydown",(event)=>{
            if(event.key === letter){
                new Audio(sound).play();
            }
        })

    },[])  
    
    
    return(
        <div className="key">
            <span>{letter}</span>
        </div>
    );
} 