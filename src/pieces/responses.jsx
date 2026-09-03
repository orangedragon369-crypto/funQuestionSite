import { addDoc, collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { auth, db } from "../config/firebase"
import { num } from "./question"

export default function Responses(){
    const [responses, setResponses] = useState([])
    const [newResponse, setNewResponse] = useState("")

    const responsesList =collection(db, "responses");


    useEffect(() => {
        getResponses()
    }, []);

    const like = (id) => {
        try{
            //auth.currentUser.liked?.at(-1) = id;
        } catch (err) {
            console.log(err);
            auth.currentUser.liked = [id];
        }
    }

    const onSendResponse = async () => {
        try{
            await addDoc(responsesList, {response: newResponse, question: num, upvotes: 0, poster: auth.currentUser?auth.currentUser.displayName: "anonymouse"});
            getResponses();
        } catch (err) {
            console.error(err)
        }
    };

    const getResponses = async ()=> {
        try{
            const ref = await getDocs(responsesList);
            const needed = ref.docs.map((doc)=>({
                ...doc.data(),
                id: doc.id
            }));
            setResponses(needed);
        } catch (err){
            console.error(err);
        }
    }

    return(<div className="responses">
        <div className="form-field">
            <input placeholder="Response" onChange={(e) => {setNewResponse(e.target.value)}}></input>
            <button onClick={() => {onSendResponse()}}> Submit Response</button>
        </div>
        {responses.map((data, index) => {
            if (data.question === num){
                return(<div className="response" key={index}>
                    <span key={index}>{data.poster}: {data.response}</span>
                    <span><input checked={like(data.id)} type="checkbox" onClick={()=> like(data.id)}></input><label>like</label></span>
                </div>);
            }
        })}
    </div>)
}