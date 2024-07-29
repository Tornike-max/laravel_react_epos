import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { PageProps } from "@/types";
import { PressRelease, ProductType } from "@/types/types";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import React, { FormEventHandler } from "react";

const UpdatePress = ({ auth, pressRelease, products }: PageProps) => {
    const { setData, patch, errors, processing, recentlySuccessful } =
        useForm<PressRelease>();

    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        patch(
            route("admin.press.update", { press: pressRelease?.data[0]?.id })
        );
    };

    return (
        <section className="max-w-xl w-full">
            <header className="w-full flex items-center justify-center flex-col">
                <h2 className="text-lg font-medium text-gray-900">
                    Update Form
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update Press Release.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Date" />

                    <TextInput
                        id="press-date"
                        type="date"
                        className="mt-1 block w-full"
                        defaultValue={pressRelease?.data[0]?.date}
                        onChange={(e) => setData("date", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.date} />
                </div>

                <div>
                    <InputLabel htmlFor="name" value="Product id" />

                    <select
                        className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full`}
                        defaultValue={pressRelease?.data[0]?.product?.id}
                        onChange={(e) => setData("product_id", e.target.value)}
                    >
                        {products?.data?.map((product) => (
                            <option key={product.id} value={product.id}>
                                {product.title}
                            </option>
                        ))}
                    </select>

                    <InputError className="mt-2" message={errors.date} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Info" />

                    <TextArea
                        id="press-info"
                        className="mt-1 block w-full"
                        defaultValue={pressRelease?.data[0]?.info}
                        onChange={(e) => setData("info", e.target.value)}
                        required
                        autoComplete="email"
                    />

                    <InputError className="mt-2" message={errors.info} />
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

export default UpdatePress;
