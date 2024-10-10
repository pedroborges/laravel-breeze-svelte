<script lang="ts">
    import Checkbox from '@/Components/Checkbox.svelte'
    import GuestLayout from '@/Layouts/GuestLayout.svelte'
    import InputError from '@/Components/InputError.svelte'
    import InputLabel from '@/Components/InputLabel.svelte'
    import PrimaryButton from '@/Components/PrimaryButton.svelte'
    import TextInput from '@/Components/TextInput.svelte'
    import { inertia, useForm } from '@inertiajs/svelte'
    import { route } from 'momentum-trail'

    let {
        canResetPassword,
        status,
    }: {
        canResetPassword?: boolean
        status?: string
    } = $props()

    const form = useForm({
        email: '',
        password: '',
        remember: false,
    })

    const submit = (e: SubmitEvent) => {
        e.preventDefault()

        $form.post(route('login'), {
            onFinish: () => $form.reset('password'),
        })
    }
</script>

<svelte:head>
    <title>Log in</title>
</svelte:head>

<GuestLayout>
    {#if status}
        <div class="mb-4 text-sm font-medium text-green-600">
            {status}
        </div>
    {/if}

    <form onsubmit={submit}>
        <div>
            <InputLabel for="email" value="Email" />

            <TextInput
                id="email"
                type="email"
                class="mt-1 block w-full"
                bind:value={$form.email}
                required
                autofocus
                autocomplete="username"
            />

            <InputError class="mt-2" message={$form.errors.email} />
        </div>

        <div class="mt-4">
            <InputLabel for="password" value="Password" />

            <TextInput
                id="password"
                type="password"
                class="mt-1 block w-full"
                bind:value={$form.password}
                required
                autocomplete="current-password"
            />

            <InputError class="mt-2" message={$form.errors.password} />
        </div>

        <div class="mt-4 block">
            <label class="flex items-center">
                <Checkbox name="remember" bind:checked={$form.remember} />
                <span class="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
            </label>
        </div>

        <div class="mt-4 flex items-center justify-end">
            {#if canResetPassword}
                <a
                    use:inertia
                    href={route('password.request')}
                    class="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                >
                    Forgot your password?
                </a>
            {/if}

            <PrimaryButton class="ms-4 {$form.processing && 'opacity-25'}" disabled={$form.processing}
                >Log in</PrimaryButton
            >
        </div>
    </form>
</GuestLayout>
