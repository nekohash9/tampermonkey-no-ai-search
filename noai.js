// ==UserScript==
// @name         google search without ai
// @description  automatically adds "-ai" to google searches
// @namespace    http://tampermonkey.net/
// @version      2026-04-30
// @author       You
// @match        https://www.google.com/search*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const urlParams = new URLSearchParams(window.location.search);
    let query = urlParams.get('q');

    if (query && !query.includes('-ai')) {
        urlParams.set('q', query + ' -ai');
        window.location.replace(window.location.pathname + '?' + urlParams.toString());
    }
})();
