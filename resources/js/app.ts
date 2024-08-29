import './bootstrap';
import '../css/app.css';

import type { SvelteComponent } from 'svelte';
import { mount } from 'svelte'
import { createInertiaApp } from '@inertiajs/svelte'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.svelte`, import.meta.glob<SvelteComponent>('./Pages/**/*.svelte')),
    setup({ el, App, props }) {
        return mount(App, { target: el}, props)
    },
    progress: {
        color: '#F00',
    },
});
