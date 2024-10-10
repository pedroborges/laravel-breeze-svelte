<script lang="ts">
    import GuestLayout from '@/Layouts/GuestLayout.svelte'
    import InputError from '@/Components/InputError.svelte'
    import InputLabel from '@/Components/InputLabel.svelte'
    import PrimaryButton from '@/Components/PrimaryButton.svelte'
    import TextInput from '@/Components/TextInput.svelte'
    import { route } from 'momentum-trail'
    import { useForm } from '@inertiajs/svelte'

    let { email, token }: { email: string; token: string } = $props()

    const form = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    })

    function submit(e: SubmitEvent) {
        e.preventDefault()

        $form.post(route('password.store'), {
            onFinish: () => $form.reset('password', 'password_confirmation'),
        })
    }
</script>

<svelte:head>
    <title>Reset Password</title>
</svelte:head>

<GuestLayout>
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
            <PrimaryButton class={$form.processing && 'opacity-25'} disabled={$form.processing}
                >Reset Password</PrimaryButton
            >
        </div>
    </form>
</GuestLayout>
