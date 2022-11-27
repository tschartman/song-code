import { Card, CardActionArea,  Grid, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

export function ServiceCard({children, route}) {

    return (
        <Card sx={{m:5}} >
            <CardActionArea sx={{p:5, height: 150, width: 290}} component={RouterLink} to={route}>
                <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
                    {children}
                </Typography>
            </CardActionArea>
        </Card>
    )
}