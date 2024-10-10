<script lang="ts">
    import GuestLayout from '@/Layouts/GuestLayout.svelte'
    import InputError from '@/Components/InputError.svelte'
    import InputLabel from '@/Components/InputLabel.svelte'
    import PrimaryButton from '@/Components/PrimaryButton.svelte'
    import TextInput from '@/Components/TextInput.svelte'
    import { inertia, useForm } from '@inertiajs/svelte'
    import { route } from 'momentum-trail'

    const form = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    function submit(e: SubmitEvent) {
        e.preventDefault()

        $form.post(route('register'), {
            onFinish: () => $form.reset('password', 'password_confirmation'),
        })
    }
</script>

<svelte:head>
    <title>Register</title>
</svelte:head>

<GuestLayout>
    <form onsubmit={submit}>
        <div>
            <InputLabel for="name" value="Name" />

            <TextInput
                id="name"
                type="text"
                class="mt-1 block w-full"
                bind:value={$form.name}
                required
                autofocus
                autocomplete="name"
            />

            <InputError class="mt-2" message={$form.errors.name} />
        </div>

        <div class="mt-4">
            <InputLabel for="email" value="Email" />

            <TextInput
                id="email"
                type="email"
                class="mt-1 block w-full"
                bind:value={$form.email}
                required
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
                autocomplete="new-password"
            />

            <InputError class="mt-2" message={$form.errors.password} />
        </div>

        <div class="mt-4">
            <InputLabel for="password_confirmation" value="Confirm Password" />

            <TextInput
                id="password_confirmation"
                type="password"
                class="mt-1 block w-full"
                bind:value={$form.password_confirmation}
                required
                autocomplete="new-password"
            />

            <InputError class="mt-2" message={$form.errors.password_confirmation} />
        </div>

        <div class="mt-4 flex items-center justify-end">
            <a
                use:inertia
                href={route('login')}
                class="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
            >
                Already registered?
            </a>

            <PrimaryButton class="ms-4 {$form.processing && 'opacity-25'}" disabled={$form.processing}>
                Register
            </PrimaryButton>
        </div>
    </form>
</GuestLayout>
