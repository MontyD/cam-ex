import React, { useRef, useEffect, useCallback } from "react";
import { Paper, makeStyles, createStyles } from "@material-ui/core";

import { Map, View } from "ol";
import { transform } from "ol/proj";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";

import "ol/ol.css";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "stretch",
      width: "100%",
      height: "50vh",
      minHeight: "400px",
    },
    map: {
      flex: 1,
    },
  })
);

const useOpenLayersMap = () => {
  const mapRef = useRef<Map | null>(null);

  const setMapElementRef = useCallback((node: HTMLElement | null) => {
    mapRef.current?.dispose();
    mapRef.current = null;

    if (node) {
      mapRef.current = new Map({
        target: node,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new VectorLayer(),
        ],
        view: new View({
          center: [0, 0],
          zoom: 0,
        }),
      });
    }
  }, []);

  return [setMapElementRef, mapRef] as const;
};

export const OpenLayersMap = (props: { centerPoint?: [number, number] }) => {
  const { root, map } = useStyles();
  const [setMapElementRef, olMap] = useOpenLayersMap();

  useEffect(() => {
    if (!olMap.current || !props.centerPoint) {
      return;
    }

    olMap.current.getView().animate({
      center: transform(props.centerPoint, "EPSG:4326", "EPSG:3857"),
      zoom: 11,
    });
  }, [props.centerPoint, olMap]);

  return (
    <Paper className={root}>
      <div ref={setMapElementRef} className={map} />
    </Paper>
  );
};
