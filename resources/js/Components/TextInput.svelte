<script lang="ts">
    import { onMount } from 'svelte';
    import type { HTMLInputAttributes } from 'svelte/elements';

    let { class: className, value = $bindable(), ...attrs }: HTMLInputAttributes & {
        value?: string;
    } = $props();

    let input: HTMLInputElement;

    export function focus() {
        input?.focus();
    }

    onMount(() => {
        if (attrs.autofocus && input) {
            input.focus();
        }
    });
</script>

<input
    {...attrs}
    class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm {className}"
    bind:value
    bind:this={input}
/>
