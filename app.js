var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "madwithit", "sodapoppin", "riotgames", "syndicate"];
var offline = [];
var online= [];
var all = [];


streams.forEach(function(host) {
  
  $.getJSON("https://api.twitch.tv/kraken/streams/"+host+"?callback=?", function(data) {
    //pushes data to arrays
    all.push(data);
    data.name = host;
    var channel = "<a href='https://www.twitch.tv/"+data.name+"'>";
    if(data.stream == null) {
         offline.push(data);
          var logo = "https://lh3.googleusercontent.com/YGqr3CRLm45jMF8eM8eQxc1VSERDTyzkv1CIng0qjcenJZxqV5DBgH5xlRTawnqNPcOp=w300";
          var game = "";
          var link = "<a href='#'></a>";
          var icon = "<i class='fa fa-exclamation' aria-hidden='true'></i>";
    } else {
        online.push(data);
        logo = data.stream.channel.logo;
        game = data.stream.game;
        link = "<a class='btn btn-primary btn-sm'  href='https://www.twitch.tv/"+data.name+"'>Watch!</a>";
        icon = "<i class='fa fa-check' aria-hidden='true'></i>";
    }    
    
      var d = "<div class='profile'>"+channel+"<img src='"+logo+"'></a><strong>"+data.name+"</strong>"+"<span> "+game+" </span>"+channel+link+icon+"</div>";
     $(".profileContainer").append(d);
    
    $(".profile").on("mouseover", function() {
          $(this).css("border-left", "5px solid orange");
    });
      $(".profile").on("mouseout", function() {
          $(this).css("border-left", "none");
    });
    
    
});

})

//all button click
 $("#all").on("click", function() {
      $(".profileContainer").html("");
      all.forEach(function(host){
       
        var channel = "<a href='https://www.twitch.tv/"+host.name+"'>";
        if(host.stream == null) {
          var logo = "https://lh3.googleusercontent.com/YGqr3CRLm45jMF8eM8eQxc1VSERDTyzkv1CIng0qjcenJZxqV5DBgH5xlRTawnqNPcOp=w300";
          var game = "";
          var link = "<a href='#'></a>";
          var icon = "<i class='fa fa-exclamation' aria-hidden='true'></i>";
      } else {
          logo = host.stream.channel.logo;
          game = host.stream.game;
          link = "<a class='btn btn-primary btn-sm'  href='https://www.twitch.tv/"+host.name+"'>Watch!</a>";
          icon = "<i class='fa fa-check' aria-hidden='true'></i>";
      }    
        
         var d = "<div class='profile'>"+channel+"<img src='"+logo+"'></a><strong>"+host.name+"</strong>"+"<span> "+game+" </span>"+channel+link+icon+"</div>";
     $(".profileContainer").append(d);
        
          $(".profile").on("mouseover", function() {
          $(this).css("border-left", "5px solid orange");
    });
      $(".profile").on("mouseout", function() {
          $(this).css("border-left", "none");
    });
        
      })
 });

//ONLINE button click
 $("#online").on("click", function() {
      $(".profileContainer").html("");
      online.forEach(function(host){
          var logo = host.stream.channel.logo;
          var game = host.stream.game;
          var link = "<a class='btn btn-primary btn-sm' href='https://www.twitch.tv/"+host.name+"'>Watch!</a>";
          var channel = "<a href='https://www.twitch.tv/"+host.name+"'>";
          var icon = "<i class='fa fa-check' aria-hidden='true'></i>";
          var d = "<div class='profile'>"+channel+"<img src='"+logo+"'></a><strong>"+host.name+"</strong>"+"<span> "+game+" </span> "+channel+link+icon+"</div>";
        
           $(".profileContainer").append(d); 
        
          $(".profile").on("mouseover", function() {
          $(this).css("border-left", "5px solid orange");
    });
      $(".profile").on("mouseout", function() {
          $(this).css("border-left", "none");
    });
      })
 });

//OFFLINE button click
 $("#offline").on("click", function() {
      $(".profileContainer").html("");
      offline.forEach(function(host){
          var logo = "https://lh3.googleusercontent.com/YGqr3CRLm45jMF8eM8eQxc1VSERDTyzkv1CIng0qjcenJZxqV5DBgH5xlRTawnqNPcOp=w300";
          var game = "";
          var link = "<a href='#'></a>";
          var icon = "<i class='fa fa-exclamation' aria-hidden='true'></i>";
          var channel = "<a href='https://www.twitch.tv/"+host.name+"'>";
        
          var d = "<div class='profile'>"+channel+"<img src='"+logo+"'></a><strong>"+host.name+"</strong>"+" "+game+" "+channel+link+icon+"</div>";
        $(".profileContainer").append(d);
        
          $(".profile").on("mouseover", function() {
          $(this).css("border-left", "5px solid orange");
    });
      $(".profile").on("mouseout", function() {
          $(this).css("border-left", "none");
    });
      })
 });

console.log(all)




