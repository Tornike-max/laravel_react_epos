import {
    AboutType,
    CompanyType,
    HistoryType,
    PaginatedTypes,
    PressRelease,
    PressReleaseTypes,
    ProductType,
} from "./types";

export interface User {
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
    products?: PaginatedTypes;
    product?: ProductType;
    pressRelease?: PressReleaseTypes;
    data?: AboutType | HistoryType;
};
