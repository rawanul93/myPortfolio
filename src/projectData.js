// import ecommerceImage from './assets/portfolio-images/ecommerceAppimages.png'
// import ecommerceImage from './assets/portfolio-images/ecommerce-app-images.png'
import ecommerceImage from './assets/portfolio-images/ecommerceProjectImages.png';
import eventsImage from './assets/portfolio-images/eventsProjectImages.png';


const PROJECTS = [
    {
        id: 1,
        title: 'EVENTS',
        description: 'An Event management web application',
        features: [
            'Users can sign up and sign in using Facebook, Google or email/password.', 
            'Create and manage events.',
            'View and join events or cancel your place as an attendee.',
            'Follow/Unfollow other users.',
            'Crop and Upload pictures.',
            'Google maps integration.',
            'Chat and reply to users on event pages.'
        ],
        images: [eventsImage],
        linkToGithub: 'https://github.com/rawanul93/revents',
        linkToDemo: 'https://revents-264421.web.app'
    },
    {   id: 2,
        title: 'E-COMMERCE',
        description: 'An apprarel shopping web application',
        features: [
            'Users can sign up and sign in using Google or email/password.', 
            'Add or Remove items to cart.',
            'Edit items at checkout.',
            'Make payments using Stripe.',
            'Session Persistance.',
            'Adding more features soon...'

        ],
        images: [ecommerceImage],
        linkToGithub: 'https://github.com/rawanul93/clothing-store-react',
        linkToDemo: 'https://bd-clothing-live.herokuapp.com/'

    }
    
]

export default PROJECTS;