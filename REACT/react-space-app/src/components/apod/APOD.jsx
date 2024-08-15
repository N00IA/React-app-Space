import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './APOD.css';

function APOD() {
    const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=bbwWo8RQKeugIkcywxfbDIwMMwMiRtCmUkEMVRB6';
    const [apodData, setApodData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApodData = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setApodData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchApodData();
    }, []);

    if (loading) {
        return <CircularProgress sx={{ color: '#271084' }} />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="apod-container">
            <h1>{apodData.title}</h1>
            <img src={apodData.url} alt={apodData.title} className="apod-image" />
            <p>{apodData.explanation}</p>
        </div>
    );
}

export default APOD;
