


function getdata() {
    city=document.getElementById('holder_input').value;
    url = `http://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=94e00988c19fd8bb336eb233b8876e64`
    fetch(url).then((response)=>{
      return response.json();
    }).then((data)=> {

           let weather = data['main']['temp'];
           let name = data['name'];

           document.getElementById('text-data').innerHTML = name+":"+weather+"~CELSIUS"
           document.getElementById('holder_input').value = "";


    }).catch(rss =>{
        alert("INVAILD VALUE")
    })

}
