import '../css/app.css'
import './bootstrap'

import type { ResolvedComponent } from '@inertiajs/svelte'
import { createInertiaApp } from '@inertiajs/svelte'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { defineRoutes } from 'momentum-trail'
import { hydrate, mount } from 'svelte'
import routes from './routes.json'

defineRoutes(routes)

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(`./Pages/${name}.svelte`, import.meta.glob<ResolvedComponent>('./Pages/**/*.svelte')),
    setup({ el, App }) {
        if (el.dataset.serverRendered === 'true') {
            hydrate(App, { target: el })
        } else {
            mount(App, { target: el })
        }
    },
})
