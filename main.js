


var t = d3.transition()
.duration(2950)
.ease(d3.easeLinear);


function Transition(){



 var btn = d3.select("#button");
 var back = d3.select("#nav");
 btn.transition(t).style("background-color","red");

back.transition(t).style("background-color","red");


}