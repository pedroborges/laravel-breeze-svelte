<script lang="ts">
    import type { Snippet } from 'svelte'
    import { Link } from '@inertiajs/svelte'

    let {
        active = false,
        children,
        href,
        ...attrs
    }: {
        active?: boolean
        children: Snippet
        href: string
    } = $props()
</script>

<Link
    {...attrs}
    {href}
    class={`
        inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out
        ${
            active
                ? 'border-indigo-400 text-gray-900 focus:border-indigo-700 focus:outline-none dark:border-indigo-600 dark:text-gray-100'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700 focus:outline-none dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300 dark:focus:border-gray-700 dark:focus:text-gray-300'
        }
    `}
>
    {@render children()}
</Link>
