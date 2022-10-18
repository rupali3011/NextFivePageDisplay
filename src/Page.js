import {useState} from "react";

function Page(){
    const[no,setno]=useState([1,2,3,4,5]); 
    return(
        <>
        <div>
        <div>
            {no.map((it)=>{
                return <p key={it}>{it}</p>
            })}
            </div>
            <button disabled={no[0]<6?true:false}  onClick={()=>{
                const prevno=no.map((it)=>{
                    return it-5; 
                });
                setno(prevno);
            }}>Prev Page</button>
            <button onClick={()=>{
             const nextno=no.map((it)=>{
                return it+5;
              });
                 setno(nextno);
            }}>Next Page</button>
            </div>
        </>
    )
}
export default Page;