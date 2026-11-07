const user = { name: 'Kim', urls: { personal: undefined, company: 'http://example.com' } };

const personal = user.urls?.personal ?? 'no personal homepage';
const company = user.urls?.company ?? 'no company homepage';
const usesHTTPS = user.urls?.company?.startsWith('https://');

console.log(`Personal homepage: ${personal}
Company homepage: ${company} - uses HTTPS: ${usesHTTPS}`);