const { createBarChart, createLineChart,
    createBubbleChart, createPieChart,
    createPolarAreaChart, createScatterChart } = require('./imaginegraph');


// const data = [
//     { label: 'A', value: 10 },
//     { label: 'B', value: 20 },
//     { label: 'C', value: 30 },
//     { label: 'D', value: 15 },
// ];


function generateRandomData() {
    const data = [];
    const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < 100; i++) {
        const label = labels[i % labels.length];
        const value = Math.floor(Math.random() * 50) + 1;
        data.push({ label, value });
    }
    return data;
}


(async () => {
    //=========== bar chart =============
    // ==================================
    let data = generateRandomData();

    data = [
        { label: 'A', value: 10 },
        { label: 'B', value: 20 },
        { label: 'C', value: 30 },
        { label: 'D', value: 15 },
    ];

    let options = {
        title: 'Data Points',
        label: 'Data Points',
        width: 800,
        height: 600,
        backgroundDataColor: ['#FF6384', '#36A2EB', '#FFCE56', '#cc65fe', '#445ce3'],
        borderColor: '#000000',
        titleColor: '#75a485',
        labelColor: '#75a485',
        borderWidth: 2
    };
    // To get the image buffer
    const imageBuffer = await createBarChart(data, options);
    console.log(imageBuffer);


    // To save the image to a file and get the file path
    await createBarChart(data, options, './images/barChart.png');

    // ==================================


    //=========== line chart =============
    // ==================================
    options = {
        label: 'Line Chart Example',
        width: 800,
        height: 600,
        backgroundColor: '#ffffff',
        borderColor: '#75a485',
        titleColor: '#75a485',
        borderWidth: 2,
        legend: true,
        labelColor: '#000000',
        showDataLabels: true,
        dataLabelColor: '#000000'
    };
    data = [{ label: 'January', value: 10 }, { label: 'February', value: 30 }, { label: 'March', value: 30 }, { label: 'April', value: 15 },];

    await createLineChart(data, options, './images/lineChart.png');

    // ==================================

    //=========== Bubble chart =============
    // ==================================
    data = [
        { label: 'A', x: 15, y: 20, r: 15 },
        { label: 'B', x: 20, y: 30, r: 20 },
        { label: 'C', x: 30, y: 10, r: 10 },
        { label: 'D', x: 15, y: 25, r: 25 },
    ];

    options = {
        label: 'Bubble Chart Example',
        width: 800,
        height: 600,
        backgroundColor: '#ffffff',
        borderColor: '#75a485',
        titleColor: '#75a485',
        labelColor: '#75a485',
        borderWidth: 2
    };

    await createBubbleChart(data, options, './images/bubbleChart.png');

    // ==================================


    //=========== Pie chart =============
    // ==================================
    data = [
        { label: 'A', value: 10 },
        { label: 'B', value: 20 },
        { label: 'C', value: 30 },
        { label: 'D', value: 15 }
    ];

    options = {
        label: 'My Pie Chart',
        width: 800,
        height: 600,
        backgroundDataColor: ['#FF6384', '#36A2EB', '#FFCE56', '#cc65fe', '#445ce3'],
        backgroundColor: '#ffffff',
        borderColor: '#75a485',
        titleColor: '#75a485',
        labelColor: '#75a485',
        borderWidth: 2,
        labelFontSize: 16
    };
    await createPieChart(data, options, './images/pieChart.png');

    //for doughnut chart only set type doughnut
    options.type = 'doughnut'
    await createPieChart(data, options, './images/doughnutChart.png');

    // ==================================

    //=========== Polar Area chart =============
    // ==================================

    data = [
        { label: 'Category A', value: 30 },
        { label: 'Category B', value: 50 },
        { label: 'Category C', value: 20 },
    ];

    options = {
        title: 'Polar Area Chart Example',
        width: 800,
        height: 600,
        backgroundDataColor: ['#FF6384', '#36A2EB', '#FFCE56', '#cc65fe', '#445ce3'],
        borderColor: '#75a485',
        titleColor: '#75a485',
        labelColor: '#75a485',
        borderWidth: 2,
        titleFontSize: 24,
        labelFontSize: 18,
        legendPosition: 'bottom',
    };

    await createPolarAreaChart(data, options, './images/polarAreaChart.png');

    // ==================================

    //=========== Scatter chart =============
    // ==================================
    data = [{
        x: -10,
        y: 0
    }, {
        x: 0,
        y: 10
    }, {
        x: 10,
        y: 5
    }, {
        x: 0.5,
        y: 5.5
    }];

    await createScatterChart(data, options, './images/scatterChart.png');

    // ==================================

})()



