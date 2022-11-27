import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import {SearchShell} from "../components/SearchShell";
import { List, ListItem, ListItemText, ListItemButton, ListItemAvatar, Paper } from "@mui/material"
import spotifyLogo from "../assets/logos/spotifyLogo.png";

export default function SpoitfySearch() {

    const [searchTerm, setSearchTerm] = useState('')
    const [activeSong, setActiveSong] = useState('');

    const selectSong = (song) => {
        setActiveSong(song);
    }

    const {
        isLoading,
        isError,
        error,
        data,
      } = useQuery({
        queryKey: [`spotifySearch-${searchTerm}`],
        queryFn: () => fetchSongs(searchTerm),
        enabled: Boolean(searchTerm)
      })


    const fetchSongs = async (search) => {
        return await axios.get(`${process.env.API_URL}/spotify-search`, { params: {track: search}})
    }

    const items = data?.data.tracks.items
    return (
        <div>
            <SearchShell service="Spotify" logo={<img height="70px" width="200px" src={spotifyLogo}/>} items={items} setSearchTerm={setSearchTerm} activeSong={activeSong}>
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
                    {items &&
                        items.map(item =>
                            <ListItem key={item.id} onMouseDown={() => selectSong(item.external_urls.spotify)}>
                                <ListItemButton
                                    sx={{width: 300}}
                                >
                                        <ListItemAvatar>
                                            <img style={{height: 40, width: 40}} alt={item.name} src={item.album.images[0].url} />
                                        </ListItemAvatar>
                                    <ListItemText primary={item.name} />
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