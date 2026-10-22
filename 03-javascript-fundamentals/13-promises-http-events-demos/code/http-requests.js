// fetch() — basic HTTP GET request, returns a Response object
const response = await fetch("https://jsonplaceholder.typicode.com/users");

console.log(response.status);
console.log(response.ok);

// response.json() — parse the JSON body of the response
const users = await response.json();

console.log(users[0]);

// fetchJson() — wrap fetch to throw on non-2xx HTTP status
async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

// try/catch around fetchJson — catches both HTTP errors and network failures
try {
  const users = await fetchJson("https://jsonplaceholder.typicode.com/users");
  console.log(users.length);
} catch (error) {
  console.error(error.message);
}

// Validate response shape — parsed JSON isn't guaranteed to match what we expect
const data = await fetchJson("https://jsonplaceholder.typicode.com/users");

if (!Array.isArray(data)) {
  throw new Error("Expected an array of users.");
}

// AbortController — cancel a fetch (here, after 3 seconds)
const controller = new AbortController();

setTimeout(() => {
  controller.abort();
}, 3000);

try {
  const abortableResponse = await fetch("https://jsonplaceholder.typicode.com/users", {
    signal: controller.signal
  });

  console.log(abortableResponse.status);
} catch (error) {
  console.error(error.message);
}