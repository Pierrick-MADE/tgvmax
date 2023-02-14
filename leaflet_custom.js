function get_leaflet_marker(myCustomColour) {
    const markerHtmlStyles = `
    background-color: ${myCustomColour};
    width: 1.2rem;
    height: 1.2rem;
    display: block;
    left: -0.6rem;
    top: -0.6rem;
    position: relative;
    border-radius: 1.2rem 1.2rem 0;
    transform: rotate(45deg);
    border: 1px solid #FFFFFF`

    const myIcon = L.divIcon({
    className: "my-custom-pin",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${markerHtmlStyles}" />`
    })

    return myIcon
}