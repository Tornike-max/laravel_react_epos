import { SVGAttributes } from "react";

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <>
            <img
                src={"/images/dark-epos.png"}
                className="w-24 h-16 sm:w-28 sm:h-20"
            />
        </>
    );
}
