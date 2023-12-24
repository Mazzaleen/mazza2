export interface positionType {
    id: number
    position_title: string
    company: string
    location: [string, string]
    image : string
    // image: Object
    dates: [string, string]
    website: string
    linkedin: string
  }

  export  const positionData: positionType[] = [
    {
        id: 1,
        position_title: 'IT Technician',
        company: 'Brown CIS IT Service Center',
        location: ['Providence', 'RI'],
        image: "https://mazzaleen.github.io/mazza/Images/browncis.png",
        dates: ['Jan 2020', 'May 2020'],
        website: 'https://it.brown.edu/',
        linkedin: 'https://www.linkedin.com/school/brown-university/mycompany/verification/'
    },

    {
      id: 2,
      position_title: 'North Star SDE Fellow',
      company: 'Vanguard',
      location: ['Pennsylvania', 'Remote'],
      image: "https://mazzaleen.github.io/mazza/Images/vanguard.jpeg",
      dates: ['June 2021', 'Aug 2021'],
      website: 'https://www.vanguardjobs.com/north-star-experiential-learning-program/#toggle-id-3',
      linkedin: 'https://www.linkedin.com/company/vanguard/'
  },

    {
      id: 3,
      position_title: 'Web Developer',
      company: 'Environment Council of Rhode Island',
      location: ['Providence', 'RI'],
      image: "https://mazzaleen.github.io/mazza/Images/ecri.jpeg",
      dates: ['June 2021', 'Aug 2021'],
      website: 'https://www.facebook.com/environmentcouncilofri',
      linkedin: 'https://www.linkedin.com/company/environment-council-of-rhode-island/'
  },

  {
    id: 4,
    position_title: 'Accelerate Software Intern',
    company: 'IBM',
    location: ['Providence', 'Remote'],
    image: "https://mazzaleen.github.io/mazza/Images/ibm.png",
    dates: ['June 2021', 'Aug 2021'],
    website: 'https://www.ibm.com/employment/accelerate/',
    linkedin: 'https://www.linkedin.com/company/ibm/'
},

{
  id: 5,
  position_title: 'Undergraduate Teaching Assistant - CSCIO0111',
  company: 'Brown University',
  location: ['Providence', 'RI'],
  image: "https://mazzaleen.github.io/mazza/Images/brownu.png",
  dates: ['Aug 2021', 'May 2022'],
  website: 'https://cs.brown.edu/',
  linkedin: 'https://www.linkedin.com/company/brown-university-department-of-computer-science/'

},

{
  id: 6,
  position_title: 'Product Manager',
  company: 'Full Stack at Brown',
  location: ['Providence', 'RI'],
  image: "https://media.licdn.com/dms/image/C560BAQGtghHFHJLm3Q/company-logo_200_200/0/1575749999993?e=1692230400&v=beta&t=sZiG3AYk75VYhYrQtYWGu4kXJUl6tV9OaVbdQfLsuuI",
  dates: ['Sep 2021', 'May 2022'],
  website: 'https://www.fullstackatbrown.com/',
  linkedin: 'https://www.linkedin.com/company/full-stack-at-brown/'

},

{
  id: 8,
  position_title: 'Software Engineering Intern',
  company: 'Salesforce (Marketing Cloud)',
  location: ['San Francisco', 'CA'],
  image: "https://mazzaleen.github.io/mazza/Images/salesforce.png",
  dates: ['May 2022', 'Aug 2022'],
  website: 'https://www.salesforce.com/products/marketing-cloud/customer-data-platform/',
  linkedin: 'https://www.linkedin.com/company/salesforce/'
},

{
  id: 9,
  position_title: 'Tech Fellow',
  company: 'Bloomberg LP',
  location: ['New York City', 'NY'],
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/New_Bloomberg_Logo.svg/2560px-New_Bloomberg_Logo.svg.png",
  dates: ['Nov 2022', 'Dec 2022'],
  website: 'https://www.techatbloomberg.com/',
  linkedin: 'https://www.linkedin.com/company/bloomberg/'
},

{
  id: 7,
  position_title: 'Head Teaching Assistant- CSCIO01870',
  company: 'Brown University',
  location: ['Providence', 'RI'],
  image: "https://mazzaleen.github.io/mazza/Images/brownu.png",
  dates: ['Aug 2022', 'Jan 2023'],
  website: 'https://cs.brown.edu/',
  linkedin: 'https://www.linkedin.com/company/brown-university-department-of-computer-science/'
},

{
  id: 10,
  position_title: 'Software Engineer',
  company: 'Apple', 
  location: ['Cupertino', 'CA'],
  image: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-768x432.png",
  dates: ['Dec 2023', 'Current'],
  website: 'https://beta.apple.com/',
  linkedin: 'https://www.linkedin.com/company/apple/'
},






    
    
  ]

