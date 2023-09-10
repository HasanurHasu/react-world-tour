import { useEffect, useState } from "react";
import Country from "../Countriy/Countriy";


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
        
    }, [])

    const handleVisitedCountries = country =>{
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };

    const handleVisitedFlag = flag => {
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);
        console.log(visitedFlag);
    }

    return (
        <div>
            <div className="text-center">
                <h1>Visited Countries: {visitedCountries.length}</h1>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.ccn3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="grid grid-cols-12">
                {
                    visitedFlag.map((flag, index) => <img key={index} src={flag} className="w-[80px]"></img>)
                }
            </div>
            <div className="grid grid-cols-3 gap-10 max-w-6xl m-auto">
                {
                    countries.map(country => <Country key={country.cca3}
                         country={country}
                         handleVisitedCountries={handleVisitedCountries}
                         handleVisitedFlag={handleVisitedFlag}
                         ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;