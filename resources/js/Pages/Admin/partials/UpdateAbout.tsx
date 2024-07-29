import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { PageProps } from "@/types";
import { AboutType } from "@/types/types";
import { Transition } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";

const UpdateAbout = ({ about }: { about: AboutType | undefined }) => {
    const user = usePage<PageProps>().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm<AboutType>();

    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route("admin.about.update", { about: about?.id }));
    };

    return (
        <section className="max-w-xl w-full">
            <header className="w-full flex justify-center items-center flex-col">
                <h2 className="text-lg font-medium text-gray-900">
                    Company Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your company information.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Company Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        defaultValue={about?.companyName}
                        onChange={(e) => setData("companyName", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.companyName} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Address" />

                    <TextArea
                        id="address"
                        className="mt-1 block w-full"
                        defaultValue={about?.Address}
                        onChange={(e) => setData("Address", e.target.value)}
                        required
                        autoComplete="Address"
                    />

                    <InputError className="mt-2" message={errors.Address} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Business Description" />

                    <TextArea
                        id="businessDesc"
                        className="mt-1 block w-full"
                        defaultValue={about?.businessDesc}
                        onChange={(e) =>
                            setData("businessDesc", e.target.value)
                        }
                        required
                        autoComplete="businessDesc"
                    />

                    <InputError
                        className="mt-2"
                        message={errors.businessDesc}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="DUNS Number" />

                    <TextInput
                        type="text"
                        id="DUNS"
                        className="mt-1 block w-full"
                        defaultValue={about?.DUNS}
                        onChange={(e) => setData("DUNS", e.target.value)}
                        required
                        autoComplete="DUNS"
                    />

                    <InputError className="mt-2" message={errors.DUNS} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="TIN" />

                    <TextInput
                        type="text"
                        id="TIN"
                        className="mt-1 block w-full"
                        defaultValue={about?.TIN}
                        onChange={(e) => setData("TIN", e.target.value)}
                        required
                        autoComplete="TIN"
                    />

                    <InputError className="mt-2" message={errors.TIN} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Founded at" />

                    <TextInput
                        type="date"
                        id="founded_at"
                        className="mt-1 block w-full"
                        defaultValue={about?.founded_at}
                        onChange={(e) => setData("founded_at", e.target.value)}
                        required
                        autoComplete="founded_at"
                    />

                    <InputError className="mt-2" message={errors.founded_at} />
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

export default UpdateAbout;
