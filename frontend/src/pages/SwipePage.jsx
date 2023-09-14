import { useState } from "react";
import SwipeProfile from "../components/SwipeProfile";
import axios from "axios";
function SwipePage(prop){
    const [profiles,setProfiles] = useState([]);
let profileArr = [];
const [liked,setLiked] = useState([]);
const [trash,setTrash] = useState([]);
const [counter,setCounter] = useState(0);

loadProfiles();

    async function loadProfiles(){
        if(profiles.length<1){
                await axios.get("http://localhost:3004/getInfos" ,{params:{username: prop.username}}).then(res => { setProfiles(res.data)});
                profileArr = profiles;
        }

        profileArr = profiles;
       
     profileArr.forEach((e,index) => {
        if(e.username == prop.username){
          

           delete profileArr[index];
        
        }
     });
      
        

        const profs = document.querySelectorAll("#SwipeProfile");
        console.log("counter_ " +counter);
        profs.forEach((e,index) => {
            if(index == counter){
               e.style.display = "flex";
               
            }else{
                e.style.display = "none";
            }
        });
        
    }

    function dislike(profile){
        profileArr.forEach(e=>{
           
                console.log("in the trash can " + profile)
                profileArr.forEach(e=>{
                    if(e.username == profile){
                        console.log("in the trash can " + profile);
                        console.log(e);
                        setTrash(e);
                        
                    }
                })
                console.log("trash");
                console.log(trash);
               console.log(profileArr);
           
        })
        if(counter+2 == profileArr.length){
            setCounter(0);
        }else{
         setCounter(counter+1);   
        }

        
    }

    function like(profile){
        profileArr.forEach(e=>{
           
                console.log("in the trash can " + profile)
                profileArr.forEach(e=>{
                    if(e.username == profile){
                        console.log("in the trash can " + profile);
                        console.log(e);
                        setTrash(e);
                        
                    }
                })
                console.log("trash");
                console.log(trash);
           
        })

        setCounter(counter+1);
    }

    function swipeBack(){
       
        if(counter==0){
            setCounter(profileArr.length-2);
            console.log("broo")
        }else{
            setCounter(counter-1);
        }
    }
    return <div id="SwipePage">
      { profileArr.map(profs => <SwipeProfile id={counter} swipeBack={swipeBack} dislike={dislike} username={profs.username} key={profs._id}> </SwipeProfile>)}
       
    </div>
}

export default SwipePage;