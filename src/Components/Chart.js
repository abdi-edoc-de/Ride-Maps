import { Grid } from '@mui/material'
import React from 'react'
import { Days } from './Charts/Days'
import { DaysWithCost } from './Charts/DaysWithCost'
import { Time } from './Charts/Time'
import TimeCost from './Charts/TimeCost'
const Chart = () => {
    return (
        
           <Grid container spacing = {4} >
               <Grid item style = {{width : "100%" , height:500}} xs = {12}   >
               <Time/>
               </Grid>
               <Grid item style = {{width : "100%" , height:600}} xs = {12}  md = {12} lg = {6} >
               <Days/>
               </Grid>
               <Grid item style = {{width : "100%" , height:600}} xs = {12}  md = {12} lg = {6} >
               <DaysWithCost/>
               </Grid>
           </Grid>

        
    )
}

export default Chart
