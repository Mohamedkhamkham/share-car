import React from 'react';
import ReactGoogleAutocomplete from 'react-google-autocomplete';

const GoogleMapsApiKey = 'AIzaSyC3RuJsUQ3759MGeXPIp02-hIREZpkrLqs';

const AutocompleteInput = () => {
    const handlePlaceSelected = (place) => {
        console.log(place);
    };

    return (
        <ReactGoogleAutocomplete
            apiKey={GoogleMapsApiKey}
            onPlaceSelected={handlePlaceSelected}
            options={{ types: ['(cities)'], componentRestrictions: { country: 'us' } }}
        />
    );
};

export default AutocompleteInput;
