import React, { Component } from 'react'

class Pagination extends Component {
    state = {
        usersData: [],
        pageNumber:0
    }

    getDummyUsersData = async () => {
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`, 
        {
            method:'GET',
            headers: {
                "app-id": '633e33e98efd49504c9c7643'
            }
        }
        )
        const {data} = await response.json()
        this.setState({usersData:data})
        console.log(this.state.usersData)
    }

    componentDidMount(){
        this.getDummyUsersData()
    }


  render() {
    return (
      <center>
        <h2>Pagination</h2>
        {
            this.state.usersData.length> 0 ? (
                <div>
                    
                </div>
            ) : (<p>Loading...</p>)
        }
      </center>
    )
  }
}

export default Pagination