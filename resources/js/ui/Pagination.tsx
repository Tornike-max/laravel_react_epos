import { PaginationMetaLinks } from "@/types/types";
import { Link } from "@inertiajs/react";

const Pagination = ({ links }: { links: PaginationMetaLinks[] }) => {
    return (
        <nav className="text-center mt-4 space-x-2">
            {links &&
                links.map(
                    (link: { active: boolean; label: string; url: string }) => (
                        <Link
                            href={link.label || ""}
                            key={link.url}
                            className={`inline-block py-2 px-3  hover:bg-slate-300 duration-300 transition-all rounded-lg text-gray-500 ${
                                link.active ? "text-gray-900 bg-slate-300 " : ""
                            } ${
                                !link.url && "!text-gray-400 cursor-not-allowed"
                            }`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        ></Link>
                    )
                )}
        </nav>
    );
};

export default Pagination;
