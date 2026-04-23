"use client";
import { db } from "@/config/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { doc, deleteDoc } from "firebase/firestore";



export default function FeedClient({ session }) {
    const [feed, setFeed] = useState([])

    // fetch function
    const handleFetch = async () => {
        const info = []
        const querySnapshot = await getDocs(collection(db, "travel"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            const travelData = {
                id: doc.id,
                ...doc.data()
            }
            info.push(travelData)

        });
        setFeed(info)
        console.log(feed);        
    }

    // delete function
    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "travel", id));
        } catch (error) {
            console.error("Error>>>>>>>", error)
            alert("An error occurred while deleting")
        }
    }

    useEffect(() => {
        handleFetch()
    }, [feed])
    
    if (feed.length == 0) {
        return (
            <div className="flex items-center justify-center h-dvh text-gray-400">Kindly leave a review. Also tell us your experience</div>
        )
    }

    return (
        <main>
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    feed.map((item, i) => (
                        <div key={i} className="p-3 shadow-md rounded-md border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src={item.authorImg} alt={item.author.slice(0,1)} 
                                    className="w-8 h-8 rounded-full"/>
                                    <p className="text-sm">{item.author}</p>
                                </div>
                                <button onClick={()=> handleDelete(item.id)} className="bg-red-500 text-white p-2 rounded-full hover:scale-110
                                transition-all duration-200"><CiTrash /></button>
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-center font-semibold text-xl">{item.review}</h1>
                                <p className="bg-purple-300 w-fit px-3 py-1 roundd-full text-sm">{item.experience}</p>
                                
                            </div>
                            <div className="border rounded-md border-gray-300 p-2 flex items-center 
                            justify-between">
                                <p className="text-xs text-gray-500">{item.timestamp}</p>
                            </div>
                        </div>
                    ))
                }
            </section>
        </main>
    )
}