import React from 'react'
import { useSearchParams } from 'react-router-dom';
function Area() {
    const { area } = useSearchParams('area');

    useEffect(() => {
        console.log(area);
    }, [area]);
    return (
        <div>Area</div>
    )
}

export default Area