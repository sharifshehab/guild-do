import Container from "../../../components/Container";

const Content = () => {
    return (
        <Container>
            <div className="grid grid-cols-3 gap-8">
                {/* posts */}
                <div className="h-screen bg-red-600 col-span-2">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Forum</th>
                                    <th>tags</th>
                                    <th>comments count</th>
                                    <th>votes count</th>
                                    <th>Author</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>
                                        <div className="space-y-1">
                                            <h3 className="text-2xl font-semibold text-primaryColor">Esports Elite</h3>
                                            <p>If our lives are already written, it would take a courageous man to change the script....</p>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                    </td>
                                    <td>15</td>
                                    <td>30</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">Nov 23 - 2024  02/06/25</div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>

                </div>
                {/* sidebar */}
                <div className="h-screen bg-blue-600"></div>
            </div>
        </Container>
    );
};

export default Content;