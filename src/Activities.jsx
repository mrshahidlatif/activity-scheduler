import React from "react";
import Activity from "./Activity";
import { Stack, Grid, Typography } from "@mui/material";

const Activities = ({ activities, onEdit, onDelete }) => {
    return (
        <Stack spacing={2} sx={{ ml: 2 }}>
            <Grid container spacing={2} sx={{ ml: 2, mt: 2 }}>
                {activities.map((activity) => (
                    <Grid item key={activity.id}>
                        <Activity
                            key={activity.id} // Assuming each activity has a unique id
                            activity={activity}
                            onEdit={() => onEdit(activity)}
                            onDelete={() => onDelete(activity.id)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};

export default Activities;
