angular.module( 'app' )

.factory('LocalStorage', function() {
    this.base = '';

    return {
      get: function(key) {
        return JSON.parse(localStorage.getItem(this.base + key));
      },
      set: function(key, val) {
        return localStorage.setItem(this.base + key, JSON.stringify(val));
      },
      clear: function(key) {
        return localStorage.removeItem(this.base + key);
      }
    };
})



;