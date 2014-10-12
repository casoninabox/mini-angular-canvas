// Module
angular.module('app.home', [
    'ui.router.state'
])

// Routing
.config(function config($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        views: {
            "main": {
                controller: 'HomeCtrl',
                templateUrl: 'home/home.jade'
            }
        },
        data: { }
    });
})

// Controller
.controller('HomeCtrl', function HomeCtrl($scope, $state, $canvas, $color) {
    var bgColor = $color.getRandom();
    
    $scope.update = function() {
        var ctx = $canvas.ctx;
        $canvas.setFps(60);
        $canvas.clearScreen(bgColor, 0.05);
        
        ctx.strokeStyle = $color.getRandom();
        ctx.lineWidth = 10;
        ctx.lineJoin = ctx.lineCap = 'round';

        ctx.beginPath();
        var randomNumber = Math.random() * $canvas.width;
        ctx.moveTo(randomNumber, 0);
        ctx.lineTo(randomNumber, $canvas.height);
        ctx.stroke();
    };

    $canvas.start($scope.update);
});