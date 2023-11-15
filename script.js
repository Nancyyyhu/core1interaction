
    $(document).ready(function() {

      var one = [
        "pretty",
        "sparkling",
        "elegant",
        "quaint",
        "fragile",
        "panicky",
        "gloomy",
        "jolly",
        "raspy",
        
      ];

      // list two content
      var two = [
        "caterpillar",
        "lake",
        "necklace",
        "gadget",
        "heart",
        "expression",
        "mood",
        "party",
        "noise",
        
      ];
            
            // list three content
      var three = [
        "butterfly",
        "lanfill",
        "metal scraps",
        "birthday gift",
        "nightmare",
        "death",
        "ceremony",
        "roar",
                
      ];
            

     
      function select_random(x){
        y = x[Math.floor(Math.random()*x.length)];
        return y;
      }

      function generate(){

        var selected_one = select_random(one);
        var selected_two = select_random(two);
                var selected_three = select_random(three);

        $('.list-one').html(selected_one);
        $('.list-two').html(selected_two);
                $('.list-three').html(selected_three);

      }

      $('button').click(function(){
        generate();
      });

      generate();
      
    });