console.log("Herro from d3js")

var dataArray = [4,15, 34, 44]
var dataArray2 = [4,15, 60, 120]

const canvas1 = d3.select(".canva1")
const svg1 = canvas1.append("svg")
                .attr('width', '500')
                .attr('height', '500');

const rect = svg1.selectAll('rect');

rect.data(dataArray)
    .enter().append('rect')
    .attr('width', '24')
    .attr('fill', 'orange')
    .attr('height', function (d){
      return d*2;
    })
    .attr('x', function(d,i){
      console.log(d);
      return i*25;
    });



const canvas2 = d3.select('.canva2');

const svg2 = canvas2.append("svg")
                .attr("width", 500)
                .attr('height', 500)

const rect2 = svg2.selectAll('rect');
rect2.data(dataArray2)
    .enter().append('rect')
    .attr('width', '24')
    .attr('fill', 'orange')
    .attr('height', function (d){
      return d*2;
    })
    .attr('x', function(d,i){
      console.log(d);
      return i*25;
    });
