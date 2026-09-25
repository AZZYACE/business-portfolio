import { useState } from 'react';

function CateringCard({ item, onBook }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <article className="cat-card">
            <div className="cat-card__image">
                <span className="cat-card__code">{item.code}</span>
            </div>
            <h3 className="cat-card__title">{item.title}</h3>

            <div className="cat-card__body">
                <p className={expanded ? 'cat-card__text' : 'cat-card__text cat-card__text--clamped'}>{item.description}</p>

                {expanded && (
                    <ul className="cat-card__inclusions">
                        {item.inclusions.map((inclusion) => (
                            <li key={inclusion}>{inclusion}</li>
                        ))}
                    </ul>
                )}

                <dl className="cat-card__meta">
                    <div>
                        <dt>Guests</dt>
                        <dd>{item.guests}</dd>
                    </div>
                    <div>
                        <dt>Rate</dt>
                        <dd>{item.price}</dd>
                    </div>
                </dl>
            </div>

            <div className="cat-card__actions">
                <button type="button" className="link-btn" onClick={() => setExpanded((open) => !open)}>
                    {expanded ? 'SHOW LESS' : 'LEARN MORE'}
                </button>
                <button type="button" className="link-btn link-btn--accent" onClick={() => onBook(item)}>
                    BOOK NOW
                </button>
            </div>
        </article>
    );
}

export default CateringCard;