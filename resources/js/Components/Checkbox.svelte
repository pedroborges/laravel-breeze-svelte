<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements'

    let {
        checked = $bindable(false),
        class: className,
        ...attrs
    }: HTMLInputAttributes & {
        checked?: boolean
    } = $props()
</script>

<input
    {...attrs}
    type="checkbox"
    bind:checked
    class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800 {className}"
/>
