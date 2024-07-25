import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { PageProps, User } from "@/types";
import { AboutType } from "@/types/types";
import { Transition } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";

const EditMemberForm = ({ member }: { member: User | undefined }) => {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm<User>();

    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route("admin.team.update", { user: member?.id }));
    };

    return (
        <section className="max-w-xl w-full">
            <header className="w-full flex items-center justify-center flex-col">
                <h2 className="text-lg font-medium text-gray-900">Edit Form</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update team member information.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        defaultValue={member?.name}
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
                        defaultValue={member?.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="email"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel
                        htmlFor="is_admin"
                        value="Give him admin status"
                    />

                    <Checkbox
                        id="is_admin"
                        defaultChecked={member?.is_admin === 1 ? true : false}
                        onChange={(e) => setData("is_admin", e.target.checked)}
                        autoComplete="is_admin"
                    />

                    <InputError className="mt-2" message={errors.is_admin} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>
                        Save Changes
                    </PrimaryButton>

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

export default EditMemberForm;
