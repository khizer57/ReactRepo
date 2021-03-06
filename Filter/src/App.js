import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material';
import './App.css';
import { useState } from 'react';


function App() {
  const [cardo,setCardo] = useState ([
    {
        name: 'Laptop',
        price: 30000,
        descrip: 'New Condition Laptop',
        pic: 'https://images.olx.com.pk/thumbnails/184899947-240x180.jpeg',
        type: 'electronics'
        },
    {
        name: 'Fridge',
        price: 50000,
        descrip: 'New Condition Fridge',
        pic: 'https://images.samsung.com/is/image/samsung/p6pim/pk/rs50n3c13s8-pk/gallery/pk-side-by-side-rs50n3c13s8-pk-front-silver-thumb-468155145?$320_320_PNG$',
        type: 'electronics'
          },
    {
        name: 'TV',
        price: 20000,
        descrip: 'New Condition TV',
        pic :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0icbNyem8RVTkbikK-Hmgmt_kev2_PhnKMQ&usqp=CAU',
        type: 'electronics'
          },
    {
        name: 'Mobile',
        price: 30000,
        descrip: 'New Condition Mobile',
        pic:'data:image/jpeg;base64,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',
        type: 'electronics'
    },
    {
        name: 'PC',
        price: 20000,
        descrip: 'New Condition PC',
        pic: 'https://apollo-singapore.akamaized.net/v1/files/bc3rl69bj6fk-PK/image;s=300x600;q=60',
        type: 'electronics'
    },
    {
      name: 'LED',
      price: 50000,
      descrip: 'New Condition LED',
      pic:'https://images.olx.com.pk/thumbnails/143641098-240x180.jpeg',
      type: 'electronics'
  },
  {
    name: 'Desk',
    price: 40000,
    descrip: 'New Condition Desk',
    pic:'https://m.media-amazon.com/images/I/71-zstyfZ+L._AC_SX466_.jpg',
    type: 'furniture'
},
{
  name: 'Cabinet',
  price: 10000,
  descrip: 'New Condition Desk',
  pic:'data:image/jpeg;base64,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',
  type: 'furniture'
},
{
  name: 'Chair',
  price: 30000,
  descrip: 'New Condition Desk',
  pic:'https://media.istockphoto.com/photos/old-wooden-chair-picture-id1288259097?b=1&k=20&m=1288259097&s=170667a&w=0&h=J6H9f5HTSNxxlf5ffiRpYZWQakQENYWXmUhg8XaBjBk=',
  type: 'furniture'
},
{
  name: 'Sofa',
  price: 10000,
  descrip: 'New Condition Sofa',
  type: 'furniture',
  pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR91IbOPvEQE5oMmfiqLBIpvpzkhUMXF1V7GQ&usqp=CAU'
}
])
const filterProduct = (e) => {
  let a = e.target.value
  let arr = cardo.filter(x=>
      x.type == a
)
  setCardo(arr)
};

  return (
<div className='App'>
    <select className='inp' onChange={(e) => filterProduct(e)}>
      <option value="electronics">Electronics</option>
      <option value="furniture">Furniture</option>
      </select>


  <div className='cardsWrapper'>
    <Card info={cardo}/>
  </div>
</div>
  );
}
function Card(props) {
  const {info} = props;
  console.log(props);
  return (
    <>
    {info.map((meta) => {
      return (
        <div className='card'>
          <div className='tasveer'>
          <img src={meta.pic} alt =""/>
          </div>
          <div className='bod'>
            <h2 className='title'>{meta.name}</h2>
            <h2 className='price'>{meta.price}</h2>
            <p className='descrip'>{meta.descrip}</p>
          </div>
        </div>
      );
    })}
    </>
  );
}

export default App;