import Back from "./Back";

export default function Layout({children}) {
    return (
        <>
        <Back></Back>
        {children}
        </>
    )
}
