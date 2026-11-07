function parseEvents(json) {
    return JSON.parse(json);
}

const data = '[{"name":"Pluralsight Staff Band","price":39},{"name":"Pluralsight Authors Band","price":49}';
Promise.try(() => parseEvents(data))
    .then(events => {})
    .catch(error => {
        console.error(error);
    });
