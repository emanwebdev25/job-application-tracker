"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function AddApplication() {
    const router = useRouter();
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [location, setLocation] = useState("");
    const [jobType, setJobType] = useState("");
    const [status, setStatus] = useState("");
    const [jobLink, setJobLink] = useState("");
    const [applicationDate, setApplicationDate] = useState("");
    const [notes, setNotes] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!company || !role || !location) {
            alert("Please fill in all required fields.");
            return;
        }

        const application = {
            company,
            role,
            location,
            jobType,
            status,
            jobLink,
            applicationDate,
            notes,
        };
        const existingApplications =
            JSON.parse(localStorage.getItem("applications")) || [];
        existingApplications.push(application);
        localStorage.setItem(
            "applications",
            JSON.stringify(existingApplications)
        );
        router.push("/");
    };
    return (
        <main className="min-h-screen bg-[#111111] px-8 py-10 text-[#f5f2e8]">
            <div className="mx-auto max-w-3xl">
                <p className="text-sm uppercase tracking-[0.3em] text-lime-400">
                    New opportunity
                </p>

                <h1 className="mt-3 text-4xl font-semibold tracking-tight">
                    Add application
                </h1>

                <p className="mt-3 text-[#77746c]">
                    Add a new opportunity to your career pipeline.
                </p>
                <div className="mt-10">
                    <label className="text-sm text-[#a7a49b]">
                        Company
                    </label>

                    <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Google"
                        className="mt-2 w-full border border-[#2b2b2b] bg-[#111111] px-4 py-3 text-[#f5f2e8] outline-none transition-all duration-300 focus:border-lime-400"
                    />
                </div>
                <div className="mt-6">
                    <label className="text-sm text-[#a7a49b]">
                        Job title
                    </label>

                    <input
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="e.g. Frontend Developer"
                        className="mt-2 w-full border border-[#2b2b2b] bg-[#111111] px-4 py-3 text-[#f5f2e8] outline-none transition-all duration-300 focus:border-lime-400"
                    />
                </div>
                <div className="mt-6">
                    <label className="text-sm text-[#a7a49b]">
                        Location
                    </label>

                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Remote, Lahore"
                        className="mt-2 w-full border border-[#2b2b2b] bg-[#111111] px-4 py-3 text-[#f5f2e8] outline-none transition-all duration-300 focus:border-lime-400"
                    />
                </div>
                <div className="mt-6">
                    <label className="text-sm text-[#a7a49b]">
                        Job type
                    </label>

                    <select
                        className="mt-2 w-full border border-[#2b2b2b] bg-[#111111] px-4 py-3 text-[#f5f2e8] outline-none transition-all duration-300 focus:border-lime-400"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                    >
                        <option value="" disabled>
                            Select job type
                        </option>
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
                        className="mt-2 w-full border border-[#2b2b2b] bg-[#111111] px-4 py-3 text-[#f5f2e8] outline-none transition-all duration-300 focus:border-lime-400"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="" disabled>
                            Select status
                        </option>
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
                        value={jobLink}
                        onChange={(e) => setJobLink(e.target.value)}
                        placeholder="https://..."
                        className="mt-2 w-full border border-[#2b2b2b] bg-[#111111] px-4 py-3 text-[#f5f2e8] outline-none transition-all duration-300 focus:border-lime-400"
                    />
                </div>
                <div className="mt-6">
                    <label className="text-sm text-[#a7a49b]">
                        Application date
                    </label>

                    <input
                        type="date"
                        value={applicationDate}
                        onChange={(e) => setApplicationDate(e.target.value)}
                        className="mt-2 w-full border border-[#2b2b2b] bg-[#111111] px-4 py-3 text-[#f5f2e8] outline-none transition-all duration-300 focus:border-lime-400"
                    />
                </div>
                <div className="mt-6">
                    <label className="text-sm text-[#a7a49b]">
                        Notes
                    </label>

                    <textarea
                        rows="5"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Add anything you want to remember..."
                        className="mt-2 w-full resize-none border border-[#2b2b2b] bg-[#111111] px-4 py-3 text-[#f5f2e8] outline-none transition-all duration-300 focus:border-lime-400"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="mt-8 w-full bg-lime-400 px-5 py-3 font-medium text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-300"
                >
                    Save application
                </button>
            </div>
        </main>
    );
}