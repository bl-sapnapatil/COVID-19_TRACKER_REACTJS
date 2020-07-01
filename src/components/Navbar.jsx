import React from 'react'
import {ListItemIcon,ListItemText} from '@material-ui/core'
import '../scss/navbar.scss'
import { Home ,Users,Package,HelpCircle, Book} from 'react-feather'
class Navbar extends React.Component{
    render(){
        return(
           <div>
               <div className="navbar">
                    <div>
                        <ListItemIcon><Home/></ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </div>
                    <div>
                        <ListItemIcon><Users/></ListItemIcon>
                        <ListItemText>Demographics</ListItemText>
                    </div>
                    <div>
                        <ListItemIcon><Package/></ListItemIcon>
                        <ListItemText>Essentials</ListItemText>
                    </div>
                    <div>
                        <ListItemIcon><HelpCircle/></ListItemIcon>
                        <ListItemText>About</ListItemText>
                    </div>
                    <div>
                        <ListItemIcon><Book/></ListItemIcon>
                        <ListItemText>Blog</ListItemText>
                    </div>
               </div>               
           </div>
            
        )

    }
} 
export default Navbar