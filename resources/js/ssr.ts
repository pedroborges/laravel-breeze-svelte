import { createInertiaApp, type ResolvedComponent } from '@inertiajs/svelte'
import createServer from '@inertiajs/svelte/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { defineRoutes } from 'momentum-trail'
import routes from './routes.json'

defineRoutes(routes)

createServer((page) =>
    createInertiaApp({
        page,
        resolve: (name) =>
            resolvePageComponent(`./Pages/${name}.svelte`, import.meta.glob<ResolvedComponent>('./Pages/**/*.svelte')),
    }),
)
