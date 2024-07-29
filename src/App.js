import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App(){
    return (
        <div>

            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Persional digital Asistants</p>

                </div>
            </section>
                <div className="container">
                    <section className="section">
                        <div className="columns">
                            <div className="column is-3">
                                <ProfileCard 
                                    title="Alexa" 
                                    handle="@alexa99" 
                                    image={AlexaImage}
                                    description="Alexas is create by Aamazpn and helps you buy things"    
                                />
                            </div>
                            <div className="column is-3">
                                <ProfileCard 
                                    title="Cortana" 
                                    handle="@cortana32" 
                                    image={CortanaImage}
                                    description="Cortana is create by Microsoft and helps you buy things"
                                />
                            </div>
                            <div className="column is-3">
                                <ProfileCard 
                                    title="Siri" 
                                    handle="@siri01"
                                    image={SiriImage}
                                    description="Siri is create by Apple. This is shxt"          
                                />
                            </div>
                        </div>
                    </section>
                </div>
        </div>
    );

}


export default App;