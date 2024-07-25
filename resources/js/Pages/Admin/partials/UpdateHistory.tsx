import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { PageProps } from "@/types";
import { AboutType, HistoryType } from "@/types/types";
import { Transition } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";

const UpdateHistory = ({ history }: { history: HistoryType | undefined }) => {
    const user = usePage<PageProps>().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm<HistoryType>();

    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();

        patch(route("admin.history.update", { history: history?.id }));
    };

    return (
        <section className="max-w-xl">
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Company History
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your company history.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Date" />

                    <TextInput
                        type="date"
                        id="date"
                        className="mt-1 block w-full"
                        defaultValue={history?.date}
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
                        defaultValue={history?.description}
                        onChange={(e) => setData("description", e.target.value)}
                        required
                        autoComplete="description"
                    />

                    <InputError className="mt-2" message={errors.description} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

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

export default UpdateHistory;
