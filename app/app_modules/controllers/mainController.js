/**
 * Created by Nagendra Gandla on 11/28/2014.
 */
'use strict';
var myControllers = angular.module('myControllers', ['myService']);

myControllers.controller("profController", function($scope){
    $scope.profileInfo = function(ss){
        $scope.myApp = false;
        $scope.clickedImg = ss.source;
        $scope.profName = ss.name;
        $scope.profDesignation = ss.designation;
        $scope.skill = ss.skill;
        $scope.state = ss.state;
        $scope.country = ss.country;
        $scope.mobile = ss.mobile;
    };
});

myControllers.controller("bodyController", ['$scope', function($scope){
    $scope.showSmall = function(){
        $(".container").css({"height":"20em","width":"60em"});
        $(".mainContentData").css({"font-size":"15px","margin-left":"0.5%"});
        $(".text-right").css({"font-size":"13px"});
        $(".navbar").css({"min-height":"inherit","margin-top":"3.6%"});
        $(".navbar-nav li a").css({"padding-top":"5px","padding-bottom":"5px","color":"#ffffff"});
        $(".results").css({"font-size":"80%"});
        $(".profileName").css({"font-size":"80%"});
        $(".pagination").css({"font-size":"80%"});

    };
    $scope.showMedium = function(){
        $(".container").css({"height":"30em","width":"75em"});
        $(".mainContentData").css({"font-size":"18px","margin-left":"0.5%"});
        $(".text-right").css({"font-size":"15px"});
        $(".navbar").css({"min-height":"inherit","margin-top":"3.6%"});
        $(".navSection").css({"margin-top":"3.6%"});
        $(".navbar-nav li a").css({"padding-top":"10px","padding-bottom":"10px","color":"#ffffff"});
        $(".results").css({"font-size":"90%"});
        $(".profileName").css({"font-size":"90%"});
        $(".pagination").css({"font-size":"90%"});
    };
    $scope.showLarge = function(){
        $(".container").css({"height":"40em","width":"90em"});
        $(".mainContentData").css({"font-size":"21px","margin-left":"0.5%"});
        $(".text-right").css({"font-size":"18px"});
        $(".navbar").css({"min-height":"inherit","margin-top":"3.6%"});
        $(".navbar-nav li a").css({"padding-top":"15px","padding-bottom":"15px","color":"#ffffff"});
        $(".results").css({"font-size":"100%"});
        $(".profileName").css({"font-size":"100%"});
        $(".pagination").css({"font-size":"100%"});
    };
}]);

myControllers.controller("webController", ['$scope', '$http', function($scope, $http){
    $scope.profileData = [];
    $http.get('json/Web.json').success(function(data){
        $scope.profileData = data;
    });
    $scope.myApp = true;

    /* pagination logic */

    $scope.itemsPerPage = 7;
    $scope.currentPage = 0;

    $scope.range = function(){
        var rangeSize = 4;
        var ps = [];
        var start;
        start = $scope.currentPage;
        if(start > $scope.pageCount()-rangeSize){
            start = $scope.pageCount()-rangeSize+1;
        }
        for(var i = start; i<start+rangeSize;i++){
            if(i >= 0){
                ps.push(i);
            }
        }

        return ps;
    };


    $scope.prevPage = function(){
        if($scope.currentPage > 0){
            $scope.currentPage--;
        }
    };

    $scope.DisablePrevPage = function(){
        return $scope.currentPage === 0 ? "disabled":"";
    };
    $scope.pageCount = function(){
        return Math.ceil($scope.profileData.length/$scope.itemsPerPage)-1;
    };

    $scope.nextPage = function() {
        //if ($scope.currentPage > $scope.pageCount()) {
        $scope.currentPage++;
        //}
    };

    $scope.DisableNextPage = function(){
        return $scope.currentPage === $scope.pageCount()? "disabled":"";
    };

    $scope.setPage = function(n){
        $scope.currentPage = n;
    }

}]);

myControllers.controller("mobilityController",['$scope', '$http', function($scope, $http){
    $scope.profileData = [];
    $http.get('json/Mobility.json').success(function(data){
        $scope.profileData = data;
    });
    $scope.myApp = true;

    /* pagination logic */
    $scope.itemsPerPage = 7;
    $scope.currentPage = 0;

    $scope.range = function(){
        var rangeSize = 4;
        var ps = [];
        var start;
        start = $scope.currentPage;
        if(start > $scope.pageCount()-rangeSize){
            start = $scope.pageCount()-rangeSize+1;
        }
        for(var i = start; i<start+rangeSize;i++){
            if(i >= 0){
                ps.push(i);
            }
        }

        return ps;
    };


    $scope.prevPage = function(){
        if($scope.currentPage > 0){
            $scope.currentPage--;
        }
    };

    $scope.DisablePrevPage = function(){
        return $scope.currentPage === 0 ? "disabled":"";
    };
    $scope.pageCount = function(){
        return Math.ceil($scope.profileData.length/$scope.itemsPerPage)-1;
    };

    $scope.nextPage = function() {
        //if ($scope.currentPage > $scope.pageCount()) {
        $scope.currentPage++;
        //}
    }

    $scope.DisableNextPage = function(){
        return $scope.currentPage === $scope.pageCount()? "disabled":"";
    }

    $scope.setPage = function(n){
        $scope.currentPage = n;
    }
}]);

myControllers.controller("openSourceController",['$scope', '$http', function($scope, $http){
    $scope.profileData = [];
    $http.get('json/OpenSource.json').success(function(data){
        $scope.profileData = data;
    });
    $scope.myApp = true;

    /* pagination logic */
    $scope.itemsPerPage = 7;
    $scope.currentPage = 0;

    $scope.range = function(){
        var rangeSize = 4;
        var ps = [];
        var start;
        start = $scope.currentPage;
        if(start > $scope.pageCount()-rangeSize){
            start = $scope.pageCount()-rangeSize+1;
        }
        for(var i = start; i<start+rangeSize;i++){
            if(i >= 0){
                ps.push(i);
            }
        }

        return ps;
    };


    $scope.prevPage = function(){
        if($scope.currentPage > 0){
            $scope.currentPage--;
        }
    };

    $scope.DisablePrevPage = function(){
        return $scope.currentPage === 0 ? "disabled":"";
    };
    $scope.pageCount = function(){
        return Math.ceil($scope.profileData.length/$scope.itemsPerPage)-1;
    };

    $scope.nextPage = function() {
        //if ($scope.currentPage > $scope.pageCount()) {
        $scope.currentPage++;
        //}
    }

    $scope.DisableNextPage = function(){
        return $scope.currentPage === $scope.pageCount()? "disabled":"";
    }

    $scope.setPage = function(n){
        $scope.currentPage = n;
    }
}]);

myControllers.controller("analyticsController",['$scope', '$http', function($scope, $http){
    $scope.profileData = [];
    $http.get('json/Analytics.json').success(function(data){
        $scope.profileData = data;
    });
    $scope.myApp = true;

    /* pagination logic */
    $scope.itemsPerPage = 7;
    $scope.currentPage = 0;

    $scope.range = function(){
        var rangeSize = 4;
        var ps = [];
        var start;
        start = $scope.currentPage;
        if(start > $scope.pageCount()-rangeSize){
            start = $scope.pageCount()-rangeSize+1;
        }
        for(var i = start; i<start+rangeSize;i++){
            if(i >= 0){
                ps.push(i);
            }
        }

        return ps;
    };


    $scope.prevPage = function(){
        if($scope.currentPage > 0){
            $scope.currentPage--;
        }
    };

    $scope.DisablePrevPage = function(){
        return $scope.currentPage === 0 ? "disabled":"";
    };
    $scope.pageCount = function(){
        return Math.ceil($scope.profileData.length/$scope.itemsPerPage)-1;
    };

    $scope.nextPage = function() {
        //if ($scope.currentPage > $scope.pageCount()) {
        $scope.currentPage++;
        //}
    }

    $scope.DisableNextPage = function(){
        return $scope.currentPage === $scope.pageCount()? "disabled":"";
    }

    $scope.setPage = function(n){
        $scope.currentPage = n;
    }
}]);

myControllers.controller("crmController",['$scope', '$http', function($scope, $http){
    $scope.profileData = [];
    $http.get('json/crm.json').success(function(data){
        $scope.profileData = data;
    });
    $scope.myApp = true;

    /* pagination logic */
    $scope.itemsPerPage = 7;
    $scope.currentPage = 0;

    $scope.range = function(){
        var rangeSize = 4;
        var ps = [];
        var start;
        start = $scope.currentPage;
        if(start > $scope.pageCount()-rangeSize){
            start = $scope.pageCount()-rangeSize+1;
        }
        for(var i = start; i<start+rangeSize;i++){
            if(i >= 0){
                ps.push(i);
            }
        }

        return ps;
    };


    $scope.prevPage = function(){
        if($scope.currentPage > 0){
            $scope.currentPage--;
        }
    };

    $scope.DisablePrevPage = function(){
        return $scope.currentPage === 0 ? "disabled" : "";
    };
    $scope.pageCount = function(){
        return Math.ceil($scope.profileData.length/$scope.itemsPerPage)-1;
    };

    $scope.nextPage = function() {
        //if ($scope.currentPage > $scope.pageCount()) {
        $scope.currentPage++;
        //}
    };

    $scope.DisableNextPage = function(){
        return $scope.currentPage === $scope.pageCount() ? "disabled":"";
    };

    $scope.setPage = function(n){
        $scope.currentPage = n;
    }
}]);
