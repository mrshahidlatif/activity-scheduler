import React from "react";
import Activity from "./Activity";
import { Stack, Grid } from "@mui/material";

const Activities = ({ activities, onEdit, onDelete }) => {
    return (
        <Stack spacing={2} sx={{ ml: 2 }}>
            <Grid container spacing={2} sx={{ ml: 2, mt: 2 }}>
                {activities.map((activity) => (
                    <Grid item key={activity.id + 1}>
                        <Activity
                            key={activity.id}
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
