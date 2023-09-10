import { useState } from "react";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
    const { name, flags } = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div>
            <div className={`card border  ${visited ? 'bg-orange-200': 'bg-white'}`}>
                <figure><img src={flags.png} alt={name.common} className="h-48 rounded-none mt-4 mx-auto" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name.common}</h2>
                    <div className="card-actions justify-start flex items-center">
                        <button onClick={() => {handleVisitedFlag(country.flags.png)}} className="btn btn-error">Visited Flag</button>
                        <button onClick={() => handleVisitedCountries(country)} className="btn">Mark Visited</button>
                        <button onClick={handleVisited} className="btn btn-primary">{visited ? 'Visited': 'To go'}</button>
                        <p className="text-lg">{visited? 'visited this country': ""}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Country;