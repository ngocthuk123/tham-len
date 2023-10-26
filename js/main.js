
// Form search trên menu Top
$(document).ready(function () {
    const searchIcon = $('.left-top-header-search i');
    const searchForm = $('#search-form');

    // Toggle the search form when the search icon is clicked
    searchIcon.click(function () {
        searchForm.toggle();
    });

    // Hide the search form when clicking outside of it
    $(document).click(function (event) {
        if (!searchForm.is(event.target) && !searchIcon.is(event.target) && !searchForm.has(event.target).length) {
            searchForm.hide();
        }
    });
});

// Form search trên menu Top-Responsive
$(document).ready(function () {
    const searchIcon = $('.background-top-responsive .left-top-header-search i');
    const searchForm = $('.background-top-responsive #search-form');

    // Toggle the search form when the search icon is clicked
    searchIcon.click(function () {
        searchForm.toggle();
    });

    // Hide the search form when clicking outside of it
    $(document).click(function (event) {
        if (!searchForm.is(event.target) && !searchIcon.is(event.target) && !searchForm.has(event.target).length) {
            searchForm.hide();
        }
    });
});

//Menu chính responsive
// $(document).ready(function () {
//     $("#navbar-toggle").click(function () {
//         $("#responsive-menu-header").slideToggle();
//     });

//     function hide_responsive_menu() {
//         $("#responsive-menu-header").slideUp();
//         $("#responsive-menu-header .dropdown").slideUp();
//         $(".responsive-menu-toggle").removeClass('open');

//     }

//     $(window).resize(function () {
//         hide_responsive_menu();
//     });



//     $(window).scroll(function () {
//         hide_responsive_menu();
//     });

//     $('.responsive-menu-toggle').click(function () {
//         $(this).toggleClass('open');
//         $(this).next('.dropdown').slideToggle();
//     });

// });