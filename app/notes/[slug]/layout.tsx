import BackButton from "@/components/notes/back-button";

export default function NotesDetailLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="font-inter">
            <BackButton />
            {children}
        </div>
    )
}