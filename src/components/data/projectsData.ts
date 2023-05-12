
export interface projectsType {
    id: number
    title: string
    description: string
    image : string
    // image: Object
    GitHub: string
    hosted: string
  }

  const frag = "https://media.tenor.com/i7wxBWmnHBgAAAAM/spraying-perfume-piu-piu.gif"
  const panda = "https://i.pinimg.com/originals/57/3c/da/573cdaf5205bebaac51ca29273dd5514.gif";
  const pokemon = "https://64.media.tumblr.com/2601ae27b5ba321ca288a938eec42483/tumblr_pjyf3o3kQx1xcy6bso1_500.gif";
  const cinder = "https://media4.giphy.com/media/26mkhMYkitO7DoJuU/giphy.gif";
  const taxi = "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XRI4AQTRQRFHXCWBXOBS7QKUYQ.gif"
  const candy = "https://media4.giphy.com/media/Jsi0pCShyVEo2xOjtJ/giphy.gif"
  const bds = "https://media0.giphy.com/media/3o6Mbu5eURZQ5Kdfqw/giphy.gif"
  const search = "https://media2.giphy.com/media/NnSFnC428LRHaxUNzj/giphy.gif"
  const recommender ="https://media.tenor.com/ymcd4-_CA1oAAAAC/facebook-thumbs-up.gif"
  const pathfinder = "https://media3.giphy.com/media/8cTcJIxCnA6DdxYxK5/giphy.gif"
  const slai = "https://media.tenor.com/-ZgulzSdAosAAAAd/robot-pixel-art.gif"
  const laundry ="https://media4.giphy.com/media/EvNfyRC5HMVzi/giphy.gif"
  const color = "https://media.tenor.com/jLAULchMqfsAAAAC/coloring.gif"
  const wade ="https://raw.githubusercontent.com/Mazzaleen/cs1300-wade-wilds/main/src/assets/profile.gif"
  const old = "https://media1.giphy.com/media/SpopD7IQN2gK3qN4jS/giphy.gif"

export const projectsData: projectsType[] = [

    {
        id: 1,
        title: 'Fragantica',
        description: `Interactive redesign of Fragantica.com using Figma/HTML/CSS.`,
        image: frag,
        GitHub: 'https://github.com/8mzln8/Responsive-Redesign',
        hosted: 'https://8mzln8.github.io/Responsive-Redesign/index.html',
    },

    {
        id:2,
        title: 'Panda',
        description: `Multiplayer card game inspired by PANDA GAMES LTD. Utilized React,Java and Bootstrap to host.`,
        image: panda,
        GitHub: 'https://github.com/Mazzaleen/Panda-Card-Game',
        hosted: `https://www.figma.com/file/y6FxyVlCW27pOOFsfNyEGB/Panda?t=t5GRK70BX92yQTbp-0`,
      },


      {
        id: 3,
        title: 'C(T)inder',
        description: `Utilized Figma, Adobe and Flutter to design a Tinder-like app for CS Classes`,
        image: cinder,
        GitHub: '',
        hosted: 'https://www.figma.com/proto/fPEXAQZC55DWDLeRb2bE0U/Tinder-for-CS-Classes?node-id=1%3A3&starting-point-node-id=1%3A3',
      },

      {
        id: 4,
        title: 'Pokemon Markeplace',
        description: `Utilized TS,Material UI & React to create a Pokemon Marketplace.`,
        image: pokemon,
        GitHub: 'https://github.com/Mazzaleen/ts-cs1300-deployment',
        hosted: `https://mazzaleen.github.io/ts-cs1300-deployment/`,
      },

      {
        id: 5,
        title: 'NYC Taxi Data Analysis',
        description: `Utilized Used recursive algorithm in order to implement an underlying graph structure with an adjacency list on Pyret`,
        image: taxi,
        GitHub: 'https://github.com/Mazzaleen/Model-Checking',
        hosted: 'https://github.com/Mazzaleen/Model-Checking',

    
      },

      {
        id: 6,
        title: 'Captured by Candy!',
        description: `Utilized Pyret, gamestates and reactor data structures to create 2D maze game.`,
        image: candy,
        GitHub: 'https://github.com/Mazzaleen/CapturedbyCandy',
        hosted: '',

      },

      {
        id: 7,
        title: 'Brown University Dining IOS Widget',
        description: `Web-Scrapper that extracts dining menu form BDS's website and displays it on IOS Widget. 
        Utilizes Vercel Cherrio Library & Scriptable to host.`,
        image: bds,
        GitHub: 'https://github.com/Mazzaleen/Search-Engine',
        hosted: 'https://github.com/Mazzaleen/Search-Engine',
      },

      {
        id: 8,
        title: 'Search Engine',
        description: `Utilized Scala to create a search engine that ranks documents based on their relevance to a given query.`,
        image: search,
        GitHub: 'https://github.com/Mazzaleen/Search-Engine',
        hosted: 'https://github.com/Mazzaleen/Search-Engine',
        },

        {
            id: 9,
            title: 'Recommender System',
            description: "ML decision tree done in Scala that trains over data sets to produce various classifications.",
            image: recommender,
            GitHub: 'https://github.com/Mazzaleen/DecisionTree',
            hosted: 'https://github.com/Mazzaleen/DecisionTree',
        },


        {
            id: 10,
            title: 'Pathfinder',
            description: `Utilized Java to create a pathfinder that finds the shortest path between two points.`,
            image: pathfinder,
            GitHub: 'https://github.com/cs0320-f2021/project-2-j3ki5yekdmc8thpw%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-vruz5ljs9axixjk-y8meruyacyxuecby',
            hosted: 'https://github.com/cs0320-f2021/project-2-j3ki5yekdmc8thpw%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-vruz5ljs9axixjk-y8meruyacyxuecby',
        },
            

        {
            id: 11,
            title: 'Sla AI',
            description: `An Interactive UI for Slai, an AI Insurance Startup.`,
        image: slai,
        GitHub: '',
        hosted: 'https://www.figma.com/proto/oIdJCkKCWP12fRjjfAyN9U/Slai-Hifi-Mockup?node-id=239%3A149&starting-point-node-id=239%3A149',

        },

        {
            id: 12,
            title: 'Laundry @ Brown',
            description: `Laundry sucks @ Brown, here are my solutions using Figma/HTML/CSS.`,
            image: laundry,
            GitHub: 'https://github.com/8mzln8/CSCI1300-Personas-Storyboarding',
            hosted: `https://8mzln8.github.io/CSCI1300-Personas-Storyboarding/`,
        },
        {
            id: 13,
            title: 'Coloring Book',
            description: 'Utilized Python & Tensorflow to create a CNN archtiecture that predicts RGB layers on greyscale images',
            image: color,
            GitHub: 'https://github.com/Mazzaleen/CSCI-1470-Image-Colorization',
            hosted: 'https://docs.google.com/document/d/1PlDReMR7PngY8F1D3-UKFImTDqzRXvPyxBYj-hMShvA/edit',
        },
        {
            id: 14,
            title: 'Wade Wilds',
            description: "Utilized Typescript,Material UI & React to create Retro Themed Portfolio site",
            image: wade,
            GitHub: 'https://github.com/Mazzaleen/cs1300-wade-wilds',
            hosted: 'https://mazzaleen.github.io/cs1300-wade-wilds/',

        },

        {
            id: 15,
            title: 'Old Website',
            description: "Personal website created to showcase portfolio, utilizes Bootstrap, JavaScript, HTML and CSS. Utilizes GitHub Pages to host",
            image: old,
            GitHub: 'https://github.com/Mazzaleen/mazza',
            hosted: 'https://mazzaleen.github.io/mazza/',


        }
    
      

    

        ]