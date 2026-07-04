const { addonBuilder, serveHTTP } = require('stremio-addon-sdk');

const manifest = {
    id: 'org.hindi.dubbed',
    version: '1.0.0',
    name: 'Hindi/Dual Audio Finder',
    description: 'Sirf Hindi aur Dual Audio content ke liye',
    resources: ['stream'],
    types: ['movie', 'series'],
    idPrefixes: ['tt']
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler((args) => {
    return Promise.resolve({
        streams: [
            {
                name: 'Hindi Finder',
                title: 'Testing Link - Hindi/Dual',
                url: 'magnet:?xt=urn:btih:EXAMPLE_HASH_HERE',
                type: 'movie'
            }
        ]
    });
});

serveHTTP(builder.getInterface(), { port: process.env.PORT || 3000 });
