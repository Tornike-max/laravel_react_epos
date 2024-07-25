import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { User } from "@/types";
import { Transition } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";

const AddMemberForm = () => {
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm<User>();

    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("admin.team.store"));
    };

    return (
        <section className="max-w-xl w-full">
            <header className="w-full flex items-center justify-center flex-col">
                <h2 className="text-lg font-medium text-gray-900">
                    Create Form
                </h2>

                <p className="mt-1 text-sm text-gray-600">Add New Member.</p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        defaultValue={data?.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        className="mt-1 block w-full"
                        defaultValue={data?.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="email"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        type="password"
                        id="pwd"
                        className="mt-1 block w-full"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError className="mt-2" message={errors.password} />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Confirm password" />

                    <TextInput
                        type="password"
                        id="pwd"
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError className="mt-2" message={errors.password} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Add</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
};

export default AddMemberForm;
