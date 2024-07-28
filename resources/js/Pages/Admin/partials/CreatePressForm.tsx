import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { PressRelease, ProductType } from "@/types/types";
import { Transition } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";

const CreatePressForm = ({
    products,
}: {
    products: ProductType[] | undefined;
}) => {
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm<PressRelease>();

    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("admin.press.store"));
    };

    return (
        <section className="max-w-xl w-full">
            <header className="w-full flex items-center justify-center flex-col">
                <h2 className="text-lg font-medium text-gray-900">
                    Create Form
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Add New Press Release.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Date" />

                    <TextInput
                        id="press-date"
                        type="date"
                        className="mt-1 block w-full"
                        defaultValue={data?.date}
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
                        value={data.product_id}
                        onChange={(e) => setData("product_id", e.target.value)}
                    >
                        {products?.map((product) => (
                            <option value={product.id}>{product.title}</option>
                        ))}
                    </select>

                    <InputError className="mt-2" message={errors.date} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Info" />

                    <TextArea
                        id="press-info"
                        className="mt-1 block w-full"
                        defaultValue={data?.info}
                        onChange={(e) => setData("info", e.target.value)}
                        required
                        autoComplete="email"
                    />

                    <InputError className="mt-2" message={errors.info} />
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

export default CreatePressForm;
