function CookiePolicy() {
    return (
        <div className="max-w-3xl px-5 py-6 bg-white shadow-lg rounded-md m-auto">
            <h1 className="text-3xl font-bold mb-4 text-center text-pink-600">কুকি নীতি</h1>

            <p className="mb-4">
                এই ওয়েবসাইটটি ব্যবহার করার মাধ্যমে আপনি আমাদের কুকি ব্যবহারের নীতিতে সম্মতি প্রদান করছেন।
            </p>

            <h2 className="font-semibold mt-4 mb-2">কুকি কী?</h2>
            <p className="mb-4">
                কুকি হলো ছোট টেক্সট ফাইল যা আপনার ডিভাইসে সংরক্ষিত হয় এবং ওয়েবসাইটকে আরও কার্যকর করে।
            </p>

            <h2 className="font-semibold mt-4 mb-2">আমরা কেন কুকি ব্যবহার করি?</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>ওয়েবসাইটের পারফরম্যান্স উন্নত করতে</li>
                <li>ব্যবহারকারীর অভিজ্ঞতা বিশ্লেষণ করতে</li>
                <li>ব্যবহারকারীর পছন্দ সংরক্ষণ করতে</li>
                <li>নিরাপত্তা নিশ্চিত করতে</li>
            </ul>

            <h2 className="font-semibold mt-4 mb-2">কুকি নিয়ন্ত্রণ</h2>
            <p>
                আপনি চাইলে আপনার ব্রাউজারের সেটিংস থেকে কুকি বন্ধ করতে পারেন, তবে এতে কিছু ফিচার সীমিত হতে পারে।
            </p>
        </div>
    );
}

export default CookiePolicy;
