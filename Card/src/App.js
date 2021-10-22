import './App.css';

function App() {
  const cardo = [
    {
        name: 'Laptop',
        price: 20000,
        descrip: 'New Condition Laptop',
        pic: 'https://images.olx.com.pk/thumbnails/184899947-240x180.jpeg'
        },
    {
        name: 'Fridge',
        price: 20000,
        descrip: 'New Condition Fridge',
        pic: 'https://images.samsung.com/is/image/samsung/p6pim/pk/rs50n3c13s8-pk/gallery/pk-side-by-side-rs50n3c13s8-pk-front-silver-thumb-468155145?$320_320_PNG$'
          },
    {
        name: 'TV',
        price: 20000,
        descrip: 'New Condition TV',
        pic :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0icbNyem8RVTkbikK-Hmgmt_kev2_PhnKMQ&usqp=CAU'
          },
    {
        name: 'Mobile',
        price: 20000,
        descrip: 'New Condition Mobile',
        pic:'data:image/jpeg;base64,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'
    },
    {
        name: 'PC',
        price: 20000,
        descrip: 'New Condition PC',
        pic: 'https://apollo-singapore.akamaized.net/v1/files/bc3rl69bj6fk-PK/image;s=300x600;q=60'
    },
    {
      name: 'LED',
      price: 20000,
      descrip: 'New Condition LED',
      pic:'https://images.olx.com.pk/thumbnails/143641098-240x180.jpeg'
  }
]
  return (
<div className='App'>
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
    {info.map((data) => {
      return (
        <div className='card'>
          <div className='tasveer'>
          <img src={data.pic} alt =""/>
          </div>
          <div className='bod'>
            <p className='title'>{data.name}</p>
            <p className='price'>{data.price}</p>
            <p className='descrip'>{data.descrip}</p>
          </div>
        </div>
      );
    })}
    </>
  );
}

export default App;