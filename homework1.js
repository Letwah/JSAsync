/**
Using a HTML/JS file in the browser-
Use axios to get weather data from the API I showed at the start of the lesson
Wrap the axios call in an async function
Use await before the axios call
Destructure the response to get the { data } part of the response
Console.log the weather data (this will show you completed the above) */

const apiURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=52&lon=1.3&appid={goeshere}";

const getData = async () => {
  //just before gettin data add spinner
  console.log("hello");
  console.log(document.getElementById("root"));
  document.getElementById("root").innerHTML = `<div class="lds-ripple">
                                                <div></div>
                                                <div></div>
                                                </div>`;

  try {
    const { data } = await axios.get(apiURL);
    //once i have data create HTML
    const html = data.list.map((item) => {
      return `<div class = "item">
                <h1> ${new Date(item.dt * 1000).toLocaleString()} </h1>
                <p> ${Math.round(item.main.temp - 273.15)}&#8451;</p>
                <p> ${item.weather[0].description} </p>
            </div>`;
    });
    // console.log(html);
    //override the data with the newly created html
    document.getElementById("root").innerHTML = html.join("");
  } catch (error) {
    alert("something went wrong");
  }
};

getData();

//difference bewteen progress and error
//pulling data form third part and using it API
