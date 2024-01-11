$("form").submit(function(e) {
    e.preventDefault();
    $("#display").empty();
    let name =  e.currentTarget.name.value;
    if(!name){
  
      alert("Enter name");
  
      return;
    }
    getCountryName(name).then(result =>{
      result.forEach(element => {
        var card = $('<div>', {class: "card"}).appendTo('#display');
        var country = $('<div>', {class: "country-info"}).appendTo(card);
  
        var img = $('<a href="https://restcountries.eu/rest/v2/name/${name}"><div>', 
          {class: "img"}).appendTo(country);
        $('<img>', {src: element.flag}).appendTo(img);
        var text = $('<div>', {class: "right-text"}).appendTo(country);
        $('<p>', {text: "Name: " + element.name}).appendTo(text);
        $('<p>', {text: "Top Level Domain: " + 
        element.topLevelDomain}).appendTo(text);
        $('<p>', {text: "Capital: " + element.capital}).appendTo(text);
        $('<h4>', {text: 'Currencies:'}).appendTo(text);
        element.currencies.forEach(element =>{
          var currencies = $('<div>', {
            class: "currencies"
          }).appendTo(text);
          $('<span>', {text: element.code + " "}).appendTo(currencies);
        })
      });
  
    }).catch(err =>console.log(err));
  });
  
  async function getCountries(){
    const response = await 
    fetch(`https://restcountries.eu/rest/v2/all`);
    const responseData = await response.json();
  
    return responseData;
  }
  
  async function getCountryName(name){
    const response = await 
    fetch(`https://restcountries.eu/rest/v2/name/${name}`);
    const responseData = await response.json();
  
    return responseData;
  }