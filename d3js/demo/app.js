const canvas = d3.select(".canva");

// var dataArray = [4,15,34, 50, 24, 10, 17,32,16];
var newDataArray = [
    { "height": 4, "fill": "pink" },
    { "height": 15, "fill": "yellow" },
    { "height": 34, "fill": "grey" },
    { "height": 50, "fill": "red" },
    { "height": 24, "fill": "violet" },
    { "height": 10, "fill": "magenta" },
]

// const svg = canvas.append("svg")
//                   .attr("width", 600)
//                   .attr("height", 1000);
// // const svg = canvas.select("svg");
// const rect = svg.selectAll("rect");

// rect.data(dataArray)
//     .enter().append("rect")
//     .attr("fill","red")
//     .attr("height",function(d){
//         return d*10
//     })
//     .attr("x", function(d,i){
//         // console.log(d);
//         return i*50;
//     })
//     .attr("y", function(d,i){
//         return 1000-(d*10)
//     })
//     .attr("width", 10)

const canva2 = d3.select(".canva2");
const svg2 = canva2.append("svg")
                  .attr("width",600)
                  .attr("height",600);
const rect2 = svg2.selectAll("rect");
rect2.data(newDataArray)
     .enter().append("rect")
     .attr("fill",function(d){
         return d.fill
     })
     .attr("x",function(d,i){
         return i*25;
     })
     .attr("y", function (d, i) {
        return 100 - (d.height * 2)
     })
     .attr("height", function (d) {
        return d.height * 2
     })
     .attr("width",24)
