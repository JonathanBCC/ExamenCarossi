function initMap() {
    //se llama el id del mapa donde se va a renderizar
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: { lat: 13.705243, lng: -89.24231 },
    });
    //Creamos un array con las 5 locaciones y sus nombres
    const locaciones = [
        [{ lat: 13.705243, lng: -89.24231 }, "punto 1"],
        [{ lat: 13.696674, lng: -89.197927 }, "punto 2"],
        [{ lat: 14.692511, lng: -87.86136 }, "punto 3"],
        [{ lat: 12.022747, lng: -86.252007 }, "punto 4"],
        [{ lat: 8.103289, lng: -80.596013 }, "punto 5"],
    ];


    //se crean los marcadores
    locaciones.forEach(([position, title], i) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${title}`,

            optimized: false,
        });


    });
}