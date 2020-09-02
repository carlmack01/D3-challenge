// D3 Homework starter file

// Section 1: Pre-Data Setup
// ===========================
// Before we code any data visualizations, we need to at least set up the width, height and margins of the graph.

// Grab the width of the containing box
var width = parseInt(d3.select("#scatter").style("width"));

// Designate the height of the graph
var height = width - width / 3.9;

// Margin spacing for graph
var margin = 20;

// space for placing words
var labelArea = 110;

// padding for the text at the bottom and left axes
var tPadBot = 40;
var tPadLeft = 40;

// Create the actual SVG canvas for the graph
// ====================================
var svg = d3.select(".chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

  var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);


// Section 2:  Import the .csv file.
// ====================================
// This data file includes state-by-state demographic data from the US Census and measurements from health risks obtained by the 
//        Behavioral Risk Factor Surveillance System.
// Import our CSV data with d3's .csv import method.
d3.csv("assets/data/data.csv").then(function(data) {
  // Visualize the data
  // visualize(data);

  theData.forEach(function(data) {
      data.healthcare = +data.healthcare;
      data.obesity = +data.obesity;
        });

 var xLinearScale = d3.scaleLinear()
      .domain([20, d3.max(theData, d => d.healthcare)])
      .range([0, width]);

    var yLinearScale = d3.scaleLinear()
      .domain([0, d3.max(theData, d => d.obesity)])
      .range([height, 0]);

    // Step 3: Create axis functions
    // ==============================
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    chartGroup.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(bottomAxis);

    chartGroup.append("g")
      .call(leftAxis);

    var circlesGroup = chartGroup.selectAll("circle")
    .data(theData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d.healthcare))
    .attr("cy", d => yLinearScale(d.obesity))
    .attr("r", "15")
    .attr("fill", "pink")
    .attr("opacity", ".5");

     var toolTip = d3.tip()
      .attr("class", "tooltip")
      .offset([80, -60])
      .html(function(d) {
        return (`${d.abbr}<br>Healthcare: ${d.healthcare}<br>Obesity: ${d.obesity}`);
      });

      chartGroup.call(toolTip);

      circlesGroup.on("click", function(data) {
      toolTip.show(data, this);
    })
      // onmouseout event
      .on("mouseout", function(data, index) {
        toolTip.hide(data);
      });

      chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 40)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Obesity");

    chartGroup.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
      .attr("class", "axisText")
      .text("Healthcare");
  }.catch(function(error) {
    console.log(error);
  };



// Section 3. Create our visualization function
// ====================================
// function visualize(theData) {
// // We called a "visualize" function on the data obtained with d3's .csv method.
 

//     // Step 8: Create event listeners to display and hide the tooltip
//     // ==============================
 
  // 3.1 Create scale functions
  // ==============================


  // 3.2 Create axis functions
  // ==============================


  // 3.3 Append Axes to the chart
  // ==============================


  // 3.4 Create Circles
  // ==============================

  // 3.4.1 Code here to add abbrevations to the circles
  // ===================================================
  // With the circles on our graph, we need matching labels. Let's grab the state abbreviations from our data
  // and place them in the center of our dots.


  // 3.5 Tool tip and tool tip event listeners
  // ==============================


  // 3.6 Create axes labels
  // ==============================
  

  // 3.7 Code here to add abbrevations to the circles
  // ===================================================


// @TODO: YOUR CODE HERE!
