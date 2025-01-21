import { useParams } from "react-router-dom";
import TableRow from "./TableRow/TableRow";
import usePostComments from "../../../../API/usePostComments";
import { Toaster } from "react-hot-toast";
import Container from "../../../../components/Container";

const PostComments = () => {
    const { title } = useParams();
    const [postComments] = usePostComments(title);

    return (
        <Container>
            <section className="min-h-screen pt-8">
                <div className="text-center mb-10">
                    <h2 className="text-white text-4xl underline underline-offset-8 decoration-yellow-400">{title}</h2>
                </div>
                <h4 className="text-xl text-yellow-400 font-semibold pl-3">Total Comments: {postComments.length}</h4>
                <div className="overflow-x-auto pb-32">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-sm dark:text-white">
                                <th>Comment</th>
                                <th>Email of the commenter</th>
                                <th>Feedback</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {postComments?.length === 0 ? <p className="text-white p-5">No comments found!</p> :
                                postComments?.map(data => <TableRow key={data._id} data={data}></TableRow>)}
                        </tbody>
                    </table>
                </div>
                <Toaster />
           </section>
        </Container>
    );
};

export default PostComments;