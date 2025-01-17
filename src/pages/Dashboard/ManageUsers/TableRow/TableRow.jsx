
const TableRow = ({ user }) => {
    const { _id, name, email, badge } = user || {}

    return (
        <tr className="dark:text-primaryColor">
            <td>
                <h4>{name}</h4>
            </td>{/* name */}
            <td>
                <h4>{email}</h4>
            </td>{ }
            <td>
                <button className='btn'>Make admin</button>
            </td>{/* make admin */}
            <td>
                <h4>{badge}</h4>
            </td>{/* badge */}

        </tr>
    );
};

export default TableRow;