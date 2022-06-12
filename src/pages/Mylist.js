import { useContextConsumer } from '../context/contentContext'
import { Link } from 'react-router-dom';
import { imageUrl } from '../constants/constant';
const Mylist = () => {
  const{myList}=useContextConsumer();
  document.title="Netflix-My List"
  return (
    <div className="mylist__container">
      <h1 style={{color:'white'}}>My List</h1>
      <div className="list__container">
        {myList.length>0 ?
           myList.map(v=>{
            return(
              <Link to={`/${v.id}`} key={v.id} state={{obj:v}}>
                      <div className="card__wrapper"  >
                        <img src={imageUrl+v.poster_path} alt="" />
                      </div>
                    </Link>
            )
          }):<h2 style={{color:'white',paddingTop:'2rem'}}>You have no shows in your List</h2>
        }
      </div>
    </div>
  )
}

export default Mylist