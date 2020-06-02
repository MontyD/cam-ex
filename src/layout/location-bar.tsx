import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { SearchBar } from '../presentational/search-bar';

export const LocationBar = () => {
    return (
        <Grid container spacing={3} alignItems="center">
            <Grid item sm={5} md={6}>
                <Typography variant="h5">
                    No Location Set
                </Typography>
            </Grid>
            <Grid item sm={7} md={6}>
                <SearchBar />
            </Grid>
        </Grid>
    );
};
