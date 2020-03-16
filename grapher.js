class PieChart{

	constructor(locationName, dataIn, key, value, width, height){
		let self = this;
		this.locationName = locationName;
		this.dataIn = dataIn;
		this.width = width;
		this.height = height;
		this.key = key;
		this.value = value;

		//Sets margin reagions of the pie chart
		this.margin = {top: 20, right: 20, bottom: 20, left: 20},
			width = width - self.margin.right - self.margin.left,
			height = width - self.margin.top - self.margin.bottom,
			this.radius = self.width/2;

		//color range, (red,blue,green)
		this.color = d3.scaleOrdinal()
			.range(["#FF5252", "#6FB76F", "#64B5F6"]);

		//Creation of each arc
		this.arc = d3.arc()
			.outerRadius(self.radius - 10)
			.innerRadius(0);

		//Sets the arc position
		this.labelArc = d3.arc()
			.outerRadius(self.radius - 40)
			.innerRadius(self.radius - 40);

		//Sets the region sized of each arc
		this.pie = d3.pie()
			.sort(null)
			.value(function(d) { return d[1][self.value]; });

		this.initGraph()
	}

	initGraph() {
		let self = this;

		//Body of Pie Chart
		this.svg = d3.select(`${self.locationName}`).append("svg")
			.attr("width", self.width)
			.attr("height", self.height)
			.append("g")
			.attr("transform", "translate(" + self.width / 2 + "," + self.height / 2 + ")");

			//Data inputter into pie chart
			this.g = this.svg.selectAll(".arc")
				.data(this.pie(Object.entries(self.dataIn)))
				.enter().append("g")
				.attr("class", "arc");

			//Sets each reigon to difffernt colors 
			this.g.append("path")
				.attr("d", this.arc)
				.style("fill", function (d) { return self.color(d.data[1][self.key]); });

			//Displays name and ammount on top of pie chart
			this.g.append("text")
				.attr("transform", function (d) { return "translate(" + self.arc.centroid(d) + ")"; })
				.attr("dy", "1em")
				.attr("dx", "1em")
				.style("text-anchor", "middle")
				.text(function (d) { return d.data[1][self.key] + ": " + d.data[1][self.value]; });
	}
}
module.exports = PieChart

class BarChart{

	constructor(locationName, longNames, dataIn, key, value, width, height, ytitle, xtitle, title){
		let self = this;
		this.locationName = locationName;
		this.dataIn = dataIn;
		this.width = width;
		this.height = height;
		this.key = key;
		this.value = value;
		this.longNames = longNames || "False";
		this.xtitle = xtitle || "";
		this.ytitle = ytitle || "";
		this.title = title || "";

		//Sets Size of bar graph
		this.margin = {top: 20, right: 50, bottom: 30, left: 60},
			width = 960 - self.margin.right - self.margin.left,
			height = 500 - self.margin.top - self.margin.bottom,

		//Sets where the x and y axis will start and end 
		this.x = d3.scaleBand().range([0, self.width]).padding(0.3);
		this.y = d3.scaleLinear().range([self.height, 15]);

		//Removes x-axis labels if to long for neatness
		if(longNames== "False"){
			self.isLong = 0
		}
		else{
			self.isLong = 500
		}

		this.initGraph()
	}

	initGraph() {
		let self = this;

		//Body of the bar graph
		this.svg = d3.select(`${self.locationName}`).append("svg")
			.attr("width", self.width + self.margin.left + self.margin.right)
			.attr("height", self.height + self.margin.top + self.margin.bottom)
			.append("g")
			.attr("transform", "translate(" + self.margin.left + "," + self.margin.top + ")");

			this.g = this.svg.append("g")

				//Format the data
				this.data = self.dataIn
				this.x.domain(self.data.map(function(d) { return d[self.key]; }));
				this.y.domain([0, d3.max(self.data, function(d) { return d[self.value]; })]);

				//Data Inputer to graph
				this.g.selectAll(".bar")
					.data(self.data)
					.enter().append("rect")
					.attr("class", "bar")
					.style("fill", "steelblue")
					.on("mouseover", onMouseOver)
					.on("mouseout", onMouseOut)
					.attr("x", function(d) { return self.x(d[self.key]); })
					.attr("y", function(d) { return self.y(d[self.value]); })
					.attr("width", self.x.bandwidth())
					.attr("height", function(d) { return self.height - self.y(d[self.value]); });

				//X-Axis Formation
				this.g.append("g")
					.attr("class", "x axis")
					.attr("transform", "translate(0," + self.height + ")")
					.call(d3.axisBottom(self.x))
					.selectAll("text")
					.attr("y", self.isLong)		//title_x pos y
					.style("text-anchor", "end")
					.attr("dx", "-.8em")
					.attr("transform", "rotate(-65)");
				//X-Axis Title
				this.g.append("g")
					.append("text")
					.attr("transform", "translate(0," + self.height + ")")
					.attr("y", (self.height-475))
					.attr("x", (self.width / 2))
					.style("text-anchor", "middle")
					.attr("stroke", "black")
					.text(self.xtitle);

				//Y-Axis Formation
				this.g.append("g")
					.call(d3.axisLeft(self.y).tickFormat(function(d){ return d;}).ticks(10));
				//Y-Axis Title
				this.g.append("g")
					.append("text")
					.attr("transform", "rotate(-90)")
					.attr("y", 15)
					.attr("x", -(self.height / 2))
					.attr("dy", "-3.8em")
					.attr("text-anchor", "end")
					.attr("stroke", "black")
					.text(self.ytitle);


				//GRAPH TITLE
				this.g.append("text")
					.attr("transform", "translate(100,0)")
					.attr("x", self.width/2)
					.attr("y", 5)
					.attr("font-size", "18px")
					.text(self.title);


				//mouseover event handler function (add label)
				function onMouseOver(d, i) {
					d3.select(this)
					 .attr('class', 'highlight');
					
					d3.select(this)
						.transition()		// adds animation
						.duration(400)
						.attr('width', self.x.bandwidth() + 5)
						.attr("y", function(d) { return self.y(d[self.value]) - 10; })
						.attr("height", function(d) { return self.height - self.y(d[self.value]) + 10; });

					self.g.append("text")
						.attr('class', 'val') 
						.attr('x', 10)
						.attr('y', 5)
						.text(function() {
							return [d[self.key]+": "+d[self.value]];		// Value of the text
						});
				}

				//mouseover event handler function pt.2 (remove label)
				function onMouseOut(d, i) {
					d3.select(this)
						.attr('class', 'bar');

					d3.select(this)
						.transition()		// adds animation
						.duration(400)
						.attr('width', self.x.bandwidth())
						.attr("y", function(d) { return self.y(d[self.value]); })
						.attr("height", function(d) { return self.height - self.y(d[self.value]); });

					d3.selectAll('.val')
						.remove()
				}
	}
}
module.exports = BarChart