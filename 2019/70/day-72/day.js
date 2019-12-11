// D3.js is a JavaScript library for manipulating documents based on data.
// D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.
// https://d3js.org/
const width = 992;
const height = 600;
const colorArray = [d3.schemeCategory10, d3.schemeAccent];
const color = d3.scaleOrdinal(colorArray[0]);
const nodes = [
  { name: "Item 1", id: 'circle-1' },
  { name: "Item 2", id: 'circle-2' },
  { name: "Item 3", id: 'circle-3' },
  { name: "Item 4", id: 'circle-4' },
  { name: "Item 5", id: 'circle-5' },
  { name: "Item 6", id: 'circle-6' },
  { name: "Item 7", id: 'circle-7' }
];
const edges = [
  { source: 0, target: 1 },
  { source: 1, target: 2 },
  { source: 1, target: 3 },
  { source: 1, target: 5 },
  { source: 2, target: 4 },
  { source: 3, target: 4 },
  { source: 4, target: 6 }
];

const svg = d3.select(".container")
  .append("svg")
	.attr("width", width)
	.attr("height", height);
// DRAG
const dragstarted = d => {
  d3.select(`#${d.id}`).raise().attr("stroke", "#fff").attr("stroke-width", 4);
};
const dragged = d => {
  d3.select(`#${d.id}`).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
};
const dragended = d => {
  d3.select(`#${d.id}`).attr("stroke", null);
};
const drag = d3.drag()
  .on("start", dragstarted)
  .on("drag", dragged)
  .on("end", dragended);
// LINE
const svg_edges = svg.selectAll("line")
  .data(edges)
  .enter()
  .append("line")
    .style("stroke", "#ccc")
    .style("stroke-width", 1);
// TEXT
const svg_texts = svg.selectAll("text")
  .data(nodes)
  .enter()
  .append("text")
    .style("fill", "#fff")
    .attr("dx", 0)
    .attr("dy", 0)
    .text(d => d.name);
// CIRCLE
const svg_nodes = svg.selectAll("circle")
  .data(nodes)
  .enter()
  .append("circle")
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("id", d => d.id)
    .attr("r",20)
    .style("fill",(d, i) => color(i))
    .call(drag);
// START
d3.forceSimulation(nodes)
  .force("link", d3.forceLink(edges).distance(160))
  .force('charge', d3.forceManyBody().strength(-600))
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force("x", d3.forceX())
  .force("y", d3.forceY())
  .alphaTarget(1)
  .on("tick", () => {
    svg_edges.attr("x1",d => d.source.x)
      .attr("y1",d => d.source.y)
      .attr("x2",d => d.target.x)
      .attr("y2",d => d.target.y);

    svg_nodes.attr("cx",d => d.x)
      .attr("cy",d => d.y);

    svg_texts.attr("x", d => d.x)
      .attr("y", d => d.y);
});
