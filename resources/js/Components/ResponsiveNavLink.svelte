<script lang="ts">
    import type { Snippet } from 'svelte';
    import { Link } from '@inertiajs/svelte';

    let { active = false, children, href, ...attrs }: {
        active?: boolean;
        children: Snippet;
        href: string;
    } = $props();
</script>

<Link
    {...attrs}
    { href }
    class={`
        block w-full ps-3 pe-4 py-2 border-l-4 text-start text-base font-medium transition duration-150 ease-in-out
        ${active
            ? 'border-indigo-400 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300'
            : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600'
        }
    `}
>
    {@render children()}
</Link>
