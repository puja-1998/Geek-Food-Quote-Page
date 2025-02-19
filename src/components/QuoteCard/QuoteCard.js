

import "./QuoteCard.css";

export default function QuoteCard(props){
    let {writer,quote} = props.card;

    return(
        <div className="card-container">
            <div className="cards">
                <strong>{quote}</strong>
                <p>{writer}</p>
            </div>
        </div>
    );
}