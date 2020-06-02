import React, { useRef, useEffect, MutableRefObject } from 'react';
import { Paper, makeStyles, createStyles } from '@material-ui/core';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import 'ol/ol.css';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
        display: 'flex',
        alignItems: 'stretch',
        width: '100%',
        minHeight: '400px'
    },
    map: {
        flex: 1
    }
  }),
);

const useOpenLayersMap = (element: MutableRefObject<HTMLElement | null>) => {
    const mapRef = useRef<Map | undefined>();

    useEffect(() => {
        if (!element.current) {
            return;
        }

        mapRef.current = new Map({
            target: element.current,
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: [0, 0],
                zoom: 0
            })
        });

        return () => mapRef.current?.dispose();
    }, [element]);
}

export const OpenLayersMap = () => {
    const {root, map} = useStyles();
    const mapHolderRef = useRef<HTMLDivElement | null>(null);
    useOpenLayersMap(mapHolderRef);

    return (
        <Paper className={root}>
            <div ref={mapHolderRef} className={map} />
        </Paper>
    );
};