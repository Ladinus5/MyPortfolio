const { name } = require("ejs");

const services = [
    {
        id : 1,
        title : 'SEO',
        shortDescription : 'Want to improve your Business Presence?',
        // fullDescription : 'In todays digital world, having a strong online presence is crucial to business success Search Engine Optimization, SEO plays a key role ensuring your website ranks higher search results, making it easier potential customers to find you.I specialize providing tailored SEO services that help businesses like yours improve visibility, drive organic traffic, and increase conversions Whether youre looking to enhance your websites ranking, optimize your content, or stay ahead of competitors, my SEO strategies are designed to deliver real, measurable results.
        // 'By analyzing your website, identifying key opportunities and applying proven SEO techniques, I ensure your site stands out on Google and other search engines With a focus on both on page and off page SEO, I help you build a foundation that attracts the right audience, grows your brand, and improves your bottom line, If youre ready to take your business to the next level and reach more customers, lets talk!',
        slug : 'seo',
    },
    {
        id : 2,
        title: 'Forex Analysis',
        shortDescription : 'Like to get Trading Analysis and Signals?',
        // fullDescription : 'Navigating the forex market can be challenging, but it doesn't have to be. I offer free forex trading tips, in-depth analysis, and real-time signals to help you make informed decisions and maximize your trading potential.
        //     "Whether you're a beginner or an experienced trader, my insights are designed to keep you ahead of the market. With actionable advice and signals, you can take advantage of profitable opportunities and manage risks effectively—all without spending a dime."            
        //     'My commitment is to empower traders with reliable information, free of charge. From identifying trends to analyzing key market movements, I provide the tools and knowledge you need to trade confidently.'            
        //     'Ready to elevate your trading game? Follow my updates and start receiving expert tips, analysis, and signals.,
        slug: 'forex-analysis',
    },
    {
        id: 3,
        title : 'IT Consultancy',
        shortDescription: 'How does it feel getting Quality Insights?',
        // fullDescription: "In a world driven by technology, having the right IT solutions is essential for your business to thrive. I offer tailored IT consultancy services designed to help you navigate complex challenges, optimize your technology, and achieve your goals efficiently.
        //     "From identifying the right tools for your business to streamlining operations and ensuring robust cybersecurity, my expertise helps you stay ahead in a rapidly evolving digital landscape. Whether you're a startup looking to establish a solid IT foundation or an established company aiming to modernize your systems, I provide practical, actionable solutions to meet your needs.           
        //     "Partner with me for clear guidance, expert advice, and innovative strategies that align your technology with your business vision. Let’s work together to turn your challenges into opportunities."
        //     "Contact me today to explore how my IT consultancy services can drive your success!",
        slug : 'it-consultancy',
    }
]

module.exports = services;