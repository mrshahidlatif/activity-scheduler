import React, { useState, useEffect } from "react";
import Activities from "./Activities";
import CreateAndEditActivity from "./CreateAndEditActivity";
import axios from "axios";
import { AppBar, Grid, Button, Typography } from "@mui/material";
import WeatherForecast from "./WeatherForecast";

const App = () => {
    const [activities, setActivities] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);

    const handleEdit = (activity) => {
        console.log("handle Edit", activity);
        setSelectedActivity(activity);
        setOpen(true);
    };

    useEffect(() => {
        fetchActivities();
    }, []);

    const fetchActivities = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:5000/activities");
            setActivities(response.data);
        } catch (error) {
            console.error("Error fetching activities:", error);
        }
    };

    // const handleDelete = (activityId) => {
    //     setActivities(activities.filter((activity) => activity.id !== activityId));
    // };
    const handleDelete = async (activityId) => {
        try {
            await axios.delete(`http://127.0.0.1:5000/activities/${activityId}`);
            setActivities((prevActivities) =>
                prevActivities.filter((activity) => activity.id !== activityId)
            );
        } catch (error) {
            console.error("Error deleting activity:", error);
        }
    };

    // const handleSave = (updatedActivity) => {
    //     if (selectedActivity) {
    //         setActivities(
    //             activities.map((activity) =>
    //                 activity.id === selectedActivity.id ? updatedActivity : activity
    //             )
    //         );
    //     } else {
    //         setActivities([...activities, { ...updatedActivity, id: Date.now() }]);
    //     }
    // };
    const handleSave = async (updatedActivity) => {
        console.log("updated activity ---", updatedActivity);
        console.log("selected activity ---", selectedActivity);
        try {
            if (selectedActivity) {
                await axios.put(
                    `http://127.0.0.1:5000/activities/${selectedActivity.id}`,
                    updatedActivity
                );
                setActivities((prevActivities) =>
                    prevActivities.map((activity) =>
                        activity.id === selectedActivity.id ? updatedActivity : activity
                    )
                );
            } else {
                await axios.post("http://127.0.0.1:5000/activities", updatedActivity);
                setActivities((prevActivities) => [
                    ...prevActivities,
                    { ...updatedActivity, id: Date.now() },
                ]);
            }
            setSelectedActivity(null);
            setOpen(false);
        } catch (error) {
            console.error("Error saving activity:", error);
        }
    };

    return (
        <div>
            <AppBar position="static" color="primary" sx={{ height: "50", p: 2 }}>
                <Typography variant={"h4"}>Activity Scheduler App</Typography>
            </AppBar>
            <Grid container spacing={3} sx={{ mt: 1 }}>
                <Grid item xs={6}>
                    <Typography sx={{ ml: 4 }} variant={"h4"}>
                        Activities
                    </Typography>
                    <Button onClick={() => setOpen(true)} sx={{ ml: 4 }}>
                        Schedule New Activity
                    </Button>
                    <Activities
                        activities={activities}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant={"h4"}>Weather Forecaset</Typography>
                    <WeatherForecast />
                </Grid>
            </Grid>
            <CreateAndEditActivity
                open={open}
                onClose={() => {
                    setOpen(false);
                    setSelectedActivity(null);
                }}
                onSave={handleSave}
                activity={selectedActivity}
                activities={activities}
            />
        </div>
    );
};

export default App;
