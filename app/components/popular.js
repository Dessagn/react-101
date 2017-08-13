var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage (props) {
    var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    var test = 'Hello People';
     return (
            <div>
                <ul className = "languages">
                    {languages.map((lang) => {
                        return(
                            <li 
                            style = {lang === props.selectedLanguage ? {color: '#FFF', textTransform: 'uppercase'}:{color: '#000'}}
                            onClick = {props.onSelect.bind(null, lang)}
                            key = {lang}>
                               {lang} 
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

export class Popular extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedLanguage: 'All'
        }; 
        
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang){
            this.setState(() => {
                return {
                    selectedLanguage: lang
                }
            });
        }

    render(){
        <div>
            <SelectLanguage
            selectedLanguage = {this.state.selectedLanguage}
            onSelect = {this.updateLanguage}
            />
        </div>        
    }
}

