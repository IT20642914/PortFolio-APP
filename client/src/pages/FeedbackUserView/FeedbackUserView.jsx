  /* eslint-disable no-unused-expressions */
  import React from 'react'
  import Styles from './FeedbackUserView.module.scss'
  import RadialBarChart from '../../components/RadialBarChart/RadialBarChart'
  import { useEffect } from 'react'
  import { FeedBackService } from '../../Services/feedBack.Service'
  import { toast } from 'react-toastify'
  import { Grid } from '@mui/material'
  import PortfolioCard from '../../components/PortfolioCard/PortfolioCard'
  import FeedbackCard from '../../components/FeedbackCard/FeedbackCard'
  const FeedbackUserView = () => {
    const [averageRatings, setAverageRatings] = React.useState({
      averageResponsibility: 0,
      averageFriendliness: 0,
      averageCreativity: 0,
      averageReliability: 0,
      averageOverallSatisfaction: 0
    })

    const [postDetails, setPostDetails] = React.useState({})
    const [feedbackDetails, setFeedbackDetails] = React.useState([])
    useEffect(() => {
      
      getInitialData()
    }, [])
    

    const getInitialData = () => {
      localStorage.setItem("postID",'6635643ad2e5faddd25dc691')
      const postID= localStorage.getItem('postID')
    
    FeedBackService.getAverageRatingsForPost(postID).then((response) => {

      if(response.data){
        const scaledRatings = {
          averageResponsibility: response.data.averageResponsibility * 20, // scale from 1-5 to 0-100
          averageFriendliness: response.data.averageFriendliness * 20,
          averageCreativity: response.data.averageCreativity * 20,
          averageReliability: response.data.averageReliability * 20,
          averageOverallSatisfaction: response.data.averageOverallSatisfaction * 20
        };
        setAverageRatings(scaledRatings);
      }
    }).catch((error) => {
      toast.error(error)
    })

FeedBackService.getPostDetailsAndFeedback(postID).then((response) => {
  if(response.data){
    setPostDetails(response.data.post);
    setFeedbackDetails(response.data.feedbacks[0].feedbackDetails);
  }
}).catch((error) => {
      toast.error(error)
})

    }

    return (
      <div className={Styles.container}>
        <Grid container spacing={2}>
        <Grid item xs={12} md={2} >
        <section className={Styles.FeedbackUserView}>
           <PortfolioCard data={postDetails}/>
          </section>
        </Grid>
        <Grid item xs={12} md={10}>
        <Grid item xs={12} md={12} sx={{ background:"white",margin:"1rem"}}>
        <section className={Styles.RadialBarChart}>
        <Grid item xs={12} md={2} sx={{ background:"white",margin:"1rem"}}>
        <RadialBarChart rating={averageRatings.averageResponsibility} label="Responsibility" />
        </Grid>
        <Grid item xs={12} md={2} sx={{ background:"white",margin:"1rem"}}>
        <RadialBarChart rating={averageRatings.averageFriendliness} label="Friendliness" />
        </Grid>
        <Grid item xs={12} md={2} sx={{ background:"white",margin:"1rem"}}>
        <RadialBarChart rating={averageRatings.averageCreativity} label="Creativity" />
        </Grid>
        <Grid item xs={12} md={2} sx={{ background:"white",margin:"1rem"}}>
        <RadialBarChart rating={averageRatings.averageReliability} label="Reliability" />
        </Grid>
        <Grid item xs={12} md={2} sx={{ background:"white",margin:"1rem"}}>
        <RadialBarChart rating={averageRatings.averageOverallSatisfaction} label="Overall Satisfaction" />
        </Grid>
         </section>   
        </Grid>
        <Grid item xs={12} md={12} sx={{ background:"white",margin:"1rem"}} >
                    <Grid container spacing={2}>
                        {feedbackDetails.map((feedback, index) => (
                            <Grid item xs={6} key={index}>
                                <FeedbackCard feedback={feedback} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
        </Grid>
        </Grid>
      </div>
    )
  }

  export default FeedbackUserView