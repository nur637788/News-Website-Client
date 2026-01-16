function StatBox({ title, value }) {
    return (
        <div className="bg-white rounded-xl shadow p-6 text-center">
            <p className=" text-lg text-green-500">{title}</p>
            <h2 className="text-2xl md:text-4xl font-bold mt-2 text-blue-800">{value}</h2>
        </div>
    );
}

export default StatBox;
