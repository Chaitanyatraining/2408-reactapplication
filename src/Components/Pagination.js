import React, { Component } from 'react'

class Pagination extends Component {
  state = {
    usersData: [],
    pageNumber: 0
  }

  getDummyUsersData = async () => {
    const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
      {
        method: 'GET',
        headers: {
          "app-id": '633e33e98efd49504c9c7643'
        }
      }
    )
    const { data } = await response.json()
    this.setState({ usersData: data })
    console.log(this.state.usersData)
  }

  componentDidMount() {
    this.getDummyUsersData()
  }

  

  componentDidUpdate(prevsprops, prevState) {
    console.log('prevstate-->', prevState)
    if (this.state.pageNumber != prevState.pageNumber) {
      this.getDummyUsersData()
    }
  }


  handleButtonClick = (num) => {
    this.setState({ pageNumber: num })
  }


  render() {
    return (
      <center>
        <h2>Pagination</h2>
        <div className='container'>
          <div className='row'>
            {this.state.usersData.map((user) => (
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
              onClick={() => this.handleButtonClick(num)}
            >{num}</button>
          ))}
        </div>

        {/* {
            this.state.usersData.length> 0 ? (
                <div className=''>
                    
                </div>
            ) : (<p>Loading...</p>)
        } */}
      </center>
    )
  }
}

export default Pagination