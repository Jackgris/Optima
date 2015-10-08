'use strict';

/* Services */
angular.module('optima')
  .factory('Advertiser', AdvertiserService)
  .factory('AddAdvertiser', AddAdvertiserService);

function AdvertiserService($resource, $auth){
    // this return the json data info of the advertisers
    return $resource('advertisers', {}, {
        // 'static/js/json/:advertiserId.json', {}, {
        // headers:{'Authorization': $auth.getToken()},
        // params:{advertiserId:'advertisers'},
        query: {
            method:'GET',           
            isArray:true, 
        }
    });
}

function AddAdvertiserService($resource, $auth){
    // this return the json data info of the advertisers
    return $resource('advertisers', {}, {
        // 'static/js/json/:advertiserId.json', {}, {
        // headers:{'Authorization': $auth.getToken()},
        // params:{advertiserId:'advertisers'},
        query: {
            method:'GET',           
            isArray:true, 
        }
    });
}
