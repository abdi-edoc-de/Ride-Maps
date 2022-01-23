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
import { TimeHeatMap } from './FMaps/TimeHeatMap'
import HotelIcon from '@mui/icons-material/Hotel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const Maps = () => {
    return (

        <Router>
            <Grid item xs={12}>
                {/* <Paper sx={{ width: '100%' }} style={{ height: 600, backgroundColor: 'green' }}>  */}

                <Switch>
                    <Route path="/" exact component={BaseMaps} />
                    <Route path="/overheatmap" component={OverAllHeatMap} />
                    <Route path="/hotels" component={ByHotel} />
                    <Route path="/hotelheatmap" component={HotelHeatMap} />
                    <Route path="/time" component={ByTime} />
                    <Route path="/timeheat" component={TimeHeatMap} />
                </Switch>
            </Grid>
            <Grid container sx={{ mt: 5 }} xs={12} spacing={4}>

                <Grid item xl={12} md={12} xs={12}>

                    <ButtonGroup size="large" variant="contained" color="secondary" style={{ textDecoration: 'none' }}>
                        <Link className="Nav_menu" to="/" style={{ textDecoration: 'none' }} >
                            <Button style={{ color: '#FFFFFF', textDecoration: 'none' }} startIcon={<  AddLocationAltIcon />}>
                                Overall map
                            </Button>
                        </Link>
                        <Link to="/overheatmap" style={{ textDecoration: 'none' }}>

                            <Button style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                                Overall Heatmap
                            </Button>
                        </Link>

                    </ButtonGroup>
                </Grid>
                {/* <Grid item xl={4} md={6} xs={12}>
                    <ButtonGroup size="large" variant="contained" color="secondary" style={{ textDecoration: 'none' }}>
                        <Link to="/hotels" style={{ textDecoration: 'none' }}>
                            <Button style={{ color: '#FFFFFF', textDecoration: 'none' }} startIcon={<HotelIcon />}>
                                hotels map
                            </Button>
                        </Link>

                        <Link to="/hotelheatmap" style={{ textDecoration: 'none' }}>

                        <Button>
                                hotels Heatmap
                        </Button>
                        </Link>

                    </ButtonGroup>
                </Grid><Grid item xl={4} md={12} xs={12}>
                    <ButtonGroup size="large" variant="contained" color="secondary">
                    <Link to="/time" style={{ textDecoration: 'none' }}>

                        <Button startIcon={<AccessTimeIcon />}>
                                Time map
                        </Button>
                        </Link>

                        <Link to="/timeheat" style={{ textDecoration: 'none' }}>

                        <Button>
                                Time Heatmap
                        </Button>
                        </Link>

                    </ButtonGroup>
                </Grid> */}
                {/* <Grid item xl={3} md={6} xs={12}>
                    <ButtonGroup disableElevation variant="contained">
                        <Button startIcon={<AddLocationAltIcon />}>Overall map</Button>
                        <Button>Overall Heatmap</Button>
                    </ButtonGroup>
                </Grid> */}
            </Grid>
        </Router >

    )
}

export default Maps
