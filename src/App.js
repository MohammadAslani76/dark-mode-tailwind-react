import {useState,useEffect} from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
    const getMode = () => {
        const initialMode = localStorage.getItem("mode");
        if (initialMode === null){
            if (window.matchMedia("(prefers-color-scheme :dark)").matches) {
                return true;
            } else {
                return false;
            }
        }else {
            return JSON.parse(localStorage.getItem("mode"));
        }
    }
    const [dark,setDark] = useState(getMode())
    useEffect(() => {
        localStorage.setItem("mode",JSON.stringify(dark))
    },[dark])

  return (
    <div className={dark ? "dark" : null}>
        <div className="min-h-screen dark:bg-sky-900">
            <Navbar dark={dark} setDark={setDark}/>
            <Main dark={dark}/>
        </div>
    </div>
  );
}

export default App;
