var Weather = React.createClass({
  getInitialState: function() {
    return {
      city: '',
      weather: ''
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+this.getCity()+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function (result) {
      var results = result.query.results.channel;
      this.setState({
        city: results.description,
        link: results.link,
        weather: results.item.description
      });
    }.bind(this));
  },

  getCity: function() {
    var city = this.getUrlParameter('city');
    if (city) {
        return city;
    } else {
        return "Denver, CO";
    }
  },

    getUrlParameter: function(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        <h4><a href={this.state.link}>{this.state.city}</a></h4>
        <div dangerouslySetInnerHTML={{__html: this.state.weather.replace("<![CDATA[","").replace("]]>","")}}/>
      </div>
    );
  }
});