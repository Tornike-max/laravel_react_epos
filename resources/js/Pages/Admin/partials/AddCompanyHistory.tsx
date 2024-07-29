import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { PageProps } from "@/types";
import { HistoryType } from "@/types/types";
import { Transition } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";

const AddCompanyHistory = () => {
    const user = usePage<PageProps>().props.auth.user;

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm<HistoryType>();

    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("admin.history.store"));
    };

    return (
        <section className="max-w-xl w-full">
            <header className="w-full flex justify-center items-center flex-col">
                <h2 className="text-lg font-medium text-gray-900">
                    Create Form
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Add your company history.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Date" />

                    <TextInput
                        type="date"
                        id="date"
                        className="mt-1 block w-full"
                        defaultValue={data?.date}
                        onChange={(e) => setData("date", e.target.value)}
                        required
                        isFocused
                        autoComplete="date"
                    />

                    <InputError className="mt-2" message={errors.date} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="description" />

                    <TextArea
                        id="h-description"
                        className="mt-1 block w-full"
                        defaultValue={data?.description}
                        onChange={(e) => setData("description", e.target.value)}
                        required
                        autoComplete="description"
                    />

                    <InputError className="mt-2" message={errors.description} />
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

export default AddCompanyHistory;
