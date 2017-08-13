var React = require('react');
//import { MyInfo, MyFriends } from './myInfo';
import { Popular } from './popular';

class App extends React.Component{
    render(){
        return( 
            <div className="container">
               <Popular />

                {/* <MyInfo name = {'Tom'} /> */}
            </div>            
        );
    }
}

module.exports = App;
