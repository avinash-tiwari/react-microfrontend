import React from 'react';

const app1 = ()=> {
    return React.lazy(async () => await import('app1/Counter'));
}

const app2 = ()=> {
    return React.lazy(async () => await import('app2/Display'));
}

const bossberry = ()=> {
    return React.lazy(async () => await import('bossberry/Game'));
}

const tapberry = ()=> {
    return React.lazy(async () => await import('tapberry/Game'));
}

export const manager = (appString) => {
    const COMPONENT_MAP = {
        app1: app1,
        app2: app2,
        bossberry: bossberry,
        tapberry: tapberry
    }
    return COMPONENT_MAP[appString]();
}