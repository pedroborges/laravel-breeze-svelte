<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { HTMLLabelAttributes } from 'svelte/elements'

    let {
        class: className,
        children,
        value,
        ...attrs
    }: HTMLLabelAttributes & {
        children?: Snippet
        value?: string
    } = $props()
</script>

<label {...attrs} class="block text-sm font-medium text-gray-700 dark:text-gray-300 {className}">
    {#if value}
        {value}
    {:else if children}
        {@render children()}
    {/if}
</label>
