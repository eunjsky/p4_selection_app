import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { formatRelative } from "date-fns";

import "@reach/combobox/styles.css";
import mapStyles from "./Map-Style";
import styles from "./MapView.module.css"

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100wh",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 43.6532,
  lng: -79.3832,
};



export default function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
      });

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const PanTo = React.useCallback(({lat, lng}) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(15);
    }, []);
    
        if (loadError) return "Error";
        if (!isLoaded) return "Loading...";
    
    
    return(
        <div className={styles.bothview}>
        <div className={styles.container}>
        
        <Search panTo={PanTo}/>
        <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onLoad={onMapLoad}
        >
            {/* put marker inside of google map if I am going to pin the place */}

        </GoogleMap>
    </div>
    </div>
    );

}

function Search(){
    const { ready,
            value,
            suggestions: { status, data },
            setValue,
            clearSuggestions,  
        } = usePlacesAutocomplete({
            requestOptions:{
            location:{lat: () => 43.6532, lng: () => -79.3832, },
            radius: 200 * 1000, 

        },
    })
    return (
    <div className={styles.search}>
    <Combobox 
        onSelect={ async (address) => {
            setValue(address, false);
            clearSuggestions()
            try{
                const results = await getGeocode({address});
                const { lat, lng } = await getLatLng(results[0]);
                //panTo({lat, lng})
            }catch(error){
                console.log("error!")
            }
            console.log(address);
        }}
        
    >
        <ComboboxInput value ={value} onChange={(e)=>{
            setValue(e.target.value);
        }}
            disable={!ready}
            placeholder="Enter the address"
        />
        <ComboboxPopover>
            {status === "OK" && data.map(({id, description}) => ( <ComboboxOption key={id} value={description}/> 
            ))}
        
        </ComboboxPopover>
    </Combobox> 
    </div>
    )
}
