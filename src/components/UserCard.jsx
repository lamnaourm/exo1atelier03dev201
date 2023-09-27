import { Component } from "react";

export class UserCard extends Component {
    render() { 
        return <div className="card">
            <img src={this.props.image} alt={this.props.nom} />
            <div>
                <h1>{this.props.nom} {this.props.prenom}</h1>
                <p>{this.props.email}</p>
            </div>
        </div>;
    }
}
 
