import React from "react";

function Marketing() {
    const steps = [
        {
            title: "নিউজ কিভাবে তৈরি করা হয়",
            description:
                "নিউজ লেখার আগে research করা, reliable sources থেকে তথ্য সংগ্রহ করা এবং fact check করা খুব জরুরি। এছাড়া সংক্ষিপ্ত ও পরিষ্কার ভাষা ব্যবহার করা উচিত।",
        },
        {
            title: "নিউজ কিভাবে সংগ্রহ করা হয়",
            description:
                "নিউজ collect করতে হয় বিভিন্ন সংবাদ সংস্থা, online portals, social media এবং press release থেকে। সবসময় trusted sources ব্যবহার করতে হবে।",
        },
        {
            title: "নিউজের মার্কেটিং কিভাবে করা হয়",
            description:
                "নিউজকে সামাজিক মাধ্যমে share করা, newsletter পাঠানো, SEO optimize করা এবং readers engagement বাড়ানোই মূল marketing strategy।",
        },
        {
            title: "অ্যানালিটিক্স ও feedback",
            description:
                "Readers কিভাবে নিউজ interact করছে তা track করা (views, shares, comments) এবং feedback অনুযায়ী content improve করা।",
        },
    ];

    return (
        <div className="max-w-3xl px-5 py-6 bg-white shadow-lg rounded-md m-auto">
            <h1 className="text-3xl font-bold mb-8 text-center text-pink-600">
                নিউজ মার্কেটিং এবং সংগ্রহ করার গাইড
            </h1>

            <div className="grid md:grid-cols-2 gap-6">
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg duration-300">
                        <h2 className="text-lg font-semibold mb-2 text-blue-600">
                            {step.title}
                        </h2>
                        <p className="text-gray-700 text-sm">{step.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-10 p-6 bg-gray-100 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-2">মোটামুটি টিপস</h2>
                <p className="text-gray-700">
                    সবসময় সঠিক তথ্য ব্যবহার করুন, news update রাখুন, এবং readers এর সাথে engage করার চেষ্টা করুন। ভালো content ও consistent publication মূল marketing এর চাবিকাঠি।
                </p>
            </div>
        </div>
    );
}

export default Marketing;
