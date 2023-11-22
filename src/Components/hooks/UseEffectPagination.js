import React, {useState, useEffect} from 'react'

const UseEffectPagination = () => {
    const [usersData, setUsersData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    //useEffectHook
    useEffect(() => {
        getDummyUsersData()
        return {
   
        }
    }, [pageNumber])

    const getDummyUsersData = async () => {
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,
          {
            method: 'GET',
            headers: {
              "app-id": '633e33e98efd49504c9c7643'
            }
          }
        )
        const { data } = await response.json()
        setUsersData(data)
        console.log(usersData)
      }

    // useEffect is similar to componentDidMount

  return (
    <center>
        <h2>UseEffectPagination</h2>
        <div className='container'>
          <div className='row'>
            {usersData.map((user) => (
              <div className='col-md-6'>
                <div className='card mt-2'>
                  <div className='row'>
                    <div className='col-md-3'>
                      <img src={user.picture} className='img-fluid' />
                    </div>
                    <div className='col-md-9'>
                      <p>{user.id}</p>
                      <h5>{user.title}{user.firstName}{user.lastName}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button className='btn btn-primary mt-3 me-2'
              onClick={() => setPageNumber(num)}
            >{num}</button>
          ))}
        </div>
    </center>
  )
}

export default UseEffectPagination

