export interface educationType {
    id: number
    school: string
    degree: string
    grade: string
    location: [string, string]
    image : string
    dates: [string, string]
    
  }

  export  const educationData: educationType[] = [
    {
        id: 3,
        school: 'Brown University',
        degree: 'B.S. Computer Science & Economics',
        grade: 'GPA: 3.75/4.00',
        location: ['Providence', 'RI'],
        image: "https://mazzaleen.github.io/mazza/Images/brownu.png",
        dates: ['Aug 2019', 'May 2023'],
    },
    {
        id: 2,
        school: 'Khartoum International Community School',
        degree: 'IBDP',
        grade: '38/45 (7,6,5)',
        location: ['Khartoum', 'Sudan'],
        image: "https://pbs.twimg.com/profile_images/964120789539794944/JMjnw7UW_400x400.jpg",
        dates: ['Aug 2017', 'May 2019'],
    },
    {
        id: 1,
        school: 'Unity High School',
        degree: 'IGCSE (& DELF)',
        grade: '6 A*s, 2 As',
        location: ['Khartoum', 'Sudan'],
        image: "https://www.teacherhorizons.com/static/mediav2/schools/3275/images/113908.jpg",
        dates: ['Aug 2007', 'May 2017'],
    },
    

  ]