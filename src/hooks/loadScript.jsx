import React from 'react';

export default function loadScript(url) {
    console.log(url);
    const script = document.createElement('script');
    document.getElementById(url)?.remove();
    script.id = url;
    script.src = url;
    script.async = true;

    document.body.appendChild(script);
}
