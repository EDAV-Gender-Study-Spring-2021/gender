(function (d3) {
  'use strict';

  const svg = d3.select('svg');
  const width = +svg.attr('width');
  const height = +svg.attr('height');

  const render = data_1 => {
    const title = 'Social, Educational, and Employment Trends';
    const xValue_1 = d => d.emp1;
    const yValue_1 = d => d.educ1;
    const xValue_2 = d => d.emp2;
    const yValue_2 = d => d.educ2;
    const xValue_3 = d => d.emp3;
    const yValue_3 = d => d.educ3;
    const xValue_4 = d => d.emp4;
    const yValue_4 = d => d.educ4;
    const xValue_5 = d => d.emp5;
    const yValue_5 = d => d.educ5;
    const rValue_1 = d => d.Score1;
    const rValue_2 = d => d.Score2;
    const rValue_3 = d => d.Score3;
    const rValue_4 = d => d.Score4;
    const rValue_5 = d => d.Score5;

    const xAxisLabel = 'Employment';
    const yAxisLabel = 'Education';
    
    const circleRadius = 10;
    
    const margin = { top: 60, right: 40, bottom: 175, left: 150 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    //NA value in education is showing up as the top value (set NA to 0 and fix the scales?)
    const xScale = d3.scaleLinear()
      .domain([40, 100])
      .range([0, innerWidth])
      .nice();
    
   const yScale = d3.scaleLinear()
    .domain([20, 180])
    .range([innerHeight, 0])
    .nice();
   
  const compute = d3.interpolate('lightgreen', 'black')
  const linear = d3.scaleLinear().domain([0.46, 1]).range([0, 1])

    //Might need to adjust the domain of myColor based on the range of Scores for all years
  	const myColor = d3.scaleLinear().domain([0.3, 1])
    	.range(["black", "green"]);
    
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
    
    const xAxis = d3.axisBottom(xScale)
      .tickSize(-innerHeight)
      .tickPadding(15);
    
    const yAxis = d3.axisLeft(yScale)
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
    
    g.selectAll('circle').data(data_1)
      .enter().append('circle')
        .attr('cy', d => yScale(yValue_1(d)))
        .attr('cx', d => xScale(xValue_1(d)))
        .attr('r',  d => circleRadius)
    		.attr('fill', d => compute(linear(rValue_1(d))));
    
    g.append('text')
        .attr('class', 'title')
        .attr('y', -10)
        .text(title);

  var object_dataset = [
    {cx: 60, cy: 450, text: `1995-1999`,no:"r1"},
    {cx: 240, cy: 450, text: `2000-2004`,no:"r2"},
    {cx: 420, cy: 450, text: `2005-2009`,no:"r3"},
    {cx: 600, cy: 450, text: `2010-2014`,no:"r4"},
    {cx: 780, cy: 450, text: `2015-2019`,no:"r5"},
    ];

  svg.selectAll('rect').data(object_dataset)
    .enter().append('rect')
      .attr('x', d => d.cx + 50)
      .attr('y', d => d.cy - 30)
      .attr('width', 120)
      .attr('height', 50)
      .attr('fill', 'lightgreen')
      .attr('id', d => d.no);


    
  svg.select("rect#r2").on("click",function(data_1){
    svg.selectAll("rect").attr("fill","lightgreen")
    svg.select("rect#r2").attr("fill","green")
        svg.selectAll("circle").transition()
        .duration(2000)
        .attr('cy', d => yScale(yValue_2(d)))
        .attr('cx', d => xScale(xValue_2(d)))
        .attr('r',  d => circleRadius)
        .attr('fill', "red")
        .attr('fill', d => compute(linear(rValue_2(d))))})
      ;
          
      svg.select("rect#r1").on("click",function(data_1){
        svg.selectAll("rect").attr("fill","lightgreen")
        svg.select("rect#r1").attr("fill","green")
        svg.selectAll("circle").transition()
        .duration(2000)
        .attr('cy', d => yScale(yValue_1(d)))
        .attr('cx', d => xScale(xValue_1(d)))
        .attr('r',  d => circleRadius)
        .attr('fill', "red")
        .attr('fill', d => compute(linear(rValue_1(d))))})
      ;
          
      svg.select("rect#r3").on("click",function(data_1){
        svg.selectAll("rect").attr("fill","lightgreen")
        svg.select("rect#r3").attr("fill","green")
        svg.selectAll("circle").transition()
        .duration(2000)
        .attr('cy', d => yScale(yValue_3(d)))
        .attr('cx', d => xScale(xValue_3(d)))
        .attr('r',  d => circleRadius)
        .attr('fill', "red")
        .attr('fill', d => compute(linear(rValue_3(d))))})
      ;
      svg.select("rect#r4").on("click",function(data_1){
        svg.selectAll("rect").attr("fill","lightgreen")
        svg.select("rect#r4").attr("fill","green")
        svg.selectAll("circle").transition()
        .duration(2000)
        .attr('cy', d => yScale(yValue_4(d)))
        .attr('cx', d => xScale(xValue_4(d)))
        .attr('r',  d => circleRadius)
        .attr('fill', "red")
        .attr('fill', d => compute(linear(rValue_4(d))))})
      ;
      svg.select("rect#r5").on("click",function(data_1){
        svg.selectAll("rect").attr("fill","lightgreen")
        svg.select("rect#r5").attr("fill","green")
        svg.selectAll("circle").transition()
        .duration(2000)
        .attr('cy', d => yScale(yValue_5(d)))
        .attr('cx', d => xScale(xValue_5(d)))
        .attr('r',  d => circleRadius)
        .attr('fill', "red")
        .attr('fill', d => compute(linear(rValue_5(d))))})
  };


  //Copy and paste links below into csv('___') to load in data for different years
  d3.csv('https://raw.githubusercontent.com/yaojiaye00/final5702/main/data_all.csv')
    .then(data_1 => {
      data_1.forEach(d => {
        d.Score1 = +d.Score1;
        d.educ1 = +d.educ1; //Currently need to manually update based on input 
        d.emp1 = +d.emp1; //Same as above
        d.Score2 = +d.Score2;
        d.educ2 = +d.educ2; 
        d.emp2 = +d.emp2; 
        d.Score3 = +d.Score3;
        d.educ3 = +d.educ3; 
        d.emp3 = +d.emp3; 
        d.Score4 = +d.Score4;
        d.educ4 = +d.educ4; 
        d.emp4 = +d.emp4; 
        d.Score5 = +d.Score5;
        d.educ5 = +d.educ5; 
        d.emp5 = +d.emp5; 
      });
      render(data_1)
    });

  
  //svg.select("rect#r2").on("click",function(event)){
  //  svg.selectAll("circle").data(data_2).transition()
  //  .duration(2000)
  //  .attr('cy', d => yScale(yValue(d)))
  //  .attr('cx', d => xScale(xValue(d)))
  //  .attr('r',  d => circleRadius)
  //  .attr('fill', function(d){return myColor(d.Score)});
  //}

  var object_dataset = [
    {cx: 60, cy: 450, text: `1995-1999`,no:"r1"},
    {cx: 240, cy: 450, text: `2000-2004`,no:"r2"},
    {cx: 420, cy: 450, text: `2005-2009`,no:"r3"},
    {cx: 600, cy: 450, text: `2010-2014`,no:"r4"},
    {cx: 780, cy: 450, text: `2015-2019`,no:"r5"},
    ];

  svg.selectAll('text').data(object_dataset)
    .enter().append('text')
      .attr('x', d => d.cx + 110)
      .attr('y', d => d.cy + 50)
      .text(d => d.text)
      .attr('fill', 'black')
      .attr('text-anchor', 'middle');


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

}(d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHNlbGVjdCxcbiAgY3N2LFxuICBzY2FsZUxpbmVhcixcbiAgZXh0ZW50LFxuICBheGlzTGVmdCxcbiAgYXhpc0JvdHRvbSxcbiAgZm9ybWF0XG59IGZyb20gJ2QzJztcblxuY29uc3Qgc3ZnID0gc2VsZWN0KCdzdmcnKTtcblxuY29uc3Qgd2lkdGggPSArc3ZnLmF0dHIoJ3dpZHRoJyk7XG5jb25zdCBoZWlnaHQgPSArc3ZnLmF0dHIoJ2hlaWdodCcpO1xuXG5jb25zdCByZW5kZXIgPSBkYXRhID0+IHtcbiAgY29uc3QgdGl0bGUgPSAnU29jaWFsLCBFZHVjYXRpb25hbCwgYW5kIEVtcGxveW1lbnQgVHJlbmRzJztcbiAgXG4gIGNvbnN0IHhWYWx1ZSA9IGQgPT4gZC5lbXA7XG4gIGNvbnN0IHhBeGlzTGFiZWwgPSAnRW1wbG95bWVudCc7XG4gIFxuICBjb25zdCB5VmFsdWUgPSBkID0+IGQuZWR1YztcbiAgY29uc3QgeUF4aXNMYWJlbCA9ICdFZHVjYXRpb24nO1xuICBcbiAgY29uc3QgY2lyY2xlUmFkaXVzID0gMTA7XG4gIFxuICBjb25zdCBtYXJnaW4gPSB7IHRvcDogNjAsIHJpZ2h0OiA0MCwgYm90dG9tOiAxNzUsIGxlZnQ6IDE1MCB9O1xuICBjb25zdCBpbm5lcldpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgY29uc3QgaW5uZXJIZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcbiAgXG4gIC8vTkEgdmFsdWUgaW4gZWR1Y2F0aW9uIGlzIHNob3dpbmcgdXAgYXMgdGhlIHRvcCB2YWx1ZSAoc2V0IE5BIHRvIDAgYW5kIGZpeCB0aGUgc2NhbGVzPylcbiAgY29uc3QgeFNjYWxlID0gc2NhbGVMaW5lYXIoKVxuICAgIC5kb21haW4oWzQwLCAxMDBdKVxuICAgIC5yYW5nZShbMCwgaW5uZXJXaWR0aF0pXG4gICAgLm5pY2UoKTtcbiAgXG4gY29uc3QgeVNjYWxlID0gc2NhbGVMaW5lYXIoKVxuICAuZG9tYWluKFsyMCwgMjAwXSlcbiAgLnJhbmdlKFtpbm5lckhlaWdodCwgMF0pXG4gIC5uaWNlKCk7XG5cbiAgLy9NaWdodCBuZWVkIHRvIGFkanVzdCB0aGUgZG9tYWluIG9mIG15Q29sb3IgYmFzZWQgb24gdGhlIHJhbmdlIG9mIFNjb3JlcyBmb3IgYWxsIHllYXJzXG5cdGNvbnN0IG15Q29sb3IgPSBzY2FsZUxpbmVhcigpLmRvbWFpbihbMC4zLCAxXSlcbiAgXHQucmFuZ2UoW1wiYmxhY2tcIiwgXCJncmVlblwiXSlcbiAgXG4gIGNvbnN0IGcgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xuICBcbiAgY29uc3QgeEF4aXMgPSBheGlzQm90dG9tKHhTY2FsZSlcbiAgICAudGlja1NpemUoLWlubmVySGVpZ2h0KVxuICAgIC50aWNrUGFkZGluZygxNSk7XG4gIFxuICBjb25zdCB5QXhpcyA9IGF4aXNMZWZ0KHlTY2FsZSlcbiAgICAudGlja1NpemUoLWlubmVyV2lkdGgpXG4gICAgLnRpY2tQYWRkaW5nKDEwKTtcbiAgXG4gIGNvbnN0IHlBeGlzRyA9IGcuYXBwZW5kKCdnJykuY2FsbCh5QXhpcyk7XG4gIHlBeGlzRy5zZWxlY3RBbGwoJy5kb21haW4nKS5yZW1vdmUoKTtcbiAgXG4gIHlBeGlzRy5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2F4aXMtbGFiZWwnKVxuICAgICAgLmF0dHIoJ3knLCAtOTMpXG4gICAgICAuYXR0cigneCcsIC1pbm5lckhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHJvdGF0ZSgtOTApYClcbiAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgLnRleHQoeUF4aXNMYWJlbCk7XG4gIFxuICBjb25zdCB4QXhpc0cgPSBnLmFwcGVuZCgnZycpLmNhbGwoeEF4aXMpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke2lubmVySGVpZ2h0fSlgKTtcbiAgXG4gIHhBeGlzRy5zZWxlY3QoJy5kb21haW4nKS5yZW1vdmUoKTtcbiAgXG4gIHhBeGlzRy5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2F4aXMtbGFiZWwnKVxuICAgICAgLmF0dHIoJ3knLCA3NSlcbiAgICAgIC5hdHRyKCd4JywgaW5uZXJXaWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAudGV4dCh4QXhpc0xhYmVsKTtcbiAgXG4gIGcuc2VsZWN0QWxsKCdjaXJjbGUnKS5kYXRhKGRhdGEpXG4gICAgLmVudGVyKCkuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgLmF0dHIoJ2N5JywgZCA9PiB5U2NhbGUoeVZhbHVlKGQpKSlcbiAgICAgIC5hdHRyKCdjeCcsIGQgPT4geFNjYWxlKHhWYWx1ZShkKSkpXG4gICAgICAuYXR0cigncicsICBkID0+IGNpcmNsZVJhZGl1cylcbiAgXHRcdC5hdHRyKCdmaWxsJywgZnVuY3Rpb24oZCl7cmV0dXJuIG15Q29sb3IoZC5TY29yZSl9KTtcbiAgXG4gIGcuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd0aXRsZScpXG4gICAgICAuYXR0cigneScsIC0xMClcbiAgICAgIC50ZXh0KHRpdGxlKTtcbn07XG5cbnZhciBvYmplY3RfZGF0YXNldCA9IFtcbiAge2N4OiA2MCwgY3k6IDQ1MCwgdGV4dDogYDE5OTUtMTk5OWB9LFxuICB7Y3g6IDI0MCwgY3k6IDQ1MCwgdGV4dDogYDIwMDAtMjAwNGB9LFxuICB7Y3g6IDQyMCwgY3k6IDQ1MCwgdGV4dDogYDIwMDUtMjAwOWB9LFxuICB7Y3g6IDYwMCwgY3k6IDQ1MCwgdGV4dDogYDIwMTAtMjAxNGB9LFxuICB7Y3g6IDc4MCwgY3k6IDQ1MCwgdGV4dDogYDIwMTUtMjAxOWB9LFxuICBdO1xuXG5zdmcuc2VsZWN0QWxsKCdyZWN0JykuZGF0YShvYmplY3RfZGF0YXNldClcbiAgLmVudGVyKCkuYXBwZW5kKCdyZWN0JylcbiAgICAuYXR0cigneCcsIGQgPT4gZC5jeClcbiAgICAuYXR0cigneScsIGQgPT4gZC5jeSAtIDMwKVxuICAgIC5hdHRyKCd3aWR0aCcsIDEyMClcbiAgICAuYXR0cignaGVpZ2h0JywgNTApXG4gICAgLmF0dHIoJ2ZpbGwnLCAnbGlnaHRncmVlbicpO1xuXG5zdmcuc2VsZWN0QWxsKCd0ZXh0JykuZGF0YShvYmplY3RfZGF0YXNldClcblx0LmVudGVyKCkuYXBwZW5kKCd0ZXh0Jylcblx0XHQuYXR0cigneCcsIGQgPT4gZC5jeCArIDYwKVxuXHRcdC5hdHRyKCd5JywgZCA9PiBkLmN5KVxuXHRcdC50ZXh0KGQgPT4gZC50ZXh0KVxuXHRcdC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcblx0XHQuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJyk7XG5cbi8vQ29weSBhbmQgcGFzdGUgbGlua3MgYmVsb3cgaW50byBjc3YoJ19fXycpIHRvIGxvYWQgaW4gZGF0YSBmb3IgZGlmZmVyZW50IHllYXJzXG5jc3YoJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vdmluY2VudC1zYzQ3NTUvYTEzNjZlYWE5MmJiZGUxODcxZDJkMjc0OTE0ZmZmYWQvcmF3L2RhdGFfMS5jc3YnKVxuICAudGhlbihkYXRhID0+IHtcbiAgICBkYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICBkLlNjb3JlID0gK2QuU2NvcmU7XG4gICAgICBkLmVkdWMgPSArZC5lZHVjMTsgLy9DdXJyZW50bHkgbmVlZCB0byBtYW51YWxseSB1cGRhdGUgYmFzZWQgb24gaW5wdXQgXG4gICAgICBkLmVtcCA9ICtkLmVtcDE7IC8vU2FtZSBhcyBhYm92ZVxuICAgIH0pO1xuICAgIHJlbmRlcihkYXRhKTtcbiAgfSk7XG5cbi8vTGlua3MgdG8gbG9hZCBpbiBkYXRhXzEgdGhyb3VnaCA1XG4vL2RhdGFfMVxuLy9odHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3ZpbmNlbnQtc2M0NzU1L2ExMzY2ZWFhOTJiYmRlMTg3MWQyZDI3NDkxNGZmZmFkL3Jhdy9kYXRhXzEuY3N2XG4vL2RhdGFfMlxuLy9odHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3ZpbmNlbnQtc2M0NzU1LzY0OWM0YWUzZDdjYTYxOGI2N2MxNjhlZmM2NGYxNWE4L3Jhdy9kYXRhXzIuY3N2XG4vL2RhdGFfM1xuLy9odHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3ZpbmNlbnQtc2M0NzU1LzJlMzUxOGU4YjZkMzc5MmFkNDI3M2Q1ODZhNzIwYTg1L3Jhdy9kYXRhXzMuY3N2XG4vL2RhdGFfNFxuLy9odHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3ZpbmNlbnQtc2M0NzU1LzcyNmRmZTk0YzYwYzIxOTA0NjZmOGE3MTg4NWQ5NjQ1L3Jhdy9kYXRhXzQuY3N2XG4vL2RhdGFfNVxuLy9odHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3ZpbmNlbnQtc2M0NzU1LzFkMzcwN2NmOWUyNDNlZTc3ZDhlYTJlMTA5NzYzOWFjL3Jhdy9kYXRhXzUuY3N2Il0sIm5hbWVzIjpbInNlbGVjdCIsInNjYWxlTGluZWFyIiwiYXhpc0JvdHRvbSIsImF4aXNMZWZ0IiwiY3N2Il0sIm1hcHBpbmdzIjoiOzs7RUFVQSxNQUFNLEdBQUcsR0FBR0EsU0FBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFCO0VBQ0EsTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQ2pDLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuQztFQUNBLE1BQU0sTUFBTSxHQUFHLElBQUksSUFBSTtFQUN2QixF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