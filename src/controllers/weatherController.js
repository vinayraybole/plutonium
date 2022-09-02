let axios = require("axios")

//  get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)
//  then change the above to get the temperature only( of London)
//  Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature
// result should look something like this
// [
// {city:"London", temp: 280},
// {city:"Moscow", temp: 290},
// {city:"Bangalore", temp: 301.2},
// .......
// ]

let getSortedCities = async function (req,res) {
try  {
      let cities= ["London","Moscow","Banglore","Mumbai","Delhi"]
      let cityObjArray =[]
      for (i=0 ; i<cities.length; i++){
        let obj = {city: cities [i] }
        let resp= await axios.get (`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=946d7341ba0942c7b72a843235600d00`)
        console.log (resp.data.main.temp)

        obj.temp = resp.data.main.temp
        cityObjArray = push(obj)
      }

    let sorted = cityObjArray.sort(function(a,b) {return a.temp - b.temp})
    console.log (sorted)
    res.status(200).send({status: true, data: sorted})
     
}  catch (error) {
    console.log (error)
    res.status(500).send({status: false, msg:"server error"})
}
}
module.exports.getSortedCities= getSortedCities
