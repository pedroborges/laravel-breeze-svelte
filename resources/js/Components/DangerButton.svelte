<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { HTMLButtonAttributes } from 'svelte/elements'

    let {
        children,
        class: className,
        ...attrs
    }: HTMLButtonAttributes & {
        children: Snippet
    } = $props()
</script>

<button
    {...attrs}
    class="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 dark:focus:ring-offset-gray-800 {className}"
>
    {@render children()}
</button>
