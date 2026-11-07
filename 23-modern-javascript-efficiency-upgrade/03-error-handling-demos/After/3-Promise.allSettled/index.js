function uploadFile(filename) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 2000) + 1000;

        setTimeout(() => {
            if (Math.random() < 0.67) {
                resolve(`Upload succeeded for ${filename}.`);
            } else {
                reject(new Error(`Upload failed for ${filename}.`));
            }
        }, delay);
    });
}

const uploads = await Promise.allSettled([
    uploadFile('band-photo.jpg'),
    uploadFile('band-logo.png'),
    uploadFile('terms-and-conditions.pdf')
]);

for (const upload of uploads) {
    if (upload.status === 'fulfilled') {
        console.log(upload.value);
    } else {
        console.error(upload.reason.message);
    }
}
