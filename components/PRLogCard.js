import Feed from "../styles/Feed.module.css"

const PRLogCard = ({ personalRecord }) => {

    return (
        <table className={Feed.card2}>
            <tbody>
                <tr>
                    <th>{personalRecord.name}</th>
                    <td>{personalRecord.pr}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default PRLogCard