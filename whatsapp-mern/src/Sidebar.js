import React from 'react'
import "./Sidebar.css"
import  DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import  SearchOutlinedIcon  from '@material-ui/icons/SearchOutlined';
import { Avatar, IconButton } from "@material-ui/core"
import SidebarChat from "./SidebarChat"


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://avatars.githubusercontent.com/u/61081369?s=460&u=240ee0cc43a3cf39d3566edb748446e7ad8eb481&v=4" />
               <div className="sidebar__headerRight">
               <IconButton>
                  <DonutLargeIcon />
                  </IconButton>
                  <IconButton>
                  <ChatIcon />
                  </IconButton>
                  <IconButton>
                  <MoreVertIcon />
                  </IconButton>

               </div>

            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                  <SearchOutlinedIcon />
                  <input placeholder="Search or start new chat"  
                type="text"/>
                </div>
            </div>

            <div className="sidebar__chats">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
