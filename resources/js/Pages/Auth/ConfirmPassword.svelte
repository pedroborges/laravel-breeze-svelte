<script lang="ts">
    import GuestLayout from '@/Layouts/GuestLayout.svelte'
    import InputError from '@/Components/InputError.svelte'
    import InputLabel from '@/Components/InputLabel.svelte'
    import PrimaryButton from '@/Components/PrimaryButton.svelte'
    import TextInput from '@/Components/TextInput.svelte'
    import { route } from 'momentum-trail'
    import { useForm } from '@inertiajs/svelte'

    const form = useForm({
        password: '',
    })

    function submit(e: SubmitEvent) {
        e.preventDefault()

        $form.post(route('password.confirm'), {
            onFinish: () => $form.reset(),
        })
    }
</script>

<svelte:head>
    <title>Confirm Password</title>
</svelte:head>

<GuestLayout>
    <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
        This is a secure area of the application. Please confirm your password before continuing.
    </div>

    <form onsubmit={submit}>
        <div>
            <InputLabel for="password" value="Password" />
            <TextInput
                id="password"
                type="password"
                class="mt-1 block w-full"
                bind:value={$form.password}
                required
                autocomplete="current-password"
                autofocus
            />
            <InputError class="mt-2" message={$form.errors.password} />
        </div>

        <div class="mt-4 flex justify-end">
            <PrimaryButton class="ms-4 {$form.processing && 'opacity-25'}" disabled={$form.processing}
                >Confirm</PrimaryButton
            >
        </div>
    </form>
</GuestLayout>
