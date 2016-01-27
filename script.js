
$(document).ready(function() {
  var quotes = {
    1 : ["Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young.", "Henry Ford"],
    
    2 : ["Half the harm that is done in this world is due to people who want to feel important.", "T. S. Eliot"],
    
    3 : ["However beautiful the strategy, you should occasionally look at the results.", "Winston Churchill"],
    
    4 : ["Talent is God-given. Be humble. Fame is man-given. Be grateful. Conceit is self-given. Be careful.", "John Wooden"],
    
    5 : ["Think well to the end, consider the end first.", "Leonardo DaVinci"],
    
    6 : ["If we all worked on the assumption that what is accepted as true is really true, there would be little hope of advance.", "Orville Wright"],
    
    7 : ['Maybe fear is God\'s way of saying, "Pay attention, this could be fun."',"Craig Ferguson"],
    
    8 : ["Me, me, me is dull, dull, dull.", "The Millionaire Mind"],
    
    9 : ["In all labor there is profit, but mere talk leads only to poverty.", "The Bible"],
    
    10 : ["There is little success where there is little laughter.", "Andrew Carnegie"],
    
    11 : ["It is a mistake to think that the practice of my art has become easy to me...no one has given so much care to the study of composition as I.", "Wolfgang Mozart"],
    
    12 : ["Wisdom is the reward you get for a lifetime of listening when you'd have perferred to talk.", "Doug Larson"],
    
    13 : ["I walk slowly, but I never walk backward.", "Abraham Lincoln"],
    
    14 : ["In tough times cynicism is just another way to give up.", "Gen. James Mattis, Ret. USMC"],
    
    15 : ["If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month.", "Teddy Roosevelt"]
  };

  var randomNum = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
  $("#quote").text(quotes[randomNum][0]);
  $("#author").text(quotes[randomNum][1]);

  $("button").click(function() {
    var randomNum = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
    $("#quote").text(quotes[randomNum][0]);
    $("#author").text(quotes[randomNum][1]);
    var combined = quotes[randomNum][0] + " " + quotes[randomNum][1];

    function twitterReset () {
      $('#quotes iframe').remove();
      var newTweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
        .attr('data-text', combined);
      $('#twitter').append(newTweetBtn);
      twttr.widgets.load();
    }
    twitterReset();
  });
});