import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

export let num = -1;

export default function Question(){
    const [questions, setQuestions] = useState([]);
    const [questionNum, setQuestionNum] = useState(0)

    const questionDbRef = collection(db, "questions");
    const dateDbRef = doc(db, "questions", "-1");

    useEffect(()=>{
        const getDateRef = async ()=> {
            try{
                const ref = await getDocs(questionDbRef);
                const needed = ref.docs.map((doc)=>({
                    ...doc.data(),
                    id: doc.id
                }));
                const short = needed[0];
                setQuestions(needed);
                setQuestionNum(short.questionRef)
                num = short.questionRef;

                const now = new Date().getTime();
                console.log("initial")

                console.log("0", short.date.seconds*1000, "1", now, "2", short.nextDate.seconds*1000)
                if (now <= short.date.seconds*1000 || now > short.nextDate.seconds*1000){
                    console.log("trigger if 1")
                    function addMonth(){
                        console.log("add month");
                        add[1] = add[1]+1
                    }

                    let add = [short.datable[0], short.datable[1], short.datable[2]]+7;

                    if(add[2]<28){console.log("no add month")}
                    else if(add[2]>=29 && add[1]===1){
                        addMonth(add[0]%4==0?29:28);
                    } else if(add[2]>=30 && (add[1]===3 || add[1]===5 || add[1]===8 || add[1]===10)){
                        addMonth(30);
                    } else{
                        addMonth(31);
                    }

                    const toSetDate = new Date(short.datable[0], short.datable[1], short.datable[2], 0, 0, 0);
                    const toSet = short.questionRef+1>needed.at(-1).id?1:short.questionRef+1;
                    await updateDoc(dateDbRef, {
                        date: short.nextDate,
                        nextDate: toSetDate,
                        datable: [
                            add[0], add[1], add[2]
                        ],
                        questionRef: toSet
                      });
                }
            } catch (err){
                console.error(err);
            }
        }
        getDateRef();
    }, [])
    console.log
    return(<div className="question-box">
        <h3>Question of the Week</h3>
        <p>{questions[questionNum]?.question}</p>
        {questions[questionNum]?.example? (<><h3>Example Response</h3><p>{questions[questionNum]?.example}</p></>): <></>}
        {questions[questionNum]?.answer? (<button onClick={() => {alert("Answer: " + questions[questionNum]?.answer)}}>Answer</button>): <></>}
    </div>)
}