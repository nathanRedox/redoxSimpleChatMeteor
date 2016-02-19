if (Meteor.isClient) {
    calculateLastPosted = function (postDate) {
         sec = (new Date().getTime() / 1000.0) - (postDate.getTime() / 1000.0);
         hours = parseInt(sec / 60 / 60);
         sec = Math.round(sec - hours * 60 * 60);
         min = parseInt(sec / 60);
         ses = sec - min * 60;
         days = parseInt(hours / 24);
         result = undefined;

         if (days>0){
         result = days.toString() + ' days ago'
         }
         else if (hours>0){
         result = hours.toString() + ' hours ago'
         }
         else if (min>0){
         result = min.toString() + ' mins ago'
         }
         else if (sec>0){
              result = sec.toString() + ' secs ago'
         }
         else {
              result = ' just now'
         }
         return result;

    }
}