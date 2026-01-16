import React from "react";

function Reports() {
    return (
        <div className="p-2 bg-gray-200 text-slate-200 rounded-md">
            <h1 className="text-xl md:text-2xl font-bold mb-4 tracking-wide text-gray-600">
                রিপোর্টস (Reports)
            </h1>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-800 p-4 rounded-lg shadow">
                    <h3 className="text-sm text-slate-200">মোট সংবাদ</h3>
                    <p className="text-2xl font-bold mt-1">১২০</p>
                </div>

                <div className="bg-green-800 p-4 rounded-lg shadow">
                    <h3 className="text-sm text-slate-200">আজকের প্রকাশিত সংবাদ</h3>
                    <p className="text-2xl font-bold mt-1">৮</p>
                </div>

                <div className="bg-red-800 p-4 rounded-lg shadow">
                    <h3 className="text-sm text-slate-200">মোট ভিউস</h3>
                    <p className="text-2xl font-bold mt-1">৪৫,২৩০</p>
                </div>
            </div>

            {/* Category Report */}
            <div className="bg-pink-400 text-black rounded-lg p-4 mb-6">
                <h2 className="text-base md:text-lg font-semibold mb-3">
                    ক্যাটাগরি অনুযায়ী সংবাদ
                </h2>

                <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                        <span>রাজনীতি</span>
                        <span>৩০টি</span>
                    </li>
                    <li className="flex justify-between">
                        <span>খেলা</span>
                        <span>২৫টি</span>
                    </li>
                    <li className="flex justify-between">
                        <span>বিনোদন</span>
                        <span>২০টি</span>
                    </li>
                    <li className="flex justify-between">
                        <span>বিশ্ব</span>
                        <span>১৫টি</span>
                    </li>
                </ul>
            </div>

            {/* Popular News */}
            <div className="bg-purple-400 text-black rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-3">
                    জনপ্রিয় সংবাদ
                </h2>

                <table className="w-full text-sm text-left">
                    <thead className="text-slate-700 border-b border-slate-700">
                        <tr>
                            <th className="py-2">শিরোনাম</th>
                            <th>ক্যাটাগরি</th>
                            <th>ভিউস</th>
                        </tr>
                    </thead>
                    <tbody className="text-[10px] md:text-sm">
                        <tr className="border-b border-slate-700">
                            <td className="py-2">
                                জাতীয় নির্বাচনের প্রস্তুতি জোরদার
                            </td>
                            <td>রাজনীতি</td>
                            <td>১২,৩০০</td>
                        </tr>
                        <tr className="border-b border-slate-700">
                            <td className="py-2">
                                বাংলাদেশ জয় পেল শেষ ওভারে
                            </td>
                            <td>খেলা</td>
                            <td>৯,৮৫০</td>
                        </tr>
                        <tr>
                            <td className="py-2">
                                নতুন সিনেমা মুক্তি পাচ্ছে শুক্রবার
                            </td>
                            <td>বিনোদন</td>
                            <td>৭,২০০</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Reports;
