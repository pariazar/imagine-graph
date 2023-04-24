const { Chart } = require('chart.js/auto');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

const initCanvas = (options) => {
    // Create a new Chart.js chart on a virtual canvas
    const canvas = createCanvas(options?.width || 600, options?.height || 400);
    const ctx = canvas.getContext('2d');
    return [ctx, canvas];
}

async function createBarChart(data, options = {}, outputPath = null) {
    const canvas = initCanvas(options);

    // const chart = new Chart(canvas[0], {
    //     type: 'bar',
    //     data: {
    //         labels: data.map(d => d.label),
    //         datasets: [{
    //             label: options.label || '',
    //             data: data.map(d => d.value),
    //             borderColor: options.borderColor || 'rgba(54, 162, 235, 1)',
    //             borderWidth: options.borderWidth || 1,
    //             backgroundColor: options.backgroundDataColor || ['#FF6384', '#36A2EB', '#FFCE56', '#cc65fe', '#445ce3']
    //         }]
    //     },
    //     options: {
    //         title: {
    //             display: true,
    //             text: options.title || '',
    //             fontColor: options.titleColor || '#000000'
    //         },
    //         legend: {
    //             labels: {
    //                 fontColor: options.labelColor || '#ffffff'
    //             }
    //         }
    //     }
    // });

    const imageBuffer = await makeChartReady(canvas[1], options, outputPath);

    // Otherwise, return the image buffer
    return imageBuffer;
}

async function createLineChart(data, options = {}, outputPath = null) {
    const canvas = initCanvas(options);
    // const chart = new Chart(canvas[0], {
    //     type: 'line',
    //     data: {
    //         labels: data.map(d => d.label),
    //         datasets: [{
    //             label: options.label || '',
    //             data: data.map(d => d.value),
    //             backgroundColor: options.backgroundColor || 'rgba(54, 162, 235, 0.2)',
    //             borderColor: options.borderColor || 'rgba(54, 162, 235, 1)',
    //             borderWidth: options.borderWidth || 1
    //         }]
    //     },
    //     options: {
    //         title: {
    //             display: true,
    //             text: options.title || ''
    //         },
    //         legend: {
    //             display: options.legend || false,
    //             labels: {
    //                 fontColor: options.labelColor || '#000000'
    //             }
    //         },
    //         plugins: {
    //             datalabels: {
    //                 display: options.showDataLabels || false,
    //                 font: {
    //                     weight: 'bold'
    //                 },
    //                 color: options.dataLabelColor || '#000000'
    //             }
    //         }
    //     }
    // });

    const imageBuffer = await makeChartReady(canvas[1], options, outputPath);

    // Otherwise, return the image buffer
    return imageBuffer;
}

async function createBubbleChart(data, options = {}, outputPath = null) {
    const canvas = initCanvas(options);
    // const chart = new Chart(canvas[0], {
    //     type: 'bubble',
    //     data: {
    //         datasets: [{
    //             label: options.label || '',
    //             data: data,
    //             backgroundColor: options.backgroundColor || 'rgba(54, 162, 235, 0.5)',
    //             borderColor: options.borderColor || 'rgba(54, 162, 235, 1)',
    //             borderWidth: options.borderWidth || 1,
    //         }]
    //     },
    //     options: {
    //         title: {
    //             display: true,
    //             text: options.title || '',
    //             fontColor: options.titleColor || '#000000'
    //         },
    //         legend: {
    //             labels: {
    //                 fontColor: options.labelColor || '#000000'
    //             }
    //         }
    //     }
    // });

    const imageBuffer = await makeChartReady(canvas[1], options, outputPath);

    // Otherwise, return the image buffer
    return imageBuffer;
}

async function createPieChart(data, options = {}, outputPath = null) {
    const canvas = initCanvas(options);
    // const chart = new Chart(canvas[0], {
    //     type: options.type || 'pie',
    //     data: {
    //         labels: data.map(d => d.label),
    //         datasets: [{
    //             label: options.label || '',
    //             data: data.map(d => d.value),
    //             backgroundColor: options.backgroundDataColor || ['#FF6384', '#36A2EB', '#FFCE56', '#cc65fe', '#445ce3'],
    //             borderWidth: options.borderWidth || 1
    //         }]
    //     },
    //     options: {
    //         title: {
    //             display: true,
    //             text: options.title || '',
    //             fontColor: options.titleColor || '#000',
    //             fontSize: options.titleFontSize || 18
    //         },
    //         legend: {
    //             display: options.showLegend !== false,
    //             position: options.legendPosition || 'right',
    //             labels: {
    //                 fontColor: options.legendFontColor || '#000',
    //                 fontSize: options.legendFontSize || 14
    //             }
    //         }
    //     }
    // });


    const imageBuffer = await makeChartReady(canvas[1], options, outputPath);

    // Otherwise, return the image buffer
    return imageBuffer;
}

async function createPolarAreaChart(data, options = {}, outputPath = null) {
    const canvas = initCanvas(options);

    // const chart = new Chart(canvas[0], {
    //     type: 'polarArea',
    //     data: {
    //         labels: data.map(d => d.label),
    //         datasets: [{
    //             data: data.map(d => d.value),
    //             borderColor: options.borderColor || '#ffffff',
    //             borderWidth: options.borderWidth || 2,
    //             backgroundColor: options.backgroundDataColor || ['#FF6384', '#36A2EB', '#FFCE56', '#cc65fe', '#445ce3'],

    //         }]
    //     },
    //     options: {
    //         title: {
    //             display: true,
    //             text: options.title || '',
    //             fontColor: options.titleColor || '#000000',
    //             fontSize: options.titleFontSize || 18,
    //             fontFamily: options.titleFontFamily || 'Arial'
    //         },
    //         legend: {
    //             position: options.legendPosition || 'right',
    //             labels: {
    //                 fontColor: options.labelColor || '#000000',
    //                 fontSize: options.labelFontSize || 14,
    //                 fontFamily: options.labelFontFamily || 'Arial'
    //             }
    //         }
    //     }
    // });

    const imageBuffer = await makeChartReady(canvas[1], options, outputPath);

    // Otherwise, return the image buffer
    return imageBuffer;
}

async function createRadarChart(data, options = {}, outputPath = null) {
    const canvas = initCanvas(options);
    // const chart = new Chart(canvas[0], {
    //     type: 'radar',
    //     data: {
    //         labels: data.labels,
    //         datasets: [{
    //             label: options.label || '',
    //             data: data.datasets.map(d => d.data),
    //             backgroundColor: options.backgroundColor || 'rgba(54, 162, 235, 0.2)',
    //             borderColor: options.borderColor || 'rgba(54, 162, 235, 1)',
    //             borderWidth: options.borderWidth || 1
    //         }]
    //     },
    //     options: {
    //         title: {
    //             display: true,
    //             text: options.title || ''
    //         },
    //         scale: {
    //             ticks: {
    //                 beginAtZero: true,
    //                 max: options.max || null,
    //                 stepSize: options.stepSize || null
    //             }
    //         }
    //     }
    // });

    const imageBuffer = await makeChartReady(canvas[1], options, outputPath);

    // Otherwise, return the image buffer
    return imageBuffer;
}

const createScatterChart = async (data, options, outputPath) => {
    const canvas = initCanvas(options);
    // const scatterChart = new Chart(canvas[0], {
    //     type: 'scatter',
    //     data: {
    //         datasets: [{
    //             label: options?.title,
    //             data: data,
    //             backgroundColor: options?.pointColor,
    //             borderColor: options?.borderColor
    //         }]
    //     },
    //     options: {
    //         responsive: false,
    //         maintainAspectRatio: false,
    //         title: {
    //             display: true,
    //             text: options?.title,
    //             fontColor: options?.titleColor,
    //             fontSize: 18
    //         },
    //         legend: {
    //             labels: {
    //                 fontColor: options?.labelColor
    //             }
    //         }
    //     }
    // });
    const imageBuffer = await makeChartReady(canvas[1], options, outputPath);
    return imageBuffer;
}

const makeChartReady = async (canvas, options, outputPath) => {
    // Convert the chart canvas to an image buffer
    const imageCanvas = createCanvas(canvas.width, canvas.height);
    const imageCtx = imageCanvas.getContext('2d');
    imageCtx.fillStyle = options?.backgroundColor || '#ffffff'; // Set background color
    imageCtx.fillRect(0, 0, imageCanvas.width, imageCanvas.height); // Fill the background
    const chartImage = await loadImage(canvas.toDataURL());
    imageCtx.drawImage(chartImage, 0, 0);
    const imageBuffer = imageCanvas.toBuffer('image/png');

    // Save the image to a file if an output path is specified
    if (outputPath) {
        fs.writeFileSync(outputPath, imageBuffer);
        return outputPath;
    }
    return imageBuffer;
}

module.exports = {
    createLineChart,
    createBarChart,
    createBubbleChart,
    createPieChart,
    createPolarAreaChart,
    createRadarChart,
    createScatterChart
};
