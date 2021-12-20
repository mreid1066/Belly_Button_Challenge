// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    
    // Create a variable that filters the samples for the object with the desired sample number.

    // 3.1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadata = data.metadata;
    var metaArray = metadata.filter(sampleObj => sampleObj.id == sample);
    // Create a variable that holds the first sample in the array.
  

    // 3.2. Create a variable that holds the first sample in the metadata array.
    var metaResult = metaArray[0];

    // Create variables that hold the otu_ids, otu_labels, and sample_values.


    // 3.3. Create a variable that holds the washing frequency.
    var washFreq = metaResult.wfreq;
    console.log(washFreq)

    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 3.4. Create the trace for the gauge chart.
    var gaugeData = [
     
    ];
    
    // 3.5. Create the layout for the gauge chart.
    var gaugeLayout = { 
     
    };

    // 3.6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot();
  });
}
