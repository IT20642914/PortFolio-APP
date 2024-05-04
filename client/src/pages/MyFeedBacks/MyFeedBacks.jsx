import React from 'react'
import Styles from './MyFeedBacks.module.scss'
import FeedbackManagementTable from '../../components/FeedbackManagementTable/FeedbackManagementTable'
import { useState } from 'react'
import { FeedBackService } from '../../Services/feedBack.Service'
import { toast } from 'react-toastify'
import { SCREEN_MODES } from '../../utilities/app.constants'
import { useEffect } from 'react'
const MyFeedBacks = () => {

    const [feedbacks, setFeedbacks] = useState([ ]);

    
    useEffect(() => {

        initialDataLoad()

    }, []);
    const initialDataLoad=(async()=>{
                // Get the user object from local storage
const userString = localStorage.getItem('user');
const user = JSON.parse(userString);
const userId = user._id;


        FeedBackService.getFeedbacksByLoginUser(userId).then((res)=>{
            setFeedbacks(res.data)
            console.log("res",res)
        }).catch((err)=>{
            toast.error(err.response.data.message)
        })
    })

    const handleRequest = (mode, feedbackId,detailId) => {
        if(mode === SCREEN_MODES.DELETE){
            FeedBackService.deleteSpecificFeedBack(feedbackId,detailId).then((res)=>{
                toast.success(res.data.message)
                initialDataLoad()
            }).catch((err)=>{
                toast.error(err.response.data.message)
            })
        }
        }
  return (
    <div className={Styles.container}>
    <h1 className="text-2xl font-bold mb-4">My FeedBacks</h1>
        <FeedbackManagementTable feedbacks={feedbacks} handleRequest={handleRequest} generateReport={{}}/>
    </div>
  )
}

export default MyFeedBacks