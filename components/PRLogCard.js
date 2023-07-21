import Feed from "../styles/Feed.module.css"

const PRLogCard = ({ personalRecord }) => {

    return (
        <div className={Feed.card2}>
            <h4>{personalRecord.name}</h4>
            <p>{personalRecord.pr}</p>
        </div>
    )
}

export default PRLogCard