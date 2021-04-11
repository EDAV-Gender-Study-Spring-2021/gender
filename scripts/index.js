import {
  select,
  csv,
  scaleLinear,
  extent,
  axisLeft,
  axisBottom,
  format
} from 'd3';

const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const render = data => {
  const title = 'Social, Educational, and Employment Trends';
  
  const xValue = d => d.emp;
  const xAxisLabel = 'Employment';
  
  const yValue = d => d.educ;
  const yAxisLabel = 'Education';
  
  const circleRadius = 10;
  
  const margin = { top: 60, right: 40, bottom: 175, left: 150 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  
  //NA value in education is showing up as the top value (set NA to 0 and fix the scales?)
  const xScale = scaleLinear()
    .domain([40, 100])
    .range([0, innerWidth])
    .nice();
  
 const yScale = scaleLinear()
  .domain([20, 200])
  .range([innerHeight, 0])
  .nice();

  //Might need to adjust the domain of myColor based on the range of Scores for all years
	const myColor = scaleLinear().domain([0.3, 1])
  	.range(["black", "green"])
  
  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);
  
  const xAxis = axisBottom(xScale)
    .tickSize(-innerHeight)
    .tickPadding(15);
  
  const yAxis = axisLeft(yScale)
    .tickSize(-innerWidth)
    .tickPadding(10);
  
  const yAxisG = g.append('g').call(yAxis);
  yAxisG.selectAll('.domain').remove();
  
  yAxisG.append('text')
      .attr('class', 'axis-label')
      .attr('y', -93)
      .attr('x', -innerHeight / 2)
      .attr('fill', 'black')
      .attr('transform', `rotate(-90)`)
      .attr('text-anchor', 'middle')
      .text(yAxisLabel);
  
  const xAxisG = g.append('g').call(xAxis)
    .attr('transform', `translate(0,${innerHeight})`);
  
  xAxisG.select('.domain').remove();
  
  xAxisG.append('text')
      .attr('class', 'axis-label')
      .attr('y', 75)
      .attr('x', innerWidth / 2)
      .attr('fill', 'black')
      .text(xAxisLabel);
  
  g.selectAll('circle').data(data)
    .enter().append('circle')
      .attr('cy', d => yScale(yValue(d)))
      .attr('cx', d => xScale(xValue(d)))
      .attr('r',  d => circleRadius)
  		.attr('fill', function(d){return myColor(d.Score)});
  
  g.append('text')
      .attr('class', 'title')
      .attr('y', -10)
      .text(title);
};

var object_dataset = [
  {cx: 60, cy: 450, text: `1995-1999`},
  {cx: 240, cy: 450, text: `2000-2004`},
  {cx: 420, cy: 450, text: `2005-2009`},
  {cx: 600, cy: 450, text: `2010-2014`},
  {cx: 780, cy: 450, text: `2015-2019`},
  ];

svg.selectAll('rect').data(object_dataset)
  .enter().append('rect')
    .attr('x', d => d.cx)
    .attr('y', d => d.cy - 30)
    .attr('width', 120)
    .attr('height', 50)
    .attr('fill', 'lightgreen');

svg.selectAll('text').data(object_dataset)
	.enter().append('text')
		.attr('x', d => d.cx + 60)
		.attr('y', d => d.cy)
		.text(d => d.text)
		.attr('fill', 'black')
		.attr('text-anchor', 'middle');

//Copy and paste links below into csv('___') to load in data for different years
csv('https://gist.githubusercontent.com/vincent-sc4755/a1366eaa92bbde1871d2d274914fffad/raw/data_1.csv')
  .then(data => {
    data.forEach(d => {
      d.Score = +d.Score;
      d.educ = +d.educ1; //Currently need to manually update based on input 
      d.emp = +d.emp1; //Same as above
    });
    render(data);
  });

//Links to load in data_1 through 5
//data_1
//https://gist.githubusercontent.com/vincent-sc4755/a1366eaa92bbde1871d2d274914fffad/raw/data_1.csv
//data_2
//https://gist.githubusercontent.com/vincent-sc4755/649c4ae3d7ca618b67c168efc64f15a8/raw/data_2.csv
//data_3
//https://gist.githubusercontent.com/vincent-sc4755/2e3518e8b6d3792ad4273d586a720a85/raw/data_3.csv
//data_4
//https://gist.githubusercontent.com/vincent-sc4755/726dfe94c60c2190466f8a71885d9645/raw/data_4.csv
//data_5
//https://gist.githubusercontent.com/vincent-sc4755/1d3707cf9e243ee77d8ea2e1097639ac/raw/data_5.csv