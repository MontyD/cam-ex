import React from 'react';
import { Container, Grid } from '@material-ui/core';

import { LocationBar } from './location-bar';
import { OpenLayersMap } from '../presentational/open-layers-map';
import { WeatherIndicator } from '../presentational/weather-indicator';

export const MainLayout = () => {
    return (
        <Container maxWidth="lg">
            <LocationBar />
            <Grid container spacing={3}>
                <Grid item md={6} sm={12}>
                    <OpenLayersMap />
                </Grid>
                <Grid item md={6} sm={12}>
                    <WeatherIndicator />
                </Grid>
                <Grid item xs={12}>
                </Grid>
            </Grid>
        </Container>
    )
};