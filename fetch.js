/* fetch('http://example.com/movies.json') */

fetch("http://example.com/movies.json", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify(requestBody),
})
  .then((response) => {
    // Handle response codes here...
    if (!response.ok) throw response;

    return response.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//Using fetch with async/await

async function callAPI(requestBody) {
  try {
    const response = await fetch("http://example.com/movies.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw response;
    }
    const data = await response.json();
    renderFn(data);
  } catch (err) {
    console.log(err);
  }
}
