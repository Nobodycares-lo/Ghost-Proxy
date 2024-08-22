/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/search/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/search/uv.handler.js',
    client: '/search/uv.client.js',
    bundle: '/search/uv.bundle.js',
    config: '/assets/js/uv.config.js',
    sw: '/search/uv.sw.js',
};