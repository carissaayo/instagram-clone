import {DUMMY_DATA} from "../utils/DUMMY_DATA";
import { useEffect, useState } from "react";
import Story from "./Story";
import {  useSession } from "next-auth/react";


const Stories = () => {
  const{session} = useSession()
  const [suggestion,setSuggestion] = useState([])
  
useEffect(()=>{
    
  setSuggestion(DUMMY_DATA);
},[])
    
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (<Story img={session.user.image}
      username={session.user.username}
      />)}
      {suggestion.map((profile) => (
        <Story
          key={profile.id}
          img={profile.img}
          username={profile.name}
          profile={profile}
        />
      ))}
    </div>
  );
}

export default Stories