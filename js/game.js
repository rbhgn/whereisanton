const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]
;

const locations = [
  {
    city: 'Amsterdam',
    coord: {lat: 52.3791691, lng: 4.9010333},
    antons: [
      {name: 'Van Gogh Museum',
        coord: {lat: 52.3584192, lng: 4.8788869}
      },
      {name: 'Royal Palace',
        coord: {lat: 52.3729597, lng: 4.891138}
      },
      {name: 'Codaisseur',
        coord: {lat: 52.3390787, lng: 4.8567297}
      }
    ]
  },
  {
    city: 'Paris',
    coord: {lat: 48.8610311, lng: 2.3340659},
    antons: [
      {
        name: 'Eiffel Tower',
        coord: {lat: 48.8581495, lng: 2.2922983}
      },
      {
        name: 'Arc de Triomphe',
        coord: {lat: 48.8736635, lng: 2.2928263}
      },
      {
        name: 'Notre-Dame',
        coord: {lat: 48.8531236, lng: 2.3486065}
      }
    ]
},
{
  city: 'New York',
  coord: {lat: 40.6892293, lng: -74.045161},
  antons: [
    {
      name: 'Brooklyn Bridge',
      coord: {lat: 40.7058857, lng: -73.9967118}
    },
    {
      name: 'World Trade Center',
      coord: {lat: 40.7117612, lng: -74.0141693}
    },
    {
      name: 'Central Park Zoo',
      coord: {lat: 40.7676672, lng: -73.9724175}
    }
  ]
},
{
  city: 'London',
  coord: {lat: 51.5138254, lng: -0.098591},
  antons: [
    {
      name: 'Buckingham Palace',
      coord: {lat: 51.5010373, lng: -0.1444507}
    },
    {
      name: 'Big Ben',
      coord: {lat: 51.5006912, lng: -0.1248517}
    },
    {
      name: 'Tower Bridge',
      coord: {lat: 51.5059343, lng: -0.075642}
    }
  ]
}
]

  let i = 0;


initMap = () => {
  let markers = []


let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    max_zoom: 17,
    min_zoom: 17,
    center: locations[i].coord,
    disableDefaultUI: true,
    mapTypeControl: false,
    zoomControl: false,
    scaleControl: false,
    scrollwheel: false,
    gestureHandling: 'greedy',
    styles: mapStyle
  })
const makeMarkers = (locations, map, i) => {
    locations[i].antons.map(anton => {
      const newMarker = new google.maps.Marker({
        position: anton.coord,
        map: map,
        title: anton.name,
        index: markers.length,
        animation: google.maps.Animation.BOUNCE,
        icon: 'img/anton-small.png'
      }).addListener('click', function () {
          this.visible = false
          showLocations(markers)
          this.setMap(map)
          gameOver(markers);
        })
      markers.push(newMarker);
    })
  }

const antonsLeft = (markers) => {
  return markers.filter(marker => marker.f.visible).length
}

const gameOver = (markers) => {
  return !antonsLeft(markers) && showResults()
}
const showLocations = (markers) => {
  for (let i = 0; i < markers.length; i++) {
    if (markers[i].f.visible) {
      document.getElementById("location-" + i).innerHTML = markers[i].f.title
    } else {
      document.getElementById("location-" + i).innerHTML = markers[i].f.title
      document.getElementById("location-" + i).classList.add("strike");
    }
  }
}

const showResults = () => {
  clearSrikes();
  document.getElementById("results-text-p").innerHTML = `Congrats, you've found Anton in ${locations[i].city}! Let's try another city.`
  document.getElementById("results").style.display = 'flex';
}

const clearSrikes = () => {
  for (let i = 0; i < 3; i++) {
    document.getElementById(`location-${i}`).classList.remove("strike")
  }
}

document.getElementsByClassName("example")[0].addEventListener("click", function(){
    i = 0;
    document.getElementById("menu").style.display = 'none';
    initMap();
});

document.getElementsByClassName("example")[1].addEventListener("click", function(){
    i = 1;
    document.getElementById("menu").style.display = 'none';
    initMap();
});
document.getElementsByClassName("example")[2].addEventListener("click", function(){
    i = 2;
    document.getElementById("menu").style.display = 'none';
    initMap();
});

document.getElementsByClassName("example")[3].addEventListener("click", function(){
    i = 3;
    document.getElementById("menu").style.display = 'none';
    initMap();
});



document.getElementById("results-text").addEventListener("click", function(){
  document.getElementById("results").style.display = 'none';
    document.getElementById("menu").style.display = 'flex';
});

document.getElementById("home").addEventListener("click", function(){
  clearSrikes();
  document.getElementById("results").style.display = 'none';
  document.getElementById("menu").style.display = 'flex';
});


  makeMarkers(locations, map, i)
  showLocations(markers)
}
