const input =document.querySelector("#input");

const searchBtn =document.querySelector("#btn");

const weatheImg =document.querySelector("#weatheimg");

const temperature =document.querySelector("#temperature");
const desc =document.querySelector("#cloud");

const humidity =document.querySelector(".info1");
const windSpeed =document.querySelector(".info2");
const errorBox = document.querySelector(".error-box");
hiddenBox = document.querySelector(".hidden");


async function weatherchecher(city){

   const apiKey = "57c7c820244b5419ca67e01bbf814745";

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
console.log(url);

   let Data= await fetch(`${url}`)
   .then(response => response.json());


   if(Data.cod ==="404"){
      errorBox.style.display = "flex";
      hiddenBox.style.display = "none";
   }


   errorBox.style.display = "none";
   hiddenBox.style.display = "flex";
   
   temperature.innerHTML = `${math.round(Data)}`;

   desc.innerHTML = `${Data.weather[0]}`;

   humidity.innerHTML = `${Data.main.humidity}`;

   windSpeed.innerHTML = `${Data.main.windspeed}`;

}  if(Data.weather[0].main ==="clouds"){
    weatheImg.src = "/cloud.png";
}
else if(Data.weather[0].main ==="clear"){
   weatheImg.src = "/clear.png";
}
else if(Data.weather[0].main ==="rain"){
   weatheImg.src = "/rain.png";
}
else if(Data.weather[0].main ==="snow"){
   weatheImg.src = "/clear.png";
}



searchBtn.addEventListener("click",()=>{
   weatherchecher(input.vlaue);
});