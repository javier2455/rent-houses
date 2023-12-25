// import house images
import House1 from './assets/img/houses/house1.png'
import House2 from './assets/img/houses/house2.png'
import House3 from './assets/img/houses/house3.png'
import House4 from './assets/img/houses/house4.png'
import House5 from './assets/img/houses/house5.png'
import House6 from './assets/img/houses/house6.png'
import House7 from './assets/img/houses/house7.png'
import House8 from './assets/img/houses/house8.png'
import House9 from './assets/img/houses/house9.png'
import House10 from './assets/img/houses/house10.png'
import House11 from './assets/img/houses/house11.png'
import House12 from './assets/img/houses/house12.png'
// import house large images
import House1Lg from './assets/img/houses/house1lg.png'
import House2Lg from './assets/img/houses/house2lg.png'
import House3Lg from './assets/img/houses/house3lg.png'
import House4Lg from './assets/img/houses/house4lg.png'
import House5Lg from './assets/img/houses/house5lg.png'
import House6Lg from './assets/img/houses/house6lg.png'
import House7Lg from './assets/img/houses/house7lg.png'
import House8Lg from './assets/img/houses/house8lg.png'
import House9Lg from './assets/img/houses/house9lg.png'
import House10Lg from './assets/img/houses/house10lg.png'
import House11Lg from './assets/img/houses/house11lg.png'
import House12Lg from './assets/img/houses/house12lg.png'

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png'
import Apartment2 from './assets/img/apartments/a2.png'
import Apartment3 from './assets/img/apartments/a3.png'
import Apartment4 from './assets/img/apartments/a4.png'
import Apartment5 from './assets/img/apartments/a5.png'
import Apartment6 from './assets/img/apartments/a6.png'
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png'
import Apartment2Lg from './assets/img/apartments/a2lg.png'
import Apartment3Lg from './assets/img/apartments/a3lg.png'
import Apartment4Lg from './assets/img/apartments/a4lg.png'
import Apartment5Lg from './assets/img/apartments/a5lg.png'
import Apartment6Lg from './assets/img/apartments/a6lg.png'

// import agents images
import Agent1 from './assets/img/agents/agent1.png'
import Agent2 from './assets/img/agents/agent2.png'
import Agent3 from './assets/img/agents/agent3.png'
import Agent4 from './assets/img/agents/agent4.png'
import Agent5 from './assets/img/agents/agent5.png'
import Agent6 from './assets/img/agents/agent6.png'
import Agent7 from './assets/img/agents/agent7.png'
import Agent8 from './assets/img/agents/agent8.png'
import Agent9 from './assets/img/agents/agent9.png'
import Agent10 from './assets/img/agents/agent10.png'
import Agent11 from './assets/img/agents/agent11.png'
import Agent12 from './assets/img/agents/agent12.png'

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House1,
    imageLg: House1Lg,
    country: 'United States',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: [
      { coin: 'USD', value: '11000' },
      { coin: 'EUR', value: '10000' },
      { coin: 'CUP', value: '2975000' }
    ],
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
      email: 'userMail@gmail.com'
    }
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House2,
    imageLg: House2Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: [
      { coin: 'USD', value: '14000' },
      { coin: 'EUR', value: '13000' },
      { coin: 'CUP', value: '3375000' }
    ],
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
      email: 'userMail@gmail.com'
    }
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House3,
    imageLg: House3Lg,
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: [
      { coin: 'USD', value: '17000' },
      { coin: 'EUR', value: '16000' },
      { coin: 'CUP', value: '4425000' }
    ],
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
      email: 'userMail@gmail.com'
    }
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House4,
    imageLg: House4Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: [
      { coin: 'USD', value: '20000' },
      { coin: 'EUR', value: '19000' },
      { coin: 'CUP', value: '5605000' }
    ],
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
      email: 'userMail@gmail.com'
    }
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House5,
    imageLg: House5Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: [
      { coin: 'USD', value: '21000' },
      { coin: 'EUR', value: '20000' },
      { coin: 'CUP', value: '7695000' }
    ],
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
      email: 'userMail@gmail.com'
    }
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House6,
    imageLg: House6Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: [
      { coin: 'USD', value: '22000' },
      { coin: 'EUR', value: '21000' },
      { coin: 'CUP', value: '8125000' }
    ],
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
      email: 'userMail@gmail.com'
    }
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: [
      { coin: 'USD', value: '20000' },
      { coin: 'EUR', value: '19000' },
      { coin: 'CUP', value: '8065000' }
    ],
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
      email: 'userMail@gmail.com'
    }
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: [
      { coin: 'USD', value: '30000' },
      { coin: 'EUR', value: '29000' },
      { coin: 'CUP', value: '12555000' }
    ],
    agent: {
      image: Agent8,
      name: 'Juana Douglass',
      phone: '0123 456 78910',
      email: 'userMail@gmail.com'
    }
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Apartament 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'United States',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: [
      { coin: 'USD', value: '40000' },
      { coin: 'EUR', value: '39000' },
      { coin: 'CUP', value: '26355000' }
    ],
    agent: {
      image: Agent9,
      name: 'Jerry Schenck',
      phone: '0123 456 78910',
      email: 'userMail@gmail.com'
    }
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House7,
    imageLg: House7Lg,
    country: 'Canada',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: [
      { coin: 'USD', value: '117000' },
      { coin: 'EUR', value: '116000' },
      { coin: 'CUP', value: '963505000' }
    ],
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
      email: 'userMail@gmail.com'
    }
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House8,
    imageLg: House8Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: [
      { coin: 'USD', value: '145000' },
      { coin: 'EUR', value: '144000' },
      { coin: 'CUP', value: '822035000' }
    ],
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
      email: 'userMail@gmail.com'
    }
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House9,
    imageLg: House9Lg,
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: [
      { coin: 'USD', value: '139000' },
      { coin: 'EUR', value: '138000' },
      { coin: 'CUP', value: '882205000' }
    ],
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
      email: 'userMail@gmail.com'
    }
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House10,
    imageLg: House10Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    price: [
      { coin: 'USD', value: '180000' },
      { coin: 'EUR', value: '170000' },
      { coin: 'CUP', value: '755265000' }
    ],
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
      email: 'userMail@gmail.com'
    }
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House11,
    imageLg: House11Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2011',
    price: [
      { coin: 'USD', value: '213000' },
      { coin: 'EUR', value: '212000' },
      { coin: 'CUP', value: '99995000' }
    ],
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
      email: 'userMail@gmail.com'
    }
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House12,
    imageLg: House12Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: [
      { coin: 'USD', value: '221000' },
      { coin: 'EUR', value: '220000' },
      { coin: 'CUP', value: '1199995000' }
    ],
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
      email: 'userMail@gmail.com'
    }
  },
  {
    id: 16,
    type: 'Apartament',
    name: 'Apartament 16',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2011',
    price: [
      { coin: 'USD', value: '21000' },
      { coin: 'EUR', value: '20000' },
      { coin: 'CUP', value: '5670000' }
    ],
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
      email: 'userMail@gmail.com'
    }
  },
  {
    id: 17,
    type: 'Apartament',
    name: 'Apartament 17',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2012',
    price: [
      { coin: 'USD', value: '32000' },
      { coin: 'EUR', value: '31000' },
      { coin: 'CUP', value: '8640000' }
    ],
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
      email: 'userMail@gmail.com'
    }
  },
  {
    id: 18,
    type: 'Apartament',
    name: 'Apartament 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',
    price: [
      { coin: 'USD', value: '38000' },
      { coin: 'EUR', value: '37000' },
      { coin: 'CUP', value: '10260000' }
    ],
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
      email: 'userMail@gmail.com'
    }
  }
]
