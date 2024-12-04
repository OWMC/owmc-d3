'use client';

import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import styles from './BarChart.module.css'

interface BarChartProps {
    data: number[];
}

/* Component
https://medium.com/@jeffbutsch/using-d3-in-react-with-hooks-4a6c61f1d102
*/
export default function BarChart({data}: BarChartProps) {
    /* The useEffect Hook is for running side effects outside of React,
       for instance inserting elements into the DOM using D3 */
    const w = 500;
    const h = 200;
    const padding = 30;
    const xScale = d3.scaleLinear()
        .domain([0, 9])
        .range([padding, w - padding]);
    const yScale = d3.scaleLinear()
        .domain([0, 40])
        .range([h - padding, padding]);
    const yScaleFactor = (h - padding * 2) / 40;

    useEffect(() => {
            const svg = d3.select('.d3-component')
                .attr("width", w)
                .attr("height", h);

            svg.selectAll("rect")
                .data(data)
                .join(
                    enter => enter.append("rect")
                        .attr("x", (d, i) => i * 49 + padding)
                        .attr("y", (d) => h - d * yScaleFactor - padding)
                        .attr("width", 48)
                        .attr("height", (d) => d * yScaleFactor)
                        .attr("fill", "#141414")
                        .attr("class", styles.bar)
                        .append("title")
                        .text((d) => d + " bitcoins mined"),
                    update => update
                        .attr("x", (d, i) => i * 49 + padding)
                        .attr("y", (d) => h - d * yScaleFactor - padding)
                        .attr("width", 48)
                        .attr("height", (d) => d * yScaleFactor),
                    exit => exit.remove()
                );

            const xAxis = d3.axisBottom(xScale);
            const yAxis = d3.axisLeft(yScale);

            svg.select("g.x-axis")
                .remove();

            svg.append("g")
                .attr("transform", "translate(0," + (h - padding) + ")")
                .call(xAxis)
                .attr("class", "x-axis");

            svg.select("g.y-axis")
                .remove();

            svg.append("g")
                .attr("transform", "translate(" + padding + ", 0)")
                .call(yAxis)
                .attr("class", "y-axis");
        }, [data]);

    return (
        <svg
            className="d3-component"
        />
    );
}
