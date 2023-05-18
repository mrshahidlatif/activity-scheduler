import React from "react";
import { Card, CardContent, Button } from "@mui/material";

const Activity = ({ activity, onEdit, onDelete }) => {
    const { user, type, datetime, pitchId } = activity;

    return (
        <Card>
            <CardContent>
                <h2>{user}</h2>
                <p>Type: {type}</p>
                <p>Datetime: {datetime}</p>
                <p>Pitch ID: {pitchId}</p>
                <Button onClick={onEdit}>Edit</Button>
                <Button onClick={onDelete}>Delete</Button>
            </CardContent>
        </Card>
    );
};

export default Activity;
