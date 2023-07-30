import Feed from "../styles/Feed.module.css"

const PRLogCard = ({ personalRecord }) => {

    return (
        <table className={Feed.card2}>
            <tr>
                <th>{personalRecord.name}</th>
                <td>{personalRecord.pr}</td>
            </tr>
        </table>
    )
}

export default PRLogCard