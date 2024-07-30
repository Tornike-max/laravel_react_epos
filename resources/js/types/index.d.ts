import {
    AboutType,
    CompanyType,
    HistoryType,
    PaginatedTypes,
    PaginationLinks,
    PaginationMeta,
    PressRelease,
    PressReleaseTypes,
    Product,
    ProductType,
} from "./types";

export interface User {
    is_admin: number | boolean;
    id: number;
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    email_verified_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    products?: {
        data: Product[];
        links: PaginationLinks;
        meta: PaginationMeta;
    };
    product?: Product;
    pressRelease?: {
        data: PressRelease[];
        links: PaginationLinks;
        meta: PaginationMeta;
    };
    histories?: {
        data: HistoryType[];
        links: PaginationLinks;
        meta: PaginationMeta;
    };
    press?: PressRelease;
    data?: AboutType;
    about?: AboutType;
    history?: HistoryType;
    productsCount?: number;
    pressReleaseCount?: number;
    csrfToken?: string;
    team?: {
        data: User[];
        links: PaginationLinks;
        meta: PaginationMeta;
    };
    member?: User;
};
