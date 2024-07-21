export default function ApplicationLogo({ src }: { src: string }) {
    return (
        <>
            <img src={src} className="w-24 h-16 sm:w-28 sm:h-20" />
        </>
    );
}
