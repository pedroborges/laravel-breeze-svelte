<script lang="ts">
    import { inertia } from '@inertiajs/svelte'
    import ApplicationLogo from '@/Components/ApplicationLogo.svelte'
</script>

<div class="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
    <div>
        <a use:inertia href="/">
            <ApplicationLogo class="h-20 w-20 fill-current text-gray-500" />
        </a>
    </div>

    <div class="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800">
        <slot />
    </div>
</div>
