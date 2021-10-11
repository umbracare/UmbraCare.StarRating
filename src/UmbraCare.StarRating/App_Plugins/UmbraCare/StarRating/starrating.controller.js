/*!
 * UmbraCare.StarRating
 *
 * The MIT License
 *
 * author:  Wojciech Tengler, Piotr Bach
 * github:  UmbraCare/UmbraCare.StarRating
 *
 */

'use strict';
angular.module("umbraco").controller("UmbraCare.StarRatingController", function ($scope, $element, $timeout, assetsService) {
    assetsService.load([
        "~/App_Plugins/UmbraCare/StarRating/assets/jquery.raty.min.js"
    ]).then(function () {
        $timeout(function () {
            $scope.model.config.enableHalfStar = $scope.model.config.enableHalfStar !== "0"
                && $scope.model.config.enableHalfStar !== 0
                && $scope.model.config.enableHalfStar !== "false"
                && $scope.model.config.enableHalfStar !== false;

            $scope.model.config.readOnly = $scope.model.config.readOnly !== "0"
                && $scope.model.config.readOnly !== 0
                && $scope.model.config.readOnly !== "false"
                && $scope.model.config.readOnly !== false;

            if ($scope.model.value === null || $scope.model.value === "")
                $scope.model.value = $scope.model.config.defaultRating

            initRatyPlugin();
        });
    });

    function initRatyPlugin() {
        $(".stars", $element).raty({
            score: $scope.model.value,
            readOnly: $scope.model.config.readOnly,
            number: $scope.model.config.numberOfStars,
            half: $scope.model.config.enableHalfStar,
            cancelButton: !$scope.model.validation.mandatory,
            cancelPlace: "right",
            path: "/App_Plugins/UmbraCare/StarRating/assets/images",
            click: onRatyPluginClick
        });
    }

    function onRatyPluginClick(score, evt) {
        if (score)
            $scope.model.value = score;
        else
            $scope.model.value = $scope.model.config.defaultRating;
    }
});