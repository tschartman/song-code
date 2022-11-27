import { Grid, Typography } from "@mui/material";
import { ServiceCard } from "../components/ServiceCard";
import youtubeLogo from "../assets/logos/youtubeLogo.png";
import spotifyLogo from "../assets/logos/spotifyLogo.png";

export default function ServiceSelection() {

    return (
        <div>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{m: 5}}
            >
                <Typography variant="h3" component="h2">
                    Song Code
                </Typography>
                <ServiceCard service="Spotify" route="/spotify">
                    <img height="70px" width="200px" src={spotifyLogo}/>
                </ServiceCard>
                <ServiceCard service="Youtube" route="/youtube">
                    <img height="50px" width="200px" src={youtubeLogo}/>
                </ServiceCard>
            </Grid>
        </div>
    )
}