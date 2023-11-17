import React, { Component } from 'react'

class LifeCycleMethods extends Component {
    constructor() {
        super()
        console.log('constructor executed')
    }

    state = {
        usersData: []
    }

    componentDidMount() {
        console.log('componentdidmount executed')
        this.getUsersData()
    }

    getUsersData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()
        this.setState({ usersData: data })
        console.log(this.state.usersData)
    }

    static getDerivedStateFromProps() {
        console.log('static getderivedstatefromprops executed')
        return null
    }

    render() {
        console.log('render executed')
        return (
            <center>
                <h2>lifeCycleMethods</h2>
                {/* 
            - Mounting 
            - updating
            - unmounting
        */}
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">userName</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.usersData.length > 0 ? (
                                this.state.usersData.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                ))
                            ) : (<p>loading...</p>)


                        }
                    </tbody>
                </table>

            </center>
        )
    }
}

export default LifeCycleMethods