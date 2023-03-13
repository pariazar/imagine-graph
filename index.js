const { createBarChart } = require('./imaginegraph');


// const data = [
//     { label: 'A', value: 10 },
//     { label: 'B', value: 20 },
//     { label: 'C', value: 30 },
//     { label: 'D', value: 15 },
// ];

const data = generateRandomData();

const options = {
    title: '100 Random Data Points',
    width: 800,
    height: 600,
    backgroundColor: '#ffffff',
    borderColor: '#75a485',
    borderWidth: 2
};


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
    // To get the image buffer
    const imageBuffer = await createBarChart(data, options);
    console.log(imageBuffer);

    // To save the image to a file and get the file path
    const imagePath = await createBarChart(data, options, './image.png');
})()



