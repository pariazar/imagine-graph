const { createBarChart, createLineChart,
    createBubbleChart, createPieChart,
    createPolarAreaChart, createScatterChart } = require('./imaginegraph');
const { expect } = require('chai');
const fs = require('fs');
// Sample test data
const testData = [{ label: 'A', value: 20 }, { label: 'B', value: 40 }, { label: 'C', value: 30 }];

describe('createBarChart', () => {
    it('should return a buffer containing a bar chart image', async () => {
        const imageBuffer = await createBarChart(testData);
        expect(imageBuffer instanceof Buffer).to.equal(true);
    });

    it('should accept options and outputPath parameters', async () => {
        const options = { title: 'Test Chart', label: 'Test Data' };
        const outputPath = './test/bar-chart.png';
        await createBarChart(testData, options, outputPath);

        const stats = fs.statSync(outputPath);
        const fileSizeInBytes = stats.size;
        expect(fileSizeInBytes).to.be.above(0);
        expect(fs.existsSync(outputPath)).to.equal(true);
        fs.unlinkSync(outputPath);
    });
});

describe('createLineChart', () => {
    it('should return a buffer containing a line chart image', async () => {
        const imageBuffer = await createLineChart(testData);
        expect(imageBuffer instanceof Buffer).to.equal(true);
    });

    it('should accept options and outputPath parameters', async () => {
        const options = { title: 'Test Chart', label: 'Test Data' };
        const outputPath = './test/line-chart.png';
        await createLineChart(testData, options, outputPath);

        const stats = fs.statSync(outputPath);
        const fileSizeInBytes = stats.size;
        expect(fileSizeInBytes).to.be.above(0);
        expect(fs.existsSync(outputPath)).to.equal(true);
        fs.unlinkSync(outputPath);
    });
});

describe('createBubbleChart', () => {
    it('should return a buffer containing a bubble chart image', async () => {
        const testData = [{ x: 10, y: 20, r: 5 }, { x: 20, y: 30, r: 10 }, { x: 30, y: 10, r: 15 }];
        const imageBuffer = await createBubbleChart(testData);
        expect(imageBuffer instanceof Buffer).to.equal(true);
    });

    it('should accept options and outputPath parameters', async () => {
        const testData = [{ x: 10, y: 20, r: 5 }, { x: 20, y: 30, r: 10 }, { x: 30, y: 10, r: 15 }];
        const options = { title: 'Test Chart', label: 'Test Data' };
        const outputPath = './test/bubble-chart.png';
        await createBubbleChart(testData, options, outputPath);

        const stats = fs.statSync(outputPath);
        const fileSizeInBytes = stats.size;
        expect(fileSizeInBytes).to.be.above(0);
        expect(fs.existsSync(outputPath)).to.equal(true);
        fs.unlinkSync(outputPath);
    });
});

describe('createPieChart', () => {
    it('should return a buffer containing a pie chart image', async () => {
        const imageBuffer = await createPieChart(testData);
        expect(imageBuffer instanceof Buffer).to.equal(true);
    });

    it('should accept options and outputPath parameters', async () => {
        const options = { title: 'Test Chart', label: 'Test Data' };
        const outputPath = './test/pie-chart.png';
        await createPieChart(testData, options, outputPath);

        const stats = fs.statSync(outputPath);
        const fileSizeInBytes = stats.size;
        expect(fileSizeInBytes).to.be.above(0);
        expect(fs.existsSync(outputPath)).to.equal(true);
        fs.unlinkSync(outputPath);
    });
});


describe('createScatterChart', () => {
    // Sample test data
    const testData = [
        { x: 10, y: 20 },
        { x: 20, y: 30 },
        { x: 30, y: 10 },
        { x: 40, y: 50 },
    ];

    it('should return a buffer containing a scatter chart image', async () => {
        const imageBuffer = await createScatterChart(testData);
        expect(imageBuffer instanceof Buffer).to.equal(true);
    });

    it('should accept options and outputPath parameters', async () => {
        const options = { title: 'Test Chart', label: 'Test Data' };
        const outputPath = './test/scatter-chart.png';
        await createScatterChart(testData, options, outputPath);

        const stats = fs.statSync(outputPath);
        const fileSizeInBytes = stats.size;
        expect(fileSizeInBytes).to.be.above(0);
        expect(fs.existsSync(outputPath)).to.equal(true);
        fs.unlinkSync(outputPath);
    });
});



describe('createPolarAreaChart', () => {
    // Sample test data
    const testData = [{ label: 'A', value: 20 }, { label: 'B', value: 40 }, { label: 'C', value: 30 }];
    it('should return a buffer containing a polar area chart image', async () => {
        const imageBuffer = await createPolarAreaChart(testData);
        expect(imageBuffer instanceof Buffer).to.equal(true);
    });

    it('should accept options and outputPath parameters', async () => {
        const options = { title: 'Test Chart', label: 'Test Data' };
        const outputPath = './test/polar-area-chart.png';
        await createPolarAreaChart(testData, options, outputPath);

        const stats = fs.statSync(outputPath);
        const fileSizeInBytes = stats.size;
        expect(fileSizeInBytes).to.be.above(0);
        expect(fs.existsSync(outputPath)).to.equal(true);
        fs.unlinkSync(outputPath);
    });
});