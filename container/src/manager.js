import React from 'react';

const app1 = async ()=> {
    // return React.lazy(async () => await import('app1/Counter'));
    let { mount } = await import('app1/Counter');
    return mount;
}

const app2 = async ()=> {
    // return React.lazy(async () => await import('app2/Display'));
    let { mount } = await import('app2/Display');
    return mount;
}

const bossberry = async ()=> {
    // return React.lazy(async () => await import('bossberry/Game'));
    let { mount } = await import('bossberry/Game');
    return mount;
}

const tapberry = async ()=> {
    // return React.lazy(async () => await import('tapberry/Game'));
    let { mount } = await import('tapberry/Game');
    return mount;
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