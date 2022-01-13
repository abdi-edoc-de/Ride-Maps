import React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { BaseMaps } from './FMaps/BaseMaps'
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { spacing } from '@mui/system';
import { OverAllHeatMap } from './FMaps/OverAllHeatMap'
import { ByHotel } from './FMaps/ByHotel'
import { HotelHeatMap } from './FMaps/HotelsHeatMap'
import { ByTime } from './FMaps/ByTime'

const Maps = () => {
    return (

        <Router>
            <Grid item xs={12}>
                {/* <Paper sx={{ width: '100%' }} style={{ height: 600, backgroundColor: 'green' }}>  */}
               
                    <Switch>
                        <Route path="/" exact component={ BaseMaps} />
                        <Route path="/overheatmap" component={OverAllHeatMap} />
                        <Route path = "/hotels" component={ ByHotel} />
                        <Route path = "/hotelheatmap" component={HotelHeatMap}/>
                        <Route path = "/time" component={ByTime}/>

                    </Switch>
            </Grid>
            <Grid container sx={{ mt: 5 }} xs={12} spacing={4}>

                <Grid item xl={3} md={6} xs={12}>
                    <ButtonGroup size="large" variant="contained" color="secondary">
                        <Button startIcon={<AddLocationAltIcon />}>
                            <Link to="/"  style={{ textDecoration: 'none' }}>
                                Overall map
                            </Link>
                        </Button>

                        <Button>
                            <Link to="/overheatmap"  style={{ textDecoration: 'none' }}>
                                Overall Heatmap
                            </Link>
                        </Button>
                    </ButtonGroup>
                </Grid>
                <Grid item xl={3} md={6} xs={12}>
                <ButtonGroup size="large" variant="contained" color="secondary">
                        <Button startIcon={<AddLocationAltIcon />}>
                            <Link to="/hotels"  style={{ textDecoration: 'none' }}>
                                byhotels map
                            </Link>
                        </Button>

                        <Button>
                            <Link to="/hotelheatmap"  style={{ textDecoration: 'none' }}>
                                hotels Heatmap
                            </Link>
                        </Button>
                    </ButtonGroup>
                </Grid><Grid item xl={3} md={6} xs={12}>
                <ButtonGroup size="large" variant="contained" color="secondary">
                        <Button startIcon={<AddLocationAltIcon />}>
                            <Link to="/time"  style={{ textDecoration: 'none' }}>
                                Time map
                            </Link>
                        </Button>

                        <Button>
                            <Link to="#"  style={{ textDecoration: 'none' }}>
                                Overall Heatmap
                            </Link>
                        </Button>
                    </ButtonGroup>
                </Grid><Grid item xl={3} md={6} xs={12}>
                    <ButtonGroup disableElevation variant="contained">
                        <Button startIcon={<AddLocationAltIcon />}>Overall map</Button>
                        <Button>Overall Heatmap</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
            </Router>

    )
}

export default Maps
