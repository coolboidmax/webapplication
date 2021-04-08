import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import {Media} from 'reactstrap';
import profile from './profile.jpg';

class Menu extends Component{
  
  constructor(props){
    
    super(props);
    
    this.state={
      selectedAuthor:null
      
    }
    
  }
  
  onAuthorSelect(author){
    
    this.setState({selectedAuthor:author});
    
  }
  
  renderAuthor(author){
    
    if (author != null) {
      
      return(
        <Card>
        
      <CardImg width="100%" src={author.image} className="img-fluid pro12" alt={author.name}></CardImg>
        <CardBody>
       <CardTitle> {author.name}</CardTitle>
        <h5>Price:${author.Servicepr}</h5>
        <p>{author.hobby}</p>
        
        
        </CardBody>
        
        </Card>
        
        );
      
    }
    
    else{
      
      return (
        <div>
        </div>
        );
      
    }
    
  }
  
  render(){
    
    const menu = this.props.authors.map((author)=>{
      
      return(
        
        <div className="container">
        <div className="row">
        <div key={author.id} className="col-12 col-md-5 m-1">
        <Card onclick={()=>this.onAuthorSelect(author)}>
        
        
        <CardImg width="100%" src={author.image} className="img-fluid pro12" alt={author.name}></CardImg>
        <CardBody>
        <CardTitle> <h3> {author.name}</h3></CardTitle>
        <h6><b>{author.title}</b></h6>
       <h5>Service Price:${author.Servicepr}</h5>
        <p>Hobbies:{author.hobby}</p>
        </CardBody>
        
        </Card>
        </div>
        </div>
        </div>
        );
      
    });
    
    return(
      
      <div className="container">
      <div>
           {menu}
      </div>
      
      <div className="row">
      <div className="col-12 col-md-5 m-1">
      {this.renderAuthor(this.state.selectedAuthor)}
      </div>
      
      </div>
      
      </div>
      
      );
    
  }
  
  
  
}

export default Menu;