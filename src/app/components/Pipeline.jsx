"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Pipeline() {
    const [applications, setApplications] = useState([]);
    const [search, setSearch] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    useEffect(() => {
        const savedApplications =
            JSON.parse(localStorage.getItem("applications")) || [];

        setApplications(savedApplications);
    }, []);
    const handleDelete = (index) => {
        const updatedApplications = applications.filter(
            (_, i) => i !== index
        );

        setApplications(updatedApplications);

        localStorage.setItem(
            "applications",
            JSON.stringify(updatedApplications)
        );
    };
    const stages = [
        "Discovered",
        "Applied",
        "Screening",
        "Interview",
        "Offer",
    ].map((name) => ({
        name,
        count: applications.filter(
            (application) => application.status === name.toLowerCase()
        ).length,
    }));
    const filteredApplications = applications.filter((application) => {
        const matchesSearch =
            `${application.company} ${application.role}`
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesStatus =
            filterStatus === "all" ||
            application.status === filterStatus;

        return matchesSearch && matchesStatus;
    });
    return (
        <section className="mt-12">
            <div className="mb-6 flex items-end justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#77746c]">
                        Application flow
                    </p>

                    <h2 className="mt-2 text-2xl font-medium">
                        Where things stand
                    </h2>
                </div>

                <span className="text-sm text-[#77746c]">
                    {applications.length} {applications.length === 1 ? "opportunity" : "opportunities"}
                </span>
            </div>
            <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-5">
                {stages.map((stage, index) => (
                    <div
                        key={stage.name}
                        className="border border-[#2b2b2b] bg-[#111111] p-6 transition-all duration-300 hover:bg-[#181818] hover:border-[#555555]"
                    >
                        <p className="text-xs uppercase tracking-widest text-[#8b8981]">
                            {stage.name}
                        </p>
                        <p className="mt-8 text-5xl font-semibold tracking-tight">
                            {stage.count}
                        </p>
                        <div className="mt-6 h-px bg-[#2b2b2b]" />
                        <div className={`mb-4 h-1 transition-all duration-500 ${stage.count > 0
                            ? "w-12 bg-lime-400"
                            : "w-8 bg-[#2b2b2b]"
                            }`}


                        />
                        <div className="mt-3 h-1 w-full bg-[#222222]">

                            <div
                                className="h-full bg-[#444444]"
                                style={{
                                    width: `${applications.length
                                        ? (stage.count / applications.length) * 100
                                        : 0
                                        }%`,
                                }}
                            />
                        </div>
                        <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[#55534d]">
                            opportunities
                        </p>
                    </div>
                ))}
            </div>
            <div className="mt-10">
                <h3 className="text-xl font-medium">Recent applications</h3>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search company or job title..."
                        className="mb-6 w-full border border-[#2b2b2b] bg-[#111111] px-4 py-3 text-sm text-[#f5f2e8] outline-none transition-all duration-300 focus:border-lime-400"
                    />
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="mb-6 w-full border border-[#2b2b2b] bg-[#111111] px-4 py-3 text-sm text-[#f5f2e8] outline-none focus:border-lime-400"
                    >
                        <option value="all">All statuses</option>
                        <option value="discovered">Discovered</option>
                        <option value="applied">Applied</option>
                        <option value="screening">Screening</option>
                        <option value="interview">Interview</option>
                        <option value="offer">Offer</option>
                    </select>
                </div>

                <div className="mt-6 space-y-3">
                    {filteredApplications.length === 0 && (
                        <p className="border border-[#2b2b2b] p-8 text-center text-sm text-[#77746c]">
                            No matching applications.
                        </p>
                    )}
                    {filteredApplications.map((application) => {
                        const originalIndex = applications.indexOf(application);

                        return (
                            <div
                                key={originalIndex}
                                className="border border-[#2b2b2b] bg-[#111111] p-6 transition-all duration-300 hover:border-[#555555]"
                            >
                                <p className="text-xl font-semibold tracking-tight">
                                    {application.role}
                                </p>

                                <p className="mt-2 text-sm text-[#a7a49b]">
                                    {application.company} <span className="text-[#55534d]">·</span>{" "}
                                    {application.location}
                                </p>
                                <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#55534d]">
                                    Applied · {application.applicationDate}
                                </p>
                                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#55534d]">
                                    {application.jobType}
                                </p>
                                <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-[#2b2b2b] pt-4">
                                    <span className="inline-flex border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-lime-400">
                                        {application.status}
                                    </span>

                                    <Link
                                        href={`/details?index=${originalIndex}`}
                                        className="border border-[#2b2b2b] px-3 py-2 text-xs text-[#a7a49b] transition-all duration-300 hover:border-lime-400 hover:text-lime-400"
                                    >
                                        View details →
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(originalIndex)}
                                        className="border border-transparent px-3 py-2 text-xs text-[#77746c] transition-all duration-300 hover:border-red-400/30 hover:bg-red-400/5 hover:text-red-400"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );

}