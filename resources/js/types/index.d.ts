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
    data?: AboutType | HistoryType;
    productsCount?: number;
    pressReleaseCount?: number;
    csrfToken?: string;
    team?: {
        data: User[];
        links: PaginationLinks;
        meta: PaginationMeta;
    };
};
