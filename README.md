# imagine-graph
<p class="align-center">
<img src="./images/cover.png"/>
</p>
This npm package offers a user-friendly way to create interactive charts, graphs, and maps from various data sources. With its intuitive interface and powerful tools, users can easily generate stunning visualizations to better understand their data and communicate insights to others.
</br>



To use the chart functions, you first need to install the npm package and import the relevant function(s) into your project. Here's an example of how to use the createBarChart function:

### Install the package:

```bash
npm install imagine-graph
```


### Bar Chart
Import the createBarChart function into your project:

```javascript
const { createBarChart } = require('imagine-graph');
```

Call the createBarChart function with your data and options:

```javascript
const data = [
    { label: 'A', value: 10 },
    { label: 'B', value: 20 },
    { label: 'C', value: 30 },
    { label: 'D', value: 15 },
];

const options = {
    title: 'My Bar Chart',
    width: 600,
    height: 400,
    backgroundColor: '#ffffff',
    borderColor: '#75a485',
    titleColor: '#75a485',
    labelColor: '#75a485',
    borderWidth: 2
};

createBarChart(data, options, './mychart.png')
    .then(filePath => {
        console.log(`Chart saved to ${filePath}`);
    })
    .catch(error => {
        console.error('Error creating chart:', error);
    });

```
or can access buffer by calling following method and don't pass path

```javascript
// To get the image buffer
const imageBuffer = await createBarChart(data, options);
console.log(imageBuffer);
// <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 03 20 00 00 02 58 08 06 00 00 00 9a 76 82 70 00 00 00 06 62 4b 47 44 00 ff 00 ff 00 ff a0 bd a7 ... 36691 more bytes>
```