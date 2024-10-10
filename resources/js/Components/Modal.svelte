<script lang="ts">
    import type { Snippet } from 'svelte'
    import { onDestroy } from 'svelte'
    import Portal from 'svelte-portal'
    import Transition from 'svelte-transition'

    let {
        children,
        closeable = true,
        maxWidth = '2xl',
        onclose = () => {},
        show = false,
    }: {
        children: Snippet
        closeable?: boolean
        maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
        onclose?: () => void
        show?: boolean
    } = $props()

    let maxWidthClass = $derived(
        {
            sm: 'sm:max-w-sm',
            md: 'sm:max-w-md',
            lg: 'sm:max-w-lg',
            xl: 'sm:max-w-xl',
            '2xl': 'sm:max-w-2xl',
        }[maxWidth],
    )

    $effect(() => {
        document.body.style.overflow = show ? 'hidden' : 'visible'
    })

    onDestroy(() => (document.body.style.overflow = 'visible'))

    function close() {
        if (closeable) {
            onclose()
        }
    }

    function closeOnEscape(e: KeyboardEvent) {
        if (e.key === 'Escape' && show) {
            onclose()
        }
    }
</script>

<svelte:window on:keydown={closeOnEscape} />

<!-- svelte-ignore a11y_click_events_have_key_events -->
<Portal target="body">
    <Transition {show} leave="duration-200">
        <div class="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0" scroll-region>
            <Transition
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="fixed inset-0 transform transition-all" onclick={close}>
                    <div class="absolute inset-0 bg-gray-500 opacity-75 dark:bg-gray-900"></div>
                </div>
            </Transition>

            <Transition
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
                <div
                    class="mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full dark:bg-gray-800 {maxWidthClass}"
                >
                    {@render children()}
                </div>
            </Transition>
        </div>
    </Transition>
</Portal>
