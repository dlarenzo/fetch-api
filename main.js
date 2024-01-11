const website = "https://iskarr.github.io/austindonovan.github.io/api/business.json";

    fetch(website)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
    })
