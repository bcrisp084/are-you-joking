$(document).ready(() => {
  const getJoke = $("#get-joke");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "16ad913096msh3132f772dc507f0p1eedddjsn83b05885f4cf",
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  };
  const query = "https://dad-jokes.p.rapidapi.com/random/joke";
  getJoke.click(() => {
    fetch(query, options)
      .then((response) => response.json())
      .then((data) => {
        const setup = data.body[0].setup;
        const punch = data.body[0].punchline;
        $("#joke").text(setup);
        $("#punch").text(punch);
      })
      .catch((err) => console.error(err));
  });
});
