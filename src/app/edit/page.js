"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditApplication() {
     const router = useRouter();
    const searchParams = useSearchParams();
    const index = searchParams.get("index");

    const [application, setApplication] = useState(null);

    useEffect(() => {
        const savedApplications =
            JSON.parse(localStorage.getItem("applications")) || [];

        const selectedApplication = savedApplications[index];

        setApplication(selectedApplication);
    }, [index]);

    const handleSave = () => {
        const savedApplications =
            JSON.parse(localStorage.getItem("applications")) || [];

        savedApplications[index] = application;

        localStorage.setItem(
            "applications",
            JSON.stringify(savedApplications)
        );
        router.push(`/details?index=${index}`);
    };

    if (!application) {
        return null;
    }

    return (
        <main className="min-h-screen bg-[#111111] px-8 py-10 text-[#f5f2e8]">
            <div className="mx-auto max-w-3xl">
                <Link
                    href={`/details?index=${index}`}
                    className="mb-8 inline-block text-sm text-[#77746c] transition-colors hover:text-lime-400"
                >
                    ← Back to details
                </Link>
                <p className="text-sm uppercase tracking-[0.3em] text-lime-400">
                    Update opportunity
                </p>

                <h1 className="mt-3 text-4xl font-semibold tracking-tight">
                    Edit application
                </h1>
                <div className="mt-10">
                    <label className="text-sm text-[#a7a49b]">
                        Company
                    </label>

                    <input
                        type="text"
                        value={application.company}
                        onChange={(e) =>
                            setApplication({
                                ...application,
                                company: e.target.value,
                            })
                        }
                        className="mt-2 w-full border border-[#2b2b2b] bg-[#111111] px-4 py-3 text-[#f5f2e8] outline-none transition-all duration-300 focus:border-lime-400"
                    />
                </div>
                <div className="mt-6">
                    <label className="text-sm text-[#a7a49b]">
                        Job title
                    </label>

                    <input
                        type="text"
                        value={application.role}
                        onChange={(e) =>
                            setApplication({
                                ...application,
                                role: e.target.value,
                            })
                        }
                        className="mt-2 w-full border border-[#2b2b2b] bg-[#111111] px-4 py-3 text-[#f5f2e8] outline-none transition-all duration-300 focus:border-lime-400"
                    />
                </div>
                <div className="mt-6">
                    <label className="text-sm text-[#a7a49b]">
                        Location
                    </label>

                    <input
                        type="text"
                        value={application.location}
                        onChange={(e) =>
                            setApplication({
                                ...application,
                                location: e.target.value,
                            })
                        }
                        className="mt-2 w-full border border-[#2b2b2b] bg-[#111111] px-4 py-3 text-[#f5f2e8] outline-none transition-all duration-300 focus:border-lime-400"
                    />
                </div>
                <div className="mt-6">
                    <label className="text-sm text-[#a7a49b]">
                        Job type
                    </label>

                    <select
                        value={application.jobType}
                        onChange={(e) =>
                            setApplication({
                                ...application,
                                jobType: e.target.value,
                            })
                        }
                        className="mt-2 w-full border border-[#2b2b2b] bg-[#111111] px-4 py-3 text-[#f5f2e8] outline-none transition-all duration-300 focus:border-lime-400"
                    >
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="internship">Internship</option>
                        <option value="contract">Contract</option>
                    </select>
                </div>
                <div className="mt-6">
                    <label className="text-sm text-[#a7a49b]">
                        Status
                    </label>

                    <select
                        value={application.status}
                        onChange={(e) =>
                            setApplication({
                                ...application,
                                status: e.target.value,
                            })
                        }
                        className="mt-2 w-full border border-[#2b2b2b] bg-[#111111] px-4 py-3 text-[#f5f2e8] outline-none transition-all duration-300 focus:border-lime-400"
                    >
                        <option value="discovered">Discovered</option>
                        <option value="applied">Applied</option>
                        <option value="screening">Screening</option>
                        <option value="interview">Interview</option>
                        <option value="offer">Offer</option>
                    </select>
                </div>
                <div className="mt-6">
                    <label className="text-sm text-[#a7a49b]">
                        Job link
                    </label>

                    <input
                        type="url"
                        value={application.jobLink}
                        onChange={(e) =>
                            setApplication({
                                ...application,
                                jobLink: e.target.value,
                            })
                        }
                        className="mt-2 w-full border border-[#2b2b2b] bg-[#111111] px-4 py-3 text-[#f5f2e8] outline-none transition-all duration-300 focus:border-lime-400"
                    />
                </div>
                <div className="mt-6">
                    <label className="text-sm text-[#a7a49b]">
                        Application date
                    </label>

                    <input
                        type="date"
                        value={application.applicationDate}
                        onChange={(e) =>
                            setApplication({
                                ...application,
                                applicationDate: e.target.value,
                            })
                        }
                        className="mt-2 w-full border border-[#2b2b2b] bg-[#111111] px-4 py-3 text-[#f5f2e8] outline-none transition-all duration-300 focus:border-lime-400"
                    />
                </div>
                <div className="mt-6">
                    <label className="text-sm text-[#a7a49b]">
                        Notes
                    </label>

                    <textarea
                        rows="5"
                        value={application.notes}
                        onChange={(e) =>
                            setApplication({
                                ...application,
                                notes: e.target.value,
                            })
                        }
                        className="mt-2 w-full resize-none border border-[#2b2b2b] bg-[#111111] px-4 py-3 text-[#f5f2e8] outline-none transition-all duration-300 focus:border-lime-400"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleSave}
                    className="mt-8 w-full bg-lime-400 px-5 py-3 font-medium text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-300"
                >
                    Save changes
                </button>
            </div>
        </main>
    );
}