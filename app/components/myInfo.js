var React = require('react');
var PropTypes = require('prop-types');

export class MyInfo extends React.Component{
   
    render() {
        var friends = [
            {name: 'Jarso', friend: true},
            {name: 'Jaffar', friend: false}, 
            {name: 'Elina', friend: true}, 
            {name: 'MJ', friend: true}, 
            {name: 'Moyye', friend: false}, 
            {name: 'Tora', friend: false}, 
            {name: 'Asfaw', friend: true}
        ];
        return(
            <div>
                <h1>My name is {this.props.name} </h1>
                <MyFriends friends= {friends} />
            </div>
            
        );
    }
}

export class MyFriends extends React.Component{
    render(){
        return(
            <div>
                <h3>My Friends are: </h3>
                <ul>
                    {this.props.friends.filter(f => {
                       return f.friend === true;
                    }).map(fr => {
                        return (<li key={fr.name}>
                                {fr.name}
                                </li>);
                    })}
                </ul>

                <h3>Not my friends are: </h3>
                <ul>
                    {this.props.friends.filter(f => {
                       return f.friend !== true;
                    }).map(fr => {
                        return (<li key={fr.name}>
                                {fr.name}
                                </li>);
                    })}
                </ul>
            </div>
        );
    }
}

MyFriends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape(
      {
          name: PropTypes.string.isRequired,
          friend: PropTypes.bool.isRequired 
      }
    )).isRequired
};

MyInfo.propTypes = {
  name: PropTypes.string.isRequired
};