const { Chart } = require('chart.js/auto');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function createBarChart(data, options = {}, outputPath = null) {
    // Create a new Chart.js chart on a virtual canvas
    const canvas = createCanvas(options.width || 600, options.height || 400);
    const ctx = canvas.getContext('2d');

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.label),
            datasets: [{
                label: options.label || '',
                data: data.map(d => d.value),
                backgroundColor: options.backgroundColor || 'rgba(54, 162, 235, 0.2)',
                borderColor: options.borderColor || 'rgba(54, 162, 235, 1)',
                borderWidth: options.borderWidth || 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
                display: true,
                text: options.title || '',
                fontColor: options.titleColor || '#000000'
            },
            legend: {
                labels: {
                    fontColor: options.labelColor || '#ffffff'
                }
            }
        }
    });

    // Convert the chart canvas to an image buffer
    const imageCanvas = createCanvas(canvas.width, canvas.height);
    const imageCtx = imageCanvas.getContext('2d');
    imageCtx.fillStyle = options.backgroundColor || '#ffffff'; // Set background color
    imageCtx.fillRect(0, 0, imageCanvas.width, imageCanvas.height); // Fill the background
    const chartImage = await loadImage(canvas.toDataURL());
    imageCtx.drawImage(chartImage, 0, 0);
    const imageBuffer = imageCanvas.toBuffer('image/png');

    // Save the image to a file if an output path is specified
    if (outputPath) {
        fs.writeFileSync(outputPath, imageBuffer);
        return outputPath;
    }

    // Otherwise, return the image buffer
    return imageBuffer;
}

async function createLineChart(data, options = {}, outputPath = null) {
    // Create a new Chart.js chart on a virtual canvas
    const canvas = createCanvas(options.width || 600, options.height || 400);
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(d => d.label),
            datasets: [{
                label: options.label || '',
                data: data.map(d => d.value),
                backgroundColor: options.backgroundColor || 'rgba(54, 162, 235, 0.2)',
                borderColor: options.borderColor || 'rgba(54, 162, 235, 1)',
                borderWidth: options.borderWidth || 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            title: {
                display: true,
                text: options.title || ''
            },
            legend: {
                display: options.legend || false,
                labels: {
                    fontColor: options.labelColor || '#000000'
                }
            },
            plugins: {
                datalabels: {
                    display: options.showDataLabels || false,
                    font: {
                        weight: 'bold'
                    },
                    color: options.dataLabelColor || '#000000'
                }
            }
        }
    });

    // Convert the chart canvas to an image buffer
    const imageCanvas = createCanvas(canvas.width, canvas.height);
    const imageCtx = imageCanvas.getContext('2d');
    imageCtx.fillStyle = options.backgroundColor || '#ffffff'; // Set background color
    imageCtx.fillRect(0, 0, imageCanvas.width, imageCanvas.height); // Fill the background
    const chartImage = await loadImage(canvas.toDataURL());
    imageCtx.drawImage(chartImage, 0, 0);
    const imageBuffer = imageCanvas.toBuffer('image/png');

    // Save the image to a file if an output path is specified
    if (outputPath) {
        fs.writeFileSync(outputPath, imageBuffer);
        return outputPath;
    }

    // Otherwise, return the image buffer
    return imageBuffer;
}

async function createBubbleChart(data, options = {}, outputPath = null) {
    // Create a new Chart.js chart on a virtual canvas
    const canvas = createCanvas(options.width || 600, options.height || 400);
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bubble',
        data: {
            datasets: [{
                label: options.label || '',
                data: data,
                backgroundColor: options.backgroundColor || 'rgba(54, 162, 235, 0.5)',
                borderColor: options.borderColor || 'rgba(54, 162, 235, 1)',
                borderWidth: options.borderWidth || 1,
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
                display: true,
                text: options.title || '',
                fontColor: options.titleColor || '#000000'
            },
            legend: {
                labels: {
                    fontColor: options.labelColor || '#000000'
                }
            }
        }
    });

    // Convert the chart canvas to an image buffer
    const imageCanvas = createCanvas(canvas.width, canvas.height);
    const imageCtx = imageCanvas.getContext('2d');
    imageCtx.fillStyle = options.backgroundColor || '#ffffff'; // Set background color
    imageCtx.fillRect(0, 0, imageCanvas.width, imageCanvas.height); // Fill the background
    const chartImage = await loadImage(canvas.toDataURL());
    imageCtx.drawImage(chartImage, 0, 0);
    const imageBuffer = imageCanvas.toBuffer('image/png');

    // Save the image to a file if an output path is specified
    if (outputPath) {
        fs.writeFileSync(outputPath, imageBuffer);
        return outputPath;
    }

    // Otherwise, return the image buffer
    return imageBuffer;
}


module.exports = {
    createLineChart,
    createBarChart,
    createBubbleChart
};
