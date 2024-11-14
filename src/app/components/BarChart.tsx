'use client';

import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import styles from './BarChart.module.css'

interface IProps {
    data?: number[];
}

/* Component
https://medium.com/@jeffbutsch/using-d3-in-react-with-hooks-4a6c61f1d102
*/
export const BarChart = (props: IProps) => {
    /* The useRef Hook creates a variable that "holds on" to a value across rendering
       passes. In this case it will hold our component's SVG DOM element. It's
       initialized null and React will assign it later (see the return statement) */
    const d3Container = useRef(null);

    /* The useEffect Hook is for running side effects outside of React,
       for instance inserting elements into the DOM using D3 */
    useEffect(
        () => {
            if (props.data && d3Container.current) {
                const w = 500;
                const h = 200;
                const padding = 30;
                const xScale = d3.scaleLinear()
                    .domain([0, 9])
                    .range([padding, w - padding]);

                const scaleFactor = (h - padding * 2) / 50;

                const yScale = d3.scaleLinear()
                    .domain([0, 50])
                    .range([h - padding, padding]);

                const svg = d3.select(d3Container.current)
                    .attr("width", w)
                    .attr("height", h);
;            
                svg.selectAll("rect")
                    .data(props.data)
                    .enter()
                    .append("rect")
                    .attr("x", (d, i) => i * 49 + padding)
                    .attr("y", (d) => h - d * scaleFactor - padding)
                    .attr("width", 48)
                    .attr("height", (d) => d * scaleFactor)
                    .attr("fill", "#141414")
                    .attr("class", styles.bar)
                    .append("title")
                    .text((d) => d + " bitcoins mined")

                const xAxis = d3.axisBottom(xScale);
                const yAxis = d3.axisLeft(yScale);

                svg.append("g")
                    .attr("transform", "translate(0," + (h - padding) + ")")
                    .call(xAxis);

                svg.append("g")
                    .attr("transform", "translate(" + padding + ", 0)")
                    .call(yAxis);


            }
        },

        /*
            useEffect has a dependency array (below). It's a list of dependency
            variables for this useEffect block. The block will run after mount
            and whenever any of these variables change. We still have to check
            if the variables are valid, but we do not have to compare old props
            to next props to decide whether to rerender.
        */
        [props.data, d3Container.current])

    return (
        <svg
            className="d3-component"
            ref={d3Container}
        />
    );
}
