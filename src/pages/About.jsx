
import styles from '../pages/styles/About.module.css'
import darrel from '../assets/darrel.jpg'
import maya from '../assets/maya.jpg'


export default function About() {

    return (
        <>
        <div className= {styles.container}>
        <div className={styles.brand}>
            <h3>Good coffee.  Real connections</h3>
            <p >We are a neighbourhood coffee shop in Nairobi, Kenya.
                we serve carefully sourced coffee and good vibes daily
            </p>
            <hr />
        </div>
        <div className={styles.story}>
            <div>
                <h4>Our story</h4>
                <ul>
                    <li>
                        <h5>The origin</h5>
                        <p>                            
                        We opened our doors in 2018 with a simple idea:
                        create a place where great coffee brings people
                        We partner with small-scale farmers who
                        together. Inspired by our travels, farmers we met,
                        prioritize people and planet. Our beans come
                        and the communities that welcomed us.
                        </p>
                    </li>
                    <li>
                        <h5>The journey</h5>
                        <p>
                            From roasting our first batch in a tiny roaster
                            to finding our home in the heart of West Asheville,
                            it's been an amazing ride fueled by you.
                        </p>
                    </li>
                    <li>
                        <h5>Our mission</h5>
                        <p>
                            We're here to serve exceptional coffee,
                            support our community, and make a positive
                            impact-one cup at a time.
                        </p>
                    </li>
                </ul>
            </div>
            <div>
                <h4>What makes our coffee special</h4>
                <ul>
                    <li>
                        <h5>Sourcing</h5>
                        <p>
                            We partner with small-scale farmers who
                            prioritize people and planet. Our beans come
                            from ethical, sustainable farms in Kenya,
                            Ethiopia, and Brazil. 
                        </p>
                    </li>
                    <li>
                        <h5>Roasting & brewing</h5>
                        <p>
                            We roast in small batches to highlight each
                            bean's unique character and brew with care
                        </p>
                    </li>
                    <li>
                        <h5>Menu focus</h5>
                        <p>
                            Thoughtful sips. Delicious bites.
                            Enjoy house-made pastries, hearty toasts
                            and plenty of vegan & gluten-free options.
                        </p>
                    </li>
                </ul>
            </div>
        </div>   
        <hr />     
        <div className={styles.team}>
            <div>
            <h3>Meet the team</h3>
            <p>
                <strong>A Note from Our Founder</strong> <br />
                "This shop is a love letter to connection
                to the farmers, our team, and this amazing
                community. Thank you for being here."
            </p>
            </div>
            <div>
            <h5>Our baristas</h5>
            <ul  className= {styles.baristas}>
                <li>
                    <img src={maya} alt="Maya" />
                    <p>
                        <strong>Maya</strong> <br />
                        <p>
                            Makes a mean vanilla latte
                        </p>
                    </p>
                </li>
                <li>
                      <img src={darrel} alt="Darrel" />
                    <p>
                        <strong>Darrel</strong> <br />
                        <p>
                            Pianist, chess enthusiast. Ask him for recs
                        </p>
                    </p>
                </li>
            </ul>
            </div>
            <div>
                <h5>Our Culture</h5>
                <p>
                    We show up, support each other,
                    and pour our hearts into every detail
                    so you can feel right at home.
                </p>
            </div>
            <hr />
        </div>
        <div className={styles.community}>
            <h3>Community & space</h3>
            <p>
                <strong>The atmosphere</strong> <br />
                Whether you're here for a focused work session,
                quick pick-me-up, or a slow morning with a book,
                our space is yours. Cozy corners, natural light,
                and good energy all around.
            </p>
            <p>
                <strong>Local impact</strong> <br />
                We source locally whenever we can, donate
                to local nonprofits, and host workshops,
                open mics, and pop-ups that bring our
                neighborhood together.
            </p>
        </div>
        </div >
        </>
    )
}