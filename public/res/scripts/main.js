jQuery(function(){
    var endDate = "May 31, 2014 09:00:00";
    jQuery('.countdown').countdown({ 
        date: endDate,
        render: function(data) {
            var elDay = document.getElementById('dias'),
                elHour = document.getElementById('horas'),
                elMin = document.getElementById('minutos'),
                elSec = document.getElementById('segundos');

                elDay.textContent = data.days;
                elHour.textContent = data.hours;
                elMin.textContent = data.min;
                elSec.textContent = data.sec;
        },
        onEnd: function() {
        // $(this.el).addClass('ended');
        }
    });

    var styles = [
        {
            "stylers": [
            ]
        }
    ];
    var options = {
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeIds: ['Styled']
        },
        center: new google.maps.LatLng(-19.9298691,-43.9442987),
        zoom: 16,
        disableDefaultUI: true,
        mapTypeId: 'Styled'
    };
    var div = document.getElementById('map');
    var map = new google.maps.Map(div, options);

    new google.maps.Marker({
        position: new google.maps.LatLng(-19.9298691,-43.9442987),
        map: map
    });

    var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
    map.mapTypes.set('Styled', styledMapType);
});