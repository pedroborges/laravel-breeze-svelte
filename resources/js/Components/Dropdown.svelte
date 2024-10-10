<script lang="ts">
    import type { Snippet } from 'svelte'
    import Transition from 'svelte-transition'

    let {
        align = 'right',
        content,
        contentClasses = 'py-1 bg-white dark:bg-gray-700',
        trigger,
        width = '48',
    }: {
        align?: 'left' | 'right'
        content: Snippet
        contentClasses?: string
        trigger: Snippet
        width?: '48'
    } = $props()

    let open = $state(false)
    let widthClass = $derived({ '48': 'w-48' }[width])
    let alignmentClasses = $derived(
        align === 'left'
            ? 'ltr:origin-top-left rtl:origin-top-right start-0'
            : align === 'right'
              ? 'ltr:origin-top-right rtl:origin-top-left end-0'
              : 'origin-top',
    )

    function closeOnEscape(e: KeyboardEvent) {
        if (open && e.key === 'Escape') {
            open = false
        }
    }
</script>

<svelte:window on:keydown={closeOnEscape} />

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="relative">
    <div onclick={() => (open = !open)}>
        {@render trigger()}
    </div>

    <!-- Full Screen Dropdown Overlay -->
    {#if open}
        <div class="fixed inset-0 z-40" onclick={() => (open = false)}></div>
    {/if}

    <Transition
        show={open}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
    >
        <div
            class="absolute z-50 mt-2 rounded-md shadow-lg {widthClass} {alignmentClasses}"
            onclick={() => (open = false)}
        >
            <div class="rounded-md ring-1 ring-black ring-opacity-5 {contentClasses}">
                {@render content()}
            </div>
        </div>
    </Transition>
</div>
