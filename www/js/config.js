'use strict';

angular.module('configuration', [])
  .constant('ACTIVE_WARNING_URL', 'https://weather-warning-api.herokuapp.com/active-warning')
  .constant('WARNING_HISTORY_URL', 'https://weather-warning-api.herokuapp.com/warning-history');
