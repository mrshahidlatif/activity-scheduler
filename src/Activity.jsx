import React from "react";
import { Card, CardContent, Button, Typography, CardActions } from "@mui/material";

const Activity = ({ activity, onEdit, onDelete }) => {
    const { user, type, datetime, pitchId } = activity;

    return (
        // <Card sx={{ background: "#e3e4e6" }}>
        //     <CardContent>
        //         <h2>Type: {type}</h2>
        //         <p>Assigned To: {user}</p>
        //         <p>Datetime: {datetime}</p>
        //         <p>Pitch ID: {pitchId}</p>
        //         <Button onClick={onEdit}>Edit</Button>
        //         <Button onClick={onDelete}>Delete</Button>
        //     </CardContent>
        // </Card>
        <Card sx={{ width: 200, background: "#e3e4e6" }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Assignee: {user}
                </Typography>
                <Typography variant="h5" component="div">
                    {type}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Pitch {pitchId}
                </Typography>
                <Typography variant="body2">{datetime}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={onEdit}>Edit</Button>
                <Button onClick={onDelete}>Delete</Button>
            </CardActions>
        </Card>
    );
};

export default Activity;
