const http = require("http");
const url = "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22";
const reQuezt = require("request");
const server = http.createServer((request,response)=>{
    reQuezt(url,function(err,res,body){
        const data = JSON.parse(body);
        response.write("<html><body><div id = 'container'>");
        response.write("<h1>" + "City Name: " + data['name'] + "</h1>");
        response.write("<h2>" + "Temperature: " + data.main['temp'] + "</h2>");
        response.write("<h2>" + "Pressure: " + data.main['pressure'] + " Pascal" + "</h3>");
        response.write("<h3>" + "Sunset Time: " + new Date(data.sys['sunset'] * 1000) + "</h3>");
        response.write("<h3>" + "Humidity: "+ data.main['humidity'] + " Farenheit" + "</h3>");
        response.write("</div></body></html>");
        response.end();
    })
}).listen(3000,()=>{
    console.log("Weather app is up and running");
})
