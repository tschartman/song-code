import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import {SearchShell} from "../components/SearchShell";
import { List, ListItem, ListItemText, ListItemButton, ListItemAvatar, Paper } from "@mui/material";
import youtubeLogo from "../assets/logos/youtubeLogo.png";

export default function YoutubeSearch() {

    const [searchTerm, setSearchTerm] = useState('')
    const [activeSong, setActiveSong] = useState('');

    const selectSong = (song) => {
        setActiveSong(`https://www.youtube.com/watch?v=${song}`);
    }

    const {
        isLoading,
        isError,
        error,
        data,
      } = useQuery({
        queryKey: [`youtubeSearch-${searchTerm}`],
        queryFn: () => fetchSongs(searchTerm),
        enabled: Boolean(searchTerm)
      })


    const fetchSongs = async (search) => {
        return await axios.get(`${process.env.REACT_APP_API_URL}/youtube-search`, { params: {track: search}})
    }

    const items = data?.data.items
    return (
        <div>
            <SearchShell items={items} logo={<img height="75px" width="300px" src={youtubeLogo}/>} service="Youtube" setSearchTerm={setSearchTerm} activeSong={activeSong}>
                <Paper elevation={3}>
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 300,
                        }}
                    >
                    {
                        items &&
                        items.map(item =>
                            <ListItem key={item.etag} onMouseDown={() => selectSong(item.id.videoId)}>
                                <ListItemButton
                                    sx={{width: 300}}
                                >
                                        <ListItemAvatar>
                                            <img style={{height: 40, width: 40}} alt={item.snippet.title} src={item.snippet.thumbnails.default.url} />
                                        </ListItemAvatar>
                                    <ListItemText primary={item.snippet.title} />
                                </ListItemButton>
                            </ListItem>
                        )
                    }
                    </List>
                </Paper>
            </SearchShell>
        </div>
    )
}