
var myapp = angular.module('myapp', ['ngRoute','ui.bootstrap', 'bootstrapLightbox']);

myapp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'pages/index.html',
    }).
    when('/about', {
        templateUrl: 'pages/about.html',
    }).
    when('/work', {
        templateUrl: 'pages/work.html',
    }).
    when('/contact', {
        templateUrl: 'pages/contact.html',
    }).
    otherwise({
        redirectTo: '/home'
    });

}]);


myapp.directive('bsActiveLink', ['$location', function ($location) {
    return {
        restrict: 'A', //use as attribute 
        replace: false,
        link: function (scope, elem) {
            //after the route has changed
            scope.$on("$routeChangeSuccess", function () {
                var hrefs = ['/#' + $location.url(),
                             '#' + $location.url(), //html5: false
                             $location.url()]; //html5: true
                angular.forEach(elem.find('a'), function (a) {
                    a = angular.element(a);
                    if (-1 !== hrefs.indexOf(a.attr('href'))) {
                        a.parent().addClass('active');
                    } else {
                        a.parent().removeClass('active');   
                    };
                });     
            });
        }
    }
}]);

/* Controllers */

myapp.controller('MainCtrl', function($scope) {
    $scope.navbarCollapsed = false;
});

myapp.controller('carousel', function($scope){
      $scope.myInterval = 3000;
      $scope.noWrapSlides = true;
      $scope.slides = [
        {
          image: 'http://placehold.it/1200x600'
        },
        {
          image: 'http://placehold.it/1200x600'
        },
        {
          image: 'http://placehold.it/1200x600'
        },
        {
          image: 'http://placehold.it/1200x600'
        }
      ];
});

myapp.controller('GalleryCtrl', function ($scope, Lightbox) {
  $scope.images = [
    {
      'url': 'https://farm6.staticflickr.com/5830/20552523531_e1efec8d49_k.jpg',
      'thumbUrl': 'https://farm6.staticflickr.com/5830/20552523531_ef720cd2f1_s.jpg',
      'caption': 'This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.'
    },
    {
      'url': 'https://farm8.staticflickr.com/7300/12807911134_ff56d1fb3b_b.jpg',
      'thumbUrl': 'https://farm8.staticflickr.com/7300/12807911134_ff56d1fb3b_s.jpg'
    },
    {
      'url': 'https://farm1.staticflickr.com/400/20228789791_52fb84917f_b.jpg',
      'thumbUrl': 'https://farm1.staticflickr.com/400/20228789791_52fb84917f_s.jpg',
      'caption': 'The left and right arrow keys are binded for navigation. The escape key for closing the modal is binded by AngularUI Bootstrap.'
    },
    {
      'url': 'https://farm1.staticflickr.com/260/20185156095_912c2714ef_b.jpg',
      'thumbUrl': 'https://farm1.staticflickr.com/260/20185156095_912c2714ef_s.jpg'
    }
  ];

  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };
});


// myapp.controller('CarouselDemoCtrl', function ($scope) {
//   $scope.myInterval = 2000;
//   $scope.noWrapSlides = false;
//   var slides = $scope.slides = [];
//   $scope.addSlide = function() {
//     var newWidth = 600 + slides.length + 1;
//     slides.push({
//       image: '//placekitten.com/' + newWidth + '/300',
//       text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
//         ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
//     });
//   };
//   for (var i=0; i<4; i++) {
//     $scope.addSlide();
//   }
// });