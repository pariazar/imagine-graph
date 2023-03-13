const { createBarChart, createLineChart, createBubbleChart } = require('./imaginegraph');


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

    let options = {
        title: '100 Random Data Points',
        label: '100 Random Data Points',
        width: 800,
        height: 600,
        backgroundColor: '#ffffff',
        borderColor: '#75a485',
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
        labelColor: '#75a485',
        borderWidth: 2,
        legend: true,
        labelColor: '#000000',
        showDataLabels: true,
        dataLabelColor: '#000000'
    };
    data = [{ label: 'January', value: 10 }, { label: 'February', value: 30 }, { label: 'March', value: 30 }, { label: 'April', value: 15 },];

    await createLineChart(data, options, './images/lineChart.png');

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

})()



