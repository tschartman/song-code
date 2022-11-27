import QRCode from "react-qr-code";
import { Grid, TextField, Typography } from "@mui/material"

export function SearchShell({service, items, setSearchTerm, children, activeSong, logo}) {



    const handleBlur = () => {
        setSearchTerm('')
    }

    return (
        <div>
                <Grid   
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{mt: 5}}
                >
                        {logo}
                        <TextField sx={{width: 300, mt:5}} onChange={(event) => {setSearchTerm(event.target.value)}} onBlur={handleBlur} id="outlined-basic" label="Search Tracks" variant="outlined"/>
                        {items && 
                        <div
                            style={{
                                position: `${activeSong ? 'absolute' : 'relative'}`,
                                zIndex: 3
                            }}
                        >
                            {children}
                        </div>
                        }
                    {activeSong &&
                    <QRCode
                        title={activeSong}
                        size={256}
                        style={{ height: "auto", maxWidth: "25%", width: "25%", margin: 50 }}
                        value={activeSong}
                        viewBox={`0 0 256 256`}
                    />
                    }
                </Grid>
        </div>
    )
}