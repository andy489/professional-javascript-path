function parseEvents(json) {
    return JSON.parse(json);
}

try {
    const data = '[{"name":"Pluralsight Staff Band","price":39},{"name":"Pluralsight Authors Band","price":49}';
    const events = parseEvents(data);
} catch (error) {
    console.error(error);
}