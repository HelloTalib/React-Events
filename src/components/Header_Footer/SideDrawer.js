import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
const SideDrawer = (props) => {
  return (
   <Drawer
    anchor ="right"
    open = {props.open}
    onClose = {() => props.onClose(false) }   >
    <List component="nav">
        <ListItem button onClick = {() => console.log('featuread')}>
            Events Start In
        </ListItem>
        <ListItem button onClick = {() => console.log('featuread')}>
            Venue Info
        </ListItem>
        <ListItem button onClick = {() => console.log('featuread')}>
            Highlight
        </ListItem>
        <ListItem button onClick = {() => console.log('featuread')}>
          Pricing
        </ListItem>
        <ListItem button onClick = {() => console.log('featuread')}>
           Location
        </ListItem>
    </List>
   </Drawer>
  )
}

export default SideDrawer
