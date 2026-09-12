"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function Details() {
    const searchParams = useSearchParams();
    const index = searchParams.get("index");
    const [application, setApplication] = useState(null);
    useEffect(() => {
        const savedApplications =
            JSON.parse(localStorage.getItem("applications")) || [];

        const selectedApplication = savedApplications[index];

        setApplication(selectedApplication);
    }, [index]);

    return (
        <main className="min-h-screen bg-[#111111] px-8 py-10 text-[#f5f2e8]">
            <div className="mx-auto max-w-3xl">
                <Link
                    href="/"
                    className="mb-8 inline-block text-sm text-[#77746c] transition-colors hover:text-lime-400"
                >
                    ← Back to applications
                </Link>
                <p className="text-sm uppercase tracking-[0.3em] text-lime-400">
                    Application details
                </p>

                <h1 className="mt-3 text-4xl font-semibold tracking-tight">
                    {application?.role}
                </h1>

                <p className="mt-2 text-[#77746c]">
                    {application?.company} · {application?.location}
                </p>
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    <div className="border border-[#2b2b2b] p-5">
                        <p className="text-xs uppercase tracking-widest text-[#77746c]">
                            Job type
                        </p>
                        <p className="mt-2 text-sm">
                            {application?.jobType}
                        </p>
                    </div>

                    <div className="border border-[#2b2b2b] p-5">
                        <p className="text-xs uppercase tracking-widest text-[#77746c]">
                            Status
                        </p>
                        <p className="mt-2 text-sm text-lime-400">
                            {application?.status}
                        </p>
                    </div>
                    <div className="mt-4 border border-[#2b2b2b] p-5">
                        <p className="text-xs uppercase tracking-widest text-[#77746c]">
                            Application date
                        </p>

                        <p className="mt-2 text-sm">
                            {application?.applicationDate}
                        </p>
                    </div>
                    <div className="mt-4 border border-[#2b2b2b] p-5">
                        <p className="text-xs uppercase tracking-widest text-[#77746c]">
                            Notes
                        </p>

                        <p className="mt-3 text-sm leading-6 text-[#a7a49b]">
                            {application?.notes || "No notes added."}
                        </p>
                    </div>
                    {application?.jobLink && (
                        <a
                            href={application.jobLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block text-sm text-lime-400 transition-colors hover:text-lime-300"
                        >
                            Open job posting ↗
                        </a>
                    )}
                    <Link
                        href={`/edit?index=${index}`}
                        className="mt-8 inline-block border border-[#2b2b2b] px-5 py-3 text-sm transition-all duration-300 hover:border-lime-400 hover:text-lime-400"
                    >
                        Edit application
                    </Link>
                </div>
            </div>
        </main>
    );
}