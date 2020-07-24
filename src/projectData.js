// import ecommerceImage from './assets/portfolio-images/ecommerceAppimages.png'
// import ecommerceImage from './assets/portfolio-images/ecommerce-app-images.png'
import ecommerceImage from './assets/portfolio-images/ecommerceProjectImages.png'



const PROJECTS = [
    {   id: 1,
        title: 'E-Commerce',
        description: 'An apprarel shopping web application',
        features: [
            'User sign up and sign in using Google or email/password', 
            'Add or Remove items to cart',
            'Edit items at checkout',
            'Make payments using Stripe',
            'Session Persistance',
            'Firebase integration'

        ],
        images: [ecommerceImage],
        linkToGithub: 'https://github.com/rawanul93/clothing-store-react',
        linkToDemo: 'https://bd-clothing-live.herokuapp.com/'

    },
    {
        id: 2,
        title: 'Events App',
        description: 'An Event management web application',
        features: [
            'User sign up and sign in using Facebook, Google and email/password', 
            'Create events and manage them',
            'View and join events created by others',
            'Upload pictures and crop them',
            'Google maps integration',
            'Comment and reply to comments in an event'
        ],
        images: ['./assets/portfolio-images/checkoutPage.png', './assets/portfolio-images/homePage.png'],
        linkToGithub: 'https://github.com/rawanul93/clothing-store-react',
        linkToDemo: 'https://bd-clothing-live.herokuapp.com/'
    }
]

export default PROJECTS;