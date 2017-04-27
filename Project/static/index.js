var searched = 0;
var KEYWORD = "Samsung";

function search() {
  keyWord = KEYWORD;
  POPULARITY = document.getElementById('popularity');
  SENTIMENT = document.getElementById('sentiment');
  pxarray = [];
  pyarray = [];
  sxarray = [];
  syarray = [];

  plist = Popularity_Dict[keyWord+"_Popularity"];
  slist = Sentiment_Dict[keyWord+"_Sentiment"];

  for(var i = 0; i < plist.length; ++i){
          pxarray.push(plist[i].Time);
          pyarray.push(plist[i].Value);

  }

  for(var i = 0; i < slist.length; ++i){
          sxarray.push(slist[i].Time);
          syarray.push(slist[i].Value);

  }

  var playout = {
  title: 'Popularity',
  xaxis: {
  title: '',
  titlefont: {
    family: 'Courier New, monospace',
    size: 18,
    color: '#7f7f7f'
  }
  },
  yaxis: {
  title: '',
  titlefont: {
    family: 'Courier New, monospace',
    size: 18,
    color: '#7f7f7f'
  }
  }
  };
  var slayout = {
  title: 'Sentiment',
  xaxis: {
  title: '',
  titlefont: {
    family: 'Courier New, monospace',
    size: 18,
    color: '#7f7f7f'
  }
  },
  yaxis: {
  title: '',
  titlefont: {
    family: 'Courier New, monospace',
    size: 18,
    color: '#7f7f7f'
  }
  }
  };


  Plotly.plot( POPULARITY, [{
  x: pxarray,
  y: pyarray}], playout);



  Plotly.plot( SENTIMENT, [{
  x: sxarray,
  y: syarray}], slayout);
}


function spider() {
    window.location.href = 'index.html';
}


function demo() {
    window.location.href = 'test.html';
}

function project() {
    window.location.href = 'index.html';
}

function samsung() {
    window.location.href = 'samsung.html';
}
function AlphaGo() {
    window.location.href = 'AlphaGo.html';
}
function apple() {
    window.location.href = 'apple.html';
}

function GOT() {
    window.location.href = 'GOT.html';

}

function Trump() {
    window.location.href = 'Trump.html';
}
function team() {
    window.location.href = 'team.html';
}

function searchKeyPress(e){
    e = e || window.event;
    if (e.keyCode == 13){
        document.getElementById('search_button').click();
        return false;
    }
    return true;
}

function direct_demo(img){
  window.KEYWORD = img.id;
  document.cookie = "KEYWORD="+img.id+"; path=/";
  console.log("id_set",KEYWORD);
  window.location.href="display.html";

}

function make_display(keyWord){
    keyWord = "Samsung";
    var POPULARITY = document.getElementById('popularity');
    var SENTIMENT = document.getElementById('sentiment');
    pxarray = [];
    pyarray = [];
    sxarray = [];
    syarray = [];

    plist = Popularity_Dict[keyWord+"_Popularity"];
    slist = Sentiment_Dict[keyWord+"_Sentiment"];

    for(var i = 0; i < 10; ++i){
            pxarray.push(plist[i].Time);
            pyarray.push(plist[i].Value);

    }

    for(var i = 0; i < 10; ++i){
            sxarray.push(slist[i].Time);
            syarray.push(slist[i].Value);

    }

    var playout = {
  title: 'Popularity',
  xaxis: {
    title: '',
    titlefont: {
      family: 'Courier New, monospace',
      size: 18,
      color: '#7f7f7f'
    }
  },
  yaxis: {
    title: '',
    titlefont: {
      family: 'Courier New, monospace',
      size: 18,
      color: '#7f7f7f'
    }
  }
};
    var slayout = {
  title: 'Sentiment',
  xaxis: {
    title: '',
    titlefont: {
      family: 'Courier New, monospace',
      size: 18,
      color: '#7f7f7f'
    }
  },
  yaxis: {
    title: '',
    titlefont: {
      family: 'Courier New, monospace',
      size: 18,
      color: '#7f7f7f'
    }
  }
};


    Plotly.plot( POPULARITY, [{
    x: pxarray,
    y: pyarray}], playout);



    Plotly.plot( SENTIMENT, [{
    x: sxarray,
    y: syarray}], slayout);

    location = location;


}
