$(document).ready(function() {
    // alert("ready!");

    var destinationList = document.getElementById("destination-list");
    var destinationInput = $('#destination-input');
    var destinations = ["Shanghai", "Busan", "Hong Kong", "Qingdao", "Tianjin", "Hamburg", "Yingkou", "Colombo"]
    $(document).on('click', function(e) {
        e.target.id != 'destination-input' ? destinationList.style.display = 'none' : null;
        return true;

    })

    function makeDestinationList(list) {
        destinationList.innerHTML = '';
        list.forEach(function(city, index) {
            var li = document.createElement("li");
            var span = document.createElement("span")
            span.classList.add("mdl-list__item-primary-content")
            span.innerHTML = city;
            li.appendChild(span)
            li.classList.add("mdl-list__item")
            li.addEventListener('click', function(e) {
                console.log('city', e.target.innerText)
                destinationInput.val(e.target.innerText);
                destinationInput.parent().addClass('is-dirty')
            })
            destinationList.appendChild(li)
        })
    }

    makeDestinationList(destinations);

    destinationInput.on('focus', function(e) {
        e.preventDefault();
        destinationList.style.display = 'block';
        e.stopPropagation()
        return false;
    })

    destinationInput.on('keyup', function(e) {
        e.preventDefault();
        filterDestinations(e.target.value);
        return true;
    })

    function filterDestinations(filter) {
        var filteredList = destinations.filter(function(city) {
            return city.toLowerCase().indexOf(filter.toLowerCase()) > -1;
        })

        makeDestinationList(filteredList);
    }

});