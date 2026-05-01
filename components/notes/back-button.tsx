"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="inline-flex flex-row items-center gap-1.5 mb-6 px-3 py-1.5 text-sm rounded-md border border-dashed hover:border-solid transition-all duration-150 bg-white dark:bg-black text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer"
        >
            <ArrowLeft size={15} />
            Back to notes
        </button>
    );
}
