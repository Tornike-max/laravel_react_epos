const NoDataInfo = ({ info }: { info: string }) => {
    return (
        <tr>
            <td colSpan={5} className="py-4 text-center text-gray-500">
                <div className="p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-md">
                    <p className="text-lg font-semibold">No Data Available</p>
                    <p className="text-sm text-gray-500">{info} </p>
                </div>
            </td>
        </tr>
    );
};

export default NoDataInfo;
